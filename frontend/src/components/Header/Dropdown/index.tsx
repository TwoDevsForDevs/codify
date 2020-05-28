import React, { useState, useEffect, useCallback } from 'react';
import { FiLogOut, FiMaximize, FiGithub } from 'react-icons/fi';

import { toggleFullScreen } from '../../../utils/toggleFullScreen';

import { Container } from './styles';

interface IDropdownProps {
  showDropdown: boolean;
  setShowDropdown: any;
}

const Dropdown: React.FC<IDropdownProps> = ({
  showDropdown,
  setShowDropdown,
}) => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreen);

    setShowDropdown(false);
  }, [handleFullScreen, setShowDropdown]);

  useEffect(() => {
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreen);

      setShowDropdown(false);
    };
  }, [handleFullScreen, setShowDropdown]);

  return (
    <Container showDropdown={showDropdown}>
      <ul>
        <li>
          <button type="button" onClick={() => toggleFullScreen(fullScreen)}>
            <FiMaximize size={22} />
            {fullScreen ? 'Sair da tela cheia' : 'Tela cheia'}
          </button>
        </li>
        <li>
          <a
            href="https://github.com/KeepCodingLab/codify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={22} />
            Contribue
          </a>
        </li>
        <li>
          <button type="button">
            <FiLogOut size={22} />
            Sair
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Dropdown;
