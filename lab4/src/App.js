import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "./component/formLogin";
import FormContact from "./component/formContact";
import FormSeachImage from "./component/formSearchImage";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Row
          className="mt-1 sec1"
          style={{ border: "1px solid #ddd", borderRadius: "4px", marginTop: "20px" }}
        >
          {/* <Col md={6} className="bg-warning p-2" id="cate1"> */}
          <FormSeachImage />
          {/* </Col> */}
          {/* <Col md={3} className="bg-success p-2" id="cate2">
          MỤC 2
        </Col>
        <Col md={3} className="bg-info p-2" id="cate3">
          MỤC 3
        </Col> */}
        </Row>
        <Row className="mt-1 sec2">
          <Col sm={9} className="panel" id="maindata">
            <FormContact />
          </Col>
          <Col sm={3} className="panel blue" id="ttbosung">
            <FormLogin />
          </Col>
        </Row>
      </Container>
      <div className="footer">Design by Bijuu Khôi</div>
    </>
  );
}

export default App;
