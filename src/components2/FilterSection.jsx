import styled from "styled-components";
import { useFilterContext } from "../Context/Filter_Context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../Styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-shipping">
        <Button type="button" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h3 {
    padding: 1rem 0;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .filter-search {
    input {
      padding: 0.8rem 1rem;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      outline: none;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      button {
        border: none;
        background-color:#26D0CE;
        color:black;
        text-transform: capitalize;
        cursor: pointer;
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color:#FF5733;
        }
      }

      .active {
        background-color:#FF5733 ;
        color: ${({ theme }) => theme.colors.white};
        border: 3px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .filter-company--select {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    outline: none;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    color: black;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color:#FF5733;;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .btnStyle.active {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .filter_price {
    p {
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    input {
      width: 100%;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    justify-content: center;

    .btn {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;

    .filter-category div {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .filter-color-style {
      flex-wrap: wrap;
    }
  }
`;

export default FilterSection;
