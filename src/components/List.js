import React ,{useEffect,useState} from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import PokeCard from './PokeCard';

const List = ({items}) => {


  return (
    <>
    <Container>
      <Row>
      <Col>
      {items.map(item=>(
        <PokeCard data={item}/>
      ))}


      
      </Col>
      </Row></Container>
 
    </>
  );
};

export default List;
