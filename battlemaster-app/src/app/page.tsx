import Header from "@/_components/header"
import { Flex } from "antd";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Flex align="center" vertical style={{ height: "100%" }}>
          <h1>Welcome to the command bunker!</h1>
          <h2>The best website to plan your next great warhammer 40k game!</h2>
          <Image
            src="/images/hero-image.png"
            alt="Hero image"
            height={1000}
            width={1000}
          />
          <h2>What we offer</h2>
          <ul>
            <Flex vertical gap={"small"}>
              <li>Built-in map designer to plan terrain placement</li>
              <li>Design your army from scratch, or load an existing one from the official 40k app</li>
              <li>Tools to help you design your game step by step</li>
              <li>Organise and manage your existing and upcomming sessions</li>
            </Flex>
          </ul>
          <h2>Contact</h2>

        </Flex>
      </main>
    </div>
  );
}
