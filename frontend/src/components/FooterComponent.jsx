import React from 'react';
import './style.css';

function FooterComponent() {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <span className="footer-text">
          Created | by:{' '}
          <a
            href="https://github.com/fyaanis"
            target="_blank"
            className="footer-link"
          >
            FYAANIS
          </a>{' '}
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
