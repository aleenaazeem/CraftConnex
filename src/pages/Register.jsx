import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Input = ({ label, placeholder, type = 'text' }) => (
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1">
      <p className="text-white text-base font-medium leading-normal pb-2">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2b3640] focus:border-none h-14 placeholder:text-[#9daebe] p-4 text-base font-normal leading-normal"
      />
    </label>
  </div>
);

export default function Register() {
  const [role, setRole] = useState('client');

  const skillTags = [
    'Web Development',
    'Graphic Design',
    'Content Writing',
    'Digital Marketing',
    'Photography',
    'Video Editing',
    'Translation',
    'Tutoring',
    'Virtual Assistance',
    'Social Media Management'
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#141a1f] overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b3640] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819Z" fill="currentColor" />
                <path d="M9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487Z" fill="currentColor" />
                <path d="M27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CraftConnex</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Find Work</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">About</a>
            </div>
            <Link to="/login">
  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2b3640] text-white text-sm font-bold leading-normal tracking-[0.015em]">
    <span className="truncate">Log in</span>
  </button>
</Link>

          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Register as a {role === 'client' ? 'Client' : 'Service Provider'}
            </h2>

            <div className="flex border-b border-[#3a4d5f] px-4 gap-8">
              <button onClick={() => setRole('client')} className={`flex flex-col items-center justify-center border-b-[3px] ${role === 'client' ? 'border-b-[#3282cc] text-white' : 'border-b-transparent text-[#9aaec1]'} pb-[13px] pt-4`}>
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">I am a Client</p>
              </button>
              <button onClick={() => setRole('worker')} className={`flex flex-col items-center justify-center border-b-[3px] ${role === 'worker' ? 'border-b-[#3282cc] text-white' : 'border-b-transparent text-[#9aaec1]'} pb-[13px] pt-4`}>
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">I am a Worker</p>
              </button>
            </div>

            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Password" placeholder="Create a password" type="password" />
            <Input label="Phone Number" placeholder="Enter your phone number" />
            <Input label="Address" placeholder="Enter your address" />

            {role === 'worker' && (
              <>
                <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Skills</h3>
                <div className="flex gap-3 p-3 flex-wrap pr-4">
                  {skillTags.map((skill, i) => (
                    <div key={i} className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-[#2b3640] px-4">
                      <p className="text-white text-sm font-medium leading-normal">{skill}</p>
                    </div>
                  ))}
                </div>

                <Input label="Hourly Rate" placeholder="Enter your hourly rate" />

                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Language Preference</p>
                    <select className="form-input text-white bg-[#2b3640] rounded-xl h-14 p-4 text-base font-normal leading-normal">
                      <option value="">Select</option>
                      <option value="English">English</option>
                      <option value="German">German</option>
                      <option value="French">French</option>
                    </select>
                  </label>
                </div>

                <div className="flex flex-col p-4">
                  <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#3d4d5c] px-6 py-14">
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">Upload Certifications</p>
                      <p className="text-white text-sm font-normal leading-normal text-center">Drag and drop files here or browse</p>
                    </div>
                    <button className="flex items-center justify-center rounded-full h-10 px-4 bg-[#2b3640] text-white text-sm font-bold">
                      Browse Files
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="flex px-4 py-3">
              <button className="flex flex-1 justify-center items-center rounded-full h-12 px-5 bg-[#699dcd] text-[#141a1f] text-base font-bold">
                Register as {role === 'client' ? 'Client' : 'Worker'}
              </button>
            </div>

            <Link
  to="/login"
  className="text-[#9aaec1] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
>
  Already have an account? Log in
</Link>

          </div>
        </div>
      </div>
    </div>
  );
}
