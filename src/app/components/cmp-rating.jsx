'use client'

import { Pentagram } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Rating(props) {
  const router = useRouter();
  const [rating, setRating] = useState(props.rating)

  function setRatingHandler(nr){
    if(nr !== rating){
      setRating(nr);
      router.push(`?rating=${rating}`)
      return true;
    }
    return false;
  }

  return (
    <div>
    {Array.from({ length: 5 }, (_, i) => (
      <Pentagram 
      weight={i < rating ? 'fill' : 'thin'} key={i} size={32} color='#880000' onClick={() =>setRatingHandler(i+1)} />
    ))}
    </div>
  );
}
