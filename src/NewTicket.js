import React, { useEffect, useState } from "react";

import { Form, Button, Modal } from "react-bootstrap";
const NewTicket = ({ show, handleShow }) => {
  const [popShow, setPopShow] = useState(false);

  const [leadSource, setLeadSource] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] =
    useState("");
  const [breakdownIssue, setBreakdownIssue] = useState("");
  const [location, setLocation] = useState("");
  const [serviceFee, setServiceFee] = useState("");
  const [assistanceTime, setAssistanceTime] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setInterval(() => {
      let today = new Date();
      let time =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
      setAssistanceTime(time);
    }, 1000);
  }, []);

  const validate = () => {
    if (
      !leadSource ||
      !name ||
      !contactNumber ||
      !emailAddress ||
      !vehicleMake ||
      !vehicleRegistrationNumber
    ) {
      setErrors("Please fill in all mandatory fields.");
      return false;
    } else if (!isValidEmail(emailAddress)) {
      setErrors("Please enter a valid email address.");
      return false;
    } else if (!isValidVehicleRegistrationNumber(vehicleRegistrationNumber)) {
      setErrors("Please enter a valid vehicle registration number.");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleShow(false);
      setPopShow(true);
    }
  };

  const handleCloseModal = () => {
    handleShow(false);
  };
  const closeAllModal = () => {
    setPopShow(false);
    handleShow(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidVehicleRegistrationNumber = (registrationNumber) => {
    const registrationNumberRegex = /^[A-Z0-9]+$/;
    return registrationNumberRegex.test(registrationNumber);
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Create New Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onChange={() => setErrors(null)} onSubmit={handleSubmit}>
            <Form.Group controlId="leadSource">
              <Form.Label>Lead Source</Form.Label>
              <Form.Control
                as="select"
                value={leadSource}
                onChange={(e) => setLeadSource(e.target.value)}>
                <option value="">Select Lead Source</option>
                <option value="Web">Web</option>
                <option value="Chat">Chat</option>
                <option value="Call">Call</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
              />
            </Form.Group>

            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group controlId="vehicleMake">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control
                type="text"
                value={vehicleMake}
                onChange={(e) => setVehicleMake(e.target.value)}
                placeholder="Enter vehicle make"
              />
            </Form.Group>

            <Form.Group controlId="vehicleRegistrationNumber">
              <Form.Label>Vehicle Registration Number</Form.Label>
              <Form.Control
                type="text"
                value={vehicleRegistrationNumber}
                onChange={(e) =>
                  setVehicleRegistrationNumber(e.target.value.toUpperCase())
                }
                placeholder="Enter vehicle registration number"
              />
            </Form.Group>

            <Form.Group controlId="breakdownIssue">
              <Form.Label>Breakdown Issue</Form.Label>
              <Form.Control
                as="textarea"
                value={breakdownIssue}
                onChange={(e) => setBreakdownIssue(e.target.value)}
                placeholder="Enter breakdown issue"
              />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </Form.Group>

            <Form.Group controlId="serviceFee">
              <Form.Label>Service Fee</Form.Label>
              <Form.Control
                type="text"
                value={serviceFee}
                onChange={(e) => setServiceFee(e.target.value)}
                placeholder="Enter service fee"
              />
            </Form.Group>

            <Form.Group controlId="assistanceTime">
              <Form.Label>Assistance Time</Form.Label>
              <Form.Control
                type="text"
                value={assistanceTime}
                disabled
                placeholder="Enter assistance time"
              />
            </Form.Group>

            <Form.Group controlId="comments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Enter comments"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            {errors && <p className="text-danger">{errors}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={popShow}>
        <Modal.Header>
          <Modal.Title>New Task Created Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAllModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewTicket;
