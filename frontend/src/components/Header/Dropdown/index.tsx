import React, { useState, useEffect, useCallback } from "react";
import { FiLogOut, FiMaximize } from "react-icons/fi";

import { toggleFullScreen } from "../../../utils/handleFullScreen";

import { Container } from "./styles";

interface IDropdownProps {
  showDropdown: boolean;
}

const Dropdown: React.FC<IDropdownProps> = ({ showDropdown }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreen);
  }, [handleFullScreen]);

  useEffect(() => {
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreen);
    };
  }, [handleFullScreen]);

  return (
    <Container showDropdown={showDropdown}>
      <ul>
        <li>
          <button type="button" onClick={() => toggleFullScreen(fullScreen)}>
            <FiMaximize size={22} color="#fff" />
            {fullScreen ? "Sair da tela cheia" : "Tela cheia"}
          </button>
        </li>
        <li>
          <button type="button">
            <FiLogOut size={22} color="#fff" />
            Sair
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Dropdown;
