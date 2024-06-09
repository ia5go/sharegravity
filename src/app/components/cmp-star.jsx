'use server';
import { updateRating } from "../utils/boilerplate";
import { Pentagram } from "@phosphor-icons/react";

export default function Star(props){
console.log(props);
  return(
    <>
      <Pentagram 
      weight={props.weight} size={32} color='#880000' onClick={() =>updateRating(props.cardId, props.rating)} />
    </>
  )
}