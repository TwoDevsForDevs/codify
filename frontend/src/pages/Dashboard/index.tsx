import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";

import api from "../../services/api";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import { Container, Content, Profile, UserInfo, UserData } from "./styles";

interface IUser {
  id: string;
  type: string;
  display_name: string;
  email: string;
  avatar: string[];
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const response = await api.get("/users");

      setUser(response.data);
    }

    loadUser();
  }, []);

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />

        <Profile>
          <UserInfo>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGGD3RX_4QwzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=FckrYmvg6nXCW0tZ2O0CNNpN4tbD9HTWphAUbwBz6Fk"
              alt=""
            />

            <UserData>
              <div>
                <span>USUÁRIO</span>
                <h1>Paulinho da Vara</h1>
              </div>

              <button type="button">
                <MdMoreHoriz size={20} color="#fff" />
              </button>
            </UserData>
          </UserInfo>
        </Profile>
      </Content>
    </Container>
  );
};

export default Dashboard;
