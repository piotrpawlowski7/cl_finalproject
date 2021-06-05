import { useState, useEffect } from "react";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import EditSolutionForm from "./EditSolutionForm";
import "./AddSolution.scss";

import "./Solutions.scss";
const API_URL = "http://localhost:3000";
// import { API_URL } from './../../constants';

export default function GetData() {
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
  const [form, setForm] = useState({
    image: "",
    name: "",
    link: "",
    category: "",
    tags: [],
    description: "",
  });
  useEffect(() => {
    setForm(currentSolution);
  });
  const [submitting, setSubmitting] = useState(false);

  const refreshList = () => setInvalidationToken(Math.random());
  useEffect(() => {
    fetch(`${API_URL}/solutions`)
      .then((response) => response.json())
      .then((singleSolution) => setSolutions(singleSolution));
    console.log(solutions);
  }, [invalidationToken]);

  if (solutions.length === 0) {
    return null;
  }

  const updateSolution = (id, updatedSolution) => {
    setEditing(false);
    setSolutions(
      solutions.map(solution => (solution.id === id ? updatedSolution : solution))
    );
    console.log(solutions);
    fetch(`${API_URL}/solutions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: form.image,
        name: form.name,
        link: form.link,
        category: form.category,
        description: form.description,
        tags: form.tags,
      }),
    }).then((response) => response.json())
    .then(() => refreshList());
    
  };

  const handleRemoveSolution = (id) => {
    fetch(`${API_URL}/solutions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => refreshList());
  };

  const handleEditSolution = (form) => {
    setEditing(true);
    setCurrentSolution({
      id: form.id,
      image: form.image,
      name: form.name,
      link: form.link,
      category: form.category,
      tags: form.tags,
      description: form.description,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    fetch(`${API_URL}/solutions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: form.image,
        name: form.name,
        link: form.link,
        category: form.category,
        description: form.description,
        tags: [form.tags],
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
        <h2>Edytuj rozwiązanie</h2>

        <EditSolutionForm
          editing={editing}
          setEditing={setEditing}
          currentSolution={currentSolution}
          updateSolution={updateSolution}
        ></EditSolutionForm>
      </div>
      {/* <tr>
          <TextInput value={name} name="name" onChange={onChange}></TextInput>
          <TextInput value={last} name="last" onChange={onChange} ></TextInput>
          <td>
            <button onClick={this.saveChanges} >Done</button>
          </td>
        </tr> */}
        
      {solutions.map((solution) => (
        <tr key={solution.id}>
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
                {solution.tags.map((innerEl) => (
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary nohover"
                      disabled
                    >
                      {innerEl}
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
                    onClick={() => {
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
    </>
  );
}
