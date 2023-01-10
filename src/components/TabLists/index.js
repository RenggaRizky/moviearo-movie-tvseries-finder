import Tab from "components/Tab";
import React, { useState } from "react";
import { TabBody } from "components/TabBody";
export default function TabLists({ latest, popular, toprating, type }) {
    const [tabValue, setTabValue] = useState("terbaru");

    return (
        <div className="md:mt-16 lg:pl-0 lg:pr-7">
            <ul className="flex bg-lightblack p-4 justify-between">
                <li>
                    <Tab
                        tabValue={tabValue}
                        setTabValue={setTabValue}
                        defaultChecked={true}
                        value="terbaru"
                        group="tabList"
                    />
                </li>
                <li>
                    <Tab
                        tabValue={tabValue}
                        setTabValue={setTabValue}
                        defaultChecked={false}
                        value="popular"
                        group="tabList"
                    />
                </li>
                <li>
                    <Tab
                        tabValue={tabValue}
                        setTabValue={setTabValue}
                        defaultChecked={false}
                        value="topRating"
                        group="tabList"
                    />
                </li>
            </ul>

            <TabBody
                tabValue={tabValue}
                value="terbaru"
                data={latest}
                type={type}
            />
            <TabBody
                tabValue={tabValue}
                value="popular"
                data={popular}
                type={type}
            />
            <TabBody
                tabValue={tabValue}
                value="topRating"
                data={toprating}
                type={type}
            />
        </div>
    );
}
