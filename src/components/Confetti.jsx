import { useState } from "react";
import JSConfetti from "js-confetti";

export default Confetti = () => {
    const [confettiNumber, setConfettiNumber] = useState(1);
    const jsConfetti = new JSConfetti()

    return () =>{
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
        if(confettiNumber === 3) setConfettiNumber(1);
        else setConfettiNumber(confettiNumber+1);
    };  

}