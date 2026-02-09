import { Card, Flex } from "antd";
import { Button } from "antd";
import { games } from "@/_lib/placeholder-data";
import GameCard from "@/_components/game-card";

export default function Dashboard() {
    return (
        <>
            <h1>
                Dashboard
            </h1>
            <Flex vertical align="center" gap={"middle"}>
                <Button>
                    Create new game
                </Button>
                {games.map(
                    game => <GameCard key={game.id} {...game}/>
                )}
            </Flex>
        </>
    )
}