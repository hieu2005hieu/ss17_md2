
import ReactLoading from "react-loading"; 

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../products/Products.scss"
import { addToCart } from "../store/reducekho";
export default function Products() {
   const [status, setStatus] = useState(false);
  const data = useSelector((state) => {
    return state.productReducer.producst;
  });
  
  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 1000);
  }, []);
  const dispath = useDispatch();
  

  const hanldClick = (e) => {
    dispath(addToCart(e))
  }
  return (
    <>
      {status ? (
        <div className="Products">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.img} alt="" />
                <p>Ten: {item.name}</p>
                <p>Gia: {item.price}</p>
                <button onClick={()=>hanldClick(item)}>Them vao gio hang</button>
              </div>
            );
          })}
        </div>
      ) : (
        <ReactLoading
          type={"spin"}
          color={"red"}
          height={"15%"}
          width={"15%"}
        />
      )}
    </>
  );
}
