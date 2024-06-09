'use client';

import { useEffect } from "react";

/* Component created to bring client functionality to the mobile trigger */

export default function BtnMobile({ children, target, style }) {
  useEffect(() => {
    const nav = document.getElementById(target);

    if (nav) {
      const removeAllOpenClasses = () => {
        document.querySelectorAll('.open').forEach(el => {
          el.classList.remove('open');
        });
      };

      const handleNavClick = (e) => {
        if (nav.contains(e.target)) {
          removeAllOpenClasses();
        }
      };

      nav.addEventListener('click', handleNavClick);

      return () => {
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
