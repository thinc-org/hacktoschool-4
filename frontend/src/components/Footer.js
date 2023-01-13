import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import thincLogo from './pictures/thincLogo.png';
import cleverseLogo from './pictures/cleverseLogo.png';

const theme = {
  colors: COLORS,
};

const Bar = styled.nav`
  background: ${(props) => props.theme.colors.greylight};
  top: 0; /* Stick it to the top */
  padding: 1rem 20%;
  height: 140px;
  box-shadow: inset 0px -1px 0px ${theme.colors.greymedium};
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.greydark};
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const Line = styled.div`
  border-top: 1px solid green;
  border-color: ${(props) => props.theme.colors.greymedium};
`;

const Logo = styled.img`
  height: 2rem;
  width: auto;
`;

const ContentBlock = styled.div`
  justify-content: center;
  gap: 1.5em;
`;

const BottomText = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 100%;
  display: flex;
  font-weight: normal;
  justify-content: center;
  margin-top: 0.5rem;
  color: #757575;
`;

const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Bar>
          <ContentBlock>
            <Menu>
              <NavMenu>
                <NavLink to="/">home</NavLink>
                <NavLink to="/courses">course</NavLink>
              </NavMenu>
              <NavMenu>
                <Logo src={thincLogo}></Logo>
                <Logo src={cleverseLogo}></Logo>
              </NavMenu>
            </Menu>
            <Line></Line>
            <BottomText>
              ©2021 Thinc. x Cleverse. Project for hack to school
            </BottomText>
          </ContentBlock>
        </Bar>
      </ThemeProvider>
    </>
  );
};

export default Footer;
