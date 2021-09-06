import React from "react";
import styled, { css } from "styled-components";

export const Article = styled(({ ...rest }) => <article {...rest} />)`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    padding: 16px;
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

    @media (min-width: ${theme.maxScreen.xs}) {
      flex-direction: row;
      height: 220px;
      min-height: 220px;
    }
  `}
`;

export const Thumbnail = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      border-radius: 4px;
      height: auto;
      max-height: 100%;
      max-width: 80%;
    }

    @media (max-width: ${theme.maxScreen.xs}) {
      height: 180px;
      width: 100%;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      height: 180px;
      width: 140px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      height: 220px;
      width: 240px;
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

export const Price = styled(({ ...rest }) => <h3 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.dark};
    margin-bottom: 14px;

    .icon {
      margin-left: 10px;
      vertical-align: text-bottom;
    }

    @media (max-width: ${theme.maxScreen.xs}) {
      padding: 0 10px;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      font-size: 18px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      font-size: 24px;
    }
  `}
`;

export const Name = styled(({ ...rest }) => <h2 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.dark};
    font-weight: 400;
    text-transform: capitalize;

    @media (max-width: ${theme.maxScreen.xs}) {
      padding: 0 10px;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      font-size: 15px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      font-size: 18px;
    }
  `}
`;

export const Condition = styled(({ ...rest }) => <h2 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.dark};
    font-weight: 400;
    text-transform: capitalize;

    @media (max-width: ${theme.maxScreen.xs}) {
      padding: 0 10px;
    }

    @media (min-width: ${theme.minScreen.xs}) {
      font-size: 15px;
    }

    @media (min-width: ${theme.minScreen.sm}) {
      font-size: 18px;
    }
  `}
`;

export const Location = styled(({ ...rest }) => <h6 {...rest} />)`
  ${({ theme }) => css`
    @media (max-width: ${theme.maxScreen.xs}) {
      height: auto;
      padding: 0 10px;
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

export const Address = styled(({ ...rest }) => <h3 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    text-transform: capitalize;
  `}
`;

export const Icon = styled(({ ...rest }) => <span {...rest} />)`
  ${() => css`
    img {
      width: 22px;
      margin-left: 14px;
      margin-top: -5px;
    }
  `}
`;

Article.displayName = "Article";
Thumbnail.displayName = "Thumbnail";
Caption.displayName = "Caption";
Price.displayName = "Price";
Name.displayName = "Name";
Condition.displayName = "Condition";
Location.displayName = "Location";
Address.displayName = "Address";
Icon.displayName = "Icon";
