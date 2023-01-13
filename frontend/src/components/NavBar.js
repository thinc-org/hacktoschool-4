import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from './Font';

const theme = {
  colors: COLORS,
};

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.greylight};
  top: 0; /* Stick it to the top */
  padding: 1rem 20%;
  height: 70px;
  box-shadow: inset 0px -1px 0px ${theme.colors.greymedium};
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
`;

const SignMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5em;
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

const NavBtnLink = styled(Link)`
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.cyandark};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.cyandark};
  }
`;

const Line = styled.div`
  border-left: 2px solid green;
  border-color: ${(props) => props.theme.colors.greymedium};
  height: 2rem;
`;

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav>
          <Menu>
            <NavMenu>
              <NavLink to="/">
                <h4>E-learning</h4>
              </NavLink>
              <Line></Line>
              <NavLink to="/">home</NavLink>
              <NavLink to="/courses">course</NavLink>
            </NavMenu>
            <SignMenu>
              <NavLink to="/sign-in">sign in</NavLink>
              <NavBtnLink to="/sign-up">sign up</NavBtnLink>
            </SignMenu>
          </Menu>
        </Nav>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
