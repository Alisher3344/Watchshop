import React from "react";

const Shop = () => {
  return (
    <div className="container" id="shop" style={{ marginTop: "100px" }}>
      <h5 className="H5_SHOP">Find your favourite smart watch.</h5>
      <h2 className="h2_shop">Our Latest Products</h2>
      <div className="Shop_box">
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="a1.svg" alt="" />
          </div>
          <div>
            <h3>Apple Smart I</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>
            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="a2.svg" alt="" />
          </div>
          <div>
            <h3>Apple Smart II</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>

            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>{" "}
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="a3.svg" alt="" />
          </div>
          <div>
            <h3>Apple Smart III</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>
            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="a4.svg" alt="" />
          </div>
          <div>
            <h3>Apple Smart IV</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>
            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="sp.svg" alt="" />
          </div>
          <div>
            <h3>Samsung Watch Pro</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>
            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>
        <div className="shop_card">
          <div className="img_bg">
            <img className="imgggggg" src="f.svg" alt="" />
          </div>
          <div>
            <h3>Fitbit Max 1</h3>
            <div className="stars">
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
              <img src="Vector.svg" alt="" />
            </div>
            <div className="prise">
              <sub className="old-price">$300.00</sub>
              <sup className="new-price">$255.00</sup>
            </div>
            <img className="absalute1" src="add.svg" alt="No" />
            <img className="absalute2" src="like.svg" alt="No" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="shop_button">View More</button>
      </div>
    </div>
  );
};

export default Shop;
