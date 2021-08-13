import { useEffect, useState } from "react";




export default function Name(){
    const API = 'https://swapi.dev/api/people/';
    const[datosAPI,setDatosAPI]= useState('');


    useEffect(()=>{
        fetch(API)
        .then( response => response.json())
        .then(data => setDatosAPI(data));
    },[])

         if(datosAPI != null) {
        return datosAPI;
        }
}