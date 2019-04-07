import React from "react";
import { Parallax, Background } from "react-parallax";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Circle } from "rc-progress";

import bgGame from "./statics/bg-game.gif";
import bgCode from "./statics/coding-min.jpg";
import bgNoise from "./statics/noise.png";
import bgCompany from "./statics/company.jpg";
import bgContact from "./statics/bgContact.jpg";
import logoTiki from "./statics/logo-tiki.png";
import logoVNG from "./statics/logo-vng.png";

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

const styleProgress = {
  width: "50%",
  margin: " 0 auto",
  clear: "both",
  display: "block"
};

const lableProgress = {
  position: "absolute",
  left: " 50%",
  top: " 50%",
  transform: " translate(-50%,-50%)",
  fontSize: 25
};

const subLableSkill = {
  fontSize: 20
  // textAlign: "left"
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
            fontSize: 60
          }}
        >
          <Grid fluid>
            <Row>
              <h3
                style={{
                  textAlign: "center",
                  width: "100%"
                }}
              >
                Skills
              </h3>
            </Row>
            <Row>
              <Col xs={3}>
                <div style={{ position: "relative" }}>
                  <Circle
                    percent="95"
                    strokeWidth="4"
                    trailWidth="4"
                    strokeColor="#85D262"
                    trailColor="#85D26250"
                    style={styleProgress}
                  />
                  <span style={lableProgress}>HTML/CSS</span>
                </div>
                <p style={subLableSkill}>
                  Include: HTML(5), CSS(3), SVG, Canvas, Sprite
                </p>
              </Col>
              <Col xs={3}>
                <div style={{ position: "relative" }}>
                  <Circle
                    percent="75"
                    strokeWidth="4"
                    trailWidth="4"
                    strokeColor="#85D262"
                    trailColor="#85D26250"
                    style={styleProgress}
                  />
                  <span style={lableProgress}>SPA</span>
                </div>
                <p style={subLableSkill}>
                  Include: React (Ecosystem),Redux, VueJS ( and Ecosystem)
                </p>
              </Col>

              <Col xs={3} style={{ position: "relative" }}>
                <div style={{ position: "relative" }}>
                  <Circle
                    percent="55"
                    strokeWidth="4"
                    trailWidth="4"
                    strokeColor="#85D262"
                    trailColor="#85D26250"
                    style={styleProgress}
                  />
                  <span style={lableProgress}>NodeJS/SSR</span>
                </div>
                <p style={subLableSkill}>
                  Basic NodeJS, Server Side Rendering, NextJS
                </p>
              </Col>
              <Col xs={3}>
                <div style={{ position: "relative" }}>
                  <Circle
                    percent="55"
                    strokeWidth="4"
                    trailWidth="4"
                    strokeColor="#85D262"
                    trailColor="#85D26250"
                    style={styleProgress}
                  />
                  <span style={lableProgress}>Mobile</span>
                </div>
                <p style={subLableSkill}>Only one: React Native</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </Parallax>

    <Parallax
      bgImage={bgCompany}
      strength={200}
      // renderLayer={() => (
      //   <div>
      //     <div
      //       style={{
      //         position: "absolute",
      //         background: "#00000068",
      //         left: 0,
      //         top: 0,
      //         width: "100%",
      //         height: "100%"
      //       }}
      //     />
      //   </div>
      // )}
    >
      <div
        style={{ height: "100vh", color: "white", padding: 20, fontSize: 30 }}
      >
        <Grid fluid>
          <Row>
            <h3
              style={{
                textAlign: "center",
                width: "100%"
              }}
            >
              Company
            </h3>
          </Row>
          <Row>
            <Col xs={6}>
              <Background className="custom-bg">
                <img src={logoVNG} alt="vng logo" />
              </Background>
              VNG
            </Col>
            <Col xs={6}>
              <Background className="custom-bg">
                <img src={logoTiki} alt="vng logo" />
              </Background>
              Tiki.vn
            </Col>
          </Row>
        </Grid>
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
