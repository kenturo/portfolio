import React from "react";
import { Parallax } from "react-parallax";
import { Grid, Row, Col } from "react-flexbox-grid";

import bgGame from "./statics/bg-game.gif";
import bgCode from "./statics/coding-min.jpg";
import bgNoise from "./statics/noise.png";
import bgCompany from "./statics/company.jpg";
import bgContact from "./statics/bgContact.jpg";

const styles = {
  // fontFamily: "sans-serif",
  textAlign: "center",
  margin: 0,
  padding: 0
};
const insideStyles = {
  color: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  lineHeight: 1.5,
  fontSize: 60
};

const App = () => (
  <div style={styles}>
    <Parallax
      bgImage={bgGame}
      strength={0}
      blur={1.5}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: "#00000068",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div style={insideStyles}>
          DANG ANH KIET
          <div>JS Developer</div>
        </div>
      </div>
    </Parallax>

    <Parallax
      bgImage={bgCode}
      strength={200}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `url(${bgNoise})`,
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div
          style={{
            color: "white",
            padding: 20,
            lineHeight: 1.5,
            fontSize: 60
          }}
        >
          <Grid fluid>
            <Row>
              <Col xs={4}>React</Col>
              <Col xs={4}>React Native</Col>
              <Col xs={4}>NodeJS</Col>
            </Row>
          </Grid>
        </div>
      </div>
    </Parallax>

    <Parallax
      bgImage={bgCompany}
      strength={200}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: "#00000068",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div style={insideStyles}>Company Info</div>
      </div>
    </Parallax>

    <Parallax
      bgImage={bgContact}
      strength={200}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: "#00000068",
              right: 0,
              top: 0,
              width: "50%",
              height: "100%"
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div
          style={{
            color: "white",
            padding: 20,
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translate(-50%,-50%)",
            lineHeight: 1.5,
            fontSize: 60
          }}
        >
          Contact
        </div>
      </div>
    </Parallax>
  </div>
);

export default App;
