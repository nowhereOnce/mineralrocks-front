import React from 'react'
import LoginButton from './LoginButton'

const Header = ({isAuthenticated, setIsAuthenticated, reload}) => {
    return (
        <div className='header'>
            <img className='instituto-logo' src="instituto-de-geologia-logo.png" alt="instituto-de-geologia-logo" />
            <img className='unam-logo' src="unam_logo.png" alt="unam-logo" />
            <div className='header-contenedor-texto'>
                <h2>INSTITUTO DE GEOLOGÍA</h2>
                <h4>UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</h4>
            </div>
            {!isAuthenticated && <LoginButton setIsAuthenticated={setIsAuthenticated} reload={reload} />}  
        </div>
    );
}

export default Header