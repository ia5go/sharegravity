import Image from "next/image";
import { Header } from "../../components/cmp-header";
import { getCard } from "../../utils/boilerplate";


export default async function Details(params) {
  const card = await getCard(params.params.id);

  return (
    <>
    <Header/>

    <main>
      <Image src={card.banner} width={300} height={450} alt={`Banner of ${card.title}`} loading="lazy"/>

      <h1>{card.title}</h1>
      <div>rating</div>

      <p>{card.description}</p>

    </main>
    </>
  );
}
