import { useState } from 'react';

export default function LoginIn() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
  <div className="w-screen h-screen bg-white flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Black curved shape on left */}
      <div
        className="absolute top-0 left-0 h-full z-0"
        style={{
          width: '60vw',
          height: '100vh',
          background: 'black',
          borderTopRightRadius: '60% 100%',
          borderBottomRightRadius: '60% 100%',
          clipPath: 'ellipse(70% 60% at 0% 50%)',
        }}
      ></div>

      {/* Sign In Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-transparent flex flex-col items-center justify-center px-8 py-12"
        style={{ minWidth: 350, maxWidth: 400, marginLeft: '8vw' }}
      >
        <h2 className="text-2xl font-bold mb-8 text-black tracking-wide">Log-In</h2>
        <div className="w-full flex flex-col gap-4 mb-2">
          <div className="flex items-center border-b border-black/80">
            <span className="mr-2 text-black"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full bg-transparent outline-none py-2 text-black placeholder:text-black/60"
              autoComplete="username"
              required
            />
          </div>
          <div className="flex items-center border-b border-black/80">
            <span className="mr-2 text-black"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none py-2 text-black placeholder:text-black/60"
              autoComplete="current-password"
              required
            />
            <button type="button" className="ml-2 text-black/60" tabIndex={-1} onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        <div className="w-full text-left mb-6 mt-1">
          <a href="#" className="text-xs text-black/80 hover:underline">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 font-semibold rounded-none mb-3 transition-colors hover:bg-black/80"
        >
          LOGIN
        </button>
        <div className="w-full flex items-center justify-center mb-3">
          <span className="text-black/80 text-xs">OR</span>
        </div>
        <a
          href="/signup"
          className="w-full border border-black text-black py-2 font-semibold rounded-none text-center transition-colors hover:bg-black/5"
        >
          REGISTER
        </a>
      </form>
    </div>
  );
}
