import React from "react";
import styled from "styled-components";
import { PageHero } from "../component";

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default Checkout;
