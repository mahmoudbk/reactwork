
import { useLayoutEffect, useState } from "react";
function App() {
  const [width,setWidth] = useState(0);
  useLayoutEffect(()=> {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize',handleResize);
    handleResize();

    return ()=> {
      window.removeEventListener('resize',handleResize);
    }
  })
  return (
   <div>
    <p>Window width : {width}px</p>
   </div>
  );
}

export default App;
