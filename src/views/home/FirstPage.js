import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <>
      <div className="container-fluid " style={{ background: "#eee" }}>
        <div className="container">
          <div className="main__layout">
            <div className="main__layout_one">
              <p className="home_outline">
                <HomeOutlined />
              </p>
              <p className="about_outline">About </p>
              <span className="staright_line">|</span>
              <p className="about_outline"> Contact </p>
              <span className="staright_line">|</span>
              <p className="about_outline">Delivery </p>
            </div>
            <div className="main__layout_one">
              <p className="phone_outline">
                <PhoneOutlined />
              </p>
              <p className="number_outline">0127867378</p>
              <p className="number_outline_one">
                <MailOutlined style={{ paddingRight: "8px" }} />
              </p>
              <p className="sales_roncurrie">sales@roncurrie.co.uk</p>
            </div>
            <div>
              <p className="akash_mail">akash9958@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
