import React from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import withRedux from '../../redux';
import profilephoto from '../../assets/images/users/d1.jpg';
import './style.css';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.svg';

const Header = (props) => {
  const showMobilemenu = () => {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  };

  const handleToggle = () => {
    document.getElementById('user-dd').classList.toggle('show');
  };
  const handleLogout = () => {
    window.localStorage.removeItem('x-sd-user');
    props.changeLoggedInFlag(false);
  };

  return (
    <header className='topbar navbarbg' data-navbarbg='skin1'>
      <Navbar className='top-navbar bg-white col' dark expand='md'>
        <div className='navbar-header' id='logobg' data-logobg='skin6'>
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <button
            className='btn-link nav-toggler d-block d-md-none'
            onClick={() => showMobilemenu()}
          >
            <i className='ti-menu ti-close' />
          </button>
          <NavbarBrand href='/'>
            <b className='logo-icon'>
              <img
                src={logodarkicon}
                style={{
                  height: '25px',
                }}
                alt='homepage'
                className='dark-logo'
              />
            </b>
            <b className='text-dark d-md-none d-lg-block'>
              <code
                style={{
                  color: '#2d7be5',
                }}
              >
                zigzag
              </code>
            </b>
          </NavbarBrand>
          <div className='col-auto d-block d-md-none'>
            <button className='btn bg-white' onClick={() => handleToggle()}>
              <i className='ti ti-user'></i>
            </button>
          </div>
        </div>
        <Nav className='ml-auto float-right' navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className='pro-pic'>
              <img
                src={profilephoto}
                alt='user'
                className='rounded-circle'
                width='31'
              />
              <span className='text-dark ml-2'>
                {props.auth?.currentUser?.name || ''}
                <i className='ti-angle-down ml-1'></i>
              </span>
            </DropdownToggle>
            <DropdownMenu right className='user-dd' id='user-dd'>
              <DropdownItem>
                <i className='ti-settings mr-1 ml-1' /> Settings
              </DropdownItem>
              <DropdownItem onClick={() => handleLogout()}>
                <i className='fa fa-power-off mr-1 ml-1' /> Logout
              </DropdownItem>
              {/* <DropdownItem divider />
              <Button color='success' className='btn-rounded ml-3 mb-2 mt-2'>
                View Profile
              </Button> */}
            </DropdownMenu>
          </UncontrolledDropdown>
          {/*--------------------------------------------------------------------------------*/}
          {/* End Profile Dropdown                                                           */}
          {/*--------------------------------------------------------------------------------*/}
        </Nav>
      </Navbar>
    </header>
  );
};
export default withRedux(Header);
