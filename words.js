const wordsList = [
    {
        english: "friend",
        chinese: "朋友",
        phonetic: "[frend]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "He is my best friend.",
            translation: "他是我最好的朋友。",
            situation: "general"
        },
        examples: [
            {
                sentence: "We have been friends since childhood.",
                translation: "我们从小就是朋友。"
            },
            {
                sentence: "It's important to make new friends.",
                translation: "交新朋友很重要。"
            }
        ]
    },
    {
        english: "boy",
        chinese: "男孩",
        phonetic: "[bɔi]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The little boy is playing in the park.",
            translation: "小男孩在公园里玩耍。",
            situation: "general"
        },
        examples: [
            {
                sentence: "He's such a good boy.",
                translation: "他是个好孩子。"
            }
        ]
    },
    {
        english: "mother",
        chinese: "母亲",
        phonetic: "['mʌðə]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["mom", "mum", "mama"],
        related: ["motherhood", "maternal"],
        example: {
            sentence: "My mother cooks dinner every evening.",
            translation: "我妈妈每天晚上做饭。",
            situation: "general"
        },
        examples: [
            {
                sentence: "She became a mother last year.",
                translation: "她去年当了母亲。"
            }
        ]
    },
    {
        english: "father",
        chinese: "父亲",
        phonetic: "['fɑ:ðə]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["dad", "daddy", "papa"],
        related: ["fatherhood", "paternal"],
        example: {
            sentence: "My father works in a bank.",
            translation: "我父亲在银行工作。",
            situation: "general"
        }  
        
    },
    {
        english: "sister",
        chinese: "姐妹",
        phonetic: "['sistə]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        related: ["sisterhood", "sisterly"],
        example: {
            sentence: "I have two sisters and one brother.",
            translation: "我有两个姐妹和一个兄弟。",
            situation: "general"
        },
        examples: [
            {
                sentence: "My older sister helps me with my homework.",
                translation: "我姐姐帮我做作业。"
            }
        ]
    },
    {
        english: "brother",
        chinese: "兄弟",
        phonetic: "['brʌðə]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        related: ["brotherhood", "brotherly"],
        example: {
            sentence: "My brother is two years older than me.",
            translation: "我哥哥比我大两岁。",
            situation: "general"
        },
        examples: [
            {
                sentence: "The two brothers look very similar.",
                translation: "这两兄弟长得很像。"
            }
        ]
    },
    {
        english: "uncle",
        chinese: "叔叔；舅舅",
        phonetic: "['ʌŋkl]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "My uncle lives in New York.",
            translation: "我叔叔住在纽约。",
            situation: "general"
        },
        examples: [
            {
                sentence: "We visit our uncle every summer.",
                translation: "我们每个夏天都去看望叔叔。"
            }
        ],
        notes: "可指父亲的兄弟或母亲的兄弟"
    },
    {
        english: "man",
        chinese: "男人",
        phonetic: "[mæn]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        plural: "men",
        antonyms: ["woman"],
        example: {
            sentence: "There is a man waiting outside.",
            translation: "外面有个男人在等候。",
            situation: "general"
        },
        examples: [
            {
                sentence: "He is a kind man.",
                translation: "他是个善良的男人。"
            }
        ]
    },
    {
        english: "woman",
        chinese: "女人",
        phonetic: "['wumən]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        plural: "women",
        antonyms: ["man"],
        example: {
            sentence: "The woman is a successful business leader.",
            translation: "这位女士是一位成功的商业领袖。",
            situation: "general"
        },
        examples: [
            {
                sentence: "She is a strong and independent woman.",
                translation: "她是一个坚强独立的女性。"
            }
        ]
    },
    {
        english: "Miss",
        chinese: "小姐",
        phonetic: "[mis]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        related: ["Mrs.", "Ms."],
        example: {
            sentence: "Miss Wang is our new English teacher.",
            translation: "王小姐是我们的新英语老师。",
            situation: "formal"
        },
        examples: [
            {
                sentence: "Excuse me, Miss, you dropped your wallet.",
                translation: "对不起，小姐，您的钱包掉了。"
            }
        ],
        notes: "用于称呼未婚女性，也可作为老师的尊称"
    },
    {
        english: "lady",
        chinese: "女士；小姐",
        phonetic: "['leidi]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        plural: "ladies",
        synonyms: ["woman", "madam"],
        example: {
            sentence: "The lady in the red dress is my teacher.",
            translation: "那位穿红裙子的女士是我的老师。",
            situation: "formal"
        },
        examples: [
            {
                sentence: "Ladies and gentlemen, welcome to the show.",
                translation: "女士们、先生们，欢迎观看演出。"
            }
        ],
        notes: "较正式场合使用，比woman更有礼貌"
    },
    {
        english: "mom",
        chinese: "妈妈",
        phonetic: "[mɔm]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["mother", "mama"],
        example: {
            sentence: "My mom makes the best cookies.",
            translation: "我妈妈做的曲奇饼最好吃。",
            situation: "casual"
        },
        examples: [
            {
                sentence: "Can you help me, Mom?",
                translation: "妈妈，你能帮帮我吗？"
            }
        ],
        notes: "日常用语，较为随意的称呼"
    },
    {
        english: "dada",
        chinese: "爸爸",
        phonetic: "[dæd, 'dɑ:dɑ:]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["dad", "daddy", "father"],
        example: {
            sentence: "Look, dada is coming home!",
            translation: "看，爸爸回来了！",
            situation: "casual"
        },
        examples: [
            {
                sentence: "The baby said 'dada' for the first time.",
                translation: "宝宝第一次说'爸爸'。"
            }
        ],
        notes: "婴幼儿用语，非常口语化"
    },
    {
        english: "parents",
        chinese: "父母",
        phonetic: "['pεərənt]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        singular: "parent",
        example: {
            sentence: "My parents both work in a hospital.",
            translation: "我的父母都在医院工作。",
            situation: "general"
        },
        examples: [
            {
                sentence: "Parents should spend more time with their children.",
                translation: "父母应该多花时间陪伴孩子。"
            }
        ]
    },
    {
        english: "grandparents",
        chinese: "祖父母",
        phonetic: "",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        related: ["grandfather", "grandmother"],
        example: {
            sentence: "We visit our grandparents every weekend.",
            translation: "我们每个周末都去看望祖父母。",
            situation: "general"
        },
        examples: [
            {
                sentence: "My grandparents live in the countryside.",
                translation: "我的祖父母住在乡下。"
            }
        ]
    },
    {
        english: "grandma",
        chinese: "（外）祖母",
        phonetic: "",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["grandmother"],
        example: {
            sentence: "Grandma always bakes cookies for us.",
            translation: "奶奶总是为我们烤饼干。",
            situation: "casual"
        },
        examples: [
            {
                sentence: "Let's go visit Grandma this weekend.",
                translation: "这周末我们去看奶奶吧。"
            }
        ],
        notes: "口语中常用的称呼"
    }
    {
        english: "cat",
        chinese: "猫",
        phonetic: "[kæt]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The cat is sleeping on the sofa.",
            translation: "猫正在沙发上睡觉。",
            situation: "general"
        },
        examples: [
            {
                sentence: "She has two cats as pets.",
                translation: "她养了两只猫作为宠物。"
            }
        ],
        notes: "常见家庭宠物"
    },
    {
        english: "dog",
        chinese: "狗",
        phonetic: "[dɔɡ, dɔ:ɡ]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The dog barks at strangers.",
            translation: "这只狗对陌生人叫。",
            situation: "general"
        },
        examples: [
            {
                sentence: "They take their dog for a walk every morning.",
                translation: "他们每天早上都带狗去散步。"
            }
        ],
        notes: "最常见的宠物之一"
    },
    {
        english: "pig",
        chinese: "猪",
        phonetic: "[piɡ]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The pig is rolling in the mud.",
            translation: "猪在泥巴里打滚。",
            situation: "general"
        },
        examples: [
            {
                sentence: "The farmer keeps pigs and chickens.",
                translation: "农民养了猪和鸡。"
            }
        ],
        notes: "常见家畜"
    },
    {
        english: "elephant",
        chinese: "大象",
        phonetic: "['elifənt]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "medium",
        example: {
            sentence: "The elephant is the largest land animal.",
            translation: "大象是最大的陆地动物。",
            situation: "general"
        },
        examples: [
            {
                sentence: "We saw wild elephants in Africa.",
                translation: "我们在非洲看到了野生大象。"
            }
        ],
        notes: "世界上最大的陆地动物"
    },
    {
        english: "rabbit",
        chinese: "兔子",
        phonetic: "['ræbit]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The rabbit is eating carrots.",
            translation: "兔子正在吃胡萝卜。",
            situation: "general"
        },
        examples: [
            {
                sentence: "White rabbits have red eyes.",
                translation: "白兔有红眼睛。"
            }
        ],
        notes: "常见宠物和农场动物"
    }
    {
        english: "home",
        chinese: "家",
        phonetic: "[həum]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "I'm going home now.",
            translation: "我现在要回家了。",
            situation: "general"
        },
        examples: [
            {
                sentence: "There's no place like home.",
                translation: "没有任何地方比得上家。"
            }
        ]
    },
    {
        english: "room",
        chinese: "房间",
        phonetic: "[ru:m, rum]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "My room is on the second floor.",
            translation: "我的房间在二楼。",
            situation: "general"
        },
        examples: [
            {
                sentence: "This room is very spacious.",
                translation: "这个房间很宽敞。"
            }
        ]
    },
    {
        english: "bedroom",
        chinese: "卧室",
        phonetic: "['bedru(:)m]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        related: ["bed", "room"],
        example: {
            sentence: "The bedroom has two windows.",
            translation: "卧室有两个窗户。",
            situation: "home"
        },
        examples: [
            {
                sentence: "She decorated her bedroom in blue.",
                translation: "她把卧室装饰成蓝色的。"
            }
        ]
    },
    {
        english: "bathroom",
        chinese: "卫生间",
        phonetic: "['bɑ:θrum]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "Where is the bathroom?",
            translation: "卫生间在哪里？",
            situation: "general"
        },
        examples: [
            {
                sentence: "The bathroom is down the hall.",
                translation: "卫生间在走廊尽头。"
            }
        ]
    },
    {
        english: "living room",
        chinese: "起居室",
        phonetic: "['liviŋ ru:m]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "The family gathered in the living room.",
            translation: "全家人聚集在起居室里。",
            situation: "home"
        },
        examples: [
            {
                sentence: "We have a TV in our living room.",
                translation: "我们的起居室里有一台电视。"
            }
        ]
    },
    {
        english: "kitchen",
        chinese: "厨房",
        phonetic: "['kitʃin]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "high",
        example: {
            sentence: "Mom is cooking in the kitchen.",
            translation: "妈妈在厨房做饭。",
            situation: "home"
        },
        examples: [
            {
                sentence: "The kitchen is the heart of a home.",
                translation
            }
        },
    // 星期部分
{
    english: "Monday",
    chinese: "星期一",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example:
     {
        sentence: "I have English class on Monday.",
        translation: "我星期一有英语课。",
        situation: "general"
    }
    notes: "星期的第一天"
},
{
    english: "Tuesday",
    chinese: "星期二",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The meeting is scheduled for Tuesday.",
        translation: "会议安排在星期二。",
        situation: "general"
    }
},
{
    english: "Wednesday",
    chinese: "星期三",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "She goes swimming every Wednesday.",
        translation: "她每个星期三去游泳。",
        situation: "general"
    }
},
{
    english: "weekend",
    chinese: "周末",
    phonetic: "[,wi:k'end, 'wi:kend]",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "What are your plans for the weekend?",
        translation: "你周末有什么计划？",
        situation: "general"
    },
    examples: [
        {
            sentence: "I usually rest on weekends.",
            translation: "我通常在周末休息。"
        }
    ]
},

// 月份部分
{
    english: "January",
    chinese: "一月",
    abbreviation: "Jan.",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The new year begins in January.",
        translation: "新年从一月开始。",
        situation: "general"
    }
},
{
    english: "February",
    chinese: "二月",
    abbreviation: "Feb.",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Valentine's Day is in February.",
        translation: "情人节在二月。",
        situation: "general"
    }
},
{
    english: "March",
    chinese: "三月",
    phonetic: "[mɑ:tʃ]",
    abbreviation: "Mar.",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Spring usually begins in March.",
        translation: "春天通常从三月开始。",
        situation: "general"
    }
}
{
    english: "spring",
    chinese: "春天",
    phonetic: "[spriŋ]",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Flowers bloom in spring.",
        translation: "花朵在春天开放。",
        situation: "general"
    },
    examples: [
        {
            sentence: "Spring is my favorite season.",
            translation: "春天是我最喜欢的季节。"
        }
    ]
},
{
    english: "summer",
    chinese: "夏天",
    phonetic: "['sʌmə]",
    partOfSpeech: "n.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "It's very hot in summer.",
        translation: "夏天非常热。",
        situation: "general"
    },
    examples: [
        {
            sentence: "We often go swimming in summer.",
            translation: "我们经常在夏天去游泳。"
        }
    ]
}
// 方位词部分
{
    english: "south",
    chinese: "南",
    phonetic: "[sauθ, sauð]",
    partOfSpeech: "n./adj.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Birds fly south in winter.",
        translation: "鸟儿在冬天往南飞。",
        situation: "general"
    },
    examples: [
        {
            sentence: "The south of China is warmer.",
            translation: "中国南方比较温暖。"
        }
    ]
},
{
    english: "north",
    chinese: "北",
    phonetic: "[nɔ:θ]",
    partOfSpeech: "n./adj.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The compass points to the north.",
        translation: "指南针指向北方。",
        situation: "general"
    }
},
{
    english: "left",
    chinese: "左边",
    phonetic: "[left]",
    partOfSpeech: "n./adj./adv.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Turn left at the corner.",
        translation: "在拐角处向左转。",
        situation: "directions"
    }
},
{
    english: "right",
    chinese: "右边",
    phonetic: "[rait]",
    partOfSpeech: "n./adj./adv.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The supermarket is on the right.",
        translation: "超市在右边。",
        situation: "directions"
    }
},

// 疾病相关词汇
{
    english: "have a fever",
    chinese: "发烧",
    phonetic: "['fi:və]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The child has a fever.",
        translation: "这个孩子在发烧。",
        situation: "medical"
    },
    examples: [
        {
            sentence: "You should see a doctor if you have a fever.",
            translation: "如果你发烧了应该去看医生。"
        }
    ]
},
{
    english: "have a cold",
    chinese: "感冒",
    phonetic: "[kəuld]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I have a bad cold.",
        translation: "我得了重感冒。",
        situation: "medical"
    },
    examples: [
        {
            sentence: "He caught a cold in the rain.",
            translation: "他在雨中感冒了。"
        }
    ]
},
{
    english: "have a headache",
    chinese: "头疼",
    phonetic: "['hedeik]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I have a terrible headache.",
        translation: "我头疼得厉害。",
        situation: "medical"
    },
    examples: [
        {
            sentence: "She has a headache from working too long.",
            translation: "她工作太久导致头疼。"
        }
    ]
},
{
    english: "have a sore throat",
    chinese: "喉咙疼",
    phonetic: "[sɔ:] [θrəut]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I have a sore throat and can't speak well.",
        translation: "我嗓子疼，说不好话。",
        situation: "medical"
    },
    examples: [
        {
            sentence: "Drinking hot water helps with a sore throat.",
            translation: "喝热水对嗓子疼有帮助。"
        }
    ]
}
// 介词部分
{
    english: "in",
    chinese: "在……里",
    phonetic: "[in]",
    partOfSpeech: "prep.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "The book is in the bag.",
        translation: "书在包里。",
        situation: "general"
    },
    examples: [
        {
            sentence: "We are in the classroom.",
            translation: "我们在教室里。"
        }
    ]
},
{
    english: "on",
    chinese: "在……上；在……时候",
    phonetic: "[ɔn, ɔ:n, ən, n]",
    partOfSpeech: "prep.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "The cat is on the roof.",
        translation: "猫在屋顶上。",
        situation: "general"
    },
    examples: [
        {
            sentence: "The meeting is on Monday.",
            translation: "会议在星期一。"
        }
    ]
}
// 代词部分
{
    english: "I",
    chinese: "我",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I am a student.",
        translation: "我是一个学生。",
        situation: "general"
    },
    notes: "主格人称代词"
},
{
    english: "we",
    chinese: "我们",
    phonetic: "[wi:弱 wi]",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "We are good friends.",
        translation: "我们是好朋友。",
        situation: "general"
    },
    notes: "第一人称复数"
},
{
    english: "you",
    chinese: "你；你们",
    phonetic: "[ju:, 弱 ju, jə]",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "You are very kind.",
        translation: "你很善良。",
        situation: "general"
    },
    notes: "第二人称单复数通用"
},

// 动词部分（基础常用动词）
{
    english: "play",
    chinese: "玩；踢",
    phonetic: "[plei]",
    pastForm: "played",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Children like to play games.",
        translation: "孩子们喜欢玩游戏。",
        situation: "general"
    },
    examples: [
        {
            sentence: "He plays football every weekend.",
            translation: "他每个周末踢足球。"
        }
    ]
},
{
    english: "swim",
    chinese: "游泳",
    phonetic: "[swim]",
    pastForm: "swam",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "She swims every morning.",
        translation: "她每天早上游泳。",
        situation: "sports"
    }
},

// 常用短语动词
{
    english: "get up",
    chinese: "起床",
    phonetic: "[ɡet] [ʌp]",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I get up at 7 o'clock every morning.",
        translation: "我每天早上7点起床。",
        situation: "daily routine"
    }
},
{
    english: "go shopping",
    chinese: "买东西",
    phonetic: "[ɡəu] ['ʃɔpiŋ]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "We go shopping on weekends.",
        translation: "我们周末去购物。",
        situation: "leisure"
    }
},

// 日常活动动词
{
    english: "do homework",
    chinese: "做作业",
    phonetic: "['həumwə:k]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Students must do their homework every day.",
        translation: "学生们每天都要做作业。",
        situation: "education"
    }
},
{
    english: "watch TV",
    chinese: "看电视",
    phonetic: "[wɔtʃ, wɔ:tʃ]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "They watch TV after dinner.",
        translation: "他们晚饭后看电视。",
        situation: "leisure"
    }
}
// 代词部分
{
    english: "I",
    chinese: "我",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I am a student.",
        translation: "我是一个学生。",
        situation: "general"
    },
    notes: "主格人称代词"
},
{
    english: "we",
    chinese: "我们",
    phonetic: "[wi:弱 wi]",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "We are good friends.",
        translation: "我们是好朋友。",
        situation: "general"
    },
    notes: "第一人称复数"
},
{
    english: "you",
    chinese: "你；你们",
    phonetic: "[ju:, 弱 ju, jə]",
    partOfSpeech: "pron.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "You are very kind.",
        translation: "你很善良。",
        situation: "general"
    },
    notes: "第二人称单复数通用"
},

// 动词部分（基础常用动词）
{
    english: "play",
    chinese: "玩；踢",
    phonetic: "[plei]",
    pastForm: "played",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Children like to play games.",
        translation: "孩子们喜欢玩游戏。",
        situation: "general"
    },
    examples: [
        {
            sentence: "He plays football every weekend.",
            translation: "他每个周末踢足球。"
        }
    ]
},
{
    english: "swim",
    chinese: "游泳",
    phonetic: "[swim]",
    pastForm: "swam",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "She swims every morning.",
        translation: "她每天早上游泳。",
        situation: "sports"
    }
},

// 常用短语动词
{
    english: "get up",
    chinese: "起床",
    phonetic: "[ɡet] [ʌp]",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I get up at 7 o'clock every morning.",
        translation: "我每天早上7点起床。",
        situation: "daily routine"
    }
},
{
    english: "go shopping",
    chinese: "买东西",
    phonetic: "[ɡəu] ['ʃɔpiŋ]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "We go shopping on weekends.",
        translation: "我们周末去购物。",
        situation: "leisure"
    }
},

// 日常活动动词
{
    english: "do homework",
    chinese: "做作业",
    phonetic: "['həumwə:k]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Students must do their homework every day.",
        translation: "学生们每天都要做作业。",
        situation: "education"
    }
},
{
    english: "watch TV",
    chinese: "看电视",
    phonetic: "[wɔtʃ, wɔ:tʃ]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "They watch TV after dinner.",
        translation: "他们晚饭后看电视。",
        situation: "leisure"
    }
}
// 家务相关动词
{
    english: "clean the room",
    chinese: "打扫房间",
    phonetic: "[kli:n][ru:m]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I clean my room every weekend.",
        translation: "我每个周末打扫房间。",
        situation: "housework"
    }
},
{
    english: "wash clothes",
    chinese: "洗衣服",
    phonetic: "[wɔʃ, wɔ:ʃ] [kləuðz]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Mom washes clothes every Saturday.",
        translation: "妈妈每个星期六洗衣服。",
        situation: "housework"
    }
},

// 学习相关动词
{
    english: "study",
    chinese: "学习",
    phonetic: "['stʌdi]",
    pastForm: "studied",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "She studies English every day.",
        translation: "她每天学习英语。",
        situation: "education"
    }
},
{
    english: "learn",
    chinese: "学习",
    phonetic: "[lə:n]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "We learn new words in class.",
        translation: "我们在课堂上学习新单词。",
        situation: "education"
    }
}
// 休闲活动动词
{
    english: "play the piano",
    chinese: "弹钢琴",
    phonetic: "[plei] [pi'ænəu, pi'ɑ:-]",
    partOfSpeech: "phrase",
    difficulty: "medium",
    frequency: "medium",
    example: {
        sentence: "She plays the piano every evening.",
        translation: "她每天晚上弹钢琴。",
        situation: "hobby"
    },
    examples: [
        {
            sentence: "I've been playing the piano for ten years.",
            translation: "我已经弹钢琴十年了。"
        }
    ]
},
{
    english: "fly kites",
    chinese: "放风筝",
    phonetic: "[flai] [kaits]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "Children love flying kites in spring.",
        translation: "孩子们喜欢在春天放风筝。",
        situation: "outdoor activity"
    }
},
{
    english: "make a snowman",
    chinese: "堆雪人",
    phonetic: "[meik] ['snəumæn]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "low",
    example: {
        sentence: "Let's make a snowman in winter.",
        translation: "让我们在冬天堆个雪人。",
        situation: "winter activity"
    }
},

// 情感表达动词
{
    english: "love",
    chinese: "爱",
    phonetic: "[lʌv]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I love my family.",
        translation: "我爱我的家人。",
        situation: "emotional"
    }
},
{
    english: "like",
    chinese: "喜欢",
    phonetic: "[laik]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I like playing basketball.",
        translation: "我喜欢打篮球。",
        situation: "preference"
    }
},

// 日常生活动词
{
    english: "cook dinner",
    chinese: "做晚饭",
    phonetic: "[kuk] ['dinə]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Mom cooks dinner every evening.",
        translation: "妈妈每天晚上做晚饭。",
        situation: "daily routine"
    }
},
{
    english: "take pictures",
    chinese: "照相",
    phonetic: "[teik] ['piktʃəz]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "They like taking pictures of flowers.",
        translation: "他们喜欢给花拍照。",
        situation: "hobby"
    }
},

// 特殊用途动词
{
    english: "collect stamps",
    chinese: "集邮",
    phonetic: "[kə'lekt] [stæmps]",
    partOfSpeech: "phrase",
    difficulty: "medium",
    frequency: "low",
    example: {
        sentence: "My grandfather collects stamps.",
        translation: "我爷爷集邮。",
        situation: "hobby"
    }
},
{
    english: "plant trees",
    chinese: "种树",
    phonetic: "[plɑ:nt, plænt] [tri:s]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "We plant trees on Arbor Day.",
        translation: "我们在植树节种树。",
        situation: "environmental"
    }
},

// 沟通交流动词
{
    english: "answer the phone",
    chinese: "接电话",
    phonetic: "['ɑ:nsə, 'æn-] [fəun]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Please answer the phone, I'm busy.",
        translation: "请接电话，我正忙着。",
        situation: "communication"
    }
},
{
    english: "write an e-mail",
    chinese: "写电子邮件",
    phonetic: "[rait] [i-meil]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I write emails to my friends every week.",
        translation: "我每周给朋友写电子邮件。",
        situation: "communication"
    }
},

// 学习研究相关动词
{
    english: "do an experiment",
    chinese: "做实验",
    phonetic: "[du:] [ik'speriment]",
    partOfSpeech: "phrase",
    difficulty: "medium",
    frequency: "medium",
    example: {
        sentence: "Students do experiments in science class.",
        translation: "学生们在科学课上做实验。",
        situation: "education"
    }
},
{
    english: "write a report",
    chinese: "写报告",
    phonetic: "[rait] [ri'pɔ:t]",
    partOfSpeech: "phrase",
    difficulty: "medium",
    frequency: "medium",
    example: {
        sentence: "They need to write a report about their research.",
        translation: "他们需要写一份关于研究的报告。",
        situation: "academic"
    }
}
// 交通出行相关动词
{
    english: "ride a bike",
    chinese: "骑自行车",
    phonetic: "[raid] [baik]",
    pastForm: "rode",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "I ride my bike to school every day.",
        translation: "我每天骑自行车去学校。",
        situation: "transportation"
    }
},
{
    english: "get off",
    chinese: "下车",
    phonetic: "[ɡet] [ɔ:f, ɔf]",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "We get off the bus at the next stop.",
        translation: "我们在下一站下车。",
        situation: "transportation"
    }
},
{
    english: "take a trip",
    chinese: "去旅行",
    phonetic: "[teik] [trip]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "They plan to take a trip to Beijing.",
        translation: "他们计划去北京旅行。",
        situation: "travel"
    }
},

// 运动健康相关动词
{
    english: "do morning exercises",
    chinese: "做早操",
    phonetic: "['mɔ:niŋ] ['eksəsaiz]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "Students do morning exercises at school.",
        translation: "学生们在学校做早操。",
        situation: "exercise"
    }
},
{
    english: "climb mountains",
    chinese: "爬山",
    phonetic: "[klaim] ['mauntins]",
    partOfSpeech: "phrase",
    difficulty: "medium",
    frequency: "medium",
    example: {
        sentence: "We like climbing mountains on weekends.",
        translation: "我们喜欢在周末爬山。",
        situation: "outdoor sports"
    }
},
{
    english: "play sports",
    chinese: "进行体育运动",
    phonetic: "[plei] [spɔ:ts]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "It's important to play sports regularly.",
        translation: "定期进行体育运动很重要。",
        situation: "sports"
    }
},

// 社交活动相关动词
{
    english: "visit grandparents",
    chinese: "看望（外）祖父母",
    phonetic: "['vizit] ['ɡrænd,pεərənts]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "We visit our grandparents during holidays.",
        translation: "我们在假期看望祖父母。",
        situation: "family"
    }
},
{
    english: "have a picnic",
    chinese: "野餐",
    phonetic: "[hæv] ['piknik]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "Let's have a picnic in the park.",
        translation: "让我们在公园野餐吧。",
        situation: "social"
    }
},
{
    english: "welcome",
    chinese: "欢迎",
    phonetic: "['welkəm]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "We welcome visitors from all over the world.",
        translation: "我们欢迎来自世界各地的访客。",
        situation: "social"
    }
},

// 更多日常生活动词
{
    english: "wake up",
    chinese: "醒来",
    phonetic: "[weik] [ʌp]",
    pastForm: "woke up",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I wake up at 6:30 every morning.",
        translation: "我每天早上6:30醒来。",
        situation: "daily routine"
    }
},
{
    english: "put on",
    chinese: "穿上",
    phonetic: "[put] [ɔn]",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Put on your coat, it's cold outside.",
        translation: "穿上你的外套，外面很冷。",
        situation: "daily routine"
    }
},
{
    english: "take off",
    chinese: "脱掉",
    phonetic: "[teik] [ɔ:f, ɔf]",
    partOfSpeech: "phrasal verb",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Please take off your shoes before entering.",
        translation: "进入前请脱鞋。",
        situation: "daily routine"
    }
},
{
    english: "go to bed",
    chinese: "上床睡觉",
    phonetic: "[ɡəu] [bed]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Children usually go to bed at 9 PM.",
        translation: "孩子们通常晚上9点上床睡觉。",
        situation: "daily routine"
    }
},
{
    english: "empty the trash",
    chinese: "倒垃圾",
    phonetic: "['empti] [træʃ]",
    partOfSpeech: "phrase",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "Don't forget to empty the trash before leaving.",
        translation: "离开前别忘了倒垃圾。",
        situation: "housework"
    }
}
// 感官动词
{
    english: "feel",
    chinese: "感觉",
    phonetic: "[fi:l]",
    pastForm: "felt",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I feel tired today.",
        translation: "我今天感觉很累。",
        situation: "sensation"
    },
    examples: [
        {
            sentence: "Feel how soft this fabric is.",
            translation: "摸摸这块布料有多柔软。"
        }
    ]
},
{
    english: "smell",
    chinese: "闻；散发气味",
    phonetic: "[smel]",
    pastForm: "smelt/smelled",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The flowers smell sweet.",
        translation: "这些花闻起来很香。",
        situation: "sensation"
    }
},
{
    english: "taste",
    chinese: "品尝；尝起来",
    phonetic: "[teist]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "This soup tastes delicious.",
        translation: "这汤尝起来很美味。",
        situation: "food"
    }
},
{
    english: "look",
    chinese: "看起来",
    phonetic: "[luk]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "You look happy today.",
        translation: "你今天看起来很开心。",
        situation: "appearance"
    }
},

// 思维认知动词
{
    english: "think",
    chinese: "思考；认为",
    phonetic: "[θiŋk]",
    pastForm: "thought",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "I think this is a good idea.",
        translation: "我认为这是个好主意。",
        situation: "cognition"
    }
},
{
    english: "understand",
    chinese: "理解",
    phonetic: "[,ʌndə'stænd]",
    pastForm: "understood",
    partOfSpeech: "v.",
    difficulty: "medium",
    frequency: "very high",
    example: {
        sentence: "I don't understand this math problem.",
        translation: "我不理解这道数学题。",
        situation: "learning"
    }
},
{
    english: "remember",
    chinese: "记得",
    phonetic: "[ri'membə]",
    partOfSpeech: "v.",
    difficulty: "medium",
    frequency: "very high",
    example: {
        sentence: "I remember my first day at school.",
        translation: "我记得我上学的第一天。",
        situation: "memory"
    }
},
{
    english: "forget",
    chinese: "忘记",
    phonetic: "[fə'ɡet]",
    pastForm: "forgot",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Don't forget your homework.",
        translation: "别忘了你的作业。",
        situation: "memory"
    }
},

// 变化状态动词
{
    english: "become",
    chinese: "变成",
    phonetic: "[bi'kʌm]",
    pastForm: "became",
    partOfSpeech: "v.",
    difficulty: "medium",
    frequency: "very high",
    example: {
        sentence: "He became a doctor last year.",
        translation: "他去年成为了一名医生。",
        situation: "change"
    }
},
{
    english: "grow",
    chinese: "生长；变得",
    phonetic: "[ɡrəu]",
    pastForm: "grew",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "Plants grow faster in spring.",
        translation: "植物在春天长得更快。",
        situation: "nature"
    }
},
{
    english: "turn",
    chinese: "变成；转变",
    phonetic: "[tə:n]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "The leaves turn yellow in autumn.",
        translation: "树叶在秋天变黄。",
        situation: "change"
    }
},
{
    english: "change",
    chinese: "改变",
    phonetic: "[tʃeindʒ]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "very high",
    example: {
        sentence: "The weather changes quickly.",
        translation: "天气变化很快。",
        situation: "change"
    }
},

// 天气自然现象动词
{
    english: "rain",
    chinese: "下雨",
    phonetic: "[rein]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "high",
    example: {
        sentence: "It often rains in spring.",
        translation: "春天经常下雨。",
        situation: "weather"
    }
},
{
    english: "snow",
    chinese: "下雪",
    phonetic: "[snəu]",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "It snows a lot in winter.",
        translation: "冬天经常下雪。",
        situation: "weather"
    }
},
{
    english: "shine",
    chinese: "发光；照耀",
    phonetic: "[ʃain]",
    pastForm: "shone",
    partOfSpeech: "v.",
    difficulty: "easy",
    frequency: "medium",
    example: {
        sentence: "The sun shines brightly today.",
        translation: "今天阳光明媚。",
        situation: "weather"
    }
},
{
    english: "thunder",
    chinese: "打雷",
    phonetic: "['θʌndə]",
    partOfSpeech: "v.",
    difficulty: "medium",
    frequency: "low",
    example: {
        sentence: "It's thundering outside.",
        translation: "外面在打雷。",
        situation: "weather"
    }
},
{
    english: "freeze",
    chinese: "结冰",
    phonetic: "[fri:z]",
    pastForm: "froze",
    partOfSpeech: "v.",
    difficulty: "medium",
    frequency: "medium",
    example: {
        sentence: "The lake freezes in winter.",
        translation: "湖面在冬天结冰。",
        situation: "weather"
    }
}

];

// 定义工具对象
const wordsModule = {
    getAllWords() {
        return wordsList;
    },
    
    searchWord(keyword) {
        return wordsList.filter(word => 
            word.english.toLowerCase().includes(keyword.toLowerCase()) || 
            word.chinese.includes(keyword)
        );
    },
    
    getRandomWords(count) {
        const shuffled = [...wordsList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, wordsList.length));
    }
};

// 确保 wordsModule 在全局范围可用
window.wordsModule = wordsModule;
