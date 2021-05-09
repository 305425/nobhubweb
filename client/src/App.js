
import './App.css';
import './assets/css/main.css'
import logo from './assets/img/logo1.png';
import bannerPhone from './assets/img/slider-thumbnail3.png';
import bannerFront from './assets/img/first-screen-bg.jpg';
import app1 from './assets/img/App-1.png';
import app2 from './assets/img/App-2.png';
import app3 from './assets/img/App-3.png';
import app4 from './assets/img/App-4.png';
import app5 from './assets/img/App-5.png';
import axios from "axios"
import bannerButton from './assets/img/first-screen-bottom.png';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])
  const [dataPopular, setDataPopular] = useState([])

  useEffect(() => {

    getHomeData();
    getMostPopular();

  }, []);


  const getHomeData = () => {
    axios.get(`http://localhost:1337/Homes`)
      .then((response) => {
        console.log("response", response.data[0])
        setData(response.data[0])
      }).catch((error) => {
        console.log("error", error)
      })

  }

  const getMostPopular = () => {
    axios.get(`http://localhost:1337/MOSTPOPULARS`)
      .then((response) => {
        console.log("responseMostPopular", response.data[0])
        setDataPopular(response.data[0])
      }).catch((error) => {
        console.log("error", error)
      })

  }

















  return (
    <div className="loaded">
      <div className="page-container">
        {/* BEGIN HEADER */}
        <header className="header">
          <div className="header__cols">
            <div className="header__left">
              <div className="header__inner-cols">
                <div className="header__inner-col header__inner-col_mob">
                  <button className="mob-button js-mob-open">
                    <span className="mob-button__icon" />
                  </button>
                </div>
                <div className="header__inner-col">
                  <a className="header-logo" href="#">
                    <img className="header-logo__image" src={logo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="header__center js-from-1">
              <div className="header-mob js-content-1">
                <ul className="main-nav">
                  <li className="main-nav__item">
                    <a className="main-nav__link js-scrolltoid" href="#features">Features</a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link js-scrolltoid" href="#download">Download app</a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link js-scrolltoid" href="#ui">UI screens</a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link js-scrolltoid" href="#testimonials">Testimonials</a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link js-scrolltoid" href="#faq">FAQ</a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__button js-scrolltoid" href="#trial">Free trial</a>
                  </li>
                  {/* <li className="main-nav__item">
                    <select name="cars" id="cars">
                 
                      <option >Choose </option>
                      <option >English</option>
                      <option >Hindi</option>
                      <option >Telugu</option>
                    </select>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="header__right js-from-2">
              <div className="header-mob js-content-2">
                <a className="header-tel" href="tel:+17426584122">+1 742 65 84 122</a>
              </div>
            </div>
          </div>
        </header>
        {/* HEADER END */}
        {/* MOBILE NAVIGATION */}
        <div className="hide-mob js-mob-hide">
          <div className="hide-mob__bg">
            <button className="hide-mob__close close-button close-button_orange js-mob-close" />
            <div className="hide-mob__mask js-mob-close" />
            <div className="hide-mob__content js-to-1" />
            <div className="hide-mob__bottom js-to-2" />
          </div>
        </div>
        {/* MOBILE NAVIGATION END */}
        {/* BEGIN MAIN */}
        <main className="main">
          {/* BEGIN FIRST SCREEN */}
          <section className="first-screen">
            <div className="first-screen__main wrapper">
              <div className="first-screen__max">
                <div className="first-screen__content">
                  <div className="first-screen__cell">
                    <span className="above-title">{data.EnTitle}</span>
                    <h1 className="first-screen__title">A PERFECT PLACE TO CONVERGE,CONNECT & CELEBRATE A LONGLASTING RELATIONSHIP WITH PEOPLE</h1>
                    {/* <h1 className="first-screen__title">{data.textfield}</h1>
                    <h1 className="first-screen__title">{data.textfield2}</h1>
                    <h1 className="first-screen__title">{data.textfield3}</h1> */}
                    {/* <p class="first-screen__text">Laboris culpa ea incididunt dolore ipsum tempor duis&nbsp;do ullamco eiusmod officia magna ad id.</p> */}
                    <a className="first-screen__button button" href="#">
                      <span className="button__text">Learn More</span>
                    </a>
                  </div>
                </div>
                <img className="first-screen__phone" src={bannerPhone} data-lazy={bannerPhone} alt="" data-lazy-mob />
                <img className="first-screen__elements" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/first-screen-elements.svg" alt="" data-lazy-mob />
              </div>
            </div>
            <div className="first-screen__pseudotext" data-title="work faster with powerful tools" />
            <img className="first-screen__bg-1" data-bg={bannerFront} src={bannerFront} data-lazy-mob />
            <img className="first-screen__bg-2" data-bg={bannerButton} src={bannerButton} data-lazy-mob />
          </section>
          {/* FIRST SCREEN END */}
          <div className="main-top">
            {/* BEGIN THE MOST POPULAR */}
            <article className="most-popular">
              <div className="most-popular__main wrapper">
                <div className="most-popular__cols">
                  <div className="most-popular__right">
                    <h2 className="most-popular__title main-title main-title_align-left" data-title="The most popular application 2021">
                      <span className="main-title__text">The most popular application&nbsp;2021</span>
                    </h2>
                    <p className="most-popular__text">Culpa non ex tempor qui nulla laborum. Laboris&nbsp;culpa ea incididunt dolore ipsum.</p>
                    <ul className="check-list">
                      <li className="check-list__item">Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.
                    </li>
                      <li className="check-list__item">Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut.</li>
                      <li className="check-list__item">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</li>
                    </ul>
                  </div>
                  <div className="most-popular__left">
                    <img className="most-popular__image" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="https://via.placeholder.com/609x548" alt="" />
                  </div>
                </div>
              </div>
              <img className="most-popular__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
            </article>
            {/* THE MOST POPULAR END */}
            {/* BEGIN WHAT YOU GET */}
            <section className="what-you-get">
              <div className="what-you-get__main wrapper">
                <h3 className="main-title" data-title="See what you will get with us" id="features">
                  <span className="main-title__text">See what you will get with&nbsp;us</span>
                </h3>
                <div className="features">
                  <article className="feature">
                    <div className="feature__bg">
                      <img className="feature__image" src={'http://localhost:1337' + dataPopular.url} data-lazy="https://via.placeholder.com/588x650" alt="" />
                      <div className="feature__content">
                        <h4 className="feature__title">{dataPopular.title}</h4>
                        <p className="feature__text">{dataPopular.titleHead}</p>
                      </div>
                    </div>
                  </article>
                  <article className="feature">
                    <div className="feature__bg">
                      <img className="feature__image" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="https://via.placeholder.com/588x650" alt="" />
                      <div className="feature__content">
                        <h4 className="feature__title">Money saving services</h4>
                        <p className="feature__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                      </div>
                    </div>
                  </article>
                  <article className="feature">
                    <div className="feature__bg">
                      <img className="feature__image" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="https://via.placeholder.com/588x650" alt="" />
                      <div className="feature__content">
                        <h4 className="feature__title">Usability interface</h4>
                        <p className="feature__text">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <img className="what-you-get__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
            </section>
            {/* WHAT YOU GET END */}
          </div>
          {/* BEGIN PRESENTATION */}
          <section className="presentation-block">
            <div className="presentation-block__main wrapper">
              <h3 className="presentation-block__title main-title main-title_white" data-title="Watch our UI presentation" id="ui">
                <span className="main-title__text">Watch our UI presentation</span>
              </h3>
              <div className="ui-slider js-slider">
                <div className="ui-slider__arrows arrows-1 js-slider-arrows">
                </div>
                <div className="ui-slider__all">
                  <div className="ui-slider__list-wrap js-slider-loader loaded">
                    <div className="ui-slider__list js-slider-list">
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src={app1} data-lazy={app1} alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src={app2} data-lazy={app2} alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src={app3} data-lazy={app3} alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src={app4} data-lazy={app4} alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" data-lazy={app5} src={app5} alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                      <div className="ui-slider__item js-slider-item">
                        <div className="ui-slider__image-wrap">
                          <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="ui-slider__bg">
                      <img className="ui-slider__bg-left" src={app1} data-lazy="assets/img/svg/presentation-left.svg" alt="" />
                      <img className="ui-slider__bg-right" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/presentation-right.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="presentation-block__bg" />
          </section>
          {/* PRESENTATION END */}
          {/* BEGIN DOWNLOAD */}
          <section className="downloads-block">
            <div className="downloads-block__main wrapper">
              <div className="downloads-block__cols">
                <div className="downloads-block__left">
                  <div className="downloads">
                    <h3 className="downloads__title main-title main-title_align-left" data-title="Easy download and ready to use" id="download">
                      <span className="main-title__text">Easy download and ready to use</span>
                    </h3>
                    <p className="downloads__text">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
                    <div className="downloads__buttons">
                      <div className="downloads__button-wrap">
                        <a className="downloads__button button button_big" target="_blank" href="https://play.google.com/store/apps/details?id=com.nobhub.app">
                          <span className="button__cols">
                            <span className="button__col">
                              <span className="button__icon button__icon_1" />
                            </span>
                            <span className="button__col">
                              <span className="button__text-small">Download on the</span>
                              <span className="button__text-big">Google play</span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="downloads__button-wrap">
                        <a className="downloads__button button button_big button_border" href="#">
                          <span className="button__cols">
                            <span className="button__col">
                              <span className="button__icon button__icon_2" />
                            </span>
                            <span className="button__col">
                              <span className="button__text-small">Download on the</span>
                              <span className="button__text-big">App store</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="downloads-block__right">
                  <div className="prices">
                    <div className="prices__col">
                      <div className="prices__top">
                        <h4 className="prices__title">basic</h4>
                        <span className="prices__cost">$12<span>.99</span></span>
                        <span className="prices__per">/per month</span>
                      </div>
                      <ul className="unordered">
                        <li className="unordered__item">Proident excepteur</li>
                        <li className="unordered__item">Veniam occaecat id ea</li>
                        <li className="unordered__item"><b>Labore do nulla ipsum</b></li>
                        <li className="unordered__item">Culpa non ex tempor qui</li>
                      </ul>
                    </div>
                    <div className="prices__col">
                      <div className="prices__top">
                        <h4 className="prices__title">popular</h4>
                        <span className="prices__cost">$99<span>.99</span></span>
                        <span className="prices__per">/per month</span>
                      </div>
                      <ul className="unordered">
                        <li className="unordered__item"><b>Velit occaecat duis</b></li>
                        <li className="unordered__item">Culpa non ex tempor qui</li>
                        <li className="unordered__item">Excepteur cupidatat consectetur</li>
                        <li className="unordered__item">Proident excepteur</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="downloads-block__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
          </section>
          {/* DOWNLOAD END */}
          {/* BEGIN RESPONSES */}
          <div className="responses-block">
            <div className="responses-block__main wrapper js-slider">
              <div className="responses-block__cols">
                <div className="responses-block__left">
                  <h3 className="responses-block__title main-title main-title_align-left" data-title="They say about us" id="testimonials">
                    <span className="main-title__text">They say about us</span>
                  </h3>
                </div>
                <div className="responses-block__right arrows-2 js-slider-arrows" />
              </div>
              <div className="responses js-slider-loader loaded">
                <div className="responses__list js-slider-list js-slider-news js-cols">
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="assets/img/author_2.png" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="responses-block__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
          </div>
          {/* RESPONSES END */}
          {/* BEGIN FREE TRIAL */}
          <section className="trial-block">
            <div className="trial-block__main wrapper">
              <div className="trial" id="trial">
                <div className="trial__bg">
                  <img className="trial__bg-left" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-left.svg" alt="" />
                  <img className="trial__bg-right" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-right.svg" alt="" />
                </div>
                <div className="trial__icons-wrap">
                  <span className="trial__pseudotext">Get a free trial for 30 days</span>
                  <img className="trial__icons" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-icons.svg" alt="" />
                </div>
                <div className="trial__content">
                  <div className="trial__cell">
                    <span className="above-title">trendy application</span>
                    <h3 className="trial__title">Get a free trial for <span className="orange">30</span> days</h3>
                    <a className="trial__button button js-popup-open" href="#trial-popup">
                      <span className="button__text">Get a free trial</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="trial-block__bg" />
            <img className="trial-block__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
          </section>
          {/* FREE TRIAL END */}
          {/* BEGIN FAQ */}
          <div className="faq-block">
            <div className="faq-block__main wrapper">
              <div className="faq-block__cols">
                <div className="faq-block__left">
                  <a className="open-video js-popup-open js-popup-video" data-frame="https://www.youtube.com/embed/pYRIfaKGo-c?autoplay=1" data-width={560} data-height={315} href="#video-popup">
                    <video width="100%" height="100%" controls>
                      <source src="https://nobhub.com/assets/BannerVideo.mp4" type="video/mp4" />
                    </video>
                    <span className="open-video__icon" />
                  </a>
                </div>
                <div className="faq-block__right">
                  <h3 className="faq-block__title main-title main-title_align-left" data-title="Frequently Asked Questions" id="faq">
                    <span className="main-title__text">Frequently Asked Questions</span>
                  </h3>
                  <div className="faq js-faq">
                    <article className="faq__item js-faq-item active">
                      <h3 className="faq__title">
                        <a className="faq__button js-faq-button" href="javascript:void(0);">How to start
                        using Upland Application?</a>
                      </h3>
                      <div className="faq__hide js-faq-hide">
                        <div className="faq__content">
                          <p>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum
                          amet eu dolore labore in aliquip.</p>
                        </div>
                      </div>
                    </article>
                    <article className="faq__item js-faq-item">
                      <h3 className="faq__title">
                        <a className="faq__button js-faq-button" href="javascript:void(0);">How can I
                        register?</a>
                      </h3>
                      <div className="faq__hide js-faq-hide">
                        <div className="faq__content">
                          <p>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum
                          amet eu dolore labore in aliquip. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p>
                        </div>
                      </div>
                    </article>
                    <article className="faq__item js-faq-item">
                      <h3 className="faq__title">
                        <a className="faq__button js-faq-button" href="javascript:void(0);">Can I use free
                        plan permanently?</a>
                      </h3>
                      <div className="faq__hide js-faq-hide">
                        <div className="faq__content">
                          <p>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum
                          amet eu dolore labore in aliquip. Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <img className="faq-block__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
          </div>
          {/* FAQ END */}
          {/* BEGIN LATEST NEWS*/}
          <div className="latest-block">
            <div className="latest-block__main wrapper">
              <div className="latest-block__cols">
                <div className="latest-block__left">
                  <h2 className="latest-block__title main-title main-title_align-left" data-title="Read the latest news and articles">
                    <span className="main-title__text">Read the latest news and articles</span>
                  </h2>
                  <p className="latest-block__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                  <a className="read-more" href="#">Read more</a>
                </div>
                <div className="latest-block__right">
                  <div className="latest-news js-slider">
                    <div className="latest-news__arrows js-slider-arrows arrows-2" />
                    <div className="latest-news__list-wrap js-slider-loader loaded">
                      <div className="latest-news__list js-slider-list js-slider-news js-cols">
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">Launch of a new
                                convenient feature this Saturday. Trend 2020</a>
                              </h4>
                              <p className="latest-news__text">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">Launch of a new
                                convenient feature this Saturday. Trend 2020</a>
                              </h4>
                              <p className="latest-news__text">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">Launch of a new
                                convenient feature this Saturday. Trend 2020</a>
                              </h4>
                              <p className="latest-news__text">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LATEST NEWS END */}
        </main>
        {/* MAIN END */}
        {/* BEGIN FOOTER */}
        <footer className="footer">
          {/* BEGIN SUBSCRIPTION */}
          <div className="subscription wrapper">
            <div className="subscription__bg">
              <div className="subscription__max">
                <span className="above-title">newsletter</span>
                <span className="subscription__title">Be aware of new features</span>
                <span className="subscription__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum
                tempor duis do ullamco eiusmod officia magna ad id.</span>
                <form>
                  <div className="subscribe">
                    <div className="subscribe__left">
                      <input className="subscribe__input text-input" type="text" placeholder="Email" />
                    </div>
                    <div className="subscribe__right">
                      <button className="subscribe__button button">
                        <span className="button__text">Subscribe</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <img className="subscription__envelope" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="https://via.placeholder.com/373x425" alt="" />
            </div>
          </div>
          {/* SUBSCRIPTION END */}
          <div className="footer-top wrapper">
            <a className="footer-logo" href="#">NOBHUB</a>
            <div className="footer-nav">
              <ul className="main-nav main-nav_center">
                <li className="main-nav__item">
                  <a className="main-nav__link js-scrolltoid" href="#features">Features</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__link js-scrolltoid" href="#download">Download app</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__link js-scrolltoid" href="#ui">UI screens</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__link js-scrolltoid" href="#testimonials">Testimonials</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__link js-scrolltoid" href="#faq">FAQ</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__button js-scrolltoid" href="#trial">Free trial</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom__main wrapper">
              <span className="copyrights">© All rights reserved. Upland 2020</span>
            </div>
          </div>
          <div className="footer__bg" data-bg="assets/img/footer-bg.png" />
        </footer>
        {/* FOOTER END */}
      </div>
      {/* BEGIN TRIAL POPUP */}
      <div className="popup js-popup" id="trial-popup">
        <div className="popup__row">
          <div className="popup__cell">
            <div className="popup__window popup__window_bg">
              <button className="popup__close close-button js-popup-close" />
              <div className="popup__content">
                <form>
                  <div className="trial-form">
                    <span className="trial-form__title">Get a free trial for <span className="orange">30</span>&nbsp;days</span>
                    <span className="trial-form__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                    incididunt dolore ipsum tempor duis do ullamc.</span>
                    <input className="text-input" type="text" placeholder="Name" />
                    <input className="text-input" type="email" placeholder="Email" />
                    <textarea className="textarea" placeholder="Message" defaultValue={""} />
                    <button className="trial-form__button button" type="submit">
                      <span className="button__text">Get a free trial</span>
                    </button>
                  </div>
                </form>
              </div>
              <span className="popup__pseudotitle" data-title="Get a free trial for 30 days" />
            </div>
          </div>
          <div className="popup__mask js-popup-close" />
        </div>
      </div>
      {/* TRIAL POPUP END */}
      {/* BEGIN VIDEO POPUP */}
      <div className="popup popup_video js-popup" id="video-popup">
        <div className="popup__row">
          <div className="popup__cell">
            <div className="popup__window">
              <button className="popup__close close-button close-button_white js-popup-close" />
              <div className="video-frame js-responsive-video js-video-frame" />
            </div>
          </div>
          <div className="popup__mask js-popup-close" />
        </div>
      </div>
    </div>
  );
}

export default App;
