import { useState } from "react"
import "./button.css"

export const Button = () => {
  const [addText, setAddText]=useState('');



    return (
        <section className="button">
           <button className="add" onClick={ () => setAddText('HOLA')}>Add</button>
            <h3 className="text">{addText}</h3>
           <button className="delete" onClick={ () => setAddText('')}>Delete</button>
        </section>
    )
}