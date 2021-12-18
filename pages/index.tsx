import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import HeaderPhone from "../components/headerPhone";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";

export default function Home() {

  return (
    <Provider store={store}>
      <Head>
        <title>Planet Facts</title>
      </Head>
    <div className={styles.container}>
      <HeaderPhone />
      <Header />
      <Content />
      <Footer />
    </div>
    </Provider>
  );
}
