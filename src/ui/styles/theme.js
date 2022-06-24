import { createTheme } from "@mui/material/styles";

const createCustomTheme = (theme) => {
  const customTheme = createTheme({
    ...theme,
    palette: {
      common: {
        black: "rgba(31, 37, 51, 1)",
        white: "rgba(255, 255, 255, 1)",
      },
      primary: {
        main: "rgba(53, 151, 64, 1)",
        light: "rgba(43, 177, 89, 1)",
        dark: "rgba(79, 160, 131, 1)",
        contrastText: "rgba(255, 255, 255, 1)",
      },
      warning: {
        main: "rgba(255, 207, 85, 1)",
      },
      disable: {
        main: "rgba(53, 151, 64, 0.08)",
        contrastText: "rgba(79, 160, 131, 1)",
      },
      error: {
        main: "rgba(229, 92, 92, 1)",
        contrastText: "rgba(255, 255, 255, 1)",
      },
      info: {
        main: "rgba(239, 239, 239, 1)",
        primary: "rgba(53, 151, 64, 0,08)"
      },
      text: {
        primary: "rgba(31, 37, 51, 1)",
        secondary: "rgba(112, 115, 124, 1)",
      },
      grey: {
        ...theme.palette.grey,
        300: "rgba(239, 239, 239, 1)",
      },
      action: {
        ...theme.palette.action,
        hover: "rgba(53, 151, 64, 0.4)",
        hoverOpacity: 0.4,
        disabledBackground: "rgba(53, 151, 64, 0.08)",
        disabled: "rgba(79, 160, 131, 1)",
        active: "rgba(79, 160, 131, 1)",
      },
    },
    typography: {
      ...theme.typography,
      fontFamily: "'Lexend', sans-serif",
      h1: {
        ...theme.typography.h1,
        fontFamily: "'Lexend', sans-serif",
      },
      h2: {
        ...theme.typography.h2,
        fontFamily: "'Lexend', sans-serif",
        fontSize: "36px",
        fontWeight: "bold"
      },
      h3: {
        ...theme.typography.h3,
        fontFamily: "'Lexend', sans-serif",
        fontSize: "16px",
        lineHeight: "26px"
      },
      h4: {
        ...theme.typography.h4,
        fontFamily: "'Lexend', sans-serif",
      },
      h5: {
        ...theme.typography.h5,
        fontFamily: "'Lexend', sans-serif",
      },
      h6: {
        ...theme.typography.h6,
        fontFamily: "'Lexend', sans-serif",
      },
      subtitle1: {
        ...theme.typography.subtitle1,
        fontFamily: "'Lexend', sans-serif",
      },
      subtitle2: {
        ...theme.typography.subtitle2,
        fontFamily: "'Lexend', sans-serif",
      },
      body1: {
        ...theme.typography.body1,
        fontFamily: "'Lexend', sans-serif",
      },
      body2: {
        ...theme.typography.body2,
        fontFamily: "'Lexend', sans-serif",
      },
      button: {
        ...theme.typography.button,
        fontFamily: "'Lexend', sans-serif",
      },
      caption: {
        ...theme.typography.caption,
        fontFamily: "'Lexend', sans-serif",
      },
      overline: {
        ...theme.typography.overline,
        fontFamily: "'Lexend', sans-serif",
      },
    },
    mixins: {
      ...theme.mixins,
      wrapper: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1110px",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
      "@media (max-width: 480px)": {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  });

  return customTheme;
};

export default createCustomTheme;
