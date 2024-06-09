import Link from 'next/link';
import styles from '../../styles/components/header.module.scss';

export function Header(){
  return(
    <header>
      <nav>
        <ul>
          <li><Link href='/'>Home</Link> </li>
          <li><Link href='/#movies'>Movies</Link> </li>
          <li><Link href='/#music'>Music</Link> </li>
        </ul>
      </nav>
    </header>
  );
}