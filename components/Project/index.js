import projects from "styles/Projects.module.scss";

const Project = ({ description, img, link, repo }) => {
  return (
    <>
      <div className="project">
        <div className="card">
          <p>{description}</p>
        </div>
        <div className={projects.button_container}>
          <button className={projects.btn_primary}>Link</button>
          <button className={projects.btn_secondary}>Repo</button>
        </div>
      </div>
      <style jsx>{`
        .project {
        }

        .card {
          height: 400px;
          width: 250px;
          border-radius: 35px;
          margin: 0 0 23px 0;
          border: none;
          background-image: url(${img});
          background-position: center;
          background-size: cover;
          box-shadow: 0 6px 6px #00000085;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        p {
          display: flex;
          align-items: center;
          text-align: center;
          color: white;
          width: 90%;
          height: 100%;
          font-size: 1.25em;
          padding: 0 10px;
          opacity: 0;
          border-radius: 35px;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `}</style>
    </>
  );
};

export default Project;
