import Dashboard from "./Dashboard/Dashboard";
import ParamIndex from "./parameters/ParamIndex";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}> </Route>

            <Route path='/parameters' element = { <ParamIndex />}></Route>
        </Routes>
    </BrowserRouter>
  
  
  
  
  
  
  </>


}

export default App;
