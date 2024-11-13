import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import logoSrc from "./assets/COLLabLogoDark.png";
import { Outlet } from "react-router";

function App() {
  return (
    <>
    <Navbar titleName="COLLab" imageSrc={logoSrc}/>
    <Outlet/>
    </>
  )
}

export default App
