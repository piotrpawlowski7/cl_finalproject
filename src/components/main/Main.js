import "./Main.scss";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-bootstrap/Pagination";
import GetData from "../solutions/Solutions";

function Main() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive">
            <table class="table">
              <thead class="thead-dark">
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
              <tbody>
               <GetData></GetData>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
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
