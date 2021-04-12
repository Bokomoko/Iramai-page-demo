import styles from './header.module.css';
import React from "react";
import className from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container_inner}>
                    <div className={styles.left}>
                        <h1 className={styles.h1}>Turing</h1>
                    </div>
                    <div className={styles.right}>
                        <div className={className(styles.nav_item_container, styles.nav_item, styles.hover_1)}>
                            <span className={className(styles.nav_item_container, styles.nav_item)}>For Companies</span>
                        </div>
                        <div className={className(styles.nav_item_container, styles.nav_item, styles.hover_1)}>
                            <span className={className(styles.nav_item_container, styles.nav_item)}>For Developers</span>
                        </div>
                        <div className={className(styles.nav_item_container, styles.nav_item, styles.hover_1)}>
                            <span className={className(styles.nav_item_container, styles.nav_item)}>Blog</span>
                        </div>
                    </div>
                    <div className={styles.right1}>
                        <a href="/hire" className={className('navbar-text', 'pr-3', styles.text_default)}>Hire
                            developers</a>
                        <button className={className('btn', styles.btn_primary)} type="button">Apply now</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
