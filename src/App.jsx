
import  NavBar  from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return(
    <div className= "App">
      <NavBar/>
      <ItemListContainer greeting= {"Mis novelas"}/>
      <ItemDetailContainer/>
     
    </div>
  )    
 
}

export default App
