import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../profile/auth';
import logo from './img/logo.svg';
import fb from './img/fb.svg';
import whatsapp from './img/whatsapp.svg';
import instagram from './img/instagram.svg';
import youtube from './img/youtube.svg';
import $ from 'jquery';
import Alert from '../alert';
import { useTranslation } from 'react-i18next';

const NavBar = (props) => {
  const changeLanguage = (num, lang) => {
    props.changeLanguage(lang);
    $('.language-item').removeClass('active');
    $('.li-' + num).addClass('active');
  };
  const handleMenu = () => {
    $('.navbar-contacts-mobile').toggleClass('active');
    $('.menu-toggle').toggleClass('act');
  };

  const closeMenu = () => {
    $('.navbar-contacts-mobile').removeClass('active');
    $('.menu-toggle').removeClass('act');
  };

  const { t, i18n } = useTranslation();

  return (
    <div id='navbar' className='navbar'>
      <div className='wrapper'>
        <div className='logo box-hover'>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>
        <div className='navbar-contacts'>
          <div className='navbar-alert'>
            <Alert />
          </div>
          <div className='navbar-auth'>
            <Auth />
          </div>
          <div className='social-media'>
            <a href='https://wa.me/420774508743' target='_blank'>
              <img className='box-hover' src={whatsapp} />
            </a>
            <a href='https://www.facebook.com/diagnost2k/' target='_blank'>
              <img className='box-hover' src={fb} />
            </a>
            <a
              href='https://www.youtube.com/channel/UC3Z7zI8e_XEiZ6SNfw1qdTA'
              target='_blank'
            >
              <img className='box-hover' src={youtube} />
            </a>
            <a href='https://www.instagram.com/diagnost2k' target='_blank'>
              <img className='box-hover' src={instagram} />
            </a>
          </div>
          <div className='navbar-language'>
            <div
              onClick={() => changeLanguage(1, 'cz')}
              className='language-item active li-1 box-hover'
            >
              CZ
            </div>
            <div
              onClick={() => changeLanguage(2, 'en')}
              className='language-item li-2 box-hover'
            >
              EN
            </div>
            <div
              onClick={() => changeLanguage(3, 'ru')}
              className='language-item li-3 box-hover'
            >
              RU
            </div>
          </div>
          <div className='navigation'>
            <Link to='/contacts'>
              <div className='nav-item box-hover'>{t('Navbar.1')}</div>
            </Link>
            <Link to='/blog'>
              <div className='nav-item box-hover'>{t('Navbar.2')}</div>
            </Link>
            <Link to='/support#navbar'>
              <div className='nav-item box-hover'>{t('Navbar.3')}</div>
            </Link>
          </div>
        </div>
        <div onClick={() => handleMenu()} class='mobile-trigger'>
          <button class='menu-toggle'></button>
        </div>
        <div className='navbar-contacts-mobile'>
          <div className='social-media-mobile'>
            <a href='https://wa.me/420774508743' target='_blank'>
              <img className='box-hover' src={whatsapp} />
            </a>
            <a href='https://www.facebook.com/diagnost2k/' target='_blank'>
              <img className='box-hover' src={fb} />
            </a>
            <a
              href='https://www.youtube.com/channel/UC3Z7zI8e_XEiZ6SNfw1qdTA'
              target='_blank'
            >
              <img className='box-hover' src={youtube} />
            </a>
            <a href='https://www.instagram.com/diagnost2k' target='_blank'>
              <img className='box-hover' src={instagram} />
            </a>
          </div>
          <div className='navbar-language-mobile'>
            <div
              onClick={() => changeLanguage(1, 'cz')}
              className='language-item-mobile active li-1'
            >
              CZ
            </div>
            <div
              onClick={() => changeLanguage(2, 'en')}
              className='language-item-mobile li-2'
            >
              EN
            </div>
            <div
              onClick={() => changeLanguage(3, 'ru')}
              className='language-item-mobile li-3'
            >
              RU
            </div>
          </div>
          <div onClick={() => closeMenu()} className='navigation-mobile'>
            <Link to='/coding'>
              <div className='nav-item-mobile'>{t('Menu.9')}</div>
            </Link>
            <Link to='/contacts'>
              <div className='nav-item-mobile'>{t('Navbar.1')}</div>
            </Link>
            <Link to='/blog'>
              <div className='nav-item-mobile'>{t('Navbar.2')}</div>
            </Link>
            <Link to='/support'>
              <div className='nav-item-mobile'>{t('Navbar.3')}</div>
            </Link>
            <Link to='/smartphone'>
              <div className='nav-item-mobile'>{t('Menu.1')}</div>
            </Link>
            <Link to='/navigation'>
              <div className='nav-item-mobile'>{t('Menu.2')}</div>
            </Link>
            <Link to='/file-service'>
              <div className='nav-item-mobile'>{t('Menu.10')}</div>
            </Link>
            <Link to='/displays'>
              <div className='nav-item-mobile'>{t('Menu.3')}</div>
            </Link>
            <Link to='/diagnostika'>
              <div className='nav-item-mobile'>{t('Menu.4')}</div>
            </Link>
            <Link to='/parking'>
              <div className='nav-item-mobile'>{t('Menu.5')}</div>
            </Link>
            <Link to='/tuning'>
              <div className='nav-item-mobile'>{t('Menu.6')}</div>
            </Link>
            <Link to='/autopick'>
              <div className='nav-item-mobile'>{t('Menu.7')}</div>
            </Link>
            <Link to='/other'>
              <div className='nav-item-mobile'>{t('Menu.8')}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
