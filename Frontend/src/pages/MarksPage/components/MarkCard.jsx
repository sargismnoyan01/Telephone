import { observer } from "mobx-react-lite";

import { Box, Typography } from "@mui/material";
import { getCardStyles } from "../styles";

const MarkCard = ({ image, name }) => {
  const { REACT_APP_BASE_URL } = process.env;
  const classes = getCardStyles();

  return (
    <Box sx={classes.cardWrapper}>
      <img src={`${REACT_APP_BASE_URL}/${image}`} alt={name} />
      <Typography variant="h3">{name}</Typography>
    </Box>
  );
};

export default observer(MarkCard);
