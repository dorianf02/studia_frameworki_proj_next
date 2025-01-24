// "use client";
// import { useForm } from "react-hook-form";
// function LoginForm() {

// const {
//   register,
//   handleSubmit,
//   watch,
//   formState : { errors }
// } =useForm();
//   const onSubmit = (data) => {
    
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={onSubmit} className="space-y-4" >
//         {/* Search Input */}
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="text"
//             className="grow border p-2 rounded"
//             placeholder="Search"
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </label>

        
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//           </svg>
//           <input
//             type="email"
//             className="grow border p-2 rounded"
//             placeholder="Email"
//             {
//               ...register("email", {
//                 required: {
//                   value: true,
//                   message: "Musisz podać adres email!"
//                 },
//                 maxLength: {
//                   value: 40,
//                   message: "Email jest zbyt długi"
//                 },
//                 pattern: {
//                   value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "Niepoprawny adres email"
//                 }
//               })
//             }
//           />
//         </label>

        
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//           </svg>
//           <input
//             type="text"
//             className="grow border p-2 rounded"
//             placeholder="Username"
//           />
//         </label>

        
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="password"
//             className="grow border p-2 rounded"
//             placeholder="Password"
//             {...register("Password", {
//               required: "Wymagane jest podanie hasła",
//               maxLength: {
//                 value: 20,
//                 message: "Hasło jest zbyt długie"
//               }
//             })}
//           />
//         </label>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


// "use client";
// import { useForm } from "react-hook-form";

// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Możesz tu dodać funkcję logowania (np. Firebase auth)
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {/* Email Input */}
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="email"
//             className="grow border p-2 rounded"
//             placeholder="Email"
//             {...register("email", {
//               required: {
//                 value: true,
//                 message: "Musisz podać adres email!"
//               },
//               maxLength: {
//                 value: 40,
//                 message: "Email jest zbyt długi"
//               },
//               pattern: {
//                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                 message: "Niepoprawny adres email"
//               }
//             })}
//           />
//         </label>
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//         {/* Username Input */}
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//           </svg>
//           <input
//             type="text"
//             className="grow border p-2 rounded"
//             placeholder="Username"
//             {...register("username", {
//               required: "Wymagane jest podanie nazwy użytkownika"
//             })}
//           />
//         </label>
//         {errors.username && <p className="text-red-500">{errors.username.message}</p>}

//         {/* Password Input */}
//         <label className="input input-bordered flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="password"
//             className="grow border p-2 rounded"
//             placeholder="Password"
//             {...register("password", {
//               required: "Wymagane jest podanie hasła",
//               maxLength: {
//                 value: 20,
//                 message: "Hasło jest zbyt długie"
//               }
//             })}
//           />
//         </label>
//         {errors.password && <p className="text-red-500">{errors.password.message}</p>}

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "@/app/lib/firebase/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      
      const user = userCredential.user;
      if (!user.emailVerified) {
        await signOut(auth);
        setError("Adres email nie został zweryfikowany. Sprawdź swoją skrzynkę pocztową i zweryfikuj email.");
        router.push("/user/verify"); 
      } else {
        setError(""); 
        console.log("Zalogowano pomyślnie");
      }
    } catch (err) {
      setError(err.message || "Błąd logowania");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="email"
            className="grow border p-2 rounded"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Musisz podać adres email!"
              },
              maxLength: {
                value: 40,
                message: "Email jest zbyt długi"
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Niepoprawny adres email"
              }
            })}
          />
        </label>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow border p-2 rounded"
            placeholder="Hasło"
            {...register("password", {
              required: "Wymagane jest podanie hasła",
              maxLength: {
                value: 20,
                message: "Hasło jest zbyt długie"
              }
            })}
          />
        </label>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="btn btn-primary">
          Zaloguj się
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
