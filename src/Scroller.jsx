import React from "react";
import $ from "jquery";

export default function Scroller(){


    const maxHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    $(window).scroll(function() {
        
        const baseHeight = $(window).height();
        console.log(baseHeight);
        const currentHeight = $(window).scrollTop() + baseHeight
        const scrollPercentage = ((currentHeight-baseHeight)/(maxHeight-baseHeight)*100);

        $(".insider").css(`height`, `${scrollPercentage}%`);

        $("#circle-lol").attr("stroke-dashoffset", `${315-(scrollPercentage*1.8)}px`);
        
        
        if ($(window).scrollTop() + $(window).height() >= 2000) {
            $(".progress").addClass('red');
        }
        if ($(window).scrollTop() <= 100) {
            $(".progress").removeClass('red');
        }

        if(parseInt($("#circle-lol").attr("stroke-dashoffset")) <= 159) {
            $(".checkmark").removeClass('hidden');
            $(".checkmark").addClass('pop-in');
            $("#circle-lol").addClass('grey-out');
            // $(".checkmark").addClass('fade-out');
        }

        if(parseInt($("#circle-lol").attr("stroke-dashoffset")) > 159) {
            $(".checkmark").addClass('hidden');
            $(".checkmark").removeClass('pop-in');
            $("#circle-lol").removeClass('grey-out');
        }
    });
    
    return(
        <div className="check-mark-wrapper">
            <div className="circle-background"></div>
            <div className="circle-wrapper">
                <svg viewBox="0 0 100 100" height="150px" xmlns="http://www.w3.org/2000/svg" id="circle-wrapper">
                    <circle id="circle-lol" strokeLinecap="round"  
                    cx="50" cy="50" r="25" strokeWidth="2" fill="none" strokeDasharray="315" strokeDashoffset="315" />
                </svg>
            </div>
            <div className="checkmark hidden">
                <svg width="72px" height="72px" viewBox="0 0 100 100" id="emoji" xmlns="http://www.w3.org/2000/svg">
                    <g id="color">
                    <path fill="#b1cc33" d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"/>
                    </g>
                    <g id="line">
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"/>
                    </g>
                </svg>
            </div>
            <div className="white-wrapper">
                <svg viewBox="0 0 100 100" height="150px" xmlns="http://www.w3.org/2000/svg" id="white-circle">
                    <circle strokeLinecap="round"  
                    cx="50" cy="50" r="29" strokeWidth="2" fill="white" strokeDasharray="315" strokeDashoffset="315" />
                </svg>
            </div>
        </div>
    )
}
