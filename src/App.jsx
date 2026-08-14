import CarCategories from "./components/carCategories/CarCategories";
import CompanyFacilitiesSection from "./components/Companyfacilities/CompanyFacilitiesSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import JoinUsSection from "./components/joinUsSection/JoinUsSection";
import Navbar from "./components/navbar/Navbar";
import YourCommentsSection from "./components/yourCommentsSection/YourCommentsSection";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CompanyFacilitiesSection />
      <CarCategories />
      <JoinUsSection />
      <YourCommentsSection />
      <Footer />
    </>
  );
}

export default App;
