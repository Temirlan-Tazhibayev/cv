import 'bootstrap/dist/css/bootstrap.css';

const Main = ({ language, onLanguageChange }) => {

    // const data = require('json!./data.json');

    const content = {
        rus: {
            sections: {
                first: "Обо мне",
                second: "Опыт работы",
                third: "Сертификаты профессиональных курсов",
                fourth: "Навыки"
            },
            summary: "Я молодой специалист в области информационной безопасности. Мне бы хотелось развиваться в ИТ, и в частности в сфере информационной безопасности дабы закрепить знания бакалавра. Я быстро учусь и готов изучать что-то новое, чтобы стать опытным профессионалом в области кибербезопасности.",
            work_experience: {
                items: [
                    {
                        title: "Стажировка",
                        date: "9 Июнь 2022 г. – 14 Июль 2022 г.",
                        company: "AFSA Operation Office, IT Division",
                        // details: "Во время стажировки работал с политиками информационной безопасности (ISO-27001/27002)"
                        details: "В ходе стажировки в операционном офисе AFSA я изучал политику безопасности ISO-27001 и подготовил учебные материалы по информационной безопасности для сотрудников. Я приобрел ценный опыт в области политик информационной безопасности и улучшил свои навыки в области управления рисками и защиты данных."
                    },
                    {
                        title: "Дуальное обучение",
                        date: "16 Январь 2023 г. – 31 Май 2023 г.",
                        company: "Агентство Республики Казахстан по Финансовому Мониторингу",
                        details: "В рамках университетской программы дуального обучения я проходил стажировку в Агентстве по финансовому мониторингу Республики Казахстан, где работал с большими данными в области финансового мониторинга. Результатом моей стажировки является изучение дисциплины 'Большие данные в юриспруденции', а также реализация моих знаний и навыков по работе с большими данными в реальной среде."    
                    },
                    {
                        title: "Полная занятость (договорной работник)",
                        date: "28 февраля 2024 г. – настоящее время",
                        company: "Комитет Государственных Доходов Министерства Финансов Республики Казахстан",
                        details: ""
                    }
                ]
            },
            courses: {
                items: [
                    {
                        title: "Cisco «Cybersecurity Essentials»",
                        date: "13 Ноябрь 2021",
                    },
                    {
                        title: "Cisco «Computer Organization and Architecture»",
                        date: "16 Ноябрь 2021"   
                    },
                    {
                        title: "Cisco NDG Linux Essentials",
                        date: "2 Март 2022"   
                    },
                    {
                        title: "Cisco «CyberOps Associate»",
                        date: "15 Май 2022"
                    }
                ]
            },
            skills: {
                items: [
                    {
                        title: 'Python',
                        level: 70
                    },
                    {
                        title: 'WEB dev. & NODE JS',
                        level: 60
                    },
                    {
                        title: "Digital Forensincs & OSINT",
                        level: 80
                    },
                    {
                        title: 'Pentest & Ethical Hacking',
                        level: 90
                    }
                ]
            }
        },
        
        eng: {
            sections: {
                first: "About Me",
                second: "Work Experience",
                third: "Professional Course Certificates",
                fourth: "Skills"
            },
            summary: "I am a young specialist in the field of information security. I would like to develop in the field of cybersecurity, because this area is very exciting and I am interested in learning new technologies and trends in this area. My excellent communication and problem solving skills will help me on my way to achieving my goals. I am a fast learner and willing to learn new things to become an experienced cybersecurity professional.",
            work_experience: {
                items: [
                    {
                        title: "Internship",
                        date: "9 June 2022 – 14 Jule 2022",
                        company: "AFSA Operation Office, IT Division",
                        // details: "During internship worked with information security policies (ISO-27001/27002)"
                        details: "During my internship at the AFSA Operations Office, I studied the ISO-27001 security policy and prepared information security training materials for employees. I gained valuable experience in information security policies and improved my skills in risk management and data protection."
                    },
                    {
                        title: "Dual Education",
                        date: "16 January 2023 – 31 May 2023",
                        company: "Agency of the Republic of Kazakhstan for Financial Monitoring",
                        // details: 
                        details: "As part of the university's dual education program, I completed an internship at the Financial Monitoring Agency of the Republic of Kazakhstan, where I worked with big data in the field of financial monitoring. The result of my internship is the study of the discipline 'Big Data in Law', as well as the implementation of my knowledge and skills in working with Big Data in a real environment."    
                    },
                    {
                        title: "Full time (contract worker)",
                        date: "28 February 2024 – Present",
                        company: "State Revenue Committee of the Ministry of Finance of the Republic of Kazakhstan",
                        details: ""
                    }
                ]
            },
            courses: {
                items: [
                    {
                        title: "Cisco «Cybersecurity Essentials»",
                        date: "13 Nov 2021",
                    },
                    {
                        title: "Cisco «Computer Organization and Architecture»",
                        date: "16 Nov 2021"   
                    },
                    {
                        title: "Cisco NDG Linux Essentials",
                        date: "2 Mar 2022"   
                    },
                    {
                        title: "Cisco «CyberOps Associate»",
                        date: "15 May 2022"
                    }
                ]
            },
            skills: {
                items: [
                    {
                        title: 'Python',
                        level: 70
                    },
                    {
                        title: 'WEB dev. & NODE JS',
                        level: 60
                    },
                    {
                        title: "Digital Forensincs & OSINT",
                        level: 80
                    },
                    {
                        title: 'Pentest & Ethical Hacking',
                        level: 90
                    }
                ]
            }
        },
        
      };

    return (
        <>
            <div className="summary-section container-block">
                <h2 className="section-title">
                    <span className="fa-stack fa-xs">
                        <i className="fas fa-circle fa-stack-2x">
                        </i>
                        <i className="fas fa-user fa-stack-1x fa-inverse" style={{ marginLeft: '0', marginTop: '15px' }}>
                        </i>

                    </span>
                    {content[language].sections.first}
                </h2>
                <div className="summary">
                    <p>
                        {content[language].summary}
                    </p>
                </div>
            </div>


            <div className="experiences-section container-block">
                <h2 className="section-title">
                    <span className="fa-stack fa-xs">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-briefcase fa-stack-1x fa-inverse" style={{ marginLeft: '0', marginTop: '15px' }}></i>
                    </span>
                    {content[language].sections.second}
                </h2>

                {content[language].work_experience.items.map((item, index) => (
                    <div className='item' key={index}>
                        <div className='meta'>
                            <div className='upper-row'>
                                <h3 className='job-title'>{item.title}</h3>
                                <div className='date'>{item.date}</div>
                            </div>
                            <div className='company'>{item.company}</div>
                        </div>
                        <div className='details'><p>{item.details}</p></div>
                    </div>
                ))}

            </div>

            <div className="courses-section container-block">
                <h2 className="section-title">
                        <span className="fa-stack fa-xs">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-graduation-cap fa-stack-1x fa-inverse" style={{ marginLeft: '0', marginTop: '15px' }}></i>
                          </span>
                        {content[language].sections.third}
                </h2>
                {content[language].courses.items.map((item, index) =>(
                    <div className="item" key={index}>
                        <span className="title">{item.title}</span>
                        <span> - </span>
                        <span className="date">{item.date}</span>
                    </div>
                ))}

            </div> 
            {/* Skill */}
            <div className="skills-section container-block">
                <h2 className="section-title">
                    <span className="fa-stack fa-xs">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-wrench fa-stack-1x fa-inverse" style={{ marginLeft: '0', marginTop: '15px' }}></i>
                    </span>
                    {content[language].sections.fourth}
                </h2>
        
                <div className="skillset">
                    {content[language].skills.items.map((item, index) => (
                    <div className="item" key={index}>
                        <h3 className="level-title">{item.title}</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level={`${item.level}%`} style={{ width: `${item.level}%` }}>
                            </div>
                        </div>
                    </div>

                    ))}
                    
                </div>
            </div>
            {/* Skill section end */}
            
            {/* main end */}
        </>
        
    )
}


export {Main};

