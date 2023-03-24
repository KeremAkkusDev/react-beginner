import Axios from "../components/Axios";
import Container from "../components/Container";
import Navbar, { AltNavbar } from "../components/Navbar";
import UseEffectHook from "../components/UseEffectHook";
import UseRefHook from "../components/UseRefHook";
import UseStateHook from "../components/UseStateHook";
import { NavbarProvider } from "../contexts/NavbarContext";
function FirstContainer() {

  
  
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <AltNavbar />
      </NavbarProvider>
        <Container />
        <UseStateHook />
        <UseEffectHook />
        <UseRefHook />
        <Axios/>
    </>
  );
}

export default FirstContainer;
