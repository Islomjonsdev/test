import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#313131] h-[65px] flex items-center px-[15px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white font-bold text-[14px] leading-[22px]">
          Компании
        </h1>
        <div className="flex items-center gap-[19px]">
          <LogInIcon className="text-white" />
          <Button variant="addCompany">Добавить компания</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
