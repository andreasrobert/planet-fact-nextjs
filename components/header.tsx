import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setRocket } from "../redux/action"

const Container = styled.div`
  width: 100vw;
  height: 9vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(240, 17%, 26%);
  justify-content: space-between;

  @media screen and (max-width: 128vh) {
    flex-direction: column;
    align-items: center;
    height: 18.7vh;
  }
  @media screen and (max-width: 65vh) {
    display: none;
  }
`;

const Auth = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* margin-top: 12px; */

  &#logo {
    justify-content: flex-start;
    padding-left: 5.25vh;
  }

  @media screen and (max-width: 128vh) {
    justify-content: space-evenly !important;
    &#logo {
      height: 7.5vh;
    }
  }
`;

const Antonio = styled.h2`
  font-family: "Antonio", sans-serif;
  /* line-height: 2.5; */
  font-size: 3.83vh;
  letter-spacing: 1px;
  margin-right: 20px;
  cursor: pointer;
`;

const Spartan = styled.h3`
  font-family: "Spartan", sans-serif;
  line-height: 5.9;
  font-size: 1.5vh;
  letter-spacing: 1px;
  margin-right: 5.25vh;
  cursor: pointer;
  border-top: 0.4vh solid transparent;
  &.MERCURY:hover {
    border-top: 0.4vh solid hsl(194, 48%, 49%);
  }
  &.VENUS:hover {
    border-top: 0.4vh solid hsl(33, 82%, 61%);
  }
  &.EARTH:hover {
    border-top: 0.4vh solid hsl(263, 67%, 51%);
  }
  &.MARS:hover {
    border-top: 0.4vh solid hsl(10, 63%, 51%);
  }
  &.JUPITER:hover {
    border-top: 0.4vh solid hsl(2, 68%, 53%);
  }
  &.SATURN:hover {
    border-top: 0.4vh solid hsl(17, 73%, 46%);
  }
  &.URANUS:hover {
    border-top: 0.4vh solid hsl(169, 73%, 44%);
  }
  &.NEPTUNE:hover {
    border-top: 0.4vh solid hsl(222, 87%, 56%);
  }

  @media screen and (max-width: 128vh) {
    &.MERCURY:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(194, 48%, 49%);
    }
    &.VENUS:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(33, 82%, 61%);
    }
    &.EARTH:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(263, 67%, 51%);
    }
    &.MARS:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(10, 63%, 51%);
    }
    &.JUPITER:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(2, 68%, 53%);
    }
    &.SATURN:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(17, 73%, 46%);
    }
    &.URANUS:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(169, 73%, 44%);
    }
    &.NEPTUNE:hover {
      border-top: 0.4vh solid transparent;
      border-bottom: 0.4vh solid hsl(222, 87%, 56%);
    }

    margin-right: 0;
  }
`;

function Header() {
  const rocketCourse = useSelector((state:RootStateOrAny) => state.setCourse);
  const dispatch = useDispatch();

  const handleClick = (whereTo: string) => {
    if (whereTo !== rocketCourse) return;
    document.getElementById("title")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container id="header">
        <Auth id="logo">
          <Antonio
            onClick={() => {
              handleClick(`${rocketCourse}`);
            }}
          >
            THE PLANETS
          </Antonio>
        </Auth>
        <Auth>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("MERCURY"));
              handleClick("MERCURY");
            }}
          >
            MERCURY
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("VENUS"));
              handleClick("VENUS");
            }}
          >
            VENUS
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("EARTH"));
              handleClick("EARTH");
            }}
          >
            EARTH
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("MARS"));
              handleClick("MARS");
            }}
          >
            MARS
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("JUPITER"));
              handleClick("JUPITER");
            }}
          >
            JUPITER
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("SATURN"));
              handleClick("SATURN");
            }}
          >
            SATURN
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("URANUS"));
              handleClick("URANUS");
            }}
          >
            URANUS
          </Spartan>
          <Spartan
            className={rocketCourse}
            onClick={() => {
              dispatch(setRocket("NEPTUNE"));
              handleClick("NEPTUNE");
            }}
          >
            NEPTUNE
          </Spartan>
        </Auth>
      </Container>
    </>
  );
}

export default Header;
