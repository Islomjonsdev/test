import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login


// import { instance } from "@/api";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // Xatolikni saqlash uchun
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(""); // Xatolikni tozalash

//     const data = {
//       fullName: name,
//       login: login,
//       password: password,
//     };
//     console.log(data);

//     try {
//       const res = await instance.post("/auth/sign-up", data);
//       console.log(res?.data);

//       // Agar ro‘yxatdan o‘tish muvaffaqiyatli bo‘lsa, inputlarni tozalaymiz
//       setName("");
//       setLogin("");
//       setPassword("");

//       // Faqat muvaffaqiyatli ro‘yxatdan o‘tgandan keyin navigatsiya
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setError(err.response?.data?.message || "Registration failed!"); // Xatolik xabari
//     }
//   };

//   return (
//     <div className="flex items-center h-[100vh] justify-center">
//       <form className="bg-[red] flex flex-col max-w-[500px] w-full" onSubmit={handleRegister}>
//         <label>Full name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label>Login</label>
//         <input
//           type="email"
//           value={login}
//           onChange={(e) => setLogin(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {/* {error && <p style={{ color: "red" }}>{error}</p>} Xatolik xabarini chiqarish */}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
