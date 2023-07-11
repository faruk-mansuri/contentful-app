import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>ContentFul CMS</h1>
          <p>
            Wolf succulents adaptogen, yuccie +1 neutra enamel pin tacos
            try-hard kinfolk kitsch meh kale chips vegan cliche. Tattooed lyft
            offal keytar vexillologist fam. Try-hard bruh fixie, kickstarter
            selfies authentic truffaut live-edge. Swag tofu kitsch shabby chic.
          </p>
        </div>

        <div className='img-container'>
          <img src={heroImg} alt='browser' className='image' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
