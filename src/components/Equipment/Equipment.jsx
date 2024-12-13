import React, { useState, useEffect, useRef } from "react";

import "./Equipment.css";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const Equipment = ({item, viewDetailsHandler}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [ARSupported, setARSupported] = useState(false);

    const model = useRef();
    const varient = useRef(null);

    let modelViewer1 = {
        backgroundColor: " #ecf0f3",
        overflowX: "hidden",
        posterColor: "#eee",
        width: "100%",
        height: ARSupported ? "85%" : "75%",
        borderRadius: 15,
    };

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

      useEffect(() => {
        // set up event listeners
        const modelViewer = model.current
        modelViewer &&
        modelViewer.addEventListener('load', () => {
          console.log('loaded')
          const availableVariants = modelViewer?.availableVariants;
          console.log(availableVariants)
          for (const variant of availableVariants) {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            varient?.current?.appendChild(option);
          }
    
          // Adding a default option
          const defaultOption = document.createElement('option');
          defaultOption.value = 'Default';
          defaultOption.textContent = 'Default';
          varient?.current?.appendChild(defaultOption);
        });
    
        varient?.current?.addEventListener('input', (event) => {
          modelViewer.variantName = event.target.value === 'Default' ? null : event.target.value;
        });
      }, []);  

    function showEquipmentDetails() {
        if(isExpanded) {
            return (
                <div className="eqpmnt-cntnr-dtld">
                    <div className="wrapr-cntnr" onClick={() => setIsExpanded(false)}>
                        <div className="eqpmnt-typ-cntnr">
                            <div class="eqpmnt-typ">Module Factory</div>
                        </div>
                        <div className="eqpmnt-ttl">
                            <div>Equipment title</div>
                        </div>
                        <div className="img-cntnr">
                            {/* <img src="arviewer/equipment-thumbnail.png" height="100%" width="100%" /> */}
                            <model-viewer
                                key={item.id}
                                ref={model}
                                style={modelViewer1}
                                src={item.modelSrc}
                                ios-src={item.iOSSrc}
                                alt="A 3D model"
                                ar
                                ar-modes="webxr scene-viewer quick-look"
                                camera-controls
                                auto-rotate>
                                    {ARSupported && (
                                        <button slot="ar-button" className="arbutton">
                                            View in your space
                                        </button>
                                    )}
                            </model-viewer>
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