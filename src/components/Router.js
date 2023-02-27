import { Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Template10 from "routes/Template10";
import Template11 from "routes/Template11";
import Template12 from "routes/Template12";
import Template13 from "routes/Template13";
import Template7 from "routes/Template7";
import Template8 from "routes/Template8";
import Template9 from "routes/Template9";

const AppRouter = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/template-7" element={<Template7/>}/>
            <Route path="/template-8" element={<Template8/>}/>
            <Route path="/template-9" element={<Template9/>}/>
            <Route path="/template-10" element={<Template10/>}/>
            <Route path="/template-11" element={<Template11/>}/>
            <Route path="/template-12" element={<Template12/>}/>
            <Route path="/template-13" element={<Template13/>}/>
        </Routes>
    )
};

export default AppRouter;