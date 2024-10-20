import React, { useState } from 'react';
import "./education.css";

const Education = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="education section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="education__container container">
            <div className="education__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "education__button education__active button--flex" 
                        : "education__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap education__icon"></i>Education
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "education__button education__active button--flex" 
                        : "education__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt education__icon"></i>Experience
                </div>
            </div>

            <div className="education__section">
                <div className={toggleState === 1 ? "education__content education__content-active" : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">Web Technologies</h3>
                            <span className="education__subtitle">Malawi - University of Malawi</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">Computer Programming</h3>
                            <span className="education__subtitle">Malawi - University of Malawi</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="education__data">
                        <div>
                            <h3 className="education__title">Information Systems</h3>
                            <span className="education__subtitle">Malawi - University of Malawi</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">Database</h3>
                            <span className="education__subtitle">Malawi - University of Malawi</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "education__content education__content-active" : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">3D Modeling & AR Technologies</h3>
                            <span className="education__subtitle">Ludenso Create Hackathon, Africa</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">Data Analyst</h3>
                            <span className="education__subtitle">Durobloc Company</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
