import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoutes = ({comp: Comp , ...restProps }) => {
    const user = useSelector(state => state.auth);
    console.log('user : ', user);
    return (
        <Route
            {...restProps}
            render={(props) =>{
                return (
                    <>
                       { user?.name ? 
                            <Comp {...props}/> :
                            <Redirect to="/login" replace/>
                       }
                    </>
                )
            }}
        />
    )
}

export default ProtectedRoutes


