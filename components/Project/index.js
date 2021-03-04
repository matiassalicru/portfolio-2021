import projects from "styles/Projects.module.scss";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Project = ({ description, img, link, repo, btns, modal, deployed }) => {
  const router = useRouter();

  const clicked = () => {
    if (modal) {
      Swal.fire({
        text: `${description}`,
        confirmButtonText: "Link",
        cancelButtonText: "Repo",
        showCloseButton: true,
        showCancelButton: true,
        footer: `Project deployed on ${deployed}`,
        customClass: {
          container: `${projects.swalContainer}`,
          header: `${projects.swalHeader}`,
          footer: `${projects.swalFoot}`,
          popup: `${projects.swalPopUp}`,

          closeButton: `${projects.swalCloseBtn}`,
          confirmButton: `${projects.swalLinkBtn}`,
          cancelButton: `${projects.swalRepoBtn}`,
        },
      }).then((value) => {
        if (value.isConfirmed) {
          router.push(`${link}`);
        } else if (value.dismiss === "cancel") {
          router.push(`${repo}`);
        }
      });
    } else {
      return;
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
            <button
              onClick={() => router.push(`${link}`)}
              className={projects.btn_primary}
            >
              Link
            </button>
            <button
              onClick={() => router.push(`${repo}`)}
              className={projects.btn_secondary}
            >
              Repo
            </button>
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
          background-repeat: no-repeat;
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
