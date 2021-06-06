import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

const FormComponent = ({ info }) => {
  const handleFormSubmit = () => {
    console.log("handle");
  };
  const handleInputChange = () => {
    console.log("HIC");
  };
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: "300px" }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <a
              href="https://github.com/C7204-OMER?tab=repositories"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{"<Joker>"}</code>
              <span className="design header">design</span>
            </a>
          </div>
          <h2>Form</h2>
          <Button primary>Primary</Button>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleFormSubmit} />
        <Segment stacked>
          <Form.Input
            fluid
            name="username"
            icon="user"
            iconPosition="left"
            placeholder="name"
            value={info.username}
            onChange={handleInputChange}
            required
          />
          <Form.Input
            fluid
            name="phoneNumber"
            icon="phone"
            iconPosition="left"
            placeholder="Phone Number"
            type="text"
            value={info.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <Form.Dropdown
            options={options}
            onChange={handleOptionsChange}
            placeholder="Gender"
            name="Gender"
            fluid
            selection
            value={info.gender.toLowerCase()}
            required
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default FormComponent;
