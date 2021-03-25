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
import News from '../News';

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
        <List title="Sugestões" elements={[<News />, <News />, <News />]} />
      </Body>
    </Container>
  );
};

export default SideBar;
