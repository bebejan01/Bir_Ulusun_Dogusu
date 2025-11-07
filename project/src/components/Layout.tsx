import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipLink } from './SkipLink';
import { AmbientAudio } from './AmbientAudio';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AmbientAudio />
    </div>
  );
}
