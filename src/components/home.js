import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import usePoke from "../hook/usePoke";
import PokeCard from "../components/PokeCard";
const Home = () => {
  const { getPoke } = usePoke();

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);
    setPokes([]);

    const fetch = async () => {
      const dataPokes = await getPoke();
      if (dataPokes.length > 1) {
        setPokes(dataPokes);
      }
      setLoading(false);
    };

    fetch();


    return () => {};
    // eslint-disable-next-line
  }, []);


  // To set/load the initial value that is saved for the current item to edit/manage


  // A handle change method to change the selected value/options
 

  return (
    <>
      <Container fluid className="mt-3">
        <Row className="justify-content-center g-4" xs={1} md={2}>
          {pokes.map((item) => (
            <Col xs="12" lg="4">
              <PokeCard data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
