import Threads from './components/common/Threads';
import TextPressure from './components/common/TextPressure';
import GradientText from './components/common/GradientText';
import { useState, useRef, useEffect } from 'react';
import SignIn from './pages/auth/SignIn';
import { Link } from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
      {/* Background effect */}
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Logo-sized text on top-left */}
      <div className="absolute top-4 left-4" style={{ position: 'absolute', top: 16, left: 16, zIndex: 10 }}>
        <div style={{ position: 'relative', height: 72, width: 240, overflow: 'visible' }}>
          <TextPressure
            text="Q-Escape"
            flex={true}
            alpha={false}
            stroke={true}
            width={true}
            weight={true}
            italic={true}
            textColor="#78c52b"
            strokeColor="#78c52b"
            minFontSize={20}
          />
        </div>
      </div>

      {/* Top-right corner buttons */}
      <div className="absolute top-4 right-4 flex gap-3 z-20" style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 12, zIndex: 20 }}>
        {/* Menu Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            className="px-6 py-3 rounded-xl text-black font-semibold shadow-lg backdrop-blur bg-white/70 hover:bg-white/90 border border-white/60 transition-colors duration-200"
            onClick={() => setMenuOpen((v) => !v)}
            style={{ minWidth: 110 }}
          >
            Menu
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur rounded-xl shadow-xl border border-white/60 py-2 flex flex-col animate-fade-in" style={{ zIndex: 30 }}>
              <a href="/login" className="px-5 py-2 text-black hover:bg-black/10 transition-colors rounded-t-xl">Login</a>
              <a href="/signup" className="px-5 py-2 text-black hover:bg-black/10 transition-colors">Signup</a>
              <a href="/contact" className="px-5 py-2 text-black hover:bg-black/10 transition-colors rounded-b-xl">Contact Us</a>
            </div>
          )}
        </div>
        {/* About Us Button */}
        <a
          href="/about"
          className="px-6 py-3 rounded-xl text-black font-semibold shadow-lg backdrop-blur bg-white/70 hover:bg-white/90 border border-white/60 transition-colors duration-200 flex items-center justify-center"
          style={{ minWidth: 110 }}
        >
          About Us
        </a>
      </div>

      {/* Foreground hero content centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingLeft: 16, paddingRight: 16, zIndex: 9 }}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-5xl md:text-6xl font-bold mb-6 !bg-none !backdrop-blur-0 !rounded-none !overflow-visible !cursor-default"
        >
          Don’t wait anymore. It’s your turn.
        </GradientText>
        <Link
          to="/signup"
          className="mt-6 md:mt-8 px-6 py-3 rounded-xl text-black font-semibold shadow-lg backdrop-blur bg-white/70 hover:bg-white/90 border border-white/60 transition-colors duration-200"
          style={{ marginTop: 24 }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default App;
