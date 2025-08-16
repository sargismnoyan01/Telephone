import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#41A0D2",
      minor: "#282A3A",
      dark: "#282A3A",
      sidebar: "#FAFAFA",
      darkText: "#1B212D",
      labelDarkGrey: "#9496A1",
      csvHover: "#FAFAFA",
      labelLightGrey: "#F3F4F8",
      itemsBorderBottom: "#ECECEC",
      disabledText: "#9B9B9B",
      disabledColor: "#F8F8F8",
      disabledBorder: "#F3F3F3",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      white: "#FFFFFF",
      minor: "#59E066",
      error: "#E05D59",
      blue: "#9DCBF5",
      grey: "#929EAE",
      lightGrey: "#AFAFAF",
      black: "#000000",
      errorBg: "#FFEFEF",
      activeBg: "#D9FFE9",
      pendingBg: "#FFF1E6",
      unactiveBg: "#D2D4DA",
      labelBgGrey: "#F3F4F8",
      tableStatusOrange: "#FDA76D",
    },
    effects: {
      shadow: "0px 1px 4px rgba(33, 44, 52, 0.1)",
      blur: "blur(5px)",
    },
    notifications: {
      successBackground: "#F0FFF1",
      successBorder: "#59E066",
      shadow: "0px 2px 15px rgba(33, 33, 52, 0.1)",
      warningBackground: "#FFF0F0",
      warningBorder: "#E05D59",
    },
  },
  typography: {
    fontFamily: ["Gilroy", "Helvetica", "Arial", "sans-serif"].join(","),
    button: {
      fontSize: "1.4rem",
      fontWeight: "500",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 10,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.MuiToggleButton-root.Mui-selected": {
            backgroundColor: "#41A0D2",
            color: "#fff",
          },
          "&.MuiToggleButton-root.Mui-disabled": {
            boxSizing: "border-box",
            padding: ".2rem 2.4rem",
            borderTopRightRadius: ".4rem !important",
            borderTopLeftRadius: ".4rem !important",
            borderBottomRightRadius: ".4rem !important",
            borderBottomLeftRadius: ".4rem !important",
            lineHeight: "2rem",
            border: "none",
            textTransform: "none",
            width: "max-content",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          alignItems: "center",
          gap: "25px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiTabScrollButton-root": {
            width: "fit-content",
            height: "min-content",
            "& svg": {
              width: "3rem",
              height: "3rem",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxWidth: "200px",
          width: "100%",
          color: "#FFFFFF",
          fontSize: "1.4rem",
          fontWeight: 500,
          borderRadius: 8,
          border: "2px solid #fff",
          textTransform: "none",
          background: "transparent",
          transition: "background 0.4s ease",
          "&:hover": {
            background: "#fff2",
          },
          ":disabled": {
            color: "#FFFFFF",
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
        outlined: {
          color: "#41A0D2",
          "&:hover": {
            background: "#ffff",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "0.4s",
          "& svg": {
            width: "1.5rem",
            height: "1.5rem",
            transition: "0.4s",
          },
          "&:hover": {
            color: "#9c27b0",
            transform: "scale(1.2)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            fontSize: 14,
            padding: "14.3px 14px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D2D4DA !important",
            borderWidth: "2px !important",
          },
          "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#41A0D2 !important",
              borderWidth: "2px !important",
            },
          },
          "& .Mui-error": {
            color: "#E05D59",
            fontSize: "13px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
              borderWidth: "2px !important",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "3.9rem",
          width: "18.9rem",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#DFDFDF",
          "&.Mui-checked": {
            color: "#41A0D2",
          },
        },
      },
    },
  },
});

export default theme;
