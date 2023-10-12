import Dashboard from "./Dashboard/Dashboard";
import Insert from "./Insert/Insert";
import Nav from "./Nav";
import ParamIndex from "./parameters/ParamIndex";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<> <Nav /> <Dashboard /> </>}> </Route>

            <Route path='/parameters' element = {<> <Nav /> <ParamIndex /> </>}></Route>

            <Route path='/insert' element = {<> <Nav /> <Insert /> </>}></Route>

        </Routes>
    </BrowserRouter>
  
  
  
  
  
  
  </>


}

export default App;
