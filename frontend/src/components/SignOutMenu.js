import React, { useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../api/AuthAPI';
import { COLORS } from './Colors';

const SignMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5em;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  gap: 14px;

  width: 41px;
  height: 40px;

  background: ${COLORS.cyanlight};
  border-radius: 100px;
`;

const SignoutBtn = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${COLORS.black};
  font-weight: 900;
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
`;

const AvatarText = styled.p`
  color: ${COLORS.cyandark};
  font-weight: 900;
`;

const SignOutMenu = ({ username, setUsername }) => {
  const navigate = useNavigate();
  console.log('re');
  const handleLogout = () => {
    logoutUser();
    setUsername('');
    navigate('/');
  };
  return (
    <>
      <SignMenu>
        <Avatar>
          <AvatarText>{username[0]}</AvatarText>
        </Avatar>
        <p>{username}</p>
        <SignoutBtn onClick={handleLogout}>Sign Out →</SignoutBtn>
      </SignMenu>
    </>
  );
};

export default SignOutMenu;
