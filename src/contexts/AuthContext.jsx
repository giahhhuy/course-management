import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const clearError = () => setError('');

  // Sign up with email/password
  const signup = async (email, password, name) => {
    try {
      clearError();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      return userCredential.user;
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  // Login with email/password
  const login = async (email, password) => {
    try {
      clearError();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      clearError();
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      clearError();
      await signOut(auth);
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      clearError();
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  // Update profile
  const updateUserProfile = async (data) => {
    try {
      clearError();
      await updateProfile(currentUser, data);
      setCurrentUser({ ...currentUser, ...data });
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        setError('Email đã được sử dụng. Vui lòng đăng nhập hoặc sử dụng email khác.');
        break;
      case 'auth/invalid-email':
        setError('Email không hợp lệ.');
        break;
      case 'auth/operation-not-allowed':
        setError('Đăng nhập bằng Google không được bật.');
        break;
      case 'auth/weak-password':
        setError('Mật khẩu quá yếu. Vui lòng sử dụng mật khẩu mạnh hơn.');
        break;
      case 'auth/user-disabled':
        setError('Tài khoản này đã bị vô hiệu hóa.');
        break;
      case 'auth/user-not-found':
        setError('Không tìm thấy tài khoản với email này.');
        break;
      case 'auth/wrong-password':
        setError('Mật khẩu không chính xác.');
        break;
      case 'auth/too-many-requests':
        setError('Quá nhiều yêu cầu. Vui lòng thử lại sau.');
        break;
      default:
        setError('Đã xảy ra lỗi. Vui lòng thử lại.');
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    error,
    clearError,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 