import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Search extends Component {
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
