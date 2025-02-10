import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { instance } from "@/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { LOGIN_ADMIN } from "@/redux/actions/login";

const Login = () => {
  const [adminLogin, setAdminLogin] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAdmin = (e) => {
    e.preventDefault();

    const data = {
      login: adminLogin,
      password: adminPassword,
    };
    instance
      .post("/auths/sign-in", data)
      .then((res) => {
        console.log(res?.data);
        navigate("/");
        dispatch({ type: LOGIN_ADMIN, payload: res.data });
        setAdminLogin("");
        setAdminPassword("");
        toast.success("Welcome");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error");
      });
  };
  return (
    <div className="register flex items-center justify-center">
      <div className="bg-[#fff] max-w-[462px] w-full rounded-[2px]">
        <h1 className="pt-6 pl-6 text-[36px] text-black font-bold leading-[22px] mb-[21px]">
          Вход
        </h1>
        <form onSubmit={loginAdmin}>
          <div className="pr-[42px] pl-6">
            <div className="mb-[21px]">
              <label className="text-black font-normal text-[14px] leading-[22px]">
                Логин
              </label>
              <Input
                authFormInput
                type="email"
                placeholder="Введите логин"
                value={adminLogin}
                onChange={(e) => setAdminLogin(e.target.value)}
              />
            </div>
            <div className="mb-[21px]">
              <label className="text-black font-normal text-[14px] leading-[22px]">
                Пароль
              </label>
              <Input
                authFormInput
                type="password"
                value={adminPassword}
                placeholder="Введите пароль"
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <Link
              className="font-normal text-[#1890FF] text-[14px] leading-[22px]"
              to={"/register"}
            >
              Регистрация
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center py-[10px] border-t border-[#F0F0F0]">
            <Button type="submit" variant="authBtn">
              Вход
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
