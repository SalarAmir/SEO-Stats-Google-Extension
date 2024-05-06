// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-custom-dark-blue text-white">
      <div className="flex mx-12 justify-between items-center py-3">
        <div>© 2024 KalimatKeywords All rights reserved.</div>
        <div className="flex gap-4">
          <div>الخصوصية</div>
          <div>الشروط والأحكام</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
