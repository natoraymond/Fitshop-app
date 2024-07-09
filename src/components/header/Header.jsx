import React from 'react'
import Styles from '../header/Header.module.css'


function Header() {
  return (
    <>
      <div className={Styles.header_container }>
        <div className={Styles.left_logo }>
            <img src="./images/header/img1.png" alt="" />
            <button>
                <img  src="./images/header/img2.png" alt="" className={Styles.placholder}/>Search
            </button>
        </div>
        <div className={Styles.right}>
            <img src="./images/header/img4.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;




