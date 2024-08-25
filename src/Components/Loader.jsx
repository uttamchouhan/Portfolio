// src/components/ImageLoader.js
import React, { useState, useEffect } from 'react';
import { tech_skill } from '../assets/techicon.js';
import skill1 from '../assets/icons8-html-480.png';
import skill2 from '../assets/icons8-css-480.png';
import skill3 from '../assets/icons8-javascript-480.png';
import skill4 from '../assets/icons8-react-js-250.png';
import skill5 from '../assets/icons8-tailwind-css-480.png';
import skill6 from '../assets/icons8-mysql-240.png';
import skill7 from '../assets/icons8-mongodb-480.png';
import skill8 from '../assets/icons8-express-js-480.png';
import skill9 from '../assets/icons8-node-js-240.png';
import skill10 from '../assets/icons8-java-480.png'
import skill11 from '../assets/icons8-docker-240.png';
import skill12 from '../assets/icons8-aws-480.png';
import skill13 from '../assets/icons8-git-480.png';
import skill14 from '../assets/icons8-spring-boot-240.png';
import skill15 from '../assets/icons8-jenkins-240.png';
import skill16 from '../assets/icons8-apache-kafka-512.png'
const Loader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
    skill9,
    skill10,
    skill11,
    skill12,
    skill13,
    skill14,
    skill15,
    skill16
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change the image every 500ms

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.container}>
      <img src={images[currentIndex]} alt="loading" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Customize as needed
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  },
};

export default Loader;
