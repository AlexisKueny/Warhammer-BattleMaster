import { Game } from "@/_lib/definitions";
import { Card } from "antd";

export default function GameCard(props: Game) {
    return (
        <Card title={props.name}>
            <p>A game</p>
        </Card>
    )
}