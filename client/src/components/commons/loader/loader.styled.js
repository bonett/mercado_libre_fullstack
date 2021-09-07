import React from "react";
import styled, { css } from "styled-components";

export const LoaderContent = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    margin: 40px 0;
  `}
`;

export const LoaderWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, render }) => css`
    display: flex;
    padding: 20px 16px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 96%;
      height: 1px;
      background: ${theme.color.steel};
      top: 100%;
      left: 24px;
    }

    &:last-child {
      &:after {
        background: none;
      }
    }

    @media (max-width: ${theme.maxScreen.xs}) {
      flex-direction: column;
      height: auto;
      min-height: auto;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      flex-direction: row;
      height: 180px;
      min-height: 180px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      flex-direction: row;
      height: ${render === "DETAIL" ? "column" : "row"};
      min-height: 220px;
    }
  `}
`;

export const Media = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.maxScreen.xs}) {
      height: 180px;
      width: 100%;
      margin-top: 23px;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      height: 180px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      height: 220px;
    }
  `}
`;

export const Caption = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - 420px);

    @media (max-width: ${theme.maxScreen.xs}) {
      padding: 10px 0;
      margin-top: 40px;
      width: 100%;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      padding: 20px 16px 10px 16px;
      width: calc(100% - 360px);
    }

    @media (min-width: ${theme.minScreen.sm}) {
      width: calc(100% - 400px);
    }
  `}
`;

export const Location = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    @media (max-width: ${theme.maxScreen.xs}) {
      height: auto;
      padding: 0;
      width: 100%;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      height: 180px;
      padding: 20px 18px;
      width: 140px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      height: 220px;
      padding: 20px 0;
      width: 240px;
    }
  `}
`;

LoaderContent.displayName = "LoaderContent";
LoaderWrapper.displayName = "LoaderWrapper";
Media.displayName = "Media";
Caption.displayName = "Caption";
Location.displayName = "Location";
