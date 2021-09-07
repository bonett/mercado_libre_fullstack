/* eslint-disable */
import React from "react";
import styled, { css } from "styled-components";

export const NotFoundContent = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 320px;
    padding: 40px;
  `}
`;

export const NotFoundMedia = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    margin: 0;
    text-align: center;
  `}
`;

export const NotFoundMessage = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    text-align: center;
  `}
`;

export const NotFoundText = styled(({ ...rest }) => <h5 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.dark};
    font-size: 20px;
    margin: 20px 0;
  `}
`;

export const NotFoundButton = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.blue};
    border-radius: 4px;
    box-shadow: ${theme.shadow.box};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.blue};
    font-size: 16px;
    height: 44px;
    padding: 6px 24px;
    text-transform: capitalize;
  `}
`;

NotFoundContent.displayName = "NotFoundContent";
NotFoundMedia.displayName = "NotFoundMedia";
NotFoundMessage.displayName = "NotFoundMessage";
NotFoundText.displayName = "NotFoundText";
NotFoundButton.displayName = "NotFoundButton";
