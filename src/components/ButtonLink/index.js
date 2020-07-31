import React from 'react'

function ButtonLink(props){
    return(
        <nav>
            <a className={props.className} href={props.href}>
                {props.children}
            </a>
        </nav>
    );
}

export default ButtonLink