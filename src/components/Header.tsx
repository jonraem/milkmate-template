import React from 'react';
import { ReactComponent as CowFace } from '../assets/lehma.svg';
import { ReactComponent as MilkMateLogo } from '../assets/milkmate_logo.svg';

type HeaderProps = { username: string | undefined };

const Header = ({ username }: HeaderProps) => {
  return (
    <header>
      <CowFace />
      <MilkMateLogo />
      <div>{username}</div>
    </header>
  );
};

export default Header;
