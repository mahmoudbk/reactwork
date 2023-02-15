import  { useState,useEffect } from 'react';
function App() {
  const [resourceType,setResourceType] = useState('posts');

  useEffect(()=> {
   
    window.addEventListener('resize',handleResize);
    //cleanup functio always important in useeffect
    return ()=> {
      window.removeEventListener("resize",handleResize);
    }
  },[])
  function handleResize(){
    console.log("window resized");
  }
  return (
    <>
    <div>
      <button onClick={()=> setResourceType('posts')}>Posts</button>
      <button onClick={()=> setResourceType('Users')}>Users</button>
      <button onClick={()=> setResourceType('comments')}>Comments</button>

    
    </div>
    </>
  );
}

export default App;
