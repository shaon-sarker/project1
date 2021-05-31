import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
       <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange}  name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button className="btn btn- mt-3" type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger mt-3">Cancel</Link>
    </Form>
    </div>
  )
}
