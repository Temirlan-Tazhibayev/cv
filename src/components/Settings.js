// Settings.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFlag, faFlagUsa } from '@fortawesome/free-solid-svg-icons';


import 'flag-icons-svg/css/flag-icons.css';
import './styles/Settings.css';

const Settings = ({ children }) => {
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
            <button onClick={() => changeLanguage('eng')}><span className="flag-icon flag-icon-us"></span></button>

            <button onClick={() => changeLanguage('rus')}><span className="flag-icon flag-icon-ru"></span></button>
          </div>
        )}
      </div>

      {children({ language, changeLanguage })}
    </>
  );
};


export { Settings };
