import React from 'react';
import './Home.css';
import Heading from '../components/Heading/heading';
import About from '../components/About/about';
import Carousel from '../components/Carousel/carousel';
import Contact from '../components/Contact/contact';

function Home() {
    return (
        <div className='container'>
        <Heading />
        <Carousel />
        <About />
        <Contact />
        </div>
    );
}

export default Home;