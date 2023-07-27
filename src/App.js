import './App.css';
import { useState } from 'react';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cat } from './pages/cat';
import { Person } from './pages/person';
//components can't start with lowercase letter
//you wanna setup the react query at the highest level of your application in which you want to make a request
function App() {
 
  const {state: isVisible, toggle} = useToggle(false);

  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false,
      }
    }
  });
  return(
  <div className='App' style={{backgroundColor : "#C3C2C0" , fontSize: 30}}>
    <QueryClientProvider client={client}>
      <Person 
      name="samira"
      email="mama@gmail.com"
      age={56}
      isMarried={true}
      friends={["jessica" , "jade" , "marry" , "jasmine"]}/>
    </QueryClientProvider>
  </div>);

}

export default App;