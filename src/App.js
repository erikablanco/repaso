import { Button } from './components/Boton1';
import {FetchBottun} from './components/Fetch';
import { FetchHot } from './components/FetchHot';
import {Hook} from './components/Hook';
//import { GetData } from './utils/GetData';
import { InfoApi } from './utils/InfoApi';
import People from './components/People';




function App() {
  InfoApi();
//  GetData();



  return (
    <div className="App">
      <Button/>
      <FetchBottun/>
      <Hook/>
      <People/>
     
    </div>
  );
}

export default App;
