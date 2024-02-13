async function createWindow() {
    const winOptions = {
        frame: false,
        preloadScripts: [
            {
                url: "http://localhost:5555/js/preload1.js",
            },
            {
                url: "http://localhost:5555/js/preload2.js",
            },
        ],
        alwaysOnTop: false,
        backgroundColor: "#242526",
        defaultLeft: 66,
        defaultTop: 230,
        defaultWidth: 1695,
        defaultHeight: 1117,
        icon: "https://openfin.github.io/golden-prototype/favicon.ico",
        state: "normal",
        taskbarIconGroup: "",
        processAffinity: "d8f7f0e4-bd24-42a7-8e49-88255f1b0506",
        layout: {
            content: [],
        },
        url: "http://localhost:5555/platform-window.html",
        customContext: {
            instanceId: "d8f7f0e4-bd24-42a7-8e49-88255f1b0506",
            containerId: "d8f7f0e4-bd24-42a7-8e49-88255f1b0506",
            name: "d8f7f0e4-bd24-42a7-8e49-88255f1b0506",
        },
        name: "d8f7f0e4-bd24-42a7-8e49-88255f1b0506",
        uuid: "platform_customization_local", //"digital-platform-desktop-localhost",
        permissions: {
            webAPIs: [
                "clipboard-read",
                "clipboard-sanitized-write",
                "openExternal",
            ],
            System: {
                downloadAsset: true,
                launchExternalProcess: true,
                terminateExternalProcess: true,
                readRegistryValue: true,
                openUrlWithBrowser: {
                    enabled: true,
                    protocols: ["mailto"],
                },
            },
        },
        waitForPageLoad: false,
        autoShow: true,
    };

    const win = await fin.Window.create(winOptions);
    console.log(win.identity);
    // add views
    const platform = fin.Platform.getCurrentSync();
    /*
    const target = {
        uuid: platform.identity.uuid,
        name: platform.identity.uuid,
    };
    */
    const target = win.identity;
    const viewNames = [
        "3be9bb4e-aa31-4adf-a35d-a08e6fa114b6",
        "38e20000-440d-4a55-8bb9-fe4185d7aac0",
        "094c147d-74fd-435e-9caf-9257ee6fb1b2",
        "da809a10-63f8-4a02-ba02-14624c2d11ed",
        "015afa24-9815-442d-ba43-5dd1f0e2ee34",
        "709ae59e-f252-4be1-ac47-74c6f555c091",
    ];
    for (i = 0; i < 6; i++) {
        await platform.createView(
            {
                url: `http://localhost:5555/view${i + 1}.html`,
                name: `${viewNames[i]}`,
            },
            target // pool views
        );
    }
}
