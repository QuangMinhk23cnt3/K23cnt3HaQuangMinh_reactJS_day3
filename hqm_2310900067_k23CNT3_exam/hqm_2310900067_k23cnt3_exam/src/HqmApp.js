import React, { useState } from "react";
import HqmProductAdd from "./components/HqmProductAdd";
import HqmProductList from "./components/HqmProductList";

const HqmApp = () => {
  const [products, setProducts] = useState([
    { hqmpid: "2310900067", hqmpName: "Ha Quang Minh", hqmpQuantity: 100, hqmpPrice: 100000 },
    { hqmpid: 2, hqmpName: "Jack", hqmpQuantity: 5000, hqmpPrice: 200000 },
    { hqmpid: 3, hqmpName: "Nguyen Khanh Phong", hqmpQuantity: 8000, hqmpPrice: 150000 },
    { hqmpid: 4, hqmpName: "Ton Lai", hqmpQuantity: 100000, hqmpPrice: 220000 },
  ]);

  // Xác định ID tiếp theo dựa trên sản phẩm cuối cùng
  const [nextId, setNextId] = useState(products.length ? products[products.length - 1].hqmpid + 1 : 1);

  const HqmaddProduct = (newProduct) => {
    const productWithId = { ...newProduct, hqmpid: nextId };
    setProducts([...products, productWithId]);
    setNextId(nextId + 1); // Tăng ID lên 1
  };

  return (
    <div className="container border mt-3">
      <h1 className="text-center">Quản lý sản phẩm</h1>
      <hr />
      <HqmProductAdd addProduct={HqmaddProduct} />
      <HqmProductList products={products} />
    </div>
  );
};

export default HqmApp;