import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { data } from "./data";
import { useSelector, RootStateOrAny } from "react-redux";


const Container = styled.div`
  width: 158vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7vh;
  margin-bottom: 70px;

  @media screen and (max-width: 158vh) {
    width: 100%;
  }

  @media screen and (max-width: 65vh) {
    flex-direction: column;
    margin-top: 4vh;
  }
`;

const Auth = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Antonio = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 5.47vh;
  letter-spacing: -0.2vh;
  margin-left: 3vh;
  margin-top: -0.5vh;

  @media screen and (max-width: 128vh) {
    font-size: 4vw;
    margin-left: 2.5vh;
  }

  @media screen and (max-width: 65vh) {
    font-size: 7vw;
    letter-spacing: -0.05vh;
    margin-top: 0.3vh;
    margin-right: 2.5vh;
  }
`;

const Spartan = styled.h4`
  font-family: "Spartan", sans-serif;
  font-size: 1.5vh;
  letter-spacing: 0.1367vh;
  color: hsl(240, 6%, 54%);
  margin-top: 3vh;
  margin-left: 3vh;

  @media screen and (max-width: 128vh) {
    margin-top: 2vh;
    margin-left: 2.5vh;
    font-size: 1vw;
  }
  @media screen and (max-width: 65vh) {
    margin-top: 2.2vh;
    margin-left: 2.5vh;
    font-size: 2.5vw;
  }
`;

const Box = styled(motion.div)`
  height: 18.2vh;
  width: 36.3vh;
  border: 1px solid hsl(240, 17%, 26%);

  @media screen and (max-width: 158vh) {
    width: 23.5%;
    height: 11.5vw;
  }

  @media screen and (max-width: 128vh) {
    width: 23.5%;
    height: 11.5vw;
  }

  @media screen and (max-width: 113.5vh) {
    width: 23.5%;
    height: 11.5vw;
  }

  @media screen and (max-width: 65vh) {
    margin-bottom: 1vh;
    background-color: transparent;
    width: 95%;
    height: 12vw;
    display: flex;
    justify-content: space-between;
  }
`;

function Footer() {
  const rocketCourse = useSelector((state:RootStateOrAny) => state.setCourse);
  const focusOn = data.filter((planet) => planet.name == rocketCourse);

  return (
    <>
      <AnimatePresence>
        <Container>
          <Box
            key={focusOn[0].rotation}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Spartan>ROTATION TIME</Spartan>
            <Antonio>{focusOn[0].rotation}</Antonio>
          </Box>
          <Box
            key={focusOn[0].revolution}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Spartan>REVOLUTION TIME</Spartan>
            <Antonio>{focusOn[0].revolution}</Antonio>
          </Box>
          <Box
            key={focusOn[0].radius}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Spartan>RADIUS</Spartan>
            <Antonio>{focusOn[0].radius}</Antonio>
          </Box>
          <Box
            key={focusOn[0].temperature}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Spartan>AVERAGE TEMP.</Spartan>
            <Antonio>{focusOn[0].temperature}</Antonio>
          </Box>
        </Container>
      </AnimatePresence>
    </>
  );
}

export default Footer;

const variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: { duration: 1 },
  },
};
