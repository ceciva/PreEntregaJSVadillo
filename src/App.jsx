
import  NavBar  from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCOntainer'
function App() {
  return(
    <div className= "App">
      <NavBar/>
      <ItemListContainer greeting= {"Mis novelas"}/>
      <Contador stock={10} inicial={1}/>
      <ItemDetailContainer/>
      
      
      
    </div>
  )    
 
}

export default App
