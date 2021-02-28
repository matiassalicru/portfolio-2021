import Head from "next/head";
import Image from "next/image";
import Layout from "components/Layout";
import Hamburger from "components/Icons/Hamburguer";
import Arrow from "components/Icons/Arrow";
import home from "styles/Home.module.scss";
import about from "styles/About.module.scss";
import skills from "styles/Skills.module.scss";
import actual from "styles/Actual.module.scss";
import projects from "styles/Projects.module.scss";
import footer from "styles/Footer.module.scss";

//Imports imgs

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Project from "components/Project";

export default function Home() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  return (
    <div className={home.container}>
      <Head>
        <title>Matias Salicrú</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={home.backgroundColor}>
          <section className={home.section}>
            <div className={home.menu}>
              <Hamburger width="50" height="30" />
            </div>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            maiores, quisquam suscipit voluptas nobis ullam ipsa ea fuga
            tempora, et soluta. Asperiores a esse corporis explicabo eveniet
            veritatis ea facere.
          </p>
          <hr className={about.Vline} />
        </section>
        <section className={skills.container}>
          <hr className={skills.Vline} />
          <h1 className={skills.title}>What I'm good at</h1>
          <div className={skills.skillsContainer}>
            <div className={skills.row}>
              <p className={skills.skill}>Javascript</p>
              <p className={skills.skill}>React</p>
              <p className={skills.skill}>React-Redux</p>
            </div>

            <div className={skills.row}>
              <p className={skills.skill}>NextJS</p>
              <p className={skills.skill}>Figma</p>
            </div>

            <div className={skills.row}>
              <p className={skills.skill}>Spanish & english</p>
            </div>
          </div>
          z
          <hr className={skills.Vline} />
        </section>
        <section className={actual.container}>
          <hr className={actual.Vline} />
          <h1 className={actual.title}>What I'm in right now</h1>

          <p className={actual.p}>
            Right now I'm working in my last project, a website for a little
            store called @darkstar.ar while I'm also in a course about NodeJS.
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
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              />
            </SwiperSlide>
          </Swiper>

          <p className={projects.p} style={{ marginTop: 40, fontSize: 22 }}>
            Do you have a project in mind? Are you looking for a Front-end
            developer with experience in React? Do not hesitate to contact me
          </p>
          <hr className={projects.Vline} />
        </section>
        <section className={footer.container}>
          <hr className={footer.Vline} />

          <div className={footer.main}>
            <h1 className={footer.title}>Contact Data</h1>

            <div className={footer.p_container}>
              <p>mattiassalicru@gmail.com</p>
              <p>+54 3834681214</p>
              <p>Córdoba, Córdoba, Argentina</p>
            </div>

            <h1 className={footer.title}>Social Media</h1>
            <div className={footer.social_media_container}>
              <a href="https://github.com/matiassalicru">Github</a>
              <a href="https://linkedin.com/in/matias-salicru">LinkedIn</a>
              <a href="https://twitter.com/matiassalicru">Twitter</a>
            </div>

            <h1 className={footer.title}>Personal Info</h1>
            <div className={footer.p_container}>
              <p>Matias Salicrú</p>
              <p>24 years old</p>
              <p>Student of Systems enginnering</p>
            </div>

            <footer className={footer.foot}>
              <small>Made with love by @matiassalicru 🥰</small>
            </footer>
          </div>
        </section>
      </Layout>
    </div>
  );
}
