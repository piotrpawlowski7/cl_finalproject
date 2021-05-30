import { useState, useEffect } from "react";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Solutions.scss";
const API_URL = "http://localhost:3000";
// import { API_URL } from './../../constants';

export default function GetData() {
  const [solutions, setSolutions] = useState([]);
  const [invalidationToken, setInvalidationToken] = useState(Math.random());
  const refreshList = () => setInvalidationToken(Math.random());
  useEffect(() => {
    fetch(`${API_URL}/solutions`)
      .then((response) => response.json())
      .then((singleSolution) => setSolutions(singleSolution));
      console.log(solutions);
  }, [invalidationToken]);

  const handleRemoveSolution = (id) => {
    fetch(`${API_URL}/solutions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => refreshList());
  };

  // const showTag = () => {
  
  // }

  if (solutions.length === 0) {
    return null;
  }

  


  return (
    <>
      
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
                height="100" alt=""
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
                {
               solution.tags.map(innerEl=> (
                  <li key={solution.id}>
                    <button type="button" class="btn btn-primary nohover" disabled>{innerEl}</button>
                  </li>
                ))
                }
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
                  >
                    <i className="fa fa-table"></i>
                    <FontAwesomeIcon icon={faEdit} style={{marginRight:'0px'}} />
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
                    <FontAwesomeIcon icon={faTrash} style={{marginRight:'0px'}}/>
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
