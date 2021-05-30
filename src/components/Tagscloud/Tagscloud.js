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
  
<div className="tags">
              <ul>
                {solutions.map((solution) => (
               solution.tags.map(innerEl=> (
                  <li key={solution.id}>
                    <button type="button" class="btn btn-primary" disabled>{innerEl}</button>
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