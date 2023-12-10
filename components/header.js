import { useState, useCallback } from "react";
import ApeverseMenu from "./apeverse-menu";
import PortalPopup from "./portal-popup";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header = () => {
  const [isApeverseMenuPopupOpen, setApeverseMenuPopupOpen] = useState(false);

  const openApeverseMenuPopup = useCallback(() => {
    setApeverseMenuPopupOpen(true);
  }, []);

  const closeApeverseMenuPopup = useCallback(() => {
    setApeverseMenuPopupOpen(false);
  }, []);

  const { open } = useWeb3Modal()

  const onFrameButton2Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-gray shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[1728px] h-[70px] overflow-hidden shrink-0 z-[0]">
        <img
          className="absolute top-[10px] left-[12px] rounded-xl w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/frame-489@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[379px] shadow-[0px_4px_0px_#000] w-10 h-[18px] hidden md:flex"
          onClick={openApeverseMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-greenyellow w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[13px] left-[0px] rounded-3xs bg-greenyellow w-10 h-[5px] overflow-hidden" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[14px] left-[448px] w-[187px] h-11 md:hidden"
        onClick={() => open()}>
          <div className="absolute top-[7px] left-[0px] rounded-xl bg-gray shadow-[0px_0px_0px_2px_#a1ff08] w-[187px] h-[31px] overflow-hidden" />
          <div className="absolute top-[0px] left-[45px] text-mid font-black font-inknut-antiqua text-greenyellow text-left inline-block w-[97px] h-[38px]">
            Mint NFT
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[14px] left-[696px] w-[187px] h-11 md:hidden">
          <div className="absolute top-[7px] left-[0px] rounded-xl bg-gray shadow-[0px_0px_0px_2px_#a1ff08] w-[187px] h-[31px] overflow-hidden" />
          <div className="absolute top-[0px] left-[36px] text-mid font-black font-inknut-antiqua text-greenyellow text-center inline-block w-[116px] h-[38px]">
            Community
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[14px] left-[944px] w-[187px] h-11 md:hidden"
          onClick={onFrameButton2Click}
        >
          <div className="absolute top-[7px] left-[0px] rounded-xl bg-gray shadow-[0px_0px_0px_2px_#a1ff08] w-[187px] h-[31px] overflow-hidden" />
          <div className="absolute top-[0px] left-[36px] text-mid font-black font-inknut-antiqua text-greenyellow text-center inline-block w-[116px] h-[38px]">
            Developer
          </div>
        </button>
      </div>
      {isApeverseMenuPopupOpen && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeApeverseMenuPopup}
        >
          <ApeverseMenu onClose={closeApeverseMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
