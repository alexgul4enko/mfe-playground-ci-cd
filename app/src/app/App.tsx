import { FC, useEffect } from 'react';
import {Home} from 'mfe0-test-home';


export const App: FC = () => {
  useEffect(()=>{
    if(window.location.search){
      const param = new URLSearchParams(window.location.search);
      const manifest = param.get('manifest')
      if(manifest){
        fetch(`http://localhost:3010/magic-manifest/${manifest}`)
          .then(resp=>resp.json())
          .then((data : Record<string, string>)=>{
              window.sessionStorage.setItem('manifest', JSON.stringify(data))
              window.location.href = window.location.origin
          })
      }
    }
  },[])
  return (
    <div>
      <Home/>
    </div>
  );
};

export default App
