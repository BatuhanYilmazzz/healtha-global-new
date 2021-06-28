import React, { useContext, useEffect } from "react";
import { EstetikPlastikCerrahiStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";
import { getLanguage } from "../../utils";
function EstetikPlastikCerrahi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState, estetikPlastikCerState, getEstetikPlastikCer } =
    dataContext;

  useEffect(() => {
    getEstetikPlastikCer();
    // eslint-disable-next-line
  }, []);

  return (
    <EstetikPlastikCerrahiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            estetikPlastikCerState &&
            `url(${
              process.env.REACT_APP_API_URL +
              estetikPlastikCerState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>
          {estetikPlastikCerState && estetikPlastikCerState[0]?.header_title}
        </h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container
              id='left-tabs-example'
              defaultActiveKey={
                (estetikPlastikCerState &&
                  estetikPlastikCerState[0]?.estetik_tabs[0]?.title) ||
                getLanguage() === "tr"
                  ? "Burun Estetiği (Rinoplasty)"
                  : "Rhinoplasty"
              }
            >
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {estetikPlastikCerState &&
                      estetikPlastikCerState[0]?.estetik_tabs.map((item) => (
                        <Nav.Item key={item.id}>
                          <Nav.Link eventKey={item.title}>
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {estetikPlastikCerState &&
                      estetikPlastikCerState[0]?.estetik_tabs.map((item) => (
                        <Tab.Pane eventKey={item.title} key={item.key}>
                          <h1> {item.title}</h1>
                          <Markdown>{item.description}</Markdown>
                          <br />
                          <br />
                          <img
                            src={process.env.REACT_APP_API_URL + item.image.url}
                            alt={item.title}
                          />
                          <br />
                          <br />
                          {item.bottom_description && (
                            <Markdown>{item.bottom_description}</Markdown>
                          )}
                          <br />
                          <br />
                          <button
                            className='appointment-button'
                            onClick={() => openHandleState("block")}
                          >
                            {t("APPOINTMENT")}
                          </button>
                        </Tab.Pane>
                      ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </EstetikPlastikCerrahiStyled>
  );
}

export default EstetikPlastikCerrahi;
