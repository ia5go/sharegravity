import styles from "../styles/pages/home.module.scss";
import { Card } from "./components/cmp-card";
import { Header } from "./components/cmp-header";

const data = {
  "Games": [{
    "id": 1,
    "title": "Dune",
    "description": "Lorem Ipsum",
    "thumbnail": "",
    "banner": ""
  },
  {
    "id": 2,
    "title": "Dune 2",
    "description": "Lorem Ipsum",
    "thumbnail": "",
    "banner": ""
  }],

  "Music": [{
    "id": 3,
    "title": "Agust D",
    "description": "Lorem Ipsum",
    "thumbnail": "",
    "banner": ""
  },
  {
    "id": 4,
    "title": "D-2",
    "description": "Lorem Ipsum",
    "thumbnail": "",
    "banner": ""
  }]
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="movies">
          <h2>Movies</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section>
          <h2>none</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section>
          <h2>none</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section>
          <h2>none</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section>
          <h2>none</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section>
          <h2>none</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
        <section id="music">
          <h2>Music</h2>
          <Card href="/details" title="card01" src="next.svg" category="teste" />
        </section>
      </main>
    </>
  );
}
