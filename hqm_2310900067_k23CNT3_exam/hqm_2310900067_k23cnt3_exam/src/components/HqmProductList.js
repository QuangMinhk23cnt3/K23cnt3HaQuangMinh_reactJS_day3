import React from "react";

const HqmProductList = ({ products }) => {
  return (
    <div>
      <h2 className="text-center">Danh sách sản phẩm</h2>
      <table border="3" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá (nghìn VND)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.hqmpid}>
              <td>{product.hqmpid}</td>
              <td>{product.hqmpName}</td>
              <td>{product.hqmpQuantity}</td>
              <td>{(product.hqmpPrice / 1000).toLocaleString()}K</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HqmProductList;