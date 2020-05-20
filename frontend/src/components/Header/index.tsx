import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";

import api from "../../services/api";

import { Container, Content } from "./styles";

interface IProfile {
  display_name: string;
  avatar: string;
}

const Header: React.FC = () => {
  const [profile, setProfile] = useState<IProfile>({} as IProfile);

  useEffect(() => {
    async function loadProfileData(): Promise<void> {
      const response = await api.get("/me");

      setProfile(response.data);
    }

    loadProfileData();
  }, []);

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
          <img src={profile.avatar} alt={profile.display_name} />
          <span>{profile.display_name}</span>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
