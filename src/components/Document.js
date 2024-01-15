import '@fortawesome/fontawesome-free/css/all.css'


import React from 'react';

import './styles/Sidebar.css';
import './styles/Main.css';
import './styles/Print.css';


import { Profile } from './Profile';
import { Main } from './Main.js';

import { Settings } from './Settings.js';
function Document() {

  return (
    <>
      <Settings>
        {({ language, changeLanguage }) => (
          <div className="a4-container" style={{ width: '210mm', height: '297mm', margin: 'auto', backgroundColor: 'white', 
          
          display: 'flex',
          }}>

            {/* Left Side */}
            <div className="sidebar" style={{ flex: 1 }}>
              <Profile language={language} onLanguageChange={changeLanguage} />
            </div>

            {/* Right Side */}
            <div className="main" style={{ flex: 1.8 }}>
              <Main language={language} onLanguageChange={changeLanguage} />
            </div>

          </div>
        )}
      </Settings>
    </>
  );
}

export { Document };
