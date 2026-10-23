// Fixed, verified trial levels. Runtime does not randomize puzzles.
export const LEVELS = [
  {
    "id": "q1",
    "name": "三味初见",
    "tag": "先看下一颗",
    "story": "红蓝相间的小小试吃盒。",
    "type": "queue",
    "width": 2,
    "height": 2,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 1,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 1,
        "color": "gold"
      }
    ],
    "queues": [
      [
        "coral",
        "gold"
      ],
      [
        "coral",
        "blue"
      ]
    ],
    "witness": [
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 0
      },
      {
        "lane": 0
      }
    ],
    "analysis": {
      "good": 4,
      "bad": 1,
      "deadChoices": [
        {
          "prefix": [],
          "action": {
            "lane": 0
          }
        }
      ]
    }
  },
  {
    "id": "q2",
    "name": "樱桃蝴蝶结",
    "tag": "相同颜色，选哪列",
    "story": "把两侧的蝴蝶翅膀都装得刚刚好。",
    "type": "queue",
    "width": 5,
    "height": 3,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 3,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 4,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 1,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 3,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 4,
        "y": 2,
        "color": "blue"
      }
    ],
    "queues": [
      [
        "coral",
        "blue",
        "blue",
        "gold",
        "coral",
        "coral",
        "blue"
      ],
      [
        "coral",
        "blue"
      ],
      [
        "blue",
        "coral"
      ]
    ],
    "witness": [
      {
        "lane": 0
      },
      {
        "lane": 1
      },
      {
        "lane": 0
      },
      {
        "lane": 0
      },
      {
        "lane": 2
      },
      {
        "lane": 0
      },
      {
        "lane": 0
      },
      {
        "lane": 0
      },
      {
        "lane": 2
      },
      {
        "lane": 0
      },
      {
        "lane": 1
      }
    ],
    "analysis": {
      "good": 17,
      "bad": 3,
      "deadChoices": [
        {
          "prefix": [
            {
              "lane": 0
            },
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 1
          }
        },
        {
          "prefix": [
            {
              "lane": 0
            },
            {
              "lane": 1
            },
            {
              "lane": 0
            }
          ],
          "action": {
            "lane": 1
          }
        },
        {
          "prefix": [
            {
              "lane": 0
            },
            {
              "lane": 1
            },
            {
              "lane": 0
            },
            {
              "lane": 0
            }
          ],
          "action": {
            "lane": 1
          }
        }
      ]
    }
  },
  {
    "id": "q3",
    "name": "薄荷圣诞树",
    "tag": "多看两步",
    "story": "一颗一颗，装出挂满小彩灯的糖果树。",
    "type": "queue",
    "width": 5,
    "height": 5,
    "cells": [
      {
        "x": 2,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 3,
        "y": 1,
        "color": "mint"
      },
      {
        "x": 2,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 1,
        "color": "mint"
      },
      {
        "x": 0,
        "y": 2,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 2,
        "color": "mint"
      },
      {
        "x": 3,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 4,
        "y": 2,
        "color": "mint"
      },
      {
        "x": 3,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 2,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 2,
        "y": 4,
        "color": "gold"
      }
    ],
    "queues": [
      [
        "mint",
        "mint"
      ],
      [
        "gold",
        "mint",
        "coral",
        "blue",
        "mint",
        "mint"
      ],
      [
        "mint",
        "blue",
        "mint",
        "mint",
        "gold"
      ]
    ],
    "witness": [
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 0
      },
      {
        "lane": 0
      },
      {
        "lane": 1
      },
      {
        "lane": 2
      },
      {
        "lane": 2
      },
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 2
      },
      {
        "lane": 2
      },
      {
        "lane": 2
      }
    ],
    "analysis": {
      "good": 17,
      "bad": 3,
      "deadChoices": [
        {
          "prefix": [
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 0
          }
        },
        {
          "prefix": [
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 2
          }
        },
        {
          "prefix": [
            {
              "lane": 1
            },
            {
              "lane": 1
            },
            {
              "lane": 1
            },
            {
              "lane": 0
            },
            {
              "lane": 0
            },
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 1
          }
        }
      ]
    }
  },
  {
    "id": "q4",
    "name": "蓝莓小火箭",
    "tag": "四列交织",
    "story": "把甜蜜燃料装好，准备出发。",
    "type": "queue",
    "width": 4,
    "height": 5,
    "cells": [
      {
        "x": 1,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 1,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 1,
        "color": "blue"
      },
      {
        "x": 0,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 1,
        "y": 2,
        "color": "gold"
      },
      {
        "x": 2,
        "y": 2,
        "color": "gold"
      },
      {
        "x": 3,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 3,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 3,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 4,
        "color": "coral"
      },
      {
        "x": 3,
        "y": 4,
        "color": "coral"
      }
    ],
    "queues": [
      [
        "blue",
        "coral"
      ],
      [
        "blue",
        "blue",
        "gold",
        "gold",
        "gold",
        "coral"
      ],
      [
        "blue",
        "coral"
      ],
      [
        "blue",
        "gold",
        "blue",
        "coral"
      ]
    ],
    "witness": [
      {
        "lane": 0
      },
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 1
      },
      {
        "lane": 2
      },
      {
        "lane": 3
      },
      {
        "lane": 1
      },
      {
        "lane": 3
      },
      {
        "lane": 3
      },
      {
        "lane": 0
      },
      {
        "lane": 1
      },
      {
        "lane": 2
      },
      {
        "lane": 3
      }
    ],
    "analysis": {
      "good": 25,
      "bad": 4,
      "deadChoices": [
        {
          "prefix": [
            {
              "lane": 0
            }
          ],
          "action": {
            "lane": 2
          }
        },
        {
          "prefix": [
            {
              "lane": 0
            }
          ],
          "action": {
            "lane": 3
          }
        },
        {
          "prefix": [
            {
              "lane": 0
            },
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 2
          }
        },
        {
          "prefix": [
            {
              "lane": 0
            },
            {
              "lane": 1
            }
          ],
          "action": {
            "lane": 3
          }
        }
      ]
    }
  },
  {
    "id": "p1",
    "name": "草莓双拼",
    "tag": "先选糖块，再选位置",
    "story": "两块连体草莓糖，拼成第一盒。",
    "type": "tile",
    "width": 3,
    "height": 2,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 1,
        "color": "coral"
      }
    ],
    "tiles": [
      {
        "id": "T1",
        "cells": [
          {
            "x": 1,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 1,
            "color": "coral"
          }
        ],
        "home": {
          "x": 0,
          "y": 0
        }
      },
      {
        "id": "T2",
        "cells": [
          {
            "x": 0,
            "y": 1,
            "color": "coral"
          },
          {
            "x": 1,
            "y": 1,
            "color": "coral"
          },
          {
            "x": 1,
            "y": 0,
            "color": "coral"
          }
        ],
        "home": {
          "x": 1,
          "y": 0
        }
      }
    ],
    "witness": [
      {
        "piece": "T1",
        "x": 0,
        "y": 0
      },
      {
        "piece": "T2",
        "x": 1,
        "y": 0
      }
    ],
    "analysis": {
      "good": 2,
      "bad": 2,
      "deadChoices": [
        {
          "prefix": [],
          "action": {
            "piece": "T1",
            "x": 1,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T2",
            "x": 0,
            "y": 0
          }
        }
      ]
    }
  },
  {
    "id": "p2",
    "name": "莓果蝴蝶",
    "tag": "别留下小死角",
    "story": "两种莓果口味，拼一只小蝴蝶。",
    "type": "tile",
    "width": 4,
    "height": 4,
    "cells": [
      {
        "x": 1,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 3,
        "y": 1,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 1,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 1,
        "y": 3,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 3,
        "color": "blue"
      }
    ],
    "tiles": [
      {
        "id": "T1",
        "cells": [
          {
            "x": 1,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 1,
            "y": 1,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 1,
            "color": "coral"
          }
        ],
        "home": {
          "x": 1,
          "y": 0
        }
      },
      {
        "id": "T2",
        "cells": [
          {
            "x": 0,
            "y": 1,
            "color": "blue"
          },
          {
            "x": 0,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 1,
            "y": 1,
            "color": "blue"
          },
          {
            "x": 2,
            "y": 1,
            "color": "blue"
          }
        ],
        "home": {
          "x": 0,
          "y": 1
        }
      },
      {
        "id": "T3",
        "cells": [
          {
            "x": 0,
            "y": 0,
            "color": "blue"
          },
          {
            "x": 1,
            "y": 0,
            "color": "blue"
          }
        ],
        "home": {
          "x": 1,
          "y": 3
        }
      },
      {
        "id": "T4",
        "cells": [
          {
            "x": 0,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 1,
            "color": "blue"
          }
        ],
        "home": {
          "x": 3,
          "y": 1
        }
      }
    ],
    "witness": [
      {
        "piece": "T1",
        "x": 1,
        "y": 0
      },
      {
        "piece": "T2",
        "x": 0,
        "y": 1
      },
      {
        "piece": "T3",
        "x": 1,
        "y": 3
      },
      {
        "piece": "T4",
        "x": 3,
        "y": 1
      }
    ],
    "analysis": {
      "good": 4,
      "bad": 7,
      "deadChoices": [
        {
          "prefix": [],
          "action": {
            "piece": "T2",
            "x": 1,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 0,
            "y": 2
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 1,
            "y": 2
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 2,
            "y": 2
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 0,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 1,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 2,
            "y": 1
          }
        }
      ]
    }
  },
  {
    "id": "p3",
    "name": "柠檬小蛋糕",
    "tag": "大块先放哪里",
    "story": "柠檬、草莓和薄荷，层层装好。",
    "type": "tile",
    "width": 4,
    "height": 4,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 2,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 3,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 2,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 3,
        "y": 1,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 1,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 3,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 0,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 2,
        "y": 3,
        "color": "mint"
      },
      {
        "x": 3,
        "y": 3,
        "color": "mint"
      }
    ],
    "tiles": [
      {
        "id": "T1",
        "cells": [
          {
            "x": 1,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 0,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 1,
            "color": "mint"
          },
          {
            "x": 1,
            "y": 1,
            "color": "mint"
          }
        ],
        "home": {
          "x": 2,
          "y": 2
        }
      },
      {
        "id": "T2",
        "cells": [
          {
            "x": 2,
            "y": 0,
            "color": "gold"
          },
          {
            "x": 1,
            "y": 0,
            "color": "gold"
          },
          {
            "x": 0,
            "y": 0,
            "color": "gold"
          },
          {
            "x": 0,
            "y": 1,
            "color": "gold"
          }
        ],
        "home": {
          "x": 1,
          "y": 0
        }
      },
      {
        "id": "T3",
        "cells": [
          {
            "x": 0,
            "y": 1,
            "color": "gold"
          },
          {
            "x": 0,
            "y": 2,
            "color": "coral"
          },
          {
            "x": 0,
            "y": 0,
            "color": "gold"
          },
          {
            "x": 1,
            "y": 2,
            "color": "coral"
          }
        ],
        "home": {
          "x": 0,
          "y": 0
        }
      },
      {
        "id": "T4",
        "cells": [
          {
            "x": 1,
            "y": 0,
            "color": "gold"
          },
          {
            "x": 0,
            "y": 0,
            "color": "gold"
          }
        ],
        "home": {
          "x": 2,
          "y": 1
        }
      },
      {
        "id": "T5",
        "cells": [
          {
            "x": 0,
            "y": 0,
            "color": "mint"
          },
          {
            "x": 1,
            "y": 0,
            "color": "mint"
          }
        ],
        "home": {
          "x": 0,
          "y": 3
        }
      }
    ],
    "witness": [
      {
        "piece": "T1",
        "x": 2,
        "y": 2
      },
      {
        "piece": "T2",
        "x": 1,
        "y": 0
      },
      {
        "piece": "T3",
        "x": 0,
        "y": 0
      },
      {
        "piece": "T4",
        "x": 2,
        "y": 1
      },
      {
        "piece": "T5",
        "x": 0,
        "y": 3
      }
    ],
    "analysis": {
      "good": 5,
      "bad": 12,
      "deadChoices": [
        {
          "prefix": [],
          "action": {
            "piece": "T1",
            "x": 0,
            "y": 2
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T1",
            "x": 1,
            "y": 2
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T2",
            "x": 0,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 1,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 2,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 0,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 1,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 2,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 0,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 1,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T5",
            "x": 1,
            "y": 3
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T5",
            "x": 2,
            "y": 3
          }
        }
      ]
    }
  },
  {
    "id": "p4",
    "name": "薄荷宝石盒",
    "tag": "让每一块都有位置",
    "story": "把蓝莓宝石嵌进薄荷边框。",
    "type": "tile",
    "width": 4,
    "height": 4,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 0,
        "color": "mint"
      },
      {
        "x": 2,
        "y": 0,
        "color": "mint"
      },
      {
        "x": 3,
        "y": 0,
        "color": "mint"
      },
      {
        "x": 0,
        "y": 1,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 1,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 1,
        "color": "mint"
      },
      {
        "x": 0,
        "y": 2,
        "color": "mint"
      },
      {
        "x": 1,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 2,
        "y": 2,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 2,
        "color": "mint"
      },
      {
        "x": 0,
        "y": 3,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 3,
        "color": "gold"
      },
      {
        "x": 2,
        "y": 3,
        "color": "gold"
      },
      {
        "x": 3,
        "y": 3,
        "color": "gold"
      }
    ],
    "tiles": [
      {
        "id": "T1",
        "cells": [
          {
            "x": 0,
            "y": 1,
            "color": "mint"
          },
          {
            "x": 0,
            "y": 0,
            "color": "mint"
          },
          {
            "x": 1,
            "y": 1,
            "color": "blue"
          },
          {
            "x": 0,
            "y": 2,
            "color": "mint"
          }
        ],
        "home": {
          "x": 0,
          "y": 0
        }
      },
      {
        "id": "T2",
        "cells": [
          {
            "x": 0,
            "y": 0,
            "color": "blue"
          },
          {
            "x": 0,
            "y": 1,
            "color": "blue"
          }
        ],
        "home": {
          "x": 2,
          "y": 1
        }
      },
      {
        "id": "T3",
        "cells": [
          {
            "x": 1,
            "y": 0,
            "color": "mint"
          },
          {
            "x": 0,
            "y": 0,
            "color": "mint"
          },
          {
            "x": 2,
            "y": 0,
            "color": "mint"
          }
        ],
        "home": {
          "x": 1,
          "y": 0
        }
      },
      {
        "id": "T4",
        "cells": [
          {
            "x": 0,
            "y": 1,
            "color": "mint"
          },
          {
            "x": 0,
            "y": 0,
            "color": "mint"
          },
          {
            "x": 0,
            "y": 2,
            "color": "gold"
          }
        ],
        "home": {
          "x": 3,
          "y": 1
        }
      },
      {
        "id": "T5",
        "cells": [
          {
            "x": 1,
            "y": 1,
            "color": "gold"
          },
          {
            "x": 1,
            "y": 0,
            "color": "blue"
          },
          {
            "x": 0,
            "y": 1,
            "color": "gold"
          },
          {
            "x": 2,
            "y": 1,
            "color": "gold"
          }
        ],
        "home": {
          "x": 0,
          "y": 2
        }
      }
    ],
    "witness": [
      {
        "piece": "T1",
        "x": 0,
        "y": 0
      },
      {
        "piece": "T2",
        "x": 2,
        "y": 1
      },
      {
        "piece": "T3",
        "x": 1,
        "y": 0
      },
      {
        "piece": "T4",
        "x": 3,
        "y": 1
      },
      {
        "piece": "T5",
        "x": 0,
        "y": 2
      }
    ],
    "analysis": {
      "good": 5,
      "bad": 4,
      "deadChoices": [
        {
          "prefix": [],
          "action": {
            "piece": "T2",
            "x": 1,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T3",
            "x": 0,
            "y": 0
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T4",
            "x": 0,
            "y": 1
          }
        },
        {
          "prefix": [],
          "action": {
            "piece": "T5",
            "x": 1,
            "y": 2
          }
        }
      ]
    }
  },
  {
    "id": "t1",
    "name": "三色糖签",
    "tag": "一倾，整盘一起动",
    "width": 3,
    "height": 3,
    "cells": [
      {
        "x": 2,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 2,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 1,
        "color": "blue"
      }
    ],
    "pieces": [
      {
        "id": "C1",
        "x": 0,
        "y": 0,
        "color": "coral"
      },
      {
        "id": "C2",
        "x": 0,
        "y": 2,
        "color": "gold"
      },
      {
        "id": "C3",
        "x": 2,
        "y": 1,
        "color": "blue"
      }
    ],
    "walls": [],
    "story": "先向右，再向左，三颗糖各就各位。",
    "type": "tilt",
    "witness": [
      {
        "direction": "right"
      },
      {
        "direction": "left"
      }
    ],
    "analysis": {
      "shortest": 2,
      "nodes": 3
    }
  },
  {
    "id": "t2",
    "name": "四味花瓣",
    "tag": "顺路装好几颗",
    "width": 5,
    "height": 5,
    "cells": [
      {
        "x": 0,
        "y": 0,
        "color": "coral"
      },
      {
        "x": 4,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 4,
        "color": "mint"
      },
      {
        "x": 4,
        "y": 4,
        "color": "blue"
      }
    ],
    "walls": [
      {
        "x": 2,
        "y": 2
      }
    ],
    "story": "四片花瓣，藏在整盘移动的路线里。",
    "type": "tilt",
    "pieces": [
      {
        "x": 0,
        "y": 3,
        "id": "C1",
        "color": "coral"
      },
      {
        "x": 3,
        "y": 2,
        "id": "C2",
        "color": "gold"
      },
      {
        "x": 1,
        "y": 0,
        "id": "C3",
        "color": "mint"
      },
      {
        "x": 3,
        "y": 3,
        "id": "C4",
        "color": "blue"
      }
    ],
    "witness": [
      {
        "direction": "up"
      },
      {
        "direction": "right"
      },
      {
        "direction": "down"
      },
      {
        "direction": "left"
      }
    ],
    "analysis": {
      "shortest": 4,
      "nodes": 15
    }
  },
  {
    "id": "t3",
    "name": "草莓花园",
    "tag": "让路，也是一步",
    "width": 5,
    "height": 5,
    "cells": [
      {
        "x": 2,
        "y": 0,
        "color": "gold"
      },
      {
        "x": 0,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 4,
        "y": 2,
        "color": "coral"
      },
      {
        "x": 2,
        "y": 4,
        "color": "mint"
      }
    ],
    "walls": [
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 3,
        "y": 3
      }
    ],
    "story": "三颗草莓花瓣，谁先经过中心？",
    "type": "tilt",
    "pieces": [
      {
        "x": 4,
        "y": 3,
        "id": "C1",
        "color": "gold"
      },
      {
        "x": 1,
        "y": 0,
        "id": "C2",
        "color": "coral"
      },
      {
        "x": 1,
        "y": 2,
        "id": "C3",
        "color": "coral"
      },
      {
        "x": 1,
        "y": 3,
        "id": "C4",
        "color": "coral"
      },
      {
        "x": 4,
        "y": 0,
        "id": "C5",
        "color": "mint"
      }
    ],
    "witness": [
      {
        "direction": "down"
      },
      {
        "direction": "right"
      },
      {
        "direction": "up"
      },
      {
        "direction": "left"
      },
      {
        "direction": "down"
      },
      {
        "direction": "right"
      },
      {
        "direction": "up"
      }
    ],
    "analysis": {
      "shortest": 7,
      "nodes": 170
    }
  },
  {
    "id": "t4",
    "name": "月光糖环",
    "tag": "考虑全盘的去向",
    "width": 5,
    "height": 5,
    "cells": [
      {
        "x": 1,
        "y": 0,
        "color": "mint"
      },
      {
        "x": 3,
        "y": 0,
        "color": "blue"
      },
      {
        "x": 0,
        "y": 2,
        "color": "gold"
      },
      {
        "x": 4,
        "y": 2,
        "color": "gold"
      },
      {
        "x": 1,
        "y": 4,
        "color": "blue"
      },
      {
        "x": 3,
        "y": 4,
        "color": "mint"
      }
    ],
    "walls": [
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 2,
        "y": 3
      }
    ],
    "story": "让每颗糖沿着月光，找到自己的位置。",
    "type": "tilt",
    "pieces": [
      {
        "x": 1,
        "y": 3,
        "id": "C1",
        "color": "mint"
      },
      {
        "x": 1,
        "y": 1,
        "id": "C2",
        "color": "blue"
      },
      {
        "x": 3,
        "y": 3,
        "id": "C3",
        "color": "gold"
      },
      {
        "x": 2,
        "y": 4,
        "id": "C4",
        "color": "gold"
      },
      {
        "x": 3,
        "y": 2,
        "id": "C5",
        "color": "blue"
      },
      {
        "x": 2,
        "y": 0,
        "id": "C6",
        "color": "mint"
      }
    ],
    "witness": [
      {
        "direction": "up"
      },
      {
        "direction": "left"
      },
      {
        "direction": "up"
      },
      {
        "direction": "right"
      },
      {
        "direction": "down"
      },
      {
        "direction": "right"
      },
      {
        "direction": "left"
      }
    ],
    "analysis": {
      "shortest": 7,
      "nodes": 209
    }
  }
];
export const MODES = [{id:'queue',name:'糖列拼画',verb:'取哪一列',description:'点前排糖果，按盒内顺序装出糖画。',letter:'A'},{id:'tile',name:'整块拼盒',verb:'放在哪里',description:'点选连体糖，再点盒里的左上落位。',letter:'B'},{id:'tilt',name:'整盘入模',verb:'往哪边倾',description:'点方向把手，让整盘糖一起滑入同色模位。',letter:'C'}];
