import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@material-ui/core";
const ProductList = () => {
  const productList = useSelector((state) => state.filterProductReducer);
  const {
    filter_all_product,

    loading,
    grid_view,
    error
  } = productList;

  if (filter_all_product < 1) {
    <h5 style={{ textTransform: "none" }}> sorry no product matches</h5>;
  }

  if (grid_view == false) {
    return (
      <>
        {loading && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress style={{ fontSize: "100px" }} disableShrink />
          </Box>
        )}
        <ListView products={filter_all_product} />
      </>
    );
  }

  return (
    <>
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress style={{ fontSize: "100px" }} disableShrink />
        </Box>
      )}
      <GridView products={filter_all_product}> </GridView>
    </>
  );
};

export default ProductList;
