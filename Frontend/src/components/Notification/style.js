import theme from "config/theme";

const getStyles = (t) => {
  return {
    wrapper: {
      opacity: t.visible ? 1 : 0,
      background:
        t.type === "success"
          ? "rgba(240,255,241, 0.4)"
          : "rgba(255,240,240, 0.4)",
      border: `2px solid ${
        t.type === "success"
          ? theme.palette.notifications.successBorder
          : theme.palette.notifications.warningBorder
      }`,

      borderRadius: "0.4rem",
      padding: "2rem 1.6rem 2rem 2rem",
      display: "flex",
      width: "49.7rem",
      height: "6rem",
      alignItems: "center",
    },
    content: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      "& p": {
        fontWeight: 700,
      },
      fontSize: "1.4rem",
    },
    icon: {
      width: "2rem",
      height: "2rem",
      marginRight: "1.4rem",
    },
    crossIcon: {
      width: "2rem",
      height: "2rem",
      cursor: "pointer",
    },
  };
};

export default getStyles;
