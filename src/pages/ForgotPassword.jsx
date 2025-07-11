import React from 'react';

const ForgotPassword = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#131a20] overflow-x-hidden font-[Manrope,sans-serif] text-white"
    >
      <div className="layout-container flex h-full flex-col">
        <header className="flex items-center justify-between border-b border-[#283643] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold">SwiftServe</h2>
          </div>
        </header>

        <div className="flex justify-center px-4 py-8 grow">
          <div className="w-full max-w-lg flex flex-col">
            <h2 className="text-[28px] font-bold text-center pt-6 pb-3">Forgot password</h2>

            <div className="flex flex-wrap gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 rounded-xl border border-[#394d60] bg-[#1d2730] p-4 text-white placeholder:text-[#99aec2] focus:outline-none focus:border-[#394d60]"
                />
              </label>
            </div>

            <p className="text-center text-base font-normal text-white px-4 pt-1 pb-3">
              Enter the email associated with your account and we&apos;ll send you a link to reset your password.
            </p>

            <div className="flex px-4 py-3">
              <button
                type="submit"
                className="w-full rounded-full h-10 px-4 bg-[#3182cd] text-white text-sm font-bold hover:bg-[#2b70b0] transition"
              >
                Send Reset Link
              </button>
            </div>

            <p className="text-[#99aec2] text-sm text-center px-4 pt-1 underline cursor-pointer">
              Back to Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
