import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  // Making usestate for setting and
  // fetching a value in jsx
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = title,
      b = description;
    array.push({ id: uni, title: a, description: b });

    // Redirecting to home page after creation done
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        {/* Fetching a value from input textfirld
in a setname using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter title"
            required
          />
        </Form.Group>

        {/* Fetching a value from input textfirld in
	a setdescription using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            placeholder="description"
            required
          />
        </Form.Group>

        {/* handing a onclick event in button for
	firing a function */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;
