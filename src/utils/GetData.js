//import { useState, useEffect } from "react";
//
//
//
//export const GetData = (name)  => {
//
//   const API = 'https://swapi.dev/api/people/search=' + name;
//   const [dataApi, setApiData]= useState(null)
//  
//   useEffect(() => {
//       fetch(API)
//       .then(res => res.json())
//       .then (data => {
//
//            console.log(data.results);
//           setApiData(data);
//       })
//       
//   }, [])
//       return dataApi;
//}