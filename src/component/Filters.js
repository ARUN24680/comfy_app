import React, { useEffect } from "react";
import { getUniqueValues, formatPrice } from "../utility/helpers";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import {
  FilterProductAction,
  updateFilters,
  clearFilter,
  clearFilters
} from "../redux/action/FilterProductAction";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const {
    text,
    company,
    category,
    color,
    minPrice,
    maxPrice,
    price,
    shipping
  } = useSelector((state) => state.filterProductReducer?.filter_product);
  const { all_products } = useSelector((state) => state.filterProductReducer);
  const dispatch = useDispatch();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  // console.log(categories);
  return (
    <Wrapper>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={(e) => dispatch(updateFilters(e))}
            />
          </div>

          {/* category filter*/}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={(e) => dispatch(updateFilters(e))}
                    type="button"
                    name="category"
                    // value={c}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* companies filter */}
          <div className="form-control">
            <h5>companies</h5>
            <select
              name="company"
              value={`${companies}`}
              onChange={(e) => dispatch(updateFilters(e))}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* colors filter */}
          <div className="from-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={(e) => dispatch(updateFilters(e))}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* price  filter */}
          <div className="from-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              id=""
              onChange={(e) => dispatch(updateFilters(e))}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          <div className="form-control shipping">
            <lable htmlFor="shipping"> free shipping</lable>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={(e) => dispatch(updateFilters(e))}
              checked={shipping}
            />
          </div>
          <button
            type="button"
            className="clear-btn"
            onClick={(e) => dispatch(clearFilters(e))}
          >
            clear filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default Filter;
