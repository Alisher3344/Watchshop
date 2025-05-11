import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="container Header_div">
        <div>
          {" "}
          <h1>Discover Most Suitable Watches</h1>
          <p className="header_p">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <form action="">
            <img src="Serch.svg" alt="No img?" />
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </form>
        </div>
        <img className="watch_logo" src="watch.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
