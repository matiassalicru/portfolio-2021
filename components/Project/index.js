import projects from "styles/Projects.module.scss";
import Swal from "sweetalert2";

const Project = ({ description, img, link, repo, btns, modal }) => {
  const clicked = () => {
    if (modal) {
      Swal.fire({
        // title: "Hello!",
        text: `${description}`,
        confirmButtonText: "Link",
        cancelButtonText: "Repo",
        showCancelButton: true,
        footer: "Project deployed on Netlify",
        customClass: {
          container: `${projects.swalContainer}`,
          header: `${projects.swalHeader}`,
          footer: `${projects.swalFoot}`,
          popup: `${projects.swalPopUp}`,
          
          title: "...",
          closeButton: "...",
          icon: "...",
          image: "...",
          content: "...",
          htmlContainer: "...",
          input: "...",
          inputLabel: "...",
          validationMessage: "...",
          actions: "...",
          confirmButton: "...",
          denyButton: "...",
          cancelButton: "...",
          loader: "...",
          footer: "....",
        },
      });
    } else {
      return
    }
  };

  return (
    <>
      <div className={projects.project} onClick={clicked}>
        <div className={` card ${projects.card}`}>
          <p>{description}</p>
        </div>
        {btns && (
          <div className={projects.button_container}>
            <button className={projects.btn_primary}>Link</button>
            <button className={projects.btn_secondary}>Repo</button>
          </div>
        )}
      </div>

      <style jsx>{`
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
          transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .foot {
          background: red;
        }
      `}</style>
    </>
  );
};

export default Project;
