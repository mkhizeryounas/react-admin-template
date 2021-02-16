import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';

import withRedux from '../redux';

import bg1 from '../assets/images/background/active-bg.png';

const Fulllayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  // const { changeLoggedInFlag, setCurrentUser } = props;

  props.history.listen((location, action) => {
    if (
      window.innerWidth < 767 &&
      document
        .getElementById('main-wrapper')
        .className.indexOf('show-sidebar') !== -1
    ) {
      document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const updateDimensions = () => {
      let element = document.getElementById('main-wrapper');
      setWidth(window.innerWidth);
      if (width < 1170) {
        element.setAttribute('data-sidebartype', 'mini-sidebar');
        element.classList.add('mini-sidebar');
      } else {
        element.setAttribute('data-sidebartype', 'full');
        element.classList.remove('mini-sidebar');
      }
    };
    window.addEventListener('load', updateDimensions.bind(null));
    window.addEventListener('resize', updateDimensions.bind(null));
    return () => {
      window.removeEventListener('load', updateDimensions.bind(null));
      window.removeEventListener('resize', updateDimensions.bind(null));
    };
  }, [width]);

  // useEffect(() => {
  //   let user = window.localStorage.getItem('x-sd-user');
  //   if (user) {
  //     changeLoggedInFlag(true);
  //     setCurrentUser(JSON.parse(user));
  //   }
  // }, [changeLoggedInFlag, setCurrentUser]);

  return (
    <div
      id='main-wrapper'
      data-theme='light'
      data-layout={props.auth.isLoggedIn ? 'vertical' : ''}
      data-sidebartype='full'
      data-sidebar-position='fixed'
      data-header-position='fixed'
      data-boxed-layout='full'
    >
      {props.auth.isLoggedIn ? <Header {...props} /> : ''}
      {props.auth.isLoggedIn ? <Sidebar {...props} routes={ThemeRoutes} /> : ''}

      <div className='page-wrapper d-block'>
        <div
          className='page-content container-fluid'
          style={
            !props.auth.isLoggedIn
              ? {
                  minHeight: '92vh',
                  backgroundImage: `url(${bg1})`,
                }
              : {}
          }
        >
          <Switch>
            {ThemeRoutes.map((prop, key) => {
              if (prop.redirect) {
                if (props.auth.isLoggedIn) {
                  return (
                    <Redirect from={prop.path} to='/dashboard' key={key} />
                  );
                } else {
                  return (
                    <Redirect from={prop.path} to='/auth/signin' key={key} />
                  );
                }
              } else {
                return props.auth.isLoggedIn ? (
                  prop.protected || prop.public ? (
                    <Route
                      path={prop.path}
                      component={(props) => <prop.component {...props} />}
                      key={key}
                      exact={prop.exact ? true : false}
                    />
                  ) : (
                    ''
                  )
                ) : !prop.protected || prop.public ? (
                  <Route
                    path={prop.path}
                    component={(props) => <prop.component {...props} />}
                    key={key}
                    exact={prop.exact ? true : false}
                  />
                ) : (
                  ''
                );
              }
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default withRedux(Fulllayout);
