import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ProductsStore from "stores/ProductsStore";
import ProductCard from "./components/ProductCard";
import { getStyles } from "./styles";

const ProductsPage = () => {
  const classes = getStyles();
  const { getProducts, products, isLoadingProducts } = ProductsStore;

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    Boolean(!isLoadingProducts) && (
      <Box sx={classes.wrapper}>
        {products?.map((product, i) => (
          <ProductCard product={product} />
        ))}
      </Box>
    )
  );
};

export default observer(ProductsPage);
