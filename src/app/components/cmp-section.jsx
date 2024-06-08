import { Card } from "./cmp-card";

export default function Section(props) {
  return (
    <section id={props.id} >
      <h2>{props.title}</h2>
      <div>
        {props.cards.map(item => {
          if(item.category === props.id){
            return (<Card href={`/details/${item.id}`} key={item.id} title={item.title} src={item.thumbnail} category={item.category}/>);
          }
        })}
      </div>
    </section>
  );
}
