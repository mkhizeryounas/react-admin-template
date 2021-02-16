import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './style.css';

const Sidebar = (props) => {
  const expandLogo = () => {
    document.getElementById('logobg').classList.toggle('expand-logo');
  };

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
  };

  return (
    <aside
      className='left-sidebar'
      id='sidebarbg'
      data-sidebarbg='skin6'
      onMouseEnter={expandLogo.bind(null)}
      onMouseLeave={expandLogo.bind(null)}
    >
      <div className='scroll-sidebar'>
        <PerfectScrollbar className='sidebar-nav'>
          <div className='container btn-container hide-menu'>
            <center>
              <button className='btn btn-success lg-btn mb-3 mt-4'>
                <i className='ti-plus sr-2'></i>{' '}
                <span className=''>New Campaign</span>
              </button>
            </center>
          </div>
          {/*--------------------------------------------------------------------------------*/}
          {/* Sidebar Menus will go here                                                */}
          {/*--------------------------------------------------------------------------------*/}
          <Nav id='sidebarnav'>
            {props.routes.map((prop, key) => {
              if (prop.redirect) {
                return null;
              } else {
                return (
                  /*--------------------------------------------------------------------------------*/
                  /* Adding Sidebar Item                                                            */
                  /*--------------------------------------------------------------------------------*/
                  <li
                    className={
                      activeRoute.bind(prop.path) +
                      (prop.pro ? ' active active-pro' : '') +
                      ' sidebar-item'
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className='sidebar-link'
                      activeClassName='active'
                      style={{
                        display: prop.hidden ? 'none' : 'block',
                      }}
                    >
                      <i className={prop.icon} />
                      <span className='hide-menu'>{prop.name}</span>
                    </NavLink>
                  </li>
                );
              }
            })}

            <li
              className={
                activeRoute.bind('/settings') +
                'active active-pro sidebar-item bottom-item'
              }
            >
              <NavLink
                to='/settings'
                className='sidebar-link'
                activeClassName='active'
              >
                <i className='ti-settings' />
                <span className='hide-menu'>Settings</span>
              </NavLink>
            </li>
          </Nav>
        </PerfectScrollbar>
      </div>
    </aside>
  );
};
export default Sidebar;
