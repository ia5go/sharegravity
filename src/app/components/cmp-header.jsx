import styles from '../../styles/components/header.module.scss';
import Link from 'next/link';
import { getData, getUniqueCategories } from '../utils/boilerplate';
import BtnMobile from './cmp-btn-mobile';

export default async function Header(){
  // Header component should be able to check for all possible categories, so it can build a dynamic navigation based on what was found in the database.
  const cards = await getData();
  const categories = getUniqueCategories(cards);

  return(
    <header className={styles.header}>
        <BtnMobile target="header__nav" style={styles.header__mobile}>
          <span></span><span></span><span></span>
        </BtnMobile>

      <nav id='header__nav' className={styles.header__nav}>
        <ul className={styles.header__nav__ul}>
          <li><Link className={styles.header__nav__ul__link} href='/' title='Home'>Home</Link> </li>
          {
            categories.map(category =>{
              return (<li key={category}><Link className={styles.header__nav__ul__link} href={`/#${category}`} title={category}>{category}</Link> </li>)
            })
          }
        </ul>
      </nav>
    </header>
  );
}