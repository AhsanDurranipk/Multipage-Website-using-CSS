import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <span className="footer-span ">© All copyrights belong to Ahsan Durrani and powered by GIAIC</span>

        <div className="social-links ">
          <a href="https://github.com/AhsanDurranipk" target="_blank" rel="noopener noreferrer" className="social-icon ">
            <i className="fab fa-github"></i> 
          </a>
          <a href="https://www.linkedin.com/in/ahsan-durrani/" target="_blank" rel="noopener noreferrer" className="social-icon ">
            <i className="fab fa-linkedin"></i> 
          </a>
        </div>
      </div>
    </div>
  );
}
