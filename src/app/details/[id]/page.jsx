import Image from "next/image";
import { Header } from "../../components/cmp-header";
import { getCard, updateRating } from "../../utils/boilerplate";
import Rating from "../../components/cmp-rating";

export default async function Details(params) {
  let card = await getCard(params.params.id);
  const newRating = params.searchParams.rating;

  if(newRating){
    updateRating(card.id, newRating);
  }

  return (
    <>
    <Header/>

    <main>
      <Image src={card.banner} width={300} height={450} alt={`Banner of ${card.title}`} loading="lazy"/>

      <h1>{card.title}</h1>
      <Rating rating={card.rating}/>

      <p>{card.description}</p>

    </main>
    </>
  );
}
