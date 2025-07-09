import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import Cards from '../Components/UI/Cards';
import CardSearch from '../Components/UI/CardSearch';
import Stories from '../Components/UI/Stories';
import Team from '../Components/UI/Team';
import Home from './Home';

function LeaginPage() {
  return (
    <div>
        <Header />
        <Home />
        <Cards />
        <Team />
        <Stories />
        <CardSearch />
        <Footer />
    </div>
  )
}

export default LeaginPage