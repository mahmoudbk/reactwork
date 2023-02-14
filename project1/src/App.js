import axios from 'axios';
import  {useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination'
function App() {

  const [pokemon,SetPokemon] = useState([])
  const [prev,SetPrv] = useState();
  const [next,SetNext] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [loading,SetLoading] = useState(true);
  const [disabled,SetDisabled] = useState(false);
  useEffect(()=> {
    const source = axios.CancelToken.source();
    SetLoading(true);
    axios.get(currentPageUrl, {
      cancelToken:source.token
    })
    .then(response => {
      SetLoading(false);
      SetPokemon(response.data.results.map(p => p.name));
      SetPrv(response.data.previous);
      SetNext(response.data.next);
     

    })
    return () => {
      source.cancel();
    }
    

  },[currentPageUrl])

  function gonextPage(){
    setCurrentPageUrl(next);
  }
  function goprevPage(){
    setCurrentPageUrl(prev);
  }

  if (loading) return "Loading ...";
  return (
    <div>
      <PokemonList pokemon={pokemon}/>
      <Pagination gonextPage={next? gonextPage:null} goprevPage={prev ? goprevPage :null}/>
    </div>
  );
}

export default App;
