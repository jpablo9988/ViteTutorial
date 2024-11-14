// in charge of the navigation bar, and switches between mobile and main depending on screen size.
import MainNav from './MainNav';

export default function SiteHeader() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="flex h-18 items-center px-4">
        <MainNav />
      </div>
    </header>
  );
}