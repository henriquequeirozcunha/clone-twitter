import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Sugestões"
          elements={[
            <FollowSuggestion name="Henrique" nickname="@henrique" />,
            <FollowSuggestion name="Flávio" nickname="@flavio" />,
            <FollowSuggestion name="Lilian" nickname="@lilian" />,
          ]}
        />
        <List
          title="Sugestões"
          elements={[<h1>Teste 1</h1>, <h1>Teste 2</h1>, <h1>Teste 3</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
