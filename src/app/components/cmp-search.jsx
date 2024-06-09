'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import style from "../../styles/components/search.module.scss";

/* Component created to make this form a client component so it's possible to handle the the user interaction with the search input. 
The search happens via next's navigation router, to change the url and add a search that will change the results on ta page. */

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
  <form className={style.search} onSubmit={e=>e.preventDefault()}>
    <input className={style.search__input} placeholder="what are you searching?" type="search" value={search} onChange={e=>{
      setSearch(e.target.value);
    }}
    onLoad={()=>{
      // clean the search value on reload the page don't stay fixed on the last entry.
      if(props.loadval === ''){
        setSearch('');
      }
    }} />
  </form>
);
}