import React, { useState, useEffect } from "react";
// import MultiSelect from "react-multi-select-component";
// import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import { Select } from "antd";
import "antd/dist/antd.css";

import "./EditSolution.scss";

const EditSolutionForm = (props) => {
  const [solution, setSolution] = useState(props.currentSolution);
  // const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSolution(props.currentSolution);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSolution({ ...solution, [name]: value });
  };

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < solution.tags.length; i++) {
    children.push(<Option key={i}>{solution.tags[i]}</Option>);
  }

  //   const options =[
  //     { label: solution.tags[0], value: solution.tags[0]},
  //     { label: solution.tags[1], value: solution.tags[1]},
  //     { label: solution.tags[2], value: solution.tags[2]}
  // ];

  // const customValueRenderer = (selected, options) => {
  //   return selected.length
  //     ? selected.map(({ label }) => "✔️ " + label)
  //     : "😶 No Items Selected";
  // };

  function handleChange(value) {
    console.log(`sol.tags before func  ${solution.tags}`);
    console.log(`value before func: ` + value);

    solution.tags = [];
    console.log(`after clear:  ${solution.tags}`);
    solution.tags = [...value];
    console.log(`value after mapping: ` + value);
    console.log(`sol.tags after mapping: ${solution.tags}`);
    console.log(solution);
  }

  return (
    // prevent before 2nd button submit propagation
    <>
      <form
        onSubmit={(event) => {
          console.log(solution.id);
          console.log(solution);
          event.preventDefault();
          props.updateSolution(solution.id, solution);
        }}
      >
        <Form.Row className="align-items-center editsolutionform">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Image
            </Form.Label>
            <Form.Control
              className="mb-2"
              name="image"
              placeholder="Dodaj link do grafiki"
              value={solution.image}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Nazwa
            </Form.Label>
            <FormControl
              className="mb-2"
              name="name"
              value={solution.name}
              placeholder="Nazwa"
              onChange={handleInputChange}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Link
            </Form.Label>
            <Form.Control
              className="mb-2"
              name="link"
              placeholder="Dodaj link do www"
              value={solution.link}
              onChange={handleInputChange}
            />
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Category
            </Form.Label>
            <Form.Control
              className="mb-2"
              name="category"
              placeholder="Uzupełnij kategorię"
              value={solution.category}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs="auto">
            <Select
              mode="tags"
              allowClear
              defaultValue={solution.tags}
              tokenSeparators={[","]}
              style={{ width: "100%" }}
              placeholder="Edytuj tagi"
              onChange={handleChange}
            >
              {/* {children} */}
            </Select>
            {/* <Form.Label htmlFor="inlineFormInput" srOnly>
        Tags
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="tags"
        placeholder="Uzupełnij tagi"
        value={solution.tags}
        onChange={handleInputChange}
      /> */}
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              className="mb-2 description__input"
              name="description"
              placeholder="Uzupełnij opis"
              value={solution.description}
              onChange={handleInputChange}
            />
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Update solution
            </Button>
            <Button onClick={() => props.setEditing(false)} className="mb-2">
              Cancel
            </Button>
          </Col>
        </Form.Row>
      </form>
      {/* <div>
  <h1>Select Fruits</h1>
  <pre>{JSON.stringify(selected)}</pre>
  <MultiSelect
    options={options}
    selected={selected}
    onChange={setSelected}
    labelledBy={"Select"}
    customValueRenderer={customValueRenderer}
  /></div> */}
    </>
  );
};

export default EditSolutionForm;
