import React from 'react'
import Styles from '../footer/Footer.module.css'

function Footer() {
  return (
    <>
      <div className={Styles.footer_container }>
        <div className={Styles.foot_top}>
          <div className={Styles.foot_logo}>
            <img src="./images/header/img3.png" alt="" />
          </div>
          <div className={Styles.foot_icons}>
            <h3>Contact Us</h3>
            <h3>info@fitshop.com</h3>
            <div>
              <h3>Follow Us</h3>
              <img src="./images/header/img5.png" alt="" />
              <img src="./images/header/img6.png" alt="" />
              <img src="./images/header/img7.png" alt="" />
            </div>
          </div>
          {/* <div>
              <h3>Follow Us</h3>
            </div> */}
        </div>
        <div className={Styles.foot_bottom}>
          <h2>© 2024 Fitshop. All rights reserved.</h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
