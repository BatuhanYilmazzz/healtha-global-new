import React, { useContext, useEffect } from "react";
import { SacEkimiStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

function SacEkimi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState, sacEkimiState, getSacEkimi } = dataContext;

  useEffect(() => {
    getSacEkimi();
    // eslint-disable-next-line
  }, []);

  return (
    <SacEkimiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            sacEkimiState &&
            `url(${
              process.env.REACT_APP_API_URL +
              sacEkimiState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{sacEkimiState && sacEkimiState[0]?.header_title}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container
              id='left-tabs-example'
              defaultActiveKey={
                (sacEkimiState && sacEkimiState[0]?.sac_ekimi_tab[0].title) ||
                "DHI"
              }
            >
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {sacEkimiState &&
                      sacEkimiState[0]?.sac_ekimi_tab.map((item) => (
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
                    {sacEkimiState &&
                      sacEkimiState[0]?.sac_ekimi_tab.map((item) => (
                        <Tab.Pane eventKey={item.title} key={item.key}>
                          <h1> {t(item.title)}</h1>
                          <Markdown className='desc'>
                            {item.description}
                          </Markdown>
                          <br />
                          <br />
                          <img
                            src={
                              process.env.REACT_APP_API_URL + item?.image?.url
                            }
                            alt={item.title}
                          />
                          <br />
                          <br />
                          {item.bottom_description && (
                            <Markdown className='desc'>
                              {item.bottom_description}
                            </Markdown>
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
    </SacEkimiStyled>
  );
}

export default SacEkimi;
