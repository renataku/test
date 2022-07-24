import React, { useState, useEffect } from "react";
import "./Enumeration.css";

const About = () => {
  const [items, setItems] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount] = useState(42);
  const [columns, setColumns] = useState({
    id: true,
    name: true,
    status: true,
    species: true,
    type: true,
    gender: true,
    origin: true,
    location: true,
    image: true,
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
      });
  }, [currentPage, columns]);

  const handleCheckbox = (e) => {
    console.log("e.target.value", e.target.value);
    console.log("e.target.checked", e.target.checked);
    console.log("columns", columns);

    setColumns((columns) => ({
      ...columns,
      [e.target.value]: e.target.checked,
    }));
  };

  const pagination = (pageNo) => {
    if (pageNo < 1 || pageNo > pageCount) return;
    setCurrentPage(pageNo);
  };

  return (
    <div className="enumeration">
      <div className="enumeration-header">
        <h3>Enumeration</h3>

        <div className="dropDown">
          Choose columns: id{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="id"
            checked={columns.id}
          />
          name{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="name"
            checked={columns.name}
          />
          status{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="status"
            checked={columns.status}
          />
          species{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="species"
            checked={columns.species}
          />
          type{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="type"
            checked={columns.type}
          />
          gender{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="gender"
            checked={columns.gender}
          />
          origin{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="origin"
            checked={columns.origin}
          />
          location{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="location"
            checked={columns.location}
          />
          image{" "}
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="columns"
            value="image"
            checked={columns.image}
          />
        </div>
      </div>
      <div className="table-container">
        {!items ? (
          ""
        ) : (
          <table className="table">
            <thead>
              <tr>
                {columns.id ? <th>id</th> : ""}
                {columns.name ? <th>name</th> : ""}
                {columns.status ? <th>status</th> : ""}
                {columns.species ? <th>species</th> : ""}
                {columns.type ? <th>type</th> : ""}
                {columns.gender ? <th>gender</th> : ""}
                {columns.origin ? <th>origin</th> : ""}
                {columns.location ? <th>location</th> : ""}
                {columns.image ? <th>image</th> : ""}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  {columns.id ? <td>{item.id}</td> : ""}
                  {columns.name ? <td>{item.name}</td> : ""}
                  {columns.status ? <td>{item.status}</td> : ""}
                  {columns.species ? <td>{item.species}</td> : ""}
                  {columns.type ? <td>{item.type}</td> : ""}
                  {columns.gender ? <td>{item.gender}</td> : ""}
                  {columns.origin ? <td>{item.origin.name}</td> : ""}
                  {columns.location ? <td>{item.location.name}</td> : ""}
                  {columns.image ? (
                    <td>
                      <img src={item.image} className="enumeration-image"></img>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <nav className="d-flex justify-content-center align-items-end">
        <ul className="pagination">
          <li className="page-item" onClick={() => pagination(1)}>
            <p className="page-link">&lt;&lt;</p>
          </li>
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
            onClick={() => pagination(currentPage - 1)}
          >
            <p className="page-link">&lt;</p>
          </li>
          {[...Array(pageCount)].map((_, index) => (
            <li
              className={
                index + 1 === currentPage ? "page-item active" : "page-item"
              }
              onClick={() => pagination(index + 1)}
            >
              <p className="page-link">{index + 1}</p>
            </li>
          ))}
          <li
            className={
              currentPage === pageCount ? "page-item disabled" : "page-item"
            }
            onClick={() => pagination(currentPage + 1)}
          >
            <p className="page-link">&gt;</p>
          </li>
          <li className="page-item" onClick={() => pagination(pageCount)}>
            <p className="page-link">&gt;&gt;</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
