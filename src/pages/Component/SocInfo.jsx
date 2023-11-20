import React from "react";
import { Container, Card } from "react-bootstrap";

const SocInfo = ({ animal }) => {
  const { habitatInfo, relationship_human, mating, status } = animal;

  return (
    <Container className="row container mb-3">
      <h5 className="h5 text-white" style={{ marginLeft: "20px" }}>
        Social Info
      </h5>
      {habitatInfo.groupMale && (
        <Container lg={2} className="container-fluid mt-3 col">
          <Card className="text-center">
            <Card.Title>Males Min | Max</Card.Title>
            <Card.Text>
              {habitatInfo.groupMale.size.min} |{" "}
              {habitatInfo.groupMale.size.max}
            </Card.Text>
          </Card>
        </Container>
      )}
      {habitatInfo.groupFemale && (
        <Container lg={2} className="container-fluid mt-3 col">
          <Card className="text-center">
            <Card.Title>Females Min | Max</Card.Title>
            <Card.Text>
              {habitatInfo.groupFemale.size.min} |{" "}
              {habitatInfo.groupFemale.size.max}
            </Card.Text>
          </Card>
        </Container>
      )}
      {status && (
        <Container lg={2} className="container-fluid mt-3 col">
          <Card className="text-center">
            <Card.Title>Status</Card.Title>
            <Card.Text>{status}</Card.Text>
          </Card>
        </Container>
      )}
      {relationship_human && (
        <Container lg={2} className="container-fluid mt-3 col">
          <Card className="text-center">
            <Card.Title>Relationship w/ Humans</Card.Title>
            <Card.Text>{relationship_human}</Card.Text>
          </Card>
        </Container>
      )}
      {mating && (
        <Container
          className={
            relationship_human
              ? "col-lg-2 container-fluid mt-3"
              : "col-lg-12 container-fluid mt-3"
          }
        >
          <Card className="text-center">
            <Card.Title>Mating System</Card.Title>
            <Card.Text>{mating}</Card.Text>
          </Card>
        </Container>
      )}
    </Container>
  );
};

export default SocInfo;
