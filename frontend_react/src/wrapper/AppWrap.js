import React from 'react';
import { NavigationDots, SocialMedia } from '../components/Navbar';
const AppWrap = (Component, IdName, classNames) => function HOC() {

  return (

    <div id={IdName} className={`app__container ${classNames}`}>
     <SocialMedia />

     <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
        <p className="p-text"><em>@2022</em> <a href="https://github.com/LawrenceBaatjies">Lawrence</a></p>
        <p className="p-text"><em>All right reserved.</em></p>
      </div>
     </div>
     <NavigationDots active={IdName} />
    </div>
  )
};

export default AppWrap;