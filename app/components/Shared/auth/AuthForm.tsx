"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const isLogin = mode === "login";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex max-w-7xl mx-auto">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="relative w-auto h-8">
              <Image
                src="/images/logo/logo.png"
                alt="WiztecBD Logo"
                width={600}
                height={600}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {isLogin ? "Welcome Back" : "Create New Account"}
          </h1>
          <p className="text-gray-800 mb-8 text-center">
            Let&apos;s {isLogin ? "login" : "sign up"} to grab amazing deal
          </p>

          {/* Social Login Buttons - Always Visible */}
          <div className="space-y-4 mb-6">
            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>

            {/* Apple Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-gray-700 font-medium">
                Continue with Apple
              </span>
            </button>

            {/* Email/Phone Button */}
            <button
              type="button"
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM19.4231 16.6802C19.4281 16.5978 19.41 16.5156 19.3708 16.443C19.3317 16.3703 19.273 16.3101 19.2014 16.269L16.395 14.5996C16.3045 14.5447 16.1975 14.5235 16.093 14.5396C15.9884 14.5557 15.8928 14.6082 15.823 14.6877L14.6387 16.0147C14.5209 16.1492 14.3634 16.2428 14.189 16.2822C14.0147 16.3215 13.8323 16.3045 13.6682 16.2337C11.4545 15.3059 9.69409 13.5454 8.76646 11.3317C8.69556 11.1677 8.67853 10.9853 8.71783 10.811C8.75713 10.6366 8.85073 10.4792 8.98516 10.3614L10.3125 9.17695C10.3921 9.10718 10.4445 9.0116 10.4606 8.90702C10.4766 8.80243 10.4553 8.69552 10.4004 8.60508L8.73091 5.79863C8.68981 5.72705 8.62955 5.66837 8.5569 5.62918C8.48426 5.59 8.40211 5.57188 8.31973 5.57686C7.85162 5.59987 7.38973 5.69384 6.94985 5.85557C6.22646 6.4168 5.76934 7.42188 5.59116 8.84277C5.56674 9.02398 5.57225 9.20798 5.60747 9.3874C6.50752 14.1911 10.8088 18.4924 15.6124 19.3923C15.7918 19.4275 15.9758 19.433 16.157 19.4086C17.5779 19.2304 18.5828 18.7732 19.144 18.05C19.3058 17.6101 19.3999 17.1482 19.4229 16.68L19.4231 16.6802ZM14.1868 9.45654L11.8555 7.12515C11.7954 7.19783 11.7626 7.28923 11.7627 7.38354V11.7627C11.7628 11.7979 11.7675 11.8329 11.7767 11.8668L14.1871 9.4564L14.1868 9.45654ZM15.7595 10.3989L19.1812 6.97725H12.3377L15.7595 10.3989ZM17.3321 9.45654L19.7559 11.8803C19.7674 11.8422 19.7733 11.8026 19.7733 11.7628V7.38354C19.7732 7.28516 19.7374 7.19016 19.6725 7.11626L17.3321 9.45654ZM17.0168 9.77188L15.9171 10.8718C15.8964 10.8925 15.8718 10.909 15.8448 10.9202C15.8177 10.9314 15.7888 10.9372 15.7595 10.9372C15.7302 10.9372 15.7012 10.9314 15.6742 10.9202C15.6471 10.909 15.6225 10.8925 15.6019 10.8718L14.502 9.77188L12.1094 12.1645C12.1289 12.1675 12.1486 12.1692 12.1684 12.1693H19.367C19.3819 12.1693 19.3967 12.1685 19.4114 12.1669L17.0168 9.77212V9.77188ZM10.2284 8.70742L8.55889 5.90098C8.53621 5.86063 8.50255 5.82754 8.46181 5.80557C8.42107 5.7836 8.37493 5.77364 8.32876 5.77686C7.89158 5.79842 7.46002 5.88476 7.04819 6.03306C6.22788 6.68774 5.91445 7.87427 5.78989 8.86763C5.76864 9.0283 5.77359 9.19135 5.80454 9.35044C6.68916 14.073 10.927 18.3108 15.6494 19.1956C15.8085 19.2267 15.9716 19.2316 16.1323 19.2102C17.1257 19.0857 18.3119 18.7722 18.9667 17.952C19.1151 17.5402 19.2014 17.1086 19.223 16.6714C19.2263 16.6253 19.2163 16.5791 19.1944 16.5384C19.1724 16.4976 19.1393 16.464 19.0989 16.4413L16.2926 14.7715C16.242 14.7404 16.1821 14.7282 16.1234 14.7373C16.0648 14.7463 16.0112 14.7759 15.9724 14.8209L14.788 16.1481C14.6423 16.3136 14.448 16.4289 14.2329 16.4774C14.0178 16.5259 13.7929 16.5052 13.5903 16.4182C11.3285 15.4702 9.5298 13.6714 8.58189 11.4095C8.49492 11.2069 8.47419 10.982 8.52267 10.767C8.57114 10.5519 8.68634 10.3577 8.85181 10.212L10.179 9.02754C10.2239 8.98874 10.2535 8.93523 10.2626 8.87659C10.2716 8.81794 10.2595 8.75795 10.2284 8.70742ZM19.4061 15.9246L16.5997 14.2551C16.4296 14.1519 16.2285 14.1119 16.0318 14.1422C15.8351 14.1725 15.6554 14.2711 15.5242 14.4208L14.3397 15.748C14.2776 15.8203 14.1939 15.8706 14.1009 15.8916C14.008 15.9125 13.9108 15.9029 13.8237 15.8643C11.7065 14.9771 10.0228 13.2933 9.13574 11.1761C9.09714 11.0891 9.08761 10.9919 9.10855 10.899C9.1295 10.8061 9.17982 10.7224 9.25205 10.6604L10.5792 9.47578C10.7289 9.34459 10.8276 9.16485 10.8579 8.96814C10.8882 8.77144 10.8482 8.57034 10.7449 8.4002L9.0752 5.5937C8.99696 5.45996 8.88345 5.35032 8.74708 5.27676C8.61071 5.20321 8.45673 5.16858 8.302 5.17666C7.78255 5.20199 7.27018 5.30776 6.78315 5.49019C6.76474 5.49706 6.7474 5.50651 6.73164 5.51826C5.90513 6.1436 5.38774 7.24546 5.19355 8.79297C5.16407 9.01534 5.17083 9.24102 5.21357 9.46123C5.66533 11.8719 6.95923 14.2449 8.85703 16.1426C10.7548 18.0402 13.1277 19.3344 15.5386 19.7861C15.6681 19.8112 15.7997 19.8239 15.9316 19.8242C16.0236 19.824 16.1156 19.8179 16.2069 19.8061C17.7543 19.6122 18.856 19.0947 19.4815 18.2684C19.4933 18.2526 19.5027 18.2353 19.5096 18.2169C19.6919 17.7298 19.7976 17.2174 19.8231 16.6979C19.8314 16.5431 19.7968 16.3891 19.7232 16.2527C19.6497 16.1163 19.5399 16.0027 19.4061 15.9246Z"
                    fill="#2196F3"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Continue with Email/Phone
              </span>
            </button>
          </div>

          {/* Or Separator */}
          {showEmailForm && (
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
          )}

          {/* Email/Phone Form */}
          {showEmailForm && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Field - Only for Registration */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              )}

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] focus:border-transparent pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password - Only for Registration */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              {/* Remember Me & Forgot Password - Only for Login */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F]"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Remember me
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#59344F] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#59344F] text-white py-3 rounded-lg font-medium hover:bg-[#4a2a3f] transition-colors cursor-pointer"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          )}

          {/* Sign Up / Login Link */}
          <div className="mt-6 text-center bold text-sm">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-[#59344F] hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#59344F] hover:underline font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden  p-6 md:p-8">
        {/* Background Image with Cityscape */}
        <div
          className="absolute inset-6 md:inset-8 bg-cover bg-center opacity-90 rounded-2xl"
          style={{
            backgroundImage: "url('/images/auth/auth-pic.png')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-start items-end text-white w-full h-full">
          {/* Promotional Text - Top Right */}
          <div className="max-w-md text-right mt-6 md:mt-8 mr-4 md:mr-6 relative">
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/2 to-black/5 rounded-2xl"></div> */}
            <h2 className="relative text-2xl md:text-xl font-bold leading-tight">
              Browse thousands of properties to buy, sell, or rent with trusted
              agents.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
