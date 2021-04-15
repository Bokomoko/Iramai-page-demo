import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./article.module.css";


function Article(props) {
    console.log(props)
    return (
        <div className={styles.article}>
            <div className={styles.image}>
                <img src={props.image}/>
            </div>
            <div className={styles.padding_20}>
                <p className={classNames(styles.title, "font-weight-light")}>{props.article_title}</p>
            </div>
            <div>
                <p className={classNames(styles.title)}>{props.article_description}</p>
            </div>
            <Link href={props.url}>Read more</Link>
        </div>
    )
}

export default Article;


