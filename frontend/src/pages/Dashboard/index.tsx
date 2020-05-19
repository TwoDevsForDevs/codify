import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";

import api from "../../services/api";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import {
  Container,
  Content,
  Profile,
  UserInfo,
  UserData,
  Nav,
  Playlists,
  Playlist,
} from "./styles";

interface IUser {
  id: string;
  type: string;
  display_name: string;
  email: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const [userResponse, recentlyPlayedResponse] = await Promise.all([
        api.get("/me"),
        api.get("/me/recently-played"),
      ]);

      setUser(userResponse.data);
      setLoading(false);
    }

    loadUser();
  }, []);

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header avatar={user.avatar} name={user.display_name} />

        <Profile>
          <UserInfo>
            <img src={user.avatar} alt={user.display_name} />

            <UserData>
              <div>
                <span>USUÁRIO</span>
                <h1>{user.display_name}</h1>
              </div>

              <button type="button">
                <MdMoreHoriz size={20} color="#fff" />
              </button>
            </UserData>
          </UserInfo>
        </Profile>
        <Nav>
          <strong>VISÃO GERAL</strong>
          <strong>PLAYLIST PÚBLICAS</strong>
          <strong>SEGUINDO (18)</strong>
          <strong>SEGUIDORES (4)</strong>
        </Nav>
        <Playlists>
          <section>
            <header>
              <strong>Tocados recentemente</strong>
              <span>VER TODOS</span>
            </header>
            <div>
              <Playlist>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGGD3RX_4QwzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=FckrYmvg6nXCW0tZ2O0CNNpN4tbD9HTWphAUbwBz6Fk"
                  alt=""
                />

                <strong>Twenty One Pilots </strong>
                <span>By Paulo Henrique </span>
              </Playlist>
            </div>
          </section>
        </Playlists>
        <Playlists>
          <section>
            <header>
              <strong>Seus podcasts preferidos</strong>
              <span>VER TODOS</span>
            </header>
            <div>
              <Playlist>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGGD3RX_4QwzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=FckrYmvg6nXCW0tZ2O0CNNpN4tbD9HTWphAUbwBz6Fk"
                  alt=""
                />

                <strong>Twenty One Pilots </strong>
                <span>By Paulo Henrique </span>
              </Playlist>
            </div>
          </section>
        </Playlists>
        <Playlists>
          <section>
            <header>
              <strong>Suas Playlists</strong>
              <span>VER TODOS</span>
            </header>
            <div>
              <Playlist>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGGD3RX_4QwzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=FckrYmvg6nXCW0tZ2O0CNNpN4tbD9HTWphAUbwBz6Fk"
                  alt=""
                />

                <strong>Twenty One Pilots </strong>
                <span>By Paulo Henrique </span>
              </Playlist>
            </div>
          </section>
        </Playlists>
      </Content>
    </Container>
  );
};

export default Dashboard;
