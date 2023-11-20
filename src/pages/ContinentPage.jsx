import React, { useState } from "react";
import { useAnimalContext } from "../api/Animal";
import ListCard from "./Component/ListCard";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "react-bootstrap";
import Header from "./Component/Header";

const ContinentPage = () => {
  const [basicActive, setBasicActive] = useState("Asia");
  const { animals } = useAnimalContext();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const filteredAnimals = basicActive
    ? animals.filter((animal) => animal.continent.includes(basicActive))
    : [];

  return (
    <div>
      <Header />
      <Container className="mt-3">
        <div className="jumbotron-mask rounded-5">
          <img
            src="/public/images/bengalTiger.jpg"
            alt=""
            className="img-fluid d-block w-100 rounded-5"
            style={{ height: "50%", backgroundSize: "fit" }}
          />
          <div className="mask rounded-5">
            <div className="text-white">
              <h1 className="mb-3 fw-bold">Animals</h1>
              <h4 className="mb-3 fw-bold">By Continent</h4>
            </div>
          </div>
        </div>
        <Container>
          <Nav
            defaultActiveKey="Asia"
            className="nav-fill bg-green-200 rounded-4 gap-3 nav-pills"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="Asia"
                onClick={() => handleBasicClick("Asia")}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Central America"
                onClick={() => handleBasicClick("Central America")}
              >
                Central America
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Europe"
                onClick={() => handleBasicClick("Europe")}
              >
                Europe
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Africa"
                onClick={() => handleBasicClick("Africa")}
              >
                Africa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="North America"
                onClick={() => handleBasicClick("North America")}
              >
                North America
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Oceania"
                onClick={() => handleBasicClick("Oceania")}
              >
                Oceania
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="South America"
                onClick={() => handleBasicClick("South America")}
              >
                South America
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <ListCard animals={filteredAnimals} />
      </Container>
    </div>
  );
};

export default ContinentPage;
