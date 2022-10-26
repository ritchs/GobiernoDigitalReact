import React, { useEffect, useState } from "react";
import Text from "./Text";
import usePoke from "../hook/usePoke";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const Detail = ({data}) => {
  const { getPokeDetail } = usePoke();
  const location = useLocation();


  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [loaddet ,setLoadDet] = useState(true);
  const [pokes, setPokes] = useState([]);
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
        height:dataPokes.height,
        weight:dataPokes.weight,
        order:dataPokes.order,
      });
      setItem(dataPokes);
      if(pokes.length>1 ){
        setLoadDet(false)
      }
      setLoading(false);
    };

    fetch();

    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
        { loaddet === true  ?
         <Card style={{ width: "18rem" }}>
              <Row>
                <Col>
                  {console.log("ITEM-pokes", pokes)}
                  <Card.Title>
                    <Text
                      size="40"
                      lineHeight="100"
                      color="#fffff"
                      className="justify-content"
                    >
                      {pokes.name || item.name}
                    </Text>
                  </Card.Title>
                  <Card.Img variant="top" src={pokes.img} />
                  <Card.Body>
                    <ul>
                      <li>Experience: {pokes.base_experience}</li>
                      <li>Height: {pokes.height}</li>
                      <li>Weight: {pokes.weight}</li>
                      <li>Order: {pokes.order}</li>
                      <li>Types: {pokes.types}</li>
                    </ul>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            : <div>loading</div>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
