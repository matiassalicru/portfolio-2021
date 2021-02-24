import Head from "next/head";
import Layout from "components/Layout";
import Hamburger from "components/Icons/Hamburguer";
import Arrow from "components/Icons/Arrow";
import home from "styles/Home.module.scss";
import about from "styles/About.module.scss";

export default function Home() {
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
        </section>
      </Layout>
    </div>
  );
}
