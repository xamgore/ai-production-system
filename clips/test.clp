; helper functions

(deffunction ask-question (?question $?allowed-values)
   (printout t ?question " ")
   (bind ?answer (read))
   (if (lexemep ?answer)
       then (bind ?answer (lowcase ?answer)))
   (while (not (member ?answer ?allowed-values)) do
      (printout t ?question " ")
      (bind ?answer (read))
      (if (lexemep ?answer)
          then (bind ?answer (lowcase ?answer))))
   ?answer)

(deffunction ask (?question)
   (bind ?response (ask-question ?question yes no y n))
   (if (or (eq ?response yes) (eq ?response y))
       then yes
       else no))

(deffunction answer (?ans) (printout t ?ans crlf))



; start quesion
(defrule start =>
    (assert (has-chosen (ask "Уже выбрал язык для своего проекта или команды?"))))

(defrule ans-continue (has-chosen yes) =>
    (answer "Продолжай использовать его. Пока вы не достигните своих целей с вашим нынешним языком, новый язык будет мешать вам."))


; mobile applications
(defrule ask-mobile (has-chosen no) =>
    (assert (is-mobile (ask "Разрабатываешь мобильное приложение?"))))

(defrule ask-only-android (is-mobile yes) =>
    (assert (is-only-android (ask "Только под Android?"))))

(defrule ans-android (is-only-android yes) =>
    (answer "Похоже, придётся использовать Java. Гибридные приложения — зло."))

(defrule ask-only-ios (is-only-android no) =>
    (assert (is-only-ios (ask "Только под iOS?"))))

(defrule ans-ios (is-only-ios yes) =>
    (answer "Используй Swift. Гибридные приложения — зло."))

(defrule ans-ios-android (is-only-ios no) =>
    (answer "Время для изучения Java и Swift. Гибридные приложения — зло."))


; web or desktop
(defrule ask-web (is-mobile no) =>
    (assert (is-web (ask "Разрабатываешь Web-приложение?"))))

; desktop
(defrule ask-lazy (is-web no) =>
    (assert (is-lazy (ask "Ты ленивый?"))))

(defrule ans-is-lazy (is-lazy yes) =>
    (answer "Просто используй Java"))

(defrule ask-is-crazy (is-lazy no) =>
    (assert (is-crazy (ask "Ты сумасшедший?"))))

(defrule ans-is-not-crazy (is-crazy yes) =>
    (answer "Используй Visual Basic. Надеюсь ты теперь горд собой."))

(defrule ans-is-crazy (is-crazy no) =>
    (answer "Используй какой-нибудь диалект Си"))

; web applications
(defrule ask-client-side (is-web yes) =>
    (assert (is-client-side (ask "Это клиентское приложение?"))))

(defrule ans-web-client (is-client-side yes) =>
    (answer "Похоже придётся писать на JavaScript, мои соболезнования."))


; enterprise
(defrule ask-enterprise (or (is-web no) (is-client-side no)) =>
    (assert (is-enterpirse (ask "Ты работаешь на предприятие?"))))

(defrule ans-enterprise (is-enterpirse yes) =>
    (answer "Просто используй Java. За такой выбор ещё никого не уволили."))


; startup
(defrule ask-parallel (is-enterpirse no) =>
    (assert (needs-parallel (ask "Тебе нужны параллельные вычисления?"))))

(defrule ask-knows-parallel (needs-parallel yes) =>
    (assert (knows-parallel (ask "Ты знаешь, зачем нужны параллельные вычисления?"))))

(defrule ans-knows-parallel (knows-parallel no) =>
    (answer "Я тоже так думаю. Бери Ruby on Rails и проваливай отсюда."))

(defrule ask-functional (knows-parallel yes) =>
    (assert (loves-functional (ask "Ты любишь функциональное программирование?"))))

(defrule ans-functional (loves-functional no) =>
    (answer "Используй Go. Он довольно классный."))

(defrule ask-jvm (loves-functional yes) =>
    (assert (needs-jvm (ask "Тебе нужна Java Virtual Machine по каким-нибудь причинам?"))))

(defrule ans-needs-jvm (needs-jvm yes) =>
    (answer "Используй Clojure"))

(defrule ans-needs-jvm-no (needs-jvm no) =>
    (answer "Используй Rust или Elixir. Ты добрался так далеко, так что выбирай что тебе больше нравится."))


(defrule ask-static-types (need-parallel no) =>
    (assert (needs-static (ask "Тебе нужны статические типы?"))))

(defrule ans-static (needs-static yes) =>
    (answer "Используй Dart"))

(defrule ask-one (needs-static no) =>
    (assert (one-lang (ask "Ты хочешь иметь только один язык в своей кодовой базе?"))))

(defrule ans-one (one-lang yes) =>
    (answer "Придётся работать с JavaScript, но ты итак об этом знаешь"))

(defrule ask-skillful (one-lang no) =>
    (assert (is-skillful (ask "Ты уже знаком хотя бы с одним языком программирования?"))))

(defrule ans-skillful (is-skillful no) =>
    (answer "Используй Python. Его легко изучить и он очень мощный."))

(defrule ask-miss2000 (is-skillful yes) =>
    (assert (misses (ask "Ностальгируешь по вебу из далёких 2000ых?"))))

(defrule ans-misses (misses yes) =>
    (answer "Возможно, тебе придётся остаться вместе с PHP"))

(defrule ans-misses-no (misses no) =>
    (answer "Используй Ruby"))
