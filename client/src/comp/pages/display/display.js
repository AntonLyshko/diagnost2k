import React, { useState, useEffect, Fragment } from 'react';
import Footer from '../../footer/footer';
import { Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import arrow from './img/arrow.svg';
import { Link } from 'react-router-dom';
import Catalog from './pages/catalog.js';
import CatalogItem from './pages/catalog-item.js';
import PopUpForm from '../../pop-up-form/pop-up-form';
import nav1 from './img/catalog-item-1.jpg';
import nav2 from './img/catalog-item-2.jpg';
import nav3 from './img/catalog-item-3.jpg';

const Display = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({ ...state, service_name: service_name });
  };

  const page = 'display';

  useEffect(() => {
    getContent(page);
  }, []);

  const getContent = async (category) => {
    let res = await axios.get(`/api/content/${category}`);
    setState({ ...state, data: res.data, loaded: true });
  };

  const renderContent = () => {
    return state.data.map((item, index) => {
      console.log(state);
      return (
        <Fragment key={index}>
          <Link to={`/service/${page}/${item.id}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img
                    src={`https://diagnost2k.cz/${state.data[index].preview}`}
                    alt=''
                  />
                </div>
                <div className='catalog-item-text'>
                  {t(`${page}.${item.id}.0`)}
                </div>
              </div>
            </div>
          </Link>
        </Fragment>
      );
    });
  };

  const { t } = useTranslation();

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Switch>
              <Route exact path={`/displays`}>
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Displays.Title`)}
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
    <div className='displays'>
      <PopUpForm service_name={state.service_name} />
      <div className='blur'>
        {firstscreenRender()}
        <div className='main-wrapper'>
          <Fragment>
            {state.loaded ? (
              <Fragment>{renderContent()}</Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </Fragment>
          <section>
            <Switch>
              <Route exact path='/displays' component={Catalog} />
              <Route path='/displays/6wa-hybrid'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Displays.CatalogItem.1.Title')}
                  features={t('Displays.CatalogItem.1.Features')}
                  description={t('Displays.CatalogItem.1.Description')}
                />
              </Route>
              <Route path='/displays/6wb-digital'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Displays.CatalogItem.2.Title')}
                  features={t('Displays.CatalogItem.2.Features')}
                  description={t('Displays.CatalogItem.2.Description')}
                />
              </Route>
              <Route path='/displays/vividscreen-idrive'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Displays.CatalogItem.3.Title')}
                  features={t('Displays.CatalogItem.3.Features')}
                  description={t('Displays.CatalogItem.3.Description')}
                />
              </Route>
            </Switch>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Display;
