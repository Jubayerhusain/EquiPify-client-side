import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return (
            <div class="flex items-center justify-center h-screen ">
            <div class="spinner animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        );
        
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={`/signIn`}></Navigate>
    )
}

export default PrivateRoute
