import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

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
          <span>teste</span>
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
