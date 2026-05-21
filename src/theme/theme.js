import { createTheme } from "@mui/material/styles";

const customShadows = [
  "none",
  "0px 1px 2px 0px rgba(0,0,0,0.25)",
  "0px 1px 4px 0px rgba(0,0,0,0.30)",
  "0px 2px 4px 0px rgba(0,0,0,0.35)",
  "0px 2px 6px 0px rgba(0,0,0,0.40)",
  "0px 4px 8px 0px rgba(0,0,0,0.45)",
  "0px 6px 12px 0px rgba(0,0,0,0.50)",
  "0px 8px 16px 0px rgba(0,0,0,0.55)",
  "0px 12px 24px 0px rgba(0,0,0,0.60)",
  "0px 16px 32px 0px rgba(0,0,0,0.65)",
  "0px 20px 40px 0px rgba(0,0,0,0.70)",
];

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      light: "#FF7A57",
      main: "#FE572A",
      dark: "#D9471F",
      contrastText: "#FFFFFF",
    },

    secondary: {
      light: "#FFB199",
      main: "#FF8A65",
      dark: "#E66A4A",
      contrastText: "#FFFFFF",
    },

    info: {
      light: "#7DD3FC",
      main: "#38BDF8",
      dark: "#0284C7",
      contrastText: "#FFFFFF",
    },

    success: {
      light: "#86EFAC",
      main: "#22C55E",
      dark: "#15803D",
      contrastText: "#FFFFFF",
    },

    warning: {
      light: "#FCD34D",
      main: "#F59E0B",
      dark: "#B45309",
      contrastText: "#FFFFFF",
    },

    error: {
      light: "#FCA5A5",
      main: "#EF4444",
      dark: "#B91C1C",
      contrastText: "#FFFFFF",
    },

    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },

    background: {
      default: "#1B1B1B",
      paper: "#242424",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
      disabled: "#6B7280",
    },

    divider: "rgba(255,255,255,0.08)",
  },

  typography: {
    fontFamily: [
      "Poppins",
      "IBM Plex Sans Arabic",
      "sans-serif",
    ].join(","),

    h1: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 700,
    },

    h2: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 700,
    },

    h3: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 600,
    },

    h4: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 600,
    },

    h5: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 600,
    },

    h6: {
      fontFamily: [
        "Gilroy",
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      fontWeight: 600,
    },

    subtitle1: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },

    subtitle2: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },

    body1: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },

    body2: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },

    button: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
      textTransform: "none",
      fontWeight: 600,
    },

    caption: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },

    overline: {
      fontFamily: [
        "Poppins",
        "IBM Plex Sans Arabic",
        "sans-serif",
      ].join(","),
    },
  },

  shadows: customShadows,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#1B1B1B",
          color: "#FFFFFF",
          fontFamily: [
            "Poppins",
            "IBM Plex Sans Arabic",
            "sans-serif",
          ].join(","),
        },

        "*::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },

        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#FE572A",
          borderRadius: "10px",
        },

        "*::-webkit-scrollbar-track": {
          backgroundColor: "#2A2A2A",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#242424",
          border: "1px solid rgba(255,255,255,0.05)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.05)",
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },

        icon: {
          color: "#B3B3B3",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "rgba(254, 87, 42, 0.12)",
          },

          "&.Mui-selected": {
            backgroundColor: "rgba(254, 87, 42, 0.18)",
          },

          "&.Mui-selected:hover": {
            backgroundColor: "rgba(254, 87, 42, 0.24)",
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },

        standardInfo: {
          backgroundColor: "rgba(56, 189, 248, 0.15)",
          color: "#7DD3FC",
        },

        standardSuccess: {
          backgroundColor: "rgba(34, 197, 94, 0.15)",
          color: "#86EFAC",
        },

        standardWarning: {
          backgroundColor: "rgba(245, 158, 11, 0.15)",
          color: "#FCD34D",
        },

        standardError: {
          backgroundColor: "rgba(239, 68, 68, 0.15)",
          color: "#FCA5A5",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 18,
          paddingBlock: 10,
          fontWeight: 600,
        },

        containedPrimary: {
          backgroundColor: "#FE572A",
          color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "#E64A22",
          },
        },

        outlinedPrimary: {
          borderColor: "#FE572A",
          color: "#FE572A",

          "&:hover": {
            borderColor: "#FF7A57",
            backgroundColor: "rgba(254, 87, 42, 0.08)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
          borderRadius: 12,

          "& fieldset": {
            borderColor: "rgba(255,255,255,0.08)",
          },

          "&:hover fieldset": {
            borderColor: "#FE572A",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#FE572A",
          },
        },

        input: {
          color: "#FFFFFF",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#B3B3B3",

          "&.Mui-focused": {
            color: "#FE572A",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: [
            "Poppins",
            "IBM Plex Sans Arabic",
            "sans-serif",
          ].join(","),
        },
      },
    },
  },
});

export default theme;