import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Example validation (replace with actual logic/API)
    if (email && password) {
      navigate('/dashboard'); // Navigate to Dashboard
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#0f1a24] overflow-x-hidden font-[Manrope,sans-serif] text-white justify-center items-center"
      style={{
        '--select-button-svg':
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(141,174,206)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <div className="w-full max-w-lg bg-[#0f1a24] rounded-xl shadow-lg">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoiptqPR1rGptUVSJu9xKHetbwG6zwswM5G-XU7g8_HqX0nEn-uRbRkFvUT87Srt_KPUAeUJeZVPbkWnruqvLUTqcNvLkPKSHB9ieft5b_shroaEU9tlnjZ0slbB4ZEOvbT7oeMcI5ux9gL6m2o9wGxzhuHyaxk7Y8Dl8Q673GKoe_GWOwd1rlW3NnGNajWDTSdbwxGsq0JX1gpv8j7_65sJQle6w1WpPGrimrpwDn4s7kCwfBrVes_F0BBVbXsuT_AN0JoT7NKkUH"
          alt="Banner"
          className="w-full h-48 object-cover rounded-t-xl"
        />

        <h2 className="text-white text-2xl font-bold text-center pt-6 pb-4">
          Welcome to CraftConnex
        </h2>

        <form onSubmit={handleLogin} className="px-6 pb-8 space-y-5">
          <div>
            <label className="text-white text-sm font-medium pb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl bg-[#172736] text-white border border-[#2e4e6b] p-4 placeholder:text-[#8daece] focus:border-[#2e4e6b] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium pb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl bg-[#172736] text-white border border-[#2e4e6b] p-4 placeholder:text-[#8daece] focus:border-[#2e4e6b] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#359dff] text-[#0f1a24] font-bold py-2 text-sm hover:bg-[#2e87e0] transition"
          >
            Login
          </button>

          <p className="text-[#8daece] text-center text-sm space-x-2">
            <span>Don't have an account?</span>
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
            <span>|</span>
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </p>

          <div>
            <label className="text-white text-sm font-medium pb-2 block">Language</label>
            <select className="w-full rounded-xl bg-[#172736] text-white border border-[#2e4e6b] p-4 focus:outline-none">
              <option>Select</option>
              <option>English</option>
              <option>German</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
