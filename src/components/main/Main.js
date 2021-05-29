import './Main.scss'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from 'react-bootstrap/Pagination';
import GetData from '../solutions/Solutions';

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
                <th scope="col" className="description">Description</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                
  
                <tr>
                <th scope="row"><div className="td_el">1</div></th>
                <td><div className="td_el">   
                <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" class="img-responsive" alt="Cinque Terre" width="150" height="100"></img>
                </div></td>
                <td><div className="td_el">4 item section menu</div></td>
                <td><div className="td_el"><a href="#">http://</a></div></td>
                <td><div className="td_el">Site menu</div></td>
                <td><div className="td_el">       
                <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
                    </div></td>
                <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus tellus sit amet erat lacinia porta. Sed eu ligula sodales, dignissim velit a, commodo mi. Nunc ut velit sed nibh vehicula venenatis eu id risus. Suspendisse fringilla tempus augue vel blandit. Sed dictum sed purus posuere feugiat. Praesent dictum nulla quis lacinia maximus. Nulla porta, magna ac hendrerit imperdiet.
                </td>
                <td>
               <div className="content-control">
               
                                            <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-table"></i><FontAwesomeIcon icon={faEdit} /></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i><FontAwesomeIcon icon={faTrash} /></button>
                                                </li>
                                            </ul>
                                            </div>
                </td>
                </tr>
                <tr>
                <th scope="row"><div className="td_el">2</div></th>
                <td><div className="td_el">
                <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" class="img-responsive" alt="Cinque Terre" width="150" height="100"></img>
                </div></td>
                <td><div className="td_el">4 item section menu</div></td>
                <td><div className="td_el"><a href="#">http://</a></div></td>
                <td><div className="td_el">Site menu</div></td>
                <td>
                <div className="td_el">       
                <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
                    </div></td>
                <td>Sed eu ligula sodales, dignissim velit a, commodo mi. Nunc ut velit sed nibh vehicula venenatis eu id risus. Suspendisse fringilla tempus augue vel blandit. Sed dictum sed purus posuere feugiat. Praesent dictum nulla quis lacinia maximus. Nulla porta, magna ac hendrerit imperdiet, lorem nisl semper orci, vitae gravida turpis lorem eget lorem.
                </td>
                <td>
               <div className="content-control">
               
                                            <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-table"></i><FontAwesomeIcon icon={faEdit} /></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i><FontAwesomeIcon icon={faTrash} /></button>
                                                </li>
                                            </ul>
                                            </div>
                </td>
                </tr>

                <tr>
                <th scope="row"><div className="td_el">3</div></th>
                <td><div className="td_el">
                <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" class="img-responsive" alt="Cinque Terre" width="150" height="100"></img>
                </div></td>
                <td><div className="td_el">4 item section menu</div></td>
                <td><div className="td_el"><a href="#">http://</a></div></td>
                <td><div className="td_el">Site menu</div></td>
                <td><div className="td_el">       
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-danger">Danger</button></div></td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus tellus sit amet erat lacinia porta. Nulla porta, magna ac hendrerit imperdiet, lorem nisl semper orci, vitae gravida turpis lorem eget lorem.
                 </td><td>
               <div className="content-control">
               
                                            <ul class="list-inline m-0">
                                                <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-table"></i><FontAwesomeIcon icon={faEdit} /></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i><FontAwesomeIcon icon={faTrash} /></button>
                                                </li>
                                            </ul>
                                            </div>
                </td>
               

                </tr>
                <tr>
                <th scope="row"><div className="td_el">4</div></th>
                <td><div className="td_el">
                <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg" class="img-responsive" alt="Cinque Terre" width="150" height="100"></img>
                </div></td>
                <td><div className="td_el">4 item section menu</div></td>
                <td><div className="td_el"><a href="#">http://</a></div></td>
                <td><div className="td_el">Site menu</div></td>
                <td>       
                <div className="td_el">
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
                  </div>
                </td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus tellus sit amet erat lacinia porta. Sed eu ligula sodales, dignissim velit a, commodo mi. Nunc ut velit sed nibh vehicula venenatis eu id risus. Suspendisse fringilla tempus augue vel blandit. Sed dictum sed purus posuere feugiat. Praesent dictum nulla quis lacinia maximus. 
                </td>
                <td>
               <div className="content-control">
               
                                            <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-table"></i><FontAwesomeIcon icon={faEdit} /></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i><FontAwesomeIcon icon={faTrash} /></button>
                                                </li>
                                            </ul>
                                            </div>
                </td>
                </tr>
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
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>

</div>
</main>

    );
}

export default Main;