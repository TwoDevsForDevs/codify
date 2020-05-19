import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

import { Container, Content } from "./styles";

interface IHeaderProps {
  avatar: string;
  name: string;
}

const Header: React.FC<IHeaderProps> = ({ avatar, name }) => {
  return (
    <Container>
      <Content>
        <nav>
          <MdKeyboardArrowLeft size={32} color="#fff" />
          <MdKeyboardArrowRight size={32} color="#fff" />
        </nav>

        <div>
          <img src={avatar} alt={name} />
          <span>{name}</span>
          <MdKeyboardArrowDown size={24} color="#fff" />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
