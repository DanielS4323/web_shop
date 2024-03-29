import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../../GraphQL/Queries";
import CartPop from "../CartPop/CartPop";
import { useSelector } from "react-redux";
import CurrencySelect from "../../CurrencySelect/CurrencySelect";

const NavBar = () => {
  const { error, loading, data } = useQuery(GET_CATEGORIES);

  const totalItems = useSelector((state) => state.cart.totalItems);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid #5ECE7B" : "",
      paddingBottom: isActive ? "10px" : "",
      color: isActive ? "#5ECE7B" : "",
    };
  };

  return (
    <nav className={styles}>
      <ul>
        {data.categories.map((el) => (
          <li key={el.name}>
            <NavLink style={navLinkStyles} to={`/product/${el.name}`}>
              {el.name}
            </NavLink>
            
          </li>
        ))}
          <li><CurrencySelect/></li>
        <div className={styles.cart}>
          <React.Fragment>
            <CartPop />
            {totalItems !== 0 && <span>{totalItems}</span>}
          </React.Fragment>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
