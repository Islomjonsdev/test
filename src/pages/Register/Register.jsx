import { instance } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const data = {
      fullName: fullName,
      login: login,
      password: password,
    };
    console.log(data);

    try {
      const res = await instance.post("auths/sign-up", data, {
        headers: { "Content-Type": "application/json" },
        responseType: "json",
      });
      console.log(res);
      console.log(res?.data);
      setFullName("");
      setLogin("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      setError(err.response?.data?.message || "Registration failed!");
    }
  };
  return (
    <div className="register flex items-center justify-center">
      <div className="bg-[#fff] max-w-[462px] w-full rounded-[2px]">
        <h1 className="pt-6 pl-6 text-[36px] text-black font-bold leading-[22px] mb-[21px]">
          Регистрация
        </h1>
        <form className="pr-[42px] pl-6" onSubmit={handleRegister}>
          <div className="mb-[21px]">
            <label className="text-black font-normal text-[14px] leading-[22px]">
              Ф.И.О
            </label>
            <Input
              authFormInput
              type="text"
              placeholder="Введите Ф.И.О"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-[21px]">
            <label className="text-black font-normal text-[14px] leading-[22px]">
              Логин
            </label>
            <Input
              authFormInput
              type="email"
              placeholder="Введите логин"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="mb-[21px]">
            <label className="text-black font-normal text-[14px] leading-[22px]">
              Пароль
            </label>
            <Input
              authFormInput
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            className="font-normal text-[#1890FF] text-[14px] leading-[22px]"
            to={"/login"}
          >
            Вход
          </Link>
          <div className="mt-4 flex items-center justify-center py-[10px] border-t border-[#F0F0F0]">
            <Button type="submit" variant="authBtn">
              Регистрировать
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
