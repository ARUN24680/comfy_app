import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { ApiAction } from "../redux/action/ApiAction";
import Product from "./Product";
import { Box, CircularProgress } from "@material-ui/core";

const FeaturedProducts = () => {
  const Featured = useSelector((state) => state.apiDataReducer);

  const dispatch = useDispatch();

  //api calling

  useEffect(() => {
    dispatch(ApiAction());
  }, []);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured Products</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center featured">
        {Featured.loading && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress style={{ fontSize: "100px" }} disableShrink />
          </Box>
        )}
        {Featured && Featured.ApiData.length > 0
          ? Featured.ApiData?.map((product) => {
              return <Product key={product.id} {...product} />;
            })
          : Featured && Featured.ApiData.length == 0 && !Featured.loading
          ? `products not found`
          : ""}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
