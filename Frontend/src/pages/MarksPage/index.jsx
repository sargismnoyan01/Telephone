import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ProductsStore from "stores/ProductsStore";
import MarkCard from "./components/MarkCard";
import { getStyles } from "./styles";

const MarksPage = () => {
  const classes = getStyles();
  const { getMarks, marks, isLoadingMarks } = ProductsStore;

  useEffect(() => {
    getMarks();
  }, []);

  return (
    Boolean(!isLoadingMarks) && (
      <Box sx={classes.wrapper}>
        {marks?.map((mark, i) => (
          <MarkCard key={i} name={mark?.name} image={mark?.image} />
        ))}
      </Box>
    )
  );
};

export default observer(MarksPage);
