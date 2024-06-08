import styles from "../styles/pages/home.module.scss";
import { Card } from "./components/cmp-card";
import { Header } from "./components/cmp-header";
import Section from "./components/cmp-section";
import { getData, getFilteredData, getUniqueCategories } from "./utils/boilerplate";

export default async function Home() {
  const cards = await getData();
  const categories = getUniqueCategories(cards);

  // console.log(getFilteredData(cards, 'games'));
  
  return (
    <>
      <Header />
      <main className={styles.main}>
        { categories.map(category =>{
            return <Section id={category} cards={cards} key={category} title={category}/>
          }
        )}
      </main>
    </>
  );
}
