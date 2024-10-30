import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Code with Clement</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://m.me/clement.mapondera" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <i class="uil uil-facebook-f"></i>
                </a>

                <a href="https://wa.me/265993256552" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <i class="uil uil-whatsapp"></i>
                </a>

                <a href="mailto:clementmapondera09@gmail.com" className="footer__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-envelope"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; The Coder. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
