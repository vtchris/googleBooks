import React from "react";

const Book = ({ id, title, author, description, image, link, handleSave }) => {
  return (
    <div className="card m-2">
      <div className="card-header bg-light">
        <img className="mr-3 img-fluid float-left" style={{maxHeight:"100px"}} src={image} alt="book" />
        <h2 className="float-left">{title}</h2>{" "}
      </div>
      <ul className="list-group list-unstyled">
        <li className="list-group-item">{author}</li>
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">
          <a href={link} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </li>
      </ul>
      <div className="card-footer bg-light">
        <button className="btn btn-primary" id={id} onClick={() => handleSave(id)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Book;
