import React, { useState } from "react";
import "../cart/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { Increase, Decrease,DELETE } from "../store/reducekho";
export default function Cart() {
  const data = useSelector((state) => {
    return state.productReducer.cart;
  });
  let dispath=useDispatch()
  const hanldTang = (e) => {
    dispath(Increase(e))
  
  }
  const hanldGiam = (e) => {
 dispath(Decrease(e));
  };
  const hanlDELETE = (e) => {
    dispath(DELETE(e))
  }
  return (
    <>
      <h2>Cart Product</h2>
      <table border={1} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>id</th>
            <th>Ten sp</th>
            <th>Gia</th>
            <th>anh</th>
            <th>So luong</th>
            <th>Tong tien</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.img} alt="" />
                </td>
                <td className="btn">
                  <button onClick={() => hanldTang(item)}>+</button>
                  <span>{item.quantity}</span>{" "}
                  <button onClick={() => hanldGiam(item)}>-</button>
                  <button onClick={()=>hanlDELETE(item)}>xoa</button>
                </td>
                <td>{item.quantity * item.price}</td>
              </tr>
            );
          
          })}
        </tbody>

        <tfoot>
          <tr>
            <td>Tong Tien</td>
            <td colSpan={5}>7777777</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
