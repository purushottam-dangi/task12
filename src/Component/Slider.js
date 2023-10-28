import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'banner-images/1550551577home-banner1.jpg',
    'banner-images/1273170038home-banner2.jpg',
    'banner-images/1922909411home-banner3.jpg',
    'banner-images/1858311846home-banner4.jpg',
    'banner-images/1952342548home-banner5.jpg'
  ];
  const captions = ['Banner 1', 'Banner 2', 'Banner 3', 'Banner 4', 'Banner 5'];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto-advance the slider every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="banner">
      <ul id="slider4">
        {images.map((image, index) => (
          <li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <img src={image} alt="" />
            <p className="caption">{captions[index]}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Slider;
