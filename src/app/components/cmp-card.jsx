import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/card.module.scss";

export function Card(props){
  return(
    <div className={styles.card}>
      <Link href={props.href} title={props.title} className={styles.linkfull}/>
      <Image className={styles.card__image} src={props.src} loading="lazy" alt={props.title} width={150} height={150}/>
      <h3 className={styles.card__title}>{props.title}</h3>
      <span className={styles.card__category}>{props.category}</span>
    </div>
  )
}