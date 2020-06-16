import React, { useState, useEffect, useCallback } from 'react';
import { useTransition } from 'react-spring';
import { FaHeadphones } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Spinner from '../../components/Spinner';
import ModalPlaylistTracks from './ModalPlaylistTracks';

import { Container, LeftContent, UserPlaylists, Playlist } from './styles';

interface IPlaylists {
  id: string;
  name: string;
  avatar: string;
  uri: string;
}

const Playlists: React.FC = () => {
  const [playlists, setPlaylist] = useState<IPlaylists[]>([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [playlistId, setPlaylistId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleModal = useCallback(() => {
    setToggleModal(!toggleModal);
  }, [toggleModal]);

  useEffect(() => {
    async function loadUserPlaylists(): Promise<void> {
      try {
        setLoading(true);

        const response = await api.get('/me/playlists');

        setPlaylist(response.data);
      } catch (err) {
        toast.error('Não foi possível carregar as playlists.');
      } finally {
        setLoading(false);
      }
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
      trail: 125,
    },
  );

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {toggleModal && (
            <ModalPlaylistTracks
              isOpen={toggleModal}
              setIsOpen={handleModal}
              playlistId={playlistId}
            />
          )}

          <LeftContent>
            <div>
              <FaHeadphones size={32} color="#fff" />
            </div>
            <h1>
              Visualize Suas
              <span className="green">Playlists</span>
            </h1>
            <p>
              Quando você é o DJ da festa, essas são sempre as mais tocadas!
            </p>
          </LeftContent>

          <UserPlaylists>
            {playlistsWithTransition.map(({ item, key, props }, index) => (
              <Playlist
                key={key}
                style={props}
                onClick={() => {
                  setPlaylistId(item.id);
                  handleModal();
                }}
              >
                <img src={item.avatar} alt={item.name} />
                <div>
                  <strong>
                    {index + 1}. {item.name}
                  </strong>
                </div>
              </Playlist>
            ))}
          </UserPlaylists>
        </>
      )}
    </Container>
  );
};

export default Playlists;
