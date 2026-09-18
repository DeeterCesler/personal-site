import React from "react";

const Codeblock = (props) => {
    return(
        <>
            {props.inline ? 
            <pre style={{display: 'inline'}}>
                <span className="code"  style={{padding: 3}}>
                    {props.children}
                </span>
            </pre>
            :
            <pre>
            <p className="code">
                {props.children}
            </p>
            
            </pre>
            }
        </>
    )
}

export default Codeblock;