import { useState, useEffect } from "react";
import './Tagscloud.scss';
const API_URL = "http://localhost:3000";

function Tagscloud() {
    const [solutions, setSolutions] = useState([]);
    const [invalidationToken, setInvalidationToken] = useState(Math.random());
    
    useEffect(() => {
      fetch(`${API_URL}/solutions`)
        .then((response) => response.json())
        .then((singleSolution) => setSolutions(singleSolution));
        console.log(solutions);
    }, [invalidationToken]);
  

    if (solutions.length === 0) {
        return null;
      }


      
    return (
    <>
    <div className="tagscloud">
    <div className=" row justify-content-center">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

       
<div className="tags">
              <ul>
                {solutions.map((solution) => (
               solution.tags.map(innerEl=> (
                  <li key={solution.id}>
                    <button type="button" class="btn btn-primary">{innerEl}</button>
                  </li>
                ))))
                }
              </ul>
              </div>
</div>
</div>


    </>
    );
}

export default Tagscloud;