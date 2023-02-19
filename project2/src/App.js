
import { useState,useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";
function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
 




  function handleChange(e){
    setQuery(e.target.value);
    setPageNumber(1);

    
  }
  const {books, hasMore,loading,error} = useBookSearch(query, pageNumber);
  
  
  const observer =useRef();
  const lastBookElementRef = useCallback((node)=> {
    //if we are still loading don't do anything
    if (loading) return 
    //disconnecting from the previous observer in order to set a new one

    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore){
       setPageNumber(prv=> prv+1)
      }
    })

    if(node) observer.current.observe(node);
  }, [loading, hasMore]);
  
  return (
    <>
   <input type="text" value={query} onChange={handleChange}></input>
   {books.map((book,index)=> {
    if(books.length===index+1){
      return <div ref={lastBookElementRef} key={book}>{book}</div>
    }else {
      return <div key={book}>{book}</div>
    }
    
   })}
   
   <div>{loading && 'Loadin...'}</div>
   <div>{error && "Error"}</div>
  
   </>
  );
}

export default App;
