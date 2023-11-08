import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme ({ 
    config,
    colors: {
    gray: {
        50: '#f9f9f8',
        100: '#ededef',
        200: '#d3d3d2',
        300: '#b3b3b4',
        400: '#a0a0a1',
        500: '#898988',
        600: '#6c6c5c',
        700: '#202021',
        800: '#121211',
        900: '#111'
    }
    }
});

export default theme;