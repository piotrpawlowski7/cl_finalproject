import "./Main.scss";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-bootstrap/Pagination";
import GetData from "../solutions/Solutions";
import AddSolution from "../solutions/AddSolution";

function Main() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
            
        <AddSolution></AddSolution>
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
              <tbody></tbody>
                 
               <GetData></GetData>
             
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default Main;
