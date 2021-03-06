import React, { useState } from 'react';
import key from './img/screen-key.png';
import { Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';
import arrow from './img/arrow.svg';
import { Link } from 'react-router-dom';
import PopUpForm from '../../pop-up-form/pop-up-form';

const Bmwkey = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    service_name: '',
  });

  const page = 'bmwkey';

  const popUpHandle = (name) => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
    setState({ ...state, service_name: name });
  };

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Switch>
              <Route exact path={`/bmw-key`}>
                <div className='cool-fs-title'>
                  <Link to={`/others`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Bmwkey.Title`)}
                </div>
              </Route>
            </Switch>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='bmw-key'>
      <PopUpForm service_name={state.service_name} />
      {firstscreenRender()}
      <div className='main-wrapper'>
        <div className='common-text-container'>
          <div className='common-text-col'>
            <div className='cool-title'>{t('BmwKey.About_1.Title')}</div>
            <div className='common-text-element'>{t('BmwKey.About_1.1')}</div>
            <div className='common-text-element'>{t('BmwKey.About_1.2')}</div>
            <div className='common-text-element'>{t('BmwKey.About_1.3')}</div>
          </div>
          <div className='common-text-col'>
            <div className='cool-title'>{t('BmwKey.About_2.Title')}</div>
            <div className='common-text-element'>{t('BmwKey.About_2.1')}</div>
          </div>
          <div
            onClick={() => popUpHandle('BMW Mega Display Key')}
            className='btn-catalog-item-form'
          >
            {t(`Coding.ButtonRequest`)}
          </div>
        </div>
        <div className='cool-info-container'>
          <div className='cool-info-column-img'>
            <div className='cool-img'>
              <img src={key} alt='' />
              <div className='form-for-key'>
                <div className='form'>
                  <div className='contact-title form-contact-title'>
                    {t('Footer.FormTitle')}
                  </div>
                  <form>
                    <input type='text' className='input' placeholder='Name' />
                    <input type='text' className='input' placeholder='Phone' />
                    <input
                      type='submit'
                      className='input-submit'
                      value='Send'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='cool-info-column-text'>
            <div className='cool-text-container'>
              <div className='cool-title'>{t('BmwKey.MegaKey.Title')}</div>
              <div className='cool-text'>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.1')}</div>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.2')}</div>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.3')}</div>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.4')}</div>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.5')}</div>
                <div className='cool-text-element'>{t('BmwKey.MegaKey.6')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmwkey;
