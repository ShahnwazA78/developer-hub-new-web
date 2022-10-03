import React from 'react';
import people from '../../assets/people.png';
import a1 from '../../assets/b1.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text text-focus-in">
        Learn Blockchain With Ease
        {/* Let&apos;s Build Something amazing with GPT-3 OpenAI */}
      </h1>
      <p className="text-focus-in">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <Link to="/form">
          <button type="button">Register</button>
        </Link>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image bounce-top">
      <img src={a1} />
    </div>
  </div>
);

export default Header;
