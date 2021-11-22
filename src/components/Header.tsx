import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CowFace } from '../assets/lehma.svg';
import { ReactComponent as MilkMateLogo } from '../assets/milkmate_logo.svg';

type HeaderProps = { username: string | undefined };

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  background: #1d4485;
`;

const Header = ({ username }: HeaderProps) => {
  return (
    <StyledHeader>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <CowFace style={{ width: 50, height: 50, fill: 'white' }} />
        <MilkMateLogo
          style={{ width: 125, height: 30, fill: 'white', marginLeft: '1em' }}
        />
      </div>
      <div style={{ color: 'white' }}>{username}</div>
    </StyledHeader>
  );
};

export default Header;
