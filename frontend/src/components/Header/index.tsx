import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { MdLink } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import DropdownMenu from './Dropdown';
import About from './About';

import { Container, Content, Nav, ProfileData } from './styles';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const { user } = useAuth();

  const handleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleAbout = useCallback(() => {
    setShowAbout(!showAbout);
  }, [showAbout]);

  return (
    <Container>
      <Content>
        <Nav showAbout={showAbout}>
          <button type="button" onClick={handleAbout}>
            <MdLink size={22} />
            Sobre
          </button>

          <NavLink to="/top-artists" activeClassName="selected">
            Artistas
          </NavLink>
          <NavLink to="/favorite-tracks" activeClassName="selected">
            Músicas favoritas
          </NavLink>
          <NavLink to="/playlists" activeClassName="selected">
            Playlists
          </NavLink>

          <About showAbout={showAbout} />
        </Nav>

        <ProfileData showDropdown={showDropdown}>
          <img src={user.avatar} alt={user.display_name} />
          <span>{user.display_name}</span>

          <button type="button" onClick={handleDropdown}>
            <FiMoreVertical size={24} />
          </button>

          <DropdownMenu
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </ProfileData>
      </Content>
    </Container>
  );
};

export default Header;
