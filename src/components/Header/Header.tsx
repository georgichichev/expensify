import React from "react";

import { Tabs } from "@mantine/core";
import { IconCoin, IconScissors } from "@tabler/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("life");
    return (
        <Tabs
            value={activeTab}
            variant={"pills"}
            onTabChange={(value: string) => {
                setActiveTab(value);
                navigate(value);
            }}
        >
            <Tabs.List grow>
                <Tabs.Tab value="life" icon={<IconCoin />}>
                    Life
                </Tabs.Tab>
                <Tabs.Tab value="work" icon={<IconScissors />}>
                    Work
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
};

export default Header;
