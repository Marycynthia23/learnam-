import logo from './images/learnlogo.png';
import mockup1 from './images/Mock_up_Courses_1-removebg-preview.png';
import mockup2 from './images/How_to_use_mock_up_2-removebg-preview.png';
import rectangle71 from './images/Screenshot.png';
import kaios from './images/Splash screen mock up 2.jpg';
import laptop from './images/Laptop Splash screen mock up.jpg';
import Andriod from './images/Android splash screen mock up.jpg';
import Airtel from './images/image 1.jpg';
import scholarx from './images/image 4.jpg';
import arise from './images/image 5.jpg';
import business from './images/business day.jpg';
import bbc from './images/image 6.jpg';
import card1 from './images/kingston 1.jpg';
import news from './images/news.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import cnn from './images/cnn.jpg';
import punch from './images/Punch.jpg';
import icon1 from './images/Rectangle 1.jpg';
import TVC from './images/TVC.jpg';
import leftarr from './images/leftarrow.png';
import rightarr from './images/rightarrowicon.png';
import Vanguard from './images/Vanguard.jpg';
import Vbank from './images/VBANK.jpg';
import vector1 from './images/Vector.jpg';
import ait from './images/AIT.jpg';
import gsma from './images/GSMAlogo.png'; 
import paddy from './images/Vector .png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*heroSection 
      */}
      <div className="hero-container">
      <nav>
        <div className="nav-logo"><img alt="" src={logo}/></div>
        <div className="nav-links" >
          <ul className="nav-items">
            <li><a href="">About</a></li>
            <li><a href="">Guide</a></li>
            <li><a href="">Community Agent</a></li>
            <li><a href="">Sponsorship</a></li>
          </ul>
        </div>
      </nav>
      
      <section className="hero-div">
          <div className="hero-text">
             <h1>Wetin you wan learn?<span>LearnAM</span> here</h1>
              <p>Learn simple skills that can make you independent
                 and increase your earning potentials.
            </p>
            <br />
            <a className="btn-reg" href="">Register</a>
          </div>
          <div className="mockup">
        <img className="mockup1" alt="" src={mockup1} />
        <img className="mockup2" alt="" src={mockup2} />
      </div>
      </section>alt="" 
    </div>
      {/*About Section*/}
      
      <section className="about-container">
        <div className="about-text">
          <h6>ABOUT US</h6>
          <h4>What is LearnAM?</h4>
          <p>LearnAM is a mobile platform that provides audio-visual content,
             in localized languages, to improve digital literacy, digital skills 
             and vocational skills of Africans. 
            Currently available on Kaios store, Android and Web Apps coming soon.</p>
        </div>
        <div className="about-cards">
          <div className="row">
            <div className="col">
            <div className="about-icons one">
              <img alt="icon" src={icon1} />
            </div>
              <h5>Learn</h5>
              <ul>
              <li>Digital skills</li>
              <li>Vocational skills</li>
              <li>Personal Improvement</li>
              </ul>
            </div>
            </div>
          <div className="row">
            <div className="col">
            <div className="about-icons two">
            <img alt="icon" src={icon1} />
            </div>
            <h5>Assessment</h5>
            <li>Test to measure competency</li>
              <li>Certification</li>
            </div>
            </div>
          <div className="row">
            <div className="col">
              <div className="about-icons three">
              <img alt="icon" src={icon1} />
              </div>
              <h5>Marketplace</h5>
              <li>Connect to customers</li>
              <li>Connect to jobs</li>
              <li>Connect to apprenticeship</li>
              </div>
            </div>
        </div>
      </section>

      {/* How it works section*/}
      <section className="howItWorks">
        <div className="phone">
          <img className="rect1" alt="" src={rectangle71} />
          
        </div>
        <div className="howItWorks-text">
          <h6>GUIDE</h6>
          <h4>How it works</h4>
          <ol>
            <p><b><span>01.</span>&nbsp; Learn anywhere:</b> Listen to/watch <br />courses even when you are offline.</p>
            <p><b><span>02.</span>&nbsp;Learn with ease:</b> Short courses broken <br /> down in local languages.</p>
            <p><b><span>03.</span>&nbsp;Track development progress:</b> Try out the <br /> quiz after each module and get certified upon completion.</p>
          </ol>
        </div>
      </section>

      {/* Sponsorship section*/}
      <section className="sponsorship">
      <div className="sponsor">
        <h6>SPONSORSHIP</h6>
        <h4>Fund a device</h4>
        <p>We are looking to provide 22000 feature phones for unconnected women in Africa. 
           To be a part of this, click on the button below to donate.</p>
            <button className="button">Donate</button>
      </div>
      <div className="gadgets">
        <img alt="" src={kaios} />
        <img alt="" src={laptop} />
        <img alt="" src={Andriod} />
      </div>
      
      </section>

      {/* Skills */}
        <section className="skillsContainer">
          <h6>SKILLS</h6>
          <h4>Popular skills in demand</h4>
          <div className="skills">
          <button className="bn">Digital Skills &nbsp;<span> &gt;</span> </button>
          <button className="bn">Vocational Skills  &nbsp;<span> &gt;</span></button>
          <button className="bn">Soft Skills  &nbsp;<span> &gt;</span></button>
          </div>
        </section>/
        <section className="recruitContainer">
          <h6>RECRUITING</h6>
          <h4>Become a community agent</h4>
          <p>Community agent helps drive useage in communities, get people to <br /> download it and host focus group sections.<br />
            We need people who want to voluteer to make impact in the communities.
          </p>
          <a href="" className="btn">Join Now</a>
        </section>
      {/*Blog Section*/}
      <section className="blog">
        <h6>BLOG</h6>
        <h4>Our Articles</h4>
        <div className="cards">
          <div className="card">
            <img className="" alt="" src={card2} />
            <div className="container">
              <h5>Why digital skills are relevant in the world today</h5>
              <p>LearnAM is a mobile platform that provides audio and
              visual content to improve digital literacy.</p>
            </div>
          </div>
          <div className="card">
            <img className="" alt="" src={card1} />
            <div className="container">
              <h5>Why digital skills are relevant in the world today</h5>
              <p>LearnAM is a mobile platform that provides audio and
              visual content to improve digital literacy.</p>
            </div>
          </div>
          <div className="card">
            <img className="" alt="" src={card3} />
            <div className="container">
              <h5>Why digital skills are relevant in the world today</h5>
              <p>LearnAM is a mobile platform that provides audio and
              visual content to improve digital literacy.</p>
            </div>
          </div>
        </div>
  
        </section>
      
      <section className="featured">
        <h4>Featured On</h4>
        <div className="featured-list">
        <img className="stations" alt="" src={business} />
        <img className="stations" alt="" src={cnn} />
        <img className="stations" alt="" src={Vanguard} />
        <img className="stations" alt="" src={bbc }/>
        <img className="stations" alt="" src={punch} />
        <img className="stations" alt="" src={ait} />
        <img className="stations" alt="" src={arise}/>
        <img className="stations" alt="" src={ TVC}/>
        <img className="stations" alt="" src={news}/>
        </div>
      </section>
      {/* Slide section */}
      <section className="testimonals">
        <h6>TESTIMONALS</h6>
        <h4>Happy users say</h4>
        <div className="test-box" id="box">
      <div id="bx" className="bx boxMob">
        <div className="test-col">
          <p>Mo ti wa mo bi a se le lo atoka irina, Nipa wiwo Fidio lori ero alagbeka mi.
          </p>
          <em>"</em>
          <h5>Baba Esther</h5>
          <h6>Taxi Driver</h6>
        </div>
        <div className="test-col">
          <p>With LearnAM, all my apprentices can now learn Phone repair in their Local languages.
          </p>
          <em>"</em>
          <h5>Fredy Concept</h5>
          <h6>Phone Repair Expert</h6>
        </div>
        <div className="test-col">
        <p>Now our artisans can quickly learn how to use their tools properly and make more money
          </p>
          <em>"</em>
          <h5>XYZ International</h5>
          <h6>Tools Manufacturer</h6>
        </div>
        <div className="test-col">
        <p>Mo ti wa mo bi a se le lo atoka irina, Nipa wiwo Fidio lori ero alagbeka mi.
          </p>
          <em>"</em>
          <h5>Baba Esther</h5>
          <h6>Taxi Driver</h6>
        </div>
      </div>
    </div>
    <div class="controls">
      <img src={rightarr} alt="left arrow" className="left-arrow" id="leftarrow"/>
      <img src={rightarr} alt="right arrow" className="right-arrow" id="rightarrow"/>
    </div>

    <div class="mobile-controls">
      <img src={rightarr} alt="left arrow" className="left-arrow" id="leftarrowMob"/>
      <img src={rightarr} alt="right arrow" className="right-arrow" id="rightarrowMob"/>
    </div>
  </section>
      {/* About*/}
      <section className="scholarx">
        <div className="company">
        <h4>We are<img className="scholarx-logo" alt="" src={scholarx}/></h4>
          <p>Scholarx was founded in 2016 in Lagos,Nigeria. It is an Education Finance Tech Startup that has been at the
            fore front at bridging the access to educational and skills gap due to lack of finance. Till date we have helped
            over 200,000 people access direct funding and /or funding information through our various platforms. In 2019, our skills
            fund initiative recognised by United Nations Youth Solutions globally reports as "Top 50 solutions for Youth".
          </p>
          <h5>Key Partners</h5>
          <div className="partners">
          <img alt="" src={Airtel}/>
          <img alt="" src={Vbank}/>
          <img alt="" src={gsma}/>
          <img alt="" src={paddy}/>
          </div>
        </div>
      </section>

      {/* Footer*/}
      <section className="footer">
      <div className="footer-logo"><img src={logo}/></div>
      <div>
      <p><a>About &nbsp;</a> |<a> &nbsp; Guide &nbsp;</a>|<a> &nbsp; Community agent &nbsp;</a>|<a> &nbsp; Sponsorship &nbsp;</a></p></div>
      <div><p>&copy; Copyright 2021</p> </div>
      </section>
    </div>
  );
}

export default App;
