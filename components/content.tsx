
import Image from 'next/image'
import React, { useState } from 'react';
import styled from 'styled-components';
import {data} from './data'

import planetImg from '../public/assets/planet-mercury.svg'
import sourceImg from '../public/assets/icon-source.svg'

const Container= styled.div`
  margin-top:5vh;
  /* width: 78vw; */
  width: 158vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Auth = styled.div`
display: flex;
justify-content: flex-end;
width:100%;

`;

const Antonio = styled.h1`
  font-family: 'Antonio', sans-serif;
  /* line-height: 2.5; */
  font-size:  10.94vh;
  letter-spacing:  0.136vh;
  margin-top: 0vh;
  cursor: pointer;
`;

const Spartan = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  line-height: 2;
  font-size: 1.7vh;
  letter-spacing: 1px;
  margin-top: -4vh;

  &.source{
      color:hsl(240,6%,54%);
  }

  &.wiki{
      font-weight: 700;
      text-decoration: underline;
      color:hsl(240,6%,54%);
      margin-left: 1vh;
      cursor: pointer;
  }


`;

const SourceImgContainer = styled.div`
width: 1.4vh;
height: 1.4vh;
margin-top: -5.5vh;
margin-left: 1vh;
cursor: pointer;
`;

const BoxRight =  styled.div`
/* height: 17.51vh; */
height: 100%;
width:47.87vh;

`;

const BoxLeft =  styled.div`
/* height: 17.51vh; */
height: 40vh;
width:40vh;
margin-right: 21vh;
`;

const LeftContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Button = styled.div`
margin-top: 2vh;
width:47.87vh;
height: 6.56vh;
border: 1px solid hsl(240,17%,26%);  
display: flex;
align-items: center;
cursor: pointer;


  &.ImMERCURY{
    background-color: hsl(194,48%,49%); 
  }
  &.ImVENUS{
    background-color: hsl(33,82%,61%); 
  }
  &.ImEARTH{
    background-color:  hsl(263, 67%, 51%); 
  }
  &.ImMARS{
    background-color:hsl(10, 63%, 51%); 
  }
  &.ImJUPITER{
    background-color:hsl(2, 68%, 53%); 
  }
  &.ImSATURN{
    background-color: hsl(17, 73%, 46%); 
  }
  &.ImURANUS{
    background-color:  hsl(169, 73%, 44%); 
  }
  &.ImNEPTUNE{
    background-color:  hsl(222, 87%, 56%); 
  }

&:hover{
background-color: hsl(240,17%,16%);
}

`;

const SpartanBut = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size:  1.64vh;
  letter-spacing: 0.35vh;
  margin-top: 2.2vh;
  margin-left: 3vh;

  &.numb{
      color:hsl(240,6%,54%);
  }

`;

const Source = styled.div`
margin-top: 6vh;
display: flex;
align-items: center;
`;



import mercury from '../public/assets/planet-mercury.svg';
import venus from '../public/assets/planet-venus.svg';


const planetsMap = {
    mercury,
    venus,
}


function Content(props:{rocket:string}) {

    const focusOn = data.filter((planet)=>planet.name==props.rocket)

    const[planetImage, setPlanetImg]= useState("planet")

    // const a = require(`${focusOn[0].images.planet}`)
    // @ts-ignore
    const a = planetsMap[focusOn[0].images.planet] || mercury;

    console.log(focusOn[0].images)

    if(planetImage==="internal"){ const a = require("../public/assets/planet-mercury.svg")}

  return (
    <>
      <Container>
        <LeftContainer>
        <BoxLeft>
        <Image src={a} alt="" className="planet" layout="responsive" />
        </BoxLeft>
        </LeftContainer>
        
        <BoxRight>
            <Antonio id="title" onClick={() => document.getElementById('header')?.scrollIntoView({ behavior: 'smooth'})}>
                {focusOn[0].name}
            </Antonio>
            <Spartan>
                {focusOn[0].overview.content}
            </Spartan>
            
            <Source>
            <Spartan className="source">Source :</Spartan>
            <a href={focusOn[0].overview.source}><Spartan className="wiki">Wikipedia</Spartan></a>
            <SourceImgContainer>
            <a href={focusOn[0].overview.source}>
            <Image src={require("../public/assets/planet-mercury.svg")} alt="" className="planet" layout="responsive" />
            </a>
            </SourceImgContainer>
           
            </Source>
            
            <Button onClick={()=>setPlanetImg("planet")} className={planetImage==="planet"?`Im${props.rocket}`:"notMe"}>
                <SpartanBut className="numb">01</SpartanBut>
                <SpartanBut>OVERVIEW</SpartanBut>
            </Button>
            <Button onClick={()=>setPlanetImg("internal")} className={planetImage==="internal"?`Im${props.rocket}`:"notMe"}>
                <SpartanBut className="numb">02</SpartanBut>
                <SpartanBut>INTERNAL STRUCTURE</SpartanBut>
            </Button>
            <Button onClick={()=>setPlanetImg("geology")} className={planetImage==="geology"?`Im${props.rocket}`:"notMe"}>
                <SpartanBut className="numb">03</SpartanBut>
                <SpartanBut>SURFACE GEOLOGY</SpartanBut>
            </Button>
        </BoxRight>

      </Container>

    </>
  );
}

export default Content;
