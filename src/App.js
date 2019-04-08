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
import logoParadise from "./statics/logo-paradise.png";
import logoKietda from "./statics/logo-kietda.png";

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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10
      }}
    >
      <img src={logoKietda} alt="vng logoKietda" />
    </div>
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
              &nbsp;
            </h3>
          </Row>
          <Row>
            <Col xs={4}>
              <div
                style={{
                  color: "white",
                  padding: 20,
                  fontSize: 20,
                  background: "#00000060"
                }}
              >
                <Background className="custom-bg">
                  <img src={logoVNG} alt="vng logo" height="120" />
                </Background>
                <span>08.2012 - 02.2016</span>

                <div
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    lineHeight: 1.5,
                    display: "inline-block",
                    height: "300px"
                  }}
                >
                  <p
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0
                    }}
                  >
                    Stack: C#, SQL, LDAP, Mailbox Exchange
                  </p>
                  <ul
                    style={{
                      marginTop: 0,
                      paddingTop: 0
                    }}
                  >
                    <li>CMS Management Employment</li>
                    <li>Service Automate Domain Account</li>
                    <li>Asset Management IT Helpdesk</li>
                  </ul>

                  <p
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0
                    }}
                  >
                    Stack: HTML, CSS, JS
                  </p>
                  <ul
                    style={{
                      marginTop: 0,
                      paddingTop: 0
                    }}
                  >
                    <li>CMS builder website/LandingPage/Teaser/Subweb game</li>
                    <li>Write Library/Plugin core: FB api, google ap</li>
                    <li>Rebuild VNG Site.</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div
                style={{
                  color: "white",
                  padding: 20,
                  fontSize: 20,
                  background: "#00000060"
                }}
              >
                <Background className="custom-bg">
                  <img src={logoTiki} alt=" logo" />
                </Background>
                <div>08.2016 - 07.2018</div>

                <div
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    display: "inline-block",
                    lineHeight: 1.5,
                    height: "300px"
                  }}
                >
                  <p
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0
                    }}
                  >
                    Stack: ReactJS, NodeJS, Redux
                  </p>
                  <ul
                    style={{
                      marginTop: 0,
                      paddingTop: 0
                    }}
                  >
                    <li>Seller Center Management ECommerce</li>
                    <li>CMS LandingPage Tool</li>
                    <li>Deal Management</li>
                    <li>Inventory Management </li>
                    <li>Requisition Management </li>
                    <li>QnA Management </li>
                    <li>Event BirthDay of Tiki</li>
                    <li>Event Book's Festival</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div
                style={{
                  color: "white",
                  padding: 20,
                  fontSize: 20,
                  background: "#00000060"
                }}
              >
                <Background className="custom-bg">
                  <img src={logoParadise} alt=" logo" height="120" />
                </Background>
                <div>07.2018 - Present</div>

                <div
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    display: "inline-block",
                    lineHeight: 1.5,
                    height: "300px"
                  }}
                >
                  <p
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0
                    }}
                  >
                    Stack: ReactJS, NodeJS, Redux,VueJS
                  </p>
                  <ul
                    style={{
                      marginTop: 0,
                      paddingTop: 0
                    }}
                  >
                    <li>Analytic Network Tool</li>
                    <li>SSL Tool</li>
                    <li>Website Speed Test</li>
                    <li>CDN Management</li>
                  </ul>
                </div>
              </div>
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
