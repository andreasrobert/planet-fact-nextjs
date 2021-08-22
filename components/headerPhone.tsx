import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;
  display: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(240, 17%, 26%);

  @media screen and (max-width: 65vh) {
    display: flex;
  }
`;

const MenuContain = styled.div`
  position: fixed;
  top: 75px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(240, 67%, 8%);

  z-index: 20;

  &.false {
    display: none;
  }

  @media screen and (min-width: 65vh) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 87%;
  height: 9vh;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #37374e7a;
  cursor: pointer;
`;

const Contain = styled.div`
  display: flex;
  align-items: center;
  width: 40vh;
  height: 9vh;
`;

const Circle = styled.div`
  width: 2.4vh;
  height: 2.4vh;
  border-radius: 50%;

  &#MERCURY {
    background-color: #def4fc;
  }
  &#VENUS {
    background-color: #f7cc7f;
  }
  &#EARTH {
    background-color: #545bfe;
  }
  &#MARS {
    background-color: #ff6a45;
  }
  &#JUPITER {
    background-color: #ecad7a;
  }
  &#SATURN {
    background-color: #fccb6b;
  }
  &#URANUS {
    background-color: #65f0d5;
  }
  &#NEPTUNE {
    background-color: #497efa;
  }
`;

const Planet = styled.h3`
  font-size: 1.7vh;
  letter-spacing: 0.4vh;
  margin-left: 2.7vh;
  margin-top: 2.4vh;
`;

const The = styled.h2``;

const SourceImgContainer = styled.div`
  width: 0.8vh;
  height: 0.8vh;
  cursor: pointer;
  margin-right: 5px;
`;

const HamburgerImgContainer = styled.div`
  width: 3.5vh;
  height: 3.5vh;
  cursor: pointer;
  margin-right: 1vh;
  margin-top: 0.4vh;
`;

function HeaderPhone(props: {
  setRocket: (arg: string) => void;
  rocket: string;
}) {
  const [showMenu, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Container>
        <The>THE PLANETS</The>

        <HamburgerImgContainer onClick={handleClick}>
          <Image
            src={require("../public/assets/icon-hamburger.svg")}
            alt=""
            layout="responsive"
          />
        </HamburgerImgContainer>
      </Container>
      <MenuContain className={`${showMenu}`}>
        <Menu
          onClick={() => {
            props.setRocket("MERCURY");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="MERCURY"></Circle>
            <Planet>MERCURY</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("VENUS");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="VENUS"></Circle>
            <Planet>VENUS</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("EARTH");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="EARTH"></Circle>
            <Planet>EARTH</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("MARS");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="MARS"></Circle>
            <Planet>MARS</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("JUPITER");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="JUPITER"></Circle>
            <Planet>JUPITER</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("SATURN");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="SATURN"></Circle>
            <Planet>SATURN</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("URANUS");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="URANUS"></Circle>
            <Planet>URANUS</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>

        <Menu
          onClick={() => {
            props.setRocket("NEPTUNE");
            handleClick();
          }}
        >
          <Contain>
            <Circle id="NEPTUNE"></Circle>
            <Planet>NEPTUNE</Planet>
          </Contain>

          <SourceImgContainer>
            <Image
              src={require("../public/assets/icon-chevron.svg")}
              alt=""
              layout="responsive"
            />
          </SourceImgContainer>
        </Menu>
      </MenuContain>
    </>
  );
}

export default HeaderPhone;
