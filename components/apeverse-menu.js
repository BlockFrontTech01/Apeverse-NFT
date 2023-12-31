import { useCallback, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const ApeverseMenu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  const { open } = useWeb3Modal()

  const onFrameButton2Click = useCallback(() => {
    window.open("https://t.me/jeff96655");
  }, []);

  return (
    <div
      className="rounded-xl bg-gray w-[266px] h-72 overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <div
        className="absolute top-[30px] left-[218px] w-[33.9px] h-[29.8px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[0px] left-[3.3px] rounded-3xs bg-greenyellow w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[26px] left-[0px] rounded-3xs bg-greenyellow w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-gray absolute top-[119px] left-[44px] rounded-xl shadow-[0px_0px_0px_1px_#a1ff08] w-[155px] h-[23px] overflow-hidden"
      onClick={() => open()}>
        <b className="absolute top-[2px] left-[46px] text-sm font-inika text-greenyellow text-center">
          Mint NFT
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-gray absolute top-[164px] left-[44px] rounded-xl shadow-[0px_0px_0px_1px_#a1ff08] w-[155px] h-[23px] overflow-hidden">
        <b className="absolute top-[2px] left-[39px] text-sm font-inika text-greenyellow text-center">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-gray absolute top-[209px] left-[44px] rounded-xl shadow-[0px_0px_0px_1px_#a1ff08] w-[155px] h-[23px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[2px] left-[45px] text-sm font-inika text-greenyellow text-center">
          Developer
        </b>
      </button>
    </div>
  );
};

export default ApeverseMenu;
