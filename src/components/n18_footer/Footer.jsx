// style
import footerStyle from "./Footer.module.css";

import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"

function Footer() {
  return (
    <div className="bg-custom-green pb-10" id="footer">
      <div className="container">

        {/* logo */}
        <div className="py-10">
          <img
            src={logo}
            alt="udevs logo"
            className="mx-auto"
            width={100}
          />
        </div>

        {/* all links in the middle of the footer */}
        <div className={`${footerStyle.footer}`}>
          <div>
            <h4 className="">About Us</h4>
            <ul>
              <li>
                <a href="">Direction</a>
              </li>
              <li>
                <a href="">Command</a>
              </li>
              <li>
                <a href="">Tools</a>
              </li>
              <li>
                <a href="">Clients</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="">Services</h4>
            <ul>
              <li>
                <a href="">Development of mobile applications</a>
              </li>
              <li>
                <a href="">Development and implementation ERP systems</a>
              </li>
              <li>
                <a href="">User interface, User experience design</a>
              </li>
              <li>
                <a href="">IT consulting</a>
              </li>
              <li>
                <a href="#">Optimization IT consulting infrastructure</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="">Portfolio</h4>
            <ul>
              <li>
                <a href="">Delever</a>
              </li>
              <li>
                <a href="">Sms.uz</a>
              </li>
              <li>
                <a href="">Goodzone</a>
              </li>
              <li>
                <a href="">Iman</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-5"/>
        <div className="flex justify-between items-center">
        <p>© 2024 Udevs. All rights reserved</p>
        <div className="flex">
            <div className="rounded-[50%] bg-[#DDE6FF] p-1 w-[40px] h-[40px]">
                <img src={instagram} alt="instagram"/>
            </div>
            <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px] mx-5">
                <img src={twitter} alt="twitter"/>
            </div>
            <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px]">
                <img src={youtube} alt="youtube"/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
