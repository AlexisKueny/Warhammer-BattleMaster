"use client";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "@/_components/components.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h3>Header element 1</h3> 
            <h3>Header element 2</h3>
            <Avatar size="large" icon={<UserOutlined />} />
        </header>
    )
}