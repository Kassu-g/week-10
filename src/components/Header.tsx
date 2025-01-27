import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./../styles/header.css";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <h1>Lorem Ipsum</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">{t('home')}</Link>
          </li>
          <li>
            <Link to="/about">{t('about')}</Link>
          </li>
          <li>
            <button id="fi" onClick={() => changeLanguage('fi')}>
              FI
            </button>
          </li>
          <li>
            <button id="en" onClick={() => changeLanguage('en')}>
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
