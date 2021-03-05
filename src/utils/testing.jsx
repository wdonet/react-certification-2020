import React from "react";
import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import { lightTheme } from '../providers/theme/themes';

export const renderWithTheme = (Component, theme = lightTheme) => {
    return render(
        <ThemeProvider theme={{ theme, switchTheme: jest.fn() }}>
        { Component }
        </ThemeProvider>
    );
}