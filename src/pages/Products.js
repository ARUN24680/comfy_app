import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, Filter, Sort, ProductList } from "../component";
import { useDispatch } from "react-redux";

import { FilterProductAction } from "../redux/action/FilterProductAction";
const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FilterProductAction());
  }, []);
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filter />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
