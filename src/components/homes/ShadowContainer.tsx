import classNames from "@/utils/className";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ShadowContainer({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "bg-white border-[6px] border-black rounded-[36px] px-6 py-5 shadow-[15px_10px_0_black]",
        className
      )}
    >
      {children}
    </div>
  );
}
