import React, { useState, useEffect, Fragment } from "react";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import EditSolutionForm from "./EditSolutionForm";
import "./AddSolution.scss";
import AddSolution from "../solutions/AddSolution";

import "./Solutions.scss";

const API_URL = "http://localhost:3000";

export default function Solutions() {
  const [solutions, setSolutions] = useState([]);
  const [invalidationToken, setInvalidationToken] = useState(Math.random());

  const initialFormState = {
    id: null,
    image: "",
    name: "",
    link: "",
    category: "",
    tags: [],
    description: "",
  };

  const [editing, setEditing] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(initialFormState);
  const [form, setForm] = useState([initialFormState]);
  useEffect(() => {
    setForm(currentSolution);
  });

  const refreshList = () => setInvalidationToken(Math.random());
  useEffect(() => {
    fetch(`${API_URL}/solutions`)
      .then((response) => response.json())
      .then((singleSolution) => setSolutions(singleSolution));
  }, [invalidationToken]);

  if (solutions.length === 0) {
    return null;
  }

  const updateSolution = (id, updatedSolution) => {
    setEditing(false);
    console.log(id, "iddddd");
    setCurrentSolution(
      solutions.map((solution) =>
        solution.id === id ? updatedSolution : solution
      )
    );

    fetch(`${API_URL}/solutions/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // "id": updatedSolution.id,
        image: updatedSolution.image,
        name: updatedSolution.name,
        link: updatedSolution.link,
        category: updatedSolution.category,
        description: updatedSolution.description,
        tags: [updatedSolution.tags],
      }),
    })
      .then((response) => response.json())
      .then(() => refreshList())
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRemoveSolution = (id) => {
    fetch(`${API_URL}/solutions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => refreshList());
  };

  //pobranie rozwiazania po wcisnieciu przycisku
  const handleEditSolution = (solution) => {
    setEditing(true);
    setCurrentSolution({
      id: solution.id,
      image: solution.image,
      name: solution.name,
      link: solution.link,
      category: solution.category,
      tags: solution.tags,
      description: solution.description,
    });
  };

  function refreshPage() {
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setForm((prevState) => {
      // console.log(prevState)
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  

  return (
    <>
      <div className="wrapper">
        {editing ? (
          <Fragment>
            <h2>Edytuj rozwiązanie</h2>
          
            <EditSolutionForm
              editing={editing}
              setEditing={setEditing}
              currentSolution={currentSolution}
              updateSolution={updateSolution}
            ></EditSolutionForm>
          </Fragment>
        ) : (
          <Fragment>
            <AddSolution></AddSolution>
          </Fragment>
        )}
      </div>
      <div className="container-fluid">
     
        <div className="row">
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Screen</th>
                  <th scope="col">Name</th>
                  <th scope="col">Link</th>
                  <th scope="col">Category</th>
                  <th scope="col">Tags</th>
                  <th scope="col" className="description">
                    Description
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>

              {solutions.map((solution, index) => (
                <tr key={index}>
                  <th scope="row">
                    <div className="td_el">{solution.id}</div>
                  </th>
                  <td>
                    <div className="td_el">
                      <img
                        src={solution.image}
                        className="img-responsive"
                        width="150"
                        height="100"
                        alt=""
                      ></img>
                    </div>
                  </td>
                  <td>
                    <div className="td_el">{solution.name}</div>
                  </td>
                  <td>
                    <div className="td_el">
                      <a href={solution.link}>Link</a>
                    </div>
                  </td>
                  <td>
                    <div className="td_el">{solution.category}</div>
                  </td>
                  <td>
                    <div className="td_el tags_list">
                      
                      <ul>
                        {solution.tags.map((tag) => (
                          <li key={tag}>
                            <button
                              type="button"
                              className="btn btn-primary nohover"
                              disabled
                            >
                              {tag}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="description">{solution.description}</td>
                  <td>
                    <div className="content-control">
                      <ul className="list-inline m-0">
                        <li className="list-inline-item">
                          <button
                            className="btn btn-success btn-sm rounded-0"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add"
                            style={{}}
                            onClick={(solutions) => {
                              handleEditSolution(solution);
                            }}
                          >
                            <i className="fa fa-table"></i>
                            <FontAwesomeIcon
                              icon={faEdit}
                              style={{ marginRight: "0px" }}
                            />
                          </button>
                        </li>
                        <li className="list-inline-item">
                          <button
                            onClick={() => handleRemoveSolution(solution.id)}
                            className="btn btn-danger btn-sm rounded-0"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            <i className="fa fa-edit"></i>
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ marginRight: "0px" }}
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
