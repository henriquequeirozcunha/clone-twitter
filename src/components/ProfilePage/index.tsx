import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Henrique Cunha</h1>
        <h2>@henriquequeirozcunha</h2>

        <p>
          Developer at <a href="">@amigoapp</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Recife, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de março de 1993
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>80 </strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
