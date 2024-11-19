const words = [
  {
    "word": "friend",
    "chinese": "朋友",
    "phonetic": "[frend]",
    "example1": {
      "en": "This is my friend.",
      "zh": "这是我的朋友。"
    },
    "example2": {
      "en": "A true friend will stand by you through difficult times.",
      "zh": "真正的朋友会在困难时期陪伴你。"
    }
  },
  {
    "word": "boy",
    "chinese": "男孩",
    "phonetic": "[bɔi]",
    "example1": {
      "en": "The boy is happy.",
      "zh": "这个男孩很开心。"
    },
    "example2": {
      "en": "The little boy showed remarkable talent in sports.",
      "zh": "这个小男孩在运动方面表现出非凡的才能。"
    }
  },
  {
    "word": "girl",
    "chinese": "女孩",
    "phonetic": "[ɡə:l]",
    "example1": {
      "en": "The girl is reading.",
      "zh": "这个女孩在读书。"
    },
    "example2": {
      "en": "The young girl won first prize in the competition.",
      "zh": "这个女孩在比赛中获得了第一名。"
    }
  },
  {
    "word": "mother",
    "chinese": "母亲",
    "phonetic": "[ˈmʌðə]",
    "example1": {
      "en": "My mother is kind.",
      "zh": "我妈妈很善良。"
    },
    "example2": {
      "en": "Mother spent all day preparing for the family reunion.",
      "zh": "妈妈花了一整天准备家庭聚会。"
    }
  },
  {
    "word": "father",
    "chinese": "父亲",
    "phonetic": "[ˈfɑ:ðə]",
    "example1": {
      "en": "My father works hard.",
      "zh": "我父亲工作很努力。"
    },
    "example2": {
      "en": "Father taught me how to ride a bicycle.",
      "zh": "父亲教我骑自行车。"
    }
  },
  {
    "word": "sister",
    "chinese": "姐妹",
    "phonetic": "[ˈsistə]",
    "example1": {
      "en": "My sister is older than me.",
      "zh": "我姐姐比我大。"
    },
    "example2": {
      "en": "His sister graduated from medical school last year.",
      "zh": "他的姐姐去年从医学院毕业。"
    }
  },
  {
    "word": "brother",
    "chinese": "兄弟",
    "phonetic": "[ˈbrʌðə]",
    "example1": {
      "en": "My brother plays football.",
      "zh": "我兄弟踢足球。"
    },
    "example2": {
      "en": "His brother has always been his biggest supporter.",
      "zh": "他的兄弟一直是他最大的支持者。"
    }
  },
  {
    "word": "uncle",
    "chinese": "叔叔",
    "phonetic": "[ˈʌŋkl]",
    "example1": {
      "en": "My uncle lives nearby.",
      "zh": "我叔叔住在附近。"
    },
    "example2": {
      "en": "Uncle Tom traveled around the world last summer.",
      "zh": "汤姆叔叔去年夏天环游世界。"
    }
  },
  {
    "word": "man",
    "chinese": "男人",
    "phonetic": "[mæn]",
    "example1": {
      "en": "The man is tall.",
      "zh": "这个男人很高。"
    },
    "example2": {
      "en": "The man dedicated his life to helping others.",
      "zh": "这个男人把一生都献给了帮助他人。"
    }
  },
  {
    "word": "woman",
    "chinese": "女人",
    "phonetic": "[ˈwumən]",
    "example1": {
      "en": "The woman is beautiful.",
      "zh": "这个女人很漂亮。"
    },
    "example2": {
      "en": "The woman runs her own successful business.",
      "zh": "这个女人经营着自己成功的企业。"
    }
  },
  {
    "word": "miss",
    "chinese": "小姐",
    "phonetic": "[mis]",
    "example1": {
      "en": "Miss Wang is our teacher.",
      "zh": "王小姐是我们的老师。"
    },
    "example2": {
      "en": "Miss Smith won the outstanding teacher award.",
      "zh": "史密斯小姐获得了优秀教师奖。"
    }
  },
  {
    "word": "lady",
    "chinese": "女士",
    "phonetic": "[ˈleidi]",
    "example1": {
      "en": "The lady is wearing red.",
      "zh": "这位女士穿着红色衣服。"
    },
    "example2": {
      "en": "The elderly lady volunteers at the local hospital.",
      "zh": "这位老太太在当地医院做志愿者。"
    }
  },
  {
    "word": "mom",
    "chinese": "妈妈",
    "phonetic": "[mɔm]",
    "example1": {
      "en": "Mom is cooking dinner.",
      "zh": "妈妈在做晚饭。"
    },
    "example2": {
      "en": "Mom always knows how to make everything better.",
      "zh": "妈妈总是知道如何让一切变得更好。"
    }
  },
  {
    "word": "dad",
    "chinese": "爸爸",
    "phonetic": "[dæd]",
    "example1": {
      "en": "Dad is washing the car.",
      "zh": "爸爸在洗车。"
    },
    "example2": {
      "en": "Dad taught me the importance of hard work.",
      "zh": "爸爸教会我努力工作的重要性。"
    }
  },
  {
    "word": "parent",
    "chinese": "父母",
    "phonetic": "[ˈpεərənt]",
    "example1": {
      "en": "My parent is strict.",
      "zh": "我的父母很严格。"
    },
    "example2": {
      "en": "Every parent wants the best for their children.",
      "zh": "每个父母都想给孩子最好的。"
    }
  },
  {
    "word": "grandma",
    "chinese": "奶奶",
    "phonetic": "[ˈɡrænmɑ]",
    "example1": {
      "en": "Grandma makes cookies.",
      "zh": "奶奶在做饼干。"
    },
    "example2": {
      "en": "Grandma shared stories from her childhood with us.",
      "zh": "奶奶和我们分享她童年的故事。"
    }
  },
  {
    "word": "aunt",
    "chinese": "姑姑",
    "phonetic": "[ɑ:nt]",
    "example1": {
      "en": "My aunt lives in Beijing.",
      "zh": "我姑姑住在北京。"
    },
    "example2": {
      "en": "Aunt Mary helped me prepare for the college entrance exam.",
      "zh": "玛丽姑姑帮我准备大学入学考试。"
    }
  },
  {
    "word": "cousin",
    "chinese": "堂兄弟",
    "phonetic": "[ˈkʌzən]",
    "example1": {
      "en": "My cousin is coming today.",
      "zh": "我的堂兄今天要来。"
    },
    "example2": {
      "en": "My cousin studied abroad for five years.",
      "zh": "我的堂兄在国外学习了五年。"
    }
  },
  {
    "word": "son",
    "chinese": "儿子",
    "phonetic": "[sʌn]",
    "example1": {
      "en": "His son is six years old.",
      "zh": "他的儿子六岁了。"
    },
    "example2": {
      "en": "Their son became a successful doctor.",
      "zh": "他们的儿子成为了一名成功的医生。"
    }
  },
  {
    "word": "daughter",
    "chinese": "女儿",
    "phonetic": "[ˈdɔ:tə]",
    "example1": {
      "en": "Her daughter likes dancing.",
      "zh": "她的女儿喜欢跳舞。"
    },
    "example2": {
      "en": "Their daughter won a scholarship to Harvard.",
      "zh": "他们的女儿获得了哈佛的奖学金。"
    }
  },
  {
    "word": "baby",
    "chinese": "婴儿",
    "phonetic": "[ˈbeibi]",
    "example1": {
      "en": "The baby is sleeping.",
      "zh": "婴儿在睡觉。"
    },
    "example2": {
      "en": "The baby learned to walk at ten months old.",
      "zh": "这个婴儿在十个月大时就学会走路了。"
    }
  },
  {
    "word": "kid",
    "chinese": "小孩",
    "phonetic": "[kid]",
    "example1": {
      "en": "The kid is playing.",
      "zh": "这个小孩在玩耍。"
    },
    "example2": {
      "en": "The kid showed amazing mathematical ability.",
      "zh": "这个小孩表现出惊人的数学能力。"
    }
  },
  {
    "word": "classmate",
    "chinese": "同学",
    "phonetic": "[ˈklɑ:smeit]",
    "example1": {
      "en": "My classmate helps me.",
      "zh": "我的同学帮助我。"
    },
    "example2": {
      "en": "My classmate became a famous scientist.",
      "zh": "我的同学成为了一位著名的科学家。"
    }
  },
  {
    "word": "queen",
    "chinese": "女王",
    "phonetic": "[kwi:n]",
    "example1": {
      "en": "The queen is coming.",
      "zh": "女王要来了。"
    },
    "example2": {
      "en": "The queen addressed the nation during the crisis.",
      "zh": "女王在危机期间向全国发表讲话。"
    }
  },
  {
    "word": "visitor",
    "chinese": "访客",
    "phonetic": "[ˈvizitə]",
    "example1": {
      "en": "The visitor arrived late.",
      "zh": "访客迟到了。"
    },
    "example2": {
      "en": "The visitor brought gifts from his home country.",
      "zh": "这位访客带来了他祖国的礼物。"
    }
  },
  {
    "word": "neighbour",
    "chinese": "邻居",
    "phonetic": "[ˈneibə]",
    "example1": {
      "en": "My neighbour is friendly.",
      "zh": "我的邻居很友好。"
    },
    "example2": {
      "en": "Our neighbour helped us during the power outage.",
      "zh": "我们的邻居在停电期间帮助了我们。"
    }
  },
  {
    "word": "jacket",
    "chinese": "夹克",
    "phonetic": "[ˈdʒækit]",
    "example1": {
      "en": "I need a jacket.",
      "zh": "我需要一件夹克。"
    },
    "example2": {
      "en": "The waterproof jacket protected him from the heavy rain.",
      "zh": "这件防水夹克让他免受大雨的影响。"
    }
  },
  {
    "word": "shirt",
    "chinese": "衬衫",
    "phonetic": "[ʃə:t]",
    "example1": {
      "en": "The shirt is white.",
      "zh": "这件衬衫是白色的。"
    },
    "example2": {
      "en": "He ironed his shirt carefully before the interview.",
      "zh": "他在面试前仔细熨烫了衬衫。"
    }
  },
  {
    "word": "skirt",
    "chinese": "短裙",
    "phonetic": "[skə:t]",
    "example1": {
      "en": "Her skirt is blue.",
      "zh": "她的短裙是蓝色的。"
    },
    "example2": {
      "en": "The pleated skirt swayed gracefully as she walked.",
      "zh": "百褶裙随着她的步伐优雅摆动。"
    }
  },
  {
    "word": "dress",
    "chinese": "连衣裙",
    "phonetic": "[dres]",
    "example1": {
      "en": "She bought a dress.",
      "zh": "她买了一条连衣裙。"
    },
    "example2": {
      "en": "The elegant dress was perfect for the wedding ceremony.",
      "zh": "这件优雅的连衣裙很适合婚礼。"
    }
  },
  {
    "word": "jeans",
    "chinese": "牛仔裤",
    "phonetic": "[dʒi:n]",
    "example1": {
      "en": "These jeans fit well.",
      "zh": "这条牛仔裤很合身。"
    },
    "example2": {
      "en": "The vintage jeans became popular among young people.",
      "zh": "这种复古牛仔裤在年轻人中很流行。"
    }
  },
  {
    "word": "pants",
    "chinese": "长裤",
    "phonetic": "[pænts]",
    "example1": {
      "en": "My pants are new.",
      "zh": "我的长裤是新的。"
    },
    "example2": {
      "en": "The comfortable pants are suitable for hiking.",
      "zh": "这条舒适的长裤很适合徒步旅行。"
    }
  },
  {
    "word": "socks",
    "chinese": "袜子",
    "phonetic": "[sɔks]",
    "example1": {
      "en": "I need new socks.",
      "zh": "我需要新袜子。"
    },
    "example2": {
      "en": "The wool socks kept his feet warm in winter.",
      "zh": "这双羊毛袜子让他的脚在冬天保持温暖。"
    }
  },
  {
    "word": "shoes",
    "chinese": "鞋子",
    "phonetic": "[ʃu:z]",
    "example1": {
      "en": "My shoes are black.",
      "zh": "我的鞋子是黑色的。"
    },
    "example2": {
      "en": "The running shoes provided excellent support during the marathon.",
      "zh": "这双跑鞋在马拉松比赛中提供了极好的支撑。"
    }
  },
  {
    "word": "sweater",
    "chinese": "毛衣",
    "phonetic": "[ˈswetə]",
    "example1": {
      "en": "The sweater is warm.",
      "zh": "这件毛衣很暖和。"
    },
    "example2": {
      "en": "The hand-knitted sweater was a Christmas gift from grandmother.",
      "zh": "这件手织毛衣是奶奶的圣诞礼物。"
    }
  },
  {
    "word": "coat",
    "chinese": "外套",
    "phonetic": "[kəut]",
    "example1": {
      "en": "I need a warm coat.",
      "zh": "我需要一件暖和的外套。"
    },
    "example2": {
      "en": "The winter coat protected him from the freezing wind.",
      "zh": "这件冬季外套让他免受寒风侵袭。"
    }
  },
  {
    "word": "raincoat",
    "chinese": "雨衣",
    "phonetic": "[ˈreinkəut]",
    "example1": {
      "en": "Wear your raincoat.",
      "zh": "穿上你的雨衣。"
    },
    "example2": {
      "en": "The lightweight raincoat was perfect for the rainy season.",
      "zh": "这件轻便的雨衣很适合雨季使用。"
    }
  },
  {
    "word": "shorts",
    "chinese": "短裤",
    "phonetic": "[ʃɔ:ts]",
    "example1": {
      "en": "I wear shorts today.",
      "zh": "我今天穿短裤。"
    },
    "example2": {
      "en": "The athletic shorts were comfortable for playing tennis.",
      "zh": "这条运动短裤打网球时很舒适。"
    }
  },
  {
    "word": "hat",
    "chinese": "帽子",
    "phonetic": "[hæt]",
    "example1": {
      "en": "The hat is red.",
      "zh": "这顶帽子是红色的。"
    },
    "example2": {
      "en": "The wide-brimmed hat provided excellent sun protection.",
      "zh": "这顶宽檐帽提供了很好的遮阳效果。"
    }
  },
  {
    "word": "cap",
    "chinese": "便帽",
    "phonetic": "[kæp]",
    "example1": {
      "en": "He wears a cap.",
      "zh": "他戴着便帽。"
    },
    "example2": {
      "en": "The baseball cap protected his eyes from the strong sunlight.",
      "zh": "这顶棒球帽保护他的眼睛免受强光照射。"
    }
  },
  {
    "word": "scarf",
    "chinese": "围巾",
    "phonetic": "[skɑ:f]",
    "example1": {
      "en": "The scarf is long.",
      "zh": "这条围巾很长。"
    },
    "example2": {
      "en": "The silk scarf added elegance to her outfit.",
      "zh": "这条丝巾为她的着装增添了优雅。"
    }
  },
  {
    "word": "gloves",
    "chinese": "手套",
    "phonetic": "[ɡlʌvz]",
    "example1": {
      "en": "I lost my gloves.",
      "zh": "我丢了手套。"
    },
    "example2": {
      "en": "The waterproof gloves kept his hands dry while skiing.",
      "zh": "这副防水手套让他滑雪时手保持干燥。"
    }
  },
  {
    "word": "pen",
    "chinese": "钢笔",
    "phonetic": "[pen]",
    "example1": {
      "en": "This is my pen.",
      "zh": "这是我的钢笔。"
    },
    "example2": {
      "en": "The fountain pen wrote smoothly on the premium paper.",
      "zh": "这支钢笔在优质纸张上书写流畅。"
    }
  },
  {
    "word": "pencil",
    "chinese": "铅笔",
    "phonetic": "[ˈpensəl]",
    "example1": {
      "en": "I need a pencil.",
      "zh": "我需要一支铅笔。"
    },
    "example2": {
      "en": "The artist used various pencils to create detailed sketches.",
      "zh": "艺术家使用各种铅笔创作详细的素描。"
    }
  },
  {
    "word": "ruler",
    "chinese": "尺子",
    "phonetic": "[ˈru:lə]",
    "example1": {
      "en": "The ruler is long.",
      "zh": "这把尺子很长。"
    },
    "example2": {
      "en": "The metal ruler helped create precise measurements.",
      "zh": "这把金属尺子帮助进行精确测量。"
    }
  },
  {
    "word": "book",
    "chinese": "书",
    "phonetic": "[buk]",
    "example1": {
      "en": "I read a book.",
      "zh": "我在读一本书。"
    },
    "example2": {
      "en": "The ancient book contained valuable historical information.",
      "zh": "这本古书包含了宝贵的历史信息。"
    }
  },
  {
    "word": "bag",
    "chinese": "包",
    "phonetic": "[bæɡ]",
    "example1": {
      "en": "My bag is heavy.",
      "zh": "我的包很重。"
    },
    "example2": {
      "en": "The leather bag has lasted for many years.",
      "zh": "这个皮包已经用了很多年。"
    }
  },
  {
    "word": "newspaper",
    "chinese": "报纸",
    "phonetic": "[ˈnju:zpeipə]",
    "example1": {
      "en": "I read newspaper.",
      "zh": "我看报纸。"
    },
    "example2": {
      "en": "The local newspaper reported on community developments.",
      "zh": "当地报纸报道了社区发展情况。"
    }
  },
  {
    "word": "eraser",
    "chinese": "橡皮",
    "phonetic": "[iˈreizə]",
    "example1": {
      "en": "I need an eraser.",
      "zh": "我需要一个橡皮。"
    },
    "example2": {
      "en": "The quality eraser removed pencil marks completely.",
      "zh": "这个优质橡皮完全擦除了铅笔痕迹。"
    }
  },
  {
    "word": "crayon",
    "chinese": "蜡笔",
    "phonetic": "[ˈkreiən]",
    "example1": {
      "en": "Use the crayon.",
      "zh": "用这支蜡笔。"
    },
    "example2": {
      "en": "The children used crayons to create colorful drawings.",
      "zh": "孩子们用蜡笔创作了彩色画作。"
    }
  },
  {
    "word": "cat",
    "chinese": "猫",
    "phonetic": "[kæt]",
    "example1": {
      "en": "The cat is sleeping.",
      "zh": "猫在睡觉。"
    },
    "example2": {
      "en": "The Siamese cat won first prize in the pet show.",
      "zh": "这只暹罗猫在宠物展览中获得第一名。"
    }
  },
  {
    "word": "dog",
    "chinese": "狗",
    "phonetic": "[dɔɡ]",
    "example1": {
      "en": "The dog is friendly.",
      "zh": "这只狗很友好。"
    },
    "example2": {
      "en": "The trained dog helps blind people cross the street.",
      "zh": "这只训练有素的狗帮助盲人过马路。"
    }
  },
  {
    "word": "pig",
    "chinese": "猪",
    "phonetic": "[piɡ]",
    "example1": {
      "en": "The pig is pink.",
      "zh": "这头猪是粉色的。"
    },
    "example2": {
      "en": "The pig gained weight quickly on the farm.",
      "zh": "这头猪在农场里快速增重。"
    }
  },
  {
    "word": "duck",
    "chinese": "鸭",
    "phonetic": "[dʌk]",
    "example1": {
      "en": "The duck swims well.",
      "zh": "鸭子游泳很好。"
    },
    "example2": {
      "en": "The duck family crossed the busy park pond.",
      "zh": "这家鸭子穿过繁忙的公园池塘。"
    }
  },
  {
    "word": "rabbit",
    "chinese": "兔",
    "phonetic": "[ˈræbit]",
    "example1": {
      "en": "The rabbit is white.",
      "zh": "兔子是白色的。"
    },
    "example2": {
      "en": "The wild rabbit hopped through the garden at dawn.",
      "zh": "野兔在黎明时跳过花园。"
    }
  },
  {
    "word": "horse",
    "chinese": "马",
    "phonetic": "[hɔ:s]",
    "example1": {
      "en": "The horse runs fast.",
      "zh": "马跑得快。"
    },
    "example2": {
      "en": "The beautiful horse won several racing competitions.",
      "zh": "这匹漂亮的马赢得了几场赛马比赛。"
    }
  },
  {
    "word": "elephant",
    "chinese": "大象",
    "phonetic": "[ˈelifənt]",
    "example1": {
      "en": "The elephant is big.",
      "zh": "大象很大。"
    },
    "example2": {
      "en": "The African elephant protected its baby from predators.",
      "zh": "这头非洲象保护它的宝宝免受捕食者伤害。"
    }
  },
  {
    "word": "ant",
    "chinese": "蚂蚁",
    "phonetic": "[ænt]",
    "example1": {
      "en": "The ant is small.",
      "zh": "蚂蚁很小。"
    },
    "example2": {
      "en": "The industrious ants worked together to build their nest.",
      "zh": "勤劳的蚂蚁一起建造它们的巢穴。"
    }
  },
  {
    "word": "fish",
    "chinese": "鱼",
    "phonetic": "[fiʃ]",
    "example1": {
      "en": "The fish swims.",
      "zh": "鱼在游泳。"
    },
    "example2": {
      "en": "The tropical fish displayed brilliant colors in the aquarium.",
      "zh": "热带鱼在水族箱中展示出绚丽的色彩。"
    }
  },
  {
    "word": "bird",
    "chinese": "鸟",
    "phonetic": "[bə:d]",
    "example1": {
      "en": "The bird can fly.",
      "zh": "鸟会飞。"
    },
    "example2": {
      "en": "The rare bird species was spotted in the rainforest.",
      "zh": "这种稀有鸟类在热带雨林中被发现。"
    }
  },
  {
    "word": "eagle",
    "chinese": "鹰",
    "phonetic": "[ˈi:ɡl]",
    "example1": {
      "en": "The eagle flies high.",
      "zh": "鹰飞得很高。"
    },
    "example2": {
      "en": "The majestic eagle soared above the mountain peaks.",
      "zh": "雄伟的老鹰在山峰上空翱翔。"
    }
  },
  {
    "word": "snake",
    "chinese": "蛇",
    "phonetic": "[sneik]",
    "example1": {
      "en": "The snake is long.",
      "zh": "蛇很长。"
    },
    "example2": {
      "en": "The colorful snake slithered through the grass.",
      "zh": "这条彩色的蛇在草丛中滑行。"
    }
  },
  {
    "word": "mouse",
    "chinese": "老鼠",
    "phonetic": "[maus]",
    "example1": {
      "en": "The mouse is quick.",
      "zh": "老鼠很快。"
    },
    "example2": {
      "en": "The clever mouse found its way through the maze.",
      "zh": "聪明的老鼠找到了穿过迷宫的路。"
    }
  },
  {
    "word": "monkey",
    "chinese": "猴",
    "phonetic": "[ˈmʌŋki]",
    "example1": {
      "en": "The monkey climbs.",
      "zh": "猴子在爬。"
    },
    "example2": {
      "en": "The playful monkey swung from tree to tree.",
      "zh": "调皮的猴子在树与树之间荡来荡去。"
    }
  },
  {
    "word": "panda",
    "chinese": "熊猫",
    "phonetic": "[ˈpændə]",
    "example1": {
      "en": "The panda eats bamboo.",
      "zh": "熊猫吃竹子。"
    },
    "example2": {
      "en": "The giant panda played happily in the snow.",
      "zh": "大熊猫在雪地里快乐地玩耍。"
    }
  },
  {
    "word": "bear",
    "chinese": "熊",
    "phonetic": "[bεə]",
    "example1": {
      "en": "The bear is strong.",
      "zh": "熊很强壮。"
    },
    "example2": {
      "en": "The brown bear caught fish in the mountain stream.",
      "zh": "棕熊在山溪中捕鱼。"
    }
  },
  {
    "word": "lion",
    "chinese": "狮子",
    "phonetic": "[ˈlaiən]",
    "example1": {
      "en": "The lion roars.",
      "zh": "狮子在咆哮。"
    },
    "example2": {
      "en": "The male lion protected his pride in the savanna.",
      "zh": "雄狮在草原上保护他的狮群。"
    }
  },
  {
    "word": "tiger",
    "chinese": "老虎",
    "phonetic": "[ˈtaiɡə]",
    "example1": {
      "en": "The tiger is fierce.",
      "zh": "老虎很凶猛。"
    },
    "example2": {
      "en": "The Bengal tiger stalked silently through the jungle.",
      "zh": "孟加拉虎在丛林中悄悄潜行。"
    }
  },
  {
    "word": "fox",
    "chinese": "狐狸",
    "phonetic": "[fɔks]",
    "example1": {
      "en": "The fox is clever.",
      "zh": "狐狸很聪明。"
    },
    "example2": {
      "en": "The red fox hunted for food in the snow.",
      "zh": "红狐在雪地里寻找食物。"
    }
  },
  {
    "word": "zebra",
    "chinese": "斑马",
    "phonetic": "[ˈzi:brə]",
    "example1": {
      "en": "The zebra has stripes.",
      "zh": "斑马有条纹。"
    },
    "example2": {
      "en": "The zebra herd migrated across the African plains.",
      "zh": "斑马群在非洲平原上迁徙。"
    }
  },
  {
    "word": "deer",
    "chinese": "鹿",
    "phonetic": "[diə]",
    "example1": {
      "en": "The deer runs fast.",
      "zh": "鹿跑得快。"
    },
    "example2": {
      "en": "The gentle deer grazed peacefully in the meadow.",
      "zh": "温顺的鹿在草地上平静地吃草。"
    }
  },
  {
    "word": "giraffe",
    "chinese": "长颈鹿",
    "phonetic": "[dʒiˈrɑ:f]",
    "example1": {
      "en": "The giraffe is tall.",
      "zh": "长颈鹿很高。"
    },
    "example2": {
      "en": "The giraffe reached the highest leaves on the tree.",
      "zh": "长颈鹿够到了树上最高的叶子。"
    }
  },
  {
    "word": "goose",
    "chinese": "鹅",
    "phonetic": "[ɡu:s]",
    "example1": {
      "en": "The goose swims.",
      "zh": "鹅在游泳。"
    },
    "example2": {
      "en": "The wild goose led its flock south for winter.",
      "zh": "野鹅带领它的鸟群南飞过冬。"
    }
  },
  {
    "word": "hen",
    "chinese": "母鸡",
    "phonetic": "[hen]",
    "example1": {
      "en": "The hen lays eggs.",
      "zh": "母鸡下蛋。"
    },
    "example2": {
      "en": "The mother hen gathered her chicks under her wings.",
      "zh": "母鸡把小鸡聚集在翅膀下。"
    }
  },
  {
    "word": "sheep",
    "chinese": "绵羊",
    "phonetic": "[ʃi:p]",
    "example1": {
      "en": "The sheep eats grass.",
      "zh": "绵羊吃草。"
    },
    "example2": {
      "en": "The flock of sheep grazed peacefully on the hillside.",
      "zh": "一群绵羊在山坡上安静地吃草。"
    }
  },
  {
    "word": "cow",
    "chinese": "奶牛",
    "phonetic": "[kau]",
    "example1": {
      "en": "The cow gives milk.",
      "zh": "奶牛产奶。"
    },
    "example2": {
      "en": "The dairy cow produced fresh milk every morning.",
      "zh": "奶牛每天早上都产新鲜的牛奶。"
    }
  },
  {
    "word": "shark",
    "chinese": "鲨鱼",
    "phonetic": "[ʃɑ:k]",
    "example1": {
      "en": "The shark swims fast.",
      "zh": "鲨鱼游得快。"
    },
    "example2": {
      "en": "The great white shark patrolled the deep ocean waters.",
      "zh": "大白鲨在深海水域巡游。"
    }
  },
  {
    "word": "apple",
    "chinese": "苹果",
    "phonetic": "[ˈæpl]",
    "example1": {
      "en": "I eat an apple.",
      "zh": "我吃一个苹果。"
    },
    "example2": {
      "en": "The fresh apple fell from the old tree in the orchard.",
      "zh": "新鲜的苹果从果园里的老树上掉下来。"
    }
  },
  {
    "word": "banana",
    "chinese": "香蕉",
    "phonetic": "[bəˈnɑ:nə]",
    "example1": {
      "en": "I like bananas.",
      "zh": "我喜欢香蕉。"
    },
    "example2": {
      "en": "The ripe bananas provided quick energy for the athletes.",
      "zh": "熟透的香蕉为运动员提供快速能量。"
    }
  },
  {
    "word": "pear",
    "chinese": "梨",
    "phonetic": "[pεə]",
    "example1": {
      "en": "The pear is sweet.",
      "zh": "这个梨很甜。"
    },
    "example2": {
      "en": "The juicy pear was perfectly ripe for eating.",
      "zh": "这个多汁的梨正好熟透可以食用。"
    }
  },
  {
    "word": "orange",
    "chinese": "橙子",
    "phonetic": "[ˈɔrindʒ]",
    "example1": {
      "en": "I have an orange.",
      "zh": "我有一个橙子。"
    },
    "example2": {
      "en": "The sweet orange provided plenty of vitamin C.",
      "zh": "这个甜橙提供了丰富的维生素C。"
    }
  },
  {
    "word": "watermelon",
    "chinese": "西瓜",
    "phonetic": "[ˈwɔ:təmelən]",
    "example1": {
      "en": "The watermelon is big.",
      "zh": "这个西瓜很大。"
    },
    "example2": {
      "en": "The cold watermelon refreshed us on the hot summer day.",
      "zh": "冰凉的西瓜在炎热的夏天让我们清爽。"
    }
  },
  {
    "word": "grape",
    "chinese": "葡萄",
    "phonetic": "[ɡreip]",
    "example1": {
      "en": "I bought some grapes.",
      "zh": "我买了一些葡萄。"
    },
    "example2": {
      "en": "The sweet grapes were harvested from the vineyard.",
      "zh": "甜美的葡萄从葡萄园里收获。"
    }
  },
  {
    "word": "eggplant",
    "chinese": "茄子",
    "phonetic": "[ˈeɡplɑ:nt]",
    "example1": {
      "en": "I cook eggplant.",
      "zh": "我烹饪茄子。"
    },
    "example2": {
      "en": "The grilled eggplant was seasoned with herbs.",
      "zh": "烤茄子用香草调味。"
    }
  },
  {
    "word": "tomato",
    "chinese": "西红柿",
    "phonetic": "[təˈmɑ:təu]",
    "example1": {
      "en": "I slice tomatoes.",
      "zh": "我切西红柿。"
    },
    "example2": {
      "en": "The fresh tomatoes made the salad taste better.",
      "zh": "新鲜的西红柿让沙拉味道更好。"
    }
  },
  {
    "word": "potato",
    "chinese": "土豆",
    "phonetic": "[pəˈteitəu]",
    "example1": {
      "en": "I peel potatoes.",
      "zh": "我削土豆皮。"
    },
    "example2": {
      "en": "The baked potato was served with sour cream.",
      "zh": "烤土豆配酸奶油端上桌。"
    }
  },
  {
    "word": "peach",
    "chinese": "桃子",
    "phonetic": "[pi:tʃ]",
    "example1": {
      "en": "The peach is soft.",
      "zh": "这个桃子很软。"
    },
    "example2": {
      "en": "The sweet peach juice dripped down his chin.",
      "zh": "甜美的桃汁滴到他的下巴上。"
    }
  },
  {
    "word": "strawberry",
    "chinese": "草莓",
    "phonetic": "[ˈstrɔ:bəri]",
    "example1": {
      "en": "I grow strawberries.",
      "zh": "我种草莓。"
    },
    "example2": {
      "en": "The fresh strawberries were perfect for making jam.",
      "zh": "新鲜的草莓非常适合制作果酱。"
    }
  },
  {
    "word": "cucumber",
    "chinese": "黄瓜",
    "phonetic": "[ˈkju:kʌmbə]",
    "example1": {
      "en": "I slice cucumber.",
      "zh": "我切黄瓜。"
    },
    "example2": {
      "en": "The cool cucumber added freshness to the sandwich.",
      "zh": "清爽的黄瓜为三明治增添了新鲜感。"
    }
  },
  {
    "word": "onion",
    "chinese": "洋葱",
    "phonetic": "[ˈʌnjən]",
    "example1": {
      "en": "I cut onions.",
      "zh": "我切洋葱。"
    },
    "example2": {
      "en": "The chopped onion added flavor to the soup.",
      "zh": "切碎的洋葱为汤增添了风味。"
    }
  },
  {
    "word": "carrot",
    "chinese": "胡萝卜",
    "phonetic": "[ˈkærət]",
    "example1": {
      "en": "I eat carrots.",
      "zh": "我吃胡萝卜。"
    },
    "example2": {
      "en": "The fresh carrot was perfect for the salad.",
      "zh": "新鲜的胡萝卜很适合做沙拉。"
    }
  },
  {
    "word": "cabbage",
    "chinese": "卷心菜",
    "phonetic": "[ˈkæbidʒ]",
    "example1": {
      "en": "I cook cabbage.",
      "zh": "我烹饪卷心菜。"
    },
    "example2": {
      "en": "The green cabbage was perfect for making coleslaw.",
      "zh": "绿卷心菜很适合制作凉拌卷心菜。"
    }
  },
  {
    "word": "rice",
    "chinese": "米饭",
    "phonetic": "[rais]",
    "example1": {
      "en": "I eat rice daily.",
      "zh": "我每天吃米饭。"
    },
    "example2": {
      "en": "The steamed rice accompanied the curry perfectly.",
      "zh": "蒸好的米饭很配咖喱。"
    }
  },
  {
    "word": "bread",
    "chinese": "面包",
    "phonetic": "[bred]",
    "example1": {
      "en": "I buy fresh bread.",
      "zh": "我买新鲜面包。"
    },
    "example2": {
      "en": "The homemade bread filled the kitchen with its aroma.",
      "zh": "自制面包的香气填满了厨房。"
    }
  },
  {
    "word": "milk",
    "chinese": "牛奶",
    "phonetic": "[milk]",
    "example1": {
      "en": "I drink milk.",
      "zh": "我喝牛奶。"
    },
    "example2": {
      "en": "The fresh milk came from the local dairy farm.",
      "zh": "新鲜牛奶来自当地奶牛场。"
    }
  },
  {
    "word": "egg",
    "chinese": "鸡蛋",
    "phonetic": "[eɡ]",
    "example1": {
      "en": "I boil eggs.",
      "zh": "我煮鸡蛋。"
    },
    "example2": {
      "en": "The fresh eggs were collected from the henhouse.",
      "zh": "新鲜的鸡蛋是从鸡舍收集的。"
    }
  },
  {
    "word": "meat",
    "chinese": "肉",
    "phonetic": "[mi:t]",
    "example1": {
      "en": "I cook meat.",
      "zh": "我烹饪肉。"
    },
    "example2": {
      "en": "The tender meat was cooked to perfection.",
      "zh": "嫩肉烹饪得恰到好处。"
    }
  },
  {
    "word": "fish",
    "chinese": "鱼",
    "phonetic": "[fiʃ]",
    "example1": {
      "en": "I like fish.",
      "zh": "我喜欢鱼。"
    },
    "example2": {
      "en": "The grilled fish was seasoned with herbs.",
      "zh": "烤鱼用香草调味。"
    }
  },
  {
    "word": "soup",
    "chinese": "汤",
    "phonetic": "[su:p]",
    "example1": {
      "en": "The soup is hot.",
      "zh": "汤是热的。"
    },
    "example2": {
      "en": "The homemade soup warmed us on the cold winter day.",
      "zh": "自制的汤在寒冷的冬天温暖了我们。"
    }
  },
  {
    "word": "cake",
    "chinese": "蛋糕",
    "phonetic": "[keik]",
    "example1": {
      "en": "I bake cakes.",
      "zh": "我烤蛋糕。"
    },
    "example2": {
      "en": "The birthday cake was decorated with fresh fruit.",
      "zh": "生日蛋糕用新鲜水果装饰。"
    }
  },
  {
    "word": "cookie",
    "chinese": "饼干",
    "phonetic": "[ˈkuki]",
    "example1": {
      "en": "I like cookies.",
      "zh": "我喜欢饼干。"
    },
    "example2": {
      "en": "The chocolate cookies filled the house with sweet aroma.",
      "zh": "巧克力饼干的香甜气息充满了房子。"
    }
  },
  {
    "word": "car",
    "chinese": "汽车",
    "phonetic": "[kɑ:]",
    "example1": {
      "en": "I drive a car.",
      "zh": "我开车。"
    },
    "example2": {
      "en": "The electric car runs silently on the highway.",
      "zh": "电动汽车在高速公路上安静地行驶。"
    }
  },
  {
    "word": "bus",
    "chinese": "公共汽车",
    "phonetic": "[bʌs]",
    "example1": {
      "en": "I take the bus.",
      "zh": "我坐公交车。"
    },
    "example2": {
      "en": "The school bus picked up children every morning.",
      "zh": "校车每天早上接送孩子们。"
    }
  },
  {
    "word": "train",
    "chinese": "火车",
    "phonetic": "[trein]",
    "example1": {
      "en": "The train is fast.",
      "zh": "火车很快。"
    },
    "example2": {
      "en": "The high-speed train arrived at its destination on time.",
      "zh": "高铁准时到达目的地。"
    }
  },
  {
    "word": "plane",
    "chinese": "飞机",
    "phonetic": "[plein]",
    "example1": {
      "en": "The plane flies.",
      "zh": "飞机在飞。"
    },
    "example2": {
      "en": "The commercial plane carried hundreds of passengers.",
      "zh": "这架商用飞机载着数百名乘客。"
    }
  },
  {
    "word": "ship",
    "chinese": "轮船",
    "phonetic": "[ʃip]",
    "example1": {
      "en": "The ship is huge.",
      "zh": "轮船很大。"
    },
    "example2": {
      "en": "The cruise ship sailed across the Pacific Ocean.",
      "zh": "游轮驶过太平洋。"
    }
  },
  {
    "word": "bike",
    "chinese": "自行车",
    "phonetic": "[baik]",
    "example1": {
      "en": "I ride my bike.",
      "zh": "我骑自行车。"
    },
    "example2": {
      "en": "The mountain bike performed well on rough terrain.",
      "zh": "这辆山地自行车在崎岖地形上表现良好。"
    }
  },
  {
    "word": "taxi",
    "chinese": "出租车",
    "phonetic": "[ˈtæksi]",
    "example1": {
      "en": "I call a taxi.",
      "zh": "我叫出租车。"
    },
    "example2": {
      "en": "The taxi driver knew all the shortcuts in the city.",
      "zh": "出租车司机知道城市里所有的捷径。"
    }
  },
  {
    "word": "school",
    "chinese": "学校",
    "phonetic": "[sku:l]",
    "example1": {
      "en": "I go to school.",
      "zh": "我去学校。"
    },
    "example2": {
      "en": "The new school opened its doors to students last month.",
      "zh": "新学校上个月向学生开放。"
    }
  },
  {
    "word": "hospital",
    "chinese": "医院",
    "phonetic": "[ˈhɔspitl]",
    "example1": {
      "en": "The hospital is big.",
      "zh": "医院很大。"
    },
    "example2": {
      "en": "The modern hospital provides excellent medical care.",
      "zh": "这家现代化医院提供优质的医疗服务。"
    }
  },
  {
    "word": "library",
    "chinese": "图书馆",
    "phonetic": "[ˈlaibrəri]",
    "example1": {
      "en": "I study in the library.",
      "zh": "我在图书馆学习。"
    },
    "example2": {
      "en": "The university library contains thousands of books.",
      "zh": "大学图书馆藏有数千本书。"
    }
  },
  {
    "word": "gym",
    "chinese": "体育馆",
    "phonetic": "[dʒim]",
    "example1": {
      "en": "I exercise in the gym.",
      "zh": "我在体育馆锻炼。"
    },
    "example2": {
      "en": "The new gym has state-of-the-art equipment.",
      "zh": "新体育馆有最先进的设备。"
    }
  },
  {
    "word": "washroom",
    "chinese": "洗手间",
    "phonetic": "[ˈwɔʃrum]",
    "example1": {
      "en": "The washroom is clean.",
      "zh": "洗手间很干净。"
    },
    "example2": {
      "en": "The public washroom was recently renovated.",
      "zh": "公共洗手间最近装修过。"
    }
  },
  {
    "word": "flat",
    "chinese": "公寓",
    "phonetic": "[flæt]",
    "example1": {
      "en": "I live in a flat.",
      "zh": "我住在公寓里。"
    },
    "example2": {
      "en": "The modern flat has a beautiful city view.",
      "zh": "这间现代公寓有美丽的城市景观。"
    }
  },
  {
    "word": "company",
    "chinese": "公司",
    "phonetic": "[ˈkɔmpəni]",
    "example1": {
      "en": "I work for a company.",
      "zh": "我在一家公司工作。"
    },
    "example2": {
      "en": "The technology company developed innovative products.",
      "zh": "这家科技公司开发创新产品。"
    }
  },
  {
    "word": "factory",
    "chinese": "工厂",
    "phonetic": "[ˈfæktəri]",
    "example1": {
      "en": "The factory is large.",
      "zh": "工厂很大。"
    },
    "example2": {
      "en": "The automobile factory produces thousands of cars annually.",
      "zh": "这家汽车工厂每年生产数千辆汽车。"
    }
  },
  {
    "word": "store",
    "chinese": "商店",
    "phonetic": "[stɔ:]",
    "example1": {
      "en": "I shop at the store.",
      "zh": "我在商店购物。"
    },
    "example2": {
      "en": "The convenience store is open twenty-four hours.",
      "zh": "这家便利店24小时营业。"
    }
  },
  {
    "word": "bank",
    "chinese": "银行",
    "phonetic": "[bæŋk]",
    "example1": {
      "en": "I go to the bank.",
      "zh": "我去银行。"
    },
    "example2": {
      "en": "The local bank offers various financial services.",
      "zh": "当地银行提供各种金融服务。"
    }
  },
  {
    "word": "restaurant",
    "chinese": "餐馆",
    "phonetic": "[ˈrestərɔnt]",
    "example1": {
      "en": "We eat at restaurants.",
      "zh": "我们在餐馆吃饭。"
    },
    "example2": {
      "en": "The Italian restaurant serves authentic pasta dishes.",
      "zh": "这家意大利餐厅供应正宗的意面。"
    }
  },
  {
    "word": "park",
    "chinese": "公园",
    "phonetic": "[pɑ:k]",
    "example1": {
      "en": "I walk in the park.",
      "zh": "我在公园散步。"
    },
    "example2": {
      "en": "The city park has beautiful flowers and trees.",
      "zh": "城市公园有美丽的花草树木。"
    }
  },
  {
    "word": "museum",
    "chinese": "博物馆",
    "phonetic": "[mju:ˈziəm]",
    "example1": {
      "en": "I visit the museum.",
      "zh": "我参观博物馆。"
    },
    "example2": {
      "en": "The history museum displays ancient artifacts.",
      "zh": "历史博物馆展示古代文物。"
    }
  },
  {
    "word": "hotel",
    "chinese": "宾馆",
    "phonetic": "[həuˈtel]",
    "example1": {
      "en": "I stay in a hotel.",
      "zh": "我住在宾馆。"
    },
    "example2": {
      "en": "The luxury hotel offers excellent service.",
      "zh": "这家豪华酒店提供优质服务。"
    }
  },
  {
    "word": "cinema",
    "chinese": "电影院",
    "phonetic": "[ˈsinəmə]",
    "example1": {
      "en": "I go to the cinema.",
      "zh": "我去电影院。"
    },
    "example2": {
      "en": "The modern cinema shows the latest movies.",
      "zh": "这家现代电影院放映最新电影。"
    }
  },
  {
    "word": "airport",
    "chinese": "机场",
    "phonetic": "[ˈεəpɔ:t]",
    "example1": {
      "en": "I arrive at the airport.",
      "zh": "我到达机场。"
    },
    "example2": {
      "en": "The international airport handles millions of passengers.",
      "zh": "这个国际机场接待数百万旅客。"
    }
  },
  {
    "word": "station",
    "chinese": "车站",
    "phonetic": "[ˈsteiʃən]",
    "example1": {
      "en": "I wait at the station.",
      "zh": "我在车站等候。"
    },
    "example2": {
      "en": "The train station was crowded during rush hour.",
      "zh": "火车站在高峰时段很拥挤。"
    }
  },
  {
    "word": "sky",
    "chinese": "天空",
    "phonetic": "[skai]",
    "example1": {
      "en": "The sky is blue.",
      "zh": "天空是蓝色的。"
    },
    "example2": {
      "en": "The night sky was filled with twinkling stars.",
      "zh": "夜空中充满了闪烁的星星。"
    }
  },
  {
    "word": "sun",
    "chinese": "太阳",
    "phonetic": "[sʌn]",
    "example1": {
      "en": "The sun is bright.",
      "zh": "太阳很明亮。"
    },
    "example2": {
      "en": "The morning sun cast long shadows across the field.",
      "zh": "晨光在田野上投下长长的影子。"
    }
  },
  {
    "word": "moon",
    "chinese": "月亮",
    "phonetic": "[mu:n]",
    "example1": {
      "en": "The moon is round.",
      "zh": "月亮是圆的。"
    },
    "example2": {
      "en": "The full moon illuminated the entire landscape.",
      "zh": "满月照亮了整个风景。"
    }
  },
  {
    "word": "star",
    "chinese": "星星",
    "phonetic": "[stɑ:]",
    "example1": {
      "en": "I see many stars.",
      "zh": "我看见很多星星。"
    },
    "example2": {
      "en": "The shooting star streaked across the night sky.",
      "zh": "流星划过夜空。"
    }
  },
  {
    "word": "cloud",
    "chinese": "云",
    "phonetic": "[klaud]",
    "example1": {
      "en": "The clouds are white.",
      "zh": "云是白色的。"
    },
    "example2": {
      "en": "Dark clouds gathered before the storm.",
      "zh": "暴风雨前乌云密布。"
    }
  },
  {
    "word": "rain",
    "chinese": "雨",
    "phonetic": "[rein]",
    "example1": {
      "en": "It's raining now.",
      "zh": "现在在下雨。"
    },
    "example2": {
      "en": "The gentle rain helped the flowers grow.",
      "zh": "温和的雨水帮助花朵生长。"
    }
  },
  {
    "word": "snow",
    "chinese": "雪",
    "phonetic": "[snəu]",
    "example1": {
      "en": "I love snow.",
      "zh": "我喜欢雪。"
    },
    "example2": {
      "en": "Fresh snow covered the mountain peaks.",
      "zh": "新雪覆盖着山峰。"
    }
  },
  {
    "word": "wind",
    "chinese": "风",
    "phonetic": "[wind]",
    "example1": {
      "en": "The wind is strong.",
      "zh": "风很大。"
    },
    "example2": {
      "en": "The autumn wind scattered leaves everywhere.",
      "zh": "秋风把落叶吹得到处都是。"
    }
  },
  {
    "word": "mountain",
    "chinese": "山",
    "phonetic": "[ˈmauntin]",
    "example1": {
      "en": "The mountain is high.",
      "zh": "山很高。"
    },
    "example2": {
      "en": "The snow-capped mountain drew many climbers.",
      "zh": "这座雪山吸引了很多登山者。"
    }
  },
  {
    "word": "river",
    "chinese": "河流",
    "phonetic": "[ˈrivə]",
    "example1": {
      "en": "The river is long.",
      "zh": "河流很长。"
    },
    "example2": {
      "en": "The mighty river flowed through the valley.",
      "zh": "大河流经山谷。"
    }
  },
  {
    "word": "lake",
    "chinese": "湖",
    "phonetic": "[leik]",
    "example1": {
      "en": "The lake is deep.",
      "zh": "湖很深。"
    },
    "example2": {
      "en": "The calm lake reflected the surrounding mountains.",
      "zh": "平静的湖面倒映着周围的群山。"
    }
  },
  {
    "word": "sea",
    "chinese": "海",
    "phonetic": "[si:]",
    "example1": {
      "en": "The sea is blue.",
      "zh": "海是蓝色的。"
    },
    "example2": {
      "en": "The vast sea stretched to the horizon.",
      "zh": "浩瀚的大海延伸到地平线。"
    }
  },
  {
    "word": "beach",
    "chinese": "海滩",
    "phonetic": "[bi:tʃ]",
    "example1": {
      "en": "I love the beach.",
      "zh": "我喜欢海滩。"
    },
    "example2": {
      "en": "The sandy beach attracted many tourists.",
      "zh": "沙滩吸引了许多游客。"
    }
  },
  {
    "word": "forest",
    "chinese": "森林",
    "phonetic": "[ˈfɔrist]",
    "example1": {
      "en": "The forest is green.",
      "zh": "森林是绿色的。"
    },
    "example2": {
      "en": "The ancient forest contained many rare species.",
      "zh": "这片古老的森林中有许多珍稀物种。"
    }
  },
  {
    "word": "grass",
    "chinese": "草",
    "phonetic": "[ɡrɑ:s]",
    "example1": {
      "en": "The grass is soft.",
      "zh": "草很软。"
    },
    "example2": {
      "en": "The green grass covered the entire meadow.",
      "zh": "绿草覆盖着整片草地。"
    }
  },
  {
    "word": "tree",
    "chinese": "树",
    "phonetic": "[tri:]",
    "example1": {
      "en": "The tree is tall.",
      "zh": "树很高。"
    },
    "example2": {
      "en": "The old tree provided shade for the park.",
      "zh": "这棵老树为公园提供遮荫。"
    }
  },
  {
    "word": "flower",
    "chinese": "花",
    "phonetic": "[ˈflauə]",
    "example1": {
      "en": "The flower is pretty.",
      "zh": "花很漂亮。"
    },
    "example2": {
      "en": "The colorful flowers bloomed in the garden.",
      "zh": "五彩缤纷的花朵在花园里绽放。"
    }
  },
  {
    "word": "spring",
    "chinese": "春天",
    "phonetic": "[spriŋ]",
    "example1": {
      "en": "Spring is warm.",
      "zh": "春天很暖和。"
    },
    "example2": {
      "en": "The flowers bloom in spring.",
      "zh": "花朵在春天绽放。"
    }
  },
  {
    "word": "summer",
    "chinese": "夏天",
    "phonetic": "[ˈsʌmə]",
    "example1": {
      "en": "Summer is hot.",
      "zh": "夏天很热。"
    },
    "example2": {
      "en": "Children enjoy swimming in summer.",
      "zh": "孩子们喜欢在夏天游泳。"
    }
  },
  {
    "word": "autumn",
    "chinese": "秋天",
    "phonetic": "[ˈɔ:təm]",
    "example1": {
      "en": "Autumn is cool.",
      "zh": "秋天很凉爽。"
    },
    "example2": {
      "en": "The leaves turn red in autumn.",
      "zh": "树叶在秋天变红。"
    }
  },
  {
    "word": "winter",
    "chinese": "冬天",
    "phonetic": "[ˈwintə]",
    "example1": {
      "en": "Winter is cold.",
      "zh": "冬天很冷。"
    },
    "example2": {
      "en": "The lake freezes in winter.",
      "zh": "湖水在冬天结冰。"
    }
  },
  {
    "word": "morning",
    "chinese": "早上",
    "phonetic": "[ˈmɔ:niŋ]",
    "example1": {
      "en": "Good morning.",
      "zh": "早上好。"
    },
    "example2": {
      "en": "The morning sun brightened the whole room.",
      "zh": "晨光照亮了整个房间。"
    }
  },
  {
    "word": "noon",
    "chinese": "中午",
    "phonetic": "[nu:n]",
    "example1": {
      "en": "It's noon now.",
      "zh": "现在是中午。"
    },
    "example2": {
      "en": "The sun was directly overhead at noon.",
      "zh": "中午时分太阳正好在头顶。"
    }
  },
  {
    "word": "evening",
    "chinese": "晚上",
    "phonetic": "[ˈi:vniŋ]",
    "example1": {
      "en": "Good evening.",
      "zh": "晚上好。"
    },
    "example2": {
      "en": "The family gathered for dinner in the evening.",
      "zh": "一家人晚上聚在一起吃晚饭。"
    }
  },
  {
    "word": "night",
    "chinese": "夜晚",
    "phonetic": "[nait]",
    "example1": {
      "en": "Good night.",
      "zh": "晚安。"
    },
    "example2": {
      "en": "The stars shone brightly in the night sky.",
      "zh": "星星在夜空中明亮地闪烁。"
    }
  },
  {
    "word": "happy",
    "chinese": "快乐的",
    "phonetic": "[ˈhæpi]",
    "example1": {
      "en": "I am happy.",
      "zh": "我很快乐。"
    },
    "example2": {
      "en": "The children were happy playing in the park.",
      "zh": "孩子们在公园玩耍很开心。"
    }
  },
  {
    "word": "sad",
    "chinese": "伤心的",
    "phonetic": "[sæd]",
    "example1": {
      "en": "He looks sad.",
      "zh": "他看起来很伤心。"
    },
    "example2": {
      "en": "The sad news brought tears to everyone's eyes.",
      "zh": "这个悲伤的消息让每个人都流下了眼泪。"
    }
  },
  {
    "word": "tired",
    "chinese": "疲倦的",
    "phonetic": "[ˈtaiəd]",
    "example1": {
      "en": "I am tired.",
      "zh": "我很累。"
    },
    "example2": {
      "en": "The marathon runners were tired but satisfied.",
      "zh": "马拉松运动员虽然疲惫但很满足。"
    }
  },
  {
    "word": "hungry",
    "chinese": "饿的",
    "phonetic": "[ˈhʌŋɡri]",
    "example1": {
      "en": "I am hungry.",
      "zh": "我很饿。"
    },
    "example2": {
      "en": "The hungry children eagerly ate their lunch.",
      "zh": "饥饿的孩子们急切地吃着午饭。"
    }
  },
  {
    "word": "thirsty",
    "chinese": "渴的",
    "phonetic": "[ˈθə:sti]",
    "example1": {
      "en": "I am thirsty.",
      "zh": "我很渴。"
    },
    "example2": {
      "en": "The thirsty runners grabbed water bottles.",
      "zh": "口渴的跑步者抓起水瓶。"
    }
  },
  {
    "word": "busy",
    "chinese": "忙的",
    "phonetic": "[ˈbizi]",
    "example1": {
      "en": "I am busy.",
      "zh": "我很忙。"
    },
    "example2": {
      "en": "The busy chef prepared multiple dishes at once.",
      "zh": "忙碌的厨师同时准备多道菜。"
    }
  },
  {
    "word": "lazy",
    "chinese": "懒的",
    "phonetic": "[ˈleizi]",
    "example1": {
      "en": "Don't be lazy.",
      "zh": "别偷懒。"
    },
    "example2": {
      "en": "The lazy cat slept in the sun all day.",
      "zh": "懒猫整天在阳光下睡觉。"
    }
  },
  {
    "word": "tall",
    "chinese": "高的",
    "phonetic": "[tɔ:l]",
    "example1": {
      "en": "He is tall.",
      "zh": "他很高。"
    },
    "example2": {
      "en": "The tall building dominated the city skyline.",
      "zh": "这座高楼主导了城市的天际线。"
    }
  },
  {
    "word": "short",
    "chinese": "矮的",
    "phonetic": "[ʃɔ:t]",
    "example1": {
      "en": "The tree is short.",
      "zh": "这棵树很矮。"
    },
    "example2": {
      "en": "The short path led directly to the garden.",
      "zh": "这条短路直接通向花园。"
    }
  },
  {
    "word": "big",
    "chinese": "大的",
    "phonetic": "[biɡ]",
    "example1": {
      "en": "The house is big.",
      "zh": "房子很大。"
    },
    "example2": {
      "en": "The big elephant sprayed water with its trunk.",
      "zh": "大象用鼻子喷水。"
    }
  },
  {
    "word": "small",
    "chinese": "小的",
    "phonetic": "[smɔ:l]",
    "example1": {
      "en": "The cat is small.",
      "zh": "猫很小。"
    },
    "example2": {
      "en": "The small bird built a nest in the tree.",
      "zh": "小鸟在树上筑巢。"
    }
  },
  {
    "word": "hot",
    "chinese": "热的",
    "phonetic": "[hɔt]",
    "example1": {
      "en": "The soup is hot.",
      "zh": "汤很热。"
    },
    "example2": {
      "en": "The hot summer day made everyone sweat.",
      "zh": "炎热的夏日让每个人都出汗。"
    }
  },
  {
    "word": "cold",
    "chinese": "冷的",
    "phonetic": "[kəuld]",
    "example1": {
      "en": "The ice is cold.",
      "zh": "冰很冷。"
    },
    "example2": {
      "en": "The cold winter wind chilled us to the bone.",
      "zh": "寒冷的冬风让我们冷到骨子里。"
    }
  },
  {
    "word": "clean",
    "chinese": "干净的",
    "phonetic": "[kli:n]",
    "example1": {
      "en": "The room is clean.",
      "zh": "房间很干净。"
    },
    "example2": {
      "en": "The clean windows sparkled in the sunlight.",
      "zh": "干净的窗户在阳光下闪闪发亮。"
    }
  },
  {
    "word": "dirty",
    "chinese": "脏的",
    "phonetic": "[ˈdə:ti]",
    "example1": {
      "en": "My hands are dirty.",
      "zh": "我的手很脏。"
    },
    "example2": {
      "en": "The dirty car needed a thorough wash.",
      "zh": "脏车需要彻底清洗。"
    }
  },
  {
    "word": "new",
    "chinese": "新的",
    "phonetic": "[nju:]",
    "example1": {
      "en": "I have a new book.",
      "zh": "我有一本新书。"
    },
    "example2": {
      "en": "The new computer worked perfectly.",
      "zh": "新电脑运行得很完美。"
    }
  },
  {
    "word": "old",
    "chinese": "旧的",
    "phonetic": "[əuld]",
    "example1": {
      "en": "This is an old house.",
      "zh": "这是一座旧房子。"
    },
    "example2": {
      "en": "The old clock still keeps perfect time.",
      "zh": "这个旧钟依然走时准确。"
    }
  },
  {
    "word": "run",
    "chinese": "跑",
    "phonetic": "[rʌn]",
    "example1": {
      "en": "I run every day.",
      "zh": "我每天跑步。"
    },
    "example2": {
      "en": "The children run happily in the playground.",
      "zh": "孩子们在操场上快乐地跑步。"
    }
  },
  {
    "word": "walk",
    "chinese": "走",
    "phonetic": "[wɔ:k]",
    "example1": {
      "en": "I walk to school.",
      "zh": "我走路去学校。"
    },
    "example2": {
      "en": "The elderly couple walked slowly in the park.",
      "zh": "老年夫妇在公园里慢慢走着。"
    }
  },
  {
    "word": "jump",
    "chinese": "跳",
    "phonetic": "[dʒʌmp]",
    "example1": {
      "en": "The cat can jump.",
      "zh": "猫会跳。"
    },
    "example2": {
      "en": "The athlete jumped over the high bar.",
      "zh": "运动员跳过了高杆。"
    }
  },
  {
    "word": "sing",
    "chinese": "唱",
    "phonetic": "[siŋ]",
    "example1": {
      "en": "I like to sing.",
      "zh": "我喜欢唱歌。"
    },
    "example2": {
      "en": "The birds sing sweetly in the morning.",
      "zh": "鸟儿在早晨甜美地歌唱。"
    }
  },
  {
    "word": "dance",
    "chinese": "跳舞",
    "phonetic": "[dɑ:ns]",
    "example1": {
      "en": "She likes to dance.",
      "zh": "她喜欢跳舞。"
    },
    "example2": {
      "en": "The couple danced gracefully at their wedding.",
      "zh": "这对夫妇在婚礼上优雅地跳舞。"
    }
  },
  {
    "word": "read",
    "chinese": "读",
    "phonetic": "[ri:d]",
    "example1": {
      "en": "I read books.",
      "zh": "我读书。"
    },
    "example2": {
      "en": "The student read the entire novel in one day.",
      "zh": "这个学生一天就读完了整本小说。"
    }
  },
  {
    "word": "write",
    "chinese": "写",
    "phonetic": "[rait]",
    "example1": {
      "en": "I write letters.",
      "zh": "我写信。"
    },
    "example2": {
      "en": "The author wrote stories for children.",
      "zh": "这位作家为儿童写故事。"
    }
  },
  {
    "word": "speak",
    "chinese": "说",
    "phonetic": "[spi:k]",
    "example1": {
      "en": "I speak English.",
      "zh": "我说英语。"
    },
    "example2": {
      "en": "The professor spoke clearly during the lecture.",
      "zh": "教授在讲座中讲得很清楚。"
    }
  },
  {
    "word": "sleep",
    "chinese": "睡觉",
    "phonetic": "[sli:p]",
    "example1": {
      "en": "I need to sleep.",
      "zh": "我需要睡觉。"
    },
    "example2": {
      "en": "The baby slept peacefully in the crib.",
      "zh": "婴儿在婴儿床上安睡。"
    }
  },
  {
    "word": "eat",
    "chinese": "吃",
    "phonetic": "[i:t]",
    "example1": {
      "en": "I eat breakfast.",
      "zh": "我吃早餐。"
    },
    "example2": {
      "en": "The family ate dinner together every evening.",
      "zh": "这家人每天晚上一起吃晚餐。"
    }
  },
  {
    "word": "drink",
    "chinese": "喝",
    "phonetic": "[driŋk]",
    "example1": {
      "en": "I drink water.",
      "zh": "我喝水。"
    },
    "example2": {
      "en": "The athletes drink water after exercise.",
      "zh": "运动员运动后喝水。"
    }
  },
  {
    "word": "cook",
    "chinese": "烹饪",
    "phonetic": "[kuk]",
    "example1": {
      "en": "I can cook.",
      "zh": "我会做饭。"
    },
    "example2": {
      "en": "The chef cooked a delicious meal.",
      "zh": "厨师烹饪了一顿美味的饭菜。"
    }
  },
  {
    "word": "study",
    "chinese": "学习",
    "phonetic": "[ˈstʌdi]",
    "example1": {
      "en": "I study hard.",
      "zh": "我努力学习。"
    },
    "example2": {
      "en": "The students studied together in the library.",
      "zh": "学生们在图书馆一起学习。"
    }
  },
  {
    "word": "work",
    "chinese": "工作",
    "phonetic": "[wə:k]",
    "example1": {
      "en": "I work hard.",
      "zh": "我努力工作。"
    },
    "example2": {
      "en": "The programmer worked late into the night.",
      "zh": "程序员工作到深夜。"
    }
  },
  {
    "word": "help",
    "chinese": "帮助",
    "phonetic": "[help]",
    "example1": {
      "en": "I help others.",
      "zh": "我帮助他人。"
    },
    "example2": {
      "en": "The volunteer helped elderly people cross the street.",
      "zh": "志愿者帮助老人过马路。"
    }
  },
  {
    "word": "listen",
    "chinese": "听",
    "phonetic": "[ˈlisn]",
    "example1": {
      "en": "Please listen carefully.",
      "zh": "请仔细听。"
    },
    "example2": {
      "en": "The audience listened attentively to the music.",
      "zh": "观众专注地听着音乐。"
    }
  },
  {
    "word": "watch",
    "chinese": "看",
    "phonetic": "[wɔtʃ]",
    "example1": {
      "en": "I watch TV.",
      "zh": "我看电视。"
    },
    "example2": {
      "en": "The fans watched the game excitedly.",
      "zh": "球迷兴奋地观看比赛。"
    }
  },
  {
    "word": "buy",
    "chinese": "买",
    "phonetic": "[bai]",
    "example1": {
      "en": "I buy food.",
      "zh": "我买食物。"
    },
    "example2": {
      "en": "She bought a new dress for the party.",
      "zh": "她为派对买了一件新裙子。"
    }
  },
  {
    "word": "sell",
    "chinese": "卖",
    "phonetic": "[sel]",
    "example1": {
      "en": "They sell books.",
      "zh": "他们卖书。"
    },
    "example2": {
      "en": "The shop sells fresh vegetables daily.",
      "zh": "这家商店每天卖新鲜蔬菜。"
    }
  },
  {
    "word": "open",
    "chinese": "开",
    "phonetic": "[ˈəupən]",
    "example1": {
      "en": "Please open the door.",
      "zh": "请开门。"
    },
    "example2": {
      "en": "The store opens early in the morning.",
      "zh": "商店一大早就开门。"
    }
  },
  {
    "word": "close",
    "chinese": "关",
    "phonetic": "[kləuz]",
    "example1": {
      "en": "Please close the window.",
      "zh": "请关窗。"
    },
    "example2": {
      "en": "The library closes at nine o'clock.",
      "zh": "图书馆九点关门。"
    }
  },
  {
    "word": "come",
    "chinese": "来",
    "phonetic": "[kʌm]",
    "example1": {
      "en": "Please come here.",
      "zh": "请过来。"
    },
    "example2": {
      "en": "Many tourists come to this city every year.",
      "zh": "每年很多游客来这个城市。"
    }
  },
  {
    "word": "go",
    "chinese": "去",
    "phonetic": "[ɡəu]",
    "example1": {
      "en": "I go to work.",
      "zh": "我去工作。"
    },
    "example2": {
      "en": "The children went to school by bus.",
      "zh": "孩子们坐公交车去学校。"
    }
  },
  {
    "word": "like",
    "chinese": "喜欢",
    "phonetic": "[laik]",
    "example1": {
      "en": "I like music.",
      "zh": "我喜欢音乐。"
    },
    "example2": {
      "en": "Most people like watching movies.",
      "zh": "大多数人喜欢看电影。"
    }
  },
  {
    "word": "love",
    "chinese": "爱",
    "phonetic": "[lʌv]",
    "example1": {
      "en": "I love my family.",
      "zh": "我爱我的家人。"
    },
    "example2": {
      "en": "The mother loves her children deeply.",
      "zh": "母亲深深地爱着她的孩子。"
    }
  },
  {
    "word": "thank",
    "chinese": "感谢",
    "phonetic": "[θæŋk]",
    "example1": {
      "en": "Thank you very much.",
      "zh": "非常感谢你。"
    },
    "example2": {
      "en": "The students thanked their teacher for the help.",
      "zh": "学生们感谢老师的帮助。"
    }
  },
  {
    "word": "sorry",
    "chinese": "抱歉",
    "phonetic": "[ˈsɔri]",
    "example1": {
      "en": "I am sorry.",
      "zh": "我很抱歉。"
    },
    "example2": {
      "en": "He felt sorry for his mistake.",
      "zh": "他为自己的错误感到抱歉。"
    }
  },
  {
    "word": "hello",
    "chinese": "你好",
    "phonetic": "[həˈləu]",
    "example1": {
      "en": "Hello, everyone.",
      "zh": "大家好。"
    },
    "example2": {
      "en": "She said hello to her neighbors every morning.",
      "zh": "她每天早上向邻居问好。"
    }
  },
  {
    "word": "goodbye",
    "chinese": "再见",
    "phonetic": "[ˈɡudˈbai]",
    "example1": {
      "en": "Goodbye, friends.",
      "zh": "再见，朋友们。"
    },
    "example2": {
      "en": "The students said goodbye to their teacher.",
      "zh": "学生们向老师道别。"
    }
  },
  {
    "word": "please",
    "chinese": "请",
    "phonetic": "[pli:z]",
    "example1": {
      "en": "Please help me.",
      "zh": "请帮助我。"
    },
    "example2": {
      "en": "Please pass me the salt, she asked politely.",
      "zh": "她礼貌地说，请把盐递给我。"
    }
  },
  {
    "word": "welcome",
    "chinese": "欢迎",
    "phonetic": "[ˈwelkəm]",
    "example1": {
      "en": "Welcome to China.",
      "zh": "欢迎来到中国。"
    },
    "example2": {
      "en": "The hotel staff welcomed guests with warm smiles.",
      "zh": "酒店员工面带温暖的笑容欢迎客人。"
    }
  },
  {
    "word": "excuse",
    "chinese": "原谅",
    "phonetic": "[ikˈskju:z]",
    "example1": {
      "en": "Excuse me.",
      "zh": "对不起。"
    },
    "example2": {
      "en": "He asked to be excused from the meeting.",
      "zh": "他请求从会议中离席。"
    }
  },
  {
    "word": "okay",
    "chinese": "好的",
    "phonetic": "[ˈəukei]",
    "example1": {
      "en": "Okay, I agree.",
      "zh": "好的，我同意。"
    },
    "example2": {
      "en": "Everything will be okay, don't worry.",
      "zh": "一切都会好的，别担心。"
    }
  },
  {
    "word": "long",
    "chinese": "长的",
    "phonetic": "[lɔŋ]",
    "example1": {
      "en": "The road is long.",
      "zh": "这条路很长。"
    },
    "example2": {
      "en": "The long journey finally came to an end.",
      "zh": "漫长的旅程终于结束了。"
    }
  },
  {
    "word": "young",
    "chinese": "年轻的",
    "phonetic": "[jʌŋ]",
    "example1": {
      "en": "She is young.",
      "zh": "她很年轻。"
    },
    "example2": {
      "en": "The young teacher was passionate about teaching.",
      "zh": "年轻的老师对教学充满热情。"
    }
  },
  {
    "word": "thin",
    "chinese": "瘦的",
    "phonetic": "[θin]",
    "example1": {
      "en": "He is thin.",
      "zh": "他很瘦。"
    },
    "example2": {
      "en": "The thin cat squeezed through the narrow gap.",
      "zh": "瘦猫挤过狭窄的缝隙。"
    }
  },
  {
    "word": "active",
    "chinese": "积极的",
    "phonetic": "[ˈæktiv]",
    "example1": {
      "en": "He is very active.",
      "zh": "他很活跃。"
    },
    "example2": {
      "en": "The active student participated in many school activities.",
      "zh": "这个活跃的学生参加了很多学校活动。"
    }
  },
  {
    "word": "quiet",
    "chinese": "安静的",
    "phonetic": "[ˈkwaiət]",
    "example1": {
      "en": "Please be quiet.",
      "zh": "请保持安静。"
    },
    "example2": {
      "en": "The library remained quiet during study hours.",
      "zh": "图书馆在学习时间保持安静。"
    }
  },
  {
    "word": "nice",
    "chinese": "好看的",
    "phonetic": "[nais]",
    "example1": {
      "en": "This is a nice dress.",
      "zh": "这是一件好看的裙子。"
    },
    "example2": {
      "en": "The nice weather made everyone feel cheerful.",
      "zh": "好天气让每个人都感到愉快。"
    }
  },
  {
    "word": "kind",
    "chinese": "和蔼的",
    "phonetic": "[kaind]",
    "example1": {
      "en": "She is very kind.",
      "zh": "她很和蔼。"
    },
    "example2": {
      "en": "The kind neighbor helped us move furniture.",
      "zh": "热心的邻居帮我们搬家具。"
    }
  },
  {
    "word": "strict",
    "chinese": "严格的",
    "phonetic": "[strikt]",
    "example1": {
      "en": "The teacher is strict.",
      "zh": "老师很严格。"
    },
    "example2": {
      "en": "The strict rules helped maintain order.",
      "zh": "严格的规定帮助维持秩序。"
    }
  },
  {
    "word": "smart",
    "chinese": "聪明的",
    "phonetic": "[smɑːt]",
    "example1": {
      "en": "You are smart.",
      "zh": "你很聪明。"
    },
    "example2": {
      "en": "The smart solution saved both time and money.",
      "zh": "聪明的解决方案节省了时间和金钱。"
    }
  },
  {
    "word": "funny",
    "chinese": "有趣的",
    "phonetic": "[ˈfʌni]",
    "example1": {
      "en": "The movie is funny.",
      "zh": "这部电影很有趣。"
    },
    "example2": {
      "en": "The funny joke made everyone laugh.",
      "zh": "这个有趣的笑话让大家都笑了。"
    }
  },
  {
    "word": "tasty",
    "chinese": "美味的",
    "phonetic": "[ˈteisti]",
    "example1": {
      "en": "The food is tasty.",
      "zh": "这食物很美味。"
    },
    "example2": {
      "en": "The tasty meal was prepared with fresh ingredients.",
      "zh": "这顿美味的饭是用新鲜食材准备的。"
    }
  },
  {
    "word": "salty",
    "chinese": "咸的",
    "phonetic": "[ˈsɔːlti]",
    "example1": {
      "en": "The soup is salty.",
      "zh": "汤很咸。"
    },
    "example2": {
      "en": "The salty snacks made him thirsty.",
      "zh": "咸的零食让他感到口渴。"
    }
  },
  {
    "word": "sour",
    "chinese": "酸的",
    "phonetic": "[ˈsauə]",
    "example1": {
      "en": "The lemon is sour.",
      "zh": "柠檬是酸的。"
    },
    "example2": {
      "en": "The sour taste of the unripe fruit surprised her.",
      "zh": "未熟水果的酸味让她吃惊。"
    }
  },
  {
    "word": "excited",
    "chinese": "兴奋的",
    "phonetic": "[ikˈsaitid]",
    "example1": {
      "en": "I am excited.",
      "zh": "我很兴奋。"
    },
    "example2": {
      "en": "The excited children couldn't wait to open their presents.",
      "zh": "兴奋的孩子们迫不及待要打开礼物。"
    }
  },
  {
    "word": "angry",
    "chinese": "生气的",
    "phonetic": "[ˈæŋɡri]",
    "example1": {
      "en": "Don't be angry.",
      "zh": "别生气。"
    },
    "example2": {
      "en": "The angry customer demanded a refund.",
      "zh": "愤怒的顾客要求退款。"
    }
  },
  {
    "word": "bored",
    "chinese": "无聊的",
    "phonetic": "[bɔːd]",
    "example1": {
      "en": "I am bored.",
      "zh": "我很无聊。"
    },
    "example2": {
      "en": "The bored students stared out the window.",
      "zh": "无聊的学生们望着窗外。"
    }
  },
  {
    "word": "twenty",
    "chinese": "二十",
    "phonetic": "[ˈtwenti]",
    "example1": {
      "en": "I am twenty.",
      "zh": "我二十岁。"
    },
    "example2": {
      "en": "Twenty students joined the science club.",
      "zh": "二十名学生加入了科学俱乐部。"
    }
  },
  {
    "word": "thirty",
    "chinese": "三十",
    "phonetic": "[ˈθəːti]",
    "example1": {
      "en": "It costs thirty dollars.",
      "zh": "这要三十美元。"
    },
    "example2": {
      "en": "Thirty minutes passed quickly.",
      "zh": "三十分钟快速过去。"
    }
  },
  {
    "word": "hundred",
    "chinese": "百",
    "phonetic": "[ˈhʌndrəd]",
    "example1": {
      "en": "I have a hundred books.",
      "zh": "我有一百本书。"
    },
    "example2": {
      "en": "A hundred people attended the concert.",
      "zh": "一百人参加了音乐会。"
    }
  },
  {
    "word": "first",
    "chinese": "第一",
    "phonetic": "[fəːst]",
    "example1": {
      "en": "He finished first.",
      "zh": "他第一个完成。"
    },
    "example2": {
      "en": "This is my first time in Beijing.",
      "zh": "这是我第一次来北京。"
    }
  },
  {
    "word": "second",
    "chinese": "第二",
    "phonetic": "[ˈsekənd]",
    "example1": {
      "en": "She came second.",
      "zh": "她第二个到。"
    },
    "example2": {
      "en": "The second floor is quiet.",
      "zh": "二楼很安静。"
    }
  },
  {
    "word": "third",
    "chinese": "第三",
    "phonetic": "[θəːd]",
    "example1": {
      "en": "He lives on the third floor.",
      "zh": "他住在三楼。"
    },
    "example2": {
      "en": "This is my third visit here.",
      "zh": "这是我第三次来这里。"
    }
  },
  {
    "word": "ability",
    "chinese": "能力",
    "phonetic": "[əˈbɪlətɪ]",
    "example1": {
      "en": "I have the ability.",
      "zh": "我有这个能力。"
    },
    "example2": {
      "en": "Her ability to learn languages is impressive.",
      "zh": "她学习语言的能力令人印象深刻。"
    }
  },
  {
    "word": "advice",
    "chinese": "建议",
    "phonetic": "[ədˈvaɪs]",
    "example1": {
      "en": "Can you give me some advice?",
      "zh": "你能给我一些建议吗？"
    },
    "example2": {
      "en": "His advice helped me solve the problem.",
      "zh": "他的建议帮我解决了问题。"
    }
  },
  {
    "word": "among",
    "chinese": "在...之中",
    "phonetic": "[əˈmʌŋ]",
    "example1": {
      "en": "The book is among others.",
      "zh": "这本书在其他书中间。"
    },
    "example2": {
      "en": "She was popular among her classmates.",
      "zh": "她在同学中很受欢迎。"
    }
  },
  {
    "word": "arrive",
    "chinese": "到达",
    "phonetic": "[əˈraɪv]",
    "example1": {
      "en": "When will you arrive?",
      "zh": "你什么时候到达？"
    },
    "example2": {
      "en": "The train arrived on time.",
      "zh": "火车准时到达。"
    }
  },
  {
    "word": "between",
    "chinese": "在...之间",
    "phonetic": "[bɪˈtwiːn]",
    "example1": {
      "en": "The book is between two notebooks.",
      "zh": "这本书在两个笔记本之间。"
    },
    "example2": {
      "en": "Choose between the red one and the blue one.",
      "zh": "在红色和蓝色之间选择。"
    }
  },
  {
    "word": "change",
    "chinese": "改变",
    "phonetic": "[tʃeɪndʒ]",
    "example1": {
      "en": "The weather will change.",
      "zh": "天气会改变。"
    },
    "example2": {
      "en": "Please change your wet clothes.",
      "zh": "请换掉你的湿衣服。"
    }
  },
  {
    "word": "decide",
    "chinese": "决定",
    "phonetic": "[dɪˈsaɪd]",
    "example1": {
      "en": "I will decide tomorrow.",
      "zh": "我明天再决定。"
    },
    "example2": {
      "en": "She decided to study harder.",
      "zh": "她决定更加用功学习。"
    }
  },
  {
    "word": "different",
    "chinese": "不同的",
    "phonetic": "[ˈdɪfrənt]",
    "example1": {
      "en": "These are different books.",
      "zh": "这些是不同的书。"
    },
    "example2": {
      "en": "Every student has a different answer.",
      "zh": "每个学生都有不同的答案。"
    }
  },
  {
    "word": "distance",
    "chinese": "距离",
    "phonetic": "[ˈdɪstəns]",
    "example1": {
      "en": "The distance is too far.",
      "zh": "距离太远了。"
    },
    "example2": {
      "en": "What's the distance between the two cities?",
      "zh": "这两个城市之间的距离是多少？"
    }
  },
  {
    "word": "during",
    "chinese": "在...期间",
    "phonetic": "[ˈdjʊərɪŋ]",
    "example1": {
      "en": "I studied during the holiday.",
      "zh": "我在假期期间学习。"
    },
    "example2": {
      "en": "Stay quiet during the class.",
      "zh": "在课堂期间保持安静。"
    }
  },
  {
    "word": "education",
    "chinese": "教育",
    "phonetic": "[ˌedʒuˈkeɪʃn]",
    "example1": {
      "en": "Education is important.",
      "zh": "教育很重要。"
    },
    "example2": {
      "en": "A good education can change your life.",
      "zh": "良好的教育能改变你的人生。"
    }
  },
  {
    "word": "environment",
    "chinese": "环境",
    "phonetic": "[ɪnˈvaɪrənmənt]",
    "example1": {
      "en": "We should protect our environment.",
      "zh": "我们应该保护环境。"
    },
    "example2": {
      "en": "The learning environment is excellent.",
      "zh": "学习环境很好。"
    }
  },
  {
    "word": "experience",
    "chinese": "经验",
    "phonetic": "[ɪkˈspɪəriəns]",
    "example1": {
      "en": "I have no experience.",
      "zh": "我没有经验。"
    },
    "example2": {
      "en": "Work experience is very important.",
      "zh": "工作经验很重要。"
    }
  },
  {
    "word": "follow",
    "chinese": "跟随",
    "phonetic": "[ˈfɒləʊ]",
    "example1": {
      "en": "Please follow me.",
      "zh": "请跟我来。"
    },
    "example2": {
      "en": "Follow the instructions carefully.",
      "zh": "请仔细遵循说明。"
    }
  },
  {
    "word": "future",
    "chinese": "未来",
    "phonetic": "[ˈfjuːtʃə]",
    "example1": {
      "en": "What's your future plan?",
      "zh": "你的未来计划是什么？"
    },
    "example2": {
      "en": "The future looks bright.",
      "zh": "未来一片光明。"
    }
  },
  {
    "word": "physics",
    "chinese": "物理",
    "phonetic": "[ˈfɪzɪks]",
    "example1": {
      "en": "I study physics.",
      "zh": "我学习物理。"
    },
    "example2": {
      "en": "Physics is her favorite subject.",
      "zh": "物理是她最喜欢的科目。"
    }
  },
  {
    "word": "chemistry",
    "chinese": "化学",
    "phonetic": "[ˈkemɪstri]",
    "example1": {
      "en": "Chemistry is interesting.",
      "zh": "化学很有趣。"
    },
    "example2": {
      "en": "We had a chemistry experiment today.",
      "zh": "我们今天做了化学实验。"
    }
  },
  {
    "word": "biology",
    "chinese": "生物",
    "phonetic": "[baɪˈɒlədʒi]",
    "example1": {
      "en": "Biology is about life.",
      "zh": "生物是关于生命的。"
    },
    "example2": {
      "en": "The biology teacher showed us a microscope.",
      "zh": "生物老师给我们展示了显微镜。"
    }
  },
  {
    "word": "geography",
    "chinese": "地理",
    "phonetic": "[dʒiˈɒɡrəfi]",
    "example1": {
      "en": "I love geography.",
      "zh": "我喜欢地理。"
    },
    "example2": {
      "en": "We learned world geography in class.",
      "zh": "我们在课堂上学习世界地理。"
    }
  },
  {
    "word": "history",
    "chinese": "历史",
    "phonetic": "[ˈhɪstri]",
    "example1": {
      "en": "History tells us about the past.",
      "zh": "历史告诉我们过去的事。"
    },
    "example2": {
      "en": "Chinese history is very long.",
      "zh": "中国历史很悠久。"
    }
  },
  {
    "word": "literature",
    "chinese": "文学",
    "phonetic": "[ˈlɪtrətʃə]",
    "example1": {
      "en": "We study literature in class.",
      "zh": "我们在课堂上学习文学。"
    },
    "example2": {
      "en": "She loves reading literature.",
      "zh": "她喜欢阅读文学作品。"
    }
  },
  {
    "word": "laboratory",
    "chinese": "实验室",
    "phonetic": "[ləˈbɒrətri]",
    "example1": {
      "en": "The laboratory is clean.",
      "zh": "实验室很干净。"
    },
    "example2": {
      "en": "Students work in the laboratory.",
      "zh": "学生们在实验室工作。"
    }
  },
  {
    "word": "calculation",
    "chinese": "计算",
    "phonetic": "[ˌkælkjuˈleɪʃn]",
    "example1": {
      "en": "The calculation is correct.",
      "zh": "计算是正确的。"
    },
    "example2": {
      "en": "This calculation is quite difficult.",
      "zh": "这个计算很难。"
    }
  },
  {
    "word": "equation",
    "chinese": "方程",
    "phonetic": "[ɪˈkweɪʒn]",
    "example1": {
      "en": "Solve this equation.",
      "zh": "解这个方程。"
    },
    "example2": {
      "en": "The math equation looks complicated.",
      "zh": "这个数学方程看起来很复杂。"
    }
  },
  {
    "word": "experiment",
    "chinese": "实验",
    "phonetic": "[ɪkˈsperɪmənt]",
    "example1": {
      "en": "The experiment was successful.",
      "zh": "实验很成功。"
    },
    "example2": {
      "en": "We did an interesting experiment today.",
      "zh": "我们今天做了一个有趣的实验。"
    }
  },
  {
    "word": "apartment",
    "chinese": "公寓",
    "phonetic": "[əˈpɑːtmənt]",
    "example1": {
      "en": "This is my apartment.",
      "zh": "这是我的公寓。"
    },
    "example2": {
      "en": "The apartment has three bedrooms.",
      "zh": "这个公寓有三个卧室。"
    }
  },
  {
    "word": "breakfast",
    "chinese": "早餐",
    "phonetic": "[ˈbrekfəst]",
    "example1": {
      "en": "Did you have breakfast?",
      "zh": "你吃早餐了吗？"
    },
    "example2": {
      "en": "A good breakfast is important.",
      "zh": "一顿好的早餐很重要。"
    }
  },
  {
    "word": "furniture",
    "chinese": "家具",
    "phonetic": "[ˈfɜːnɪtʃə]",
    "example1": {
      "en": "The furniture is new.",
      "zh": "家具是新的。"
    },
    "example2": {
      "en": "They bought some new furniture.",
      "zh": "他们买了一些新家具。"
    }
  },
  {
    "word": "supermarket",
    "chinese": "超市",
    "phonetic": "[ˈsuːpəmɑːkɪt]",
    "example1": {
      "en": "I shop at the supermarket.",
      "zh": "我在超市购物。"
    },
    "example2": {
      "en": "The supermarket is open 24 hours.",
      "zh": "这个超市24小时营业。"
    }
  },
  {
    "word": "traffic",
    "chinese": "交通",
    "phonetic": "[ˈtræfɪk]",
    "example1": {
      "en": "The traffic is heavy.",
      "zh": "交通很拥堵。"
    },
    "example2": {
      "en": "There's heavy traffic in the morning.",
      "zh": "早上交通很拥挤。"
    }
  },
  {
    "word": "transportation",
    "chinese": "交通工具",
    "phonetic": "[ˌtrænspɔːˈteɪʃn]",
    "example1": {
      "en": "Public transportation is convenient.",
      "zh": "公共交通很方便。"
    },
    "example2": {
      "en": "What's your main transportation?",
      "zh": "你主要的交通工具是什么？"
    }
  },
  {
    "word": "appointment",
    "chinese": "预约",
    "phonetic": "[əˈpɔɪntmənt]",
    "example1": {
      "en": "I have an appointment.",
      "zh": "我有个预约。"
    },
    "example2": {
      "en": "Make an appointment with the doctor.",
      "zh": "和医生预约。"
    }
  },
  {
    "word": "emergency",
    "chinese": "紧急情况",
    "phonetic": "[iˈmɜːdʒənsi]",
    "example1": {
      "en": "This is an emergency.",
      "zh": "这是紧急情况。"
    },
    "example2": {
      "en": "Call 120 in case of emergency.",
      "zh": "遇到紧急情况就打120。"
    }
  },
  {
    "word": "anxious",
    "chinese": "焦虑的",
    "phonetic": "[ˈæŋkʃəs]",
    "example1": {
      "en": "Don't be anxious.",
      "zh": "别焦虑。"
    },
    "example2": {
      "en": "She felt anxious before the exam.",
      "zh": "她考试前感到焦虑。"
    }
  },
  {
    "word": "confident",
    "chinese": "自信的",
    "phonetic": "[ˈkɒnfɪdənt]",
    "example1": {
      "en": "Be confident in yourself.",
      "zh": "对自己要自信。"
    },
    "example2": {
      "en": "He is confident about the future.",
      "zh": "他对未来很自信。"
    }
  },
  {
    "word": "disappointed",
    "chinese": "失望的",
    "phonetic": "[ˌdɪsəˈpɔɪntɪd]",
    "example1": {
      "en": "I feel disappointed.",
      "zh": "我感到失望。"
    },
    "example2": {
      "en": "She was disappointed with her score.",
      "zh": "她对自己的分数感到失望。"
    }
  },
  {
    "word": "grateful",
    "chinese": "感激的",
    "phonetic": "[ˈɡreɪtfl]",
    "example1": {
      "en": "I am grateful for your help.",
      "zh": "我很感激你的帮助。"
    },
    "example2": {
      "en": "We are grateful to our teachers.",
      "zh": "我们感激我们的老师。"
    }
  },
  {
    "word": "nervous",
    "chinese": "紧张的",
    "phonetic": "[ˈnɜːvəs]",
    "example1": {
      "en": "Don't be nervous.",
      "zh": "别紧张。"
    },
    "example2": {
      "en": "Students feel nervous before exams.",
      "zh": "学生们考试前感到紧张。"
    }
  },
  {
    "word": "proud",
    "chinese": "自豪的",
    "phonetic": "[praʊd]",
    "example1": {
      "en": "I am proud of you.",
      "zh": "我为你感到骄傲。"
    },
    "example2": {
      "en": "Parents are proud of their children.",
      "zh": "父母为孩子感到骄傲。"
    }
  },
  {
    "word": "success",
    "chinese": "成功",
    "phonetic": "[səkˈses]",
    "example1": {
      "en": "Success comes from hard work.",
      "zh": "成功源于努力。"
    },
    "example2": {
      "en": "What's the secret of success?",
      "zh": "成功的秘诀是什么？"
    }
  },
  {
    "word": "freedom",
    "chinese": "自由",
    "phonetic": "[ˈfriːdəm]",
    "example1": {
      "en": "Freedom is important.",
      "zh": "自由很重要。"
    },
    "example2": {
      "en": "Everyone wants freedom.",
      "zh": "每个人都想要自由。"
    }
  },
  {
    "word": "responsibility",
    "chinese": "责任",
    "phonetic": "[rɪˌspɒnsəˈbɪləti]",
    "example1": {
      "en": "This is my responsibility.",
      "zh": "这是我的责任。"
    },
    "example2": {
      "en": "We all have responsibilities.",
      "zh": "我们都有责任。"
    }
  },
  {
    "word": "opportunity",
    "chinese": "机会",
    "phonetic": "[ˌɒpəˈtjuːnəti]",
    "example1": {
      "en": "This is a good opportunity.",
      "zh": "这是一个好机会。"
    },
    "example2": {
      "en": "Don't miss this opportunity.",
      "zh": "别错过这个机会。"
    }
  },
  {
    "word": "knowledge",
    "chinese": "知识",
    "phonetic": "[ˈnɒlɪdʒ]",
    "example1": {
      "en": "Knowledge is power.",
      "zh": "知识就是力量。"
    },
    "example2": {
      "en": "We gain knowledge from books.",
      "zh": "我们从书本中获取知识。"
    }
  },
  {
    "word": "courage",
    "chinese": "勇气",
    "phonetic": "[ˈkʌrɪdʒ]",
    "example1": {
      "en": "Have courage.",
      "zh": "要有勇气。"
    },
    "example2": {
      "en": "It takes courage to try new things.",
      "zh": "尝试新事物需要勇气。"
    }
  },
  {
    "word": "progress",
    "chinese": "进步",
    "phonetic": "[ˈprəʊɡres]",
    "example1": {
      "en": "You made progress.",
      "zh": "你有进步。"
    },
    "example2": {
      "en": "The student showed great progress.",
      "zh": "这个学生表现出很大的进步。"
    }
  },
  {
    "word": "truth",
    "chinese": "真相",
    "phonetic": "[truːθ]",
    "example1": {
      "en": "Tell me the truth.",
      "zh": "告诉我真相。"
    },
    "example2": {
      "en": "The truth finally came out.",
      "zh": "真相终于大白。"
    }
  },
  {
    "word": "research",
    "chinese": "研究",
    "phonetic": "[rɪˈsɜːtʃ]",
    "example1": {
      "en": "Scientists do research.",
      "zh": "科学家做研究。"
    },
    "example2": {
      "en": "The research shows interesting results.",
      "zh": "研究显示出有趣的结果。"
    }
  },
  {
    "word": "theory",
    "chinese": "理论",
    "phonetic": "[ˈθɪəri]",
    "example1": {
      "en": "This is Einstein's theory.",
      "zh": "这是爱因斯坦的理论。"
    },
    "example2": {
      "en": "The theory needs to be proved.",
      "zh": "这个理论需要被证实。"
    }
  },
  {
    "word": "data",
    "chinese": "数据",
    "phonetic": "[ˈdeɪtə]",
    "example1": {
      "en": "The data is important.",
      "zh": "这些数据很重要。"
    },
    "example2": {
      "en": "Scientists collect data from experiments.",
      "zh": "科学家从实验中收集数据。"
    }
  },
  {
    "word": "hypothesis",
    "chinese": "假设",
    "phonetic": "[haɪˈpɒθəsɪs]",
    "example1": {
      "en": "This is my hypothesis.",
      "zh": "这是我的假设。"
    },
    "example2": {
      "en": "We need to test the hypothesis.",
      "zh": "我们需要检验这个假设。"
    }
  },
  {
    "word": "element",
    "chinese": "元素",
    "phonetic": "[ˈelɪmənt]",
    "example1": {
      "en": "Gold is an element.",
      "zh": "金是一种元素。"
    },
    "example2": {
      "en": "There are many elements in nature.",
      "zh": "自然界有很多元素。"
    }
  },
  {
    "word": "molecule",
    "chinese": "分子",
    "phonetic": "[ˈmɒlɪkjuːl]",
    "example1": {
      "en": "Water molecules are everywhere.",
      "zh": "水分子无处不在。"
    },
    "example2": {
      "en": "A molecule is made of atoms.",
      "zh": "分子由原子构成。"
    }
  },
  {
    "word": "atom",
    "chinese": "原子",
    "phonetic": "[ˈætəm]",
    "example1": {
      "en": "An atom is very small.",
      "zh": "原子非常小。"
    },
    "example2": {
      "en": "Atoms are the building blocks of matter.",
      "zh": "原子是物质的基本构成单位。"
    }
  },
  {
    "word": "energy",
    "chinese": "能量",
    "phonetic": "[ˈenədʒi]",
    "example1": {
      "en": "Solar energy is clean.",
      "zh": "太阳能是清洁的。"
    },
    "example2": {
      "en": "We need to save energy.",
      "zh": "我们需要节约能源。"
    }
  },
  {
    "word": "technology",
    "chinese": "技术",
    "phonetic": "[tekˈnɒlədʒi]",
    "example1": {
      "en": "Technology changes fast.",
      "zh": "技术变化很快。"
    },
    "example2": {
      "en": "Modern technology makes life easier.",
      "zh": "现代技术使生活更容易。"
    }
  },
  {
    "word": "digital",
    "chinese": "数字的",
    "phonetic": "[ˈdɪdʒɪtl]",
    "example1": {
      "en": "This is a digital camera.",
      "zh": "这是一台数码相机。"
    },
    "example2": {
      "en": "We live in a digital age.",
      "zh": "我们生活在数字时代。"
    }
  },
  {
    "word": "internet",
    "chinese": "互联网",
    "phonetic": "[ˈɪntənet]",
    "example1": {
      "en": "The internet is useful.",
      "zh": "互联网很有用。"
    },
    "example2": {
      "en": "We can learn online through the internet.",
      "zh": "我们可以通过互联网在线学习。"
    }
  },
  {
    "word": "software",
    "chinese": "软件",
    "phonetic": "[ˈsɒftweə]",
    "example1": {
      "en": "This software is free.",
      "zh": "这个软件是免费的。"
    },
    "example2": {
      "en": "We need to update the software.",
      "zh": "我们需要更新软件。"
    }
  },
  {
    "word": "hardware",
    "chinese": "硬件",
    "phonetic": "[ˈhɑːdweə]",
    "example1": {
      "en": "The hardware needs repair.",
      "zh": "硬件需要修理。"
    },
    "example2": {
      "en": "Computer hardware is expensive.",
      "zh": "电脑硬件很贵。"
    }
  },
  {
    "word": "artificial",
    "chinese": "人工的",
    "phonetic": "[ˌɑːtɪˈfɪʃl]",
    "example1": {
      "en": "This is artificial intelligence.",
      "zh": "这是人工智能。"
    },
    "example2": {
      "en": "Artificial light can help plants grow.",
      "zh": "人工照明可以帮助植物生长。"
    }
  },
  {
    "word": "robot",
    "chinese": "机器人",
    "phonetic": "[ˈrəʊbɒt]",
    "example1": {
      "en": "The robot can dance.",
      "zh": "这个机器人会跳舞。"
    },
    "example2": {
      "en": "Robots help in factories.",
      "zh": "机器人在工厂里帮忙。"
    }
  },
  {
    "word": "database",
    "chinese": "数据库",
    "phonetic": "[ˈdeɪtəbeɪs]",
    "example1": {
      "en": "The database is huge.",
      "zh": "数据库很大。"
    },
    "example2": {
      "en": "All information is stored in the database.",
      "zh": "所有信息都储存在数据库中。"
    }
  },
  {
    "word": "calligraphy",
    "chinese": "书法",
    "phonetic": "[kəˈlɪɡrəfi]",
    "example1": {
      "en": "Chinese calligraphy is beautiful.",
      "zh": "中国书法很美。"
    },
    "example2": {
      "en": "He practices calligraphy every day.",
      "zh": "他每天练习书法。"
    }
  },
  {
    "word": "dragon",
    "chinese": "龙",
    "phonetic": "[ˈdræɡən]",
    "example1": {
      "en": "The dragon is a Chinese symbol.",
      "zh": "龙是中国的象征。"
    },
    "example2": {
      "en": "Dragons appear in many Chinese stories.",
      "zh": "龙在很多中国故事中出现。"
    }
  },
  {
    "word": "festival",
    "chinese": "节日",
    "phonetic": "[ˈfestɪvl]",
    "example1": {
      "en": "Spring Festival is important.",
      "zh": "春节很重要。"
    },
    "example2": {
      "en": "We celebrate traditional festivals.",
      "zh": "我们庆祝传统节日。"
    }
  },
  {
    "word": "lantern",
    "chinese": "灯笼",
    "phonetic": "[ˈlæntən]",
    "example1": {
      "en": "Red lanterns are lucky.",
      "zh": "红灯笼带来好运。"
    },
    "example2": {
      "en": "The Lantern Festival is beautiful.",
      "zh": "元宵节很美。"
    }
  },
  {
    "word": "chopsticks",
    "chinese": "筷子",
    "phonetic": "[ˈtʃɒpstɪks]",
    "example1": {
      "en": "Use chopsticks to eat.",
      "zh": "用筷子吃饭。"
    },
    "example2": {
      "en": "Learning to use chopsticks takes practice.",
      "zh": "学习使用筷子需要练习。"
    }
  },
  {
    "word": "tea",
    "chinese": "ceremony 茶道",
    "phonetic": "[tiː ˈserəməni]",
    "example1": {
      "en": "The tea ceremony is traditional.",
      "zh": "茶道很传统。"
    },
    "example2": {
      "en": "She learned the tea ceremony.",
      "zh": "她学习了茶道。"
    }
  },
  {
    "word": "kung",
    "chinese": "fu 功夫",
    "phonetic": "[ˌkʌŋˈfuː]",
    "example1": {
      "en": "Kung fu needs practice.",
      "zh": "功夫需要练习。"
    },
    "example2": {
      "en": "Chinese kung fu is famous worldwide.",
      "zh": "中国功夫举世闻名。"
    }
  },
  {
    "word": "opera",
    "chinese": "戏曲",
    "phonetic": "[ˈɒpərə]",
    "example1": {
      "en": "Beijing opera is unique.",
      "zh": "京剧很独特。"
    },
    "example2": {
      "en": "Chinese opera has a long history.",
      "zh": "中国戏曲有着悠久的历史。"
    }
  },
  {
    "word": "zodiac",
    "chinese": "生肖",
    "phonetic": "[ˈzəʊdiæk]",
    "example1": {
      "en": "What's your zodiac animal?",
      "zh": "你的生肖是什么？"
    },
    "example2": {
      "en": "The zodiac has twelve animals.",
      "zh": "生肖有十二种动物。"
    }
  },
  {
    "word": "silk",
    "chinese": "丝绸",
    "phonetic": "[sɪlk]",
    "example1": {
      "en": "Chinese silk is famous.",
      "zh": "中国丝绸很有名。"
    },
    "example2": {
      "en": "She wore a silk dress.",
      "zh": "她穿着丝绸连衣裙。"
    }
  },
  {
    "word": "bamboo",
    "chinese": "竹子",
    "phonetic": "[bæmˈbuː]",
    "example1": {
      "en": "Bamboo grows quickly.",
      "zh": "竹子长得很快。"
    },
    "example2": {
      "en": "Pandas eat bamboo.",
      "zh": "熊猫吃竹子。"
    }
  },
  {
    "word": "dynasty",
    "chinese": "朝代",
    "phonetic": "[ˈdɪnəsti]",
    "example1": {
      "en": "The Tang Dynasty was powerful.",
      "zh": "唐朝很强大。"
    },
    "example2": {
      "en": "Different dynasties had different cultures.",
      "zh": "不同朝代有不同的文化。"
    }
  },
  {
    "word": "innovation",
    "chinese": "创新",
    "phonetic": "[ˌɪnəˈveɪʃn]",
    "example1": {
      "en": "Innovation is important.",
      "zh": "创新很重要。"
    },
    "example2": {
      "en": "This company encourages innovation.",
      "zh": "这家公司鼓励创新。"
    }
  },
  {
    "word": "sustainable",
    "chinese": "可持续的",
    "phonetic": "[səˈsteɪnəbl]",
    "example1": {
      "en": "We need sustainable development.",
      "zh": "我们需要可持续发展。"
    },
    "example2": {
      "en": "Sustainable energy is the future.",
      "zh": "可持续能源是未来。"
    }
  },
  {
    "word": "civilization",
    "chinese": "文明",
    "phonetic": "[ˌsɪvəlaɪˈzeɪʃn]",
    "example1": {
      "en": "Chinese civilization is ancient.",
      "zh": "中国文明很古老。"
    },
    "example2": {
      "en": "Different civilizations learn from each other.",
      "zh": "不同文明互相学习。"
    }
  },
  {
    "word": "heritage",
    "chinese": "遗产",
    "phonetic": "[ˈherɪtɪdʒ]",
    "example1": {
      "en": "Cultural heritage is precious.",
      "zh": "文化遗产很珍贵。"
    },
    "example2": {
      "en": "We must protect our heritage.",
      "zh": "我们必须保护我们的遗产。"
    }
  },
  {
    "word": "artificial",
    "chinese": "intelligence (AI) 人工智能",
    "phonetic": "[ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns]",
    "example1": {
      "en": "AI is changing our world.",
      "zh": "人工智能正在改变我们的世界。"
    },
    "example2": {
      "en": "AI technology develops rapidly.",
      "zh": "人工智能技术发展迅速。"
    }
  },
  {
    "word": "machine",
    "chinese": "learning 机器学习",
    "phonetic": "[məˈʃiːn ˈlɜːnɪŋ]",
    "example1": {
      "en": "Machine learning is part of AI.",
      "zh": "机器学习是人工智能的一部分。"
    },
    "example2": {
      "en": "The computer uses machine learning to improve.",
      "zh": "计算机使用机器学习来提升。"
    }
  },
  {
    "word": "deep",
    "chinese": "learning 深度学习",
    "phonetic": "[diːp ˈlɜːnɪŋ]",
    "example1": {
      "en": "Deep learning helps computers think.",
      "zh": "深度学习帮助计算机思考。"
    },
    "example2": {
      "en": "Deep learning requires big data.",
      "zh": "深度学习需要大数据。"
    }
  },
  {
    "word": "neural",
    "chinese": "network 神经网络",
    "phonetic": "[ˈnjʊərəl ˈnetwɜːk]",
    "example1": {
      "en": "The neural network processes data.",
      "zh": "神经网络处理数据。"
    },
    "example2": {
      "en": "Neural networks mimic human brains.",
      "zh": "神经网络模仿人类大脑。"
    }
  },
  {
    "word": "algorithm",
    "chinese": "算法",
    "phonetic": "[ˈælɡərɪðəm]",
    "example1": {
      "en": "This algorithm is efficient.",
      "zh": "这个算法很高效。"
    },
    "example2": {
      "en": "Algorithms solve complex problems.",
      "zh": "算法解决复杂问题。"
    }
  },
  {
    "word": "dataset",
    "chinese": "数据集",
    "phonetic": "[ˈdeɪtəset]",
    "example1": {
      "en": "We need a large dataset.",
      "zh": "我们需要一个大型数据集。"
    },
    "example2": {
      "en": "The dataset contains images.",
      "zh": "数据集包含图像。"
    }
  },
  {
    "word": "automation",
    "chinese": "自动化",
    "phonetic": "[ˌɔːtəˈmeɪʃn]",
    "example1": {
      "en": "Automation improves efficiency.",
      "zh": "自动化提高效率。"
    },
    "example2": {
      "en": "Factory automation saves labor.",
      "zh": "工厂自动化节省人力。"
    }
  },
  {
    "word": "recognition",
    "chinese": "识别",
    "phonetic": "[ˌrekəɡˈnɪʃn]",
    "example1": {
      "en": "Face recognition is common.",
      "zh": "人脸识别很普遍。"
    },
    "example2": {
      "en": "Speech recognition helps translation.",
      "zh": "语音识别帮助翻译。"
    }
  },
  {
    "word": "chatbot",
    "chinese": "聊天机器人",
    "phonetic": "[ˈtʃætbɒt]",
    "example1": {
      "en": "The chatbot answers questions.",
      "zh": "聊天机器人回答问题。"
    },
    "example2": {
      "en": "Chatbots provide customer service.",
      "zh": "聊天机器人提供客户服务。"
    }
  },
  {
    "word": "virtual",
    "chinese": "reality (VR) 虚拟现实",
    "phonetic": "[ˈvɜːtʃuəl riˈæləti]",
    "example1": {
      "en": "VR games are fun.",
      "zh": "虚拟现实游戏很有趣。"
    },
    "example2": {
      "en": "VR technology creates new worlds.",
      "zh": "虚拟现实技术创造新世界。"
    }
  },
  {
    "word": "augmented",
    "chinese": "reality (AR) 增强现实",
    "phonetic": "[ɔːɡˈmentɪd riˈæləti]",
    "example1": {
      "en": "AR adds digital elements.",
      "zh": "增强现实添加数字元素。"
    },
    "example2": {
      "en": "AR helps in education.",
      "zh": "增强现实帮助教育。"
    }
  },
  {
    "word": "voice",
    "chinese": "assistant 语音助手",
    "phonetic": "[vɔɪs əˈsɪstənt]",
    "example1": {
      "en": "Voice assistants are helpful.",
      "zh": "语音助手很有帮助。"
    },
    "example2": {
      "en": "Many phones have voice assistants.",
      "zh": "许多手机都有语音助手。"
    }
  },
  {
    "word": "autonomous",
    "chinese": "自主的",
    "phonetic": "[ɔːˈtɒnəməs]",
    "example1": {
      "en": "Autonomous cars drive themselves.",
      "zh": "自动驾驶汽车自己开。"
    },
    "example2": {
      "en": "Robots become more autonomous.",
      "zh": "机器人变得更加自主。"
    }
  },
  {
    "word": "smart",
    "chinese": "device 智能设备",
    "phonetic": "[smɑːt dɪˈvaɪs]",
    "example1": {
      "en": "This is a smart device.",
      "zh": "这是一个智能设备。"
    },
    "example2": {
      "en": "Smart devices make life easier.",
      "zh": "智能设备使生活更容易。"
    }
  },
  {
    "word": "data",
    "chinese": "mining 数据挖掘",
    "phonetic": "[ˈdeɪtə ˈmaɪnɪŋ]",
    "example1": {
      "en": "Data mining finds patterns.",
      "zh": "数据挖掘发现模式。"
    },
    "example2": {
      "en": "Companies use data mining.",
      "zh": "公司使用数据挖掘。"
    }
  },
  {
    "word": "cloud",
    "chinese": "computing 云计算",
    "phonetic": "[klaʊd kəmˈpjuːtɪŋ]",
    "example1": {
      "en": "Cloud computing saves space.",
      "zh": "云计算节省空间。"
    },
    "example2": {
      "en": "Many services use cloud computing.",
      "zh": "许多服务使用云计算。"
    }
  },
  {
    "word": "machine",
    "chinese": "vision 机器视觉",
    "phonetic": "[məˈʃiːn ˈvɪʒn]",
    "example1": {
      "en": "Machine vision checks quality.",
      "zh": "机器视觉检查质量。"
    },
    "example2": {
      "en": "Machine vision helps robots see.",
      "zh": "机器视觉帮助机器人看见。"
    }
  },
  {
    "word": "natural",
    "chinese": "language processing (NLP) 自然语言处理",
    "phonetic": "[ˈnætʃrəl ˈlæŋɡwɪdʒ ˈprəʊsesɪŋ]",
    "example1": {
      "en": "NLP helps computers understand language.",
      "zh": "自然语言处理帮助计算机理解语言。"
    },
    "example2": {
      "en": "Translation uses NLP.",
      "zh": "翻译使用自然语言处理。"
    }
  },
  {
    "word": "prediction",
    "chinese": "预测",
    "phonetic": "[prɪˈdɪkʃn]",
    "example1": {
      "en": "AI makes predictions.",
      "zh": "人工智能进行预测。"
    },
    "example2": {
      "en": "Weather prediction becomes more accurate.",
      "zh": "天气预测变得更准确。"
    }
  },
  {
    "word": "recommendation",
    "chinese": "推荐",
    "phonetic": "[ˌrekəmenˈdeɪʃn]",
    "example1": {
      "en": "AI gives recommendations.",
      "zh": "人工智能给出推荐。"
    },
    "example2": {
      "en": "The app recommends movies.",
      "zh": "应用推荐电影。"
    }
  },
  {
    "word": "optimization",
    "chinese": "优化",
    "phonetic": "[ˌɒptɪmaɪˈzeɪʃn]",
    "example1": {
      "en": "AI helps optimization.",
      "zh": "人工智能帮助优化。"
    },
    "example2": {
      "en": "System optimization improves performance.",
      "zh": "系统优化提高性能。"
    }
  }
];