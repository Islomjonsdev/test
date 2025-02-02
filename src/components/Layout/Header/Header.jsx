import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/Modal/Modal";
import { LogInIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [addComanyModal, setAddComanyModal] = useState(false);
  return (
    <>
      <header className="bg-[#313131] h-[65px] flex items-center px-[15px]">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-white font-bold text-[14px] leading-[22px]">
            Компании
          </h1>
          <div className="flex items-center gap-[19px]">
            <LogInIcon className="text-white" />
            <Button
              variant="addCompany"
              onClick={() => setAddComanyModal(true)}
            >
              Добавить компания
            </Button>
          </div>
        </div>
      </header>
      {addComanyModal && (
        <Modal close={setAddComanyModal}>
          <div className="bg-white w-[572px]">
            <div className="flex items-center justify-between bg-[#F0F0F0] px-[24px] py-[16px] border-b border-[#F0F0F0]">
              <h3 className="text-[#000000D9] font-bold text-[20px] leading-[28px]">
                Добавить компания
              </h3>
              <IoMdClose
                className="w-4 h-4 cursor-pointer"
                onClick={() => setAddComanyModal(false)}
              />
            </div>
             <div className="pt-[24px] pb-[36px] px-[24px]">
                form
             </div>
              <div className="flex items-center justify-center bg-[#F0F0F0] py-[10px] border-b border-[#F0F0F0]">
                  <Button variant="addCompanyForm">Добавить компания</Button>
              </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
