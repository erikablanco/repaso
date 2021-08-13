import Names from "../utils/Names";



export default function People(){
    const peopleList = Names();
    return(
        <div>
            {
                peopleList? peopleList.results.map(result=><h3 key={result.url}>{result.name}</h3>) : ''
            }
        </div>
    )
  }