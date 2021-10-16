import React, { useState } from "react";
import { ContactFormPageStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import {
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { emailjsInfo, mailTemplate } from "../../constant/index";
import Brand from "../../layout/Brand";
function ContactForm() {
  const { t } = useTranslation();

  const initialState = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    weight: "",
    length: "",
    bloodType: "",
    beforeilness: false,
    beforeilnessDesc: "",
    covid: false,
    tension: false,
    heartDisease: false,
    breathProblem: false,
    anestesik: false,
    diabet: false,
    troid: false,
    felc: false,
    anxiety: false,
    bloodProblem: false,
    hiv: false,
    hepatit: false,
    hepatitDesc: "",
    bloodProblem2: false,
    gobekDisease: false,
    cancer: false,
    anemi: false,
    usedDrugs: "",
    medicineAlerjik: false,
    foodAlerjik: false,
    smokeUsage: false,
    smokeUsageDesc: "",
    alcoholUsage: "",
    surgeryBefore: "",
    surgeryTimes: "",
    importantDisease: "",
    birthControl: false,
    acceptReceiveMail: false,
  };
  const [modalShow, setModalShow] = React.useState(false);

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name} ${state.surname}`,
    to_name: "Healtha Global",
    message: mailTemplate(state, t),
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        emailjsInfo.service_id,
        emailjsInfo.template_id,
        template_params,
        emailjsInfo.user_id
      )
      .then(
        (result) => {
          setState(initialState);
          setModalShow(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  return (
    <ContactFormPageStyled>
      <div
        className='masthead'
        style={{ backgroundImage: `url(/images/contact-us/contactpage.png)` }}
      >
        <h1>{t("ONLINE_APP_FORM")}</h1>
      </div>
      <div className='wrapper'>
        <h3>{t("CONSULTANTY")}</h3>
        <br />
        <br />
        <Form onSubmit={sendEmail}>
          <Form.Label>{t("NAME")}</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder={t("NAME")}
              name='name'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>{t("SURNAME")}</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder={t("SURNAME")}
              name='surname'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>{t("PHONE_NUMBER")}</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder=''
              type='number'
              name='phoneNumber'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>{t("E_MAIL")}</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder={t("E_MAIL")}
              name='email'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <div className=''>
            <h5>{t("COMPLETE_INFO")}</h5>
            <br />
            <Row>
              <Col>
                <Form.Label>{t("WEIGHT")}</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder={t("WEIGHT")}
                    name='weight'
                    onChange={handleChange}
                    type='number'
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>{t("LENGTH")}</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder={t("LENGTH")}
                    name='length'
                    onChange={handleChange}
                    type='number'
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>{t("BLOOD_GROUP")}</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder={t("BLOOD_GROUP")}
                    name='bloodType'
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <br />
          <h6>{t("BEFORE_ILLNESS")}</h6>
          <br />
          <Row>
            <Col xs={4}>
              <InputGroup className='mb-3'>
                <Form.Label md='0' className='checkboxForm-label'>
                  {t("YES")}
                </Form.Label>
                <InputGroup.Checkbox
                  name='beforeilness'
                  checked={state.beforeilness}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.checked })
                  }
                />
              </InputGroup>
            </Col>
            <Col xs={4}>
              <InputGroup className='mb-3'>
                <Form.Label className='checkboxForm-label'>
                  {t("NO")}
                </Form.Label>
                <InputGroup.Checkbox
                  name='beforeilness'
                  checked={!state.beforeilness}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: !e.target.checked })
                  }
                />
              </InputGroup>
            </Col>
          </Row>
          <InputGroup>
            <FormControl
              as='textarea'
              aria-label='With textarea'
              rows='5'
              placeholder={t("BEFORE_ILLNESS_DESC")}
              onChange={handleChange}
              name='beforeilnessDesc'
              required={state.beforeilness}
            />
          </InputGroup>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'> {t("COVID")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='covid'
                    checked={state.covid}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='covid'
                    checked={!state.covid}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>

          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("TENSION")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='tension'
                    checked={state.tension}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='tension'
                    checked={!state.tension}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("HEART_DISEASE")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='heartDisease'
                    checked={state.heartDisease}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='heartDisease'
                    checked={!state.heartDisease}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("BREATHE_PROBLEM")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='breathProblem'
                    checked={state.breathProblem}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='breathProblem'
                    checked={!state.breathProblem}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("ANESTESIK")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anestesik'
                    checked={state.anestesik}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label>{t("NO")}</Form.Label>
                  <InputGroup.Checkbox
                    className='checkboxForm-label'
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anestesik'
                    checked={!state.anestesik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("DIABET")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='diabet'
                    checked={state.diabet}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.diabet}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("TROID")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='troid'
                    checked={state.troid}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='troid'
                    checked={!state.troid}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("FELC")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='felc'
                    checked={state.felc}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='felc'
                    checked={!state.felc}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("ANXIETY")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anxiety'
                    checked={state.anxiety}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anxiety'
                    checked={!state.anxiety}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("BLOOD_PROBLEM")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem'
                    checked={state.bloodProblem}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.bloodProblem}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("HIV")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='hiv'
                    checked={state.hiv}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.hiv}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("HEPATIT")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='hepatit'
                    checked={state.hepatit}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='hepatit'
                    checked={!state.hepatit}
                  />
                </InputGroup>
              </Col>
            </Row>

            <InputGroup className='mb-3' size='lg'>
              <FormControl
                id='basic-url'
                aria-describedby='basic-addon3'
                placeholder={t("HEPATIT_DESC")}
                name='hepatitDesc'
                onChange={handleChange}
                required={state.hepatit}
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("BLOOD_PROBLEM_2")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem2'
                    checked={state.bloodProblem2}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem2'
                    checked={!state.bloodProblem2}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("GOBEK_DISEASE")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='gobekDisease'
                    checked={state.gobekDisease}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='gobekDisease'
                    checked={!state.gobekDisease}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("CANCER")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='cancer'
                    checked={state.cancer}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='cancer'
                    checked={!state.cancer}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("ANEMI")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anemi'
                    checked={state.anemi}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anemi'
                    checked={!state.anemi}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <br />
          <div className='inputItem'>
            <h6>{t("USED_MEDICINE")}</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder={t("USED_MEDICINE_DESC")}
                onChange={handleChange}
                name='usedDrugs'
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("MEDICINE_ALERJIK")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='medicineAlerjik'
                    checked={state.medicineAlerjik}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='medicineAlerjik'
                    checked={!state.medicineAlerjik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>

          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("FOOD_ALERJIK")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='foodAlerjik'
                    checked={state.foodAlerjik}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='foodAlerjik'
                    checked={!state.foodAlerjik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("SMOKE_USAGE")} </h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='smokeUsage'
                    checked={state.smokeUsage}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='smokeUsage'
                    checked={!state.smokeUsage}
                  />
                </InputGroup>
              </Col>
            </Row>

            <InputGroup className='mb-3' size='lg'>
              <FormControl
                id='basic-url'
                aria-describedby='basic-addon3'
                placeholder={t("SMOKE_USAGE_DESC")}
                name='smokeUsageDesc'
                onChange={handleChange}
                required={state.smokeUsage}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>{t("ALCOHOL_USAGE")}</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder={t("ALCOHOL_USAGE_DESC")}
                name='alcoholUsage'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>{t("SURGERY_BEFORE")}</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder={t("SURGERY_BEFORE_DESC")}
                name='surgeryBefore'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>{t("SURGERY_TIMES")}</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder={t("SURGERY_TIMES_DESC")}
                name='surgeryTimes'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>{t("IMPORTANT_DISEASE")}</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder={t("IMPORTANT_DISEASE_DESC")}
                name='importantDisease'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>{t("BIRTH_CONTROL")}</h6>
            <Row>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    {t("YES")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='birthControl'
                    checked={state.birthControl}
                  />
                </InputGroup>
              </Col>
              <Col xs={4}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>
                    {t("NO")}
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='birthControl'
                    checked={!state.birthControl}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <p className='messages-wrapper'>
            <input
              type='checkbox'
              className='messages'
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.checked })
              }
              name='acceptReceiveMail'
            />
            {t("READ_CLARIFICATION")}
          </p>
          <button className='contact-us' type='submit'>
            {t("SUBMIT")}
          </button>
        </Form>
      </div>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={() => setModalShow(false)}
        show={modalShow}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className='wrap'>
            <p>{t("CONTACT_YOU")}</p>
            <Brand />
          </div>
        </Modal.Body>
      </Modal>
    </ContactFormPageStyled>
  );
}

export default ContactForm;
