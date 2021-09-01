import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import { motion, AnimatePresence, Variants } from "framer-motion";
import planetImg from "../public/assets/planet-mercury.svg";
import sourceImg from "../public/assets/icon-source.svg";

const Box = styled(motion.div)`
  position: absolute;
  height: 40vh;
  width: 40vh;
  margin-right: 21vh;
  @media screen and (max-width: 113.5vh) {
    height: 30vw;
    width: 30vw;
    margin-right: 0px;
    margin-bottom: 10vw;
  }
`;

const Container = styled.div`
  margin-top: 5vh;
  /* width: 78vw; */
  width: 158vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 158vh) {
    width: 100%;
  }

  @media screen and (max-width: 113.5vh) {
    flex-direction: column;
  }
`;

const Antonio = styled.h1`
  font-family: "Antonio", sans-serif;
  /* line-height: 2.5; */
  font-size: 10.94vh;
  letter-spacing: 0.136vh;
  margin-top: 0vh;
  cursor: pointer;

  @media screen and (max-width: 113.5vh) {
    font-size: 7vw;
  }

  @media screen and (max-width: 65vh) {
    text-align: center;
    font-size: 11vw;
  }
`;

const Spartan = styled(motion.p)`
  font-family: "Spartan", sans-serif;
  font-weight: 400;
  line-height: 2;
  font-size: 1.7vh;
  letter-spacing: 1px;
  margin-top: -4vh;

  &.source {
    color: hsl(240, 6%, 54%);
  }

  &.wiki {
    font-weight: 700;
    text-decoration: underline;
    color: hsl(240, 6%, 54%);
    margin-left: 1vh;
    cursor: pointer;
  }

  @media screen and (max-width: 113.5vh) {
    margin-top: -2vw;
    font-size: 1.5vw;
  }

  @media screen and (max-width: 65vh) {
    text-align: center;
    font-size: 2.7vw;
  }
`;

const SourceImgContainer = styled.div`
  width: 1.4vh;
  height: 1.4vh;
  margin-top: -5.5vh;
  margin-left: 1vh;
  cursor: pointer;
  @media screen and (max-width: 113.5vh) {
    margin-top: -3.7vw;
  }
`;

const BoxRight = styled(motion.div)`
  /* height: 17.51vh; */
  height: 100%;
  width: 47.87vh;
  @media screen and (max-width: 113.5vh) {
    display: flex;
    width: 95%;
  }

  @media screen and (max-width: 65vh) {
    justify-content: center;
  }
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 65vh) {
    margin-bottom: 23px;
  }
`;

const Button = styled.div`
  margin-top: 2vh;
  width: 47.87vh;
  height: 6.56vh;
  border: 1px solid hsl(240, 17%, 26%);
  display: flex;
  align-items: center;
  cursor: pointer;

  &.ImMERCURY {
    background-color: hsl(194, 48%, 49%);
  }
  &.ImVENUS {
    background-color: hsl(33, 82%, 61%);
  }
  &.ImEARTH {
    background-color: hsl(263, 67%, 51%);
  }
  &.ImMARS {
    background-color: hsl(10, 63%, 51%);
  }
  &.ImJUPITER {
    background-color: hsl(2, 68%, 53%);
  }
  &.ImSATURN {
    background-color: hsl(17, 73%, 46%);
  }
  &.ImURANUS {
    background-color: hsl(169, 73%, 44%);
  }
  &.ImNEPTUNE {
    background-color: hsl(222, 87%, 56%);
  }

  &:hover {
    background-color: hsl(240, 17%, 16%);
  }

  @media screen and (max-width: 113.5vh) {
    width: 77%;
    height: 6.4vw;
  }
`;

const SpartanBut = styled.p`
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  font-size: 1.64vh;
  letter-spacing: 0.35vh;
  margin-top: 2.2vh;
  margin-left: 3vh;

  &.numb {
    color: hsl(240, 6%, 54%);
  }

  @media screen and (max-width: 113.5vh) {
    margin-top: 2vw;
    margin-left: 2vw;
    font-size: 1.35vw;
  }
`;

const Source = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 113.5vh) {
    margin-top: 4vw;
  }

  @media screen and (max-width: 65vh) {
    justify-content: center;
  }
`;

const Details = styled.div`
  @media screen and (max-width: 113.5vh) {
    width: 50%;
    &#button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
  }

  @media screen and (max-width: 65vh) {
    width: 90%;

    &#button {
      display: none;
    }
  }
`;

const Mobile = styled.div`
  display: none;
  width: 100vw;

  @media screen and (max-width: 65vh) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -60px;
    margin-bottom: 55px;
    height: 70px;
    border-bottom: 1px solid hsl(240, 17%, 26%);
  }
`;

const HeaderMobile = styled.h3`
  font-family: "Spartan", sans-serif;
  margin-top: 27px;
  margin-bottom: 0px;
  line-height: 38px;
  font-size: 10px;
  letter-spacing: 3px;
  cursor: pointer;
  border-bottom: 0.4vh solid transparent;

  &.ImMERCURY,
  &.ImNotMERCURY:hover {
    border-bottom: 0.4vh solid hsl(194, 48%, 49%);
  }
  &.ImVENUS,
  &.ImNotVENUS:hover {
    border-bottom: 0.4vh solid hsl(33, 82%, 61%);
  }
  &.ImEARTH,
  &.ImNotEARTH:hover {
    border-bottom: 0.4vh solid hsl(263, 67%, 51%);
  }
  &.ImMARS,
  &.ImNotMARS:hover {
    border-bottom: 0.4vh solid hsl(10, 63%, 51%);
  }
  &.ImJUPITER,
  &.ImNotJUPITER:hover {
    border-bottom: 0.4vh solid hsl(2, 68%, 53%);
  }
  &.ImSATURN,
  &.ImNotSATURN:hover {
    border-bottom: 0.4vh solid hsl(17, 73%, 46%);
  }
  &.ImURANUS,
  &.ImNotURANUS:hover {
    border-bottom: 0.4vh solid hsl(169, 73%, 44%);
  }
  &.ImNEPTUNE,
  &.ImNotNEPTUNE:hover {
    border-bottom: 0.4vh solid hsl(222, 87%, 56%);
  }

  &.sad {
    color: hsl(240, 6%, 54%);
  }
`;

const PlanetContainer = styled.div`
  height: 40vh;
  width: 40vh;
  margin-right: 21vh;
  @media screen and (max-width: 113.5vh) {
    height: 30vw;
    width: 30vw;
    margin-right: 0px;
    margin-bottom: 10vw;
  }
`;

function Content(props: { rocket: string }) {
  const focusOn = data.filter((planet) => planet.name == props.rocket);

  const [planetImage, setPlanetImg] = useState("planet");
  const [planetState, setPlanetState] = useState(true);

  let imgLink = focusOn[0].images.planet;

  useEffect(() => {
    setPlanetImg("planet");
  }, [props]);

  if (planetImage === "internal") {
    imgLink = focusOn[0].images.internal;
  }
  if (planetImage === "geology") {
    imgLink = focusOn[0].images.geology;
  }

  const handleClick = () => {
    var x = window.matchMedia("(max-width: 113.5vh)");
    if (x.matches) {
      setPlanetState((prev) => !prev);
      return;
    }
    document.getElementById("title")?.scrollIntoView({ behavior: "smooth" });
    setPlanetState((prev) => !prev);
  };

  let focus = (planetImage)

  return (
    <>
      <Container>
        <Mobile>
          <HeaderMobile
            onClick={() => {
              setPlanetImg("planet");
            }}
            className={
              planetImage === "planet"
                ? `Im${props.rocket}`
                : `ImNot${props.rocket} sad`
            }
          >
            OVERVIEW
          </HeaderMobile>
          <HeaderMobile
            onClick={() => {
              setPlanetImg("internal");
            }}
            className={
              planetImage === "internal"
                ? `Im${props.rocket}`
                : `ImNot${props.rocket} sad`
            }
          >
            STRUCTURE
          </HeaderMobile>
          <HeaderMobile
            onClick={() => {
              setPlanetImg("geology");
            }}
            className={
              planetImage === "geology"
                ? `Im${props.rocket}`
                : `ImNot${props.rocket} sad`
            }
          >
            SURFACE
          </HeaderMobile>
        </Mobile>

        <LeftContainer>
          <PlanetContainer>
            <AnimatePresence>
              <Box
                key={imgLink}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  src={`/assets/${imgLink}`}
                  alt=""
                  className="planet"
                  width="378"
                  height="400"
                  layout="responsive"
                  priority={true}
                  loading="eager"
                />
              </Box>
            </AnimatePresence>
          </PlanetContainer>
        </LeftContainer>

        <BoxRight
          key={focusOn[0].name}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Details>
            <Antonio
              id="title"
              onClick={() =>
                document
                  .getElementById("header")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {focusOn[0].name}
            </Antonio>

            {/* OOVEEEER HEEEREEEE !!! */}

            {/* OOVEEEER HEEEREEEE !!! */}

            {/* OOVEEEER HEEEREEEE !!! */}

            {/* OOVEEEER HEEEREEEE !!! */}

            {/* OOVEEEER HEEEREEEE !!! */}


            <Spartan
            key={planetImage}
            variants={smallTextVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >{focusOn[0][planetImage as 'planet' | 'internal' | 'geology'].content}</Spartan>

            <Source>
              <Spartan className="source">Source :</Spartan>
              <a href={focusOn[0].planet.source}>
                <Spartan className="wiki">Wikipedia</Spartan>
              </a>
              <SourceImgContainer>
                <a href={focusOn[0].planet.source}>
                  <Image
                    src={require("../public/assets/icon-source.svg")}
                    alt=""
                    className="planet"
                    layout="responsive"
                  />
                </a>
              </SourceImgContainer>
            </Source>
          </Details>
          <Details id="button">
            <Button
              onClick={() => {
                setPlanetImg("planet");
                handleClick();
              }}
              className={
                planetImage === "planet" ? `Im${props.rocket}` : "notMe"
              }
            >
              <SpartanBut className="numb">01</SpartanBut>
              <SpartanBut>OVERVIEW</SpartanBut>
            </Button>
            <Button
              onClick={() => {
                setPlanetImg("internal");
                handleClick();
              }}
              className={
                planetImage === "internal" ? `Im${props.rocket}` : "notMe"
              }
            >
              <SpartanBut className="numb">02</SpartanBut>
              <SpartanBut>INTERNAL STRUCTURE</SpartanBut>
            </Button>
            <Button
              onClick={() => {
                setPlanetImg("geology");
                handleClick();
              }}
              className={
                planetImage === "geology" ? `Im${props.rocket}` : "notMe"
              }
            >
              <SpartanBut className="numb">03</SpartanBut>
              <SpartanBut>SURFACE GEOLOGY</SpartanBut>
            </Button>
          </Details>
        </BoxRight>
      </Container>
    </>
  );
}

export default Content;

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: "20deg",
    x: 200,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: "-20deg",
    x: -200,
    transition: { duration: 1 },
    position: "absolute",
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 1 },
  },
};

const smallTextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {  duration: 1.8 },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.2 },
  },
};