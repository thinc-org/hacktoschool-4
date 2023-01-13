import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from './Font';
import { isAutheticated, isInstructor } from '../api/AuthAPI';
import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';
import { TbAlignJustified } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import useAnalyticsEventTracker from '../util/useAnalyticsEventTracker';

const theme = {
  colors: COLORS,
};

const Bar = styled.nav`
  background: ${(props) => props.theme.colors.greylight};
  top: 0; /* Stick it to the top */
  padding: 1rem 20%;
  height: 70px;
  box-shadow: inset 0px -1px 0px ${theme.colors.greymedium};
  @media screen and (max-width: 850px) {
    padding: 1rem 5%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  max-width: 350px;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

const Menu = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 850px) {
    display: none;
  }
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.greydark};
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Line = styled.div`
  border-left: 2px solid green;
  border-color: ${(props) => props.theme.colors.greymedium};
  height: 2rem;
`;

const SmallMenu = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  display: none;
  @media screen and (max-width: 850px) {
    display: flex;
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    flex-direction: column;
    z-index: 100;
    background: ${(props) => props.theme.colors.greylight};
    width: 100%;
    min-height: 100%;
    padding: 2rem 0px;
    gap: 1.5rem;
  }
`;

const SmallHeader = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  display: none;
  @media screen and (max-width: 850px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.greylight};
    width: 100%;
  }
`;

const Navbar = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [isNavVisible, setNavVisibility] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker('home');
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Bar>
          <Menu>
            <NavMenu>
              <NavLink to="/">
                <h4>E-learning</h4>
              </NavLink>
              <Line></Line>
              <NavLink to="/" onClick={() => gaEventTracker('home')}>
                home
              </NavLink>
              {isAutheticated() && isInstructor() ? (
                <NavLink to="/dashboard">dashboard</NavLink>
              ) : (
                <NavLink to="/courses">course</NavLink>
              )}
            </NavMenu>
            {isAutheticated() ? (
              <SignOutMenu username={username} setUsername={setUsername} />
            ) : (
              <SignInMenu />
            )}
          </Menu>
          <SmallHeader>
            <div style={{ display: 'flex', width: '20%' }} onClick={toggleNav}>
              {isNavVisible ? (
                <GrClose></GrClose>
              ) : (
                <TbAlignJustified></TbAlignJustified>
              )}
            </div>
            <h4>E-learning</h4>
            {isAutheticated() ? (
              <SignOutMenu username={username} setUsername={setUsername} />
            ) : (
              ''
            )}
          </SmallHeader>
        </Bar>
        {isNavVisible && (
          <SmallMenu>
            <NavMenu>
              <NavLink to="/">home</NavLink>
              {isAutheticated() && isInstructor() ? (
                <NavLink to="/dashboard">dashboard</NavLink>
              ) : (
                <NavLink to="/courses">course</NavLink>
              )}
            </NavMenu>
            {isAutheticated() ? '' : <SignInMenu />}
          </SmallMenu>
        )}
      </ThemeProvider>
    </>
  );
};

export default Navbar;
