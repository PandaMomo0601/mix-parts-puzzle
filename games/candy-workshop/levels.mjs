// Fixed, deterministic trial recipes. Every cell uses an existing registered candy sprite.
export const MODES=[
  {
    "id": "bridge",
    "name": "过桥灌糖",
    "verb": "点料筒",
    "description": "礼盒经过灌装桥，装满一排就前进。",
    "letter": "A"
  },
  {
    "id": "trays",
    "name": "选托接糖",
    "verb": "点纸托",
    "description": "先送哪张纸托，接住不断送来的糖。",
    "letter": "B"
  },
  {
    "id": "loop",
    "name": "合流装盒",
    "verb": "点来料带",
    "description": "一批糖上环道，留点空位给后面的货。",
    "letter": "C"
  }
];
export const LEVELS=[
  {
    "id": "bridge-01",
    "mode": "bridge",
    "name": "糖果彩带",
    "story": "这盒「糖果彩带」，是你亲手装好的第 1 幅糖画。",
    "focus": "点一筒，礼盒装满这一排就向前走。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRRRRR",
      "RRRRRRRR",
      "YYYYYYYY",
      "YYYYYYYY",
      "BBBBBBBB",
      "BBBBBBBB",
      "GGGGGGGG",
      "GGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "R"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "R"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "B"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "B"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "G"
      },
      {
        "x": 1,
        "y": 6,
        "color": "G"
      },
      {
        "x": 2,
        "y": 6,
        "color": "G"
      },
      {
        "x": 3,
        "y": 6,
        "color": "G"
      },
      {
        "x": 4,
        "y": 6,
        "color": "G"
      },
      {
        "x": 5,
        "y": 6,
        "color": "G"
      },
      {
        "x": 6,
        "y": 6,
        "color": "G"
      },
      {
        "x": 7,
        "y": 6,
        "color": "G"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      }
    ],
    "slots": 2,
    "packets": [
      {
        "id": "P1",
        "color": "R",
        "count": 16
      },
      {
        "id": "P2",
        "color": "Y",
        "count": 16
      },
      {
        "id": "P3",
        "color": "G",
        "count": 16
      },
      {
        "id": "P4",
        "color": "B",
        "count": 16
      }
    ],
    "witness": [
      "P1",
      "P2",
      "P4",
      "P3"
    ],
    "analysis": {
      "badChoice": null,
      "meaningfulBranches": 6
    }
  },
  {
    "id": "bridge-02",
    "mode": "bridge",
    "name": "双色风车",
    "story": "这盒「双色风车」，是你亲手装好的第 2 幅糖画。",
    "focus": "同一筒会等礼盒前进，再接着装。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRYYYY",
      "RRRRYYYY",
      "RRRRYYYY",
      "RRRRYYYY",
      "YYYYRRRR",
      "YYYYRRRR",
      "YYYYRRRR",
      "YYYYRRRR"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "R"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "R"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "R"
      },
      {
        "x": 0,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "R"
      },
      {
        "x": 7,
        "y": 5,
        "color": "R"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 0,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      }
    ],
    "slots": 2,
    "packets": [
      {
        "id": "P1",
        "color": "R",
        "count": 32
      },
      {
        "id": "P2",
        "color": "Y",
        "count": 32
      }
    ],
    "witness": [
      "P1",
      "P2"
    ],
    "analysis": {
      "badChoice": null,
      "meaningfulBranches": 0
    }
  },
  {
    "id": "bridge-03",
    "mode": "bridge",
    "name": "三味回环",
    "story": "这盒「三味回环」，是你亲手装好的第 3 幅糖画。",
    "focus": "红筒还在等；给黄色留一个灌装位。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRRRRR",
      "RRRRRRRR",
      "YYYYYYYY",
      "YYYYYYYY",
      "BBBBBBBB",
      "BBBBBBBB",
      "RRRRRRRR",
      "RRRRRRRR"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "R"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "R"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "B"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "B"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "R"
      },
      {
        "x": 1,
        "y": 6,
        "color": "R"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "R"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 0,
        "y": 7,
        "color": "R"
      },
      {
        "x": 1,
        "y": 7,
        "color": "R"
      },
      {
        "x": 2,
        "y": 7,
        "color": "R"
      },
      {
        "x": 3,
        "y": 7,
        "color": "R"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      }
    ],
    "slots": 2,
    "packets": [
      {
        "id": "P1",
        "color": "R",
        "count": 32
      },
      {
        "id": "P2",
        "color": "Y",
        "count": 16
      },
      {
        "id": "P3",
        "color": "B",
        "count": 16
      }
    ],
    "witness": [
      "P1",
      "P2",
      "P3"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "P3",
        "filled": 0,
        "status": "playing",
        "proofNodes": 1
      },
      "meaningfulBranches": 3
    }
  },
  {
    "id": "bridge-04",
    "mode": "bridge",
    "name": "樱桃双果",
    "story": "这盒「樱桃双果」，是你亲手装好的第 4 幅糖画。",
    "focus": "先看桥下缺什么，再看哪筒能先用完。",
    "width": 8,
    "height": 8,
    "grid": [
      "YYYYYYYY",
      "YYGGGGYY",
      "YYGYYGYY",
      "YRRYRRYR",
      "RRRRRRRR",
      "RBRRRRBR",
      "YRRYYRRY",
      "YYYYYYYY"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 1,
        "color": "G"
      },
      {
        "x": 3,
        "y": 1,
        "color": "G"
      },
      {
        "x": 4,
        "y": 1,
        "color": "G"
      },
      {
        "x": 5,
        "y": 1,
        "color": "G"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "G"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "G"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "R"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "R"
      },
      {
        "x": 0,
        "y": 4,
        "color": "R"
      },
      {
        "x": 1,
        "y": 4,
        "color": "R"
      },
      {
        "x": 2,
        "y": 4,
        "color": "R"
      },
      {
        "x": 3,
        "y": 4,
        "color": "R"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "R"
      },
      {
        "x": 0,
        "y": 5,
        "color": "R"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "R"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "R"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "R"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 7,
        "color": "Y"
      }
    ],
    "slots": 3,
    "packets": [
      {
        "color": "R",
        "count": 12,
        "id": "P1"
      },
      {
        "color": "G",
        "count": 6,
        "id": "P2"
      },
      {
        "color": "Y",
        "count": 33,
        "id": "P3"
      },
      {
        "color": "R",
        "count": 10,
        "id": "P4"
      },
      {
        "color": "B",
        "count": 1,
        "id": "P5"
      },
      {
        "color": "B",
        "count": 1,
        "id": "P6"
      },
      {
        "color": "R",
        "count": 1,
        "id": "P7"
      }
    ],
    "witness": [
      "P3",
      "P2",
      "P1",
      "P4",
      "P5",
      "P6",
      "P7"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [
          "P3",
          "P2",
          "P1",
          "P4"
        ],
        "action": "P7",
        "filled": 46,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 20
    }
  },
  {
    "id": "bridge-05",
    "mode": "bridge",
    "name": "薄荷蝴蝶",
    "story": "这盒「薄荷蝴蝶」，是你亲手装好的第 5 幅糖画。",
    "focus": "让短筒先退场，给下一种颜色留位。",
    "width": 8,
    "height": 8,
    "grid": [
      "GYYYBYYG",
      "GGYBBYGG",
      "GGGRRGGG",
      "YGGRRGGY",
      "YBBRRBBY",
      "BBBRRBBB",
      "BBYBBYBB",
      "BYYYYYYB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "G"
      },
      {
        "x": 1,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "G"
      },
      {
        "x": 0,
        "y": 1,
        "color": "G"
      },
      {
        "x": 1,
        "y": 1,
        "color": "G"
      },
      {
        "x": 2,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "G"
      },
      {
        "x": 7,
        "y": 1,
        "color": "G"
      },
      {
        "x": 0,
        "y": 2,
        "color": "G"
      },
      {
        "x": 1,
        "y": 2,
        "color": "G"
      },
      {
        "x": 2,
        "y": 2,
        "color": "G"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "R"
      },
      {
        "x": 5,
        "y": 2,
        "color": "G"
      },
      {
        "x": 6,
        "y": 2,
        "color": "G"
      },
      {
        "x": 7,
        "y": 2,
        "color": "G"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "G"
      },
      {
        "x": 2,
        "y": 3,
        "color": "G"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "G"
      },
      {
        "x": 6,
        "y": 3,
        "color": "G"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "R"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      }
    ],
    "slots": 3,
    "packets": [
      {
        "color": "R",
        "count": 3,
        "id": "P1"
      },
      {
        "color": "Y",
        "count": 12,
        "id": "P2"
      },
      {
        "color": "G",
        "count": 15,
        "id": "P3"
      },
      {
        "color": "Y",
        "count": 2,
        "id": "P4"
      },
      {
        "color": "R",
        "count": 4,
        "id": "P5"
      },
      {
        "color": "B",
        "count": 21,
        "id": "P6"
      },
      {
        "color": "G",
        "count": 1,
        "id": "P7"
      },
      {
        "color": "R",
        "count": 1,
        "id": "P8"
      },
      {
        "color": "Y",
        "count": 5,
        "id": "P9"
      }
    ],
    "witness": [
      "P9",
      "P7",
      "P3",
      "P6",
      "P4",
      "P5",
      "P2",
      "P1",
      "P8"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "P1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 72
      },
      "meaningfulBranches": 33
    }
  },
  {
    "id": "bridge-06",
    "mode": "bridge",
    "name": "星光礼盒",
    "story": "这盒「星光礼盒」，是你亲手装好的第 6 幅糖画。",
    "focus": "三个位，安排好整盒的四种甜味。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBBBYYBBBBBBBB",
      "BBBBBBYYBBBBBBBB",
      "BBBBYYYYYYBBBBBB",
      "BBBBYYYYYYBBBBBB",
      "YYYYYYYYYYYYYYYY",
      "YYYYYYYYYYYYYYYY",
      "BBYYYYYYYYYYYYBB",
      "BBYYYYYYYYYYYYBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBRRRRYYYYRRRRBB",
      "BBRRRRYYYYRRRRBB",
      "GGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 8,
        "y": 0,
        "color": "B"
      },
      {
        "x": 9,
        "y": 0,
        "color": "B"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 8,
        "y": 1,
        "color": "B"
      },
      {
        "x": 9,
        "y": 1,
        "color": "B"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "B"
      },
      {
        "x": 3,
        "y": 2,
        "color": "B"
      },
      {
        "x": 4,
        "y": 2,
        "color": "B"
      },
      {
        "x": 5,
        "y": 2,
        "color": "B"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "B"
      },
      {
        "x": 9,
        "y": 2,
        "color": "B"
      },
      {
        "x": 10,
        "y": 2,
        "color": "B"
      },
      {
        "x": 11,
        "y": 2,
        "color": "B"
      },
      {
        "x": 12,
        "y": 2,
        "color": "B"
      },
      {
        "x": 13,
        "y": 2,
        "color": "B"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "B"
      },
      {
        "x": 3,
        "y": 3,
        "color": "B"
      },
      {
        "x": 4,
        "y": 3,
        "color": "B"
      },
      {
        "x": 5,
        "y": 3,
        "color": "B"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "B"
      },
      {
        "x": 9,
        "y": 3,
        "color": "B"
      },
      {
        "x": 10,
        "y": 3,
        "color": "B"
      },
      {
        "x": 11,
        "y": 3,
        "color": "B"
      },
      {
        "x": 12,
        "y": 3,
        "color": "B"
      },
      {
        "x": 13,
        "y": 3,
        "color": "B"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 4,
        "color": "B"
      },
      {
        "x": 11,
        "y": 4,
        "color": "B"
      },
      {
        "x": 12,
        "y": 4,
        "color": "B"
      },
      {
        "x": 13,
        "y": 4,
        "color": "B"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 5,
        "color": "B"
      },
      {
        "x": 11,
        "y": 5,
        "color": "B"
      },
      {
        "x": 12,
        "y": 5,
        "color": "B"
      },
      {
        "x": 13,
        "y": 5,
        "color": "B"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "B"
      },
      {
        "x": 3,
        "y": 10,
        "color": "B"
      },
      {
        "x": 4,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 10,
        "color": "B"
      },
      {
        "x": 13,
        "y": 10,
        "color": "B"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "B"
      },
      {
        "x": 3,
        "y": 11,
        "color": "B"
      },
      {
        "x": 4,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 11,
        "color": "B"
      },
      {
        "x": 13,
        "y": 11,
        "color": "B"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "R"
      },
      {
        "x": 3,
        "y": 12,
        "color": "R"
      },
      {
        "x": 4,
        "y": 12,
        "color": "R"
      },
      {
        "x": 5,
        "y": 12,
        "color": "R"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "R"
      },
      {
        "x": 11,
        "y": 12,
        "color": "R"
      },
      {
        "x": 12,
        "y": 12,
        "color": "R"
      },
      {
        "x": 13,
        "y": 12,
        "color": "R"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "R"
      },
      {
        "x": 3,
        "y": 13,
        "color": "R"
      },
      {
        "x": 4,
        "y": 13,
        "color": "R"
      },
      {
        "x": 5,
        "y": 13,
        "color": "R"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "R"
      },
      {
        "x": 11,
        "y": 13,
        "color": "R"
      },
      {
        "x": 12,
        "y": 13,
        "color": "R"
      },
      {
        "x": 13,
        "y": 13,
        "color": "R"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "G"
      },
      {
        "x": 1,
        "y": 14,
        "color": "G"
      },
      {
        "x": 2,
        "y": 14,
        "color": "G"
      },
      {
        "x": 3,
        "y": 14,
        "color": "G"
      },
      {
        "x": 4,
        "y": 14,
        "color": "G"
      },
      {
        "x": 5,
        "y": 14,
        "color": "G"
      },
      {
        "x": 6,
        "y": 14,
        "color": "G"
      },
      {
        "x": 7,
        "y": 14,
        "color": "G"
      },
      {
        "x": 8,
        "y": 14,
        "color": "G"
      },
      {
        "x": 9,
        "y": 14,
        "color": "G"
      },
      {
        "x": 10,
        "y": 14,
        "color": "G"
      },
      {
        "x": 11,
        "y": 14,
        "color": "G"
      },
      {
        "x": 12,
        "y": 14,
        "color": "G"
      },
      {
        "x": 13,
        "y": 14,
        "color": "G"
      },
      {
        "x": 14,
        "y": 14,
        "color": "G"
      },
      {
        "x": 15,
        "y": 14,
        "color": "G"
      },
      {
        "x": 0,
        "y": 15,
        "color": "G"
      },
      {
        "x": 1,
        "y": 15,
        "color": "G"
      },
      {
        "x": 2,
        "y": 15,
        "color": "G"
      },
      {
        "x": 3,
        "y": 15,
        "color": "G"
      },
      {
        "x": 4,
        "y": 15,
        "color": "G"
      },
      {
        "x": 5,
        "y": 15,
        "color": "G"
      },
      {
        "x": 6,
        "y": 15,
        "color": "G"
      },
      {
        "x": 7,
        "y": 15,
        "color": "G"
      },
      {
        "x": 8,
        "y": 15,
        "color": "G"
      },
      {
        "x": 9,
        "y": 15,
        "color": "G"
      },
      {
        "x": 10,
        "y": 15,
        "color": "G"
      },
      {
        "x": 11,
        "y": 15,
        "color": "G"
      },
      {
        "x": 12,
        "y": 15,
        "color": "G"
      },
      {
        "x": 13,
        "y": 15,
        "color": "G"
      },
      {
        "x": 14,
        "y": 15,
        "color": "G"
      },
      {
        "x": 15,
        "y": 15,
        "color": "G"
      }
    ],
    "slots": 3,
    "packets": [
      {
        "color": "G",
        "count": 3,
        "id": "P1"
      },
      {
        "color": "Y",
        "count": 96,
        "id": "P2"
      },
      {
        "color": "G",
        "count": 18,
        "id": "P3"
      },
      {
        "color": "G",
        "count": 5,
        "id": "P4"
      },
      {
        "color": "B",
        "count": 112,
        "id": "P5"
      },
      {
        "color": "R",
        "count": 16,
        "id": "P6"
      },
      {
        "color": "G",
        "count": 6,
        "id": "P7"
      }
    ],
    "witness": [
      "P5",
      "P2",
      "P6",
      "P3",
      "P7",
      "P4",
      "P1"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "P1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 7
      },
      "meaningfulBranches": 21
    }
  },
  {
    "id": "bridge-07",
    "mode": "bridge",
    "name": "糖果火箭",
    "story": "这盒「糖果火箭」，是你亲手装好的第 7 幅糖画。",
    "focus": "先装得多，未必能先腾出位置。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBYYYYBBBBBB",
      "BBBBBBYYYYBBBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBGGYYYYYYYYGGBB",
      "BBGGYYYYYYYYGGBB",
      "BBGGYYBBBBYYGGBB",
      "BBGGYYBBBBYYGGBB",
      "BBGGYYYYYYYYGGBB",
      "BBGGYYYYYYYYGGBB",
      "BBRRRRRRRRRRRRBB",
      "BBRRRRRRRRRRRRBB",
      "BBBBRRYYYYRRBBBB",
      "BBBBRRYYYYRRBBBB",
      "BBBBYYBBBBYYBBBB",
      "BBBBYYBBBBYYBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "B"
      },
      {
        "x": 3,
        "y": 2,
        "color": "B"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 2,
        "color": "B"
      },
      {
        "x": 13,
        "y": 2,
        "color": "B"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "B"
      },
      {
        "x": 3,
        "y": 3,
        "color": "B"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 3,
        "color": "B"
      },
      {
        "x": 13,
        "y": 3,
        "color": "B"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "G"
      },
      {
        "x": 3,
        "y": 4,
        "color": "G"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 4,
        "color": "G"
      },
      {
        "x": 13,
        "y": 4,
        "color": "G"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "G"
      },
      {
        "x": 3,
        "y": 5,
        "color": "G"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 5,
        "color": "G"
      },
      {
        "x": 13,
        "y": 5,
        "color": "G"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "G"
      },
      {
        "x": 3,
        "y": 6,
        "color": "G"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 8,
        "y": 6,
        "color": "B"
      },
      {
        "x": 9,
        "y": 6,
        "color": "B"
      },
      {
        "x": 10,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 6,
        "color": "G"
      },
      {
        "x": 13,
        "y": 6,
        "color": "G"
      },
      {
        "x": 14,
        "y": 6,
        "color": "B"
      },
      {
        "x": 15,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      },
      {
        "x": 8,
        "y": 7,
        "color": "B"
      },
      {
        "x": 9,
        "y": 7,
        "color": "B"
      },
      {
        "x": 10,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 7,
        "color": "G"
      },
      {
        "x": 13,
        "y": 7,
        "color": "G"
      },
      {
        "x": 14,
        "y": 7,
        "color": "B"
      },
      {
        "x": 15,
        "y": 7,
        "color": "B"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "G"
      },
      {
        "x": 3,
        "y": 8,
        "color": "G"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "G"
      },
      {
        "x": 13,
        "y": 8,
        "color": "G"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "G"
      },
      {
        "x": 3,
        "y": 9,
        "color": "G"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "G"
      },
      {
        "x": 13,
        "y": 9,
        "color": "G"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "R"
      },
      {
        "x": 3,
        "y": 10,
        "color": "R"
      },
      {
        "x": 4,
        "y": 10,
        "color": "R"
      },
      {
        "x": 5,
        "y": 10,
        "color": "R"
      },
      {
        "x": 6,
        "y": 10,
        "color": "R"
      },
      {
        "x": 7,
        "y": 10,
        "color": "R"
      },
      {
        "x": 8,
        "y": 10,
        "color": "R"
      },
      {
        "x": 9,
        "y": 10,
        "color": "R"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "R"
      },
      {
        "x": 13,
        "y": 10,
        "color": "R"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "R"
      },
      {
        "x": 3,
        "y": 11,
        "color": "R"
      },
      {
        "x": 4,
        "y": 11,
        "color": "R"
      },
      {
        "x": 5,
        "y": 11,
        "color": "R"
      },
      {
        "x": 6,
        "y": 11,
        "color": "R"
      },
      {
        "x": 7,
        "y": 11,
        "color": "R"
      },
      {
        "x": 8,
        "y": 11,
        "color": "R"
      },
      {
        "x": 9,
        "y": 11,
        "color": "R"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "R"
      },
      {
        "x": 13,
        "y": 11,
        "color": "R"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "B"
      },
      {
        "x": 3,
        "y": 12,
        "color": "B"
      },
      {
        "x": 4,
        "y": 12,
        "color": "R"
      },
      {
        "x": 5,
        "y": 12,
        "color": "R"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "R"
      },
      {
        "x": 11,
        "y": 12,
        "color": "R"
      },
      {
        "x": 12,
        "y": 12,
        "color": "B"
      },
      {
        "x": 13,
        "y": 12,
        "color": "B"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "B"
      },
      {
        "x": 3,
        "y": 13,
        "color": "B"
      },
      {
        "x": 4,
        "y": 13,
        "color": "R"
      },
      {
        "x": 5,
        "y": 13,
        "color": "R"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "R"
      },
      {
        "x": 11,
        "y": 13,
        "color": "R"
      },
      {
        "x": 12,
        "y": 13,
        "color": "B"
      },
      {
        "x": 13,
        "y": 13,
        "color": "B"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "B"
      },
      {
        "x": 1,
        "y": 14,
        "color": "B"
      },
      {
        "x": 2,
        "y": 14,
        "color": "B"
      },
      {
        "x": 3,
        "y": 14,
        "color": "B"
      },
      {
        "x": 4,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 14,
        "color": "B"
      },
      {
        "x": 7,
        "y": 14,
        "color": "B"
      },
      {
        "x": 8,
        "y": 14,
        "color": "B"
      },
      {
        "x": 9,
        "y": 14,
        "color": "B"
      },
      {
        "x": 10,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 14,
        "color": "B"
      },
      {
        "x": 13,
        "y": 14,
        "color": "B"
      },
      {
        "x": 14,
        "y": 14,
        "color": "B"
      },
      {
        "x": 15,
        "y": 14,
        "color": "B"
      },
      {
        "x": 0,
        "y": 15,
        "color": "B"
      },
      {
        "x": 1,
        "y": 15,
        "color": "B"
      },
      {
        "x": 2,
        "y": 15,
        "color": "B"
      },
      {
        "x": 3,
        "y": 15,
        "color": "B"
      },
      {
        "x": 4,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 15,
        "color": "B"
      },
      {
        "x": 7,
        "y": 15,
        "color": "B"
      },
      {
        "x": 8,
        "y": 15,
        "color": "B"
      },
      {
        "x": 9,
        "y": 15,
        "color": "B"
      },
      {
        "x": 10,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 15,
        "color": "B"
      },
      {
        "x": 13,
        "y": 15,
        "color": "B"
      },
      {
        "x": 14,
        "y": 15,
        "color": "B"
      },
      {
        "x": 15,
        "y": 15,
        "color": "B"
      }
    ],
    "slots": 3,
    "packets": [
      {
        "color": "B",
        "count": 120,
        "id": "P1"
      },
      {
        "color": "Y",
        "count": 29,
        "id": "P2"
      },
      {
        "color": "R",
        "count": 4,
        "id": "P3"
      },
      {
        "color": "G",
        "count": 8,
        "id": "P4"
      },
      {
        "color": "Y",
        "count": 51,
        "id": "P5"
      },
      {
        "color": "G",
        "count": 16,
        "id": "P6"
      },
      {
        "color": "R",
        "count": 13,
        "id": "P7"
      },
      {
        "color": "R",
        "count": 15,
        "id": "P8"
      }
    ],
    "witness": [
      "P1",
      "P2",
      "P4",
      "P5",
      "P6",
      "P8",
      "P7",
      "P3"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "P3",
        "filled": 0,
        "status": "playing",
        "proofNodes": 10
      },
      "meaningfulBranches": 27
    }
  },
  {
    "id": "bridge-08",
    "mode": "bridge",
    "name": "玫瑰花窗",
    "story": "这盒「玫瑰花窗」，是你亲手装好的第 8 幅糖画。",
    "focus": "看清后面的几排，让三只料筒接力。",
    "width": 16,
    "height": 16,
    "grid": [
      "GGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGG",
      "GGYYYYYYYYYYYYGG",
      "GGYYYYYYYYYYYYGG",
      "GGYYRRRRRRRRYYGG",
      "GGYYRRRRRRRRYYGG",
      "GGYYRRBBBBRRYYGG",
      "GGYYRRBBBBRRYYGG",
      "GGYYRRBBBBRRYYGG",
      "GGYYRRBBBBRRYYGG",
      "GGYYRRRRRRRRYYGG",
      "GGYYRRRRRRRRYYGG",
      "GGYYYYYYYYYYYYGG",
      "GGYYYYYYYYYYYYGG",
      "GGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "G"
      },
      {
        "x": 1,
        "y": 0,
        "color": "G"
      },
      {
        "x": 2,
        "y": 0,
        "color": "G"
      },
      {
        "x": 3,
        "y": 0,
        "color": "G"
      },
      {
        "x": 4,
        "y": 0,
        "color": "G"
      },
      {
        "x": 5,
        "y": 0,
        "color": "G"
      },
      {
        "x": 6,
        "y": 0,
        "color": "G"
      },
      {
        "x": 7,
        "y": 0,
        "color": "G"
      },
      {
        "x": 8,
        "y": 0,
        "color": "G"
      },
      {
        "x": 9,
        "y": 0,
        "color": "G"
      },
      {
        "x": 10,
        "y": 0,
        "color": "G"
      },
      {
        "x": 11,
        "y": 0,
        "color": "G"
      },
      {
        "x": 12,
        "y": 0,
        "color": "G"
      },
      {
        "x": 13,
        "y": 0,
        "color": "G"
      },
      {
        "x": 14,
        "y": 0,
        "color": "G"
      },
      {
        "x": 15,
        "y": 0,
        "color": "G"
      },
      {
        "x": 0,
        "y": 1,
        "color": "G"
      },
      {
        "x": 1,
        "y": 1,
        "color": "G"
      },
      {
        "x": 2,
        "y": 1,
        "color": "G"
      },
      {
        "x": 3,
        "y": 1,
        "color": "G"
      },
      {
        "x": 4,
        "y": 1,
        "color": "G"
      },
      {
        "x": 5,
        "y": 1,
        "color": "G"
      },
      {
        "x": 6,
        "y": 1,
        "color": "G"
      },
      {
        "x": 7,
        "y": 1,
        "color": "G"
      },
      {
        "x": 8,
        "y": 1,
        "color": "G"
      },
      {
        "x": 9,
        "y": 1,
        "color": "G"
      },
      {
        "x": 10,
        "y": 1,
        "color": "G"
      },
      {
        "x": 11,
        "y": 1,
        "color": "G"
      },
      {
        "x": 12,
        "y": 1,
        "color": "G"
      },
      {
        "x": 13,
        "y": 1,
        "color": "G"
      },
      {
        "x": 14,
        "y": 1,
        "color": "G"
      },
      {
        "x": 15,
        "y": 1,
        "color": "G"
      },
      {
        "x": 0,
        "y": 2,
        "color": "G"
      },
      {
        "x": 1,
        "y": 2,
        "color": "G"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 2,
        "color": "G"
      },
      {
        "x": 15,
        "y": 2,
        "color": "G"
      },
      {
        "x": 0,
        "y": 3,
        "color": "G"
      },
      {
        "x": 1,
        "y": 3,
        "color": "G"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 3,
        "color": "G"
      },
      {
        "x": 15,
        "y": 3,
        "color": "G"
      },
      {
        "x": 0,
        "y": 4,
        "color": "G"
      },
      {
        "x": 1,
        "y": 4,
        "color": "G"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "R"
      },
      {
        "x": 8,
        "y": 4,
        "color": "R"
      },
      {
        "x": 9,
        "y": 4,
        "color": "R"
      },
      {
        "x": 10,
        "y": 4,
        "color": "R"
      },
      {
        "x": 11,
        "y": 4,
        "color": "R"
      },
      {
        "x": 12,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 4,
        "color": "G"
      },
      {
        "x": 15,
        "y": 4,
        "color": "G"
      },
      {
        "x": 0,
        "y": 5,
        "color": "G"
      },
      {
        "x": 1,
        "y": 5,
        "color": "G"
      },
      {
        "x": 2,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "R"
      },
      {
        "x": 7,
        "y": 5,
        "color": "R"
      },
      {
        "x": 8,
        "y": 5,
        "color": "R"
      },
      {
        "x": 9,
        "y": 5,
        "color": "R"
      },
      {
        "x": 10,
        "y": 5,
        "color": "R"
      },
      {
        "x": 11,
        "y": 5,
        "color": "R"
      },
      {
        "x": 12,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 5,
        "color": "G"
      },
      {
        "x": 15,
        "y": 5,
        "color": "G"
      },
      {
        "x": 0,
        "y": 6,
        "color": "G"
      },
      {
        "x": 1,
        "y": 6,
        "color": "G"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 8,
        "y": 6,
        "color": "B"
      },
      {
        "x": 9,
        "y": 6,
        "color": "B"
      },
      {
        "x": 10,
        "y": 6,
        "color": "R"
      },
      {
        "x": 11,
        "y": 6,
        "color": "R"
      },
      {
        "x": 12,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 6,
        "color": "G"
      },
      {
        "x": 15,
        "y": 6,
        "color": "G"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      },
      {
        "x": 8,
        "y": 7,
        "color": "B"
      },
      {
        "x": 9,
        "y": 7,
        "color": "B"
      },
      {
        "x": 10,
        "y": 7,
        "color": "R"
      },
      {
        "x": 11,
        "y": 7,
        "color": "R"
      },
      {
        "x": 12,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 7,
        "color": "G"
      },
      {
        "x": 15,
        "y": 7,
        "color": "G"
      },
      {
        "x": 0,
        "y": 8,
        "color": "G"
      },
      {
        "x": 1,
        "y": 8,
        "color": "G"
      },
      {
        "x": 2,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 8,
        "color": "R"
      },
      {
        "x": 5,
        "y": 8,
        "color": "R"
      },
      {
        "x": 6,
        "y": 8,
        "color": "B"
      },
      {
        "x": 7,
        "y": 8,
        "color": "B"
      },
      {
        "x": 8,
        "y": 8,
        "color": "B"
      },
      {
        "x": 9,
        "y": 8,
        "color": "B"
      },
      {
        "x": 10,
        "y": 8,
        "color": "R"
      },
      {
        "x": 11,
        "y": 8,
        "color": "R"
      },
      {
        "x": 12,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 8,
        "color": "G"
      },
      {
        "x": 15,
        "y": 8,
        "color": "G"
      },
      {
        "x": 0,
        "y": 9,
        "color": "G"
      },
      {
        "x": 1,
        "y": 9,
        "color": "G"
      },
      {
        "x": 2,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 9,
        "color": "R"
      },
      {
        "x": 5,
        "y": 9,
        "color": "R"
      },
      {
        "x": 6,
        "y": 9,
        "color": "B"
      },
      {
        "x": 7,
        "y": 9,
        "color": "B"
      },
      {
        "x": 8,
        "y": 9,
        "color": "B"
      },
      {
        "x": 9,
        "y": 9,
        "color": "B"
      },
      {
        "x": 10,
        "y": 9,
        "color": "R"
      },
      {
        "x": 11,
        "y": 9,
        "color": "R"
      },
      {
        "x": 12,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 9,
        "color": "G"
      },
      {
        "x": 15,
        "y": 9,
        "color": "G"
      },
      {
        "x": 0,
        "y": 10,
        "color": "G"
      },
      {
        "x": 1,
        "y": 10,
        "color": "G"
      },
      {
        "x": 2,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 10,
        "color": "R"
      },
      {
        "x": 5,
        "y": 10,
        "color": "R"
      },
      {
        "x": 6,
        "y": 10,
        "color": "R"
      },
      {
        "x": 7,
        "y": 10,
        "color": "R"
      },
      {
        "x": 8,
        "y": 10,
        "color": "R"
      },
      {
        "x": 9,
        "y": 10,
        "color": "R"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 10,
        "color": "G"
      },
      {
        "x": 15,
        "y": 10,
        "color": "G"
      },
      {
        "x": 0,
        "y": 11,
        "color": "G"
      },
      {
        "x": 1,
        "y": 11,
        "color": "G"
      },
      {
        "x": 2,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 11,
        "color": "R"
      },
      {
        "x": 5,
        "y": 11,
        "color": "R"
      },
      {
        "x": 6,
        "y": 11,
        "color": "R"
      },
      {
        "x": 7,
        "y": 11,
        "color": "R"
      },
      {
        "x": 8,
        "y": 11,
        "color": "R"
      },
      {
        "x": 9,
        "y": 11,
        "color": "R"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 11,
        "color": "G"
      },
      {
        "x": 15,
        "y": 11,
        "color": "G"
      },
      {
        "x": 0,
        "y": 12,
        "color": "G"
      },
      {
        "x": 1,
        "y": 12,
        "color": "G"
      },
      {
        "x": 2,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 12,
        "color": "G"
      },
      {
        "x": 15,
        "y": 12,
        "color": "G"
      },
      {
        "x": 0,
        "y": 13,
        "color": "G"
      },
      {
        "x": 1,
        "y": 13,
        "color": "G"
      },
      {
        "x": 2,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 13,
        "color": "G"
      },
      {
        "x": 15,
        "y": 13,
        "color": "G"
      },
      {
        "x": 0,
        "y": 14,
        "color": "G"
      },
      {
        "x": 1,
        "y": 14,
        "color": "G"
      },
      {
        "x": 2,
        "y": 14,
        "color": "G"
      },
      {
        "x": 3,
        "y": 14,
        "color": "G"
      },
      {
        "x": 4,
        "y": 14,
        "color": "G"
      },
      {
        "x": 5,
        "y": 14,
        "color": "G"
      },
      {
        "x": 6,
        "y": 14,
        "color": "G"
      },
      {
        "x": 7,
        "y": 14,
        "color": "G"
      },
      {
        "x": 8,
        "y": 14,
        "color": "G"
      },
      {
        "x": 9,
        "y": 14,
        "color": "G"
      },
      {
        "x": 10,
        "y": 14,
        "color": "G"
      },
      {
        "x": 11,
        "y": 14,
        "color": "G"
      },
      {
        "x": 12,
        "y": 14,
        "color": "G"
      },
      {
        "x": 13,
        "y": 14,
        "color": "G"
      },
      {
        "x": 14,
        "y": 14,
        "color": "G"
      },
      {
        "x": 15,
        "y": 14,
        "color": "G"
      },
      {
        "x": 0,
        "y": 15,
        "color": "G"
      },
      {
        "x": 1,
        "y": 15,
        "color": "G"
      },
      {
        "x": 2,
        "y": 15,
        "color": "G"
      },
      {
        "x": 3,
        "y": 15,
        "color": "G"
      },
      {
        "x": 4,
        "y": 15,
        "color": "G"
      },
      {
        "x": 5,
        "y": 15,
        "color": "G"
      },
      {
        "x": 6,
        "y": 15,
        "color": "G"
      },
      {
        "x": 7,
        "y": 15,
        "color": "G"
      },
      {
        "x": 8,
        "y": 15,
        "color": "G"
      },
      {
        "x": 9,
        "y": 15,
        "color": "G"
      },
      {
        "x": 10,
        "y": 15,
        "color": "G"
      },
      {
        "x": 11,
        "y": 15,
        "color": "G"
      },
      {
        "x": 12,
        "y": 15,
        "color": "G"
      },
      {
        "x": 13,
        "y": 15,
        "color": "G"
      },
      {
        "x": 14,
        "y": 15,
        "color": "G"
      },
      {
        "x": 15,
        "y": 15,
        "color": "G"
      }
    ],
    "slots": 3,
    "packets": [
      {
        "color": "R",
        "count": 24,
        "id": "P1"
      },
      {
        "color": "B",
        "count": 3,
        "id": "P2"
      },
      {
        "color": "B",
        "count": 2,
        "id": "P3"
      },
      {
        "color": "B",
        "count": 10,
        "id": "P4"
      },
      {
        "color": "R",
        "count": 20,
        "id": "P5"
      },
      {
        "color": "B",
        "count": 1,
        "id": "P6"
      },
      {
        "color": "G",
        "count": 25,
        "id": "P7"
      },
      {
        "color": "R",
        "count": 1,
        "id": "P8"
      },
      {
        "color": "Y",
        "count": 36,
        "id": "P9"
      },
      {
        "color": "R",
        "count": 3,
        "id": "P10"
      },
      {
        "color": "Y",
        "count": 25,
        "id": "P11"
      },
      {
        "color": "G",
        "count": 87,
        "id": "P12"
      },
      {
        "color": "Y",
        "count": 19,
        "id": "P13"
      }
    ],
    "witness": [
      "P12",
      "P11",
      "P5",
      "P13",
      "P2",
      "P3",
      "P10",
      "P6",
      "P8",
      "P4",
      "P1",
      "P9",
      "P7"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "P2",
        "filled": 0,
        "status": "playing",
        "proofNodes": 50
      },
      "meaningfulBranches": 75
    }
  },
  {
    "id": "trays-01",
    "mode": "trays",
    "name": "四味礼笺",
    "story": "这盒「四味礼笺」，是你亲手装好的第 1 幅糖画。",
    "focus": "点一张空纸托，来糖会自己找到它。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRYYYY",
      "RRRRYYYY",
      "RRRRYYYY",
      "RRRRYYYY",
      "BBBBGGGG",
      "BBBBGGGG",
      "BBBBGGGG",
      "BBBBGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "R"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "R"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "G"
      },
      {
        "x": 5,
        "y": 4,
        "color": "G"
      },
      {
        "x": 6,
        "y": 4,
        "color": "G"
      },
      {
        "x": 7,
        "y": 4,
        "color": "G"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "G"
      },
      {
        "x": 5,
        "y": 5,
        "color": "G"
      },
      {
        "x": 6,
        "y": 5,
        "color": "G"
      },
      {
        "x": 7,
        "y": 5,
        "color": "G"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "G"
      },
      {
        "x": 5,
        "y": 6,
        "color": "G"
      },
      {
        "x": 6,
        "y": 6,
        "color": "G"
      },
      {
        "x": 7,
        "y": 6,
        "color": "G"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      }
    ],
    "slots": 2,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          8,
          9,
          10,
          11,
          16,
          17,
          18,
          19,
          24,
          25,
          26,
          27
        ]
      },
      {
        "id": "T2",
        "cells": [
          4,
          5,
          6,
          7,
          12,
          13,
          14,
          15,
          20,
          21,
          22,
          23,
          28,
          29,
          30,
          31
        ]
      },
      {
        "id": "T3",
        "cells": [
          32,
          33,
          34,
          35,
          40,
          41,
          42,
          43,
          48,
          49,
          50,
          51,
          56,
          57,
          58,
          59
        ]
      },
      {
        "id": "T4",
        "cells": [
          36,
          37,
          38,
          39,
          44,
          45,
          46,
          47,
          52,
          53,
          54,
          55,
          60,
          61,
          62,
          63
        ]
      }
    ],
    "stream": [
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B"
    ],
    "witness": [
      "T2",
      "T1",
      "T4",
      "T3"
    ],
    "analysis": {
      "badChoice": null,
      "meaningfulBranches": 6
    }
  },
  {
    "id": "trays-02",
    "mode": "trays",
    "name": "花瓣拼盘",
    "story": "这盒「花瓣拼盘」，是你亲手装好的第 2 幅糖画。",
    "focus": "混色纸托会等待下一批糖，装满自己回盒。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRYYYYBB",
      "RRRYYBBB",
      "YRRYYBBY",
      "YYYYYYYY",
      "YYYYYYYY",
      "YGGYYRRY",
      "GGGYYRRR",
      "GGYYYYRR"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "B"
      },
      {
        "x": 6,
        "y": 2,
        "color": "B"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 5,
        "color": "G"
      },
      {
        "x": 2,
        "y": 5,
        "color": "G"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "R"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 6,
        "color": "G"
      },
      {
        "x": 1,
        "y": 6,
        "color": "G"
      },
      {
        "x": 2,
        "y": 6,
        "color": "G"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      }
    ],
    "slots": 2,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          8,
          9,
          10,
          11,
          16,
          17,
          18,
          19,
          24,
          25,
          26,
          27
        ]
      },
      {
        "id": "T2",
        "cells": [
          4,
          5,
          6,
          7,
          12,
          13,
          14,
          15,
          20,
          21,
          22,
          23,
          28,
          29,
          30,
          31
        ]
      },
      {
        "id": "T3",
        "cells": [
          32,
          33,
          34,
          35,
          40,
          41,
          42,
          43,
          48,
          49,
          50,
          51,
          56,
          57,
          58,
          59
        ]
      },
      {
        "id": "T4",
        "cells": [
          36,
          37,
          38,
          39,
          44,
          45,
          46,
          47,
          52,
          53,
          54,
          55,
          60,
          61,
          62,
          63
        ]
      }
    ],
    "stream": [
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y"
    ],
    "witness": [
      "T1",
      "T2",
      "T4",
      "T3"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T3",
        "filled": 9,
        "status": "playing",
        "proofNodes": 1
      },
      "meaningfulBranches": 5
    }
  },
  {
    "id": "trays-03",
    "mode": "trays",
    "name": "莓果双拼",
    "story": "这盒「莓果双拼」，是你亲手装好的第 3 幅糖画。",
    "focus": "两张莓果托一起上，会挡住后面的柠檬糖。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRBBBB",
      "RRRRBBBB",
      "YYYYYYYY",
      "YYYYYYYY",
      "YYYYYYYY",
      "YYYYYYYY",
      "BBBBRRRR",
      "BBBBRRRR"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      }
    ],
    "slots": 2,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ]
      },
      {
        "id": "T2",
        "cells": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ]
      },
      {
        "id": "T3",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47
        ]
      }
    ],
    "stream": [
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B"
    ],
    "witness": [
      "T1",
      "T3",
      "T2"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [
          "T1"
        ],
        "action": "T2",
        "filled": 8,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 2
    }
  },
  {
    "id": "trays-04",
    "mode": "trays",
    "name": "兔耳糖盒",
    "story": "这盒「兔耳糖盒」，是你亲手装好的第 4 幅糖画。",
    "focus": "看清传送带上的下一批，再安排纸托。",
    "width": 8,
    "height": 8,
    "grid": [
      "YRRYYRRY",
      "YRBYYBRY",
      "YRRYYRRY",
      "YRRRRRRY",
      "RRBRRBRR",
      "RRRRRRRR",
      "YRRBBRRY",
      "GGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "R"
      },
      {
        "x": 6,
        "y": 2,
        "color": "R"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "R"
      },
      {
        "x": 6,
        "y": 3,
        "color": "R"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "R"
      },
      {
        "x": 1,
        "y": 4,
        "color": "R"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "R"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "R"
      },
      {
        "x": 0,
        "y": 5,
        "color": "R"
      },
      {
        "x": 1,
        "y": 5,
        "color": "R"
      },
      {
        "x": 2,
        "y": 5,
        "color": "R"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "R"
      },
      {
        "x": 7,
        "y": 5,
        "color": "R"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "R"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      }
    ],
    "slots": 2,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          8,
          9,
          10,
          11
        ]
      },
      {
        "id": "T2",
        "cells": [
          4,
          5,
          6,
          7,
          12,
          13,
          14,
          15
        ]
      },
      {
        "id": "T3",
        "cells": [
          16,
          17,
          18,
          19,
          24,
          25,
          26,
          27
        ]
      },
      {
        "id": "T4",
        "cells": [
          20,
          21,
          22,
          23,
          28,
          29,
          30,
          31
        ]
      },
      {
        "id": "T5",
        "cells": [
          32,
          33,
          34,
          35,
          40,
          41,
          42,
          43
        ]
      },
      {
        "id": "T6",
        "cells": [
          36,
          37,
          38,
          39,
          44,
          45,
          46,
          47
        ]
      },
      {
        "id": "T7",
        "cells": [
          48,
          49,
          50,
          51,
          56,
          57,
          58,
          59
        ]
      },
      {
        "id": "T8",
        "cells": [
          52,
          53,
          54,
          55,
          60,
          61,
          62,
          63
        ]
      }
    ],
    "stream": [
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "Y",
      "B",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "B",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G"
    ],
    "witness": [
      "T1",
      "T5",
      "T3",
      "T2",
      "T6",
      "T7",
      "T4",
      "T8"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T7",
        "filled": 2,
        "status": "playing",
        "proofNodes": 7
      },
      "meaningfulBranches": 24
    }
  },
  {
    "id": "trays-05",
    "mode": "trays",
    "name": "生日蛋糕",
    "story": "这盒「生日蛋糕」，是你亲手装好的第 5 幅糖画。",
    "focus": "优先完成一张托，工位才能继续周转。",
    "width": 8,
    "height": 8,
    "grid": [
      "BBYBBYBB",
      "BBRBBRBB",
      "YYYYYYYY",
      "YRRRRRRY",
      "YYYYYYYY",
      "GGGGGGGG",
      "GYYYYYYG",
      "GGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "R"
      },
      {
        "x": 6,
        "y": 3,
        "color": "R"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "G"
      },
      {
        "x": 1,
        "y": 5,
        "color": "G"
      },
      {
        "x": 2,
        "y": 5,
        "color": "G"
      },
      {
        "x": 3,
        "y": 5,
        "color": "G"
      },
      {
        "x": 4,
        "y": 5,
        "color": "G"
      },
      {
        "x": 5,
        "y": 5,
        "color": "G"
      },
      {
        "x": 6,
        "y": 5,
        "color": "G"
      },
      {
        "x": 7,
        "y": 5,
        "color": "G"
      },
      {
        "x": 0,
        "y": 6,
        "color": "G"
      },
      {
        "x": 1,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 6,
        "color": "G"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      }
    ],
    "slots": 2,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          8,
          9,
          10,
          11
        ]
      },
      {
        "id": "T2",
        "cells": [
          4,
          5,
          6,
          7,
          12,
          13,
          14,
          15
        ]
      },
      {
        "id": "T3",
        "cells": [
          16,
          17,
          18,
          19,
          24,
          25,
          26,
          27
        ]
      },
      {
        "id": "T4",
        "cells": [
          20,
          21,
          22,
          23,
          28,
          29,
          30,
          31
        ]
      },
      {
        "id": "T5",
        "cells": [
          32,
          33,
          34,
          35,
          40,
          41,
          42,
          43
        ]
      },
      {
        "id": "T6",
        "cells": [
          36,
          37,
          38,
          39,
          44,
          45,
          46,
          47
        ]
      },
      {
        "id": "T7",
        "cells": [
          48,
          49,
          50,
          51,
          56,
          57,
          58,
          59
        ]
      },
      {
        "id": "T8",
        "cells": [
          52,
          53,
          54,
          55,
          60,
          61,
          62,
          63
        ]
      }
    ],
    "stream": [
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G",
      "G",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G"
    ],
    "witness": [
      "T7",
      "T3",
      "T8",
      "T4",
      "T1",
      "T5",
      "T2",
      "T6"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 1
      },
      "meaningfulBranches": 24
    }
  },
  {
    "id": "trays-06",
    "mode": "trays",
    "name": "草莓盆栽",
    "story": "这盒「草莓盆栽」，是你亲手装好的第 6 幅糖画。",
    "focus": "三张托并行，别让同一种需求挤满装填台。",
    "width": 16,
    "height": 16,
    "grid": [
      "YYYYYYYYYYYYYYYY",
      "YYYYYYYYYYYYYYYY",
      "YYYYGGGGGGGGYYYY",
      "YYYYGGGGGGGGYYYY",
      "YYGGRRRRRRRRGGYY",
      "YYGGRRRRRRRRGGYY",
      "YYRRRRBBRRRRRRYY",
      "YYRRRRBBRRRRRRYY",
      "YYRRRRRRRRBBRRYY",
      "YYRRRRRRRRBBRRYY",
      "YYYYRRRRRRRRYYYY",
      "YYYYRRRRRRRRYYYY",
      "BBBBBBYYYYBBBBBB",
      "BBBBBBYYYYBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "G"
      },
      {
        "x": 5,
        "y": 2,
        "color": "G"
      },
      {
        "x": 6,
        "y": 2,
        "color": "G"
      },
      {
        "x": 7,
        "y": 2,
        "color": "G"
      },
      {
        "x": 8,
        "y": 2,
        "color": "G"
      },
      {
        "x": 9,
        "y": 2,
        "color": "G"
      },
      {
        "x": 10,
        "y": 2,
        "color": "G"
      },
      {
        "x": 11,
        "y": 2,
        "color": "G"
      },
      {
        "x": 12,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "G"
      },
      {
        "x": 5,
        "y": 3,
        "color": "G"
      },
      {
        "x": 6,
        "y": 3,
        "color": "G"
      },
      {
        "x": 7,
        "y": 3,
        "color": "G"
      },
      {
        "x": 8,
        "y": 3,
        "color": "G"
      },
      {
        "x": 9,
        "y": 3,
        "color": "G"
      },
      {
        "x": 10,
        "y": 3,
        "color": "G"
      },
      {
        "x": 11,
        "y": 3,
        "color": "G"
      },
      {
        "x": 12,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "G"
      },
      {
        "x": 3,
        "y": 4,
        "color": "G"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "R"
      },
      {
        "x": 8,
        "y": 4,
        "color": "R"
      },
      {
        "x": 9,
        "y": 4,
        "color": "R"
      },
      {
        "x": 10,
        "y": 4,
        "color": "R"
      },
      {
        "x": 11,
        "y": 4,
        "color": "R"
      },
      {
        "x": 12,
        "y": 4,
        "color": "G"
      },
      {
        "x": 13,
        "y": 4,
        "color": "G"
      },
      {
        "x": 14,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 5,
        "color": "G"
      },
      {
        "x": 3,
        "y": 5,
        "color": "G"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "R"
      },
      {
        "x": 7,
        "y": 5,
        "color": "R"
      },
      {
        "x": 8,
        "y": 5,
        "color": "R"
      },
      {
        "x": 9,
        "y": 5,
        "color": "R"
      },
      {
        "x": 10,
        "y": 5,
        "color": "R"
      },
      {
        "x": 11,
        "y": 5,
        "color": "R"
      },
      {
        "x": 12,
        "y": 5,
        "color": "G"
      },
      {
        "x": 13,
        "y": 5,
        "color": "G"
      },
      {
        "x": 14,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "R"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 8,
        "y": 6,
        "color": "R"
      },
      {
        "x": 9,
        "y": 6,
        "color": "R"
      },
      {
        "x": 10,
        "y": 6,
        "color": "R"
      },
      {
        "x": 11,
        "y": 6,
        "color": "R"
      },
      {
        "x": 12,
        "y": 6,
        "color": "R"
      },
      {
        "x": 13,
        "y": 6,
        "color": "R"
      },
      {
        "x": 14,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "R"
      },
      {
        "x": 3,
        "y": 7,
        "color": "R"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      },
      {
        "x": 8,
        "y": 7,
        "color": "R"
      },
      {
        "x": 9,
        "y": 7,
        "color": "R"
      },
      {
        "x": 10,
        "y": 7,
        "color": "R"
      },
      {
        "x": 11,
        "y": 7,
        "color": "R"
      },
      {
        "x": 12,
        "y": 7,
        "color": "R"
      },
      {
        "x": 13,
        "y": 7,
        "color": "R"
      },
      {
        "x": 14,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 8,
        "color": "R"
      },
      {
        "x": 3,
        "y": 8,
        "color": "R"
      },
      {
        "x": 4,
        "y": 8,
        "color": "R"
      },
      {
        "x": 5,
        "y": 8,
        "color": "R"
      },
      {
        "x": 6,
        "y": 8,
        "color": "R"
      },
      {
        "x": 7,
        "y": 8,
        "color": "R"
      },
      {
        "x": 8,
        "y": 8,
        "color": "R"
      },
      {
        "x": 9,
        "y": 8,
        "color": "R"
      },
      {
        "x": 10,
        "y": 8,
        "color": "B"
      },
      {
        "x": 11,
        "y": 8,
        "color": "B"
      },
      {
        "x": 12,
        "y": 8,
        "color": "R"
      },
      {
        "x": 13,
        "y": 8,
        "color": "R"
      },
      {
        "x": 14,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 9,
        "color": "R"
      },
      {
        "x": 3,
        "y": 9,
        "color": "R"
      },
      {
        "x": 4,
        "y": 9,
        "color": "R"
      },
      {
        "x": 5,
        "y": 9,
        "color": "R"
      },
      {
        "x": 6,
        "y": 9,
        "color": "R"
      },
      {
        "x": 7,
        "y": 9,
        "color": "R"
      },
      {
        "x": 8,
        "y": 9,
        "color": "R"
      },
      {
        "x": 9,
        "y": 9,
        "color": "R"
      },
      {
        "x": 10,
        "y": 9,
        "color": "B"
      },
      {
        "x": 11,
        "y": 9,
        "color": "B"
      },
      {
        "x": 12,
        "y": 9,
        "color": "R"
      },
      {
        "x": 13,
        "y": 9,
        "color": "R"
      },
      {
        "x": 14,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 10,
        "color": "R"
      },
      {
        "x": 5,
        "y": 10,
        "color": "R"
      },
      {
        "x": 6,
        "y": 10,
        "color": "R"
      },
      {
        "x": 7,
        "y": 10,
        "color": "R"
      },
      {
        "x": 8,
        "y": 10,
        "color": "R"
      },
      {
        "x": 9,
        "y": 10,
        "color": "R"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 11,
        "color": "R"
      },
      {
        "x": 5,
        "y": 11,
        "color": "R"
      },
      {
        "x": 6,
        "y": 11,
        "color": "R"
      },
      {
        "x": 7,
        "y": 11,
        "color": "R"
      },
      {
        "x": 8,
        "y": 11,
        "color": "R"
      },
      {
        "x": 9,
        "y": 11,
        "color": "R"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "B"
      },
      {
        "x": 3,
        "y": 12,
        "color": "B"
      },
      {
        "x": 4,
        "y": 12,
        "color": "B"
      },
      {
        "x": 5,
        "y": 12,
        "color": "B"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "B"
      },
      {
        "x": 11,
        "y": 12,
        "color": "B"
      },
      {
        "x": 12,
        "y": 12,
        "color": "B"
      },
      {
        "x": 13,
        "y": 12,
        "color": "B"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "B"
      },
      {
        "x": 3,
        "y": 13,
        "color": "B"
      },
      {
        "x": 4,
        "y": 13,
        "color": "B"
      },
      {
        "x": 5,
        "y": 13,
        "color": "B"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "B"
      },
      {
        "x": 11,
        "y": 13,
        "color": "B"
      },
      {
        "x": 12,
        "y": 13,
        "color": "B"
      },
      {
        "x": 13,
        "y": 13,
        "color": "B"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "B"
      },
      {
        "x": 1,
        "y": 14,
        "color": "B"
      },
      {
        "x": 2,
        "y": 14,
        "color": "B"
      },
      {
        "x": 3,
        "y": 14,
        "color": "B"
      },
      {
        "x": 4,
        "y": 14,
        "color": "B"
      },
      {
        "x": 5,
        "y": 14,
        "color": "B"
      },
      {
        "x": 6,
        "y": 14,
        "color": "B"
      },
      {
        "x": 7,
        "y": 14,
        "color": "B"
      },
      {
        "x": 8,
        "y": 14,
        "color": "B"
      },
      {
        "x": 9,
        "y": 14,
        "color": "B"
      },
      {
        "x": 10,
        "y": 14,
        "color": "B"
      },
      {
        "x": 11,
        "y": 14,
        "color": "B"
      },
      {
        "x": 12,
        "y": 14,
        "color": "B"
      },
      {
        "x": 13,
        "y": 14,
        "color": "B"
      },
      {
        "x": 14,
        "y": 14,
        "color": "B"
      },
      {
        "x": 15,
        "y": 14,
        "color": "B"
      },
      {
        "x": 0,
        "y": 15,
        "color": "B"
      },
      {
        "x": 1,
        "y": 15,
        "color": "B"
      },
      {
        "x": 2,
        "y": 15,
        "color": "B"
      },
      {
        "x": 3,
        "y": 15,
        "color": "B"
      },
      {
        "x": 4,
        "y": 15,
        "color": "B"
      },
      {
        "x": 5,
        "y": 15,
        "color": "B"
      },
      {
        "x": 6,
        "y": 15,
        "color": "B"
      },
      {
        "x": 7,
        "y": 15,
        "color": "B"
      },
      {
        "x": 8,
        "y": 15,
        "color": "B"
      },
      {
        "x": 9,
        "y": 15,
        "color": "B"
      },
      {
        "x": 10,
        "y": 15,
        "color": "B"
      },
      {
        "x": 11,
        "y": 15,
        "color": "B"
      },
      {
        "x": 12,
        "y": 15,
        "color": "B"
      },
      {
        "x": 13,
        "y": 15,
        "color": "B"
      },
      {
        "x": 14,
        "y": 15,
        "color": "B"
      },
      {
        "x": 15,
        "y": 15,
        "color": "B"
      }
    ],
    "slots": 3,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ]
      },
      {
        "id": "T2",
        "cells": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ]
      },
      {
        "id": "T3",
        "cells": [
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          96,
          97,
          98,
          99,
          100,
          101,
          102,
          103,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119
        ]
      },
      {
        "id": "T4",
        "cells": [
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111,
          120,
          121,
          122,
          123,
          124,
          125,
          126,
          127
        ]
      },
      {
        "id": "T5",
        "cells": [
          128,
          129,
          130,
          131,
          132,
          133,
          134,
          135,
          144,
          145,
          146,
          147,
          148,
          149,
          150,
          151,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          176,
          177,
          178,
          179,
          180,
          181,
          182,
          183
        ]
      },
      {
        "id": "T6",
        "cells": [
          136,
          137,
          138,
          139,
          140,
          141,
          142,
          143,
          152,
          153,
          154,
          155,
          156,
          157,
          158,
          159,
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175,
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191
        ]
      },
      {
        "id": "T7",
        "cells": [
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          208,
          209,
          210,
          211,
          212,
          213,
          214,
          215,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247
        ]
      },
      {
        "id": "T8",
        "cells": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ]
      }
    ],
    "stream": [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y"
    ],
    "witness": [
      "T7",
      "T1",
      "T5",
      "T6",
      "T4",
      "T3",
      "T2",
      "T8"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T3",
        "filled": 4,
        "status": "playing",
        "proofNodes": 8
      },
      "meaningfulBranches": 26
    }
  },
  {
    "id": "trays-07",
    "mode": "trays",
    "name": "喵爪礼盒",
    "story": "这盒「喵爪礼盒」，是你亲手装好的第 7 幅糖画。",
    "focus": "看下一批糖，不只看眼前这一颗。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBRRRRBBBBRRRRBB",
      "BBRRRRBBBBRRRRBB",
      "BBRRRRBBBBRRRRBB",
      "BBRRRRBBBBRRRRBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBYYYYYYYYYYYYBB",
      "BBYYYYYYYYYYYYBB",
      "BBYYYYGGGGYYYYBB",
      "BBYYYYGGGGYYYYBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 8,
        "y": 0,
        "color": "B"
      },
      {
        "x": 9,
        "y": 0,
        "color": "B"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 8,
        "y": 1,
        "color": "B"
      },
      {
        "x": 9,
        "y": 1,
        "color": "B"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "R"
      },
      {
        "x": 5,
        "y": 2,
        "color": "R"
      },
      {
        "x": 6,
        "y": 2,
        "color": "B"
      },
      {
        "x": 7,
        "y": 2,
        "color": "B"
      },
      {
        "x": 8,
        "y": 2,
        "color": "B"
      },
      {
        "x": 9,
        "y": 2,
        "color": "B"
      },
      {
        "x": 10,
        "y": 2,
        "color": "R"
      },
      {
        "x": 11,
        "y": 2,
        "color": "R"
      },
      {
        "x": 12,
        "y": 2,
        "color": "R"
      },
      {
        "x": 13,
        "y": 2,
        "color": "R"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "R"
      },
      {
        "x": 6,
        "y": 3,
        "color": "B"
      },
      {
        "x": 7,
        "y": 3,
        "color": "B"
      },
      {
        "x": 8,
        "y": 3,
        "color": "B"
      },
      {
        "x": 9,
        "y": 3,
        "color": "B"
      },
      {
        "x": 10,
        "y": 3,
        "color": "R"
      },
      {
        "x": 11,
        "y": 3,
        "color": "R"
      },
      {
        "x": 12,
        "y": 3,
        "color": "R"
      },
      {
        "x": 13,
        "y": 3,
        "color": "R"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "R"
      },
      {
        "x": 3,
        "y": 4,
        "color": "R"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 8,
        "y": 4,
        "color": "B"
      },
      {
        "x": 9,
        "y": 4,
        "color": "B"
      },
      {
        "x": 10,
        "y": 4,
        "color": "R"
      },
      {
        "x": 11,
        "y": 4,
        "color": "R"
      },
      {
        "x": 12,
        "y": 4,
        "color": "R"
      },
      {
        "x": 13,
        "y": 4,
        "color": "R"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "R"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 8,
        "y": 5,
        "color": "B"
      },
      {
        "x": 9,
        "y": 5,
        "color": "B"
      },
      {
        "x": 10,
        "y": 5,
        "color": "R"
      },
      {
        "x": 11,
        "y": 5,
        "color": "R"
      },
      {
        "x": 12,
        "y": 5,
        "color": "R"
      },
      {
        "x": 13,
        "y": 5,
        "color": "R"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "B"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 8,
        "y": 6,
        "color": "B"
      },
      {
        "x": 9,
        "y": 6,
        "color": "B"
      },
      {
        "x": 10,
        "y": 6,
        "color": "B"
      },
      {
        "x": 11,
        "y": 6,
        "color": "B"
      },
      {
        "x": 12,
        "y": 6,
        "color": "B"
      },
      {
        "x": 13,
        "y": 6,
        "color": "B"
      },
      {
        "x": 14,
        "y": 6,
        "color": "B"
      },
      {
        "x": 15,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "B"
      },
      {
        "x": 5,
        "y": 7,
        "color": "B"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      },
      {
        "x": 8,
        "y": 7,
        "color": "B"
      },
      {
        "x": 9,
        "y": 7,
        "color": "B"
      },
      {
        "x": 10,
        "y": 7,
        "color": "B"
      },
      {
        "x": 11,
        "y": 7,
        "color": "B"
      },
      {
        "x": 12,
        "y": 7,
        "color": "B"
      },
      {
        "x": 13,
        "y": 7,
        "color": "B"
      },
      {
        "x": 14,
        "y": 7,
        "color": "B"
      },
      {
        "x": 15,
        "y": 7,
        "color": "B"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "B"
      },
      {
        "x": 3,
        "y": 8,
        "color": "B"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "B"
      },
      {
        "x": 13,
        "y": 8,
        "color": "B"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "B"
      },
      {
        "x": 3,
        "y": 9,
        "color": "B"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "B"
      },
      {
        "x": 13,
        "y": 9,
        "color": "B"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 12,
        "color": "G"
      },
      {
        "x": 7,
        "y": 12,
        "color": "G"
      },
      {
        "x": 8,
        "y": 12,
        "color": "G"
      },
      {
        "x": 9,
        "y": 12,
        "color": "G"
      },
      {
        "x": 10,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 13,
        "color": "G"
      },
      {
        "x": 7,
        "y": 13,
        "color": "G"
      },
      {
        "x": 8,
        "y": 13,
        "color": "G"
      },
      {
        "x": 9,
        "y": 13,
        "color": "G"
      },
      {
        "x": 10,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "B"
      },
      {
        "x": 1,
        "y": 14,
        "color": "B"
      },
      {
        "x": 2,
        "y": 14,
        "color": "B"
      },
      {
        "x": 3,
        "y": 14,
        "color": "B"
      },
      {
        "x": 4,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 14,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 14,
        "color": "B"
      },
      {
        "x": 13,
        "y": 14,
        "color": "B"
      },
      {
        "x": 14,
        "y": 14,
        "color": "B"
      },
      {
        "x": 15,
        "y": 14,
        "color": "B"
      },
      {
        "x": 0,
        "y": 15,
        "color": "B"
      },
      {
        "x": 1,
        "y": 15,
        "color": "B"
      },
      {
        "x": 2,
        "y": 15,
        "color": "B"
      },
      {
        "x": 3,
        "y": 15,
        "color": "B"
      },
      {
        "x": 4,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 15,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 15,
        "color": "B"
      },
      {
        "x": 13,
        "y": 15,
        "color": "B"
      },
      {
        "x": 14,
        "y": 15,
        "color": "B"
      },
      {
        "x": 15,
        "y": 15,
        "color": "B"
      }
    ],
    "slots": 3,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ]
      },
      {
        "id": "T2",
        "cells": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ]
      },
      {
        "id": "T3",
        "cells": [
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          96,
          97,
          98,
          99,
          100,
          101,
          102,
          103,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119
        ]
      },
      {
        "id": "T4",
        "cells": [
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111,
          120,
          121,
          122,
          123,
          124,
          125,
          126,
          127
        ]
      },
      {
        "id": "T5",
        "cells": [
          128,
          129,
          130,
          131,
          132,
          133,
          134,
          135,
          144,
          145,
          146,
          147,
          148,
          149,
          150,
          151,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          176,
          177,
          178,
          179,
          180,
          181,
          182,
          183
        ]
      },
      {
        "id": "T6",
        "cells": [
          136,
          137,
          138,
          139,
          140,
          141,
          142,
          143,
          152,
          153,
          154,
          155,
          156,
          157,
          158,
          159,
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175,
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191
        ]
      },
      {
        "id": "T7",
        "cells": [
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          208,
          209,
          210,
          211,
          212,
          213,
          214,
          215,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247
        ]
      },
      {
        "id": "T8",
        "cells": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ]
      }
    ],
    "stream": [
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "G",
      "G",
      "G",
      "G",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B"
    ],
    "witness": [
      "T5",
      "T7",
      "T8",
      "T1",
      "T2",
      "T3",
      "T4",
      "T6"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 8
      },
      "meaningfulBranches": 20
    }
  },
  {
    "id": "trays-08",
    "mode": "trays",
    "name": "游乐城堡",
    "story": "这盒「游乐城堡」，是你亲手装好的第 8 幅糖画。",
    "focus": "把最后几块糖画，连成完整的一盒。",
    "width": 16,
    "height": 16,
    "grid": [
      "RRYYYYRRRRYYYYRR",
      "RRYYYYRRRRYYYYRR",
      "RRRRRRRRRRRRRRRR",
      "RRRRRRRRRRRRRRRR",
      "BBRRRRBBBBRRRRBB",
      "BBRRRRBBBBRRRRBB",
      "BBRRRRGGGGRRRRBB",
      "BBRRRRGGGGRRRRBB",
      "BBRRRRGGGGRRRRBB",
      "BBRRRRGGGGRRRRBB",
      "BBRRRRRRRRRRRRBB",
      "BBRRRRRRRRRRRRBB",
      "YYYYYYYYYYYYYYYY",
      "YYYYYYYYYYYYYYYY",
      "GGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 8,
        "y": 0,
        "color": "R"
      },
      {
        "x": 9,
        "y": 0,
        "color": "R"
      },
      {
        "x": 10,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 0,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 0,
        "color": "R"
      },
      {
        "x": 15,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "R"
      },
      {
        "x": 8,
        "y": 1,
        "color": "R"
      },
      {
        "x": 9,
        "y": 1,
        "color": "R"
      },
      {
        "x": 10,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 1,
        "color": "R"
      },
      {
        "x": 15,
        "y": 1,
        "color": "R"
      },
      {
        "x": 0,
        "y": 2,
        "color": "R"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "R"
      },
      {
        "x": 5,
        "y": 2,
        "color": "R"
      },
      {
        "x": 6,
        "y": 2,
        "color": "R"
      },
      {
        "x": 7,
        "y": 2,
        "color": "R"
      },
      {
        "x": 8,
        "y": 2,
        "color": "R"
      },
      {
        "x": 9,
        "y": 2,
        "color": "R"
      },
      {
        "x": 10,
        "y": 2,
        "color": "R"
      },
      {
        "x": 11,
        "y": 2,
        "color": "R"
      },
      {
        "x": 12,
        "y": 2,
        "color": "R"
      },
      {
        "x": 13,
        "y": 2,
        "color": "R"
      },
      {
        "x": 14,
        "y": 2,
        "color": "R"
      },
      {
        "x": 15,
        "y": 2,
        "color": "R"
      },
      {
        "x": 0,
        "y": 3,
        "color": "R"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "R"
      },
      {
        "x": 6,
        "y": 3,
        "color": "R"
      },
      {
        "x": 7,
        "y": 3,
        "color": "R"
      },
      {
        "x": 8,
        "y": 3,
        "color": "R"
      },
      {
        "x": 9,
        "y": 3,
        "color": "R"
      },
      {
        "x": 10,
        "y": 3,
        "color": "R"
      },
      {
        "x": 11,
        "y": 3,
        "color": "R"
      },
      {
        "x": 12,
        "y": 3,
        "color": "R"
      },
      {
        "x": 13,
        "y": 3,
        "color": "R"
      },
      {
        "x": 14,
        "y": 3,
        "color": "R"
      },
      {
        "x": 15,
        "y": 3,
        "color": "R"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "R"
      },
      {
        "x": 3,
        "y": 4,
        "color": "R"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 8,
        "y": 4,
        "color": "B"
      },
      {
        "x": 9,
        "y": 4,
        "color": "B"
      },
      {
        "x": 10,
        "y": 4,
        "color": "R"
      },
      {
        "x": 11,
        "y": 4,
        "color": "R"
      },
      {
        "x": 12,
        "y": 4,
        "color": "R"
      },
      {
        "x": 13,
        "y": 4,
        "color": "R"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "R"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 8,
        "y": 5,
        "color": "B"
      },
      {
        "x": 9,
        "y": 5,
        "color": "B"
      },
      {
        "x": 10,
        "y": 5,
        "color": "R"
      },
      {
        "x": 11,
        "y": 5,
        "color": "R"
      },
      {
        "x": 12,
        "y": 5,
        "color": "R"
      },
      {
        "x": 13,
        "y": 5,
        "color": "R"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "R"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "G"
      },
      {
        "x": 7,
        "y": 6,
        "color": "G"
      },
      {
        "x": 8,
        "y": 6,
        "color": "G"
      },
      {
        "x": 9,
        "y": 6,
        "color": "G"
      },
      {
        "x": 10,
        "y": 6,
        "color": "R"
      },
      {
        "x": 11,
        "y": 6,
        "color": "R"
      },
      {
        "x": 12,
        "y": 6,
        "color": "R"
      },
      {
        "x": 13,
        "y": 6,
        "color": "R"
      },
      {
        "x": 14,
        "y": 6,
        "color": "B"
      },
      {
        "x": 15,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "R"
      },
      {
        "x": 3,
        "y": 7,
        "color": "R"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      },
      {
        "x": 8,
        "y": 7,
        "color": "G"
      },
      {
        "x": 9,
        "y": 7,
        "color": "G"
      },
      {
        "x": 10,
        "y": 7,
        "color": "R"
      },
      {
        "x": 11,
        "y": 7,
        "color": "R"
      },
      {
        "x": 12,
        "y": 7,
        "color": "R"
      },
      {
        "x": 13,
        "y": 7,
        "color": "R"
      },
      {
        "x": 14,
        "y": 7,
        "color": "B"
      },
      {
        "x": 15,
        "y": 7,
        "color": "B"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "R"
      },
      {
        "x": 3,
        "y": 8,
        "color": "R"
      },
      {
        "x": 4,
        "y": 8,
        "color": "R"
      },
      {
        "x": 5,
        "y": 8,
        "color": "R"
      },
      {
        "x": 6,
        "y": 8,
        "color": "G"
      },
      {
        "x": 7,
        "y": 8,
        "color": "G"
      },
      {
        "x": 8,
        "y": 8,
        "color": "G"
      },
      {
        "x": 9,
        "y": 8,
        "color": "G"
      },
      {
        "x": 10,
        "y": 8,
        "color": "R"
      },
      {
        "x": 11,
        "y": 8,
        "color": "R"
      },
      {
        "x": 12,
        "y": 8,
        "color": "R"
      },
      {
        "x": 13,
        "y": 8,
        "color": "R"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "R"
      },
      {
        "x": 3,
        "y": 9,
        "color": "R"
      },
      {
        "x": 4,
        "y": 9,
        "color": "R"
      },
      {
        "x": 5,
        "y": 9,
        "color": "R"
      },
      {
        "x": 6,
        "y": 9,
        "color": "G"
      },
      {
        "x": 7,
        "y": 9,
        "color": "G"
      },
      {
        "x": 8,
        "y": 9,
        "color": "G"
      },
      {
        "x": 9,
        "y": 9,
        "color": "G"
      },
      {
        "x": 10,
        "y": 9,
        "color": "R"
      },
      {
        "x": 11,
        "y": 9,
        "color": "R"
      },
      {
        "x": 12,
        "y": 9,
        "color": "R"
      },
      {
        "x": 13,
        "y": 9,
        "color": "R"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "R"
      },
      {
        "x": 3,
        "y": 10,
        "color": "R"
      },
      {
        "x": 4,
        "y": 10,
        "color": "R"
      },
      {
        "x": 5,
        "y": 10,
        "color": "R"
      },
      {
        "x": 6,
        "y": 10,
        "color": "R"
      },
      {
        "x": 7,
        "y": 10,
        "color": "R"
      },
      {
        "x": 8,
        "y": 10,
        "color": "R"
      },
      {
        "x": 9,
        "y": 10,
        "color": "R"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "R"
      },
      {
        "x": 13,
        "y": 10,
        "color": "R"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "R"
      },
      {
        "x": 3,
        "y": 11,
        "color": "R"
      },
      {
        "x": 4,
        "y": 11,
        "color": "R"
      },
      {
        "x": 5,
        "y": 11,
        "color": "R"
      },
      {
        "x": 6,
        "y": 11,
        "color": "R"
      },
      {
        "x": 7,
        "y": 11,
        "color": "R"
      },
      {
        "x": 8,
        "y": 11,
        "color": "R"
      },
      {
        "x": 9,
        "y": 11,
        "color": "R"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "R"
      },
      {
        "x": 13,
        "y": 11,
        "color": "R"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 14,
        "color": "G"
      },
      {
        "x": 1,
        "y": 14,
        "color": "G"
      },
      {
        "x": 2,
        "y": 14,
        "color": "G"
      },
      {
        "x": 3,
        "y": 14,
        "color": "G"
      },
      {
        "x": 4,
        "y": 14,
        "color": "G"
      },
      {
        "x": 5,
        "y": 14,
        "color": "G"
      },
      {
        "x": 6,
        "y": 14,
        "color": "G"
      },
      {
        "x": 7,
        "y": 14,
        "color": "G"
      },
      {
        "x": 8,
        "y": 14,
        "color": "G"
      },
      {
        "x": 9,
        "y": 14,
        "color": "G"
      },
      {
        "x": 10,
        "y": 14,
        "color": "G"
      },
      {
        "x": 11,
        "y": 14,
        "color": "G"
      },
      {
        "x": 12,
        "y": 14,
        "color": "G"
      },
      {
        "x": 13,
        "y": 14,
        "color": "G"
      },
      {
        "x": 14,
        "y": 14,
        "color": "G"
      },
      {
        "x": 15,
        "y": 14,
        "color": "G"
      },
      {
        "x": 0,
        "y": 15,
        "color": "G"
      },
      {
        "x": 1,
        "y": 15,
        "color": "G"
      },
      {
        "x": 2,
        "y": 15,
        "color": "G"
      },
      {
        "x": 3,
        "y": 15,
        "color": "G"
      },
      {
        "x": 4,
        "y": 15,
        "color": "G"
      },
      {
        "x": 5,
        "y": 15,
        "color": "G"
      },
      {
        "x": 6,
        "y": 15,
        "color": "G"
      },
      {
        "x": 7,
        "y": 15,
        "color": "G"
      },
      {
        "x": 8,
        "y": 15,
        "color": "G"
      },
      {
        "x": 9,
        "y": 15,
        "color": "G"
      },
      {
        "x": 10,
        "y": 15,
        "color": "G"
      },
      {
        "x": 11,
        "y": 15,
        "color": "G"
      },
      {
        "x": 12,
        "y": 15,
        "color": "G"
      },
      {
        "x": 13,
        "y": 15,
        "color": "G"
      },
      {
        "x": 14,
        "y": 15,
        "color": "G"
      },
      {
        "x": 15,
        "y": 15,
        "color": "G"
      }
    ],
    "slots": 3,
    "trays": [
      {
        "id": "T1",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ]
      },
      {
        "id": "T2",
        "cells": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ]
      },
      {
        "id": "T3",
        "cells": [
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          96,
          97,
          98,
          99,
          100,
          101,
          102,
          103,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119
        ]
      },
      {
        "id": "T4",
        "cells": [
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111,
          120,
          121,
          122,
          123,
          124,
          125,
          126,
          127
        ]
      },
      {
        "id": "T5",
        "cells": [
          128,
          129,
          130,
          131,
          132,
          133,
          134,
          135,
          144,
          145,
          146,
          147,
          148,
          149,
          150,
          151,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          176,
          177,
          178,
          179,
          180,
          181,
          182,
          183
        ]
      },
      {
        "id": "T6",
        "cells": [
          136,
          137,
          138,
          139,
          140,
          141,
          142,
          143,
          152,
          153,
          154,
          155,
          156,
          157,
          158,
          159,
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175,
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191
        ]
      },
      {
        "id": "T7",
        "cells": [
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          208,
          209,
          210,
          211,
          212,
          213,
          214,
          215,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247
        ]
      },
      {
        "id": "T8",
        "cells": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ]
      }
    ],
    "stream": [
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "G",
      "G",
      "G",
      "G",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "G",
      "G",
      "G",
      "G",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "G",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y",
      "Y"
    ],
    "witness": [
      "T7",
      "T3",
      "T4",
      "T5",
      "T1",
      "T6",
      "T2",
      "T8"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "T1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 8
      },
      "meaningfulBranches": 24
    }
  },
  {
    "id": "loop-01",
    "mode": "loop",
    "name": "三色旗盒",
    "story": "这盒「三色旗盒」，是你亲手装好的第 1 幅糖画。",
    "focus": "点一条来料带，整批糖自己上环道。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRRRRR",
      "RRRRRRRR",
      "YYYYYYYY",
      "YYYYYYYY",
      "BBBBBBBB",
      "BBBBBBBB",
      "BBBBBBBB",
      "BBBBBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "R"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "R"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "B"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "B"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "B"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "B"
      },
      {
        "x": 5,
        "y": 7,
        "color": "B"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      }
    ],
    "capacity": 12,
    "targets": [
      {
        "color": "R",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "id": "S3"
      },
      {
        "color": "Y",
        "cells": [
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S4"
      },
      {
        "color": "B",
        "cells": [
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39
        ],
        "id": "S5"
      },
      {
        "color": "B",
        "cells": [
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47
        ],
        "id": "S6"
      },
      {
        "color": "B",
        "cells": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ],
        "id": "S7"
      },
      {
        "color": "B",
        "cells": [
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ],
        "id": "S8"
      }
    ],
    "lanes": [
      [
        {
          "id": "L1P1",
          "color": "R",
          "count": 16
        },
        {
          "id": "L1P2",
          "color": "Y",
          "count": 16
        }
      ],
      [
        {
          "id": "L2P1",
          "color": "B",
          "count": 32
        }
      ]
    ],
    "witness": [
      "L1P1",
      "L1P2",
      "L2P1"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L2P1",
        "filled": 0,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 2
    }
  },
  {
    "id": "loop-02",
    "mode": "loop",
    "name": "彩虹阶梯",
    "story": "这盒「彩虹阶梯」，是你亲手装好的第 2 幅糖画。",
    "focus": "绕圈的糖会留下，下一张同色纸托会接住它。",
    "width": 8,
    "height": 8,
    "grid": [
      "RRRRRRRR",
      "RRRRYYYY",
      "RRYYYYYY",
      "YYYYYYYY",
      "YYYYBBBB",
      "YYBBBBBB",
      "BBBBBBBB",
      "BBBBBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 2,
        "color": "R"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "B"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "B"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "B"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "B"
      },
      {
        "x": 5,
        "y": 7,
        "color": "B"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      }
    ],
    "capacity": 12,
    "targets": [
      {
        "color": "R",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          8,
          9,
          10,
          11
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          12,
          13,
          14,
          15
        ],
        "id": "S3"
      },
      {
        "color": "R",
        "cells": [
          16,
          17
        ],
        "id": "S4"
      },
      {
        "color": "Y",
        "cells": [
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "id": "S5"
      },
      {
        "color": "Y",
        "cells": [
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S6"
      },
      {
        "color": "Y",
        "cells": [
          32,
          33,
          34,
          35
        ],
        "id": "S7"
      },
      {
        "color": "B",
        "cells": [
          36,
          37,
          38,
          39
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          40,
          41
        ],
        "id": "S9"
      },
      {
        "color": "B",
        "cells": [
          42,
          43,
          44,
          45,
          46,
          47
        ],
        "id": "S10"
      },
      {
        "color": "B",
        "cells": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ],
        "id": "S11"
      },
      {
        "color": "B",
        "cells": [
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ],
        "id": "S12"
      }
    ],
    "lanes": [
      [
        {
          "id": "L1P1",
          "color": "R",
          "count": 14
        },
        {
          "id": "L1P2",
          "color": "B",
          "count": 26
        }
      ],
      [
        {
          "id": "L2P1",
          "color": "Y",
          "count": 24
        }
      ]
    ],
    "witness": [
      "L1P1",
      "L2P1",
      "L1P2"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L2P1",
        "filled": 0,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 2
    }
  },
  {
    "id": "loop-03",
    "mode": "loop",
    "name": "甜蜜接力",
    "story": "这盒「甜蜜接力」，是你亲手装好的第 3 幅糖画。",
    "focus": "两条红糖带，哪条后面藏着黄色？",
    "width": 8,
    "height": 10,
    "grid": [
      "RRRRRRRR",
      "RRRRRRRR",
      "YYYYYYYY",
      "YYYYYYYY",
      "BBBBBBBB",
      "BBBBBBBB",
      "RRRRRRRR",
      "RRRRRRRR",
      "RRRRRRRR",
      "RRRRRRRR"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "R"
      },
      {
        "x": 1,
        "y": 0,
        "color": "R"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "R"
      },
      {
        "x": 7,
        "y": 0,
        "color": "R"
      },
      {
        "x": 0,
        "y": 1,
        "color": "R"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "R"
      },
      {
        "x": 4,
        "y": 1,
        "color": "R"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "R"
      },
      {
        "x": 0,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "B"
      },
      {
        "x": 5,
        "y": 4,
        "color": "B"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "B"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "R"
      },
      {
        "x": 1,
        "y": 6,
        "color": "R"
      },
      {
        "x": 2,
        "y": 6,
        "color": "R"
      },
      {
        "x": 3,
        "y": 6,
        "color": "R"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 0,
        "y": 7,
        "color": "R"
      },
      {
        "x": 1,
        "y": 7,
        "color": "R"
      },
      {
        "x": 2,
        "y": 7,
        "color": "R"
      },
      {
        "x": 3,
        "y": 7,
        "color": "R"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      },
      {
        "x": 0,
        "y": 8,
        "color": "R"
      },
      {
        "x": 1,
        "y": 8,
        "color": "R"
      },
      {
        "x": 2,
        "y": 8,
        "color": "R"
      },
      {
        "x": 3,
        "y": 8,
        "color": "R"
      },
      {
        "x": 4,
        "y": 8,
        "color": "R"
      },
      {
        "x": 5,
        "y": 8,
        "color": "R"
      },
      {
        "x": 6,
        "y": 8,
        "color": "R"
      },
      {
        "x": 7,
        "y": 8,
        "color": "R"
      },
      {
        "x": 0,
        "y": 9,
        "color": "R"
      },
      {
        "x": 1,
        "y": 9,
        "color": "R"
      },
      {
        "x": 2,
        "y": 9,
        "color": "R"
      },
      {
        "x": 3,
        "y": 9,
        "color": "R"
      },
      {
        "x": 4,
        "y": 9,
        "color": "R"
      },
      {
        "x": 5,
        "y": 9,
        "color": "R"
      },
      {
        "x": 6,
        "y": 9,
        "color": "R"
      },
      {
        "x": 7,
        "y": 9,
        "color": "R"
      }
    ],
    "capacity": 32,
    "targets": [
      {
        "color": "R",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "id": "S3"
      },
      {
        "color": "Y",
        "cells": [
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S4"
      },
      {
        "color": "B",
        "cells": [
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39
        ],
        "id": "S5"
      },
      {
        "color": "B",
        "cells": [
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47
        ],
        "id": "S6"
      },
      {
        "color": "R",
        "cells": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ],
        "id": "S7"
      },
      {
        "color": "R",
        "cells": [
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ],
        "id": "S8"
      },
      {
        "color": "R",
        "cells": [
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71
        ],
        "id": "S9"
      },
      {
        "color": "R",
        "cells": [
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79
        ],
        "id": "S10"
      }
    ],
    "lanes": [
      [
        {
          "id": "L1P1",
          "color": "R",
          "count": 16
        }
      ],
      [
        {
          "id": "L2P1",
          "color": "R",
          "count": 32
        },
        {
          "id": "L2P2",
          "color": "Y",
          "count": 16
        }
      ],
      [
        {
          "id": "L3P1",
          "color": "B",
          "count": 16
        }
      ]
    ],
    "witness": [
      "L2P1",
      "L2P2",
      "L3P1",
      "L1P1"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L1P1",
        "filled": 16,
        "status": "playing",
        "proofNodes": 2
      },
      "meaningfulBranches": 5
    }
  },
  {
    "id": "loop-04",
    "mode": "loop",
    "name": "小鱼糖盒",
    "story": "这盒「小鱼糖盒」，是你亲手装好的第 4 幅糖画。",
    "focus": "先放关键来料，别让环道被等待的糖占满。",
    "width": 8,
    "height": 8,
    "grid": [
      "BBBBBBBB",
      "BBYYYBBB",
      "BYYYYYBB",
      "YYYYRYBY",
      "BYYYYYYY",
      "BBYYYBBY",
      "BBBBBBBB",
      "GGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "B"
      },
      {
        "x": 7,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "R"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "B"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "B"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "B"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "G"
      },
      {
        "x": 1,
        "y": 7,
        "color": "G"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "G"
      },
      {
        "x": 7,
        "y": 7,
        "color": "G"
      }
    ],
    "capacity": 14,
    "targets": [
      {
        "color": "R",
        "cells": [
          28
        ],
        "id": "S1"
      },
      {
        "color": "Y",
        "cells": [
          10,
          11,
          12
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          17,
          18,
          19,
          20,
          21
        ],
        "id": "S3"
      },
      {
        "color": "Y",
        "cells": [
          24,
          25,
          26,
          27
        ],
        "id": "S4"
      },
      {
        "color": "Y",
        "cells": [
          29
        ],
        "id": "S5"
      },
      {
        "color": "Y",
        "cells": [
          31
        ],
        "id": "S6"
      },
      {
        "color": "Y",
        "cells": [
          33,
          34,
          35,
          36,
          37,
          38,
          39
        ],
        "id": "S7"
      },
      {
        "color": "Y",
        "cells": [
          42,
          43,
          44
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          47
        ],
        "id": "S9"
      },
      {
        "color": "B",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "id": "S10"
      },
      {
        "color": "B",
        "cells": [
          8,
          9
        ],
        "id": "S11"
      },
      {
        "color": "B",
        "cells": [
          13,
          14,
          15
        ],
        "id": "S12"
      },
      {
        "color": "B",
        "cells": [
          16
        ],
        "id": "S13"
      },
      {
        "color": "B",
        "cells": [
          22,
          23
        ],
        "id": "S14"
      },
      {
        "color": "B",
        "cells": [
          30
        ],
        "id": "S15"
      },
      {
        "color": "B",
        "cells": [
          32
        ],
        "id": "S16"
      },
      {
        "color": "B",
        "cells": [
          40,
          41
        ],
        "id": "S17"
      },
      {
        "color": "B",
        "cells": [
          45,
          46
        ],
        "id": "S18"
      },
      {
        "color": "B",
        "cells": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ],
        "id": "S19"
      },
      {
        "color": "G",
        "cells": [
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ],
        "id": "S20"
      }
    ],
    "lanes": [
      [
        {
          "color": "B",
          "count": 10,
          "id": "L1P1"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L1P2"
        },
        {
          "color": "G",
          "count": 2,
          "id": "L1P3"
        },
        {
          "color": "B",
          "count": 2,
          "id": "L1P4"
        },
        {
          "color": "B",
          "count": 9,
          "id": "L1P5"
        },
        {
          "color": "G",
          "count": 4,
          "id": "L1P6"
        }
      ],
      [
        {
          "color": "Y",
          "count": 3,
          "id": "L2P1"
        }
      ],
      [
        {
          "color": "B",
          "count": 9,
          "id": "L3P1"
        },
        {
          "color": "R",
          "count": 1,
          "id": "L3P2"
        },
        {
          "color": "Y",
          "count": 22,
          "id": "L3P3"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L3P4"
        }
      ]
    ],
    "witness": [
      "L2P1",
      "L3P1",
      "L3P2",
      "L3P3",
      "L1P1",
      "L1P2",
      "L3P4",
      "L1P3",
      "L1P4",
      "L1P5",
      "L1P6"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L1P1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 4
      },
      "meaningfulBranches": 7
    }
  },
  {
    "id": "loop-05",
    "mode": "loop",
    "name": "热气球",
    "story": "这盒「热气球」，是你亲手装好的第 5 幅糖画。",
    "focus": "同样的颜色，还要看看这一批有多少颗。",
    "width": 8,
    "height": 8,
    "grid": [
      "BBRRRRBB",
      "BRRYYRRB",
      "RRYYYYRR",
      "RRYYYYRR",
      "BRRYYRRB",
      "BBRRRRBB",
      "BBYBBYBB",
      "BBGGGGBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "R"
      },
      {
        "x": 3,
        "y": 0,
        "color": "R"
      },
      {
        "x": 4,
        "y": 0,
        "color": "R"
      },
      {
        "x": 5,
        "y": 0,
        "color": "R"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "R"
      },
      {
        "x": 2,
        "y": 1,
        "color": "R"
      },
      {
        "x": 3,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 1,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 1,
        "color": "R"
      },
      {
        "x": 6,
        "y": 1,
        "color": "R"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "R"
      },
      {
        "x": 1,
        "y": 2,
        "color": "R"
      },
      {
        "x": 2,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "R"
      },
      {
        "x": 7,
        "y": 2,
        "color": "R"
      },
      {
        "x": 0,
        "y": 3,
        "color": "R"
      },
      {
        "x": 1,
        "y": 3,
        "color": "R"
      },
      {
        "x": 2,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "R"
      },
      {
        "x": 7,
        "y": 3,
        "color": "R"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "R"
      },
      {
        "x": 2,
        "y": 4,
        "color": "R"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "R"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "R"
      },
      {
        "x": 3,
        "y": 5,
        "color": "R"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "B"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "B"
      },
      {
        "x": 7,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "G"
      },
      {
        "x": 3,
        "y": 7,
        "color": "G"
      },
      {
        "x": 4,
        "y": 7,
        "color": "G"
      },
      {
        "x": 5,
        "y": 7,
        "color": "G"
      },
      {
        "x": 6,
        "y": 7,
        "color": "B"
      },
      {
        "x": 7,
        "y": 7,
        "color": "B"
      }
    ],
    "capacity": 14,
    "targets": [
      {
        "color": "B",
        "cells": [
          0,
          1
        ],
        "id": "S1"
      },
      {
        "color": "B",
        "cells": [
          6,
          7
        ],
        "id": "S2"
      },
      {
        "color": "B",
        "cells": [
          8
        ],
        "id": "S3"
      },
      {
        "color": "B",
        "cells": [
          15
        ],
        "id": "S4"
      },
      {
        "color": "B",
        "cells": [
          32
        ],
        "id": "S5"
      },
      {
        "color": "B",
        "cells": [
          39
        ],
        "id": "S6"
      },
      {
        "color": "B",
        "cells": [
          40,
          41
        ],
        "id": "S7"
      },
      {
        "color": "Y",
        "cells": [
          11,
          12
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          18,
          19,
          20,
          21
        ],
        "id": "S9"
      },
      {
        "color": "Y",
        "cells": [
          26,
          27,
          28,
          29
        ],
        "id": "S10"
      },
      {
        "color": "Y",
        "cells": [
          35,
          36
        ],
        "id": "S11"
      },
      {
        "color": "Y",
        "cells": [
          50
        ],
        "id": "S12"
      },
      {
        "color": "Y",
        "cells": [
          53
        ],
        "id": "S13"
      },
      {
        "color": "R",
        "cells": [
          2,
          3,
          4,
          5
        ],
        "id": "S14"
      },
      {
        "color": "R",
        "cells": [
          9,
          10
        ],
        "id": "S15"
      },
      {
        "color": "R",
        "cells": [
          13,
          14
        ],
        "id": "S16"
      },
      {
        "color": "R",
        "cells": [
          16,
          17
        ],
        "id": "S17"
      },
      {
        "color": "R",
        "cells": [
          22,
          23
        ],
        "id": "S18"
      },
      {
        "color": "R",
        "cells": [
          24,
          25
        ],
        "id": "S19"
      },
      {
        "color": "R",
        "cells": [
          30,
          31
        ],
        "id": "S20"
      },
      {
        "color": "R",
        "cells": [
          33,
          34
        ],
        "id": "S21"
      },
      {
        "color": "R",
        "cells": [
          37,
          38
        ],
        "id": "S22"
      },
      {
        "color": "R",
        "cells": [
          42,
          43,
          44,
          45
        ],
        "id": "S23"
      },
      {
        "color": "G",
        "cells": [
          58,
          59,
          60,
          61
        ],
        "id": "S24"
      },
      {
        "color": "B",
        "cells": [
          46,
          47
        ],
        "id": "S25"
      },
      {
        "color": "B",
        "cells": [
          48,
          49
        ],
        "id": "S26"
      },
      {
        "color": "B",
        "cells": [
          51,
          52
        ],
        "id": "S27"
      },
      {
        "color": "B",
        "cells": [
          54,
          55
        ],
        "id": "S28"
      },
      {
        "color": "B",
        "cells": [
          56,
          57
        ],
        "id": "S29"
      },
      {
        "color": "B",
        "cells": [
          62,
          63
        ],
        "id": "S30"
      }
    ],
    "lanes": [
      [
        {
          "color": "Y",
          "count": 5,
          "id": "L1P1"
        },
        {
          "color": "R",
          "count": 3,
          "id": "L1P2"
        },
        {
          "color": "R",
          "count": 6,
          "id": "L1P3"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L1P4"
        },
        {
          "color": "B",
          "count": 4,
          "id": "L1P5"
        }
      ],
      [
        {
          "color": "Y",
          "count": 9,
          "id": "L2P1"
        },
        {
          "color": "B",
          "count": 12,
          "id": "L2P2"
        },
        {
          "color": "B",
          "count": 4,
          "id": "L2P3"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L2P4"
        }
      ],
      [
        {
          "color": "R",
          "count": 1,
          "id": "L3P1"
        },
        {
          "color": "R",
          "count": 14,
          "id": "L3P2"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L3P3"
        },
        {
          "color": "B",
          "count": 2,
          "id": "L3P4"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L3P5"
        }
      ]
    ],
    "witness": [
      "L3P1",
      "L2P1",
      "L2P2",
      "L1P1",
      "L3P2",
      "L1P2",
      "L1P3",
      "L1P4",
      "L3P3",
      "L3P4",
      "L3P5",
      "L1P5",
      "L2P3",
      "L2P4"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L1P1",
        "filled": 0,
        "status": "playing",
        "proofNodes": 5
      },
      "meaningfulBranches": 21
    }
  },
  {
    "id": "loop-06",
    "mode": "loop",
    "name": "雏菊糖盒",
    "story": "这盒「雏菊糖盒」，是你亲手装好的第 6 幅糖画。",
    "focus": "环道空位按糖数算，大批次要安排时机。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBYYRRYYYYRRYYBB",
      "BBYYRRYYYYRRYYBB",
      "BBYYYYYYYYYYYYBB",
      "BBYYYYYYYYYYYYBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBBBGGBBBBBBBB",
      "BBBBBBGGBBBBBBBB",
      "BBBBGGGGGGBBBBBB",
      "BBBBGGGGGGBBBBBB",
      "BBBBBBGGBBBBBBBB",
      "BBBBBBGGBBBBBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 8,
        "y": 0,
        "color": "B"
      },
      {
        "x": 9,
        "y": 0,
        "color": "B"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 8,
        "y": 1,
        "color": "B"
      },
      {
        "x": 9,
        "y": 1,
        "color": "B"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "B"
      },
      {
        "x": 3,
        "y": 2,
        "color": "B"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 2,
        "color": "B"
      },
      {
        "x": 13,
        "y": 2,
        "color": "B"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "B"
      },
      {
        "x": 3,
        "y": 3,
        "color": "B"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 3,
        "color": "B"
      },
      {
        "x": 13,
        "y": 3,
        "color": "B"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 4,
        "color": "R"
      },
      {
        "x": 11,
        "y": 4,
        "color": "R"
      },
      {
        "x": 12,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 5,
        "color": "R"
      },
      {
        "x": 11,
        "y": 5,
        "color": "R"
      },
      {
        "x": 12,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 6,
        "color": "B"
      },
      {
        "x": 15,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 7,
        "color": "B"
      },
      {
        "x": 15,
        "y": 7,
        "color": "B"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "B"
      },
      {
        "x": 3,
        "y": 8,
        "color": "B"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "B"
      },
      {
        "x": 13,
        "y": 8,
        "color": "B"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "B"
      },
      {
        "x": 3,
        "y": 9,
        "color": "B"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "B"
      },
      {
        "x": 13,
        "y": 9,
        "color": "B"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "B"
      },
      {
        "x": 3,
        "y": 10,
        "color": "B"
      },
      {
        "x": 4,
        "y": 10,
        "color": "B"
      },
      {
        "x": 5,
        "y": 10,
        "color": "B"
      },
      {
        "x": 6,
        "y": 10,
        "color": "G"
      },
      {
        "x": 7,
        "y": 10,
        "color": "G"
      },
      {
        "x": 8,
        "y": 10,
        "color": "B"
      },
      {
        "x": 9,
        "y": 10,
        "color": "B"
      },
      {
        "x": 10,
        "y": 10,
        "color": "B"
      },
      {
        "x": 11,
        "y": 10,
        "color": "B"
      },
      {
        "x": 12,
        "y": 10,
        "color": "B"
      },
      {
        "x": 13,
        "y": 10,
        "color": "B"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "B"
      },
      {
        "x": 3,
        "y": 11,
        "color": "B"
      },
      {
        "x": 4,
        "y": 11,
        "color": "B"
      },
      {
        "x": 5,
        "y": 11,
        "color": "B"
      },
      {
        "x": 6,
        "y": 11,
        "color": "G"
      },
      {
        "x": 7,
        "y": 11,
        "color": "G"
      },
      {
        "x": 8,
        "y": 11,
        "color": "B"
      },
      {
        "x": 9,
        "y": 11,
        "color": "B"
      },
      {
        "x": 10,
        "y": 11,
        "color": "B"
      },
      {
        "x": 11,
        "y": 11,
        "color": "B"
      },
      {
        "x": 12,
        "y": 11,
        "color": "B"
      },
      {
        "x": 13,
        "y": 11,
        "color": "B"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "B"
      },
      {
        "x": 3,
        "y": 12,
        "color": "B"
      },
      {
        "x": 4,
        "y": 12,
        "color": "G"
      },
      {
        "x": 5,
        "y": 12,
        "color": "G"
      },
      {
        "x": 6,
        "y": 12,
        "color": "G"
      },
      {
        "x": 7,
        "y": 12,
        "color": "G"
      },
      {
        "x": 8,
        "y": 12,
        "color": "G"
      },
      {
        "x": 9,
        "y": 12,
        "color": "G"
      },
      {
        "x": 10,
        "y": 12,
        "color": "B"
      },
      {
        "x": 11,
        "y": 12,
        "color": "B"
      },
      {
        "x": 12,
        "y": 12,
        "color": "B"
      },
      {
        "x": 13,
        "y": 12,
        "color": "B"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "B"
      },
      {
        "x": 3,
        "y": 13,
        "color": "B"
      },
      {
        "x": 4,
        "y": 13,
        "color": "G"
      },
      {
        "x": 5,
        "y": 13,
        "color": "G"
      },
      {
        "x": 6,
        "y": 13,
        "color": "G"
      },
      {
        "x": 7,
        "y": 13,
        "color": "G"
      },
      {
        "x": 8,
        "y": 13,
        "color": "G"
      },
      {
        "x": 9,
        "y": 13,
        "color": "G"
      },
      {
        "x": 10,
        "y": 13,
        "color": "B"
      },
      {
        "x": 11,
        "y": 13,
        "color": "B"
      },
      {
        "x": 12,
        "y": 13,
        "color": "B"
      },
      {
        "x": 13,
        "y": 13,
        "color": "B"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "B"
      },
      {
        "x": 1,
        "y": 14,
        "color": "B"
      },
      {
        "x": 2,
        "y": 14,
        "color": "B"
      },
      {
        "x": 3,
        "y": 14,
        "color": "B"
      },
      {
        "x": 4,
        "y": 14,
        "color": "B"
      },
      {
        "x": 5,
        "y": 14,
        "color": "B"
      },
      {
        "x": 6,
        "y": 14,
        "color": "G"
      },
      {
        "x": 7,
        "y": 14,
        "color": "G"
      },
      {
        "x": 8,
        "y": 14,
        "color": "B"
      },
      {
        "x": 9,
        "y": 14,
        "color": "B"
      },
      {
        "x": 10,
        "y": 14,
        "color": "B"
      },
      {
        "x": 11,
        "y": 14,
        "color": "B"
      },
      {
        "x": 12,
        "y": 14,
        "color": "B"
      },
      {
        "x": 13,
        "y": 14,
        "color": "B"
      },
      {
        "x": 14,
        "y": 14,
        "color": "B"
      },
      {
        "x": 15,
        "y": 14,
        "color": "B"
      },
      {
        "x": 0,
        "y": 15,
        "color": "B"
      },
      {
        "x": 1,
        "y": 15,
        "color": "B"
      },
      {
        "x": 2,
        "y": 15,
        "color": "B"
      },
      {
        "x": 3,
        "y": 15,
        "color": "B"
      },
      {
        "x": 4,
        "y": 15,
        "color": "B"
      },
      {
        "x": 5,
        "y": 15,
        "color": "B"
      },
      {
        "x": 6,
        "y": 15,
        "color": "G"
      },
      {
        "x": 7,
        "y": 15,
        "color": "G"
      },
      {
        "x": 8,
        "y": 15,
        "color": "B"
      },
      {
        "x": 9,
        "y": 15,
        "color": "B"
      },
      {
        "x": 10,
        "y": 15,
        "color": "B"
      },
      {
        "x": 11,
        "y": 15,
        "color": "B"
      },
      {
        "x": 12,
        "y": 15,
        "color": "B"
      },
      {
        "x": 13,
        "y": 15,
        "color": "B"
      },
      {
        "x": 14,
        "y": 15,
        "color": "B"
      },
      {
        "x": 15,
        "y": 15,
        "color": "B"
      }
    ],
    "capacity": 28,
    "targets": [
      {
        "color": "R",
        "cells": [
          68,
          69
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          74,
          75
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43
        ],
        "id": "S3"
      },
      {
        "color": "Y",
        "cells": [
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59
        ],
        "id": "S4"
      },
      {
        "color": "Y",
        "cells": [
          66,
          67
        ],
        "id": "S5"
      },
      {
        "color": "Y",
        "cells": [
          70,
          71,
          72,
          73
        ],
        "id": "S6"
      },
      {
        "color": "Y",
        "cells": [
          76,
          77
        ],
        "id": "S7"
      },
      {
        "color": "Y",
        "cells": [
          82,
          83
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          86,
          87,
          88,
          89
        ],
        "id": "S9"
      },
      {
        "color": "Y",
        "cells": [
          92,
          93
        ],
        "id": "S10"
      },
      {
        "color": "Y",
        "cells": [
          98,
          99,
          100,
          101,
          102,
          103,
          104,
          105,
          106,
          107,
          108,
          109
        ],
        "id": "S11"
      },
      {
        "color": "Y",
        "cells": [
          114,
          115,
          116,
          117,
          118,
          119,
          120,
          121,
          122,
          123,
          124,
          125
        ],
        "id": "S12"
      },
      {
        "color": "Y",
        "cells": [
          132,
          133,
          134,
          135,
          136,
          137,
          138,
          139
        ],
        "id": "S13"
      },
      {
        "color": "Y",
        "cells": [
          148,
          149,
          150,
          151,
          152,
          153,
          154,
          155
        ],
        "id": "S14"
      },
      {
        "color": "B",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "id": "S15"
      },
      {
        "color": "B",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S16"
      },
      {
        "color": "B",
        "cells": [
          32,
          33,
          34,
          35
        ],
        "id": "S17"
      },
      {
        "color": "B",
        "cells": [
          44,
          45,
          46,
          47
        ],
        "id": "S18"
      },
      {
        "color": "B",
        "cells": [
          48,
          49,
          50,
          51
        ],
        "id": "S19"
      },
      {
        "color": "B",
        "cells": [
          60,
          61,
          62,
          63
        ],
        "id": "S20"
      },
      {
        "color": "B",
        "cells": [
          64,
          65
        ],
        "id": "S21"
      },
      {
        "color": "B",
        "cells": [
          78,
          79
        ],
        "id": "S22"
      },
      {
        "color": "B",
        "cells": [
          80,
          81
        ],
        "id": "S23"
      },
      {
        "color": "B",
        "cells": [
          94,
          95
        ],
        "id": "S24"
      },
      {
        "color": "B",
        "cells": [
          96,
          97
        ],
        "id": "S25"
      },
      {
        "color": "B",
        "cells": [
          110,
          111
        ],
        "id": "S26"
      },
      {
        "color": "B",
        "cells": [
          112,
          113
        ],
        "id": "S27"
      },
      {
        "color": "B",
        "cells": [
          126,
          127
        ],
        "id": "S28"
      },
      {
        "color": "B",
        "cells": [
          128,
          129,
          130,
          131
        ],
        "id": "S29"
      },
      {
        "color": "B",
        "cells": [
          140,
          141,
          142,
          143
        ],
        "id": "S30"
      },
      {
        "color": "B",
        "cells": [
          144,
          145,
          146,
          147
        ],
        "id": "S31"
      },
      {
        "color": "B",
        "cells": [
          156,
          157,
          158,
          159
        ],
        "id": "S32"
      },
      {
        "color": "B",
        "cells": [
          160,
          161,
          162,
          163,
          164,
          165
        ],
        "id": "S33"
      },
      {
        "color": "B",
        "cells": [
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175
        ],
        "id": "S34"
      },
      {
        "color": "B",
        "cells": [
          176,
          177,
          178,
          179,
          180,
          181
        ],
        "id": "S35"
      },
      {
        "color": "B",
        "cells": [
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191
        ],
        "id": "S36"
      },
      {
        "color": "B",
        "cells": [
          192,
          193,
          194,
          195
        ],
        "id": "S37"
      },
      {
        "color": "B",
        "cells": [
          202,
          203,
          204,
          205,
          206,
          207
        ],
        "id": "S38"
      },
      {
        "color": "B",
        "cells": [
          208,
          209,
          210,
          211
        ],
        "id": "S39"
      },
      {
        "color": "B",
        "cells": [
          218,
          219,
          220,
          221,
          222,
          223
        ],
        "id": "S40"
      },
      {
        "color": "B",
        "cells": [
          224,
          225,
          226,
          227,
          228,
          229
        ],
        "id": "S41"
      },
      {
        "color": "B",
        "cells": [
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239
        ],
        "id": "S42"
      },
      {
        "color": "B",
        "cells": [
          240,
          241,
          242,
          243,
          244,
          245
        ],
        "id": "S43"
      },
      {
        "color": "B",
        "cells": [
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ],
        "id": "S44"
      },
      {
        "color": "G",
        "cells": [
          166,
          167
        ],
        "id": "S45"
      },
      {
        "color": "G",
        "cells": [
          182,
          183
        ],
        "id": "S46"
      },
      {
        "color": "G",
        "cells": [
          196,
          197,
          198,
          199,
          200,
          201
        ],
        "id": "S47"
      },
      {
        "color": "G",
        "cells": [
          212,
          213,
          214,
          215,
          216,
          217
        ],
        "id": "S48"
      },
      {
        "color": "G",
        "cells": [
          230,
          231
        ],
        "id": "S49"
      },
      {
        "color": "G",
        "cells": [
          246,
          247
        ],
        "id": "S50"
      },
      {
        "color": "R",
        "cells": [
          84,
          85
        ],
        "id": "S51"
      },
      {
        "color": "R",
        "cells": [
          90,
          91
        ],
        "id": "S52"
      }
    ],
    "lanes": [
      [
        {
          "color": "G",
          "count": 4,
          "id": "L1P1"
        },
        {
          "color": "R",
          "count": 6,
          "id": "L1P2"
        },
        {
          "color": "R",
          "count": 2,
          "id": "L1P3"
        }
      ],
      [
        {
          "color": "Y",
          "count": 35,
          "id": "L2P1"
        }
      ],
      [
        {
          "color": "Y",
          "count": 37,
          "id": "L3P1"
        },
        {
          "color": "B",
          "count": 26,
          "id": "L3P2"
        },
        {
          "color": "G",
          "count": 8,
          "id": "L3P3"
        }
      ],
      [
        {
          "color": "G",
          "count": 2,
          "id": "L4P1"
        },
        {
          "color": "G",
          "count": 6,
          "id": "L4P2"
        },
        {
          "color": "B",
          "count": 88,
          "id": "L4P3"
        },
        {
          "color": "B",
          "count": 42,
          "id": "L4P4"
        }
      ]
    ],
    "witness": [
      "L4P1",
      "L1P1",
      "L1P2",
      "L3P1",
      "L2P1",
      "L3P2",
      "L1P3",
      "L4P2",
      "L4P3",
      "L4P4",
      "L3P3"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L2P1",
        "filled": 0,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 22
    }
  },
  {
    "id": "loop-07",
    "mode": "loop",
    "name": "灯塔糖盒",
    "story": "这盒「灯塔糖盒」，是你亲手装好的第 7 幅糖画。",
    "focus": "让等着的糖续装，再放下一批。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYBBBBYYBBBB",
      "BBBBYYBBBBYYBBBB",
      "BBBBRRRRRRRRBBBB",
      "BBBBRRRRRRRRBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBYYYYYYYYBBBB",
      "BBBBRRRRRRRRBBBB",
      "BBBBRRRRRRRRBBBB",
      "GGGGYYYYYYYYGGGG",
      "GGGGYYYYYYYYGGGG",
      "GGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGG"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 8,
        "y": 0,
        "color": "B"
      },
      {
        "x": 9,
        "y": 0,
        "color": "B"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 8,
        "y": 1,
        "color": "B"
      },
      {
        "x": 9,
        "y": 1,
        "color": "B"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "B"
      },
      {
        "x": 3,
        "y": 2,
        "color": "B"
      },
      {
        "x": 4,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 2,
        "color": "B"
      },
      {
        "x": 13,
        "y": 2,
        "color": "B"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "B"
      },
      {
        "x": 3,
        "y": 3,
        "color": "B"
      },
      {
        "x": 4,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 3,
        "color": "B"
      },
      {
        "x": 13,
        "y": 3,
        "color": "B"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 4,
        "color": "B"
      },
      {
        "x": 7,
        "y": 4,
        "color": "B"
      },
      {
        "x": 8,
        "y": 4,
        "color": "B"
      },
      {
        "x": 9,
        "y": 4,
        "color": "B"
      },
      {
        "x": 10,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 4,
        "color": "B"
      },
      {
        "x": 13,
        "y": 4,
        "color": "B"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 5,
        "color": "B"
      },
      {
        "x": 7,
        "y": 5,
        "color": "B"
      },
      {
        "x": 8,
        "y": 5,
        "color": "B"
      },
      {
        "x": 9,
        "y": 5,
        "color": "B"
      },
      {
        "x": 10,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 5,
        "color": "B"
      },
      {
        "x": 13,
        "y": 5,
        "color": "B"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "B"
      },
      {
        "x": 1,
        "y": 6,
        "color": "B"
      },
      {
        "x": 2,
        "y": 6,
        "color": "B"
      },
      {
        "x": 3,
        "y": 6,
        "color": "B"
      },
      {
        "x": 4,
        "y": 6,
        "color": "R"
      },
      {
        "x": 5,
        "y": 6,
        "color": "R"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 8,
        "y": 6,
        "color": "R"
      },
      {
        "x": 9,
        "y": 6,
        "color": "R"
      },
      {
        "x": 10,
        "y": 6,
        "color": "R"
      },
      {
        "x": 11,
        "y": 6,
        "color": "R"
      },
      {
        "x": 12,
        "y": 6,
        "color": "B"
      },
      {
        "x": 13,
        "y": 6,
        "color": "B"
      },
      {
        "x": 14,
        "y": 6,
        "color": "B"
      },
      {
        "x": 15,
        "y": 6,
        "color": "B"
      },
      {
        "x": 0,
        "y": 7,
        "color": "B"
      },
      {
        "x": 1,
        "y": 7,
        "color": "B"
      },
      {
        "x": 2,
        "y": 7,
        "color": "B"
      },
      {
        "x": 3,
        "y": 7,
        "color": "B"
      },
      {
        "x": 4,
        "y": 7,
        "color": "R"
      },
      {
        "x": 5,
        "y": 7,
        "color": "R"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      },
      {
        "x": 8,
        "y": 7,
        "color": "R"
      },
      {
        "x": 9,
        "y": 7,
        "color": "R"
      },
      {
        "x": 10,
        "y": 7,
        "color": "R"
      },
      {
        "x": 11,
        "y": 7,
        "color": "R"
      },
      {
        "x": 12,
        "y": 7,
        "color": "B"
      },
      {
        "x": 13,
        "y": 7,
        "color": "B"
      },
      {
        "x": 14,
        "y": 7,
        "color": "B"
      },
      {
        "x": 15,
        "y": 7,
        "color": "B"
      },
      {
        "x": 0,
        "y": 8,
        "color": "B"
      },
      {
        "x": 1,
        "y": 8,
        "color": "B"
      },
      {
        "x": 2,
        "y": 8,
        "color": "B"
      },
      {
        "x": 3,
        "y": 8,
        "color": "B"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "B"
      },
      {
        "x": 13,
        "y": 8,
        "color": "B"
      },
      {
        "x": 14,
        "y": 8,
        "color": "B"
      },
      {
        "x": 15,
        "y": 8,
        "color": "B"
      },
      {
        "x": 0,
        "y": 9,
        "color": "B"
      },
      {
        "x": 1,
        "y": 9,
        "color": "B"
      },
      {
        "x": 2,
        "y": 9,
        "color": "B"
      },
      {
        "x": 3,
        "y": 9,
        "color": "B"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "B"
      },
      {
        "x": 13,
        "y": 9,
        "color": "B"
      },
      {
        "x": 14,
        "y": 9,
        "color": "B"
      },
      {
        "x": 15,
        "y": 9,
        "color": "B"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "B"
      },
      {
        "x": 3,
        "y": 10,
        "color": "B"
      },
      {
        "x": 4,
        "y": 10,
        "color": "R"
      },
      {
        "x": 5,
        "y": 10,
        "color": "R"
      },
      {
        "x": 6,
        "y": 10,
        "color": "R"
      },
      {
        "x": 7,
        "y": 10,
        "color": "R"
      },
      {
        "x": 8,
        "y": 10,
        "color": "R"
      },
      {
        "x": 9,
        "y": 10,
        "color": "R"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "B"
      },
      {
        "x": 13,
        "y": 10,
        "color": "B"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "B"
      },
      {
        "x": 3,
        "y": 11,
        "color": "B"
      },
      {
        "x": 4,
        "y": 11,
        "color": "R"
      },
      {
        "x": 5,
        "y": 11,
        "color": "R"
      },
      {
        "x": 6,
        "y": 11,
        "color": "R"
      },
      {
        "x": 7,
        "y": 11,
        "color": "R"
      },
      {
        "x": 8,
        "y": 11,
        "color": "R"
      },
      {
        "x": 9,
        "y": 11,
        "color": "R"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "B"
      },
      {
        "x": 13,
        "y": 11,
        "color": "B"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "G"
      },
      {
        "x": 1,
        "y": 12,
        "color": "G"
      },
      {
        "x": 2,
        "y": 12,
        "color": "G"
      },
      {
        "x": 3,
        "y": 12,
        "color": "G"
      },
      {
        "x": 4,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 12,
        "color": "G"
      },
      {
        "x": 13,
        "y": 12,
        "color": "G"
      },
      {
        "x": 14,
        "y": 12,
        "color": "G"
      },
      {
        "x": 15,
        "y": 12,
        "color": "G"
      },
      {
        "x": 0,
        "y": 13,
        "color": "G"
      },
      {
        "x": 1,
        "y": 13,
        "color": "G"
      },
      {
        "x": 2,
        "y": 13,
        "color": "G"
      },
      {
        "x": 3,
        "y": 13,
        "color": "G"
      },
      {
        "x": 4,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 13,
        "color": "G"
      },
      {
        "x": 13,
        "y": 13,
        "color": "G"
      },
      {
        "x": 14,
        "y": 13,
        "color": "G"
      },
      {
        "x": 15,
        "y": 13,
        "color": "G"
      },
      {
        "x": 0,
        "y": 14,
        "color": "G"
      },
      {
        "x": 1,
        "y": 14,
        "color": "G"
      },
      {
        "x": 2,
        "y": 14,
        "color": "G"
      },
      {
        "x": 3,
        "y": 14,
        "color": "G"
      },
      {
        "x": 4,
        "y": 14,
        "color": "G"
      },
      {
        "x": 5,
        "y": 14,
        "color": "G"
      },
      {
        "x": 6,
        "y": 14,
        "color": "G"
      },
      {
        "x": 7,
        "y": 14,
        "color": "G"
      },
      {
        "x": 8,
        "y": 14,
        "color": "G"
      },
      {
        "x": 9,
        "y": 14,
        "color": "G"
      },
      {
        "x": 10,
        "y": 14,
        "color": "G"
      },
      {
        "x": 11,
        "y": 14,
        "color": "G"
      },
      {
        "x": 12,
        "y": 14,
        "color": "G"
      },
      {
        "x": 13,
        "y": 14,
        "color": "G"
      },
      {
        "x": 14,
        "y": 14,
        "color": "G"
      },
      {
        "x": 15,
        "y": 14,
        "color": "G"
      },
      {
        "x": 0,
        "y": 15,
        "color": "G"
      },
      {
        "x": 1,
        "y": 15,
        "color": "G"
      },
      {
        "x": 2,
        "y": 15,
        "color": "G"
      },
      {
        "x": 3,
        "y": 15,
        "color": "G"
      },
      {
        "x": 4,
        "y": 15,
        "color": "G"
      },
      {
        "x": 5,
        "y": 15,
        "color": "G"
      },
      {
        "x": 6,
        "y": 15,
        "color": "G"
      },
      {
        "x": 7,
        "y": 15,
        "color": "G"
      },
      {
        "x": 8,
        "y": 15,
        "color": "G"
      },
      {
        "x": 9,
        "y": 15,
        "color": "G"
      },
      {
        "x": 10,
        "y": 15,
        "color": "G"
      },
      {
        "x": 11,
        "y": 15,
        "color": "G"
      },
      {
        "x": 12,
        "y": 15,
        "color": "G"
      },
      {
        "x": 13,
        "y": 15,
        "color": "G"
      },
      {
        "x": 14,
        "y": 15,
        "color": "G"
      },
      {
        "x": 15,
        "y": 15,
        "color": "G"
      }
    ],
    "capacity": 28,
    "targets": [
      {
        "color": "R",
        "cells": [
          100,
          101,
          102,
          103,
          104,
          105,
          106,
          107
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          116,
          117,
          118,
          119,
          120,
          121,
          122,
          123
        ],
        "id": "S2"
      },
      {
        "color": "Y",
        "cells": [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43
        ],
        "id": "S3"
      },
      {
        "color": "Y",
        "cells": [
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59
        ],
        "id": "S4"
      },
      {
        "color": "Y",
        "cells": [
          68,
          69
        ],
        "id": "S5"
      },
      {
        "color": "Y",
        "cells": [
          74,
          75
        ],
        "id": "S6"
      },
      {
        "color": "Y",
        "cells": [
          84,
          85
        ],
        "id": "S7"
      },
      {
        "color": "Y",
        "cells": [
          90,
          91
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          132,
          133,
          134,
          135,
          136,
          137,
          138,
          139
        ],
        "id": "S9"
      },
      {
        "color": "Y",
        "cells": [
          148,
          149,
          150,
          151,
          152,
          153,
          154,
          155
        ],
        "id": "S10"
      },
      {
        "color": "Y",
        "cells": [
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203
        ],
        "id": "S11"
      },
      {
        "color": "Y",
        "cells": [
          212,
          213,
          214,
          215,
          216,
          217,
          218,
          219
        ],
        "id": "S12"
      },
      {
        "color": "B",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "id": "S13"
      },
      {
        "color": "B",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S14"
      },
      {
        "color": "B",
        "cells": [
          32,
          33,
          34,
          35
        ],
        "id": "S15"
      },
      {
        "color": "B",
        "cells": [
          44,
          45,
          46,
          47
        ],
        "id": "S16"
      },
      {
        "color": "B",
        "cells": [
          48,
          49,
          50,
          51
        ],
        "id": "S17"
      },
      {
        "color": "B",
        "cells": [
          60,
          61,
          62,
          63
        ],
        "id": "S18"
      },
      {
        "color": "B",
        "cells": [
          64,
          65,
          66,
          67
        ],
        "id": "S19"
      },
      {
        "color": "B",
        "cells": [
          70,
          71,
          72,
          73
        ],
        "id": "S20"
      },
      {
        "color": "B",
        "cells": [
          76,
          77,
          78,
          79
        ],
        "id": "S21"
      },
      {
        "color": "B",
        "cells": [
          80,
          81,
          82,
          83
        ],
        "id": "S22"
      },
      {
        "color": "B",
        "cells": [
          86,
          87,
          88,
          89
        ],
        "id": "S23"
      },
      {
        "color": "B",
        "cells": [
          92,
          93,
          94,
          95
        ],
        "id": "S24"
      },
      {
        "color": "B",
        "cells": [
          96,
          97,
          98,
          99
        ],
        "id": "S25"
      },
      {
        "color": "B",
        "cells": [
          108,
          109,
          110,
          111
        ],
        "id": "S26"
      },
      {
        "color": "B",
        "cells": [
          112,
          113,
          114,
          115
        ],
        "id": "S27"
      },
      {
        "color": "B",
        "cells": [
          124,
          125,
          126,
          127
        ],
        "id": "S28"
      },
      {
        "color": "B",
        "cells": [
          128,
          129,
          130,
          131
        ],
        "id": "S29"
      },
      {
        "color": "B",
        "cells": [
          140,
          141,
          142,
          143
        ],
        "id": "S30"
      },
      {
        "color": "B",
        "cells": [
          144,
          145,
          146,
          147
        ],
        "id": "S31"
      },
      {
        "color": "B",
        "cells": [
          156,
          157,
          158,
          159
        ],
        "id": "S32"
      },
      {
        "color": "B",
        "cells": [
          160,
          161,
          162,
          163
        ],
        "id": "S33"
      },
      {
        "color": "B",
        "cells": [
          172,
          173,
          174,
          175
        ],
        "id": "S34"
      },
      {
        "color": "B",
        "cells": [
          176,
          177,
          178,
          179
        ],
        "id": "S35"
      },
      {
        "color": "B",
        "cells": [
          188,
          189,
          190,
          191
        ],
        "id": "S36"
      },
      {
        "color": "G",
        "cells": [
          192,
          193,
          194,
          195
        ],
        "id": "S37"
      },
      {
        "color": "G",
        "cells": [
          204,
          205,
          206,
          207
        ],
        "id": "S38"
      },
      {
        "color": "G",
        "cells": [
          208,
          209,
          210,
          211
        ],
        "id": "S39"
      },
      {
        "color": "G",
        "cells": [
          220,
          221,
          222,
          223
        ],
        "id": "S40"
      },
      {
        "color": "G",
        "cells": [
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239
        ],
        "id": "S41"
      },
      {
        "color": "G",
        "cells": [
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ],
        "id": "S42"
      },
      {
        "color": "R",
        "cells": [
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171
        ],
        "id": "S43"
      },
      {
        "color": "R",
        "cells": [
          180,
          181,
          182,
          183,
          184,
          185,
          186,
          187
        ],
        "id": "S44"
      }
    ],
    "lanes": [
      [
        {
          "color": "G",
          "count": 37,
          "id": "L1P1"
        }
      ],
      [
        {
          "color": "G",
          "count": 3,
          "id": "L2P1"
        },
        {
          "color": "B",
          "count": 67,
          "id": "L2P2"
        }
      ],
      [
        {
          "color": "R",
          "count": 14,
          "id": "L3P1"
        },
        {
          "color": "G",
          "count": 8,
          "id": "L3P2"
        },
        {
          "color": "Y",
          "count": 2,
          "id": "L3P3"
        }
      ],
      [
        {
          "color": "R",
          "count": 18,
          "id": "L4P1"
        },
        {
          "color": "Y",
          "count": 54,
          "id": "L4P2"
        },
        {
          "color": "B",
          "count": 53,
          "id": "L4P3"
        }
      ]
    ],
    "witness": [
      "L3P1",
      "L2P1",
      "L3P2",
      "L3P3",
      "L4P1",
      "L4P2",
      "L2P2",
      "L4P3",
      "L1P1"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L1P1",
        "filled": 0,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 19
    }
  },
  {
    "id": "loop-08",
    "mode": "loop",
    "name": "糖果烟花",
    "story": "这盒「糖果烟花」，是你亲手装好的第 8 幅糖画。",
    "focus": "把来料、环道与纸托排成一次甜蜜接力。",
    "width": 16,
    "height": 16,
    "grid": [
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB",
      "BBRRBBYYYYBBGGBB",
      "BBRRBBYYYYBBGGBB",
      "BBBBRRYYYYGGBBBB",
      "BBBBRRYYYYGGBBBB",
      "YYYYYYRRRRYYYYYY",
      "YYYYYYRRRRYYYYYY",
      "YYYYYYRRRRYYYYYY",
      "YYYYYYRRRRYYYYYY",
      "BBBBGGYYYYRRBBBB",
      "BBBBGGYYYYRRBBBB",
      "BBGGBBYYYYBBRRBB",
      "BBGGBBYYYYBBRRBB",
      "BBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBB"
    ],
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "B"
      },
      {
        "x": 1,
        "y": 0,
        "color": "B"
      },
      {
        "x": 2,
        "y": 0,
        "color": "B"
      },
      {
        "x": 3,
        "y": 0,
        "color": "B"
      },
      {
        "x": 4,
        "y": 0,
        "color": "B"
      },
      {
        "x": 5,
        "y": 0,
        "color": "B"
      },
      {
        "x": 6,
        "y": 0,
        "color": "B"
      },
      {
        "x": 7,
        "y": 0,
        "color": "B"
      },
      {
        "x": 8,
        "y": 0,
        "color": "B"
      },
      {
        "x": 9,
        "y": 0,
        "color": "B"
      },
      {
        "x": 10,
        "y": 0,
        "color": "B"
      },
      {
        "x": 11,
        "y": 0,
        "color": "B"
      },
      {
        "x": 12,
        "y": 0,
        "color": "B"
      },
      {
        "x": 13,
        "y": 0,
        "color": "B"
      },
      {
        "x": 14,
        "y": 0,
        "color": "B"
      },
      {
        "x": 15,
        "y": 0,
        "color": "B"
      },
      {
        "x": 0,
        "y": 1,
        "color": "B"
      },
      {
        "x": 1,
        "y": 1,
        "color": "B"
      },
      {
        "x": 2,
        "y": 1,
        "color": "B"
      },
      {
        "x": 3,
        "y": 1,
        "color": "B"
      },
      {
        "x": 4,
        "y": 1,
        "color": "B"
      },
      {
        "x": 5,
        "y": 1,
        "color": "B"
      },
      {
        "x": 6,
        "y": 1,
        "color": "B"
      },
      {
        "x": 7,
        "y": 1,
        "color": "B"
      },
      {
        "x": 8,
        "y": 1,
        "color": "B"
      },
      {
        "x": 9,
        "y": 1,
        "color": "B"
      },
      {
        "x": 10,
        "y": 1,
        "color": "B"
      },
      {
        "x": 11,
        "y": 1,
        "color": "B"
      },
      {
        "x": 12,
        "y": 1,
        "color": "B"
      },
      {
        "x": 13,
        "y": 1,
        "color": "B"
      },
      {
        "x": 14,
        "y": 1,
        "color": "B"
      },
      {
        "x": 15,
        "y": 1,
        "color": "B"
      },
      {
        "x": 0,
        "y": 2,
        "color": "B"
      },
      {
        "x": 1,
        "y": 2,
        "color": "B"
      },
      {
        "x": 2,
        "y": 2,
        "color": "R"
      },
      {
        "x": 3,
        "y": 2,
        "color": "R"
      },
      {
        "x": 4,
        "y": 2,
        "color": "B"
      },
      {
        "x": 5,
        "y": 2,
        "color": "B"
      },
      {
        "x": 6,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 2,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 2,
        "color": "B"
      },
      {
        "x": 11,
        "y": 2,
        "color": "B"
      },
      {
        "x": 12,
        "y": 2,
        "color": "G"
      },
      {
        "x": 13,
        "y": 2,
        "color": "G"
      },
      {
        "x": 14,
        "y": 2,
        "color": "B"
      },
      {
        "x": 15,
        "y": 2,
        "color": "B"
      },
      {
        "x": 0,
        "y": 3,
        "color": "B"
      },
      {
        "x": 1,
        "y": 3,
        "color": "B"
      },
      {
        "x": 2,
        "y": 3,
        "color": "R"
      },
      {
        "x": 3,
        "y": 3,
        "color": "R"
      },
      {
        "x": 4,
        "y": 3,
        "color": "B"
      },
      {
        "x": 5,
        "y": 3,
        "color": "B"
      },
      {
        "x": 6,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 3,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 3,
        "color": "B"
      },
      {
        "x": 11,
        "y": 3,
        "color": "B"
      },
      {
        "x": 12,
        "y": 3,
        "color": "G"
      },
      {
        "x": 13,
        "y": 3,
        "color": "G"
      },
      {
        "x": 14,
        "y": 3,
        "color": "B"
      },
      {
        "x": 15,
        "y": 3,
        "color": "B"
      },
      {
        "x": 0,
        "y": 4,
        "color": "B"
      },
      {
        "x": 1,
        "y": 4,
        "color": "B"
      },
      {
        "x": 2,
        "y": 4,
        "color": "B"
      },
      {
        "x": 3,
        "y": 4,
        "color": "B"
      },
      {
        "x": 4,
        "y": 4,
        "color": "R"
      },
      {
        "x": 5,
        "y": 4,
        "color": "R"
      },
      {
        "x": 6,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 4,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 4,
        "color": "G"
      },
      {
        "x": 11,
        "y": 4,
        "color": "G"
      },
      {
        "x": 12,
        "y": 4,
        "color": "B"
      },
      {
        "x": 13,
        "y": 4,
        "color": "B"
      },
      {
        "x": 14,
        "y": 4,
        "color": "B"
      },
      {
        "x": 15,
        "y": 4,
        "color": "B"
      },
      {
        "x": 0,
        "y": 5,
        "color": "B"
      },
      {
        "x": 1,
        "y": 5,
        "color": "B"
      },
      {
        "x": 2,
        "y": 5,
        "color": "B"
      },
      {
        "x": 3,
        "y": 5,
        "color": "B"
      },
      {
        "x": 4,
        "y": 5,
        "color": "R"
      },
      {
        "x": 5,
        "y": 5,
        "color": "R"
      },
      {
        "x": 6,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 5,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 5,
        "color": "G"
      },
      {
        "x": 11,
        "y": 5,
        "color": "G"
      },
      {
        "x": 12,
        "y": 5,
        "color": "B"
      },
      {
        "x": 13,
        "y": 5,
        "color": "B"
      },
      {
        "x": 14,
        "y": 5,
        "color": "B"
      },
      {
        "x": 15,
        "y": 5,
        "color": "B"
      },
      {
        "x": 0,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 6,
        "color": "R"
      },
      {
        "x": 7,
        "y": 6,
        "color": "R"
      },
      {
        "x": 8,
        "y": 6,
        "color": "R"
      },
      {
        "x": 9,
        "y": 6,
        "color": "R"
      },
      {
        "x": 10,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 6,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 7,
        "color": "R"
      },
      {
        "x": 7,
        "y": 7,
        "color": "R"
      },
      {
        "x": 8,
        "y": 7,
        "color": "R"
      },
      {
        "x": 9,
        "y": 7,
        "color": "R"
      },
      {
        "x": 10,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 7,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 8,
        "color": "R"
      },
      {
        "x": 7,
        "y": 8,
        "color": "R"
      },
      {
        "x": 8,
        "y": 8,
        "color": "R"
      },
      {
        "x": 9,
        "y": 8,
        "color": "R"
      },
      {
        "x": 10,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 8,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 1,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 2,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 3,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 4,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 5,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 6,
        "y": 9,
        "color": "R"
      },
      {
        "x": 7,
        "y": 9,
        "color": "R"
      },
      {
        "x": 8,
        "y": 9,
        "color": "R"
      },
      {
        "x": 9,
        "y": 9,
        "color": "R"
      },
      {
        "x": 10,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 11,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 12,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 13,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 14,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 15,
        "y": 9,
        "color": "Y"
      },
      {
        "x": 0,
        "y": 10,
        "color": "B"
      },
      {
        "x": 1,
        "y": 10,
        "color": "B"
      },
      {
        "x": 2,
        "y": 10,
        "color": "B"
      },
      {
        "x": 3,
        "y": 10,
        "color": "B"
      },
      {
        "x": 4,
        "y": 10,
        "color": "G"
      },
      {
        "x": 5,
        "y": 10,
        "color": "G"
      },
      {
        "x": 6,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 10,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 10,
        "color": "R"
      },
      {
        "x": 11,
        "y": 10,
        "color": "R"
      },
      {
        "x": 12,
        "y": 10,
        "color": "B"
      },
      {
        "x": 13,
        "y": 10,
        "color": "B"
      },
      {
        "x": 14,
        "y": 10,
        "color": "B"
      },
      {
        "x": 15,
        "y": 10,
        "color": "B"
      },
      {
        "x": 0,
        "y": 11,
        "color": "B"
      },
      {
        "x": 1,
        "y": 11,
        "color": "B"
      },
      {
        "x": 2,
        "y": 11,
        "color": "B"
      },
      {
        "x": 3,
        "y": 11,
        "color": "B"
      },
      {
        "x": 4,
        "y": 11,
        "color": "G"
      },
      {
        "x": 5,
        "y": 11,
        "color": "G"
      },
      {
        "x": 6,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 11,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 11,
        "color": "R"
      },
      {
        "x": 11,
        "y": 11,
        "color": "R"
      },
      {
        "x": 12,
        "y": 11,
        "color": "B"
      },
      {
        "x": 13,
        "y": 11,
        "color": "B"
      },
      {
        "x": 14,
        "y": 11,
        "color": "B"
      },
      {
        "x": 15,
        "y": 11,
        "color": "B"
      },
      {
        "x": 0,
        "y": 12,
        "color": "B"
      },
      {
        "x": 1,
        "y": 12,
        "color": "B"
      },
      {
        "x": 2,
        "y": 12,
        "color": "G"
      },
      {
        "x": 3,
        "y": 12,
        "color": "G"
      },
      {
        "x": 4,
        "y": 12,
        "color": "B"
      },
      {
        "x": 5,
        "y": 12,
        "color": "B"
      },
      {
        "x": 6,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 12,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 12,
        "color": "B"
      },
      {
        "x": 11,
        "y": 12,
        "color": "B"
      },
      {
        "x": 12,
        "y": 12,
        "color": "R"
      },
      {
        "x": 13,
        "y": 12,
        "color": "R"
      },
      {
        "x": 14,
        "y": 12,
        "color": "B"
      },
      {
        "x": 15,
        "y": 12,
        "color": "B"
      },
      {
        "x": 0,
        "y": 13,
        "color": "B"
      },
      {
        "x": 1,
        "y": 13,
        "color": "B"
      },
      {
        "x": 2,
        "y": 13,
        "color": "G"
      },
      {
        "x": 3,
        "y": 13,
        "color": "G"
      },
      {
        "x": 4,
        "y": 13,
        "color": "B"
      },
      {
        "x": 5,
        "y": 13,
        "color": "B"
      },
      {
        "x": 6,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 7,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 8,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 9,
        "y": 13,
        "color": "Y"
      },
      {
        "x": 10,
        "y": 13,
        "color": "B"
      },
      {
        "x": 11,
        "y": 13,
        "color": "B"
      },
      {
        "x": 12,
        "y": 13,
        "color": "R"
      },
      {
        "x": 13,
        "y": 13,
        "color": "R"
      },
      {
        "x": 14,
        "y": 13,
        "color": "B"
      },
      {
        "x": 15,
        "y": 13,
        "color": "B"
      },
      {
        "x": 0,
        "y": 14,
        "color": "B"
      },
      {
        "x": 1,
        "y": 14,
        "color": "B"
      },
      {
        "x": 2,
        "y": 14,
        "color": "B"
      },
      {
        "x": 3,
        "y": 14,
        "color": "B"
      },
      {
        "x": 4,
        "y": 14,
        "color": "B"
      },
      {
        "x": 5,
        "y": 14,
        "color": "B"
      },
      {
        "x": 6,
        "y": 14,
        "color": "B"
      },
      {
        "x": 7,
        "y": 14,
        "color": "B"
      },
      {
        "x": 8,
        "y": 14,
        "color": "B"
      },
      {
        "x": 9,
        "y": 14,
        "color": "B"
      },
      {
        "x": 10,
        "y": 14,
        "color": "B"
      },
      {
        "x": 11,
        "y": 14,
        "color": "B"
      },
      {
        "x": 12,
        "y": 14,
        "color": "B"
      },
      {
        "x": 13,
        "y": 14,
        "color": "B"
      },
      {
        "x": 14,
        "y": 14,
        "color": "B"
      },
      {
        "x": 15,
        "y": 14,
        "color": "B"
      },
      {
        "x": 0,
        "y": 15,
        "color": "B"
      },
      {
        "x": 1,
        "y": 15,
        "color": "B"
      },
      {
        "x": 2,
        "y": 15,
        "color": "B"
      },
      {
        "x": 3,
        "y": 15,
        "color": "B"
      },
      {
        "x": 4,
        "y": 15,
        "color": "B"
      },
      {
        "x": 5,
        "y": 15,
        "color": "B"
      },
      {
        "x": 6,
        "y": 15,
        "color": "B"
      },
      {
        "x": 7,
        "y": 15,
        "color": "B"
      },
      {
        "x": 8,
        "y": 15,
        "color": "B"
      },
      {
        "x": 9,
        "y": 15,
        "color": "B"
      },
      {
        "x": 10,
        "y": 15,
        "color": "B"
      },
      {
        "x": 11,
        "y": 15,
        "color": "B"
      },
      {
        "x": 12,
        "y": 15,
        "color": "B"
      },
      {
        "x": 13,
        "y": 15,
        "color": "B"
      },
      {
        "x": 14,
        "y": 15,
        "color": "B"
      },
      {
        "x": 15,
        "y": 15,
        "color": "B"
      }
    ],
    "capacity": 28,
    "targets": [
      {
        "color": "R",
        "cells": [
          34,
          35
        ],
        "id": "S1"
      },
      {
        "color": "R",
        "cells": [
          50,
          51
        ],
        "id": "S2"
      },
      {
        "color": "R",
        "cells": [
          68,
          69
        ],
        "id": "S3"
      },
      {
        "color": "R",
        "cells": [
          84,
          85
        ],
        "id": "S4"
      },
      {
        "color": "R",
        "cells": [
          102,
          103,
          104,
          105
        ],
        "id": "S5"
      },
      {
        "color": "R",
        "cells": [
          118,
          119,
          120,
          121
        ],
        "id": "S6"
      },
      {
        "color": "Y",
        "cells": [
          38,
          39,
          40,
          41
        ],
        "id": "S7"
      },
      {
        "color": "Y",
        "cells": [
          54,
          55,
          56,
          57
        ],
        "id": "S8"
      },
      {
        "color": "Y",
        "cells": [
          70,
          71,
          72,
          73
        ],
        "id": "S9"
      },
      {
        "color": "Y",
        "cells": [
          86,
          87,
          88,
          89
        ],
        "id": "S10"
      },
      {
        "color": "Y",
        "cells": [
          96,
          97,
          98,
          99,
          100,
          101
        ],
        "id": "S11"
      },
      {
        "color": "Y",
        "cells": [
          106,
          107,
          108,
          109,
          110,
          111
        ],
        "id": "S12"
      },
      {
        "color": "Y",
        "cells": [
          112,
          113,
          114,
          115,
          116,
          117
        ],
        "id": "S13"
      },
      {
        "color": "Y",
        "cells": [
          122,
          123,
          124,
          125,
          126,
          127
        ],
        "id": "S14"
      },
      {
        "color": "Y",
        "cells": [
          128,
          129,
          130,
          131,
          132,
          133
        ],
        "id": "S15"
      },
      {
        "color": "Y",
        "cells": [
          138,
          139,
          140,
          141,
          142,
          143
        ],
        "id": "S16"
      },
      {
        "color": "Y",
        "cells": [
          144,
          145,
          146,
          147,
          148,
          149
        ],
        "id": "S17"
      },
      {
        "color": "Y",
        "cells": [
          154,
          155,
          156,
          157,
          158,
          159
        ],
        "id": "S18"
      },
      {
        "color": "Y",
        "cells": [
          166,
          167,
          168,
          169
        ],
        "id": "S19"
      },
      {
        "color": "Y",
        "cells": [
          182,
          183,
          184,
          185
        ],
        "id": "S20"
      },
      {
        "color": "Y",
        "cells": [
          198,
          199,
          200,
          201
        ],
        "id": "S21"
      },
      {
        "color": "Y",
        "cells": [
          214,
          215,
          216,
          217
        ],
        "id": "S22"
      },
      {
        "color": "B",
        "cells": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "id": "S23"
      },
      {
        "color": "B",
        "cells": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "id": "S24"
      },
      {
        "color": "B",
        "cells": [
          32,
          33
        ],
        "id": "S25"
      },
      {
        "color": "B",
        "cells": [
          36,
          37
        ],
        "id": "S26"
      },
      {
        "color": "B",
        "cells": [
          42,
          43
        ],
        "id": "S27"
      },
      {
        "color": "B",
        "cells": [
          46,
          47
        ],
        "id": "S28"
      },
      {
        "color": "B",
        "cells": [
          48,
          49
        ],
        "id": "S29"
      },
      {
        "color": "B",
        "cells": [
          52,
          53
        ],
        "id": "S30"
      },
      {
        "color": "B",
        "cells": [
          58,
          59
        ],
        "id": "S31"
      },
      {
        "color": "B",
        "cells": [
          62,
          63
        ],
        "id": "S32"
      },
      {
        "color": "B",
        "cells": [
          64,
          65,
          66,
          67
        ],
        "id": "S33"
      },
      {
        "color": "B",
        "cells": [
          76,
          77,
          78,
          79
        ],
        "id": "S34"
      },
      {
        "color": "B",
        "cells": [
          80,
          81,
          82,
          83
        ],
        "id": "S35"
      },
      {
        "color": "B",
        "cells": [
          92,
          93,
          94,
          95
        ],
        "id": "S36"
      },
      {
        "color": "B",
        "cells": [
          160,
          161,
          162,
          163
        ],
        "id": "S37"
      },
      {
        "color": "B",
        "cells": [
          172,
          173,
          174,
          175
        ],
        "id": "S38"
      },
      {
        "color": "B",
        "cells": [
          176,
          177,
          178,
          179
        ],
        "id": "S39"
      },
      {
        "color": "B",
        "cells": [
          188,
          189,
          190,
          191
        ],
        "id": "S40"
      },
      {
        "color": "B",
        "cells": [
          192,
          193
        ],
        "id": "S41"
      },
      {
        "color": "B",
        "cells": [
          196,
          197
        ],
        "id": "S42"
      },
      {
        "color": "B",
        "cells": [
          202,
          203
        ],
        "id": "S43"
      },
      {
        "color": "B",
        "cells": [
          206,
          207
        ],
        "id": "S44"
      },
      {
        "color": "B",
        "cells": [
          208,
          209
        ],
        "id": "S45"
      },
      {
        "color": "B",
        "cells": [
          212,
          213
        ],
        "id": "S46"
      },
      {
        "color": "B",
        "cells": [
          218,
          219
        ],
        "id": "S47"
      },
      {
        "color": "B",
        "cells": [
          222,
          223
        ],
        "id": "S48"
      },
      {
        "color": "B",
        "cells": [
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239
        ],
        "id": "S49"
      },
      {
        "color": "B",
        "cells": [
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255
        ],
        "id": "S50"
      },
      {
        "color": "G",
        "cells": [
          44,
          45
        ],
        "id": "S51"
      },
      {
        "color": "G",
        "cells": [
          60,
          61
        ],
        "id": "S52"
      },
      {
        "color": "G",
        "cells": [
          74,
          75
        ],
        "id": "S53"
      },
      {
        "color": "G",
        "cells": [
          90,
          91
        ],
        "id": "S54"
      },
      {
        "color": "G",
        "cells": [
          164,
          165
        ],
        "id": "S55"
      },
      {
        "color": "G",
        "cells": [
          180,
          181
        ],
        "id": "S56"
      },
      {
        "color": "G",
        "cells": [
          194,
          195
        ],
        "id": "S57"
      },
      {
        "color": "G",
        "cells": [
          210,
          211
        ],
        "id": "S58"
      },
      {
        "color": "R",
        "cells": [
          134,
          135,
          136,
          137
        ],
        "id": "S59"
      },
      {
        "color": "R",
        "cells": [
          150,
          151,
          152,
          153
        ],
        "id": "S60"
      },
      {
        "color": "R",
        "cells": [
          170,
          171
        ],
        "id": "S61"
      },
      {
        "color": "R",
        "cells": [
          186,
          187
        ],
        "id": "S62"
      },
      {
        "color": "R",
        "cells": [
          204,
          205
        ],
        "id": "S63"
      },
      {
        "color": "R",
        "cells": [
          220,
          221
        ],
        "id": "S64"
      }
    ],
    "lanes": [
      [
        {
          "color": "G",
          "count": 4,
          "id": "L1P1"
        },
        {
          "color": "G",
          "count": 1,
          "id": "L1P2"
        },
        {
          "color": "R",
          "count": 16,
          "id": "L1P3"
        }
      ],
      [
        {
          "color": "R",
          "count": 1,
          "id": "L2P1"
        },
        {
          "color": "B",
          "count": 48,
          "id": "L2P2"
        }
      ],
      [
        {
          "color": "B",
          "count": 64,
          "id": "L3P1"
        },
        {
          "color": "R",
          "count": 15,
          "id": "L3P2"
        },
        {
          "color": "G",
          "count": 8,
          "id": "L3P3"
        }
      ],
      [
        {
          "color": "Y",
          "count": 1,
          "id": "L4P1"
        },
        {
          "color": "Y",
          "count": 45,
          "id": "L4P2"
        },
        {
          "color": "B",
          "count": 16,
          "id": "L4P3"
        },
        {
          "color": "G",
          "count": 3,
          "id": "L4P4"
        },
        {
          "color": "Y",
          "count": 24,
          "id": "L4P5"
        },
        {
          "color": "Y",
          "count": 10,
          "id": "L4P6"
        }
      ]
    ],
    "witness": [
      "L2P1",
      "L4P1",
      "L1P1",
      "L1P2",
      "L1P3",
      "L4P2",
      "L4P3",
      "L4P4",
      "L4P5",
      "L4P6",
      "L3P1",
      "L2P2",
      "L3P2",
      "L3P3"
    ],
    "analysis": {
      "badChoice": {
        "prefix": [],
        "action": "L3P1",
        "filled": 0,
        "status": "stuck",
        "proofNodes": 0
      },
      "meaningfulBranches": 27
    }
  }
];
