import React from "react";

import "./PrimaryButton.css";

const PrimaryButton = (props) => {
    return (
        <>
            <div className="prmry-btn-cntnr" onClick={props.onClick}>
                <div>{ props.children }</div>
            </div>
        </>
    )
}

export default PrimaryButton;