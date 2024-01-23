import Header from "@/components/homes/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import ShadowContainer from "@/components/homes/ShadowContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#B52126] w-full h-screen overflow-hidden relative">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ translateY: "-120%" }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Header />
      </motion.div>
      <motion.div
        animate={{ scale: 1, translateX: "-50%", translateY: "-25%" }}
        initial={{ scale: 0.4, translateX: "-50%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 z-[2]"
      >
        <img src="/assets/images/homes/horn-girl.png" alt="horn girl" />
      </motion.div>
      <motion.div
        initial={{ scale: 3.5, zIndex: 2 }}
        animate={{ scale: 1, zIndex: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="font-invasion2000 text-[20rem] text-white text-center">
          Year 2k
        </h1>
      </motion.div>
      <motion.div
        initial={{ scale: 0.2, translateX: "-50%", translateY: "-30%" }}
        animate={{ scale: 1, translateX: "-50%", translateY: "-5%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-none absolute z-[1] left-1/2"
      >
        <img
          src="/assets/images/homes/bg.png"
          alt="bg"
          className="max-w-none"
        />
      </motion.div>
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.span
          className="font-invasion2000 text-9xl absolute z-[3] left-1/2 -translate-x-1/2 font-outline text-transparent"
          key={index}
          initial={{ zIndex: 0, top: 150 }}
          animate={{ zIndex: 3, top: 150 + index * 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Year 2k
        </motion.span>
      ))}
      <motion.div
        initial={{ translateX: "50%" }}
        animate={{ translateX: "-50%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex items-center gap-4 w-full absolute bottom-4 left-1/2 z-10 justify-center pr-4"
      >
        <div className="relative">
          <ShadowContainer className="rounded-full shadow-none absolute right-0 w-[85px] h-[85px] flex items-center justify-center">
            <Image
              src="/assets/images/homes/grid.png"
              alt="grid"
              width={24}
              height={24}
            />
          </ShadowContainer>
          <Image
            width={462}
            height={283}
            src="/assets/images/homes/the-pipe.png"
            alt="the pipe"
          />
          <span className="text-5xl font-invasion2000 text-white absolute left-10 bottom-8">
            The Pipe
          </span>
        </div>
        <div className="relative">
          <ShadowContainer className="rounded-full shadow-none absolute right-0 w-[85px] h-[85px] flex items-center justify-center">
            <Image
              src="/assets/images/homes/grid.png"
              alt="grid"
              width={24}
              height={24}
            />
          </ShadowContainer>
          <Image
            width={462}
            height={283}
            src="/assets/images/homes/the-store.png"
            alt="the store"
          />
          <span className="text-5xl font-invasion2000 text-white absolute left-10 bottom-8">
            The Store
          </span>
        </div>
        <div className="relative">
          <ShadowContainer className="rounded-full shadow-none absolute right-0 w-[85px] h-[85px] flex items-center justify-center">
            <Image
              src="/assets/images/homes/grid.png"
              alt="grid"
              width={24}
              height={24}
            />
          </ShadowContainer>
          <Image
            width={462}
            height={283}
            src="/assets/images/homes/the-construct.png"
            alt="the construct"
          />
          <span className="text-5xl font-invasion2000 text-white absolute left-10 bottom-8">
            The Construct
          </span>
        </div>
      </motion.div>
    </main>
  );
}
