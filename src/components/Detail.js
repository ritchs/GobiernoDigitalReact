import React, { useEffect, useState } from "react";
import Text from "./Text";
import usePoke from "../hook/usePoke";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


const Detail = ({ data }) => {
  const { getPokeDetail } = usePoke();
  const location = useLocation();


  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [loaddet, setLoadDet] = useState(true);
  const [pokes, setPokes] = useState([]);
  const [spritesOther, setSpritesOther] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    setLoading(true);
    setPokes([]);

    const fetch = async () => {
      const url = location.pathname.substring(8)
      const dataPokes = await getPokeDetail(url);
      setPokes({
        name: dataPokes.name,
        img: dataPokes.sprites.front_default,
        types: `${dataPokes.types[0].type.name}`,
        experience: dataPokes.base_experience,
        height: dataPokes.height,
        weight: dataPokes.weight,
        order: dataPokes.order,
      });
      setItem(dataPokes);
      console.log(dataPokes.sprites);
      setSpritesOther({
        dream_world: dataPokes.sprites.other.dream_world.front_default,
        official_artwork: dataPokes.sprites.other["official-artwork"].front_default,
        home_default: dataPokes.sprites.other.home.front_default,
        front_shiny:dataPokes.sprites.other.home.front_shiny,
      });

      if (pokes.length > 1) {
        setLoadDet(false)
      }
      setLoading(false);
    };

    fetch();

    return () => { };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className="mx-auto" style={{ marginTop: 5, padding: '10%' }}>
        <Row className="justify-content-center mx-auto">
          {loaddet === true ?
            <Card className="text-center">
              <Card.Header> {pokes.name || item.name}</Card.Header>
              <Card.Body className="d-flex">
                  <Card.Img variant="top" src={spritesOther?.dream_world} /> 
                 <Card.Img variant="top" src={spritesOther?.official_artwork} /> 
              </Card.Body>
              <Card.Footer >
                <ListGroup>
                  <ListGroup.Item>Experience: {pokes.experience}</ListGroup.Item>
                  <ListGroup.Item>Height: {pokes.height}</ListGroup.Item>
                  <ListGroup.Item>Weight: {pokes.weight}</ListGroup.Item>
                  <ListGroup.Item>Order: {pokes.order}</ListGroup.Item>
                  <ListGroup.Item>Types: {pokes.types}</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
              : <div>loading</div>
            }
        </Row>
      </Container>
    </>
  );
};

export default Detail;
