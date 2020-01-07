import React, { useState } from "react"

export const InfoButton = (props:{infoText:string,header:string}) => {
    const [showInfo, setShowInfo] = useState(false);

    return  <>
        <input type="button" onClick={() => setShowInfo(!showInfo) } value="i" />
        { showInfo &&
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={()=>setShowInfo(false)}>&times;</span>
                    <h2>{props.header}</h2>
                    <p>{props.infoText}</p>
                </div>
            </div>
        }
    </>
}