import { useState, useEffect } from "react";

export const InfoApi = () => {

   const API ='https://swapi.dev/api/';
   const [dataAPI, setDataAPI]= useState(null);
   
     useEffect(() => {
         fetch(API) 
         .then (res => res.json())
         .then(data => { 
             console.log(data.results);
             console.log(data);
             setDataAPI(data)
         })

         return dataAPI;



     }, []);
    
}




//import { useEffect, useState} from "react";
//
//export const GetData = () => {
// const API = 'https://swapi.dev/api/people';
// const [dataAPI, setDataApi]= useState(null);
// 
//
//
// useEffect(() => {
//
//     fetch(API).then( response => response.json()).then(data => {
//             console.log(data.results);
//             console.log 
//             data.results.map(result => console.log(result.name));
//                
//            setDataApi(data);
//         })
//        return dataAPI;
//
//    },  []);
//}