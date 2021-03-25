import React from 'react';
import StickyBox from 'react-sticky-box';

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

      <StickyBox>
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
          <List title="Sugestões" elements={[<News />, <News />, <News />]} />
          <List title="Sugestões" elements={[<News />, <News />, <News />]} />
          <List title="Sugestões" elements={[<News />, <News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
