'use client';

import { useEffect } from "react";

/* Component created to bring client functionality to the mobile trigger */

export default function BtnMobile({ children, target, style }) {
  useEffect(() => {
    const nav = document.getElementById(target);

    if (nav) {
      /* Treating the posible click on tha nav when in mobile, it must also close the nav.*/
      function closeNavHandler() {
        document.querySelectorAll('.open').forEach(el => {
          el.classList.remove('open');
        });
      };

      /* Handle the click that happens inside the nav. */
      function handleNavClick (e) {
        if (nav.contains(e.target)) {
          closeNavHandler();
        }
      };

      nav.addEventListener('click', handleNavClick);

      return () => {
        /* Cleans the events in the nav to avoid memory waist. */
        nav.removeEventListener('click', handleNavClick);
      };
    }
  }, [target]);

  const mobileToggleHandler = (e) => {
    const nav = document.getElementById(target);
    if (nav) {
      nav.classList.toggle('open');
      e.target.classList.toggle('open');
    }
  };

  return (
    <button className={style} onClick={(e) => { mobileToggleHandler(e) }}>
      {children}
    </button>
  );
}
