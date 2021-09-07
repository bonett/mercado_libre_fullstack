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
      width: calc(92% - 0px);
      height: 1px;
      background: ${theme.color.steel};
      top: 100%;
      left: 14px;
    }

    &:last-child {
      &:after {
        background: none;
      }
    }

    @media (max-width: ${theme.maxScreen.xs}) {
      flex-direction: column;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      flex-direction: ${render === "LIST" ? "row" : "column"};
    }
  `}
`;

export const BoxWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, render }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.maxScreen.xs}) {
      justify-content: center;

      &:nth-child(1) {
        padding: 0;
        min-height: 200px;
        width: 100%;

        span {
          min-height: 180px;
        }
      }

      &:nth-child(2) {
        padding: 0;
        min-height: 180px;
        width: 100%;

        span {
          min-height: 30px;
          margin: 8px 0;
        }
      }

      &:nth-child(3) {
        padding: 0;
        min-height: 40px;
        width: 100%;

        span {
          min-height: 30px;
        }
      }
    }

    @media (min-width: ${theme.minScreen.xs}) {
      justify-content: ${render === "LIST" ? "flex-start" : "center"};

      &:nth-child(1) {
        padding: 0;
        min-height: 180px;
        width: ${render === "LIST" ? "26%" : "100%"};

        span {
          min-height: 170px;
        }
      }

      &:nth-child(2) {
        padding: ${render === "LIST" ? "0 14px" : "0"};
        min-height: 180px;
        width: ${render === "LIST" ? "44%" : "100%"};

        span {
          min-height: 30px;
          margin: 8px 0;
        }
      }

      &:nth-child(3) {
        padding: ${render === "LIST" ? "9px 0 0 0" : "0"};
        min-height: 40px;
        width: ${render === "LIST" ? "30%" : "100%"};

        span {
          min-height: 30px;
        }
      }
    }
  `}
`;

export const SkeletonLoader = styled(({ ...rest }) => <span {...rest} />)`
  ${({ theme, render }) => css`
    width: 100%;
    height: 15px;
    display: block;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      ${theme.color.steel};
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;

    @keyframes shine {
      to {
        background-position: 100% 0, 0 0;
      }
    }
  `}
`;

LoaderContent.displayName = "LoaderContent";
LoaderWrapper.displayName = "LoaderWrapper";
BoxWrapper.displayName = "BoxWrapper";
SkeletonLoader.displayName = "SkeletonLoader";
