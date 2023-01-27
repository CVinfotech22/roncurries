import React, { useState } from "react";

import axios from "axios";
import "./Product.css";

const Product = () => {
  const [allProduct, setAllProduct] = useState([]);
  axios
    .get(
      "https://opencart.tentoptoday.com/index.php?route=api/product/get_epos_categories_products"
    )
    .then(function (response) {
      setAllProduct(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <div className="container main_product">
        <div>
          {allProduct.map((item, ind) => {
            console.log(item[0], "jjj");
            return (
              <div key={ind}>
                <h2 className="untread_heading">{item[0].product_category}</h2>

                {item.map((value, index) => {
                  return (
                    <p
                      className="map_product "
                      style={{ background: value.category_color }}
                    >
                      {(value.use_it = 1 ? value.model : value.epos_tile_title)}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
