// LandingPage.js
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NewTicket from "./NewTicket";

const Home = ({ user }) => {
  const [show, setShow] = useState(false);

  const getTimeBasedGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };
  const handleShow = (arg) => {
    setShow(arg);
  };
  return (
    <Container className="my-3">
      <h1>{getTimeBasedGreeting()}, Rescuer!</h1>
      <p>How are you doing today, {user.username}?</p>
      <Button onClick={(e) => setShow(true)} varient="primary">
        Create New Ticket
      </Button>
      <NewTicket show={show} handleShow={handleShow}></NewTicket>
    </Container>
  );
};

export default Home;
