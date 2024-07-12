import contactStyle from "./Contact.module.css";

// icons
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import telegram from "../../assets/telegram.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function Contact() {
  return (
    <div className="py-20">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <div className={`${contactStyle.box} rounded-custom-r`}>
          <p>Leave us a message</p>
          <div className="grid grid-cols-2 gap-20">
            {/* left side */}
            <div>
              <form action="" className={`${contactStyle.form} flex flex-col`}>
                <input type="text" placeholder="Your name" />
                <input type="email" name="" id="" placeholder="Your email" />
                <textarea
                  name=""
                  id=""
                  placeholder="Briefly describe your project"></textarea>
                <button className="mr-auto bg-custom-blue text-white rounded-custom-r px-20 py-2 text-2xl">
                  Send
                </button>
              </form>
            </div>

            {/* right side */}
            <div className={`${contactStyle.right_box}`}>
              <div className="flex items-center">
                <img src={location} alt="location icon" width={25} />
                <p className="pl-2">
                  Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                </p>
              </div>
              <div className="flex items-center">
                <img src={phone} alt="phone icon" width={25} />
                <p className="pl-2">+998 33 66 00 999</p>
              </div>
              <div className="flex items-center">
                <img src={email} alt="email icon" width={25} />
                <p className="pl-2">Email iconazizbek.b@udevs.io</p>
              </div>
              <div className="flex items-center">
                <img src={telegram} alt="telegram icon" width={25} />
                <p className="pl-2">t.me/azizbekbakhodirov</p>
              </div>
              <div className="flex items-center">
                <img
                  src={youtube}
                  alt="youtube icon"
                  className="mr-4"
                  width={25}
                />
                <img
                  src={instagram}
                  alt="instagram icon"
                  className="mr-4"
                  width={30}
                />
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="mr-4"
                  width={25}
                />
                <img
                  src={twitter}
                  alt="twitter icon"
                  className="mr-4"
                  width={25}
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2995.7955473192615!2d69.30557207553122!3d41.335058999240175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzA2LjIiTiA2OcKwMTgnMjkuMyJF!5e0!3m2!1sen!2s!4v1720797874777!5m2!1sen!2s"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              <p className="my-5">
                Coworking; Uzbekistan, Tashkent, Qorgon 5th Drive, 32
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
