import '@fortawesome/fontawesome-free/css/all.css'


import React from 'react';

import './styles/Sidebar.css';

import { Profile } from './Profile';
import { Settings } from './Settings.js';
function Document() {
    const [language, setLanguage] = useState('eng');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const [flagVisible, setFlagVisible] = useState(false);

    const toggleFlagVisibility = () => {
        setFlagVisible(!flagVisible);
    };

  return (
    <>
      <div className='settings'>
        <button className='language' onClick={toggleFlagVisibility}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        {flagVisible && (
          <div className='languages'>
            <button onClick={() => changeLanguage('eng')}><span class="flag-icon flag-icon-us"></span></button>

            <button onClick={() => changeLanguage('rus')}><span class="flag-icon flag-icon-ru"></span></button>
          </div>
        )}

        {({ language, changeLanguage }) => (
          <div className="a4-container" style={{ width: '210mm', height: '297mm', margin: 'auto', backgroundColor: 'white', 
          
          display: 'flex'
          }}>

            {/* Left Side */}
            <div className="sidebar" style={{ flex: 1 }}>
              <Profile language={language} onLanguageChange={changeLanguage} />
            </div>

            {/* Right Side */}
            <div className="main" style={{ flex: 1.8 }}>
              <h2>Right Side</h2>
              <p>Right side content goes here...</p>
            </div>

          </div>
        )}


    </div>
      {children({ language, changeLanguage })}
    </>
  );
}

export { Document };
