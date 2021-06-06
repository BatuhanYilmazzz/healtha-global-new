import React, { useContext } from "react";
import { GozSaglıgıStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import { göz_saglıgı } from "../../assets/content.json";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";

function GozSaglıgı() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;
  return (
    <GozSaglıgıStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/göz-saglıgı/gözsaglıgı.jpg)`,
        }}
      >
        <h1> {t("GÖZ_SAGLIGI")}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container
              id='left-tabs-example'
              defaultActiveKey='intralaselasik'
            >
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {göz_saglıgı.map((item) => (
                      <Nav.Item key={item.key}>
                        <Nav.Link eventKey={item.key}>{t(item.title)}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {göz_saglıgı.map((item) => (
                      <Tab.Pane eventKey={item.key} key={item.key}>
                        <h1>{t(item.title)}</h1>
                        <p>{t(item.content)}</p>
                        <img src={item.image} alt={item.title} />
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
    </GozSaglıgıStyled>
  );
}

export default GozSaglıgı;
