import { observer } from "mobx-react-lite";

import { Box, Typography } from "@mui/material";
import { getCardStyles } from "../styles";

const ProductCard = ({ product }) => {
  const { REACT_APP_BASE_URL } = process.env;
  const classes = getCardStyles({
    available: product?.in_stock,
    color: product?.color,
  });

  return (
    <Box sx={classes.cardWrapper}>
      <Box className="absolute-alert">
        <Typography>
          {product?.in_stock ? "In stock" : "Out Of stock"}
        </Typography>
      </Box>
      <Box className="cardBody">
        <img
          src={`${REACT_APP_BASE_URL}/${product?.phone_name?.image}`}
          alt={product?.phone_name?.name}
        />
        <Typography variant="h5">
          {product?.model_name} {product?.storage || 64}GB
        </Typography>
        <Typography variant="h3">{product?.price} $</Typography>
        <Box className="colorBlock">
          <Typography variant="h4">Color</Typography>
          <span></span>
        </Box>
      </Box>
      <Box className="cardFooter">
        <Typography variant="h6">
          Release Date: <span>{product?.release_date}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default observer(ProductCard);
