import React from "react";
import styled, { css } from "styled-components";

export const Article = styled(({ ...rest }) => <article {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    display: grid;
    padding: 30px;
    margin: 10px 0 20px 0;

    @media (max-width: ${theme.maxScreen.md}) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
        "main"
        "sd";
    }

    @media (min-width: ${theme.minScreen.md}) {
      grid-template-columns: repeat(10, 1fr);
      grid-template-areas: "main main main main main main main sd sd";
    }
  `}
`;

export const MediaWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    grid-area: main;

    @media (max-width: ${theme.maxScreen.sm}) {
      padding-right: 0;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      padding-right: 20px;
    }
  `}
`;

export const Cover = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 4px;

    @media (max-width: ${theme.maxScreen.sm}) {
      height: 300px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      height: 400px;
    }
  `}
`;

export const Description = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    width: 100%;
  `}
`;

export const Heading = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.dark};
    font-size: 28px;
    padding: 20px 0;
  `}
`;

export const Detail = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    font-size: 16px;
    font-weight: 400;
  `}
`;

export const DetailInfoWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    grid-area: sd;

    @media (max-width: ${theme.maxScreen.sm}) {
      margin-top: 14px;
      margin-bottom: 0;
      width: calc(100% + 0);
    }

    @media (min-width: ${theme.minScreen.md}) {
      margin-top: 0;
      margin-bottom: 2px;
      width: calc(100% + 90px);
    }
  `}
`;

export const Shell = styled(({ ...rest }) => <h6 {...rest} />)`
  ${() => css`
    font-size: 14px;
    margin-bottom: 2px;
  `}
`;

export const Name = styled(({ ...rest }) => <h3 {...rest} />)`
  ${() => css`
    font-size: 24px;
    font-weight: 500;
  `}
`;

export const Price = styled(({ ...rest }) => <h4 {...rest} />)`
  ${() => css`
    font-size: 46px;
    font-weight: 400;
    padding: 14px 0;
  `}
`;

export const Button = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.blue};
    border-radius: 4px;
    box-shadow: ${theme.shadow.box};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.blue};
    font-size: 16px;
    height: 44px;
    padding: 6px 10px;
    text-transform: capitalize;
    width: 100%;
  `}
`;

Article.displayName = "Article";
MediaWrapper.displayName = "MediaWrapper";
Cover.displayName = "Cover";
DetailInfoWrapper.displayName = "DetailInfoWrapper";
Description.displayName = "Description";
Heading.displayName = "Heading";
Detail.displayName = "Detail";
Shell.displayName = "Shell";
Name.displayName = "Name";
Price.displayName = "Price";
Button.displayName = "Button";
