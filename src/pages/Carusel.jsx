import React from "react";
import Slider from "react-slick"; // react-slick kutubxonasini import qilamiz
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carusel = () => {
  const settings = {
    dots: true, // Carousel ichida nuqtalar
    infinite: true, // Carouselni cheksiz aylantirish
    speed: 500, // Aylanish tezligi (ms)
    slidesToShow: 1, // Bir vaqtning o'zida nechta slaydni ko'rsatish
    slidesToScroll: 1, // Har safar qancha slaydni aylantirish
  };

  return (
    <div
      className="container caruserrrrrrr"
      id="car"
      style={{ marginTop: "100px" }}
    >
      <Slider {...settings} className="">
        <div>
          <div className="carusel_div">
            <div className="carusel_card">
              <img src="dev.svg" alt="No img?" />{" "}
              <div>
                <h2 className="name_card">Hamza Faizi</h2>
                <p className="aboutcard">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carusel_card">
              <img src="dav.svg" alt="No img?" />{" "}
              <div>
                <h2 className="name_card">Hamza Faizi</h2>
                <p className="aboutcard">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="carusel_div">
            <div className="carusel_card">
              <img src="dav.svg" alt="No img?" />{" "}
              <div>
                <h2 className="name_card">Hamza Faizi</h2>
                <p className="aboutcard">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carusel_card">
              <img
                style={{ width: "163px", height: "177px" }}
                src="Islom.png"
                alt="No img?"
              />{" "}
              <div>
                <h2 className="name_card">Hamza Faizi</h2>
                <p className="aboutcard">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="carusel_div">
            <div className="carusel_card">
              <img
                style={{ width: "163px", height: "177px" }}
                src="my.jpg"
                alt="No img?"
              />{" "}
              <div>
                <h2 className="name_card">Alisher Aliqulov</h2>
                <p className="aboutcard">
                  Neozu laqabi bialan faoliyat yuritmoqda.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carusel_card">
              <img
                style={{ width: "163px", height: "177px" }}
                src="barkix.png"
                alt="No img?"
              />{" "}
              <div>
                <h2 className="name_card">Hamza Faizi</h2>
                <p className="aboutcard">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <div className="stars">
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                  <img src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carusel;
