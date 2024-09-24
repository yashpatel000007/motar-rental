import React, { useState } from 'react';
// import './CarRentalForm.css';

const CarRentalForm: React.FC = () => {
  const [location, setLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, pickUpDate, returnDate });
  };

  return (
    <form className="rental-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Places"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={pickUpDate}
        onChange={(e) => setPickUpDate(e.target.value)}
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarRentalForm;
