export const getHeaderStyles = () => {
  return {
    wrapper: {
      background: "#272727",
      "& .navbar": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 0",
        gap: "20px",
        "& .menuItems": {
          display: "flex",
          alignItems: "center",
          gap: "20px",
          "& a": {
            fontSize: "16px",
          },
        },
      },
    },
  };
};

export const getLayoutStyles = () => {
  return {
    wrapper: {
      margin: "30px 0",
    },
  };
};
