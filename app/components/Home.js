import React from 'react';
import Counter from './Counter';

const Home = () => (
  <div>
    <h1>Hello Home!</h1>
    <Counter label="Contador" initialValue={0} />
  </div>
)
export default Home;
