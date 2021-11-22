import React from 'react';
import styled from 'styled-components';

import { Cow, Production } from '../assets/cows';
import { ReactComponent as CowFace } from '../assets/lehma.svg';

type CowListProps = {
  cows: (Cow & Production)[];
  onButtonClick: () => void;
};

const Container = styled.div`
  margin: 1em;
  max-width: 1000px;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  alignitems: center;
`;

const StyledH1 = styled.h1`
  color: #173272;
`;

const StyledButton = styled.button`
  background: #14b1e3;
  padding: 1em;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTR = styled.tr`
  :nth-child(even) {
    background: rgba(20, 177, 227, 0.4);
  }
`;

const StyledTH = styled.th`
  text-align: left;
`;

const StyledTD = styled.td`
  text-align: left;
`;

/**
 * Here lies the cow list. There are some styles which are usually the first ones to be implemented.
 * Important thing is that the list doesn't contain the data itself and instead renders what is
 * given to it. It is fine, however, to know the type of the data. (Which cells are in the table.)
 */
const CowList = ({ cows, onButtonClick }: CowListProps) => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <StyledH1>Lehmät</StyledH1>
        <StyledButton type="button" onClick={onButtonClick}>
          Lisää lehmä
        </StyledButton>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTH></StyledTH>
            <StyledTH>Nimi</StyledTH>
            <StyledTH>Tilastot</StyledTH>
            <StyledTH>l / vko</StyledTH>
            <StyledTH>l / vrk</StyledTH>
          </tr>
        </thead>
        <tbody>
          {cows.map((cow) => (
            <StyledTR key={cow.registerNumber}>
              <StyledTD>
                <CowFace
                  style={{ width: 50, height: 55, verticalAlign: 'middle' }}
                />
              </StyledTD>
              <StyledTD>{cow.name}</StyledTD>
              <StyledTD>-</StyledTD>
              <StyledTD>{cow.litersPerWeek}</StyledTD>
              <StyledTD>{cow.litersPerDay}</StyledTD>
            </StyledTR>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default CowList;
