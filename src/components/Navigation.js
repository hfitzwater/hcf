import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navigation = ( props ) => {
  const location = useLocation();

  const linkClassName = ( pathname ) => {
    const className = `flex-1 text-center px-4 py-3 hover:bg-gray-600 ${
      location.pathname === pathname ? ' active' : ''
    }`;

    return className;
  };

  return (
    <div className="flex flex-row bg-gray-800 text-gray-100 font-black text-2xl">
      <Link to="/" className={linkClassName('/')}>
        About
      </Link>
      <Link to="/projects" className={linkClassName('/projects')}>
        Projects
      </Link>
    </div>
  );
};

export default Navigation;