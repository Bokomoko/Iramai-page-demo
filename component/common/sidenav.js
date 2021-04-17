import styles from './sidenav.module.css';
import React, { useEffect, useState } from 'react';
import className from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function SideNav(props) {
  const [isOpen, setOpen] = useState();

  function closeMenu() {
    alert('close');
  }

  return (
    <div className={styles.sidenav}>
      <div className={styles.menu}>
        <div className={styles.menu_container}>
          <div className={styles.menu_header}>
            <h1 className={className(styles.h1, styles.label)}>Iramai</h1>
            <button
              className={className(styles.close)}
              onClick={() => closeMenu()}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className={styles.menu_content}>
            <div className={className(styles.nav_item)}>
              <Link href="/">Jobs</Link>
            </div>
            <div className={className(styles.nav_item)}>
              <Link href="/">FAQs</Link>
            </div>
            <div className={className(styles.nav_item, styles.nav_item_btn)}>
              <Link href="/">Blogs</Link>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn}>Apply now</button>
            <div className={styles.btn_hire}>
              <a className={styles.button_custom} href="/hire">
                Hire developers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
