import React, { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { FaHeadphones } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import {
  Container,
  Content,
  LeftContent,
  UserPlaylists,
  Playlist,
} from './styles';

interface IPlaylists {
  id: string;
  name: string;
  avatar: string;
  uri: string;
}

const Playlists: React.FC = () => {
  const [playlists, setPlaylist] = useState<IPlaylists[]>([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    async function loadUserPlaylists(): Promise<void> {
      const response = await api.get('/me/playlists');

      const test = await api.get(`/playlist/tracks/${response.data[0].id}`);

      console.log(test.data);

      setPlaylist(response.data);
      setMount(true);
    }

    loadUserPlaylists();
  }, []);

  const playlistsWithTransition = useTransition(
    playlists,
    playlist => playlist.id,
    {
      from: {
        opacity: 0,
        transform: 'scale(0.8)',
      },
      enter: {
        opacity: 1,
        transform: 'scale(1)',
      },
      trail: 100,
    },
  );

  return (
    <>
      <Header />

      {/* <Modal /> */}

      <Container>
        <Content>
          <LeftContent mount={mount}>
            <div>
              <FaHeadphones size={32} color="#fff" />
            </div>
            <h1>
              Visualize Suas
              <span className="green">Playlists</span>
            </h1>
            <p>Mostrando todas as playlists criadas por você!</p>
          </LeftContent>

          <UserPlaylists mount={mount}>
            {playlistsWithTransition.map(({ item, key, props }, index) => (
              <Playlist key={key} style={props}>
                <img src={item.avatar} alt={item.name} />
                <div>
                  <strong>
                    {index + 1}. {item.name}
                  </strong>
                </div>
              </Playlist>
            ))}
          </UserPlaylists>
        </Content>
      </Container>
    </>
  );
};

export default Playlists;
