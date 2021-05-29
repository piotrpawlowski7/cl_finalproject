import {useState, useEffect} from 'react';

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_URL = 'http://localhost:3000';
// import { API_URL } from './../../constants';

export default function GetData() {
   
  const [solutions, setSolutions] = useState([]);
  const [invalidationToken, setInvalidationToken] = useState(Math.random());
  const refreshList = () => setInvalidationToken(Math.random());
  useEffect(() => {
    fetch(`${API_URL}/solutions`)
      .then(response => response.json())
      .then(singleSolution => setSolutions(singleSolution));
  }, [invalidationToken]);


  const handleRemoveSolution = (id) => {
    fetch(`${API_URL}/solutions/${id}`, {
      method: 'DELETE'
    }).then(
      response => response.json()
    ).then(() => refreshList());
    };

  if (solutions.length === 0) {
    return null;
  }

  return <> {
  solutions.map(solution => (
 <tr key={solution.id}>
                <th scope="row"><div className="td_el">{solution.id}</div></th>
                <td><div className="td_el">   
                {solution.image}</div>
                </td>
                <td><div className="td_el">{solution.name}</div></td>
                <td><div className="td_el"><a href="#">{solution.link}</a></div></td>
                <td><div className="td_el">Site menu</div></td>
                <td><div className="td_el">{solution.tags}</div></td>
                <td className="description">{solution.description}
                </td>
                <td>
               <div className="content-control">
               
                                            <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-table"></i><FontAwesomeIcon icon={faEdit} /></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button onClick={() => handleRemoveSolution(solution.id)} class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i><FontAwesomeIcon icon={faTrash} /></button>
                                                </li>
                                            </ul>
                                            </div>
                </td>
                </tr>
  )
  )
  }
  </>
}