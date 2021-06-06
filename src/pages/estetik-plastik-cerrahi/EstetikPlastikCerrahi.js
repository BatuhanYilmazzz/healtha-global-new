import React, { useContext } from "react";
import { EstetikPlastikCerrahiStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import { estetik_plastik_cerrahi } from "../../assets/content.json";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";

function EstetikPlastikCerrahi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;
  return (
    <EstetikPlastikCerrahiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/plastik-cerrahi/plastikcerrahi.jpg)`,
        }}
      >
        <h1>{t("ESTETIK_PLASTIK_CERRAHI")}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container
              id='left-tabs-example'
              defaultActiveKey='burunestetiği'
            >
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {estetik_plastik_cerrahi.map((item) => (
                      <Nav.Item key={item.key}>
                        <Nav.Link eventKey={item.key} key={item.key}>
                          {t(item.title)}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {estetik_plastik_cerrahi.map((item) => (
                      <Tab.Pane eventKey={item.key} key={item.key}>
                        <h1> {t(item.title)}</h1>
                        <p>{t(item.content)}</p>
                        <img src={item.image} alt={t(item.title)} />
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
