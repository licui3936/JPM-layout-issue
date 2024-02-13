async function createLayout() {
    // add layout
    const layout = {
        content: [
            {
                type: "row",
                height: 1117,
                width: 1695,
                content: [
                    {
                        type: "stack",
                        height: 100,
                        width: 54,
                        content: [
                            {
                                type: "component",
                                componentName: "view",
                                componentState: {
                                    name: "3be9bb4e-aa31-4adf-a35d-a08e6fa114b6",
                                },
                            },
                            {
                                type: "component",
                                componentName: "view",
                                componentState: {
                                    name: "38e20000-440d-4a55-8bb9-fe4185d7aac0",
                                },
                            },
                            {
                                type: "component",
                                componentName: "view",
                                componentState: {
                                    name: "094c147d-74fd-435e-9caf-9257ee6fb1b2",
                                },
                            },
                            {
                                type: "component",
                                componentName: "view",
                                componentState: {
                                    name: "da809a10-63f8-4a02-ba02-14624c2d11ed",
                                },
                            },
                        ],
                    },
                    {
                        type: "column",
                        height: 100,
                        width: 45,
                        content: [
                            {
                                type: "stack",
                                height: 50,
                                width: 45,
                                content: [
                                    {
                                        type: "component",
                                        componentName: "view",
                                        componentState: {
                                            name: "015afa24-9815-442d-ba43-5dd1f0e2ee34",
                                        },
                                    },
                                ],
                            },
                            {
                                type: "stack",
                                height: 50,
                                width: 100,
                                content: [
                                    {
                                        type: "component",
                                        componentName: "view",
                                        componentState: {
                                            name: "709ae59e-f252-4be1-ac47-74c6f555c091",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const layoutName = "testLayout";
    await fin.Platform.Layout.create({ layoutName, layout });
}
