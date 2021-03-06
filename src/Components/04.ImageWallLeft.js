import React from "react";

export const ImageWallLeft = (props) => {
  return (
    <div id="ImageWallLeft">
      <section className='container-up'>
        <h1>Latest Story from us.</h1>
        <h2 id='movingTitle'>Latest Story from us.</h2>
      </section>

      <section className='container-low'>
        <div className='img-cover'>
          <img src='../img/04.imagewall/img7.png' alt='' name='hoverImg' />
          <ul className='hoverBox'>
            <li>#BROWNS</li>
            <li>#ENJOY</li>
            <li>#INTERACTION</li>
          </ul>
        </div>

        <h3>A Glimpse of Q2 2020</h3>
        <p>
          We just launched a new custom website and digital marketing campaign
          for a leading self-storage company, we're developing a brand identity
          and custom website for a National non-profit, and using automation and
          advanced API integrations to elevate a leading Long Island residential
          real estate firm.
        </p>
      </section>
    </div>
  );
};
