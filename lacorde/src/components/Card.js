import Modal from "./Modal";

function Card(props) {
  function handleDelete() {
    document.querySelector(`.${props.title[props.title.length - 1]}`).remove();
  }
  return (
    <>
      <Modal handleDelete={handleDelete} />
      <div
        className={`card ${props.title[props.title.length - 1]}`}
        style={{ width: "18rem" }}
      >
        <img src="/img/tron.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Go somewhere
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
