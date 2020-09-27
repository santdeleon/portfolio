import React, { useState } from "react";
import cx from "classnames";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode } from "@fortawesome/free-solid-svg-icons";
import { string, object } from "prop-types";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  user: object.isRequired
};

const Tech = ({ theme, user }) => {
  const [currentTab, setCurrentTab] = useState("Blockchain");

  const themeBgColor =
    theme === "light"
      ? { backgroundColor: "#fff" }
      : { backgroundColor: "#212121" };

  return (
    <Container id="Tech" className="Tech py-5" style={themeBgColor}>
      <Row>
        <Col>
          <h4 className="text-muted mb-0">Technologies and Skills</h4>
          <h3 className="font-weight-bold">I've developed</h3>
        </Col>
      </Row>
      <Row className="justify-content-center px-3 my-5">
        <Col
          md={10}
          lg={6}
          className="tech-container pb-4 px-0"
          style={themeBgColor}
        >
          <div className="rainbow-rounded-top px-5 py-3" />

          <Row className="mt-3">
            <Col md={6} className="ml-3">
              <FontAwesomeIcon icon={faCode} className="text-dark" />
            </Col>
          </Row>
          <Row className="mb-3 justify-content-center">
            <Col xs={10} className="d-flex justify-content-between">
              {["Blockchain", "Front-end", "Backend"].map((str, i) => (
                <Button
                  key={i}
                  className={cx("tab-button py-1", {
                    active: currentTab === str
                  })}
                  onClick={() => setCurrentTab(str)}
                >
                  <h5 className="mb-0 mt-2">{str}</h5>
                </Button>
              ))}
            </Col>
          </Row>

          {Object.keys(user.technologies).map(
            (obj, i) =>
              currentTab === user.technologies[obj].tab && (
                <div
                  key={user.technologies[obj].id}
                  id={user.technologies[obj].name}
                >
                  <Row className="pt-3">
                    <Col className="tech-col mx-5 px-3 py-2">
                      <p className="text-muted">Technologies:</p>
                      <ul className="p-0 m-0 d-flex flex-wrap">
                        {user.technologies[obj].tech.map((tech, i) => (
                          <li
                            key={i}
                            className="mr-2"
                            style={{ fontSize: "1.2rem" }}
                          >
                            {tech}
                            <span className="text-danger">,</span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>

                  <Row className="py-3">
                    <Col className="text-center">
                      <FontAwesomeIcon
                        className="text-muted"
                        icon={faArrowDown}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="tech-col mx-5 px-3 py-2">
                      <p className="text-muted">Tools:</p>
                      <ul className="p-0 m-0 d-flex flex-wrap">
                        {user.technologies[obj].tools.map((tool, i) => (
                          <li
                            key={i}
                            className="mr-2"
                            style={{ fontSize: "1.2rem" }}
                          >
                            {tool}
                            <span className="text-danger">,</span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>

                  {user.technologies[obj].additional && (
                    <div>
                      <Row className="py-3">
                        <Col className="text-center">
                          <FontAwesomeIcon
                            className="text-muted"
                            icon={faArrowDown}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col className="tech-col mx-5 px-3 py-2">
                          <p className="text-muted">Additional:</p>
                          <ul className="p-0 m-0 d-flex flex-wrap">
                            {user.technologies[obj].additional.map((el, i) => (
                              <li
                                key={i}
                                className="mr-2"
                                style={{ fontSize: "1.2rem" }}
                              >
                                {el}
                                <span className="text-danger">,</span>
                              </li>
                            ))}
                          </ul>{" "}
                        </Col>
                      </Row>
                    </div>
                  )}
                </div>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};

Tech.propTypes = propTypes;
export default Tech;
