export default function Login() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#0f1a24] px-4"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
      }}
    >
      <div className="w-full max-w-md bg-[#0f1a24]">
        <div className="overflow-hidden min-h-60 rounded-xl">
          <div
            className="w-full bg-center bg-cover h-60"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoiptqPR1rGptUVSJu9xKHetbwG6zwswM5G-XU7g8_HqX0nEn-uRbRkFvUT87Srt_KPUAeUJeZVPbkWnruqvLUTqcNvLkPKSHB9ieft5b_shroaEU9tlnjZ0slbB4ZEOvbT7oeMcI5ux9gL6m2o9wGxzhuHyaxk7Y8Dl8Q673GKoe_GWOwd1rlW3NnGNajWDTSdbwxGsq0JX1gpv8j7_65sJQle6w1WpPGrimrpwDn4s7kCwfBrVes_F0BBVbXsuT_AN0JoT7NKkUH")`,
            }}
          />
        </div>

        <h2 className="text-white text-[28px] font-bold text-center pt-5 pb-3">
          Welcome to CraftConnex
        </h2>

        {/* Email */}
        <div className="px-4 py-2">
          <label className="block">
            <p className="text-white text-base font-medium pb-2">Email</p>
            <input
              placeholder="Enter your email"
              className="w-full rounded-xl text-white border border-[#2e4e6b] bg-[#172736] h-14 p-[15px] placeholder:text-[#8daece]"
            />
          </label>
        </div>

        {/* Password */}
        <div className="px-4 py-2">
          <label className="block">
            <p className="text-white text-base font-medium pb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl text-white border border-[#2e4e6b] bg-[#172736] h-14 p-[15px] placeholder:text-[#8daece]"
            />
          </label>
        </div>

        {/* Login Button */}
        <div className="flex justify-center px-4 py-3">
          <button className="rounded-full h-10 px-4 bg-[#359dff] text-[#0f1a24] text-sm font-bold">
            Login
          </button>
        </div>

        {/* Register Link */}
        <p className="text-[#8daece] text-sm text-center pt-1 pb-3">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-blue-500 underline">
            Register
          </a>
        </p>

        {/* Language Selector */}
        <div className="px-4 py-2">
          <label className="block">
            <p className="text-white text-base font-medium pb-2">Language</p>
            <select className="w-full rounded-xl text-white border border-[#2e4e6b] bg-[#172736] h-14 p-[15px]">
              <option value="">Select</option>
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="pa">Punjabi</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
