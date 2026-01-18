'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock Credentials
    if (
      email === 'islamsawon367@gamil.com' &&
      password === 'sawon@123'
    ) {
      document.cookie = 'token=loggedin; path=/';
      router.push('/AllFruits');
      
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your login succesfully",
  showConfirmButton: false,
  timer: 1500
});

    } else {
     
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Invalid email or password",
  showConfirmButton: false,
  timer: 1500
});

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-green-600 text-white p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center text-green-100">
            Login to manage products and access exclusive features
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to continue
          </p>

          {error && (
            <p className="mb-4 text-red-500 text-sm">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="admin@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="******"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-sm text-gray-500 hover:text-green-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-medium"
            >
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
