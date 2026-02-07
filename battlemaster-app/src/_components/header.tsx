import { Flex } from "antd";
import styles from "@/_components/components.module.css"

export default function Header() {
    return (
        <header
            className={styles.header}
        >
            <Flex gap="small">
                <p>Header element 1</p> 
                <p>Header element 2</p>
            </Flex>
        </header>
    )
}