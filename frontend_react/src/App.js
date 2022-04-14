import React from 'react';

import { 
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work } from './container';
// import index.js from '/.components/header';
// import { Navbar } from './components';

const App = () => {
  return (
   <div className="app">
   <Header />
   <About />
   <Work />
   <Skills />
   <Testimonial />
   <Footer />
   </div>
  );
}

export default App;
