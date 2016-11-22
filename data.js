var data = [{
    id: 0,
    text: "Какой язык программирования мне выбрать?",
    answers: [{
        text: "Поехали!",
        target: 1
    }]
}, {
    id: 1,
    text: "Уже выбрал язык для своего проекта или команды?",
    answers: [{
        text: "Да",
        target: 2
    }, {
        text: "Нет",
        target: 3
    }]
}, {
    id: 2,
    text: "Продолжай использовать его. Пока вы не достигните своих целей с вашим нынешним языком, новый язык лишь будет мешать вам.",
    answers: []
}, {
    id: 3,
    text: "Разрабатываешь мобильное приложение?",
    answers: [{
        text: "Да",
        target: 4
    }, {
        text: "Нет",
        target: 8
    }]
}, {
    id: 4,
    text: "Ты разрабатываешь для Android, iOS, или под обе платформы?",
    answers: [{
        text: "Android",
        target: 5
    }, {
        text: "iOS",
        target: 6
    }, {
        text: "Обе",
        target: 7
    }]
}, {
    id: 5,
    label: ["Java"],
    text: "Похоже, придётся использовать Java. Гибридные приложения (типа Xamarin) — зло.",
    answers: []
}, {
    id: 6,
    label: ["Swift"],
    text: "Используй Swift. Гибридные приложения (типа Xamarin) — зло.",
    answers: []
}, {
    id: 7,
    label: ["Java", "Swift"],
    text: "Время для изучения Java и Swift. Гибридные приложения (типа Xamarin) — зло.",
    answers: []
}, {
    id: 8,
    text: "Что ты разрабатываешь?",
    answers: [{
        text: "Web-приложение",
        target: 9
    }, {
        text: "Сетевое приложение",
        target: 11
    }, {
        text: "Приложение для десктопа",
        target: 21
    }]
}, {
    id: 9,
    text: "Это клиентское приложение?",
    answers: [{
        text: "Да",
        target: 10
    }, {
        text: "Нет",
        target: 11
    }]
}, {
    id: 10,
    label: ["JavaScript"],
    text: "Похоже придётся писать на JavaScript, мои соболезнования.",
    answers: []
}, {
    id: 11,
    text: "Ты работаешь на предприятие или стартап?",
    answers: [{
        text: "Предприятие",
        target: 12
    }, {
        text: "Стартап",
        target: 13
    }]
}, {
    id: 12,
    label: ["Java"],
    text: "Просто используй Java. За такой выбор ещё никого не уволили.",
    answers: []
}, {
    id: 13,
    text: "Тебе нужны параллельные вычисления?",
    answers: [{
        text: "Да",
        target: 14
    }, {
        text: "Нет",
        target: 25
    }]
}, {
    id: 14,
    text: "Ты знаешь, зачем нужны параллельные вычисления?",
    answers: [{
        text: "Да",
        target: 16
    }, {
        text: "Не очень",
        target: 15
    }]
}, {
    id: 15,
    label: ["Ruby"],
    text: "Я так не думаю. Бери Ruby on Rails и проваливай отсюда.",
    answers: []
}, {
    id: 16,
    text: "Ты любишь функциональное программирование?",
    answers: [{
        text: "Да",
        target: 18
    }, {
        text: "Нет",
        target: 17
    }]
}, {
    id: 17,
    label: ["Go"],
    text: "Используй Go. Он довольно классный.",
    answers: []
}, {
    id: 18,
    text: "Тебе нужна Java Virtual Machine по каким-нибудь причинам?",
    answers: [{
        text: "Да",
        target: 19
    }, {
        text: "Нет",
        target: 20
    }]
}, {
    id: 19,
    label: ["Clojure"],
    text: "Используй Clojure",
    answers: []
}, {
    id: 20,
    label: ["Rust", "Elixir"],
    text: "Используй Rust или Elixir. Ты добрался так далеко, так что выбирай что тебе больше нравится.",
    answers: []
}, {
    id: 21,
    text: "Насколько ты ленив?",
    answers: [{
        text: "Очень ленивый",
        target: 22
    }, {
        text: "Вроде как ленивый",
        target: 23
    }, {
        text: "Умру от лени",
        target: 24
    }]
}, {
    id: 22,
    label: ["Visual Basic"],
    text: "Используй Visual Basic. Надеюсь ты теперь горд собой.",
    answers: []
}, {
    id: 23,
    label: ["Java"],
    text: "Просто используй Java",
    answers: []
}, {
    id: 24,
    label: ["C lang"],
    text: "Используй какой-нибудь диалект Си",
    answers: []
}, {
    id: 25,
    text: "Тебе нужны статические типы?",
    answers: [{
        text: "Да",
        target: 26
    }, {
        text: "Нет",
        target: 27
    }]
}, {
    id: 26,
    label: ["Dart"],
    text: "Используй Dart",
    answers: []
}, {
    id: 27,
    text: "Ты хочешь иметь только один язык в своей кодовой базе?",
    answers: [{
        text: "Да",
        target: 28
    }, {
        text: "Мне всё равно",
        target: 29
    }]
}, {
    id: 28,
    label: ["JavaScript"],
    text: "Придётся работать с JavaScript, но ты итак об этом знаешь ;)",
    answers: []
}, {
    id: 29,
    text: "Ты уже знаком хотя бы с одним языком программирования?",
    answers: [{
        text: "Да",
        target: 30
    }, {
        text: "Нет",
        target: 31
    }]
}, {
    id: 30,
    text: "Ностальгируешь по вебу из далёких 2000ых?",
    answers: [{
        text: "Да",
        target: 32
    }, {
        text: "Нет",
        target: 33
    }]
}, {
    id: 31,
    label: ["Python"],
    text: "Используй Python. Его легко изучить и он очень мощный.",
    answers: []
}, {
    id: 32,
    label: ["PHP"],
    text: "Возможно, тебе придётся остаться вместе с PHP",
    answers: []
}, {
    id: 33,
    label: ["Ruby"],
    text: "Используй Ruby",
    answers: []
}];
