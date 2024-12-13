import React, { useState, useEffect } from "react";

import "./Equipment.css";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const Equipment = ({item, viewDetailsHandler}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [ARSupported, setARSupported] = useState(false);

    useEffect(() => {
        if (
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          setARSupported(true);
        }

        console.log('Is AR Supported', ARSupported);
      }, []);

    function showEquipmentDetails() {
        if(isExpanded) {
            return (
                <div className="eqpmnt-cntnr-dtld">
                    <div className="wrapr-cntnr" onClick={()=>setIsExpanded(false)}>
                        <div className="eqpmnt-typ-cntnr">
                            <div class="eqpmnt-typ">Module Factory</div>
                        </div>
                        <div className="eqpmnt-ttl">
                            <div>Equipment title</div>
                        </div>
                        <div className="img-cntnr">
                            <img src="arviewer/equipment-thumbnail.png" height="100%" width="100%" />
                        </div>
                        <div className="eqpmnt-dtl">
                            <div>The glass loader is picker placer robot used in Module factory to pickup and place glass on conveyor</div>
                        </div>
                    </div>
                    <div className="arBtnCntnr">
                        <PrimaryButton>View in AR</PrimaryButton>
                    </div>
                </div>
            );    
        } else {
            return (
                <div className="eqpmnt-cntnr" onClick={() => setIsExpanded(true)}>
                    <div className="thumbnail-container">
                        <img src="arviewer/equipment-thumbnail.png" height="100%" width="100%" />
                    </div>
                    <div className="dscrptn-cntnr">
                        <div className="eqpmnt-typ">Module Factory</div>
                        <div className="eqpmnt-name">{item.name}</div>
                        <div className="eqpmnt-dscrptn">The Glass loader is a picker...</div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="rootCntnr">
            { showEquipmentDetails() }
        </div>
    );
}

export default Equipment;