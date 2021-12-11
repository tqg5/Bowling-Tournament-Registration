import React from 'react';
React.forwardRef<HTMLInputElement, MyInputProps>(({defaultValue, placeholder, ...rest}, ref) => {
const withRef = (component) => {
    return React.forwardRef<HTMLInputElement, MyInputProps>(({defaultValue, placeholder, ...rest}, ref) => {

    }
};