/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';


const Text = ({
  bold,
  medium,
  size = 22,
  color = '#6b9ac3',
  lineHeight = 36,
  children,
  className,
  style,
  as,
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <TextStyled
      as={as}
      bold={!!bold}
      medium={!!medium}
      size={size}
      color={color}
      lineHeight={lineHeight}
      className={className}
      style={style}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.span.attrs(props => {
  // debug('%o', props);
  const { bold, medium, size, color, lineHeight } = props;

  return {
    weight: bold ? 'bold' : medium ? 500 : 'normal',
    size,
    lineHeight,
    color,
  };
})`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0px;
  color: ${({ color }) => color};
  opacity: 1;
`;

export default Text;
