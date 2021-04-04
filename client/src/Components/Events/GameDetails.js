import React from 'react';
import './GameDetails.css';


function GameDetails() {
    return (
        <>
        <div className="container-gameDetails">

            <div className="step1-div">
                <p className="step1">STEP 1 : Choose your language group to join    </p>
            </div>

            <div className="step2-div">
                <p className="step2">STEP 2 : Decide with your group which game to play before meet up & bring it with you</p>
            </div>

            <div className="step3-div">
                <p className="step3">STEP 3 : Enjoy the company & try speaking only in English</p>
            </div>
            <div className="step-reminder-div">
                <p className="step4">REMINDER: Let other joiners know in case you can't join.</p>
                <p className="step5">REMINDER: Event goes only if the minimum participant reaches to 2.</p>
             </div>
        </div>
        </>
    )
}

export default GameDetails
