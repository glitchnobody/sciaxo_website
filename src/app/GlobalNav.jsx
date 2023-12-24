'use client';
import React, { useLayoutEffect, useRef, useEffect, Component } from 'react';
import styles from './GlobalNav.module.scss';
import gsap from 'gsap';

export default function GlobalNav() {
  const burgerContainer = useRef();
  const firstLine = useRef();
  const secondLine = useRef();

  const tlHoverBurger = useRef(null);

  useEffect(() => {
    tlHoverBurger.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'power3.inOut',
      },
    });

    tlHoverBurger.current
      .to(firstLine.current, { width: '1.5rem' })
      .to(secondLine.current, { width: '2rem' }, '-=0.4')
      .to(burgerContainer.current, { width: '3rem' }, '-=0.2');

    return () => {
      if (tlHoverBurger.current) {
        tlHoverBurger.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (tlHoverBurger.current) {
      tlHoverBurger.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (tlHoverBurger.current) {
      tlHoverBurger.current.reverse();
    }
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.title}>Sciaxo</div>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={burgerContainer}
          className={styles.burgerContainer}
        >
          <div ref={firstLine} className={styles.firstLine}></div>
          <div ref={secondLine} className={styles.secondLine}></div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <svg viewBox='0 0 48 39' fill='none'>
      <path
        d='M21.6991 12.1986C20.4457 12.727 19.4137 13.6729 18.7787 14.8757C18.1435 16.0786 17.9443 17.4642 18.2149 18.7972C18.4854 20.1302 19.2091 21.3286 20.2629 22.1885C21.3168 23.0486 22.6358 23.5173 23.996 23.5152V19.7465C23.4336 19.7465 22.8941 19.5231 22.4964 19.1253C22.0986 18.7276 21.8752 18.1881 21.8752 17.6257C21.8752 17.0631 22.0986 16.5237 22.4964 16.1259C22.8941 15.7282 23.4336 15.5047 23.996 15.5047V11.7346C23.2069 11.7328 22.4256 11.8907 21.6991 12.1986Z'
        fill='#EEEEEE'
      />
      <path
        d='M26.2853 26.8045C27.5381 26.2755 28.5693 25.3293 29.2039 24.1265C29.8385 22.9238 30.0375 21.5385 29.767 20.2058C29.4965 18.873 28.7732 17.6749 27.72 16.8146C26.6667 15.9545 25.3482 15.4852 23.9883 15.4864V19.2551C24.5507 19.2551 25.0902 19.4785 25.488 19.8762C25.8857 20.274 26.1091 20.8134 26.1091 21.3759C26.1091 21.9384 25.8857 22.4778 25.488 22.8756C25.0902 23.2734 24.5507 23.4968 23.9883 23.4968V27.2639C24.7771 27.2671 25.5584 27.1108 26.2853 26.8045Z'
        fill='#EEEEEE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.02647 11.2906C3.95199 13.518 1.68447 16.4572 1.68447 19.5C1.68447 22.5429 3.95199 25.482 8.02647 27.7094C12.0696 29.9197 17.7124 31.3128 23.9915 31.3128C30.2705 31.3128 35.9133 29.9197 39.9564 27.7094C44.0308 25.482 46.2984 22.5429 46.2984 19.5C46.2984 16.4572 44.0308 13.518 39.9564 11.2906C35.9133 9.08047 30.2705 7.68734 23.9915 7.68734C17.7124 7.68734 12.0696 9.08047 8.02647 11.2906ZM7.21846 9.81259C11.5538 7.44259 17.4855 6.00284 23.9915 6.00284C30.4974 6.00284 36.4291 7.44259 40.7644 9.81259C45.0683 12.1654 47.9829 15.5537 47.9829 19.5C47.9829 23.4463 45.0683 26.8347 40.7644 29.1874C36.4291 31.5574 30.4974 32.9972 23.9915 32.9972C17.4855 32.9972 11.5538 31.5574 7.21846 29.1874C2.9146 26.8347 0 23.4463 0 19.5C0 15.5537 2.9146 12.1654 7.21846 9.81259Z'
        fill='#EEEEEE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.89686 14.016C8.19294 18.4377 11.1979 23.4129 15.6379 27.8528C20.0778 32.2929 25.0531 35.2979 29.4747 36.5939C33.9308 37.9 37.6125 37.425 39.7641 35.2734C41.9157 33.1218 42.3907 29.4401 41.0846 24.984C39.7886 20.5623 36.7836 15.5871 32.3436 11.1472C27.9037 6.70725 22.9284 3.70216 18.5068 2.40616C14.0506 1.10009 10.369 1.575 8.21736 3.72657C6.06572 5.87826 5.59081 9.55989 6.89686 14.016ZM5.28043 14.4898C3.9008 9.78277 4.23578 5.32598 7.02621 2.53551C9.81668 -0.254946 14.2736 -0.589924 18.9805 0.789705C23.7219 2.17941 28.9343 5.35566 33.5347 9.95603C38.1351 14.5564 41.3114 19.7689 42.7011 24.5103C44.0807 29.2172 43.7457 33.674 40.9552 36.4645C38.1648 39.255 33.7079 39.5899 29.001 38.2103C24.2596 36.8206 19.0472 33.6444 14.4468 29.044C9.84645 24.4436 6.67011 19.2312 5.28043 14.4898Z'
        fill='#EEEEEE'
      />
    </svg>
  );
}
