import React from 'react';
import  '../Style/LoginStyle.css';
const LoginForm = () => {
    return (
        <div className="login-wr">
            <h2>Авторизация</h2>
            <div className="form">
                <form>
                    <input type="email" placeholder="Пользователь"/>
                    <input type="password" placeholder="Пароль"/>
                    <button onClick="window.location.assign('/Profile/Profile')">Вход</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;