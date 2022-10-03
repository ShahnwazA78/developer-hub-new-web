import React from 'react';
import { CTA, Brand, Navbar } from '../components';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from '../containers';

export default function LandingPage() {
  return (
    <div>
      <div className="gradient__bg">
        {/* <Navbar /> */}
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      {/* <Footer /> */}
    </div>
  );
}
