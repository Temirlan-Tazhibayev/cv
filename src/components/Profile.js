import  AvatarLogo  from './Avatar.png';

const Profile = ({ language, onLanguageChange }) => {

    const content = {
        rus: {
            lang: "Языки",
            fullname: 'Темирлан Тажибаев',
            tagline: 'Специалист Информационной Безопасности',
            education: {
                _: "Образование",
                items: [
                    {
                        degree: "Astana IT University, Бакалавр: 'Cybersecurity'",
                        time: "2020 г. - 2023 г."
                    },
                    {
                        degree: "Astana IT University, Магистратура: 'Computer Science and Engineering'",
                        time: "2023 г. - настоящее время"
                    }
                ]
            }
        },
        
        eng: {
            lang: "Languages",
            fullname: 'Temirlan Tazhibaev',
            tagline: 'Information Security Specialist',
            education: {
                _: "Education",
                items: [
                    {
                        degree: "Astana IT University, Bachelor: 'Cybersecurity'",
                        time: "2020 year - 2023 year"
                    },
                    {
                        degree: "Astana IT University, Masters: 'Computer Science and Engineering'",
                        time: "2023 year - present"
                    }
                ]
            }
        },
        
      };

    return (
        <>
        <div className="profile-section">
            <img className="avatar" src={ AvatarLogo } alt="profile picture"/>
            <h1 className="fullname">{content[language].fullname}</h1>
            <h3 className="tagline">{content[language].tagline}</h3>
        </div>

        <div className="contact-section container-block">
            <ul className='contact-list'>
                <li className="email"><i className="fas fa-envelope"></i>
                    <a href="mailto:tazhibaev.temirlan@gmail.com">tazhibaev.temirlan@gmail.com</a>
                </li>
                <li className="phone"><i className="fas fa-phone"></i>
                    <a href="tel:+7 771 888 6767">+7 771 888 6767</a>
                </li>
                <li className="timezone"><i className="fas fa-clock"></i>
                    <a href="#">Astana Timezone</a>
                </li>
                <li className="linkedin"><i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/temirlan-tazhibayev-26b406233" target="_blank">Temirlan Tazhibayev</a>
                </li>
                <li className="github"><i className="fab fa-github"></i>
                    <a href="https://github.com/Temirlan-Tazhibayev" target="_blank">Temirlan-Tazhibayev</a>
                </li>
                {/* <li className="pdf"><i className="fas fa-file-pdf"></i>
                    <a href="#" id="pdf-link">Download PDF</a>
                </li> */}
            </ul>
        </div>


        <div className="education-container container-block">
            <h2 className="container-block-title">
                <i className="fas fa-sharp fa-light fa-user-graduate"></i>{content[language].education._}
            </h2>
            
            {content[language].education.items.map((item, index) => (
                <div className="item" key={index}>
                    <h5 className="degree">{item.degree}</h5>
                    <div className="time">{item.time}</div>
                </div>
            ))}
        </div>

        <div className="languages-container container-block">
            <h2 className="container-block-title">
                {content[language].lang}
            </h2>
            <ul className="languages-list">
                <li>
                    Kazakh
                    <span className="lang-desc">(Free)</span>
                </li>
                <li>
                    Russian
                    <span className="lang-desc">(Free)</span>
                </li>
                <li>
                    English
                    <span className="lang-desc">(B2)</span>
                </li>
            </ul>
        </div>


        </>
        
    );
}

export { Profile };
  
