import { useNavbar } from "../contexts/NavbarContext";

function Header() {
 
  const {baslik,setBaslik} = useNavbar();
  return (
    <div style={{ backgroundColor: "#777777", height:"80px", width:"inherit", color:"white" }} className="Header">
        <h1>{baslik}</h1>
        <button onClick={() => { setBaslik("Değiştirildi") }}>Başlığı Değiştir</button>
    </div>
  )
}

export default Header