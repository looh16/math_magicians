import React from 'react';
import quoteStyles from '../css/Quote.module.css';

const Quote = () => (
  <section className={quoteStyles.intro}>
    <div>
      <p>
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding.
        -William Paul Thurston
      </p>
    </div>

  </section>
);

export default Quote;
