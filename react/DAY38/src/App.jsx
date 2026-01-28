import React from "react";
import {
  Film,
  BarChart3,
  User,
  Star,
  Home
} from "lucide-react";

export default function App() {
  const movies = [
    { name: "Leo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZorcQ8q5HnwPB8MfA2I7-_BLk92pyAYlV5GPh9RvyznAjCBCzHs7LwdNVnJ3eELehoQSk&s=10" },
    { name: "Master", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswG6NZHowsW-JNXViNEDWtLlhbU2hezeURZYUP-h_Azckt1z5pLLBcua_SPRUXLCzuDs6Yw&s=10" },
    { name: "Bigil", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZZp-ITYI1n8hVCe_HkFZPYezdGWZQJlMi7k_80Y3S-nvBNKJkIJmbFR26c3EFxiDjj_wpg&s=10" },
    { name: "Theri", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWCQF-J2UddArBRO3Pw03SSDBnsGRmVb_-1XbVf277EKD5gA7vN7fWeWOUKkO6L403gAy&s=10" },

    { name: "Ghilli", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgG0VbPrpKoC4c1Pf5wTpuQMXJ2wVgQFdqeAmpCZG4QqUbvzHJ8E5AFUwIkR1KUPlL-8mf&s=10" }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 text-white">

      {/* 🔥 Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-black/40 backdrop-blur-xl border-r border-gray-800 p-6">

        <h1 className="text-2xl font-bold text-red-500 mb-10">
          🔥 Vijay
        </h1>

        <nav className="space-y-6 text-gray-300">
          <Menu icon={<Home size={20} />} label="Home" />
          <Menu icon={<User size={20} />} label="Profile" />
          <Menu icon={<Film size={20} />} label="Movies" />
          <Menu icon={<BarChart3 size={20} />} label="Stats" />
          <Menu icon={<Star size={20} />} label="Awards" />
        </nav>
      </aside>

      {/* 🔥 Main Content */}
      <main className="flex-1 p-6 md:p-10">

        {/* HERO */}
        <div className="rounded-3xl p-10 mb-10 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 shadow-2xl text-center">

          <h1 className="text-5xl font-extrabold mb-3 tracking-wide">
            Thalapathy Vijay
          </h1>

          <p className="text-lg opacity-90">
            Actor • Dancer • Singer • Icon of Tamil Cinema
          </p>
        </div>

        {/* 🔥 Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Stat title="Movies" value="65+" />
          <Stat title="Years Active" value="30+" />
          <Stat title="Awards" value="50+" />
          <Stat title="Fan Clubs" value="1000+" />
        </div>

        {/* 🔥 Profile Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8 mb-12 shadow-xl">

          <img
            src="https://m.media-amazon.com/images/M/MV5BYTQ3NDU3YjEtMDQxNi00N2QxLWIxNjAtMmFlOWM5ZDY3MGVkXkEyXkFqcGc@._V1_.jpg"
            alt="Vijay"
            className="w-44 h-44 rounded-full object-cover border-4 border-red-500 shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-2">Joseph Vijay</h2>
            <p className="text-gray-300 mb-2">
              Popularly known as Thalapathy. One of the biggest superstars in
              Indian cinema with massive global fan following.
            </p>
            <button className="bg-red-600 px-6 py-2 rounded-xl hover:bg-red-700 transition">
              Follow ❤️
            </button>
          </div>
        </div>

        {/* 🔥 Movies Grid */}
        <h2 className="text-3xl font-bold mb-6 text-red-400">
          Blockbuster Movies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img
                src={movie.img}
                alt={movie.name}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xl font-bold transition">
                🎬 {movie.name}
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 Footer */}
        <p className="text-center text-gray-400 mt-16">
          Made with ❤️ for Thalapathy Fans
        </p>

      </main>
    </div>
  );
}


/* 🔥 Components */

function Menu({ icon, label }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:text-red-500 transition">
      {icon}
      {label}
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition shadow-lg">
      <h3 className="text-gray-300">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-red-400">{value}</p>
    </div>
  );
}
