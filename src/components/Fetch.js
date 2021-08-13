import { useEffect, useState } from "react";
import './fetch.css'


export const FetchBottun = () => {


    const [dataAPI, setDataAPI]= useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/')
        .then (response => response.json())
        .then (data => {
            setDataAPI(data)
        })
    }, [])


    return (
        <button className="fetch" onClick={() => (console.log([dataAPI]))}> Push </button>
    )
}