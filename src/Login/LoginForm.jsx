import React from 'react';
import  '../Style/LoginStyle.css';
class LoginForm extends React.Component {
    render(){
        const {onButtonClick} = this.props;
    return (
        <div className="login-wr">
            <h2>Авторизация</h2>
            <div className="form">
                <form>
                    <input type="email" placeholder="Пользователь"/>
                    <input type="password" placeholder="Пароль"/>
                    <button onClick={onButtonClick}>Вход</button>
                </form>
            </div>
        </div>
    );
}
}
export default LoginForm;