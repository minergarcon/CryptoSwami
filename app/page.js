import Image from "next/image";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer"; 

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-green-500 h-screen flex flex-col justify-center items-center gap-4 px-16">
        <Image
          src="/bitroot.jpeg"
          alt="bitroot image"
          width={100}
          height={100}
          ></Image>
        <h1 className="text-2xl md:text-7xl  md:text-black  font-bold uppercase text-white">
          Crypto Swami
        </h1>

        <div className="flex">
          <p>
            Crypto Swami is a true visionary in the world of cryptocurrencies.
            With an innate understanding of blockchain technology and a profound
            knowledge of the ever-evolving crypto landscape, he stands out as a
            distinguished figure in the crypto community. As a crypto guy,
            Crypto Swami's passion for the decentralized revolution is
            contagious. He has been an early adopter and an enthusiastic
            advocate of various cryptocurrencies, earning him a reputation as a
            seasoned investor and advisor. His expertise extends beyond the
            technical aspects of blockchain technology; he possesses a keen eye
            for identifying promising projects and trends within the crypto
            market. Many seek his counsel and insights as they navigate the
            often complex and volatile world of digital assets.
          </p>
          <p>
            Crypto Swami is a true visionary in the world of cryptocurrencies.
            With an innate understanding of blockchain technology and a profound
            knowledge of the ever-evolving crypto landscape, he stands out as a
            distinguished figure in the crypto community. As a crypto guy,
            Crypto Swami's passion for the decentralized revolution is
            contagious. He has been an early adopter and an enthusiastic
            advocate of various cryptocurrencies, earning him a reputation as a
            seasoned investor and advisor. His expertise extends beyond the
            technical aspects of blockchain technology; he possesses a keen eye
            for identifying promising projects and trends within the crypto
            market. Many seek his counsel and insights as they navigate the
            often complex and volatile world of digital assets.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
