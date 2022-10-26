import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import usePoke from "../hook/usePoke";
import PokeCard from "../components/PokeCard";
import Detail from "../components/Detail";

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

  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col xs="12" lg="4">
            {pokes.map((item) => (
              <PokeCard data={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
