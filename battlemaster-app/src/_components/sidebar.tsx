import { Button, Divider, Flex } from "antd";
import Image from "next/image";
import styles from "@/_components/components.module.css";

export default function Sidenav() {
    return (
        <>
            <Flex>
                <Flex vertical>
                    <Image
                        src="/transparentLogo.svg"
                        alt="Logo with text"
                        width={300}
                        height={150}
                        className={styles.logo}
                        priority
                    />
                    <Button>
                        Create new game
                    </Button>
                    <p>Armies</p>
                    <p>Maps</p>
                    <p>Templates</p>
                    <p>Stats</p>
                    <p>Wiki</p>
                </Flex>
                <Divider orientation="vertical" style={{ height: "100px"}}/>
            </Flex>
        </>
    );
}