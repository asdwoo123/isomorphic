import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';
import logo from './seojun-logo.png';


export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              {/*<i className={siteConfig.siteIcon} />*/}
              {/*<img src={logo} width={70} />*/}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
