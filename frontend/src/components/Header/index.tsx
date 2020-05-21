import React from "react";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";

import { useAuth } from "../../hooks/auth";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <FaSpotify color="#fff" size={24} />
          <NavLink to="/artists" activeClassName="selected">
            Artistas
          </NavLink>
          <NavLink to="/favorite_tracks" activeClassName="selected">
            Músicas favoritas
          </NavLink>
          <NavLink to="/playlists" activeClassName="selected">
            Playlists
          </NavLink>
        </nav>

        <div>
          <img src={user.avatar} alt={user.display_name} />
          <span>{user.display_name}</span>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
