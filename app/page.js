"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState("Loading.......!!!!!!!");
  const [bgclr, setbgclr] = useState("bg-green-500");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.kanye.rest/");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data, "data from API");
        setResult(data.quote);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bgclr]);

  const handlclick = () => {
    // fetchData();
    if (bgclr == "bg-green-500") {
      setbgclr("bg-white");
    } else {
      setbgclr("bg-green-500");
    }

    console.log("Clicked");
  };

  return (
    <>
      <NavBar></NavBar>

      <div
        className={`${bgclr} h-screen flex flex-col justify-center items-center gap-4 px-16`}
      >
        <Image
          src="/bitroot.jpeg"
          alt="bitroot image"
          width={100}
          height={100}
        ></Image>
        <button onClick={handlclick} className="bg-white px-24 hidden lg:flex ">
          Bitroot bot
        </button>
        <h1 className="text-2xl md:text-7xl  md:text-black  font-bold uppercase text-white">
          Crypto Swami
        </h1>
        <h2> {result} </h2>

        <div className="hidden lg:flex ">
          <p>
            Crypto Swami is a true visionary in the world of cryptocurrencies.
            With an innate understanding of blockchain technology and a profound
            knowledge of the ever-evolving crypto landscape, he stands out as a
            distinguished figure in the crypto community. As a crypto guy,
            Crypto Swami passion for the decentralized revolution is contagious.
            He has been an early adopter and an enthusiastic advocate of various
            cryptocurrencies, earning him a reputation as a seasoned investor
            and advisor. His expertise extends beyond the technical aspects of
            blockchain technology. he possesses a keen eye for identifying
            promising projects and trends within the crypto market. Many seek
            his counsel and insights as they navigate the often complex and
            volatile world of digital assets.
          </p>
          <p>
            Crypto Swami is a true visionary in the world of cryptocurrencies.
            With an innate understanding of blockchain technology and a profound
            knowledge of the ever-evolving crypto landscape, he stands out as a
            distinguished figure in the crypto community. As a crypto guy,
            Crypto Swamis passion for the decentralized revolution is
            contagious. He has been an early adopter and an enthusiastic
            advocate of various cryptocurrencies, earning him a reputation as a
            seasoned investor and advisor. His expertise extends beyond the
            technical aspects of blockchain technology. he possesses a keen eye
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
