import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Card2 from "./components/Card/Card2";

function App() {
  return (
    <>
      <Navbar />
      <h3 style={{ textAlign: "center" }}>Daftar pelanggan</h3>
      <Content nama={"Ucup"} membership={"Platinum"} />
      <Content nama={"Bambang"} membership={"Gold"} />
      <Content nama={"Budi"} membership={"Silver"} />
      <h3 style={{ textAlign: "center" }}>Yuk berlangganan membership!</h3>
      <div className="card-wrapper">
        <Card2
          title={"Free"}
          price={0}
          benefit1={"AI advisor a day"}
          benefit2={"2 auto tracking"}
          benefit3={"7 Day transation clearning"}
          benefit4={"24/7 Customer support"}
        />
        <Card2
          title={"Gold"}
          price={150}
          benefit1={"AI advisor a day"}
          benefit2={"Unlimited auto tracking"}
          benefit3={"1 Day transation clearning"}
          benefit4={"Priority Customer support"}
          isPopular={true}
        />
        <Card2
          title={"Platinum"}
          price={180}
          benefit1={"AI advisor a day"}
          benefit2={"Unlimited auto tracking"}
          benefit3={"1 Day transation clearning"}
          benefit4={"Priority Customer support"}
        />
      </div>
      {/* <Card2
        nama={"Free"}
        harga={0}
        li1={"AI advisor a day"}
        li2={"2 auto tracking"}
        li3={"7 Day transation clearning"}
        li4={"24/7 Customer support"}
        button={"Purchase Plan"}
      />
      <Card2
        nama={"Gold"}
        harga={150}
        li1={"AI advisor full time"}
        li2={"unlimited auto tracking"}
        li3={"1 Day transation clearning"}
        li4={"Priority Customer support"}
        button={"Purchase Plan"}
        card2={true}
      />
      <Card2
        nama={"Platinum"}
        harga={180}
        li1={"AI advisor full time"}
        li2={"unlimited auto tracking"}
        li3={"1 Day transation clearning"}
        li4={"Priority Customer support"}
        button={"Purchase Plan"}
      /> */}
      <Footer />
    </>
  );
}

export default App;
