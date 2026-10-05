
"use client";

import { useState } from "react";
import { ArrowRight, Lock, Mail, User, X } from "lucide-react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Email و Password
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    // Sign Up
    if (isSignUp) {
      if (!name.trim()) {
        setError("Please enter your name.");
        return;
      }

      if (!confirmPassword.trim()) {
        setError("Please confirm your password.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      console.log("Sign Up:", {
        name,
        email,
        password,
      });

      setSuccess("Account created successfully!");
      return;
    }

    // Login
    console.log("Login:", {
      email,
      password,
    });

    setSuccess("Login successful!");
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);

    setError("");
    setSuccess("");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="min-h-screen bg-[#F8F3E8] px-4 py-10">
      <div className="mx-auto flex min-h-[600px] max-w-4xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-[28px] bg-white shadow-xl md:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div
            className={`relative hidden overflow-hidden bg-[#29251F] p-10 text-white md:flex md:flex-col md:justify-center ${
              isSignUp ? "md:order-2" : "md:order-1"
            }`}
          >
            {/* Circle 1 */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#D9A441]/25" />

            {/* Circle 2 */}
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#D9A441]/20" />

            {/* Small Circle */}
            <div className="absolute right-20 bottom-20 h-20 w-20 rounded-full border border-[#D9A441]/10" />

            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D9A441]">
                FurniHome
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight">
                {isSignUp
                  ? "Create your new account"
                  : "Welcome back to your home"}
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#E8E3D8]">
                {isSignUp
                  ? "Join FurniHome and discover beautiful furniture."
                  : "Sign in and continue discovering beautiful furniture."}
              </p>

              <button
                type="button"
                onClick={switchMode}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D9A441] px-5 py-2.5 text-sm font-medium text-[#D9A441] transition-all duration-300 hover:bg-[#D9A441] hover:text-white"
              >
                {isSignUp ? "Login" : "Create Account"}

                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className={`p-8 transition-all duration-300 md:p-10 ${
              isSignUp ? "md:order-1" : "md:order-2"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D9A441]">
              {isSignUp ? "Get Started" : "Welcome Back"}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#29251F]">
              {isSignUp ? "Create Account" : "Login"}
            </h1>

            <p className="mt-2 text-sm text-[#6b6255]">
              {isSignUp
                ? "Create your account to get started."
                : "Login to continue to your account."}
            </p>

            {/* ================= ERROR ================= */}
            {error && (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                <X size={17} />
                <span>{error}</span>
              </div>
            )}

            {/* ================= SUCCESS ================= */}
            {success && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >

              {/* NAME */}
              {isSignUp && (
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#29251F]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8173]"
                    />

                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[#E8E3D8] bg-white py-3 pl-10 pr-4 text-sm text-[#29251F] outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                    />
                  </div>
                </div>
              )}

              {/* EMAIL */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#29251F]">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8173]"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#E8E3D8] bg-white py-3 pl-10 pr-4 text-sm text-[#29251F] outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#29251F]">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8173]"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-[#E8E3D8] bg-white py-3 pl-10 pr-4 text-sm text-[#29251F] outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                  />
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              {isSignUp && (
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#29251F]">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8173]"
                    />

                    <input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      className="w-full rounded-xl border border-[#E8E3D8] bg-white py-3 pl-10 pr-4 text-sm text-[#29251F] outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                    />
                  </div>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A441] py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bd8d2e] hover:shadow-lg active:translate-y-0"
              >
                {isSignUp ? "Create Account" : "Login"}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* ================= MOBILE SWITCH ================= */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-xs text-[#6b6255]">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>

              <button
                type="button"
                onClick={switchMode}
                className="mt-1 text-sm font-medium text-[#D9A441] transition-colors duration-300 hover:text-[#bd8d2e]"
              >
                {isSignUp ? "Login" : "Create Account"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

