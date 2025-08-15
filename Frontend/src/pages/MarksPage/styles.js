export const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      flexWrap: "wrap",
    },
  };
};

export const getCardStyles = () => {
  return {
    cardWrapper: {
      border: "1px solid #e2e1e1ff",
      background: "#fff3",
      borderRadius: "10px",
      maxWidth: "350px",
      padding: "20px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      "&:hover": {
        border: "1px solid #FFF",
        boxShadow: "0 0 15px #CCC",
        transition: "all ease 0.4s",
      },
      "& img": {
        width: "90%",
        height: "200px",
        margin: "0 auto",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        objectFit: "contain",
      },
      "& h3": {
        color: "#000",
        textAlign: "center",
      },
    },
  };
};
