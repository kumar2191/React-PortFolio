import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NFT from "../../Assets/Projects/NFT2.jpeg";
import Near from "../../Assets/Projects/near.png";
import Gold from "../../Assets/Projects/gold.png";
import StaticSite from "../../Assets/Projects/StaticSite.png";
import Fine from "../../Assets/Projects/fine.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Near}
              isBlog={false}
              title="Crypto Currency"
              description="This project is a modern crypto platform designed to provide secure and efficient financial services. Built with Next.js for a high-performance frontend, and Node.js with Express for robust backend operations, it leverages PostgreSQL for reliable data management. The integration of NEAR Protocol's blockchain technology allows for decentralized transactions using JavaScript-based smart contracts, enhancing both security and transparency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFT}
              isBlog={false}
              title="Creating NFT"
              description="This project involves the creation of a secure and transparent certificate management system. The front end is developed using React.js, providing an intuitive user interface, while Prisma serves as the SQL database layer for efficient data handling. By leveraging the NEAR Protocol, certificates are created as NFTs, ensuring immutability and authenticity on the blockchain."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gold}
              isBlog={false}
              title="Gold's"
              description="This project is an application developed using ViteJS (React) for a fast and efficient frontend, paired with NestJS and Prisma for a robust backend. Key features include defining user roles and permissions to manage different levels of access, along with a responsive and accessible UI to ensure a seamless experience across various devices."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StaticSite}
              isBlog={false}
              title="Static Site"
              description="This project is a static site developed using ReactJS, created as a freelancing project for a construction equipment selling company. The site includes React components like Header, Footer, and movement, providing a dynamic user interface while showcasing the company's offerings."
              ghLink={"https://github.com/kumar2191/static_react_app_ts.git"}
              demoLink={"https://raniengineeringworks.netlify.app"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fine}
              isBlog={false}
              title="Fine Management System"
              description="This project is a Fine Management System, a custom-built website with a focus on user management and security. The frontend is crafted using React, incorporating components like Header, Footer, and movement for a dynamic UI. The backend is powered by Node.js, with MongoDB (Cloud) as the database. The application features secure sign-in and sign-up processes using JWT tokens."
              ghLink={"https://github.com/kumar2191/FMS.git"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
