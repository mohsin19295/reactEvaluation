import React, { useEffect } from "react";
import { sortProducts, getproductsData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import  "./css/dashboard.css";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  // to get all products list on component mounts
  const [dispatch, navigate] = [useDispatch(), useNavigate()];
  const data = useSelector((state) => state.sortData);

  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    dispatch(sortProducts(e.target.value.trim()));
  };

  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      {console.log(data)}
      <div id="product-box" className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((el) => {
            return <div className="product-card" key={el.id} onClick={() => navigate(`/products/${el.id}`)}>
              <img src={el.image} alt="" />
              <h5>{el.brand}</h5>
              <h5>{el.title}</h5>
              <h6>Price: {el.price}</h6>
            </div>;
          })}
      </div>
    </>
  );
};
