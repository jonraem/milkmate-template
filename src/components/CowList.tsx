import React from 'react';
import styled from 'styled-components';

import { Cow, Production } from '../assets/cows';
import { ReactComponent as CowFace } from '../assets/lehma.svg';

type CowListProps = {
  cowsWithProduction: (Cow & Production)[];
  onButtonClick: () => void;
};

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

const CowList = ({ cowsWithProduction, onButtonClick }: CowListProps) => {
  return (
    <div style={{ margin: '1em' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '1em auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <StyledH1>Lehmät</StyledH1>
        <StyledButton type="button" onClick={onButtonClick}>
          Lisää lehmä
        </StyledButton>
      </div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Nimi</td>
            <td>Tilastot</td>
            <td>l / vko</td>
            <td>l / vrk</td>
          </tr>
        </thead>
        <tbody>
          {cowsWithProduction.map((cow) => (
            <tr>
              <td>
                <CowFace style={{ width: 50, height: 50 }} />
              </td>
              <td>{cow.name}</td>
              <td>-</td>
              <td>{cow.litersPerWeek}</td>
              <td>{cow.litersPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CowList;
