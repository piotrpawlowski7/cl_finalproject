import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const EditSolutionForm = props => {
    const [ solution, setSolution ] = useState(props.currentSolution)

    useEffect(
        () => {
          setSolution(props.currentSolution)
        },
        [ props ]
      )

      
  const handleInputChange = event => {
    const { name, value } = event.target

    setSolution({ ...solution, [name]: value })
  }

  return (

<Form
 onSubmit={event => {
    event.preventDefault();

    props.updateSolution(solution.id, solution)
  }}
>
    <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Image
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="image"
        placeholder="Wklej adres"
        value={solution.image}
        onChange={handleInputChange}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Nazwa
      </Form.Label>
        <FormControl className="mb-2" name="name" value={solution.name}  placeholder="Nazwa" onChange={handleInputChange} />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Link
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="link"
        placeholder="Wklej adres http://"
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
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Tags
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="tags"
        placeholder="Uzupełnij tagi"
        value={solution.tags}
        onChange={handleInputChange}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Description
      </Form.Label>
      <Form.Control
        className="mb-2 description__input"
        name="description"
        placeholder="Uzupełnij opis"
        value={solution.description}
        onChange={handleInputChange}
      />
    </Col>

    <Col xs="auto">
        <Button className="mb-2">Update solution</Button>
      <Button onClick={() => props.setEditing(false)} className="mb-2">
       Cancel
      </Button>
    </Col>
  </Form.Row>
  </Form>
  )
}

export default EditSolutionForm
