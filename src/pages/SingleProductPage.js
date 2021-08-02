import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { formatPrice } from "../utility/helpers";

import styled from "styled-components";

import { useSelector } from "react-redux";
import PageHero from "../component/PageHero";
import { ProductImages } from "../component";
import { Stars } from "../component";
import { AddToCart } from "../component";
import { Box, CircularProgress } from "@material-ui/core";

const SingleProductPage = () => {
  const single_Product_ApiData = useSelector(
    (state) => state.singleProductReducer
  );
  
  const { singleProduct, error, loading } = single_Product_ApiData;

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, []);

  return (
    <Wrapper>
      <PageHero title={name} product={singleProduct} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>

        {loading && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress style={{ fontSize: "100px" }} disableShrink />
          </Box>
        )}

        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}desc</p>
            <p className="info">
              <span>Available:</span>
              {stock > 0 ? "stock Available" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU:</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
