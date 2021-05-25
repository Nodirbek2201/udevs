import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <a href="#" className="logo"><span>U</span>Devs</a>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Направления</a></li>
                        <li><a href="#about">Команда</a></li>
                        <li><a href="#facility">УслугиAngle Down</a></li>
                        <li><a href="#review">Инструменты</a></li>
                        <li><a href="#contact">Клиенты</a></li>
                        <li><a href="#post">ПортфолиоAngle Down</a></li>
                        <button>Связаться</button>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;