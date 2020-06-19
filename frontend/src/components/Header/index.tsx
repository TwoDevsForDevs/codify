import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { MdLink, MdMenu, MdClose } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import DropdownMenu from './Dropdown';
import About from './About';

import { Container, Content, Nav, NavigationMenu, ProfileData } from './styles';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { user } = useAuth();

  const handleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleAbout = useCallback(() => {
    setShowAbout(!showAbout);
  }, [showAbout]);

  const handleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <Container>
      <Content>
        <Nav showAbout={showAbout}>
          <NavigationMenu showAbout={showAbout} showMenu={showMenu}>
            <button type="button" onClick={handleAbout}>
              <MdLink size={22} />
              Sobre
            </button>

            <div>
              <NavLink
                to="/top-artists"
                activeClassName="selected"
                onClick={handleMenu}
              >
                Artistas
              </NavLink>
              <NavLink
                to="/favorite-tracks"
                activeClassName="selected"
                onClick={handleMenu}
              >
                Músicas favoritas
              </NavLink>
              <NavLink
                to="/playlists"
                activeClassName="selected"
                onClick={handleMenu}
              >
                Playlists
              </NavLink>
            </div>
          </NavigationMenu>

          <button type="button" onClick={handleMenu}>
            {showMenu ? (
              <MdClose color="#f7415f" size={24} />
            ) : (
              <MdMenu color="#fff" size={24} />
            )}
          </button>

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
