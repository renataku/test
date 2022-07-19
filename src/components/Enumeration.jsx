import React, { useState, useEffect } from "react";
import "./Enumeration.css";

const About = () => {
  const [items, setItems] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount] = useState(42);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
        console.log(res.results);
      });
  }, [currentPage]);

  const pagination = (pageNo) => {
    if (pageNo < 1 || pageNo > pageCount) return;
    setCurrentPage(pageNo);
  };

  return (
    <div className="enumeration">
      <h3>Enumeration</h3>

      <div className="table-container">
        {!items ? (
          ""
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>status</th>
                <th>species</th>
                <th>type</th>
                <th>gender</th>
                <th>origin</th>
                <th>location</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.species}</td>
                  <td>{item.type}</td>
                  <td>{item.gender}</td>
                  <td>{item.origin.name}</td>
                  <td>{item.location.name}</td>
                  <td>
                    <img src={item.image} className="enumeration-image"></img>
                  </td>
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
