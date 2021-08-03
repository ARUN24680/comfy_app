import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, StaticRouter } from "react-router-dom";
import { CartContent, PageHero } from "../component";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.addToCartReducer);
  console.log(cartData);
  const { cart } = cartData;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2> your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent cartProduct={cart} />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Cart;
