import Header from "./Header";

function Navbar({baslik, setBaslik}) {
  return (
    <>
      <Header />
      <div className="navbar">
        <a href="#">Anasayfa</a>
        <a href="#">Hakkımızda</a>
        <a href="#">Projeler</a>
        <a href="#">İletişim</a>
        <a href="#">Yardım</a>
      </div>
    </>
  );
}

export const AltNavbar = () => {
  return <div className="alt_navbar"></div>;
};

export default Navbar;
