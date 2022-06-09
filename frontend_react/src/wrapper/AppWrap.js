import React from 'react';
import { NavigationDots, SocialMedia } from '../components/Navbar';
const AppWrap = (Component, IdName, classNames) => function HOC() {

  return (

    <div id={IdName} className={`app__container ${classNames}`}>
     <SocialMedia />

     <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
        <p className="p-text"><strong>©️2022 <a href="https://github.com/LawrenceBaatjies">Lawrence</a></strong></p>
        <p className="p-text"><strong>All right reserved.</strong></p>
      </div>
     </div>
     <NavigationDots active={IdName} />
    </div>
  )
};

export default AppWrap;