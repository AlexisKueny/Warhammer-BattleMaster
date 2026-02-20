import { games } from "@/_lib/placeholder-data";
import GameCard from "@/_components/game-card";
import Header from "@/_components/header";

export default function Dashboard() {
    return (
        <>
            <Header variant={"dark"}/>
            <h1>
                Dashboard
            </h1>
            {games.map(
                game => <GameCard key={game.id} {...game} />
            )}
        </>
    )
}