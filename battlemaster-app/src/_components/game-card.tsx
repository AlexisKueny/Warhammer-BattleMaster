import { Game } from "@/_lib/definitions";
import { Card } from "antd";
import styles from "@/_components/components.module.css";

export default function GameCard(props: Game) {
    return (
        <Card title={props.name} className={styles.gameCard}>
            <p>A game</p>
        </Card>
    )
}