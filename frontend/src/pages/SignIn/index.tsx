import React from "react";
import { FaSpotify } from "react-icons/fa";
import { MdPlayCircleOutline, MdVolumeUp, MdGroupAdd } from "react-icons/md";

import { Container, Content, Background, Logo } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background>
        <div>
          <ul>
            <li>
              <MdPlayCircleOutline color="#f5f5f5" size={32} />É música que você
              quer?
            </li>
            <li>
              <MdVolumeUp color="#f5f5f5" size={32} />
              Conheça os melhores lançamentos do momento
            </li>
            <li>
              <MdGroupAdd color="#f5f5f5" size={32} />
              Siga as playlists dos seus artistas favoritos
            </li>
          </ul>
        </div>
      </Background>

      <Content>
        <div>
          <Logo>
            <FaSpotify color="#1fd562" size={56} />
            <span>Clone</span>
          </Logo>

          <h2>
            Se conecte à um mundo de possibilidade
            <br />
            Ouça sem limite
          </h2>

          <div>
            <strong>Entre agora.</strong>
            <a className="sign-in" href="http://localhost:3333/sessions">
              Logar
            </a>
            <a
              className="sign-up"
              href="https://www.spotify.com/br/signup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Criar conta
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default SignIn;
