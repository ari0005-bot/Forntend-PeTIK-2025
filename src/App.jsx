import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/profile";
import Customer from "./Components/Customer/Customer";

function App() {
  const a = 10;
  const b = 20;
  console.log(a + b);
  return (
    <>
      {/* <Header />
      <h1>To-di List :</h1>
      <ol>
        <li>Mengerjakan tugas fornt end</li>
        <li>Mempelajari tutorial react js</li>
        <li>Murojaah</li>
      </ol>
      <Profile nama="Hanzhallah" alamat="Jakarta" umur={19} />
      <Profile nama="Zulyan" alamat="Bandung" umur={18} />
      <img src="https://picsum.photos/200/300" alt="gambar" />
      <Footer nama="Pragos" /> */}
      <h2>Our Customer</h2>
      <Customer nama={"Ucup"} alamat={"Depok"} membership={"Premium"}/>
      <Customer nama={"Agus"} alamat={"Jakarta"} membership={"Gold"}/>
      <Customer nama={"Pragos"} alamat={"Bandung"} membership={"Silver"}/>
      <Customer nama={"Beli"} alamat={"Palembang"} membership={"Non Member"}/>
    </>
  );
}

export default App;
