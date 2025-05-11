import React from "react";

const Type = () => {
  return (
    <div className="container card_box">
      <div className="card">
        <img src="apple.svg" alt="" />
        <div>
          <h2 className="card_h2">Apple</h2>
          <p className="card_p">
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
      <div className="card">
        <img src="mi.svg" alt="" />
        <div>
          <h2 className="card_h2">Xiaomi</h2>
          <p className="card_p">Xiaomi smart watches are produced by MI company.</p>
        </div>
      </div>
      <div className="card">
        <img src="bit.svg" alt="" />
        <div>
          <h2 className="card_h2">FitBit</h2>
          <p className="card_p">
            FitBit smart watches are best for there health and fitness features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Type;
