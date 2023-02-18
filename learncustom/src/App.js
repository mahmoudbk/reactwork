
import  { UseLocalStorage } from './UseLocalStorage';
 
function App() {
  const [value,setLocalStorageValue] = UseLocalStorage();
  return (
    <input value={value} onChange={(e)=>setLocalStorageValue(e.target.value)}/>
  );
}

export default App;
