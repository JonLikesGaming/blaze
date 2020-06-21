import { h } from 'preact';
import network from '../../assets/images/illustrations/network_compress.png';
import twoDevices from '../../assets/images/illustrations/two_devices_compress.png';
import threeDevices from '../../assets/images/illustrations/three_devices_compress.png';
import world from '../../assets/images/illustrations/world_compressed.png';
import './index.scss';

const Home = () => (
  <>
    <header>
      <a class="brand" href="/">
        <svg width="111" height="25" viewBox="0 0 111 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0221 25H9.31435C4.19142 25 0 20.7812 0 15.6249C0 10.9377 3.41504 7.19076 7.76196 6.4093C9.93218 2.50318 13.9711 0 18.6283 0C24.5273 0 29.338 4.06571 30.7368 9.53435C34.4625 9.99701 37.2566 13.2813 37.2566 17.1874C37.2566 21.5623 33.8416 25 29.4947 25H17.6217C17.4948 25 17.4533 24.9106 17.5344 24.8124L23.4844 17.6163C23.6464 17.4206 23.563 17.233 23.3103 17.2242L20.1693 17.1149C20.0378 17.1103 19.9795 17.0082 20.0416 16.8916L22.7816 11.7372C22.8438 11.6205 22.7854 11.5181 22.6539 11.5135L18.4602 11.3677C18.3139 11.3623 18.177 11.446 18.1142 11.5795L14.0939 20.101C14.0371 20.2215 14.1 20.3255 14.2322 20.3301L17.6011 20.4471C17.7353 20.4521 17.8077 20.5583 17.7631 20.6861L16.3445 24.7698C16.2965 24.9079 16.1673 25 16.0221 25ZM44.647 21.6977C44.4691 21.6977 44.3179 21.6351 44.1934 21.5097C44.0689 21.3844 44.0067 21.2322 44.0067 21.0532V3.57121C44.0067 3.37428 44.0645 3.21316 44.1801 3.08784C44.2957 2.96252 44.4513 2.89986 44.647 2.89986H52.3842C54.4652 2.89986 56.0215 3.36085 57.0532 4.28284C58.0848 5.20483 58.6006 6.4625 58.6006 8.05584C58.6006 8.98678 58.3738 9.77898 57.9203 10.4324C57.4667 11.0859 56.9375 11.5558 56.3328 11.8423C57.0798 12.1824 57.7113 12.7374 58.2271 13.5072C58.7429 14.277 59.0008 15.1543 59.0008 16.1389C59.0008 17.8039 58.4405 19.1466 57.32 20.167C56.1994 21.1875 54.6342 21.6977 52.6243 21.6977H44.647ZM47.7685 10.607H51.9039C52.811 10.607 53.5092 10.3832 53.9983 9.93563C54.4874 9.48806 54.732 8.88832 54.732 8.1364C54.732 7.38449 54.4919 6.80265 54.0116 6.39089C53.5314 5.97913 52.8288 5.77325 51.9039 5.77325H47.7685V10.607ZM47.7685 18.8243H52.1707C53.0956 18.8243 53.816 18.5692 54.3318 18.059C54.8476 17.5488 55.1055 16.8998 55.1055 16.1121C55.1055 15.3243 54.8432 14.6754 54.3185 14.1651C53.7938 13.6549 53.0778 13.3998 52.1707 13.3998H47.7685V18.8243ZM62.6826 21.6977C62.5048 21.6977 62.3536 21.6351 62.2291 21.5097C62.1046 21.3844 62.0423 21.2322 62.0423 21.0532V3.27581C62.0423 3.07888 62.1046 2.92224 62.2291 2.80587C62.3536 2.6895 62.5048 2.63132 62.6826 2.63132H64.9237C65.1194 2.63132 65.275 2.6895 65.3906 2.80587C65.5063 2.92224 65.5641 3.07888 65.5641 3.27581V21.0532C65.5641 21.2322 65.5063 21.3844 65.3906 21.5097C65.275 21.6351 65.1194 21.6977 64.9237 21.6977H62.6826ZM73.1412 21.9663C72.234 21.9663 71.4025 21.7828 70.6466 21.4157C69.8907 21.0487 69.2948 20.5519 68.859 19.9253C68.4233 19.2988 68.2054 18.6095 68.2054 17.8576C68.2054 16.6402 68.6945 15.6555 69.6728 14.9036C70.651 14.1517 71.9939 13.6415 73.7014 13.373L77.3566 12.8359V12.2719C77.3566 11.5021 77.1609 10.9203 76.7696 10.5264C76.3783 10.1326 75.7558 9.93563 74.902 9.93563C74.3151 9.93563 73.8437 10.043 73.488 10.2579C73.1323 10.4727 72.8432 10.692 72.6209 10.9158C72.3986 11.1396 72.2518 11.2873 72.1807 11.3589C72.1095 11.5737 71.9761 11.6811 71.7805 11.6811H69.6994C69.5394 11.6811 69.4015 11.6274 69.2859 11.52C69.1703 11.4126 69.1125 11.2694 69.1125 11.0904C69.1303 10.6428 69.3482 10.137 69.7662 9.5731C70.1841 9.00916 70.8289 8.51684 71.7004 8.09612C72.572 7.67541 73.6481 7.46505 74.9287 7.46505C77.0275 7.46505 78.5572 7.93948 79.5177 8.88832C80.4781 9.83716 80.9584 11.0814 80.9584 12.621V21.0532C80.9584 21.2322 80.9006 21.3844 80.785 21.5097C80.6693 21.6351 80.5137 21.6977 80.3181 21.6977H78.1036C77.9258 21.6977 77.7746 21.6351 77.6501 21.5097C77.5256 21.3844 77.4633 21.2322 77.4633 21.0532V20.0059C77.072 20.5788 76.5206 21.0487 75.8092 21.4157C75.0977 21.7828 74.2084 21.9663 73.1412 21.9663ZM74.0483 19.3883C75.0266 19.3883 75.8269 19.066 76.4495 18.4215C77.072 17.777 77.3833 16.8461 77.3833 15.6287V15.0916L74.7153 15.5213C72.6698 15.8435 71.6471 16.5328 71.6471 17.589C71.6471 18.1619 71.8828 18.605 72.3541 18.9183C72.8254 19.2316 73.3902 19.3883 74.0483 19.3883ZM84.3201 21.6977C84.1422 21.6977 83.991 21.6351 83.8665 21.5097C83.742 21.3844 83.6797 21.2322 83.6797 21.0532V19.4957C83.6797 19.3346 83.7109 19.1913 83.7731 19.066C83.8354 18.9407 83.9288 18.7885 84.0533 18.6095L90.8567 10.5801H84.5335C84.3556 10.5801 84.2045 10.513 84.0799 10.3787C83.9554 10.2444 83.8932 10.0878 83.8932 9.90878V8.37809C83.8932 8.19906 83.9554 8.04689 84.0799 7.92157C84.2045 7.79625 84.3556 7.7336 84.5335 7.7336H94.6986C94.8764 7.7336 95.0276 7.79625 95.1521 7.92157C95.2766 8.04689 95.3389 8.19906 95.3389 8.37809V10.043C95.3389 10.1863 95.2989 10.3295 95.2188 10.4727C95.1388 10.6159 95.0543 10.7502 94.9654 10.8755L88.2954 18.8512H95.2322C95.41 18.8512 95.5612 18.9138 95.6857 19.0392C95.8102 19.1645 95.8725 19.3256 95.8725 19.5225V21.0532C95.8725 21.2322 95.8147 21.3844 95.6991 21.5097C95.5834 21.6351 95.4278 21.6977 95.2322 21.6977H84.3201ZM104.41 21.9663C102.418 21.9663 100.839 21.3934 99.6744 20.2476C98.5094 19.1018 97.8913 17.4727 97.8201 15.3602L97.7934 14.6888C97.7934 12.451 98.376 10.6875 99.541 9.39855C100.706 8.10955 102.32 7.46505 104.383 7.46505C106.5 7.46505 108.132 8.10955 109.279 9.39855C110.426 10.6875 111 12.4062 111 14.5545V15.1185C111 15.2975 110.938 15.4497 110.813 15.575C110.689 15.7003 110.529 15.763 110.333 15.763H101.475V15.9778C101.511 16.9803 101.782 17.8083 102.289 18.4618C102.796 19.1152 103.494 19.442 104.383 19.442C105.397 19.442 106.224 19.0302 106.865 18.2067C107.025 18.0098 107.149 17.8889 107.238 17.8442C107.327 17.7994 107.478 17.777 107.692 17.777H110.04C110.2 17.777 110.337 17.8218 110.453 17.9113C110.569 18.0008 110.626 18.1261 110.626 18.2872C110.626 18.7169 110.373 19.2227 109.866 19.8045C109.359 20.3863 108.634 20.8921 107.692 21.3218C106.749 21.7514 105.655 21.9663 104.41 21.9663ZM101.475 13.4804H107.318V13.4267C107.318 12.3704 107.056 11.5245 106.531 10.8889C106.006 10.2534 105.29 9.93563 104.383 9.93563C103.476 9.93563 102.765 10.2534 102.249 10.8889C101.733 11.5245 101.475 12.3704 101.475 13.4267V13.4804Z" fill="#3BE8B0"/>
        </svg>
        <span class="pill">
          Beta
        </span>
      </a>
      
      <button
        class="thin mobile-menu icon-menu"
        // onclick="toggleMenu()"
        aria-label="Toggle Menu"
      ></button>
      <nav>
        {/* <a href="#">How it works</a> */}
        <a href="#about">About</a>
        <a href="https://github.com/blenderskool/blaze">GitHub</a>
        <a class="ph-desktop" href="https://www.producthunt.com/posts/blaze-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-blaze-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=174403&theme=dark&period=daily" alt="Blaze - Fast peer to peer file sharing web app ⚡ | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
      </nav>
    </header>

    <main>
      <section class="hero">

        <div class="info">
          <h1 class="title">Share files the modern way</h1>
          <h2 class="subtitle">Using just a web browser across any device on Earth!</h2>

          <a href="/app" class="btn">
            Start Sharing
          </a>
          <a class="ph-mob" href="https://www.producthunt.com/posts/blaze-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-blaze-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=174403&theme=dark&period=daily" alt="Blaze - Fast peer to peer file sharing web app ⚡ | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
        </div>

        <img class="network-img" src={network} alt="Devices connected using Blaze" />

        {/*<svg class="waves" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L21.8,160C43.6,160,87,160,131,181.3C174.5,203,218,245,262,234.7C305.5,224,349,160,393,133.3C436.4,107,480,117,524,106.7C567.3,96,611,64,655,80C698.2,96,742,160,785,176C829.1,192,873,160,916,138.7C960,117,1004,107,1047,112C1090.9,117,1135,139,1178,170.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440"></path>
        </svg>*/}

      </section>


      <section class="features">
        <div class="feature">
          <img src={twoDevices} alt="Laptop and mobile connected together" loading="lazy" />
          <h2>Easy to use</h2>
          <p>
            Blaze is a web app, just open it in your browser, join a room, and start sharing. No need to download specific apps for different platforms.
          </p>
        </div>

        <div class="feature">
          <img src={threeDevices} alt="Laptop and two mobiles connected together" loading="lazy" />
          <h2 style="margin-top: 25px">Multi-device <span class="pill">Experimental</span></h2>
          <p>
            Traditionally, sharing files to multiple devices has been a hassle. With Blaze, you can share files across multiple devices with ease.
          </p>
        </div>
        
        <div class="feature">
          <img src={world} alt="Devices in different parts of the world using Blaze to share files" loading="lazy" />
          <h2>Anywhere</h2>
          <p>
            Blaze is built on modern web technologies, allowing it to work on devices far away from each other. It just needs to be connected to the internet.
          </p>
        </div>
      </section>

      <section class="about" id="about">

        <blockquote>
          <span>"</span>I built Blaze because I wanted a fast, radically different way to transfer files between my laptop and mobile<span>"</span>

          <footer>
            <a href="https://github.com/blenderskool" target="_blank">
              <img src="https://github.com/blenderskool.png?size=100" alt="Akash Hamirwasia" />
            </a>
            <cite class="author">Akash Hamirwasia</cite>
            <cite class="position">Creator of Blaze</cite>
          </footer>
        </blockquote>

      </section>

      <section class="hero final-cta">

        <h2 class="title">Let's get sharing!</h2>
        <h3 class="subtitle">No registrations required, completely free</h3>

        <a href="/app" class="btn">
          Start sharing
        </a>

      </section>

      <footer>
        A project by <a href="https://github.com/blenderskool" target="_blank">Akash Hamirwasia</a>
      </footer>

    </main>
  </>
);

export default Home;
