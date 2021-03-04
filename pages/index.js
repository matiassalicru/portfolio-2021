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

export default function Home() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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
      </Head>

      <Layout>
        <section className={home.backgroundColor}>
          <section className={home.section}>
            <div className={home.titleBox}>
              <h1 className={home.title}>Matias Salicrú</h1>
            </div>
            <h3 className={home.subtitle}>Front-end Developer</h3>

            <strong className={home.scrollText}>Scroll down </strong>
            <div className={home.scrollArrow}>
              <Arrow />
            </div>

            <hr className={home.Vline} />
          </section>
        </section>

        <section className={about.container}>
          <h1 className={about.title}>My story</h1>
          <div className={about.profileImage}></div>
          <p className={about.story}>
            I'm Matias, 24 years old, a student of systems enginnering who is
            looking for his first job in IT, I'm a self taught developer who has
            been making his road to front-end developer since February 2020.
            I like team work, love technology, and I have a mindset of never stop learning! 
          </p>
          <hr className={about.Vline} />
        </section>
        <section className={skills.container}>
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
        <section className={actual.container}>
          <hr className={actual.Vline} />
          <h1 className={actual.title}>What I'm in right now</h1>

          <p className={actual.p}>
            Right now I'm working in my last project, a website for a little
            store called @darkstar.ar (you can visit it in my projects below)
            while I'm also in a course about NodeJS.
          </p>

          <hr className={actual.Vline} />
        </section>
        <section className={projects.container}>
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
                description="2nd Freelance Job, An e-commerce website for an entrepreneurship called @darkstar.ar, based in React"
                img="https://i.ibb.co/wKt6x5F/darkstar.png"
                btns={true}
                link="https://darkstar.ar/"
                repo="https://github.com/matiassalicru/darkstar"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Login App"
                description="Login App, made in a day just to play with Firebase Authentication"
                img="https://i.ibb.co/1Zm1qHt/login.png"
                btns={true}
                link="https://login-firebase.netlify.app/"
                repo="https://github.com/matiassalicru/Login-app"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Journaling"
                description="Journal App made in React with Firebase in MERN Course"
                img="https://i.ibb.co/mJXqqYh/journal.png"
                btns={true}
                link="https://react-app-cursofh.web.app/"
                repo="https://github.com/matiassalicru/JournalApp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="UPO"
                description="First freelance job, a e-commerce website for an entrepenourship, my first web using React."
                img="https://i.ibb.co/pZqJcr7/upo.png"
                btns={true}
                link="https://upo.com.ar/"
                repo="https://github.com/matiassalicru/upo-bastidores"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="TodosApp"
                description="TodoApp made it with React using hooks like useReducer and useContext, also implemented Custom Hooks, works with localStorage"
                img="https://i.ibb.co/tsFg4sV/todolist.png"
                btns={true}
                link="https://apptodos.netlify.app/"
                repo="https://github.com/matiassalicru/TodoList"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Portfolio"
                description="This portfolio made it with Next.JS, my very first project in Next, I have plans for very big changes upcoming!"
                img="https://i.ibb.co/NmMJ4vL/portfolio.png"
                btns={true}
                link=""
                repo="https://github.com/matiassalicru/portfolio-2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Gif Experts App"
                description="Gifs App using giphy Api, based on React, with a search bar"
                img="https://i.ibb.co/JF4bdq3/giphy.png"
                btns={true}
                link="https://react-app-cursofh.web.app/"
                repo="https://github.com/matiassalicru/JournalApp"
              />
            </SwiperSlide>
          </Swiper>
          <article className={projects.projects_container}>
            <Project
              title="TodosApp"
              description="TodoApp made it with React using hooks like useReducer and useContext, also implemented Custom Hooks, works with localStorage"
              img="https://i.ibb.co/tsFg4sV/todolist.png"
              link="https://apptodos.netlify.app/"
              repo="https://github.com/matiassalicru/TodoList"
              modal
            />
            <Project
              title="Journaling"
              description="Journal App made in React with Firebase in MERN Course"
              img="https://i.ibb.co/mJXqqYh/journal.png"
              link="https://react-app-cursofh.web.app/"
              repo="https://github.com/matiassalicru/JournalApp"
              modal
            />
            <Project
              title="Login App"
              description="Login App, made in a day just to play with Firebase Authentication"
              img="https://i.ibb.co/1Zm1qHt/login.png"
              link="https://login-firebase.netlify.app/"
              repo="https://github.com/matiassalicru/Login-app"
              modal
            />
            <Project
              title="UPO"
              description="First freelance job, a e-commerce website for an entrepenourship, my first web using React."
              img="https://i.ibb.co/pZqJcr7/upo.png"
              link="https://upo.com.ar/"
              repo="https://github.com/matiassalicru/upo-bastidores"
              modal
            />
            <Project
              title="Darkstar.ar"
              description="2nd Freelance Job, An e-commerce website for an entrepreneurship called @darkstar.ar, based in React"
              img="https://i.ibb.co/wKt6x5F/darkstar.png"
              modal
              link="https://darkstar.ar/"
              repo="https://github.com/matiassalicru/darkstar"
            />
            <Project
              title="Gifs Expert App"
              description="Gifs App using giphy Api, based on React, with a search bar"
              img="https://i.ibb.co/JF4bdq3/giphy.png"
              modal
              link="https://matiassalicru.github.io/Gif-Expert-App/"
              repo="https://github.com/matiassalicru/Gif-Expert-App"
            />
            <Project
              title="Portfolio"
              description="This portfolio made it with Next.JS, my very first project in Next, I have plans for very big changes upcoming!"
              img="https://i.ibb.co/NmMJ4vL/portfolio.png"
              link="https://matiassalicru.github.io/Gif-Expert-App/"
              repo="https://github.com/matiassalicru/Gif-Expert-App"
              modal
            />
          </article>
          <p className={projects.p} style={{ marginTop: 40, fontSize: 22 }}>
            Do you have a project in mind? Are you looking for a Front-end
            developer with experience in React?
            <span> Do not hesitate to contact me </span>
          </p>
          <a
            className={projects.p}
            style={{ marginTop: 0, fontSize: 22, width: "fit-content" }}
            target="_blank"
            href="https://drive.google.com/file/d/1f8i_7tjRLYS1vNQujAtMaoMCbohxyI9m/view?usp=sharing"
          >
            Download resume
          </a>
          <hr className={projects.Vline} />
        </section>
        <section className={footer.container}>
          <hr className={footer.Vline} />

          <div className={footer.main}>
            <div className={footer.p_container}>
              <h1 className={footer.title}>Contact Data</h1>
              <p>mattiassalicru@gmail.com</p>
              <p>+54 3834681214</p>
              <p>Córdoba, Córdoba, Argentina</p>
            </div>

            <div className={footer.social_media_container}>
              <h1 className={footer.title}>Social Media</h1>
              <a href="https://github.com/matiassalicru">Github</a>
              <a href="https://linkedin.com/in/matias-salicru">LinkedIn</a>
              <a href="https://twitter.com/matiassalicru">Twitter</a>
            </div>

            <div className={footer.p_container}>
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
