import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <MdKeyboardArrowLeft size={32} color="#fff" />
          <MdKeyboardArrowRight size={32} color="#fff" />
        </nav>

        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGGD3RX_4QwzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=FckrYmvg6nXCW0tZ2O0CNNpN4tbD9HTWphAUbwBz6Fk"
            alt=""
          />
          <span>Paulinho da Vara</span>
          <MdKeyboardArrowDown size={24} color="#fff" />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
