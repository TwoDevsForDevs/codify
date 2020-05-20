import React, { useEffect, useState } from "react";

import Header from "../../components/Header";

import { Container, Content, TopArtists, Artist } from "./styles";

interface IParams {
  params?: object;
}

const Artists: React.FC = () => {
  const [params, setParams] = useState({} as IParams);

  useEffect(() => {
    const hashParams = {} as any;

    const query = window.location.search.replace("?", "");
    const entries = query.split("&");

    entries.forEach(entry => {
      const [key, value] = entry.split("=");
      hashParams[key] = value;
    });

    window.history.pushState("", "", "/artists");
    // window.history.replaceState({}, "", window.location.href.split("#")[0]);

    console.log(hashParams);
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <h1>Artistas</h1>

          <TopArtists>
            <Artist>
              <img
                src="https://mosaic.scdn.co/300/ab67616d0000b2732519d01c0cca06f134eeadd8ab67616d0000b2732bfb97c135445f83927049caab67616d0000b2733c9047f9aa5d0d1e03827039ab67616d0000b273b1c4b76e23414c9f20242268"
                alt=""
              />
              <div>
                <h3>Ed Sheeran</h3>
              </div>
            </Artist>
            <Artist>
              <img
                src="https://mosaic.scdn.co/300/ab67616d0000b2732519d01c0cca06f134eeadd8ab67616d0000b2732bfb97c135445f83927049caab67616d0000b2733c9047f9aa5d0d1e03827039ab67616d0000b273b1c4b76e23414c9f20242268"
                alt=""
              />
              <div>
                <h3>Ed Sheeran</h3>
              </div>
            </Artist>
            <Artist>
              <img
                src="https://mosaic.scdn.co/300/ab67616d0000b2732519d01c0cca06f134eeadd8ab67616d0000b2732bfb97c135445f83927049caab67616d0000b2733c9047f9aa5d0d1e03827039ab67616d0000b273b1c4b76e23414c9f20242268"
                alt=""
              />
              <div>
                <h3>Ed Sheeran</h3>
              </div>
            </Artist>
            <Artist>
              <img
                src="https://mosaic.scdn.co/300/ab67616d0000b2732519d01c0cca06f134eeadd8ab67616d0000b2732bfb97c135445f83927049caab67616d0000b2733c9047f9aa5d0d1e03827039ab67616d0000b273b1c4b76e23414c9f20242268"
                alt=""
              />
              <div>
                <h3>Ed Sheeran</h3>
              </div>
            </Artist>
            <Artist>
              <img
                src="https://mosaic.scdn.co/300/ab67616d0000b2732519d01c0cca06f134eeadd8ab67616d0000b2732bfb97c135445f83927049caab67616d0000b2733c9047f9aa5d0d1e03827039ab67616d0000b273b1c4b76e23414c9f20242268"
                alt=""
              />
              <div>
                <h3>Ed Sheeran</h3>
              </div>
            </Artist>
          </TopArtists>
        </Content>
      </Container>
    </>
  );
};

export default Artists;
