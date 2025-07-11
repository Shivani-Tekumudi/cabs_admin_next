
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie || '';
  const isLoggedIn = cookies.includes('loggedIn=true');

  if (isLoggedIn) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Wait briefly to ensure cookie is stored
      setTimeout(() => router.replace('/dashboard'), 100);
    } else {
      setError(data.message || 'Login failed');
    }
  }


  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4" >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label  className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
            <input type="email" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Enter username (e.g., user)" value={email} onChange={(e) => setEmail(e.target.value)}  required />
          </div>
          <div>
            <label  className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
            <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Enter password (e.g., password)" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">Login</button>
        </form>

 {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
        <p className="text-center text-gray-500 text-sm mt-6">Hint: email is `admin[1/2/3/4/5/6]@gmail.com` and Password is `123456`  </p></div>

    </div>
  );
}

