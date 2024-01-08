import React from 'react';

function WelcomePage() {
  const imageSize = '250px'; // Adjust the size for your preference

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to WoodCraft Haven</h1>
      <p>
        Explore our collection of high-quality wooden furniture and craftsmanship.
      </p>
      <div className="row mt-4">
        <div className="col-md-4">
          <h2>Our Products</h2>
          <img
            src="https://i.pinimg.com/564x/11/25/93/112593b15459cc047c8aa49b041a79b3.jpg"
            alt="Our Products"
            className="img-fluid rounded"
            style={{ width: imageSize, height: imageSize, marginBottom: '15px' }}
          />
          <p>
            Discover a wide range of wooden furniture, including tables, chairs, shelves, and more. Our products are crafted with precision and attention to detail to bring natural beauty to your home.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Craftsmanship</h2>
          <img
            src="https://i.pinimg.com/564x/d1/cf/d2/d1cfd2b27dbbcfa1a4b2be606c9b4932.jpg"
            alt="Craftsmanship"
            className="img-fluid rounded"
            style={{ width: imageSize, height: imageSize, marginBottom: '15px' }}
          />
          <p>
            Our skilled artisans dedicate themselves to the art of craftsmanship. Each piece is meticulously crafted, ensuring the highest quality and unique character. Experience the beauty of handmade wooden furniture.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Visit Us</h2>
          <img
            src="https://i.pinimg.com/564x/5b/f2/7e/5bf27e3e26dc6e3306a38aebb4538fc1.jpg"
            alt="Visit Us"
            className="img-fluid rounded"
            style={{ width: imageSize, height: imageSize, marginBottom: '15px' }}
          />
          <p>
            Visit our stores in Bandung, Jakarta, Denpasar, and Manokwari to explore our extensive collection. Our friendly staff is ready to assist you in finding the perfect wooden furniture for your home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
