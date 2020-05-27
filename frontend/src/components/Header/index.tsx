import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import DropdownMenu from "./Dropdown";

import { Container, Content, ProfileData } from "./styles";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { user } = useAuth();

  const handleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <Container>
      <Content>
        <nav>
          <FaSpotify color="#fff" size={24} />
          <NavLink to="/top-artists" activeClassName="selected">
            Artistas
          </NavLink>
          <NavLink to="/favorite-tracks" activeClassName="selected">
            Músicas favoritas
          </NavLink>
          <NavLink to="/playlists" activeClassName="selected">
            Playlists
          </NavLink>
        </nav>

        <ProfileData showDropdown={showDropdown}>
          <img src={user.avatar} alt={user.display_name} />
          <span>{user.display_name}</span>

          <button type="button" onClick={() => handleDropdown()}>
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
