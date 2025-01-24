// eslint-disable-next-line react/prop-types
// export default function ProtectedLayout({ children }) {
//     return (
//       <div>
//         <h1>Strefa chroniona</h1>
//         <main>{children}</main>
//       </div>
//     );
//   }
  
// eslint-disable-next-line no-unused-vars
import React from "react";
import { AuthProvider } from "@/app/lib/AuthContext"; 

// eslint-disable-next-line react/prop-types
export default function ProtectedLayout({ children }) {
  return (
    <AuthProvider> 
      <div>
        <h1>Strefa chroniona</h1>
        <main>{children}</main>
      </div>
    </AuthProvider>
  );
}
