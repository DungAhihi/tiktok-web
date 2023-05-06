import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';
import Search from '../Search';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import config from '~/config';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handlechange
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@dung',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const [theme, setTheme] = useState('Light');
    const handleMode = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    };

    useEffect(() => {
        if (theme === 'Dark') {
            window.document.documentElement.classList.add('dark');
            window.document.documentElement.classList.remove('light');
        } else {
            window.document.documentElement.classList.add('light');
            window.document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo.default} alt="tiktok" />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content={theme === 'Light' ? 'Light' : 'Dark'} placement="bottom">
                                <button className={cx('action-btn')} onClick={handleMode}>
                                    {theme === 'Light' ? (
                                        <FontAwesomeIcon className={cx('theme-mode')} icon={faSun} />
                                    ) : (
                                        <FontAwesomeIcon className={cx('theme-mode')} icon={faMoon} />
                                    )}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="data:image/jpeg;base64,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"
                                className={cx('user-avatar')}
                                alt="Ảnh cá nhân"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
