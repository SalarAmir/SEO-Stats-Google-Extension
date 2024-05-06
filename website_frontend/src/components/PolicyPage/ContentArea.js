// components/ContentArea.js
import React from 'react';
import PolicyContentEn from './PolicyPageContentENG';
import PolicyContentAr from './PolicyPageContentARB';

const ContentArea = ({ language }) => {
  return (
    <div>
      {language === "English" ? <PolicyContentEn /> : <PolicyContentAr />}
    </div>
  );
};

export default ContentArea;
