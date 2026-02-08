"use client";

import { Avatar, Button, Dropdown } from "antd";
import type { DropdownProps, MenuProps } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import styles from "@/_components/components.module.css";
import Image from "next/image";

function AvatarMenu({ children }: { children: React.ReactNode }) {
    const items: MenuProps['items'] = [
        {
            key: 1,
            label: 'Login'
        },
        {
            key: 2,
            label: 'Settings'
        },
        {
            key: 3,
            label: 'Logout'
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
            <Image
                src="/transparentLogo.svg"
                alt="Logo with text"
                width={150}
                height={75}
                className={styles.logo}
                priority
            />
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