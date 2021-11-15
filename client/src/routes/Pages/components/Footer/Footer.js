import { h } from 'preact';

import './Footer.scss';

const Footer = () => (  <footer>

    <div>
      <span>
        © 2021 - present&nbsp;
        <a href="https://google.com" target="_blank" rel="noreferrer">
          Wood Gaming
        </a>
        .&nbsp;
      </span>
      <span>
        Released under the
        <a href="https://github.com/JonLikesGaming/blaze" target="_blank" rel="noreferrer"> MIT License</a>
      </span>
      <div>
        Designed & Developed in GB
      </div>
    </div>
  </footer>
);

export default Footer;
