import React from 'react';
import 'antd/dist/antd.css';
import s from './Header.module.css';
import { Menu } from 'antd';
import ReactDOM from "react-dom";





class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
        <header className={s.header}>
            <div className="container">
                <div className={s.left__menu}>
                    <div className={s.logo}>
                    <img className={s.logo__svg} src="./../../assets/images/logo.svg" alt=""/>
                    </div>
                    <Menu className={s.left__btn} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item  className={s.search__btn} key="search">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Поиск
                            </a>
                        </Menu.Item>

                        <Menu.Item  className={s.bookmark__btn} key="bookmark">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Избранное
                            </a>
                        </Menu.Item>
                    </Menu>

                </div>
                <div className={s.right__menu}>
                    <Menu className={s.right__btn} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

                        <Menu.Item className={s.logout__btn} key="logout">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Выход
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>

            </div>

        </header>

        );
    }
}

// ReactDOM.render(<Header />);

// const Header = () => {
//     return (
//         <header className={s.header}>
//             <div className="container">
//                 <div className={s.left__menu}>
//                     <div className={s.logo}>
//                     <img className={s.logo__svg} src="./../../assets/images/logo.svg" alt=""/>
//                     </div>
//                 <button className={s.search__btn}>Поиск</button>
//                 <button className={s.bookmark__btn}>Избранное</button>
//                 </div>
//                 <div className={s.right__menu}>
//                 <button className={s.logout__btn}>Выйти</button>
//                 </div>
//
//             </div>
//
//         </header>
//     )
// }
//
export default Header;