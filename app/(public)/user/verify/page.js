// "use client";
// import { useEffect } from "react";
// import { useAuth } from "@/app/lib/AuthContext"; // Hook do kontekstu użytkownika
// import { getAuth, signOut } from "firebase/auth"; // Importujemy signOut z Firebase


// export default function VerifyEmail() {
//   const { user } = useAuth(); // Uzyskujemy użytkownika z kontekstu
  

//   useEffect(() => {
//     if (user) {
//       const auth = getAuth();
//       signOut(auth) // Wylogowanie użytkownika, jeśli jest zalogowany
//         .then(() => {
//           console.log("User has been logged out");
//         })
//         .catch((error) => {
//           console.error("Error logging out: ", error.message);
//         });
//     }
//   }, [user]); 

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex justify-center items-center">
//       <div className="p-6 bg-white shadow-md rounded-md max-w-lg w-full">
//         <header className="text-center mb-6">
//           <h1 className="text-2xl font-extrabold text-green-600">
//             Weryfikacja adresu email
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Proszę zweryfikować swój adres email, klikając w link w wiadomości
//             wysłanej na adres: <strong>{user?.email}</strong>.
//           </p>
//         </header>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import { useAuth } from "@/app/lib/AuthContext"; 
import { getAuth, signOut } from "firebase/auth"; 
import { useRouter } from "next/navigation"; 

export default function VerifyEmail() {
  const { user } = useAuth(); 
  const router = useRouter(); 

  useEffect(() => {
    if (user) {
      if (!user.emailVerified) {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            console.log("User has been logged out");
            router.push("/user/login"); 
          })
          .catch((error) => {
            console.error("Error logging out: ", error.message);
          });
      }
    }
  }, [user, router]); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex justify-center items-center">
      <div className="p-6 bg-white shadow-md rounded-md max-w-lg w-full">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-green-600">
            Weryfikacja adresu email
          </h1>
          <p className="text-gray-600 mt-2">
            Proszę zweryfikować swój adres email, klikając w link w wiadomości
            wysłanej na adres: <strong>{user?.email}</strong>.
          </p>
        </header>
      </div>
    </div>
  );
}
