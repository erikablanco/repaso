import { useState } from "react";
import './hook.css';

 export const Hook = () => {
      const [add, setAdd]=useState(0);



     return (
        <section className="hook" >
            
           <button className="add"  onClick={()=> setAdd(add + 1)}>Plus</button>
           <p>{add}</p>
            <button className="less" onClick={()=> setAdd(add - 1)}>Less</button>
        </section>
     )
 } 