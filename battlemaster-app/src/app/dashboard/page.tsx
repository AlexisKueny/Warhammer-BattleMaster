import { Card, Flex } from "antd";
import { Button } from "antd";
import { games } from "@/_lib/placeholder-data";
import GameCard from "@/_components/game-card";
import Sidenav from "@/_components/sidebar";
import Header from "@/_components/header";

export default function Dashboard() {
    return (
        <>
            <Flex>
                <Sidenav />
                <Flex vertical gap={"middle"} style={{width:"100%"}}>
                    <Header />
                    <h1>
                        Dashboard
                    </h1>
                    {games.map(
                        game => <GameCard key={game.id} {...game} />
                    )}
                </Flex>
            </Flex>
        </>
    )
}