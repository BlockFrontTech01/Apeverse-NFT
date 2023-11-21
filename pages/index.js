import { useEffect } from "react";
import Header from "../components/header";
import Typewriter from 'typewriter-effect';

const Apeverse = () => {
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
  return (
    <div className="relative [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#122637] w-full h-[9461px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-xl text-greenyellow font-hanuman">
      <div className="my-0 mx-[!important] absolute top-[200px] left-[0px] w-[990px] flex flex-row items-start justify-end gap-[577px] z-[1] text-[30px] lg:w-[850px] md:w-[380px]">
        <div className="relative w-2.5 h-[29px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[488px] shrink-0 [text-shadow:0px_4px_4px_#000] md:text-[25px] md:w-[350px]">
        <Typewriter
  options={{
    strings: ['ApeVerse NFTs - Unleash the Power of the Apes!'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[335px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[605px] z-[2] lg:w-[800px] md:w-[410px]">
        <div className="relative w-2.5 h-[19px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-487@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[7332px] left-[0px] w-[1089px] flex flex-row items-center justify-end gap-[417px] z-[3] lg:w-[950px] md:w-[405px]">
        <div className="relative w-[17px] h-[29px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[390px]">
          <p className="m-0">
            <span className="font-hanuman">📈</span>
            <span className="font-black"> Invest in the Future:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            ApeVerse NFTs are not just digital art; they're an investment in the
            future of digital ownership. As the ApeVerse community grows, so
            does the value of your unique ape NFTs.
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[6001px] left-[0px] w-[924px] flex flex-row items-center justify-end gap-[601px] z-[4] lg:w-[800px] md:w-[410px]">
        <div className="relative w-4 h-[97px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-495@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[906px] left-[0px] w-[1116px] flex flex-row items-center justify-end gap-[440px] z-[5] lg:w-[950px] md:w-[400px]">
        <div className="relative w-2.5 h-[29px] overflow-hidden shrink-0 z-[0]" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 z-[1] md:text-mini md:w-[380px]">
          Welcome to the ApeVerse, where creativity meets rarity, and you're in
          control! ApeVerse NFTs is a groundbreaking project that allows you to
          mint your very own unique ape characters on the blockchain. Each ape
          is a masterpiece, waiting to be born into the digital realm.
        </div>
        <div className="my-0 mx-[!important] absolute top-[238px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[580px] z-[2] lg:w-[800px] md:w-[410px]">
          <div className="relative w-2.5 h-8 overflow-hidden shrink-0" />
          <img
            className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/frame-4891@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1674px] left-[0px] w-[1116px] flex flex-row items-center justify-end gap-[399px] z-[6] lg:w-[950px] md:w-[400px]">
        <div className="relative w-2.5 h-[58px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[380px]">
          <p className="m-0">
            <span className="font-hanuman">{`🎨 `}</span>
            <span className="font-black">Create Your Tribe:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Mint your own personalized ape NFT and become part of the ApeVerse
            community. Choose from an extensive range of traits, including fur
            patterns, accessories, and expressions. Your ape is as unique as you
            are!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1964px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[580px] z-[7] lg:w-[800px] md:w-[410px]">
        <div className="relative w-2.5 h-[46px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-490@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[2520px] left-[0px] w-[1116px] flex flex-row items-center justify-end gap-[411px] z-[8] lg:w-[950px] md:w-[400px]">
        <div className="relative w-5 h-[58px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[380px]">
          <p className="m-0">
            <span className="font-hanuman">{`💎 `}</span>
            <span className="font-black">Limited Edition Collectibles:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Every ape is a limited edition masterpiece, ensuring that your
            creation remains rare and valuable. The scarcity of traits and
            combinations makes each NFT truly one-of-a-kind. The exclusivity of
            ApeVerse NFTs sets you apart in the world of digital art.
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2785px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[652px] z-[9] lg:w-[800px] md:w-[410px]">
        <div className="relative w-3.5 h-[61px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-491@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[3357px] left-[0px] w-[1105px] flex flex-row items-center justify-end gap-[394px] z-[10] lg:w-[950px] md:w-[400px]">
        <div className="relative w-4 h-[29px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[380px]">
          <p className="m-0">
            <span className="font-hanuman">{`🌐 `}</span>
            <span className="font-black">Blockchain Security:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Rest easy knowing that your ApeVerse NFTs are securely stored on the
            blockchain. The decentralized nature ensures transparency and
            ownership rights, giving you full control over your digital assets.
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3616px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[580px] z-[11] lg:w-[800px] md:w-[410px]">
        <div className="relative w-[25px] h-[106px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-492@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4152px] left-[0px] w-[1100px] flex flex-row items-center justify-end gap-[357px] z-[12] lg:w-[950px] md:w-[400px]">
        <div className="relative w-4 h-[58px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[380px]">
          <p className="m-0">
            <span className="font-hanuman">🚨</span>
            <span className="font-black"> Roadmap for Excitement:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We've got an exciting roadmap ahead! Future developments include
            community events, collaborations, and exclusive perks for ApeVerse
            NFT holders. The journey is just beginning – be part of the
            evolution!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4411px] left-[0px] w-[930px] flex flex-row items-center justify-end gap-[587px] z-[13] lg:w-[800px] md:w-[410px]">
        <div className="relative w-[18px] h-[57px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-493@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4947px] left-[0px] w-[1087px] flex flex-row items-center justify-end gap-[571px] z-[14] text-left text-inherit lg:w-[1020px] md:w-[400px]">
        <div className="relative w-px h-[43px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[380px]">
          <p className="m-0">
            <span className="font-hanuman">{`🔗 `}</span>
            <span className="font-black">How to Mint:</span>
          </p>
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              <span className="font-hanuman">
                Connect your wallet to ApeVerse.
              </span>
            </li>
            <li className="mb-0">
              <span className="font-hanuman">
                Select your preferred traits and customize your ape.
              </span>
            </li>
            <li>
              <span className="font-hanuman">
                Mint your unique ApeVerse NFT and watch it come to life on the
                blockchain.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5206px] left-[0px] flex flex-row items-center justify-end gap-[513px] z-[15] lg:w-[800px] md:w-[410px]">
        <div className="relative w-4 h-20 overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-494@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[5742px] left-[0px] w-[1087px] flex flex-row items-center justify-end gap-[438px] z-[16] lg:w-[950px] md:w-[400px]">
        <div className="relative w-5 h-[50px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[390px]">
          <p className="m-0">
            <span className="font-hanuman">{`🌈 `}</span>
            <b>Join the ApeVerse Community:</b>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Connect with fellow ape enthusiasts, share your creations, and stay
            updated on the latest developments. The ApeVerse Discord and social
            media channels are buzzing with creativity – become part of the
            conversation!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[6537px] left-[0px] w-[1089px] flex flex-row items-start justify-end gap-[490px] z-[17] lg:w-[950px] md:w-[400px]">
        <div className="relative w-px h-[81px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 lg:w-[745px] md:text-mini md:w-[390px]">
          <p className="m-0">
            <span className="font-hanuman">{`🎁 `}</span>
            <span className="font-black">
              Exclusive Benefits for Ape Holders:
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            As a proud owner of an ApeVerse NFT, you gain access to exclusive
            benefits, events, and future drops. Your support fuels the growth of
            the ApeVerse community.
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[6796px] left-[0px] w-[924px] flex flex-row items-center justify-end gap-[677px] z-[18] lg:w-[800px] md:w-[410px]">
        <div className="relative w-[42px] h-[75px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-496@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[7591px] left-[0px] w-[924px] flex flex-row items-center justify-end gap-[579px] z-[19] lg:w-[800px] md:w-[410px]">
        <div className="relative w-[22px] h-[83px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-497@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[8127px] left-[0px] w-[1090px] flex flex-row items-center justify-end gap-[344px] z-[20] lg:w-[950px] md:w-[400px]">
        <div className="relative w-[23px] h-[58px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] shrink-0 md:text-mini md:w-[390px]">
          <p className="m-0">
            <span className="font-hanuman">🌐</span>
            <span className="font-black"> Get Started:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Join the ApeVerse revolution – where every ape tells a unique story,
            and the community is the canvas!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[8331px] left-[1px] w-[923px] flex flex-row items-center justify-end gap-[588px] z-[21] lg:w-[800px] md:w-[410px]">
        <div className="relative w-7 h-[136px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[395px] h-[447.7px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-498@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[8836px] left-[0px] w-[1090px] flex flex-row items-center justify-end gap-[374px] z-[22] lg:w-[950px] md:w-[400px]">
        <div className="relative w-5 h-[50px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[745px] h-[171px] shrink-0 md:text-mini md:w-[390px]">
          <p className="m-0">
            <span className="font-hanuman">{`📧 `}</span>
            <span className="font-black">Stay Updated:</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Subscribe to our newsletter to receive the latest updates,
            announcements, and exclusive offers. The ApeVerse is constantly
            evolving, and you don't want to miss a beat!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[9095px] left-[0px] w-[875px] flex flex-row items-start justify-end gap-[641px] z-[23] lg:w-[750px] md:w-[380px]">
        <div className="relative w-3.5 h-12 overflow-hidden shrink-0" />
        <div className="relative rounded-3xs bg-gray shadow-[0px_0px_0px_2px_#a1ff08] w-[339px] h-[49px] overflow-hidden shrink-0">
          <input
            className="[border:none] inline-block font-inika text-mid bg-[transparent] absolute top-[8px] left-[17px] font-bold text-greenyellow text-left w-[305px]"
            placeholder="Email"
            type="email"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[9307px] left-[0px] flex flex-row items-center justify-start z-[24] md:flex md:w-0 md:pt-0 md:box-border">
        <div className="relative w-[5px] h-2.5 overflow-hidden shrink-0" />
        <div className="rounded-3xs [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(1,_255,_255,_0))] flex flex-row items-start justify-start gap-[50px] md:gap-[20px] md:pt-0 md:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[9400px] left-[5px] flex flex-row items-center justify-start gap-[7px] z-[25] text-sm font-inika lg:pb-0 lg:box-border md:pt-0 md:box-border">
        <img
          className="relative rounded-[40px] w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
        <Header />
      </div>
    </div>
  );
};

export default Apeverse;
