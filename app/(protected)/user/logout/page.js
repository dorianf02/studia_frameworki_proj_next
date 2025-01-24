// "use client";
// export default function LogoutPage() {
//     const handleLogout = () => {
//       console.log("Wylogowano użytkownika");
      
//     };
  
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <button onClick={handleLogout} className="btn btn-danger">
//           Wyloguj
//         </button>
//       </div>
//     );
//   }
  
"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/lib/firebase/firebase";

export default function LogoutForm() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/public/user/login"); // Przekierowanie po wylogowaniu
    } catch (error) {
      console.error("Błąd podczas wylogowywania:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogout}
        className="btn btn-danger px-4 py-2 rounded-md text-white"
      >
        Wyloguj się
      </button>
    </div>
  );
}
