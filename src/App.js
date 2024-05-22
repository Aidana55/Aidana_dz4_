import './App.css';
import MainPage from './mainPage/MainPage'
import ErrorPage from './errorPage/ErrorPage'
import {useLayoutEffect, useState} from "react";


function App() {
  const [fullName, setFullName] = useState({
    name: '',
    lastname: ''
  })
  useLayoutEffect(() => {
    const nameValue = prompt('What is your name')
    const surname = prompt('What is your surname')
    if (nameValue!== null && surname !== null) {
      setFullName({name: nameValue, lastname: surname})
    }
  }, [])

  if (fullName.name === 'John' && fullName.lastname === 'Johns'){
    return <MainPage user={fullName}/>
  }else {
    return <ErrorPage user={fullName}/>
  }
}

export default App;

