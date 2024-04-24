import React from 'react';
import '../layouts/css/style.css'

import coffee from "../layouts/img/coffe cup.png"
import human from "../layouts/img/Human.png"
import location from "../layouts/img/GPS.png"
import house from "../layouts/img/house.png"
import inst from "../layouts/img/inst.png"
import phone from "../layouts/img/phone.png"
import fb from "../layouts/img/facebook.png"
import mail from "../layouts/img/gmail.png"
import setka from "../layouts/img/setka.png"
import concept from "../layouts/img/concept.jpg"
import personal from "../layouts/img/personal.jpg"
import typing from "../layouts/img/typing.jpg"
import back from "../layouts/img/back.jpg"
import back2 from "../layouts/img/back2.jpg"
import back3 from "../layouts/img/back3.jpg"
import { Link } from "react-router-dom";



export default function IndexPage(){
    
  const phoneNumber = '60145337';
  const handleCopyPhoneNumber = (event) => {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        console.log('Phone number copied to clipboard:', phoneNumber);
        // Optionally, you can set a state to show a success message or perform other actions
      })
      .catch((error) => {
        console.error('Failed to copy phone number:', error);
        // Handle any errors or provide feedback to the user
      });
  };

  return (
    <>
      <section id="fourth-section" className="width">
        <h2 id="inspiration-h2">
        We are driven to inspire our customers
        </h2>
        <p id="inspiration-p">
        At 002 Shop, we're dedicated to inspiring our customers. 
        Dive into our world of anime accessories and apparel, carefully 
        curated to fuel your passion and ignite your creativity. Explore our 
        collection and embark on a journey that celebrates your unique style 
        and love for anime.
        </p>
        <div id="blue-line" className="overflow"></div>
        <div id="inspiration-blocks" className="width">
          <div id="inspiration-block-1" className="inspiration-block">
            <img src={concept} alt="" />
            <h4>
              Concepts
            </h4>
            <p>
            Explore the vibrant world of anime culture with our diverse collection 
            of conceptual designs. From iconic symbols to imaginative creations, 
            discover the essence of anime in every piece.
            </p>
            <Link to="/">MORE</Link>
          </div>
          <div id="inspiration-block-2" className="inspiration-block">
            <img src={typing} alt="" />
            <h4>
              Prototyping
            </h4>
            <p>
            Dive into the creative process with our prototyping stage, where 
            ideas come to life. Witness the transformation from concept to reality 
            as we craft each item with precision and passion.
            </p> <link rel="stylesheet" href="" />
            <Link to="/">MORE</Link>
          </div>
          <div id="inspiration-block-3" className="inspiration-block">
            <img src={personal} alt="" />
            <h4>
                Personal Design
            </h4>
            <p>
            Express your unique style with our personalized designs tailored to 
            anime enthusiasts like you. Stand out from the crowd and make a 
            statement with our exclusive collection of custom-made accessories 
            and apparel.
            </p>
            <Link to="/">MORE</Link>
          </div>
        </div>
      </section>
      <section id="fifth-section" className="overflow">
        <div id="unique-div">
          <h3>Discover Unique Anime Designs For You</h3>
          <p>
          Immerse yourself in a world of creativity 
          and innovation as we craft bespoke interior 
          designs tailored to your unique style and vision.
          </p>
          <Link to="/"><button>LEARN MORE</button></Link>
        </div>
        <img id="unique-img" src={back} alt="" />
        <div id="unique-blue"></div>
      </section>
      <section id="sixth-section" className="overflow">
        <section id="design-section">
          <h2>
            Anime Designers
          </h2>
          <img id="design-img" src={back3} alt="" />
          <div id="grid-columns">
            <div className="grid-column">
              <div className="design-grid-img">
                <img src={location} alt="" />
              </div>
              <h3>
                2.324
              </h3>
              <h4>
                SHOPS
              </h4>
            </div>
            <div className="grid-column">
              <div className="design-grid-img">
                <img src={human} alt="" />
              </div>
              <h3>
                7.158
              </h3>
              <h4>
                HAPPY CLIENTS
              </h4>
            </div>
            <div className="grid-column">
              <div className="design-grid-img">
                <img src={coffee} alt="" />
              </div>
              <h3>
                729
              </h3>
              <h4>
                COFFEE CUPS
              </h4>
            </div>
            <div className="grid-column">
              <div className="design-grid-img">
                <img src={house} alt="" />
              </div>
              <h3>
                3.129
              </h3>
              <h4>
                DELIVERS
              </h4>
            </div>
          </div>
        </section>
      </section>
      <section id="last-section">
        <div id="contact-us-div">
          <h2>Contacts</h2>
          <div className="contacts">
            <div>
              <img src={phone} alt="" />
            </div>
            <a href="#" onClick={handleCopyPhoneNumber}>Phone number: 60145337</a>
          </div>
          <div className="contacts">
            <div>
              <img src={mail} alt="" style={{ height: 'auto', width: '48px' }} />
            </div>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=antoninaitz@gmail.com" target="_blank" rel="noreferrer">Mail: antoninaitz@gmail.com</a>
          </div>
          <div className="contacts">
            <div>
              <img src={fb} alt="" />
            </div>
            <a href="https://www.facebook.com/antygrey.666" target="_blank" rel="noreferrer">Facebook: antygrey.666</a>
          </div>
          <div className="contacts">
            <div>
              <img src={inst} alt="" />
            </div>
            <a href="https://www.instagram.com/lsd.th69/" target="_blank" rel="noreferrer"> Instagram: @lsd.th69</a>
          </div>
          <div className="contacts">
            <div>
              <img src={location} alt="" />
            </div>
            <a href="https://maps.app.goo.gl/UgMK4RqixGqGRfnC8" target="_blank" rel="noreferrer">Adress: 002 Shop Nigeria</a>
          </div>
        </div>
        <img id="last-back-img" src={back2} alt="" />
        <img id="setka" src={setka} alt="" />
        <div id="service-div">
          <h2>What will you find with us:</h2>
          <div id="service-grid">
            <div>
              <ul>
                <li>
                  <a href="">The Best Cosplay Elements</a>
                </li>
                <li>
                  <a href="">The best stickers</a>
                </li>
                <li>
                  <a href="">The highest quality clothes</a>
                </li>
                <li>
                  <a href="">Unique jewelry</a>
                </li>
                <li>
                  <a href="">The best mouse pads</a>
                </li>
                <li>
                  <a href="">Best Anime Pillows</a>
                </li>
                <li>
                  <a href="">Various keychains</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">High quality anime tableware</a>
                </li>
                <li>
                  <a href="">Manga book</a>
                </li>
                <li>
                  <a href="">Realistic character toys</a>
                </li>
                <li>
                  <a href="">Best anime weapons</a>
                </li>
                <li>
                  <a href="">The best cosmetics for cosplay</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Quality shoes</a>
                </li>
                <li>
                  <a href="">Realistic figurines</a>
                </li>
                <li>
                  <a href="">High quality posters</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
    
    
    
    
    
    
    
    
    </>)
}

