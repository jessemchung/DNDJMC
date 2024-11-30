import React, { useState } from 'react';
import styled from 'styled-components';
// Components
// eslint-disable-next-line import/no-unresolved
// import { AppContext } from '#contexts';

const HeaderDiv = styled.div`
display: grid;

grid-column-start: 1;
`;

const Header = () => {
  const idState = useState(null);
  const appState = useState({
    loading: true,
  });
  const errState = useState(null);
  return (
    <HeaderDiv>This is the Header</HeaderDiv>
  );
};

export default Header;
