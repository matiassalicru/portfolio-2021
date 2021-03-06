import { useEffect } from "react";
import { Link } from "react-scroll";
import Head from "next/head";
import Layout from "components/Layout";
import home from "styles/Home.module.scss";
import about from "styles/About.module.scss";
import skills from "styles/Skills.module.scss";
import actual from "styles/Actual.module.scss";
import projects from "styles/Projects.module.scss";
import footer from "styles/Footer.module.scss";

//Imports imgs
import Arrow from "components/Icons/Arrow";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Project from "components/Project";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const download = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={home.container}>
      <Head>
        <title>Matias Salicrú</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@matiassalicru" />
        <meta name="twitter:title" content="Matias salicrú" />
        <meta
          name="twitter:description"
          content="Portfolio with projects from Matías Salicrú, know a little more about me"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/608kbZt/Header.png"
        />

        <meta property="og:url" content="https://matiassalicru.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Portfolio Matías Salicrú" />
        <meta
          property="og:description"
          content="Portfolio with projects from Matías Salicrú, know a little more about me"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/608kbZt/Header.png"
        />
      </Head>

      <Layout>
        <section data-aos="fade" className={home.backgroundColor}>
          <section
            data-aos="fade"
            data-aos-duration="8000"
            className={home.section}
          >
            <div className={home.titleBox}>
              <h1
                className={home.title}
                data-aos="zoom-in"
                data-aos-duration="8000"
                data-aos-delay="600"
              >
                Matias
              </h1>
              <hr />
              <h1
                className={home.title}
                data-aos="zoom-in"
                data-aos-duration="8000"
                data-aos-delay="600"
              >
                Salicrú
              </h1>

              {/* <h1 className={home.title}>Salicrú</h1> */}
            </div>
            <h3 className={home.subtitle}>Front-end Developer</h3>

            <strong className={home.scrollText}>Scroll down </strong>
            <div className={home.scrollArrow}>
              <Arrow />
            </div>

            <hr className={home.Vline} />
          </section>
        </section>

        <section data-aos="fade-up" className={about.container}>
          <h1 className={about.title}>My story</h1>
          <div className={about.profileImage}></div>
          <p className={about.story}>
            Hi! My name is
            <b> Matías </b>, I'm a student of Systems Enginnering, I'm a
            <b> front-end web developer </b>
            ready to get his
            <b> first job experience in IT, </b>
            I've been working in some projects{" "}
            <span>
              <Link to="projects" smooth={true}>
                ( see below )
              </Link>
            </span>{" "}
            to put in practice all the things that I learned in the last year.{" "}
            <br />
            <b>
              I love animals 😸 , technology 💻 and team-work 👥 <br />
              Mindset of never stop learning 📝.
            </b>
          </p>
          <hr className={about.Vline} />
        </section>
        <section data-aos="slide-up" className={skills.container}>
          <hr className={skills.Vline} />
          <h1 className={skills.title}>What I'm good at</h1>
          <div className={skills.skillsContainer}>
            <p className={skills.skill}>JavaScript</p>
            <p className={skills.skill}>React</p>
            <p className={skills.skill}>React-Redux</p>

            <p className={skills.skill}>NextJS</p>
            <p className={skills.skill}>Figma</p>

            <p className={skills.skill}>Spanish & english</p>
          </div>
          <hr className={skills.Vline} />
        </section>
        <section data-aos="slide-up" className={actual.container}>
          <hr className={actual.Vline} />
          <h1 className={actual.title}>What I'm in right now</h1>

          <p className={actual.p}>
            Right now I'm working in my last project, a website for a little
            store called{" "}
            <a
              href="https://darkstar.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              @darkstar.ar
            </a>{" "}
            (you can visit it in my projects below) while I'm also in a course
            about NodeJS.
          </p>

          <hr className={actual.Vline} />
        </section>
        <section
          data-aos="fade-up"
          className={projects.container}
          id="projects"
        >
          <h1 className={projects.title}>My projects</h1>
          <p className={projects.p}>
            All the experience that I earned, comes from this little projects
            that I loved to make
          </p>
          <Swiper
            spaceBetween={1}
            slidesPerView={1.2}
            className={projects.swiper}
          >
            <SwiperSlide>
              <Project
                title="Darkstar.ar"
                description="2nd Freelance Job, An e-commerce website for an entrepreneurship called @darkstar.ar, based in React, this was the largest project I've ever made"
                img="https://i.ibb.co/wKt6x5F/darkstar.png"
                btns={true}
                link="https://darkstar.ar/"
                repo="https://github.com/matiassalicru/darkstar"
                deployed="Firebase"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Login App"
                description="Login App, made in a day just to learn about Firebase Authentication"
                img="https://i.ibb.co/1Zm1qHt/login.png"
                btns={true}
                link="https://login-firebase.netlify.app/"
                repo="https://github.com/matiassalicru/Login-app"
                deployed="Netlify"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Journaling"
                description="Journal App made in React with Firebase in MERN Course from Fernando Herrera"
                img="https://i.ibb.co/mJXqqYh/journal.png"
                btns={true}
                link="https://react-app-cursofh.web.app/"
                repo="https://github.com/matiassalicru/JournalApp"
                deployed="Firebase"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="UPO"
                description="First freelance job, a e-commerce website for an entrepenourship, my first website using React!"
                img="https://i.ibb.co/pZqJcr7/upo.png"
                btns={true}
                link="https://upo.com.ar/"
                repo="https://github.com/matiassalicru/upo-bastidores"
                deployed="CPanel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="TodosApp"
                description="TodoApp made it with React, learning hooks like useReducer and useContext, also implemented Custom Hooks, works with localStorage"
                img="https://i.ibb.co/tsFg4sV/todolist.png"
                btns={true}
                link="https://apptodos.netlify.app/"
                repo="https://github.com/matiassalicru/TodoList"
                deployed="Netlify"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Portfolio"
                description="This portfolio made it with Next.JS, my very first project in Next, this project is in constant update, a blog is the following step!"
                img="https://i.ibb.co/NmMJ4vL/portfolio.png"
                btns={true}
                link=""
                repo="https://github.com/matiassalicru/portfolio-2021"
                deployed="Vercel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Gif Experts App"
                description="Gifs App using giphy Api, based on React, with a search bar, learned a lot about consuming API's"
                img="https://i.ibb.co/JF4bdq3/giphy.png"
                btns={true}
                link="https://matiassalicru.github.io/Gif-Expert-App/"
                repo="https://github.com/matiassalicru/Gif-Expert-App"
                deployed="Firebase"
              />
            </SwiperSlide>
          </Swiper>
          <article className={projects.projects_container}>
            <Project
              title="TodosApp"
              description="TodoApp made it with React, learning hooks like useReducer and useContext, also implemented Custom Hooks, works with localStorage"
              img="https://i.ibb.co/tsFg4sV/todolist.png"
              link="https://apptodos.netlify.app/"
              repo="https://github.com/matiassalicru/TodoList"
              deployed="Netlify"
              modal
            />
            <Project
              title="Journaling"
              description="Journal App made in React with Firebase in MERN Course from Fernando Herrera"
              img="https://i.ibb.co/mJXqqYh/journal.png"
              link="https://react-app-cursofh.web.app/"
              repo="https://github.com/matiassalicru/JournalApp"
              deployed="Firebase"
              modal
            />
            <Project
              title="Login App"
              description="Login App, made in a day just to learn about Firebase Authentication"
              img="https://i.ibb.co/1Zm1qHt/login.png"
              link="https://login-firebase.netlify.app/"
              repo="https://github.com/matiassalicru/Login-app"
              deployed="Netlify"
              modal
            />
            <Project
              title="UPO"
              description="First freelance job, a e-commerce website for an entrepenourship, my first website using React."
              img="https://i.ibb.co/pZqJcr7/upo.png"
              link="https://upo.com.ar/"
              repo="https://github.com/matiassalicru/upo-bastidores"
              deployed="CPanel"
              modal
            />
            <Project
              title="Darkstar.ar"
              description="2nd Freelance Job, An e-commerce website for an entrepreneurship called @darkstar.ar, based in React"
              img="https://i.ibb.co/wKt6x5F/darkstar.png"
              modal
              link="https://darkstar.ar/"
              repo="https://github.com/matiassalicru/darkstar"
              deployed="Firebase"
            />
            <Project
              title="Gifs Expert App"
              description="Gifs App using giphy Api, based on React, with a search bar, learned a lot about consuming API's"
              img="https://i.ibb.co/JF4bdq3/giphy.png"
              modal
              link="https://matiassalicru.github.io/Gif-Expert-App/"
              repo="https://github.com/matiassalicru/Gif-Expert-App"
              deployed="Github Pages"
            />
            <Project
              data-aos="slide-up"
              title="Portfolio"
              description="This portfolio made it with Next.JS, my very first project in Next, this project is in constant update, a blog is the following step!"
              img="https://i.ibb.co/NmMJ4vL/portfolio.png"
              link="https://matiassalicru.com"
              repo="https://github.com/matiassalicru/portfolio-2021"
              deployed="Vercel"
              modal
            />
          </article>
          <p className={projects.p} style={{ marginTop: 40, fontSize: 22 }}>
            Are you looking for a Front-end developer with experience in React?
            I would love to talk with you <br />
            <span> Do not hesitate to contact me </span>
          </p>
          <a
            className={projects.p}
            style={{ marginTop: 0, fontSize: 22, width: "fit-content" }}
            target="_blank"
            href="https://drive.google.com/file/d/1M3QZhbjCz6SVLEULqbfIwEcObGHzGPih/view?usp=sharing"
          >
            Download resume
          </a>
          <hr className={projects.Vline} />
        </section>
        <section className={footer.container}>
          <hr className={footer.Vline} />

          <div data-aos="fade-up" className={footer.main}>
            <div className={footer.p_container}>
              <h1 className={footer.title}>Contact Data</h1>
              <p>mattiassalicru@gmail.com</p>
              <p>+54 3834681214</p>
              <p>Córdoba, Córdoba, Argentina</p>
            </div>

            <div data-aos="fade-up" className={footer.social_media_container}>
              <h1 className={footer.title}>Social Media</h1>
              <a href="https://github.com/matiassalicru">Github</a>
              <a href="https://linkedin.com/in/matias-salicru">LinkedIn</a>
              <a href="https://twitter.com/matiassalicru">Twitter</a>
            </div>

            <div data-aos="fade-up" className={footer.p_container}>
              <h1 className={footer.title}>Personal Info</h1>
              <p>Matias Salicrú</p>
              <p>24 years old</p>
              <p>Student of Systems enginnering</p>
            </div>
          </div>
          <footer className={footer.foot}>
            <small>Made with love by @matiassalicru 🥰</small>
          </footer>
        </section>
      </Layout>
    </div>
  );
}
