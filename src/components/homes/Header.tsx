import Image from "next/image";
import ShadowContainer from "./ShadowContainer";

export default function Header() {
  return (
    <div className="flex items-center justify-between pt-[42px] px-[54px]">
      <ShadowContainer className="flex items-center gap-12">
        <Image
          src="/assets/images/homes/logo.png"
          alt="logo"
          width={56}
          height={43}
          className="cursor-pointer"
        />
        <div className="flex items-center">
          <div className="w-16 h-16 flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/images/homes/home.png"
              alt="home"
              width={24}
              height={24}
            />
          </div>
          <div className="w-16 h-16 flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/images/homes/magic-star.png"
              alt="magic-star"
              width={24}
              height={24}
            />
          </div>
          <div className="w-16 h-16 flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/images/homes/location.png"
              alt="location"
              width={24}
              height={24}
            />
          </div>
          <div className="w-16 h-16 flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/images/homes/briefcase.png"
              alt="briefcase"
              width={24}
              height={24}
            />
          </div>
        </div>
      </ShadowContainer>
      <ShadowContainer className="font-invasion2000 self-stretch flex items-center justify-center text-2xl cursor-pointer">
        <span className="px-7">Mint</span>
      </ShadowContainer>
    </div>
  );
}
