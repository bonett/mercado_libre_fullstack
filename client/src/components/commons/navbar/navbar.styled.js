import React from "react";
import styled, { css } from "styled-components";

export const Navbar = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.yellow};
    box-shadow: ${theme.shadow.box};
    padding: 8px 0;
  `}
`;

export const NavbarContent = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  `}
`;

export const LogoWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 4px;
    width: 86px;
  `}
`;

export const FormWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 4px 4px 4px 20px;
    width: calc(100% - 86px);
  `}
`;

Navbar.displayName = "Navbar";
NavbarContent.displayName = "NavbarContent";
LogoWrapper.displayName = "LogoWrapper";
FormWrapper.displayName = "FormWrapper";
