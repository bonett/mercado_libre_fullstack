import React from "react";
import styled, { css } from "styled-components";

export const TextFieldWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    padding: 4px 0;
    position: relative;
  `}
`;

export const TextField = styled(({ ...rest }) => <input {...rest} />)`
  ${({ theme }) => css`
    border-radius: 4px;
    border: ${theme.shadow.borderBox};
    box-shadow: ${theme.shadow.box};
    color: ${theme.color.dark};
    font-size: 18px;
    height: 40px;
    padding: 4px 60px 4px 16px;
    width: calc(100% - 76px);

    &::-webkit-input-placeholder {
      color: ${theme.color.gray};
    }

    &::-moz-placeholder {
      color: ${theme.color.gray};
    }

    &:-ms-input-placeholder {
      color: ${theme.color.gray};
    }

    &:-moz-placeholder {
      color: ${theme.color.gray};
    }

    @media screen and (max-width: ${theme.maxScreen.xs}) {
      font-size: 14px;
    }
  `}
`;

export const Button = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.steel};
    background-image: none;
    border-bottom: ${theme.shadow.borderBox};
    border-radius: 0 2px 2px 0 !important;
    border-right: ${theme.shadow.borderBox};
    border-top: ${theme.shadow.borderBox};
    border-left: none;
    height: 48px;
    position: absolute;
    right: 0;
    top: 4px;
    width: 56px;

    img {
      height: 20px;
      width: 20px;
    }
  `}
`;

TextFieldWrapper.displayName = "TextFieldWrapper";
TextField.displayName = "TextField";
Button.displayName = "Button";
