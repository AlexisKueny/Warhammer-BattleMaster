import { Card, Flex } from "antd";
import { Button } from "antd";
import { games } from "@/_lib/placeholder-data";

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
                <Card
                    title="Game 1"
                >
                    <p>New game</p>
                </Card>
            </Flex>
        </>
    )
}