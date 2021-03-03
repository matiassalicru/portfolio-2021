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
            {/* <div className={home.menu}> */}
            {/* <Hamburger width="50" height="30" /> */}
            {/* </div> */}
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
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                btns={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://i.ibb.co/L8Dddbd/login.png"
                btns={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                btns={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                btns={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                btns={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
                img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                btns={true}
              />
            </SwiperSlide>
          </Swiper>
          <article className={projects.projects_container}>
            <Project
              description="Login app donde utilicé firebase authentication, proyecto creado en torno a React Js"
              img="https://i.ibb.co/jgK7Gb1/login.png"
              modal
            />
            <Project
              description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
              img="https://i.pinimg.com/564x/c1/1f/0b/c11f0b4fe9a159c897e02394566fe709.jpg"
              modal
            />
            <Project
              description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
              img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              modal
            />
            <Project
              description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
              img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              modal
            />
            <Project
              description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
              img="https://i.pinimg.com/564x/c7/57/77/c7577748314fd985a434179b3a13d5a2.jpg"
              modal
            />
            <Project
              description="Para este catbot utilicé React y lo cree en un curso de una comunidad llamada Refactor Devs"
              img="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              modal
            />
          </article>
          <p className={projects.p} style={{ marginTop: 40, fontSize: 22 }}>
            Do you have a project in mind? Are you looking for a Front-end
            developer with experience in React?
            <span> Do not hesitate to contact me </span>
          </p>
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
