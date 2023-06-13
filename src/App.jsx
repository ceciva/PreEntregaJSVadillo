
import  NavBar  from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'


function App() {
  return(
    <div className= "App">
      <NavBar/>
      <ItemListContainer greeting= {"Mis productosgit add"}/>
      <Contador stock={10} inicial={1}/>
      
    </div>
  )    
 
}

export default App
