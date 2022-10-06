
import './style/App.scss';
import Navbar from './component/Navbar';
import Contacts from './component/Contacts';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
    <>  
    
     <Navbar/>
     <div className="container">
            <div className="py-3">
              <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route  path="/add" element={<AddContact />} />
                <Route  path="/edit/:id" element={<EditContact />} />
              </Routes>
              </BrowserRouter>
            </div>
          </div>
  
    </>
 
   
  );
}

export default App;
