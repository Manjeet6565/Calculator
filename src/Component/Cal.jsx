import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cal = () => {
  const [input, setInput] = useState("");
  const StoreButton = [
    ["AC", "()", "%", "÷"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "x", "="],
  ];

  const handleClick = (btn) => {
    if (btn === "AC") {
      setInput("");
    } else if (btn === "=") {
      try {
        setInput(eval(input.replace("÷", "/").replace("x", "*")));
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + btn.replace("÷", "/").replace("x", "*"));
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                value={input}
                placeholder="Calculate here"
                readOnly
                className="text-right mb-3"
                style={{ fontSize: "2rem" }}
              />
            </Form.Group>
          </Form>
          <div className="d-grid gap-2">
            {StoreButton.map((row, rowIndex) => (
              <Row key={rowIndex} className="mb-2">
                {row.map((btn, index) => (
                  <Col key={index} xs={3}>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => handleClick(btn)}
                      className="w-100"
                    >
                      {btn}
                    </Button>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cal;
