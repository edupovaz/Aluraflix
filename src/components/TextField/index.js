import React from 'react'

function TextField({name,label,type, value, onChange}) {
   return(
       
       <div>
           <label>{label}
             <textarea type={type} name={name} value={value} onChange={onChange}/>
           </label>
         </div>
   )    
}

export default TextField