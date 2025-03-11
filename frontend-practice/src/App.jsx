import React,{useState,useRef} from 'react'
import './App.css'
import PricingTable from "./components/PricingTable"
import Navbar from './components/Navbar'
import CustomCarousel from './components/Carousel'
import NpmCarousel from './components/npm-Carousel'
import SwiperCarousel from './components/Swiper-Carousel'
import Accordion from "./components/Accordion"
import images from "./components/imagesData"
import { FaArrowUp } from "react-icons/fa";

import { TfiTwitter } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { LiaBuildingSolid } from "react-icons/lia";


import { IoDiamondOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";



function App() {

  const [data,setData]=useState(images)


  const SectionToTop=useRef(null)
  const ToTop=()=>{
    SectionToTop.current?.scrollIntoView({behavior:"smooth"})
  }

  const sectionRef = useRef(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const FeatureRef = useRef(null);
  const FeatureScroll = () => {
    FeatureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const PriceRef = useRef(null);
  const PriceScroll = () => {
    PriceRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignUpClick = () => {
    if (!isSignUp) { // Eğer zaten SignUp seçiliyse tekrar değiştirme
      setIsSignUp(true);
      
    }
  };

  const handleLoginClick = () => {
    if (isSignUp) { // Eğer zaten Login seçiliyse tekrar değiştirme
      setIsSignUp(false);
      
    }
  };

  return (
    <>
    <section className='LandingPage'>
    <Navbar FeatureScroll={FeatureScroll}  PriceScroll={PriceScroll}  />
    <div className='LandingPageGroup' ref={SectionToTop}>
      <div className='Couresal'>
      <CustomCarousel />
      </div>
      <button className='TOP' onClick={ToTop}><FaArrowUp />
      </button>
     
     <button onClick={handleScroll} className='Create-Acc'>Create an Account</button>
    
     </div>
     </section>

     <section className='Content-page'>
      <div className='Content-Free-sample'>
      <h2 className='Free-sample-Header'>Free Sample</h2>
      <h2 className='Content-Powerful-Header'>Powerful Generator and Free Figma Sources</h2>
      <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
      </div>
     </section>

     <section className='Features-page' ref={FeatureRef}>

        <div className='featureExplain'>
        <h2>We Create Something New</h2>
        <p>We have created a new Product that will help designers, developers and companies create websites for their startuprs quickly and easily.</p>
        </div>
        <NpmCarousel />

    <div className='FeatureGroup'>
    <div className='leftSide'>
    <FiCopy size={40} className='copied'/>

      <h3 className='leftHeader'>30 NEW FEATURE PAGES</h3>
      <p className='leftPrag'>Startup Framework contains components and complex blocks which can easily.</p>
    </div>
    <div className='rightSide'>
    <IoDiamondOutline size={40} className='diamond'/>

      <h3 className='rightHeader'>USEFUL SYMBOL COMPONENTS </h3>
      <p className='righPrag'>Samples will show you the feeling on how to play around using the components</p>
    </div>
    </div>

     </section>


     <section ref={sectionRef} className='Form'>
      <div className='FormGroup'>
        <div className='FormLeft'>
        <h2 className='FormLeftHeader'>
          We solve digital problems with an outstanding creative flare.
        </h2>
        <p className='FormLeftPrag'>we have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>

        <div className='FormRight'>
          <div className='LoginPage'>
          <div className="button-container">

          <button className='SignUp' onClick={()=>{handleSignUpClick()}} >SIGN UP</button>
          <button className='Login' onClick={()=>{handleLoginClick()}}>LOGIN</button>
          <div className={`black-bar ${isSignUp ? "move-left" : "move-right"}`}></div>
          </div>
          </div>
          <div className='UserInput'>
          <input className='Email' type="email"  placeholder='Your email'/>
          <input className='Password' type="password" placeholder='Your password' />
          </div>
          <button className='Account-btn'> Create an Account</button>
          <div className="or-divider">
          <span className="divider-line"></span> 
          <h5 className="Or">or</h5> 
          <span className="divider-line"></span>
          </div>
         
          <button className='Twitter-btn'> Login via Twitter</button>
         
         
          
        </div>
      </div>

     </section>
     <section className='Testimonial'>
  <div className='TestimonialPage'>
    <div>
      <h2 className='TestimonialHeader'>Our Happy Clients</h2>
    </div>
    <div className='Clients'>
      <div className='Testimonial-Card'>
        <img className='UserPic' src="/img/Userpic1.png" alt="" />
        <div className='Testimonial-Text'>
          <p className='TestimonialText'>Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
          <p className='TestimonialNames'>Rayhan Curran</p>
        </div>
      </div>
      <div className='Testimonial-Card'>
        <img className='UserPic' src="/img/Userpic2.png" alt="" />
        <div className='Testimonial-Text'>
          <p className='TestimonialText'>As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
          <p className='TestimonialNames'>Kayley Frame</p>
        </div>
      </div>
      <div className='Testimonial-Card'>
        <img className='UserPic' src="/img/Userpic3.png" alt="" />
        <div className='Testimonial-Text'>
          <p className='TestimonialText'>The most important part of the Startup Framework is the samples</p>
          <p className='TestimonialNames'>Gene Whitfield</p>
        </div>
      </div>
      <div className='Testimonial-Card'>
        <img className='UserPic' src="/img/Userpic4.png" alt="" />
        <div className='Testimonial-Text'>
          <p className='TestimonialText'>I have built my website with Startup just in one day, and it was ready-to-go.</p>
          <p className='TestimonialNames'>Allan Kim</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className='CallToAction'>
      <div className='CTAGroup'>
        <div className='CTAWriting'>
          <h2 className='CTAWritingHeader'>Easy to setup. Easy to maintain</h2>
          <p className='CTAWritingPrag'>Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
        </div>
        <div className='CTAButtons'>
          <button className='CTAPlayBtn'> <div className="play-icon"></div></button>
          <button className='CTAGetStartedBtn'>Get Started</button>
        </div>
      </div>
      </section>


      <section className='ShowCase'>
      <div className='ShowGroup'>  
          <Accordion  data={data} />        
      </div>

      </section>

      <section className='Team'>
        <div className='TeamGroup'>
          <div className='TeamHeader'>
            <h2 className='TeamHeaderHeader'>Startup Crew</h2>
            <p className='TeamHeaderPrag'>The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit. </p>
          </div>

          <div className='TeamImg'>
            <div className='TeamCard'>
            <img src="../public/img/Team1.png" alt="" />
            <h4 className='TeamCardName'>Leah Salomon</h4>
            <p className='TeamCardProfession'>UI Designer</p>
            <div className='TeamCardLogos'>
            <TfiTwitter />
            <FaFacebookSquare />
            <FaDribbble />
            <FaInstagram />

            </div>
          </div>
          <div className='TeamCard'>
            <img src="../public/img/Team2.png" alt="" />
            <h4 className='TeamCardName'>Colin Timmons</h4>
            <p className='TeamCardProfession'>UX Designer</p>
            <div className='TeamCardLogos'>
            <TfiTwitter />
            <FaDribbble />

            </div>
          </div>
          <div className='TeamCard'>
            <img src="../public/img/Team3.png" alt="" />
            <h4 className='TeamCardName'>Miguel Osborne</h4>
            <p className='TeamCardProfession'>Front-end Developer</p>
            <div className='TeamCardLogos'>
            <FaSkype />
            <FaMedium />
            <FaGit />
           

            </div>
          </div>
          <div className='TeamCard'>
            <img src="../public/img/Team4.png" alt="" />
            <h4 className='TeamCardName'>Taylor Simon</h4>
            <p className='TeamCardProfession'>Product Manager</p>
            <div className='TeamCardLogos'>
            <TfiTwitter />
            
            <FaInstagram />

            </div>
          </div>
          <div className='TeamCard'>
            <img src="../public/img/Team5.png" alt="" />
            <h4 >Steven MacAlister</h4>
            <p className='TeamCardProfession'>Copyrighter</p>
            <div className='TeamCardLogos'>
            <TfiTwitter />
            

            </div>
          </div>
          </div>
        </div>
      </section>


      <section className='Contact'>
      <div className='ContactGroup'>
        <div className='ContactGroupLeft'>
        <h2 className='ContactGroupLeftHeader'>
        Let’s Keep in Touch
        </h2>
        <p className='ContactGroupLeftPrag'>we have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        <div className='PhoneNumber'>
        <FaPhone />
          <p className='PhoneNumberP'>+1 555 505 5050</p>
        </div>

        <div className='MailAddress'>
        <FaEnvelope />
        <p>info@designmodo.com</p>
        </div>

        <div className='Address'>
        <LiaBuildingSolid className='AddressIcon'/>
        <p>San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</p>
        </div>
        </div>

        <div className="ContactGroupRight">
      <div className="Test">
        
        <div className="ContactGroupRightHead">
          <div className="input-group">
            <label htmlFor="name">YOUR NAME</label>
            <input className="t1" id="name" type="text" placeholder="First name" />
          </div>
          <div className="input-group">
            <label htmlFor="Budget">BUDGET</label>
            <select id="Budget" className="PriceTag">
              <option value="500">$500</option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="5000">$5000</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">INPUT FIELD</label>
          <input className="t2" id="email" type="email" placeholder="name@mail.com" />
        </div>

        <div className="input-group">
          <label htmlFor="message">YOUR MESSAGE</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="copy" />
          <label htmlFor="copy">Send me a copy</label>
        </div>

        <button className="send-btn">Send</button>
      </div>
    </div>
      </div>

     </section>


     <section className='PricingTable' ref={PriceRef}> 
      <div className='PriceHead'>
      <h2 className='PriceHeadHeader'>Plans & Pricing</h2>
      <p className=''>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
      </div>
     
      <PricingTable />
     </section>

      <section className='Footer'>
        <div className='FooterGroup'>
          <div className='FooterHead'>
            <h3>Startup 3</h3>
            <div className='FooterHeadRight'>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <TfiTwitter />
            <FaFacebookSquare />
            <FaGooglePlusG />

            </div>
          </div>
          
          <span className="divider-line2"></span>

          <div className='FooterBody'>
            <p>Tour</p>
            <p>Features</p>
            <p>Pricing Plans</p>
            <p>Our Works</p>
            <p>Brands</p>
            <p>Contacts</p>
          <div className='FooterBodyRight'>
            <p>© 2025 DevT. All rights reserved.</p>
          </div>
          </div>
        </div>
        
          
      </section>

    </>
    
  )
}

export default App
