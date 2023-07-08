import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ForexSlider() {
  const [forexPairs, setForexPairs] = useState([]);

  useEffect(() => {
    const fetchForexPrices = async () => {
      try {
        const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo");
        const data = await response.json();
        setForexPairs(data); 
      } catch (error) {
        console.error('Error fetching forex prices:', error);
      }
    };

    fetchForexPrices();

    const interval = setInterval(fetchForexPrices, 10000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Forex Pairs</h2>
      <Slider {...settings}>
        {forexPairs.map((forexPair, index) => (
          <div key={index}>
            <h3>NAME HERE</h3>
            <p>PRICE HERE</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

