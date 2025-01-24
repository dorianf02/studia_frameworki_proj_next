// // eslint-disable-next-line no-unused-vars
// import Image from "next/image";


// export default function Home() {
//   return (
//     <h1>Nagłówek</h1>
//   );
// }

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
//       <h1 className="text-2xl font-bold">Witaj w aplikacji!</h1>
//       <div className="flex flex-col space-y-2">
//         <Link href="/user/register" className="btn btn-primary">
//           Rejestracja
//         </Link>
//         <Link href="/user/profile" className="btn btn-secondary">
//           Profil
//         </Link>
//         <Link href="/user/logout" className="btn btn-danger">
//           Wylogowanie
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      
      <nav className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              href="/user/register"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Rejestracja
            </Link>
          </li>
          <li>
            <Link
              href="/user/profile"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              href="/user/logout"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Wylogowanie
            </Link>
          </li>
        </ul>
      </nav>

      
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Strona główna</h1>
      </main>
    </div>
  );
}