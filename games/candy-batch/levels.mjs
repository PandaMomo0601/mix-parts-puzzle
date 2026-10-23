// Fixed trial levels; all cells are composed from the registered candy sprites.
export const LEVELS = [
  {
    "id": "ribbon",
    "name": "四味糖片",
    "story": "第一盒，四种甜味整整齐齐。",
    "focus": "点一盒，糖会连续落下；从底部开始装。",
    "slots": 2,
    "grid": [
      "GGGGGGGG",
      "GGGGGGGG",
      "BBBBBBBB",
      "BBBBBBBB",
      "YYYYYYYY",
      "YYYYYYYY",
      "RRRRRRRR",
      "RRRRRRRR"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 16
      },
      {
        "id": "Y1",
        "color": "Y",
        "count": 16
      },
      {
        "id": "B2",
        "color": "B",
        "count": 16
      },
      {
        "id": "G3",
        "color": "G",
        "count": 16
      }
    ]
  },
  {
    "id": "weave",
    "name": "双色织锦",
    "story": "红与蓝交织，把刚才的安排留在这一盒。",
    "focus": "盒子会等下一层；试试先让小黄盒铺路。",
    "slots": 2,
    "grid": [
      "RRRRRBBBBB",
      "RRRRRBBBBB",
      "BBBBBRRRRR",
      "BBBBBRRRRR",
      "YYYYYYYYYY",
      "YYYYYYYYYY",
      "RRRRRBBBBB",
      "RRRRRBBBBB"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 30
      },
      {
        "id": "B1",
        "color": "B",
        "count": 20
      },
      {
        "id": "B2",
        "color": "B",
        "count": 10
      },
      {
        "id": "Y3",
        "color": "Y",
        "count": 10
      },
      {
        "id": "Y4",
        "color": "Y",
        "count": 10
      }
    ]
  },
  {
    "id": "cherry",
    "name": "樱桃双响",
    "story": "两颗樱桃，一盒初夏的甜。",
    "focus": "给下一种颜色留位置，等着的盒子会自动接着装。",
    "slots": 3,
    "grid": [
      "YYYYYYYYYYYY",
      "YYYYGGGGYYYY",
      "YYYYGGYGYYYY",
      "YYYGGYYGYYYY",
      "YYYRRYYRRYYY",
      "YYRRRRRRRRYY",
      "YRRRRRBRRRRY",
      "YRRRRRBRRRRY",
      "YYRRRBBRRRYY",
      "YYYRBBBBRYYY",
      "YYYYBBBBYYYY",
      "YYYYYYYYYYYY"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 18
      },
      {
        "id": "R1",
        "color": "R",
        "count": 20
      },
      {
        "id": "Y2",
        "color": "Y",
        "count": 48
      },
      {
        "id": "Y3",
        "color": "Y",
        "count": 36
      },
      {
        "id": "G4",
        "color": "G",
        "count": 10
      },
      {
        "id": "B5",
        "color": "B",
        "count": 9
      },
      {
        "id": "B6",
        "color": "B",
        "count": 3
      }
    ]
  },
  {
    "id": "butterfly",
    "name": "薄荷蝴蝶",
    "story": "翅膀一片片展开，停在你的糖画里。",
    "focus": "同色不同容量，选择能顺利腾位的一盒。",
    "slots": 3,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBRRBBBBBBRRBBB",
      "BBRRRRBBBBRRRRBB",
      "BRRYYRRBBRRYYRRB",
      "BRRYYYRGGRYYYRRB",
      "BRRYYRRGGRRYYRRB",
      "BBRRRRRGGRRRRRBB",
      "BBBRRRRGGRRRRBBB",
      "BBBBRRRGGRRRBBBB",
      "BBBRYYRGGRYYRBBB",
      "BBRYYYRGGRYYYRBB",
      "BBRRYYRGGRYYRRBB",
      "BBBRRRBBBBRRRBBB",
      "BBBBRBBBBBBRBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 53
      },
      {
        "id": "R1",
        "color": "R",
        "count": 27
      },
      {
        "id": "Y2",
        "color": "Y",
        "count": 9
      },
      {
        "id": "Y3",
        "color": "Y",
        "count": 19
      },
      {
        "id": "G4",
        "color": "G",
        "count": 5
      },
      {
        "id": "G5",
        "color": "G",
        "count": 11
      },
      {
        "id": "B6",
        "color": "B",
        "count": 94
      },
      {
        "id": "B7",
        "color": "B",
        "count": 38
      }
    ]
  },
  {
    "id": "garden",
    "name": "花间小蛙",
    "story": "一只薄荷味的小蛙，藏在春天的花园。",
    "focus": "三个工作位，留一条路让等待的颜色继续。",
    "slots": 3,
    "grid": [
      "BBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBB",
      "BBBBGGGBBBBGGGBBBB",
      "BBBGGYGGBBGGYGGBBB",
      "BBBGGYGGGGGGYGGBBB",
      "BBGGGGGGGGGGGGGGBB",
      "BGGGGGGGGGGGGGGGGB",
      "BGGGGGGGGGGGGGGGGB",
      "BGGGGRRRRRRRRGGGGB",
      "BBGGGGRRRRRRGGGGBB",
      "BBBGGGGGGGGGGGGBBB",
      "BBBBGGGGGGGGGGBBBB",
      "BBBGGGYGGGGYGGGBBB",
      "BBGGGYYGGGGYYGGGBB",
      "BGGGYYYGGGGYYYGGGB",
      "BGGBBBBGGGGBBBBGGB",
      "BBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBB"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 4
      },
      {
        "id": "R1",
        "color": "R",
        "count": 10
      },
      {
        "id": "Y2",
        "color": "Y",
        "count": 9
      },
      {
        "id": "Y3",
        "color": "Y",
        "count": 7
      },
      {
        "id": "G4",
        "color": "G",
        "count": 36
      },
      {
        "id": "G5",
        "color": "G",
        "count": 110
      },
      {
        "id": "B6",
        "color": "B",
        "count": 104
      },
      {
        "id": "B7",
        "color": "B",
        "count": 44
      }
    ]
  },
  {
    "id": "rocket",
    "name": "星糖小火箭",
    "story": "把整片星空封进盒子，甜蜜准备发射。",
    "focus": "看准底部，几盒糖就能让整幅图案接连长出来。",
    "slots": 3,
    "grid": [
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBRRBBBBBBBBB",
      "BBBBYBBBRRRRBBBBYBBB",
      "BBBYYYBRRRRRRBBYYYBB",
      "BBBBYBBYYYYYYBBBYBBB",
      "BBBBBBBYYYYYYBBBBBBB",
      "BBBBBBBYYGGYYBBBBBBB",
      "BBBBBBBYGGGGYBBBBBBB",
      "BBBBBBBYGGGGYBBBBBBB",
      "BBBBBBBYYGGYYBBBBBBB",
      "BBBBBBBYYYYYYBBBBBBB",
      "BBBBBBRYYYYYYRBBBBBB",
      "BBBBBRRYYYYYYRRBBBBB",
      "BBBBRRRYYYYYYRRRBBBB",
      "BBBBRRRYYYYYYRRRBBBB",
      "BBBBRRBBRRRRBBRRBBBB",
      "BBBBBBBBRYYRBBBBBBBB",
      "BBBBBBBRRYYRRBBBBBBB",
      "BBBBBBBBRYYRBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB"
    ],
    "packets": [
      {
        "id": "R0",
        "color": "R",
        "count": 23
      },
      {
        "id": "R1",
        "color": "R",
        "count": 23
      },
      {
        "id": "Y2",
        "color": "Y",
        "count": 50
      },
      {
        "id": "Y3",
        "color": "Y",
        "count": 20
      },
      {
        "id": "G4",
        "color": "G",
        "count": 9
      },
      {
        "id": "G5",
        "color": "G",
        "count": 3
      },
      {
        "id": "B6",
        "color": "B",
        "count": 134
      },
      {
        "id": "B7",
        "color": "B",
        "count": 138
      }
    ]
  }
];
