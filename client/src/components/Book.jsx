import React from "react";

const Book = ({ id, title, authors, description, image, link, handleSave }) => {
  return (
    <div className="card">
      <div className="card-header"><img src={image} alt="book" /> {title}</div>
      <ul>
        <li>{authors.join(", ")}</li>
        <li>{description}</li>        
        <li>
          <a href={link} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </li>
        
      </ul>
      <div className="card-footer">
      <button id={id} onClick={() => handleSave(id)}>Save</button>
      </div>
    </div>
  );
};

export default Book;
