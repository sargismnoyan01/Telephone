export const getStyles = (bgImg) => {
  return {
    wrapper: {
      width: "100vw",
      height: "100vh",
      backgroundReapet: "no-reapet",
      backgroundSize: "cover",
      background: `
        linear-gradient(to bottom right, rgba(79,70,229, 0.9), rgba(129,140,248,0.7), rgba(6,182,212, 0.6)),
        url(${bgImg}) no-repeat center/cover
      `,
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
      alignItems: "center",
      textAlign: "center",
      "& form": {
        width: "100%",
      },
    },
    contentHeader: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& a": {
        fontSize: "16px",
      },
      "& h1": {
        color: "#fff",
        marginBottom: "1rem",
      },
    },
    formContent: {
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
      alignItems: "center",
      "& button": {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    width: "100%",
    inputField: {
      width: "300px",
      "& input": {
        fontSize: 14,
        color: "#fff",
        "&::placeholder": {
          color: "#fff",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff !important",
      },
    },
  };
};
