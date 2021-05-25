import React from 'react'

export default function Image_list(props) {
    props = Array.from(props);
    return (
        <div>
            {props.map((e,i)=>(
         <div key={i}>
           {e.name}
         </div>
       ))}
        </div>
    );
}
