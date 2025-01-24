// import Link from "next/link";
// function SideBar({ children }) {
//     return (
//         <>
//         <div className="drawer drawer-open">
//   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Page content here */}
//     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//     <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
    
//       <li>
//         <Link href="/home">Home</Link>
//       </li>
//       <li><a>Sidebar Item 2</a></li>
//     </ul>
//   </div>
// </div>
//         </>
//     )

// }
// export default SideBar;

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Witaj w aplikacji!</h1>
      <div className="flex flex-col space-y-2">
        <Link href="/user/register" className="btn btn-primary">
          Rejestracja
        </Link>
        <Link href="/user/profile" className="btn btn-secondary">
          Profil
        </Link>
        <Link href="/user/logout" className="btn btn-danger">
          Wylogowanie
        </Link>
      </div>
    </div>
  );
}
