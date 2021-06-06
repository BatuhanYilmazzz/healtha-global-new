import React, { useContext } from "react";
import { SacEkimiStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import { sacekimi } from "../../assets/content.json";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";

function SacEkimi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;

  return (
    <SacEkimiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/sac-ekimi/sacekimi.jpg)`,
        }}
      >
        <h1>{t("SAC_EKIMI")}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container id='left-tabs-example' defaultActiveKey='dhi'>
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {sacekimi.map((item) => (
                      <Nav.Item key={item.id}>
                        <Nav.Link eventKey={item.key}>{t(item.title)}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {sacekimi.map((item) => (
                      <Tab.Pane eventKey={item.key} key={item.key}>
                        <h1> {t(item.title)}</h1>
                        <p>{t(item.content)}</p>
                        <img src={item.image} alt={item.title} />
                        <h1>{t(item.title_2)}</h1>
                        <p>{t(item.content_2)}</p>
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
