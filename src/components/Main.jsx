import { useNavigate } from "react-router";
import { Container, Accordion, Row, Col, ListGroup } from 'react-bootstrap';


const Main = ({prayers, psalms, formulas, songs}) => {
    const navigate = useNavigate();
    return <Container className="mt-2" style={{minHeight: 'calc(100vh - 180px)'}} fluid >
    <Row>
      <Col>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Молитви</Accordion.Header>
          <Accordion.Body>
          {prayers?.map(el => {
              return <ListGroup.Item action onClick={() => {
                navigate(`/prayers/${el.id}`)
              }}>
              {el.name}
              </ListGroup.Item>
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Формули</Accordion.Header>
          <Accordion.Body>
          {formulas?.map(el => {
              return <ListGroup.Item action onClick={() => {
                navigate(`/formulas/${el.id}`)
              }}>
              {el.bookPage}
              </ListGroup.Item>
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Песни</Accordion.Header>
          <Accordion.Body>
          {songs?.map(el => {
              return <ListGroup.Item action onClick={() => {
                navigate(`/songs/${el.id}`)
              }}>
              {el.name}
              </ListGroup.Item>
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Псалми</Accordion.Header>
          <Accordion.Body>
            {psalms?.map(el => {
                return <ListGroup.Item action onClick={() => {
                  navigate(`/psalms/${el.id}`)
                }}>
                {el.name}
                </ListGroup.Item>
              })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Наряди</Accordion.Header>
          <Accordion.Body>
            {[]?.map(el => {
                return <ListGroup.Item action onClick={() => {
                  navigate(`/prayerorders/${el.id}`)
                }}>
                {el.name}
                </ListGroup.Item>
              })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Col>
    </Row>
  </Container>
}

export default Main;