import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    color: var(--primary);
    border: 1px solid var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    min-width: 140px;
    text-align: center;
    &:hover,
    &:focus {
    opacity: .5;
    }
`;

export default Button;