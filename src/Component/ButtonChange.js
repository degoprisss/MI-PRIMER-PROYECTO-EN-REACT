import React, { useState } from 'react'
function ButtonChange(props) {
   
    return (
    <div className="ButtonChange">
        <button type="button" className='ButtonChange rounded' id='button' onClick={props.Action}>
            Cambiar de frase
        </button>
    </div>
    )
}
export default ButtonChange;