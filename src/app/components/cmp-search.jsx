'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Search(props){
  const router = useRouter();
  const [search, setSearch] = useState(props.loadval);
  const [query] = useDebounce(search, 500);

  useEffect(()=>{
    if(!query){
      router.push(`/`);
      }else{
      router.push(`/?search=${query}`);
    }
  }, [query, router]);

return(
  <form onSubmit={e=>e.preventDefault()}>
    <input placeholder="what are you searching?" type="search" value={search} onChange={e=>{
      setSearch(e.target.value);
    }}
    onLoad={()=>{
      if(props.loadval === ''){
        setSearch('');
      }
    }} />
  </form>
);
}