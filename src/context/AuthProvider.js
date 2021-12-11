import React, { createContext } from 'react';
import useFirebase from '../pages/hooks/useFirebase';

export const AuthCotext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthCotext.Provider value={allContext}>
            {children}
        </AuthCotext.Provider>
    );
};

export default AuthProvider;