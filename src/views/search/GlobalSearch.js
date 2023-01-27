import React from "react";
import "./Search.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

const GlobalSearch = () => {
  return (
    <>
      <div className="container search__sales">
        <div className=" input__search">
          <input id="search" type="text" name="" placeholder="Search" />
          <button className="search_btn">SEARCH</button>
        </div>
        <div className="mode_div">
          <input
            type="text"
            name=""
            id=""
            placeholder="Scan Barcode"
            className="sales__mode"
          />
          <button className="btn_for_sales">Sales Mode</button>
        </div>
        <div className="main_shop">
          <p>
            <ShoppingCartOutlined className="cart_outlined" />
          </p>
          <p>
            0 item(s) : £0.00 <br />{" "}
            <span className="groups_css">Groups : 0</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GlobalSearch;
