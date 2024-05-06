// components/LanguageSelector.js
import React from 'react';
import WorldIcon from '../../Resources/images/icons/world-icon.svg';

const LanguageSelector = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'Arabic' ? 'English' : 'Arabic');
  };

  return (
    <div className="flex items-center space-x-5 mb-3">
      <button
        type="button"
        className="bg-transparent text-custom-dark-blue flex items-center gap-2 cursor-pointer"
        onClick={toggleLanguage}
      >
        <img className="h-5 w-5" src={WorldIcon} alt="World Icon" />
        <span className="text-lg">{language === 'Arabic' ? 'EN' : 'AR'}</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
