import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ showModal, props, handleModal }) => {
  const closeModal = () => {
    handleModal(null, false);
  };

  return (
    <div onClick={closeModal}>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        preventScroll={true}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            border: "none",
            background: "none",
            overflow: "auto",
            borderRadius: 0,
            outline: "none",
            padding: 0,
          },
        }}
      >
        <div className={css.modal}>
          <img
            //unsplash
            src={props?.urls.regular}
            alt={props?.alt_description}

            // pixabay                        // <--- api for testing
            // src={props?.largeImageURL}
            // alt={props?.tags}
          />
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
