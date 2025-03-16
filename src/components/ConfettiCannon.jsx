import React, { useState } from "react";
import JSConfetti from "js-confetti";

const confetti = (jsConfetti, confettiNumber, setConfettiNumber) =>{
    switch (confettiNumber) {
        case 1:
            jsConfetti.addConfetti({
                emojis: ['💥','⚡️'],
            });
            break;
        case 2:
                jsConfetti.addConfetti({
                    emojis: ['🇺🇸'],
                });
                jsConfetti.addConfetti({
                    confettiColors: ['#CF0707','#fff','#0743CF']
                });
            break;
        case 3:
                jsConfetti.addConfetti({
                    emojis: ['🌈'],
                });
                jsConfetti.addConfetti({
                    confettiColors: ['#CF0707','#0ECF07','#0743CF','#9307CF','#FFB712']
                });
            break;
        default:
            jsConfetti.addConfetti();
            break;


    }
    const confettiSequence = [1, 2, 3];
    const currentIndex = confettiSequence.indexOf(confettiNumber);
    const nextIndex = (currentIndex + 1) % confettiSequence.length;
    setConfettiNumber(confettiSequence[nextIndex]);
}; 

const ConfettiCannon = ({children}) => {
    const [confettiNumber, setConfettiNumber] = useState(1);
    const jsConfetti = new JSConfetti() 

    return (
        <div>
            <button onClick={() => confetti(jsConfetti, confettiNumber, setConfettiNumber)}>{children}</button>
        </div>
    )
}

export default ConfettiCannon;
