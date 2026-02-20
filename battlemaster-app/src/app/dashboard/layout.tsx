import { Flex } from "antd";
import Sidebar from "@/_components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex>
            <Sidebar />
            <Flex vertical gap={"middle"} style={{ width: "100%" }}>
                {children}
            </Flex>
        </Flex>
    );
}
