import { Card } from "./cmp-card";
import style from "../../styles/components/section.module.scss";

export default function Section(props) {
  return (
    <section className={style.section} id={props.id} >
      <header className={style.section__header}>
      <h2 className={style.section__header__title}>{props.title}</h2>
      </header>
      <div className={style.section__cards}>
        {props.cards.map(item => {
          if(item.category === props.id){
            return (<Card href={`/details/${item.id}`} key={item.id} title={item.title} src={item.thumbnail} category={item.category}/>);
          }
        })}
      </div>
    </section>
  );
}
