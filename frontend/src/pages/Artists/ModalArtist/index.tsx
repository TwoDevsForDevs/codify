import React, { useEffect, useState, useCallback } from 'react';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaSpotify,
  FaTimes,
  FaCompactDisc,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useTransition } from 'react-spring';
import { toast } from 'react-toastify';

import Modal from '../../../components/Modal';
import SpotifyButton from '../../../components/SpotifyButton';
import Spinner from '../../../components/Spinner';
import Scroll from '../../../components/Scroll';

import api from '../../../services/api';
import { playAudioWithFade, pauseAudioWithFade } from '../../../utils/audio';

import {
  Container,
  LeftContent,
  Content,
  PlaylistInfo,
  TracksList,
  Track,
  CloseModal,
} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  artistId: string;
}

const ModalArtist: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  artistId,
}) => {
  const [loading, setLoading] = useState(true);
  const [mount, setMount] = useState(0);

  useEffect(() => {
    async function loadArtist() {
      // const response = await api.get('artists');
    }

    loadArtist();
  }, []);

  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default ModalArtist;
