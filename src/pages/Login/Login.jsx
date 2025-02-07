import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="register flex items-center justify-center">
      <div className="bg-[#fff] max-w-[462px] w-full rounded-[2px]">
        <h1 className="pt-6 pl-6 text-[36px] text-black font-bold leading-[22px] mb-[21px]">
          Вход
        </h1>
        <form className="pr-[42px] pl-6">
          <div className="mb-[21px]">
            <label className="text-black font-normal text-[14px] leading-[22px]">
              Логин
            </label>
            <Input authFormInput type="email" placeholder="Введите логин" />
          </div>
          <div className="mb-[21px]">
            <label className="text-black font-normal text-[14px] leading-[22px]">
              Пароль
            </label>
            <Input authFormInput type="password" placeholder="Введите пароль" />
          </div>
          <Link
            className="font-normal text-[#1890FF] text-[14px] leading-[22px]"
            to={"/register"}
          >
            Регистрация
          </Link>
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
