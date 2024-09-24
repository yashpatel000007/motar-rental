import React from 'react';
import CarRentalForm from '../components/CarRentalForm';
// import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Looking to rent a car</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <CarRentalForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
