import { useState } from "react";

const books = [
  { id: 1, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", status: "available" },
  { id: 2, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", status: "borrowed" },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", status: "available" },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", status: "available" },
  { id: 5, title: "The Guns of August", author: "Barbara W. Tuchman", status: "borrowed" },
];

export default function Home({ user = { name: "Alex" }, onLogout = () => {} }) {
  const [query, setQuery] = useState("");

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Nav */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <h1 className="text-lg font-semibold tracking-tight">Library</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Hi, {user.name}</span>
            <button
              onClick={onLogout}
              className="text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            >
              Log out
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold mb-1">Welcome back</h2>
          <p className="text-gray-500 mb-8">Here's what's in the catalog.</p>

          <input
            type="text"
            placeholder="Search books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full mb-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <div className="grid gap-3">
            {filtered.length === 0 && (
              <p className="text-gray-400 text-sm">No books match your search.</p>
            )}

            {filtered.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg"
              >
                <div>
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-gray-500">{book.author}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    book.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {book.status === "available" ? "Available" : "Borrowed"}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
  );
}
