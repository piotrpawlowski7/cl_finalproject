import React, {useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "./AddSolution.scss";

const API_URL = 'http://localhost:3000';


export default function AddSolution() {
    const [form, setForm] = useState({
        id: null,
        image: "",
        name: "",
        link: "",
        category: "",
        tags: [],
        description: "",
    });
    const [submitting, setSubmitting] = useState(false);

    
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        
        fetch(`${API_URL}/solutions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "image": form.image,
                    "name": form.name,
                    "link": form.link,
                    "category": form.category,
                    "description": form.description,
                    "tags": [form.tags]
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });

        
    }

    function refreshPage() {
        setTimeout(function(){
            window.location.reload(1);
         }, 1000);
      }

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        console.log(name);
        console.log(value);
        setForm(prevState => {
            // console.log(prevState)
            return {
                ...prevState,
                [name]: value
            }
        });

        
    }

    

    return (<div className="wrapper">
        <h2>Dodaj rozwiązanie</h2>
 { submitting &&
            <div>Zapisywanie...</div>
        }

<Form onSubmit={handleSubmit}>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Image
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="image"
        placeholder="Dodaj link do grafiki"
        value={form.image}
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Nazwa
      </Form.Label>
        <FormControl className="mb-2" name="name" value={form.name}  placeholder="Nazwa" onChange={handleChange} />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Link
      </Form.Label>
      <Form.Control
        className="mb-2"
        name="link"
        placeholder="Dodaj link do www"
        value={form.link}
        onChange={handleChange}
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
        value={form.category}
        onChange={handleChange}
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
        value={form.tags}
        onChange={handleChange}
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
        value={form.description}
        onChange={handleChange}
      />
    </Col>

    <Col xs="auto">
      <Button onClick={refreshPage} type="submit" className="mb-2">
        Wyślij
      </Button>
    </Col>
  </Form.Row>
  </Form>
       
      </div>
);
}