import React from 'react';

const Header = () => {
  return (
    <header className="bg-customGreen py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-4 ml-auto">
          <a
            href="https://www.instagram.com/frutmixoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-45"
          >
            <img
              src="/img/header/instagram.png"
              alt="Instagram"
              className="h-10 w-45"
            />
          </a>

          <a
            href="https://www.facebook.com/frutmixoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-45"
          >
            <img
              src="/img/header/facebook.png"
              alt="Facebook"
              className="h-10 w-45"
            />
          </a>
        </div>
      </div>
    </header>
  );
};


export default Header;
