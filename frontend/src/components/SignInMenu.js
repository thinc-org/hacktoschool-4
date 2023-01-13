import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const SignMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5em;
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

const SignInMenu = () => {
  return (
    <>
      <SignMenu>
        <NavLink to="/sign-in">sign in</NavLink>
        <NavBtnLink to="/sign-up">sign up</NavBtnLink>
      </SignMenu>
    </>
  );
};

export default SignInMenu;
