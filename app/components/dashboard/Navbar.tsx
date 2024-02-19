import useLogout from "@/app/hooks/useLogout";

export default function Navbar() {
  const logout = useLogout();

  return (
    <nav className="dashboard-container justify-between items-center mt-2">
      <a href="" className="text-xl font-bold text-bgPurple uppercase">
        Crawler
      </a>
      <button
        className="purple-button"
        onClick={logout}
      >
        Log out
      </button>
    </nav>
  );
}
