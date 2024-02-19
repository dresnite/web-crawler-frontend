import useLogout from "@/app/hooks/useLogout";

export default function Navbar() {
  const logout = useLogout();

  return (
    <nav className="flex justify-between items-center mx-10 bg-white px-10 mt-2 py-6 rounded-3xl shadow-2xl">
      <a href="" className="text-xl font-bold text-bgPurple uppercase">
        Crawler
      </a>
      <button
        className="text-white bg-bgPurple px-4 py-3 rounded-full"
        onClick={logout}
      >
        Log out
      </button>
    </nav>
  );
}
