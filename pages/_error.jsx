import React from 'react';

const backgroundImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SantaCruz-CuevaManos-P2210651b.jpg/1200px-SantaCruz-CuevaManos-P2210651b.jpg';

const Error = () => (
  <section className="error">
    <article className="error__content">
      <figure
        className="imaginery"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />
    </article>
  </section>
);

export default Error;
