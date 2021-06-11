import { useState, useEffect } from "react";
import "./Tagscloud.scss";
const API_URL = "http://localhost:3000";

function Tagscloud() {
  const [solutions, setSolutions] = useState([]);
  const [invalidationToken, setInvalidationToken] = useState(Math.random());

  useEffect(() => {
    fetch(`${API_URL}/solutions`)
      .then((response) => response.json())
      .then((singleSolution) => setSolutions(singleSolution));
    console.log("USEFFECT_SOLUTIONS" + solutions);
  }, [invalidationToken]);
  console.log(solutions);

  if (solutions.length === 0) {
    return null;
  }

  const uniqueSolutions = [];

  return (
    <>
      <div className="tagscloud">
        <div className=" row">
          <div className="tags">
            <ul>
              {solutions.map((solution) =>
                solution.tags.map((innerEl) => (
                  <li key={innerEl}>
                    <button type="button" className="btn btn-primary" disabled>
                      {innerEl}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tagscloud;
