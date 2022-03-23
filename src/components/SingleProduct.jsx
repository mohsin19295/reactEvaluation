import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClickedSingleProduct } from "../Redux/actions";
import { useEffect } from "react";
import "./css/singleProduct.css"


export const SingleProductList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedData);
  const params = useParams();

  useEffect(() => {
    // make a request to get the details
    dispatch(getClickedSingleProduct(params.id));
  }, []);

  return (
    <div id="singleContainer">
    <img src={data.image} alt={data.title} />
    <div id="singleStyleDiv">
      <h2 className="singleStyle">{data.title}</h2>
      <h3 className="singleStyle">Rs. {data.price}</h3>
      <div className="singleStyle">
     <p><strong>Brand:</strong>  {data.brand}</p>
      <p><strong>Category:</strong> {data.category}</p>
    </div>
      {console.log(data)}
    </div>
  </div>
  );
}

