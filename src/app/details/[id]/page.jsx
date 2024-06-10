import Image from "next/image";
import Header from "../../components/cmp-header";
import { getCard, updateRating } from "../../utils/boilerplate";
import Rating from "../../components/cmp-rating";
import style from "../../../styles/pages/details.module.scss";

export default async function Details(params) {
  let card = await getCard(params.params.id);
  const newRating = params.searchParams.rating;

  if(newRating){
    updateRating(card.id, newRating);
  }

  return (
    <>
    <Header/>

    <main className={style.details}>

      <div className={style.details__frame }>

        <div className={style.details__banner}>
          <Image src={card.banner} className={style.details__banner__image} width={500} height={720} alt={`Banner of ${card.title}`} loading="lazy"/>
        </div>

        <div className={style.details__information}>
          <h1 className={style.details__information__title}>{card.title}</h1>
          
          <h2 className={style.details__information__subtitle}>{card.category}</h2>

          <Rating rating={card.rating} className={style.details__information__rating}/>

          <div className={style.details__information__paragraph}><p>{card.description}</p></div>
        </div>
      </div>

    </main>
    </>
  );
}