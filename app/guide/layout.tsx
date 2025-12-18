import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-60 pt-16 min-h-screen">
        {children}
      </main>
    </div>
  );
}

