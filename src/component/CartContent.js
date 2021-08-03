import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useDispatch } from "react-redux";
// import { CLEAR_CART } from "../redux/types";

import { clearCart } from "../redux/action/AddToCartAction";

const CartContent = ({ cartProduct }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      <hr />

      {cartProduct.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <hr />

      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          clear shoping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;
