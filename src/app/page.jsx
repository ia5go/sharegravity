import styles from "../styles/pages/home.module.scss";
import { Header } from "./components/cmp-header";
import Search from "./components/cmp-search";
import Section from "./components/cmp-section";
import { getData, getFilteredData, getUniqueCategories } from "./utils/boilerplate";

export default async function Home(params) {
  let cards = await getData();
  const search = params.searchParams.search; 
  if(search){
    cards = getFilteredData(cards, search);
  }else{
    // BRING THE ITEMS BACK IF THE SEARCH WAS CLEARED
    cards = await getData();
  }

  const categories = getUniqueCategories(cards);
  
  return (
    <>
      <Header />
      <Search loadval={search ? search : ''}/>

      <main className={styles.main}>
        { categories.map(category =>{
            return <Section id={category} cards={cards} key={category} title={category}/>
          }
        )}
      </main>
    </>
  );
}
