import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import './Login.scss';

export const Login: React.FC = () => {

  const [passwordType, setPasswordType] = useState<string>('password');
  const [iconPassword, setIconPassword] = useState<string>('bi bi-eye');

  return (
    <>
      <div className="container-login">
        <div className="header-login">
          <div className="img-login">
            <img src={Logo} alt="logo" />
          </div>
          <div className="title-login">Login</div>
        </div>
        <div className="body-login">
          <div className="input-email">
            <input placeholder="Login" type="text" />
          </div>
          <div className="input-password">
            <input placeholder="Senha" type={passwordType} />
            <button onClick={
              () => {
                if (iconPassword === 'bi bi-eye') {
                  setIconPassword('bi bi-eye-slash');
                  setPasswordType('text');
                } else {
                  setIconPassword('bi bi-eye');
                  setPasswordType('password');
                }
              }
            }>
              <i className={iconPassword}></i>
            </button>
          </div>
        </div>
        <div className="button-login">
          <a href="home">Acessar</a>
        </div>
      </div>
    </>
  );
};
