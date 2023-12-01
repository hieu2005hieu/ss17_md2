import React from 'react'
import {Route,Routes} from "react-router-dom"
import Header from './compuden/header/header'
import Cart from './compuden/cart/Cart';
import { storage } from './config/Firebase';
import Home from './compuden/home/Home';
export default function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Header" element={<Header></Header>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
      {/* <input type="file" onChange={hanldImg} />
      <button>add</button> */}
    </>
  );
}
// import React, { useState } from "react";
// import { storage } from "./config/Firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// export default function () {
//   // tạo state khởi tạo image khi change thì setImageUpload
//   const [imageUpload, setImageUpload] = useState(null);
//   const changeImage = (e) => {
//     let file = e.target.files[0];
//     setImageUpload(file);
//   };
//   const handleAdd = () => {
//     if (imageUpload == null) return;

//     const imageRef = ref(storage, `images/${imageUpload.name}`);

//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         console.log("11111111", url);
//       });
//     });
//   };
//   // Tạo storage lưu trữ từ dịch vụ của firebase
//   // const imagesListRef = ref(storage, "images/");
//   return (
//     <>
//       <h1>firebase </h1>
//       <input onChange={changeImage} type="file" />
//       <button onClick={handleAdd}>add</button>
//     </>
//   );
// }