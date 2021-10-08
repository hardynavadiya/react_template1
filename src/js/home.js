import Bgimage from './bgimage';
import Team from './team';
import Work from './work';
import Price from './price';
import Contact from './contact';
import Map from './map';
import Footer from './footer';
import Materialui from './materialui';
import Demo from './demo';


function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <Bgimage />
      <Team />
      <Work />
      <Price /> 
      <Contact />
      <Map />
      <Footer />
      <Materialui />
      <Demo />
    </>
  );
}

export default Home;
