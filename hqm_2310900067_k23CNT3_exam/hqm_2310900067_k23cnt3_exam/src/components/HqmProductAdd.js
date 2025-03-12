import React, { useState } from "react";

const HqmProductAdd = ({ HqmaddProduct }) => {
  const [product, setProduct] = useState({
    hqmpName: "",
    hqmpQuantity: "",
    hqmpPrice: "",
  });

  const HqmhandleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const HqmhandleSubmit = (e) => {
    e.preventDefault();
    if (product.hqmpName && product.hqmpQuantity && product.hqmpPrice) {
      HqmaddProduct({
        ...product,
        pQuantity: Number(product.hqmpQuantity),
        pPrice: Number(product.hqmpPrice) * 1000, // Nhân với 1.000
      });
      setProduct({ hqmpName: "", hqmpQuantity: "", hqmpPrice: "" });
    }
  };

  return (
    <div className="text-center">
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={HqmhandleSubmit}>
        <input type="text" name="hqmpName" placeholder="Tên sản phẩm" value={product.hqmpName} onChange={HqmhandleChange} required />
        <input type="number" name="hqmpQuantity" placeholder="Số lượng" value={product.hqmpQuantity} onChange={HqmhandleChange} required />
        <input type="number" name="hqmpPrice" placeholder="Giá (nghìn VND)" value={product.hqmpPrice} onChange={HqmhandleChange} required />
        <button className='btn btn-primary' type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default HqmProductAdd;