import React from "react";
import "../styles/Prefooter.css";
import '../styles/Footer.css'

const faceboolIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
  </svg>
);

const repeatIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
    </g>
  </svg>
);

const shieldIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
  </svg>
);

const mapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
  </svg>
);

function Footer({ footer }) {
  return (
    <>
      <div className="PreFooter">
        <div>
          {repeatIcon}
          <p>
            <b>Hassle-free replacement </b> <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div>
          {shieldIcon}
          <p>
            <b>100% secure payment </b> <br /> we support cards, wallets EMI and
            COD
          </p>
        </div>
        <div>
          {mapIcon}
          <p>
            <b>Vast service network</b> <br /> 1000 Mi service-centers across
            600 cities
          </p>
        </div>
      </div>

      <div className="preFooter2">
        <div>
          <p>
            LET'S STAY IN TOUCH
            <span>Get updates on sales sepcials and more</span>
          </p>
        </div>
        <div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button>></button>
          </div>
          <span>Thanks. You're on our email list for special offers.</span>
        </div>
        <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>

        <div>{faceboolIcon}</div>
      </div>

      <div className="footer">
        <div>
          <p>SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>ABOUT</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="footerBorder">
        <div>Copyright @ 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
}

export default Footer;
