import Header from './components/Header';
import Hero from './components/Hero';
import CeremonyBanquet from './components/CeremonyBanquet';
import Transport from './components/Transport';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CeremonyBanquet />
      <Transport />
      <DressCode />
      <Gifts />
    </div>
  );
}
