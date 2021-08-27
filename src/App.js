import './index.css';
import Header from './Componenets/Header.js';
import HeadButton from './Componenets/HeadButton.js';
import TabPanel from './Componenets/Tabpanel';
import LeadTrigger from './Componenets/LeadTrigger';
import {useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SetWait from './Componenets/SetWait';

function App() {
const [open, setOpen] = useState(false);
  return (
  <Router>
   <>
  
    <div className="container">
  <Switch>
  <Route exact path="/"> 
    <HeadButton handleClickOpen={()=>setOpen(!open) }/>
    {open && <Header/>}
    </Route> 
         <Route exact path='/Tabpanel'>
    <TabPanel/>
    </Route>
      <Route exact path='/LeadTrigger'>    
<LeadTrigger/>
    </Route>
          <Route exact path='/SetWait'>    
<SetWait/>
    </Route>
</Switch>
  
    
  
 
    </div>
     
    
 

    </>
   
</Router>
  );
}
  

export default App;
