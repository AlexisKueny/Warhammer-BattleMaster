"use client";

import { Avatar, Button, Dropdown } from "antd";
import type { DropdownProps, MenuProps } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import styles from "@/_components/components.module.css";

function AvatarMenu({ children }: { children: React.ReactNode }) {
    const items: MenuProps['items'] = [
        {
            key: 1,
            label: 'login'
        },
        {
            key: 2,
            label: 'logout'
        }
    ];

    const props: DropdownProps = {
        menu: { items },
        placement: 'bottom',
    };

    return (
        <Dropdown
            {...props}
        >
            {children}
        </Dropdown>
    )
}

export default function Header() {
    return (
        <header className={styles.header}>
            <h3>Header element 1</h3>
            <h3>Header element 2</h3>
            <AvatarMenu>
                <Avatar
                    shape="square"
                    size={55}
                    icon={<UserOutlined />}
                    className={styles.avatar}
                />
            </AvatarMenu>
        </header>
    )
}