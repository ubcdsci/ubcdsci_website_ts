// Library imports.
import React from "react";
import { Carousel } from "react-bootstrap";

// Component imports.

// Media imports.
import defaultImage from "../images/code1.png";
import bomberland from "../images/bomberland.gif";
import HPE from "../images/HPE.png";

/**
 * Renders a CarouselFrame.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function CarouselFrame(props) {
  return (
    <Carousel interval={8000} pause={false}>
      <Carousel.Item>
        <a href="./projects">
          <div
            style={{
              display: "flex",
              backgroundColor: "#2c8b32",
              paddingTop: "5%",
              paddingBottom: "12%",
            }}
          >
            <img
              className="d-block"
              src={bomberland}
              alt="First slide"
              style={{
                width: "37%",
                marginLeft: "5%",
                marginLeft: "10.5%",
                border: "5px",
                borderStyle: "solid",
                borderColor: "white",
              }}
            />
            <img
              className="d-block"
              src={bomberland}
              alt="First slide"
              style={{
                width: "37%",
                marginLeft: "5%",
                marginRight: "8%",
                border: "5px",
                borderStyle: "solid",
                borderColor: "white",
              }}
            />
          </div>
        </a>
        <Carousel.Caption>
          <h3 style={{ fontWeight: "bold" }}>Join a Project Group Today!</h3>
          <p>
            Find out more about our club projects and sign up to be in a project
            group through our discord!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>
        <img className="d-block w-100" src={defaultImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={defaultImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
