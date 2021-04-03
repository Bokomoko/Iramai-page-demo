import style from "./apply.module.css";
import React from "react";
import Container from "react-bootstrap/Container";
import classNames from "classnames";

function JobApply() {
    return (
        <div className={classNames(style.main, style.blur, style.img)}>
            <Container>
                <div className={style.job_introduce}>
                    <h2 className={style.job_title}>Remote React/Node Developer Jobs</h2>
                </div>
            </Container>
        </div>
    )
}

export default JobApply
