import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import HeaderPhone from "../components/headerPhone";
import { useState } from "react";

export default function Home() {
  const [rocket, setRocket] = useState("MERCURY");

  return (
    <div className={styles.container}>
      <HeaderPhone
        setRocket={(planet) => setRocket(planet)}
        rocket={rocket}
      ></HeaderPhone>
      <Header
        setRocket={(planet) => setRocket(planet)}
        rocket={rocket}
      ></Header>
      <Content rocket={rocket}></Content>
      <Footer rocket={rocket}></Footer>
    </div>
  );
}
