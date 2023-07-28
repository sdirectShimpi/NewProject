
import Student from './Component/Student';
import Navebar from './Page/Navebar';
import Profile from './Page/Profile';
import ShowRecord from './Component/ShowRecord'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navebar />
    <Routes>
      
     
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/student' element={<Student/>}/>
        <Route path='/student/:id' element={<Student/>}></Route>
        <Route path='/showRecord' element={<ShowRecord/>}></Route>
    </Routes>
    {/** <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
