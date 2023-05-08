import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return <main className={` ${poppins.className}`}>{/* <h1>HOME</h1> */}</main>;
}