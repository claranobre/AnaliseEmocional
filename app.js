[
    {
        "id": "49ca065b.8dd878",
        "type": "twitter in",
        "z": "5230c72.fadcf38",
        "twitter": "",
        "tags": "triste, cansaço, depressão, #bad, #sad",
        "user": "false",
        "name": "Search for tweets",
        "topic": "tweets",
        "inputs": 1,
        "x": 87,
        "y": 93,
        "wires": [
            [
                "d5a6aa85.07d6a8"
            ]
        ]
    },
    {
        "id": "7d310d12.53cf84",
        "type": "ui_text",
        "z": "5230c72.fadcf38",
        "group": "e638b37.019e95",
        "order": 1,
        "width": "",
        "height": "",
        "name": "Twitter feed:   ",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "",
        "x": 544.5001525878906,
        "y": 273.7777404785156,
        "wires": []
    },
    {
        "id": "121b6e49.0a65b2",
        "type": "debug",
        "z": "5230c72.fadcf38",
        "name": "debug sentiment value",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 919.5,
        "y": 39.55554962158203,
        "wires": []
    },
    {
        "id": "21c7fc4a.63c954",
        "type": "comment",
        "z": "5230c72.fadcf38",
        "name": "Flow 1: Capturar & mostrar tweets",
        "info": "This flow captures tweets from the twittersphere\nand sends them to a debug node for diplay on\nthe debug panle (right side) and to the Dashboard\nused in example 2.\n\nThis example requires you to configure the twitter\nnode with your own twitter account details.\n\n- Double click the twitter node\n- Select add credentials\n- Follow the instructions to allow Node-RED to\naccess your account\n- Save and deploy\n- It takes a short time before tweets appear",
        "x": 164,
        "y": 41,
        "wires": []
    },
    {
        "id": "d5a6aa85.07d6a8",
        "type": "sentiment",
        "z": "5230c72.fadcf38",
        "name": "Get tweets sentiment value",
        "x": 198.888916015625,
        "y": 195.99998474121094,
        "wires": [
            [
                "17d85bb1.74c994"
            ]
        ]
    },
    {
        "id": "a912ac9f.3c9ce8",
        "type": "switch",
        "z": "5230c72.fadcf38",
        "name": "Analyze how negative",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "depressão",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "RT",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "triste",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "chateação",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 4,
        "x": 206.6666259765625,
        "y": 476.99993896484375,
        "wires": [
            [
                "d05fd13d.0a6928"
            ],
            [
                "7d310d12.53cf84"
            ],
            [
                "84063f0e.af4d68"
            ],
            [
                "63cba4a7.544bc4"
            ]
        ]
    },
    {
        "id": "63cba4a7.544bc4",
        "type": "e-mail",
        "z": "5230c72.fadcf38",
        "server": "smtp.gmail.com",
        "port": "465",
        "secure": true,
        "name": "clara.nobre@veezor.com",
        "dname": "send email with very bad tweet",
        "x": 593.8888549804688,
        "y": 369.66668701171875,
        "wires": []
    },
    {
        "id": "d05fd13d.0a6928",
        "type": "function",
        "z": "5230c72.fadcf38",
        "name": "streamline the tweet",
        "func": "var topic = msg.topic.replace(\"tweets/\", \"0\");\nmsg.payload = \"RT: \" + topic + msg.payload;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 585.888916015625,
        "y": 90.44445037841797,
        "wires": [
            [
                "121b6e49.0a65b2"
            ]
        ]
    },
    {
        "id": "17d85bb1.74c994",
        "type": "delay",
        "z": "5230c72.fadcf38",
        "name": "Delay Tweets",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 192.66665649414062,
        "y": 324.3333435058594,
        "wires": [
            [
                "a912ac9f.3c9ce8"
            ]
        ]
    },
    {
        "id": "84063f0e.af4d68",
        "type": "ui_toast",
        "z": "5230c72.fadcf38",
        "position": "top right",
        "displayTime": "5",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 560.6666259765625,
        "y": 316.8886413574219,
        "wires": []
    },
    {
        "id": "e638b37.019e95",
        "type": "ui_group",
        "z": "",
        "name": "Dashboard",
        "tab": "84499b6b.8ac208",
        "disp": true,
        "width": "10"
    },
    {
        "id": "84499b6b.8ac208",
        "type": "ui_tab",
        "z": "5230c72.fadcf38",
        "name": "Home",
        "icon": "dashboard",
        "order": "1"
    }
]
