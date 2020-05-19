import React from "react";
import { FaSpotify } from "react-icons/fa";
import {
  MdHome,
  MdSearch,
  MdVideoLibrary,
  MdAdd,
  MdFavorite,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";

import { Container, Content, Logo, Nav, Playlist } from "./styles";

const Sidebar: React.FC = () => {
  const [, height] = useWindowSize();

  return (
    <Container>
      <Content>
        <Logo>
          <FaSpotify size={40} color="#fff" />
          <h1>Spotify</h1>
        </Logo>

        <Nav>
          <NavLink to="/dashboard" exact activeClassName="selected">
            <MdHome size={26} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/search" exact activeClassName="selected">
            <MdSearch size={26} />
            <span>Pesquisar</span>
          </NavLink>

          <NavLink to="/collection" exact activeClassName="selected">
            <MdVideoLibrary size={24} />
            <span>Sua Biblioteca</span>
          </NavLink>
        </Nav>

        <Playlist height={height}>
          <h2>P L A Y L I S T S</h2>

          <div>
            <button type="button">
              <MdAdd size={16} />
              <span>Criar Playlist</span>
            </button>
          </div>

          <div>
            <button type="button">
              <MdFavorite size={16} className="favorite" />
              <span>Músicas curtidas</span>
            </button>
          </div>

          <hr />

          <ul>
            <li>Panic!</li>
            <li>Post Malone</li>
            <li>Twenty One Pilots</li>
            <li>Panic!</li>
            <li>Post Malone</li>
            <li>Twenty One Pilots</li>
            <li>Panic!</li>
            <li>Post Malone</li>
            <li>Twenty One Pilots</li>
            <li>Panic!</li>
            <li>Post Malone</li>
            <li>Twenty One Pilots</li>
          </ul>
        </Playlist>
      </Content>
    </Container>
  );
};

export default Sidebar;
