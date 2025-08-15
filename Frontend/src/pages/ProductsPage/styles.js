export const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "5px",
    },
  };
};

export const getCardStyles = ({ available, color }) => {
  return {
    cardWrapper: {
      border: "1px solid #e2e1e1ff",
      position: "relative",
      maxWidth: "350px",
      height: "300px",
      justifyContent: "space-between",
      padding: "40px 15px 15px",
      width: "100%",
      display: "flex",
      "&:hover": {
        border: "1px solid #FFF",
        boxShadow: "0 0 15px #CCC",
        transition: "all ease 0.4s",
      },
      flexDirection: "column",
      gap: "10px",
      "& .cardBody": {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        "& img": {
          width: "150px",
          height: "50px",
          objectFit: "contain",
        },
        "& h5": {
          textAlign: "center",
        },
        "& .colorBlock": {
          display: "flex",
          alignItems: "center",
          gap: "10px",
          "& span": {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            backgroundColor: color,
          },
        },
      },
      "& .absolute-alert": {
        position: "absolute",
        top: "0",
        left: "0",
        width: "object-fit",
        padding: "5px",
        background: available ? "#9FDA40" : "#FF4448",
        "& p": {
          fontSize: "12px",
          color: "#fff",
          textAlign: "center",
        },
      },
    },
  };
};
