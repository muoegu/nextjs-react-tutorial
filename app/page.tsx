import Image from "next/image";
import Gym from "./gym/page";
import Demo from "./test";
import { Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title>Micah's Website</Title>
      <Demo/>
    </>
  );
}
