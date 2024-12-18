import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Добро пожаловать в nur.shop</h1>
          <p>
            Вдохновитесь стилем и элегантностью. nur.shop — это ваш выбор для премиальной мужской моды.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/images/hero-men-fashion.jpg"
            alt="Стильная мужская одежда"
            className="hero-img"
          />
        </div>
      </section>
        </div>
  );
};

export default Home;
