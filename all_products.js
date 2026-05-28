// ============================================
// ВСЕ ПРОДУКТЫ В ОДНОМ ФАЙЛЕ
// Исправленная версия без дубликатов
// ============================================

window.allProducts = [];

// ========== 1. МАГНИТ (426 продуктов) ==========
const MAGNIT_PRODUCTS = [
    {"id":200,"name":"Печенье шоколадный брауни Refit 35г","calories":279,"protein":25,"fat":11,"carbs":14,"unit":"g","default":100,"category":"Магнит"},
    {"id":201,"name":"Клетчатка Сибирская клетчатка витаминная поляна 28","calories":130,"protein":13,"fat":3,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":202,"name":"Протеиновое печенье с суфле Фисташка и катаифи Chi","calories":339,"protein":22,"fat":17,"carbs":10.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":203,"name":"Молочный шоколад с фисташковой пастой и катаифи Ch","calories":516,"protein":19,"fat":37,"carbs":18,"unit":"g","default":100,"category":"Магнит"},
    {"id":204,"name":"Печенье Ё Батон Jamy Pie Шоколад 60г","calories":289,"protein":20,"fat":11,"carbs":18,"unit":"g","default":100,"category":"Магнит"},
    {"id":205,"name":"Протеиновое печенье Северная черника Kultlab Diet","calories":293,"protein":23.5,"fat":8.4,"carbs":22.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":206,"name":"Печенье Snaq Fabriq глазированное вишня карамель 4","calories":308,"protein":15,"fat":14,"carbs":19,"unit":"g","default":100,"category":"Магнит"},
    {"id":207,"name":"Печенье Bombbar со вкусом шоколадного брауни негла","calories":271,"protein":25,"fat":10.5,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":208,"name":"Батончик Кондитери Кубани мюсли с клюквой с глазиро","calories":370,"protein":1.5,"fat":18,"carbs":51,"unit":"g","default":100,"category":"Магнит"},
    {"id":209,"name":"Конфитюр из вишни Ратибор 350г","calories":200,"protein":0,"fat":0,"carbs":50,"unit":"g","default":100,"category":"Магнит"},
    {"id":210,"name":"Конфитюр Zuegg Апельсин 330г","calories":230,"protein":0.2,"fat":0,"carbs":56,"unit":"g","default":100,"category":"Магнит"},
    {"id":211,"name":"Конфитюр Zuegg Экстра Груша Вильямс 320г","calories":193,"protein":0.3,"fat":0,"carbs":47,"unit":"g","default":100,"category":"Магнит"},
    {"id":212,"name":"Конфитюр Zuegg Лесные ягоды с пониженной калорийно","calories":57,"protein":0.5,"fat":0,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":213,"name":"Повидло Сава Земляничное 610г","calories":200,"protein":0,"fat":0,"carbs":50,"unit":"g","default":100,"category":"Магнит"},
    {"id":214,"name":"Джем Махеевъ Клубничный 300г","calories":272,"protein":0,"fat":0,"carbs":68,"unit":"g","default":100,"category":"Магнит"},
    {"id":215,"name":"Конфитюр Zuegg Экстра Абрикос 320г","calories":193,"protein":0.3,"fat":0,"carbs":47,"unit":"g","default":100,"category":"Магнит"},
    {"id":216,"name":"Соус Крем-Шоколад Heinz 200г","calories":280,"protein":2.5,"fat":3,"carbs":60,"unit":"g","default":100,"category":"Магнит"},
    {"id":217,"name":"Ореховая паста Babyfox 270г","calories":520,"protein":6.5,"fat":30,"carbs":55,"unit":"g","default":100,"category":"Магнит"},
    {"id":218,"name":"Белое вино игристое полусладкое безалкогольное Abr","calories":25,"protein":0,"fat":0,"carbs":5,"unit":"g","default":100,"category":"Магнит"},
    {"id":219,"name":"Вода Святой источник питьевая лимон негазированная","calories":10,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":220,"name":"Желатин Магнит пищевой 30г","calories":360,"protein":87,"fat":0.4,"carbs":1,"unit":"g","default":100,"category":"Магнит"},
    {"id":221,"name":"Агар-Агар Магнит пищевой 7г","calories":378,"protein":8.5,"fat":0.3,"carbs":83,"unit":"g","default":100,"category":"Магнит"},
    {"id":222,"name":"Ванилин Haas 1.5г","calories":288,"protein":0.1,"fat":0.1,"carbs":12.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":223,"name":"Разрыхлитель теста Haas 12г","calories":146,"protein":5,"fat":0.5,"carbs":32,"unit":"g","default":100,"category":"Магнит"},
    {"id":224,"name":"Разрыхлитель теста Dr. Bakers 10г","calories":79,"protein":0.2,"fat":0,"carbs":19.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":225,"name":"Хлопья панировочные Sen Soy Темпура японские 100г","calories":370,"protein":11,"fat":1,"carbs":80,"unit":"g","default":100,"category":"Магнит"},
    {"id":226,"name":"Сухари Моя цена панировочные 400г","calories":330,"protein":11,"fat":1.5,"carbs":68,"unit":"g","default":100,"category":"Магнит"},
    {"id":227,"name":"Гамбургер","calories":274,"protein":10,"fat":11.9,"carbs":31.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":228,"name":"Чикенбургер","calories":312,"protein":10.6,"fat":12.5,"carbs":39.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":229,"name":"Голубцы с мясом","calories":333,"protein":5.3,"fat":31.9,"carbs":6.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":230,"name":"Чикенбургер 140г","calories":312,"protein":10.6,"fat":12.5,"carbs":39.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":231,"name":"Отбивная По-креольски","calories":199,"protein":10.3,"fat":14.9,"carbs":6,"unit":"g","default":100,"category":"Магнит"},
    {"id":232,"name":"Бутерброд с ветчиной 180г","calories":299,"protein":9.1,"fat":10.2,"carbs":38.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":233,"name":"Гамбургер 127г","calories":274,"protein":10,"fat":11.9,"carbs":31.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":234,"name":"Чизбургер 210г","calories":388,"protein":13.7,"fat":19.7,"carbs":39,"unit":"g","default":100,"category":"Магнит"},
    {"id":235,"name":"Свинина по-французски","calories":346,"protein":10.7,"fat":30.2,"carbs":7.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":236,"name":"Куры гриль","calories":310,"protein":24.1,"fat":23.5,"carbs":1,"unit":"g","default":100,"category":"Магнит"},
    {"id":237,"name":"Тарталетки для икры Магнит 30шт","calories":479,"protein":7.3,"fat":25,"carbs":49.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":238,"name":"Тарталетки для салата Магнит 15шт","calories":479,"protein":7.3,"fat":25,"carbs":49.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":239,"name":"Пампушки с чесноком 300г","calories":55,"protein":8,"fat":9.5,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":240,"name":"Булка Французская 80г","calories":177,"protein":6.2,"fat":1.5,"carbs":35,"unit":"g","default":100,"category":"Магнит"},
    {"id":241,"name":"Крендели с солью классические Saltletts 150г","calories":410,"protein":10,"fat":6.5,"carbs":75,"unit":"g","default":100,"category":"Магнит"},
    {"id":242,"name":"Сдоба Забава 100г","calories":358,"protein":8.7,"fat":8.9,"carbs":60.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":243,"name":"Крекер Чудесный улов Моя цена 250г","calories":440,"protein":9,"fat":17,"carbs":62,"unit":"g","default":100,"category":"Магнит"},
    {"id":244,"name":"Сдоба Купеческая 100г","calories":355,"protein":9.7,"fat":9.5,"carbs":57.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":245,"name":"Сушки Традиционные Моя цена 250г","calories":370,"protein":10,"fat":3,"carbs":75,"unit":"g","default":100,"category":"Магнит"},
    {"id":246,"name":"Слойка с адыгейским сыром и зеленью 60г","calories":300,"protein":8,"fat":15,"carbs":32,"unit":"g","default":100,"category":"Магнит"},
    {"id":247,"name":"Газированный напиток Кола Evervess 1.5л","calories":18,"protein":0,"fat":0,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":248,"name":"Газированный напиток Кола Evervess 1л","calories":44,"protein":0,"fat":0,"carbs":11.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":249,"name":"Напиток Черноголовка Кола 2л","calories":19,"protein":0,"fat":0,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":250,"name":"Напиток Добрый Cola 1.5л","calories":19,"protein":0,"fat":0,"carbs":4.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":251,"name":"Напиток Ах! экстра Ситро 1.5л","calories":20,"protein":0,"fat":0,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":252,"name":"Напиток Добрый Cola без сахара 1.5л","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":253,"name":"Напиток Черноголовка Лимонад 2л","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":254,"name":"Напиток Тетя Груша 1.5л","calories":18,"protein":0,"fat":0,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":255,"name":"Газированный напиток Лимон-лайм Frustyle 2л","calories":18,"protein":0,"fat":0,"carbs":4.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":256,"name":"Напиток Мохито Клубника 450мл","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":257,"name":"Мясо криля натуральное Ультрамарин 105г","calories":63,"protein":13,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":258,"name":"Мидии в ракушках Vici Приорити варено-мороженые в","calories":126,"protein":9.4,"fat":8.2,"carbs":3.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":259,"name":"Креветки Бухта изобилия Королевские очищенные варе","calories":50,"protein":11,"fat":0.4,"carbs":0.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":260,"name":"Чай Когда я вырасту Спокойной ночи 85г","calories":380,"protein":1,"fat":1,"carbs":95,"unit":"g","default":100,"category":"Магнит"},
    {"id":261,"name":"Чай детский Когда я вырасту груша мелисса яблоко с","calories":370,"protein":1,"fat":1,"carbs":93,"unit":"g","default":100,"category":"Магнит"},
    {"id":262,"name":"Нектар из тыквы Динозаврик Ди 330мл","calories":44,"protein":0,"fat":0,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":263,"name":"Морс из клюквы и земляники с 6 месяцев Дары Кубани","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":264,"name":"Морс клюквенный с 5 месяцев Дары Кубани 200мл","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":265,"name":"Творог Растишка клубника 3.5% 110г","calories":104,"protein":6.5,"fat":3.5,"carbs":11.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":266,"name":"Каша детская жидкая молочная гречневая Агуша 200мл","calories":70,"protein":3.2,"fat":2.5,"carbs":8.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":267,"name":"Биотворог Тема груша 4% 95г","calories":108,"protein":7.5,"fat":4,"carbs":10.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":268,"name":"Блинчики с творогом","calories":210,"protein":9,"fat":10.5,"carbs":19.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":269,"name":"Блинчики с творогом 160г","calories":250,"protein":11,"fat":15,"carbs":28,"unit":"g","default":100,"category":"Магнит"},
    {"id":270,"name":"Блинчики с ветчиной 160г","calories":280,"protein":15,"fat":16,"carbs":20,"unit":"g","default":100,"category":"Магнит"},
    {"id":271,"name":"Блинчики Цезарь с курицей","calories":227,"protein":8.8,"fat":15.2,"carbs":13.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":272,"name":"Сырники жареные 220г","calories":200,"protein":14,"fat":4.5,"carbs":27,"unit":"g","default":100,"category":"Магнит"},
    {"id":273,"name":"Митболы Ряба Крымская с сыром и ветчиной 450г","calories":330,"protein":16,"fat":19,"carbs":24,"unit":"g","default":100,"category":"Магнит"},
    {"id":274,"name":"Наггетсы из мяса цыпленка Мираторг Сочные 250г","calories":191,"protein":10.5,"fat":7.6,"carbs":20.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":275,"name":"Куриные наггетсы хрустящие Мираторг 250г","calories":183,"protein":13,"fat":7.4,"carbs":16,"unit":"g","default":100,"category":"Магнит"},
    {"id":276,"name":"Наггетсы Стародворье Курушки с ветчиной и сыр 230г","calories":290,"protein":6,"fat":18,"carbs":25,"unit":"g","default":100,"category":"Магнит"},
    {"id":277,"name":"Наггетсы Стародворье Курушки 250г","calories":290,"protein":8,"fat":11,"carbs":24,"unit":"g","default":100,"category":"Магнит"},
    {"id":278,"name":"Набор для бульона Озёрка из утенка 400г","calories":240,"protein":15,"fat":20,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":279,"name":"Печень цыпленка-бройлера Благояр замороженная 900г","calories":162,"protein":18,"fat":10,"carbs":0.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":280,"name":"Наггетсы Вязанка с индейкой 250г","calories":230,"protein":9,"fat":10,"carbs":25,"unit":"g","default":100,"category":"Магнит"},
    {"id":281,"name":"Наггетсы куриные Мираторг Классические 250г","calories":183,"protein":13,"fat":7.4,"carbs":16,"unit":"g","default":100,"category":"Магнит"},
    {"id":282,"name":"Котлеты Агрокомплес Домашние 500г","calories":240,"protein":8,"fat":20,"carbs":6.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":283,"name":"Вишня без косточки быстрозамороженная","calories":50,"protein":1,"fat":0.4,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":284,"name":"Клубника быстрозамороженная","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":285,"name":"Клюква быстрозамороженная","calories":20,"protein":0.5,"fat":0.2,"carbs":3.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":286,"name":"Клубника Green Ribbon быстрозамороженная 300г","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":287,"name":"Смесь овощная 4 Сезона 8 овощей быстрозамороженная","calories":45,"protein":2.5,"fat":0.2,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":288,"name":"Мексиканская смесь Мираторг быстрозамороженная 400","calories":50,"protein":2.5,"fat":0.5,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":289,"name":"Черная смородина быстрозамороженная","calories":67,"protein":1.2,"fat":0.4,"carbs":14.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":290,"name":"Брокколи Green Ribbon соцветиями быстрозамороженна","calories":40,"protein":3,"fat":0.4,"carbs":5.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":291,"name":"Гавайская смесь Agama быстрозамороженная 400г","calories":100,"protein":4,"fat":1,"carbs":18,"unit":"g","default":100,"category":"Магнит"},
    {"id":292,"name":"Чебупели Горячая штучка сочные 240г","calories":240,"protein":7,"fat":11,"carbs":28,"unit":"g","default":100,"category":"Магнит"},
    {"id":293,"name":"Чебупицца Горячая штучка Курочка по-итальянски 250","calories":270,"protein":8,"fat":13,"carbs":29,"unit":"g","default":100,"category":"Магнит"},
    {"id":294,"name":"Оладушки С пылу с жару пышные домашние 280г","calories":220,"protein":6,"fat":4,"carbs":40,"unit":"g","default":100,"category":"Магнит"},
    {"id":295,"name":"Чебурек с мясом Жаренки 85г","calories":258,"protein":11,"fat":10.2,"carbs":30.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":296,"name":"Основа для пиццы Моя цена 350г","calories":320,"protein":8,"fat":6.5,"carbs":56.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":297,"name":"Самса Жаренки с мясом 300г","calories":300,"protein":10,"fat":20,"carbs":30,"unit":"g","default":100,"category":"Магнит"},
    {"id":298,"name":"Чебурек Жаренки с бараниной 125г","calories":240,"protein":8,"fat":12,"carbs":26,"unit":"g","default":100,"category":"Магнит"},
    {"id":299,"name":"Готовые Чебуманы Горячая штучка с говядиной 280г","calories":270,"protein":7,"fat":14,"carbs":28,"unit":"g","default":100,"category":"Магнит"},
    {"id":300,"name":"Филе минтая Borealis свежемороженое 300г","calories":90,"protein":20,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":301,"name":"Клемы Шифудо Вонголе в раковине 31/40 варено-морож","calories":132,"protein":14.8,"fat":1,"carbs":3.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":302,"name":"Треска Borealis филе без кожи без кости 300г","calories":77,"protein":17,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":303,"name":"Креветки Магнит Королевские 60/80","calories":73,"protein":15.6,"fat":1,"carbs":0.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":304,"name":"Мидии Шифудо синие на полустворках раковин 1кг в а","calories":102,"protein":14.7,"fat":2.5,"carbs":5.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":305,"name":"Ассорти Vici из морепродуктов свежемороженое 450г","calories":69,"protein":7.9,"fat":0.9,"carbs":7.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":306,"name":"Кальмар Borealis командорский тушка свежемороженый","calories":100,"protein":18,"fat":2,"carbs":2,"unit":"g","default":100,"category":"Магнит"},
    {"id":307,"name":"Стейк форели свежемороженый Premiere of Taste 500г","calories":88,"protein":20.5,"fat":2,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":308,"name":"Креветки Вкусарт с хвостом очищенные свежеморожены","calories":103,"protein":21,"fat":1.1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":309,"name":"Икра мойвы Санта Бремор с копченым лососем 180г","calories":440,"protein":6.8,"fat":43.3,"carbs":5.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":310,"name":"Салат Русское море из морских водорослей 150г","calories":190,"protein":2.4,"fat":15.6,"carbs":9.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":311,"name":"Масло лососевое Санта Бремор бутербродное 100г","calories":490,"protein":2,"fat":54,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":312,"name":"Салат Русское море из морских водорослей Чука орех","calories":90,"protein":3.3,"fat":3.7,"carbs":11.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":313,"name":"Паста из мяса мидии Санта Бремор в соусе Сальса 15","calories":200,"protein":4.5,"fat":16,"carbs":9,"unit":"g","default":100,"category":"Магнит"},
    {"id":314,"name":"Паста Санта Бремор Фиш-мусс с лососем 140г","calories":420,"protein":5.5,"fat":44,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":315,"name":"Икра Русское Море лососевая стольная имитация Люкс","calories":22,"protein":0.2,"fat":1.4,"carbs":2.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":316,"name":"Кисломолочный напиток Exponenta High-Pro обезжирен","calories":60,"protein":12,"fat":0,"carbs":2.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":317,"name":"Кисломолочный напиток Exponenta Дыня кантал обезжи","calories":35,"protein":6,"fat":0,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":318,"name":"Пирожное бисквитное Молочный ломтик с молочной нач","calories":421,"protein":7.9,"fat":27.9,"carbs":34,"unit":"g","default":100,"category":"Магнит"},
    {"id":319,"name":"Йогурт Греческий Epica 2.5% 130г","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":320,"name":"Питьевой йогурт со вкусом Ягодное мороженое Чудо 1","calories":86,"protein":2.8,"fat":1.9,"carbs":14.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":321,"name":"Напиток кисломолочный со вкусом клубники на йогурт","calories":67,"protein":2.6,"fat":1,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":322,"name":"Йогурт густой со вкусом персика и маракуйи Фругурт","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":323,"name":"Творожный десерт взбитый со вкусом ягодное морожен","calories":132,"protein":6.3,"fat":5.8,"carbs":13.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":324,"name":"Творожок двухслойный Чудо Ежевика-малина 4.2% 100г","calories":129,"protein":4,"fat":4.2,"carbs":18.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":325,"name":"Йогурт Простоквашино термостатный черника 3.4% 160","calories":85,"protein":3,"fat":3.4,"carbs":10.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":326,"name":"Цикорий растворимый Большая чашка 85г","calories":270,"protein":4,"fat":0.5,"carbs":57,"unit":"g","default":100,"category":"Магнит"},
    {"id":327,"name":"Цикорий растворимый Здравник со сливочным вкусом 8","calories":290,"protein":6,"fat":4,"carbs":55,"unit":"g","default":100,"category":"Магнит"},
    {"id":328,"name":"Какао-порошок Россия щедрая душа Российский 100г","calories":359,"protein":28,"fat":13,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":329,"name":"Цикорий Цикорич гранулированный 100г","calories":370,"protein":2,"fat":0,"carbs":80,"unit":"g","default":100,"category":"Магнит"},
    {"id":330,"name":"Горячий шоколад MacСhocolate 20г","calories":390,"protein":2,"fat":8,"carbs":76,"unit":"g","default":100,"category":"Магнит"},
    {"id":331,"name":"Какао Магнит растворимый натуральный 100г","calories":320,"protein":24.5,"fat":12,"carbs":28.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":332,"name":"Цикорий Экологика натуральный растворимый 85г","calories":320,"protein":4,"fat":0.5,"carbs":57,"unit":"g","default":100,"category":"Магнит"},
    {"id":333,"name":"Цикорий Uliss растворимый сублимированный 85г","calories":340,"protein":4.1,"fat":0,"carbs":68,"unit":"g","default":100,"category":"Магнит"},
    {"id":334,"name":"Горячий шоколад Леовит Худеем за неделю с коллаген","calories":260,"protein":9,"fat":7,"carbs":41,"unit":"g","default":100,"category":"Магнит"},
    {"id":335,"name":"Какао-порошок Золотой ярлык 100г","calories":330,"protein":24,"fat":12,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":336,"name":"Напиток кисломолочный безлактозный обезжиренный Гр","calories":69,"protein":12.5,"fat":0.6,"carbs":3.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":337,"name":"Кефир Кавказский долгожитель 1% 290г","calories":37,"protein":3,"fat":1,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":338,"name":"Творог Вкуснотеево 5% 200г","calories":121,"protein":16,"fat":5,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":339,"name":"Творог мягкий с малиной Вкуснотеево 5% 120г","calories":105,"protein":6.8,"fat":4.2,"carbs":9.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":340,"name":"Бифилакт Биота термостатный 1% 500мл","calories":40,"protein":2.8,"fat":1,"carbs":4.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":341,"name":"Катык Кавказский долгожитель 4% 400г","calories":66,"protein":2.8,"fat":4,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":342,"name":"Творог Коровка из Кореновки 9% 650г","calories":157,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":343,"name":"Айран Магнит мжд 0.5% 0.5л","calories":17,"protein":1.4,"fat":0.5,"carbs":1.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":344,"name":"Шпикачки Дым Дымыч Деревенские 500г","calories":245,"protein":10,"fat":13,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":345,"name":"Сервелат Папа может Пражский варено-копченый 350г","calories":257,"protein":13,"fat":21,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":346,"name":"Колбаса Папа может Сервелат Финский варено-копчены","calories":495,"protein":12,"fat":48,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":347,"name":"Шейка/Балык Мясная история сырокопченая нарезка 85","calories":200,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":348,"name":"Колбаса Мираторг Балыковая 250г","calories":243,"protein":14,"fat":20,"carbs":1.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":349,"name":"Колбаса Папин Выбор сырокопченая Папа Может 220г","calories":525,"protein":19,"fat":49,"carbs":2,"unit":"g","default":100,"category":"Магнит"},
    {"id":350,"name":"Сосиски Папа может Супер Сытные 600г","calories":142,"protein":8,"fat":10,"carbs":5,"unit":"g","default":100,"category":"Магнит"},
    {"id":351,"name":"Ветчина Индилайт Филе грудки индейки вареная нарез","calories":100,"protein":16,"fat":2,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":352,"name":"Колбаса Папа может Классическая вареная 300г","calories":178,"protein":9,"fat":14,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":353,"name":"Ветчина Папа может Рубленая вареная 300г","calories":169,"protein":10,"fat":13,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":354,"name":"Паштет ХАМЕ с гусиной печенью 105г","calories":240,"protein":6,"fat":22,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":355,"name":"Паштет Хаме с индейкой 105г","calories":230,"protein":7,"fat":22,"carbs":5,"unit":"g","default":100,"category":"Магнит"},
    {"id":356,"name":"Паштет Рублевский Французский с уткой 175г","calories":280,"protein":9,"fat":26,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":357,"name":"Ветчина Великолукский МК Консервированная 325г","calories":290,"protein":15,"fat":25,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":358,"name":"Рассольник Буздякский 500г","calories":108,"protein":2.7,"fat":2.5,"carbs":18.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":359,"name":"Суп гороховый Буздякский 500г","calories":165,"protein":8.6,"fat":4,"carbs":23.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":360,"name":"Мясо гуся Балтийский Деликатес в собственном соку","calories":363,"protein":12,"fat":35,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":361,"name":"Паштет Argeta Куриный 95г","calories":309,"protein":10,"fat":29,"carbs":2.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":362,"name":"Оливки Iberica без косточки 300г","calories":172,"protein":1.2,"fat":18,"carbs":0.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":363,"name":"Томатная паста Baisad Оригинальная 140г","calories":90,"protein":3,"fat":0,"carbs":20,"unit":"g","default":100,"category":"Магнит"},
    {"id":364,"name":"Суп Меленъ гороховый 460г","calories":90,"protein":3,"fat":4,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":365,"name":"Закуска овощная Пиканта Закуска для зятя 460г","calories":50,"protein":1,"fat":0,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":366,"name":"Брускетта Бондюэль Сладкий перец 220г","calories":115,"protein":2.5,"fat":5.2,"carbs":14.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":367,"name":"Рассольник Меленъ 460г","calories":100,"protein":2,"fat":4.5,"carbs":14,"unit":"g","default":100,"category":"Магнит"},
    {"id":368,"name":"Тунец филе в собственном соку Северная Гавань 185г","calories":100,"protein":23,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":369,"name":"Килька Вкусные консервы обжаренная в томатном соус","calories":182,"protein":14,"fat":12,"carbs":4.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":370,"name":"Паштет из лосося Premiere of Taste 90г","calories":255,"protein":14.5,"fat":19.5,"carbs":5.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":371,"name":"Шпроты Вкусные консервы в масле 160г","calories":356,"protein":17,"fat":32,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":372,"name":"Килька За Родину балтийская неразделанная в томатн","calories":180,"protein":13,"fat":12,"carbs":4,"unit":"g","default":100,"category":"Магнит"},
    {"id":373,"name":"Сайра Тихоокеанская натуральная Северная Гавань 24","calories":202,"protein":19.2,"fat":13.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":374,"name":"Шпроты Капитан Вкусов в масле 250г","calories":420,"protein":14,"fat":40,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":375,"name":"Шпроты Вкусные консервы Крупные в масле 240г","calories":356,"protein":17,"fat":32,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":376,"name":"Шпроты Вкусные консервы Экстра в масле 270г","calories":376,"protein":15,"fat":35,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":377,"name":"Протертая облепиха с сахаром Сибирская ягода 280г","calories":240,"protein":0,"fat":0,"carbs":60,"unit":"g","default":100,"category":"Магнит"},
    {"id":378,"name":"Кусочки ананаса консервированные в собственном сок","calories":56,"protein":0.3,"fat":0.1,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":379,"name":"Сироп со вкусом малины Premiere of Taste 250мл","calories":220,"protein":0,"fat":0,"carbs":55,"unit":"g","default":100,"category":"Магнит"},
    {"id":380,"name":"Ананасы Lorado шайбы 580мл","calories":65,"protein":0.3,"fat":0.3,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":381,"name":"Кольца ананаса консервированные в собственном соку","calories":65,"protein":0.4,"fat":0.1,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":382,"name":"Персики Premiere of Taste 680мл","calories":82,"protein":0.4,"fat":0.1,"carbs":19.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":383,"name":"Ананасы кусочки Lorado 580мл","calories":60,"protein":0.3,"fat":0.3,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":384,"name":"Шоколад экстрамолочный Особый 200г","calories":550,"protein":7.5,"fat":34,"carbs":55,"unit":"g","default":100,"category":"Магнит"},
    {"id":385,"name":"Молочный шоколад Alpen Gold 80г","calories":520,"protein":5.2,"fat":27,"carbs":61,"unit":"g","default":100,"category":"Магнит"},
    {"id":386,"name":"Молочный шоколад с цельным фундуком Milka 80г","calories":551,"protein":7.6,"fat":36,"carbs":50,"unit":"g","default":100,"category":"Магнит"},
    {"id":387,"name":"Конфеты с трюфельной начинкой Чио-Рио 180г","calories":510,"protein":6,"fat":30,"carbs":54,"unit":"g","default":100,"category":"Магнит"},
    {"id":388,"name":"Шоколад Особый экстра молочный с трюфельной начинк","calories":556,"protein":6.6,"fat":35.4,"carbs":52.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":389,"name":"Шоколад Дубайский с фисташковой начинкой и катаифи","calories":500,"protein":8.5,"fat":26,"carbs":57,"unit":"g","default":100,"category":"Магнит"},
    {"id":390,"name":"Десерт Ломтишка 140г","calories":436,"protein":5,"fat":24,"carbs":50,"unit":"g","default":100,"category":"Магнит"},
    {"id":391,"name":"Шоколадный батончик с карамелью Twix Xtra 82г","calories":497,"protein":3.9,"fat":24,"carbs":65.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":392,"name":"Десерт Тортимилка Плюс Акконд 200г","calories":405,"protein":3.5,"fat":14,"carbs":63,"unit":"g","default":100,"category":"Магнит"},
    {"id":393,"name":"Кофе растворимый Ambassador Platinum 190г","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":394,"name":"Кофе растворимый Ambassador Platinum 95г","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":395,"name":"Кофе растворимый Jardin Colombia Medellin 95г","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":396,"name":"Напиток кофейный MacCoffee Original 3в1 10пак*20г","calories":420,"protein":3,"fat":8,"carbs":86,"unit":"g","default":100,"category":"Магнит"},
    {"id":397,"name":"Кофе растворимый Fresco Arabica blend 100г","calories":340,"protein":18.6,"fat":0.1,"carbs":65.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":398,"name":"Кофе растворимый Московская кофейня на паяхъ Суаре","calories":14,"protein":0.3,"fat":0,"carbs":0.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":399,"name":"Чебурек с мясом","calories":440,"protein":10,"fat":35,"carbs":21.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":400,"name":"Сдоба Смаковница 100г","calories":290,"protein":7.4,"fat":8,"carbs":47.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":401,"name":"Пампушки с чесноком 80г","calories":299,"protein":7.7,"fat":6.6,"carbs":52.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":402,"name":"Слойка с вишней 80г","calories":424,"protein":7.1,"fat":24.8,"carbs":43.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":403,"name":"Мини-маффины Kovis Клубника 470г","calories":340,"protein":4,"fat":12,"carbs":54,"unit":"g","default":100,"category":"Магнит"},
    {"id":404,"name":"Булочка со вкусом банана Lejinji 65г","calories":354,"protein":7.7,"fat":14.3,"carbs":48.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":405,"name":"Крабовое мясо Русское море охлажденное 200г","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":406,"name":"Крабовое мясо Vici замороженное 220г","calories":69,"protein":7,"fat":10,"carbs":0.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":407,"name":"Крабовые палочки Русское море охлажденные 200г","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":408,"name":"Мясо сурими Vici Любо есть 200г","calories":100,"protein":5.2,"fat":5,"carbs":18.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":409,"name":"Крабовые палочки Vici замороженные 200г","calories":70,"protein":6.3,"fat":0.1,"carbs":19.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":410,"name":"Крабовые палочки Vici с мясом натурального краба 1","calories":83,"protein":8.5,"fat":0.5,"carbs":11.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":411,"name":"Крабовые палочки Vici охлажденные 500г","calories":121,"protein":7.2,"fat":0.8,"carbs":21.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":412,"name":"Крабовые палочки Русское Море 400г","calories":97,"protein":6,"fat":1,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":413,"name":"Крабовые палочки с ароматом трюфеля Milegrin 200г","calories":95,"protein":9.9,"fat":0.5,"carbs":12.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":414,"name":"Крупа Булгур Premiere of Taste 450г","calories":360,"protein":12,"fat":1.5,"carbs":75,"unit":"g","default":100,"category":"Магнит"},
    {"id":415,"name":"Мясо соевое Ego Бефстроганов 80г","calories":310,"protein":48.9,"fat":2.3,"carbs":8.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":416,"name":"Чечевица Националь Арабская 450г","calories":310,"protein":24,"fat":1,"carbs":51,"unit":"g","default":100,"category":"Магнит"},
    {"id":417,"name":"Кисель Русский продукт клубничный 190г","calories":360,"protein":0,"fat":0,"carbs":91,"unit":"g","default":100,"category":"Магнит"},
    {"id":418,"name":"Рис Агро-Альянс Экстра Восточный шлифованный 700г","calories":350,"protein":7,"fat":1,"carbs":79,"unit":"g","default":100,"category":"Магнит"},
    {"id":419,"name":"Рис Увелка Круглозерный шлифованный 5пак*80г","calories":340,"protein":8,"fat":1,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":420,"name":"Макароны Шебекинские №2 Спагетти тонкие 450г","calories":350,"protein":13,"fat":1.5,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":421,"name":"Макароны Шебекинские №202 Рожок полубублик 450г","calories":350,"protein":13,"fat":1.5,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":422,"name":"Вермишель Sen Soy Premium Фунчоза 200г","calories":340,"protein":1.5,"fat":1,"carbs":83,"unit":"g","default":100,"category":"Магнит"},
    {"id":423,"name":"Макароны Фузилли Gaetano Dapuzzo 500г","calories":352,"protein":13,"fat":1.6,"carbs":70,"unit":"g","default":100,"category":"Магнит"},
    {"id":424,"name":"Макароны Паста птитим Увелка 400г","calories":330,"protein":12,"fat":1,"carbs":67,"unit":"g","default":100,"category":"Магнит"},
    {"id":425,"name":"Макаронные изделия Пенне Ригате Gaetano Dapuzzo 50","calories":352,"protein":13,"fat":1.6,"carbs":70,"unit":"g","default":100,"category":"Магнит"},
    {"id":426,"name":"Макароны Makfa Петушиные гребешки 450г","calories":344,"protein":12.5,"fat":1.3,"carbs":70.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":427,"name":"Макароны Makfa Виток 450г","calories":344,"protein":12.5,"fat":1.3,"carbs":70.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":428,"name":"Макароны Шебекинские №395 Улитка Сабо 450г","calories":350,"protein":13,"fat":1.5,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":429,"name":"Макароны Шебекинские Перышки №223 450г","calories":350,"protein":13,"fat":1.5,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":430,"name":"М Здоровье Аскорбиновая кислота таблетки жевательн","calories":383,"protein":0,"fat":0,"carbs":96.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":431,"name":"Драже без сахара со вкусом смородины и базилика Sc","calories":220,"protein":0,"fat":0,"carbs":93,"unit":"g","default":100,"category":"Магнит"},
    {"id":432,"name":"Суфле с начинкой Кислое яблоко Пухлый Кролик 20г","calories":330,"protein":4,"fat":0,"carbs":77,"unit":"g","default":100,"category":"Магнит"},
    {"id":433,"name":"Маршмэллоу Duo клубника ваниль Zerfer 90г","calories":340,"protein":0,"fat":2.5,"carbs":82,"unit":"g","default":100,"category":"Магнит"},
    {"id":434,"name":"Леденцы Кола Halls 25г","calories":11,"protein":0,"fat":0.1,"carbs":2.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":435,"name":"Леденцы Coffee Candy Kopiko 32г","calories":442,"protein":1.2,"fat":9.3,"carbs":88.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":436,"name":"Леденцы Cappuccino Candy Kopiko 32г","calories":454,"protein":0.7,"fat":12.1,"carbs":85.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":437,"name":"Маршмэллоу Клубника-ваниль-банан Zerfer Trio 90г","calories":350,"protein":0,"fat":0,"carbs":82.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":438,"name":"Жевательная резинка Вишня Mentos 15.5г","calories":200,"protein":0.4,"fat":2,"carbs":74,"unit":"g","default":100,"category":"Магнит"},
    {"id":439,"name":"Молоко сгущенное Алексеевское 8.5% 270г","calories":330,"protein":7,"fat":8.5,"carbs":56,"unit":"g","default":100,"category":"Магнит"},
    {"id":440,"name":"Молочный кофейный напиток Natura Selection Frappe","calories":65,"protein":2.3,"fat":2.6,"carbs":8.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":441,"name":"Маргарин Пышка для выпечки 72% 200г","calories":648,"protein":0,"fat":72,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":442,"name":"Молоко пастеризованное Кубанская буренка 2.5% 1.4л","calories":53,"protein":3,"fat":2.5,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":443,"name":"Молоко Молочная легенда пастеризованное 2.5% 900мл","calories":53,"protein":3,"fat":2.5,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":444,"name":"Молоко Простоквашино пастеризованное 2.5% 930мл","calories":54,"protein":3,"fat":2.5,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":445,"name":"Молоко Кубанский молочник пастеризованное 3.4-6% 1","calories":61,"protein":2.8,"fat":6,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":446,"name":"Маргарин Добавкин Воронеж сливочный 60% 180г","calories":540,"protein":0.1,"fat":60,"carbs":0.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":447,"name":"Молоко пастеризованное Домик в Деревне 3.2% 930мл","calories":60,"protein":3,"fat":3.2,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":448,"name":"Питьевой йогурт со вкусом малиновый пломбир с 12 м","calories":78,"protein":2.8,"fat":2.7,"carbs":10.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":449,"name":"Творожок детский со вкусом Малиновый пломбир с 12","calories":104,"protein":7.3,"fat":3.9,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":450,"name":"Каша детская жидкая молочная злаковая Агуша Груша-","calories":75,"protein":3.1,"fat":2.7,"carbs":9.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":451,"name":"Творог детский Яблоко-банан Агуша с 6 месяцев 3.9%","calories":103,"protein":7.4,"fat":3.9,"carbs":9.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":452,"name":"Творог детский Клубника банан с 6 месяцев Агуша 3.","calories":106,"protein":7.2,"fat":3.8,"carbs":10.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":453,"name":"Каша детская жидкая молочная рисовая Агуша Яблоко-","calories":76,"protein":3,"fat":2.7,"carbs":9.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":454,"name":"Трубочки для молока Лео и Тиг Ягодный микс 30г","calories":400,"protein":0.2,"fat":0.8,"carbs":99,"unit":"g","default":100,"category":"Магнит"},
    {"id":455,"name":"Биолакт детский клубника-банан Тема 3% 206г","calories":75,"protein":2.8,"fat":3,"carbs":9.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":456,"name":"Биотворог Тема Клубника банан 4% 95г","calories":106,"protein":7.5,"fat":4,"carbs":10.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":457,"name":"Биолакт Тема без сахара 3.4% 206г","calories":61,"protein":3,"fat":3.4,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":458,"name":"Мороженое пломбир Золотой Стандарт 12% 445г","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":459,"name":"Мороженое Коровка из Кореновки Пломбир с шоколадно","calories":243,"protein":4,"fat":17,"carbs":20,"unit":"g","default":100,"category":"Магнит"},
    {"id":460,"name":"Мороженое Коровка из Кореновки Пломбир Крем-Брюле","calories":216,"protein":3,"fat":14,"carbs":19,"unit":"g","default":100,"category":"Магнит"},
    {"id":461,"name":"Мороженое шоколадное Seoju Mallow 70г","calories":125,"protein":1.4,"fat":3.6,"carbs":23,"unit":"g","default":100,"category":"Магнит"},
    {"id":462,"name":"Жимолость в белом шоколаде быстрозамороженная Fram","calories":336,"protein":3.6,"fat":20.7,"carbs":33.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":463,"name":"Мороженое пломбир ванильный Коровка из Кореновки 1","calories":240,"protein":3.5,"fat":15,"carbs":22,"unit":"g","default":100,"category":"Магнит"},
    {"id":464,"name":"Мороженое эскимо Dubai фисташка с катаифи Магнат 8","calories":339,"protein":4.5,"fat":20,"carbs":34.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":465,"name":"Мороженое пломбир ванильный с черникой Золотой Ста","calories":232,"protein":3.1,"fat":10.8,"carbs":29.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":466,"name":"Мороженое со вкусом орехового пралине в рожке Корк","calories":292,"protein":5,"fat":13.4,"carbs":37.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":467,"name":"Мороженое эскимо с рисовыми шариками в малиновой г","calories":310,"protein":4,"fat":21.2,"carbs":26.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":468,"name":"Пюре яблоко-банан-клубника-киви с 8 месяцев Агуша","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":469,"name":"Детское фруктовое пюре Агуша Яблоко с 4 месяцев 90","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":470,"name":"Фруктовые кусочки Когда Я Вырасту яблоко клубника","calories":337,"protein":1.8,"fat":1.3,"carbs":79.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":471,"name":"Палочки кукурузные Кузя Лакомкин сладкие 140г","calories":510,"protein":4,"fat":23,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":472,"name":"Печенье Бонди Бегемотик детское обогащенное кальци","calories":410,"protein":9,"fat":11,"carbs":74,"unit":"g","default":100,"category":"Магнит"},
    {"id":473,"name":"Пюре Ладушки фруктовое из яблок 85г","calories":60,"protein":0,"fat":0,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":474,"name":"Снэки Gerber Звездочки рисово-пшеничные Банан и ма","calories":423,"protein":9.7,"fat":8.6,"carbs":76,"unit":"g","default":100,"category":"Магнит"},
    {"id":475,"name":"Печенье с начинкой яблоко-персик Фрутоняня 50г","calories":397,"protein":5.5,"fat":9.7,"carbs":72,"unit":"g","default":100,"category":"Магнит"},
    {"id":476,"name":"Печенье Когда я вырасту Детское обогащенное кальци","calories":410,"protein":7.5,"fat":8.5,"carbs":75,"unit":"g","default":100,"category":"Магнит"},
    {"id":477,"name":"Детское фруктово-ягодное пюре Агуша Яблоко-ежевика","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"g","default":100,"category":"Магнит"},
    {"id":478,"name":"Хинкали Моя цена Грузинские","calories":630,"protein":7,"fat":50,"carbs":38,"unit":"g","default":100,"category":"Магнит"},
    {"id":479,"name":"Хинкали Sибирская Коллекция ручной работы 500г","calories":160,"protein":10,"fat":4,"carbs":22,"unit":"g","default":100,"category":"Магнит"},
    {"id":480,"name":"Пельмени Тавр Тавровские фирменные свино-говяжьи 1","calories":322,"protein":10,"fat":18,"carbs":30,"unit":"g","default":100,"category":"Магнит"},
    {"id":481,"name":"Пельмени Горячая штучка Бигбули с мясом 700г","calories":240,"protein":8,"fat":10,"carbs":29,"unit":"g","default":100,"category":"Магнит"},
    {"id":482,"name":"Дамплинги Бибиго Королевские свинина и овощи 385г","calories":238,"protein":7.7,"fat":14.7,"carbs":20.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":483,"name":"Дамплинги Бибиго Королевские курица овощи 385г","calories":135,"protein":9.7,"fat":4.7,"carbs":17.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":484,"name":"Пельмени Sибирская Коллекция Сочные с фаршем на мо","calories":217,"protein":9,"fat":11,"carbs":20.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":485,"name":"Пельмени Caesar Elite отборная говядина 700г","calories":220,"protein":8,"fat":9,"carbs":28,"unit":"g","default":100,"category":"Магнит"},
    {"id":486,"name":"Пельмени Горячая штучка Бульмени говядина-свинина","calories":240,"protein":8,"fat":10,"carbs":29,"unit":"g","default":100,"category":"Магнит"},
    {"id":487,"name":"Пельмени Выселковские Традиционные 450г","calories":26,"protein":14,"fat":26,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":488,"name":"Чак-чак Восточный гость 250г","calories":460,"protein":4.9,"fat":31,"carbs":40,"unit":"g","default":100,"category":"Магнит"},
    {"id":489,"name":"Печенье с кусочками молочного шоколада Milka 126г","calories":491,"protein":6.3,"fat":24,"carbs":62,"unit":"g","default":100,"category":"Магнит"},
    {"id":490,"name":"Козинаки Классические неглазированные Богучарские","calories":479,"protein":14,"fat":35,"carbs":27,"unit":"g","default":100,"category":"Магнит"},
    {"id":491,"name":"Рахат-лукум Восточный гость 300г","calories":350,"protein":0.2,"fat":0,"carbs":86,"unit":"g","default":100,"category":"Магнит"},
    {"id":492,"name":"Рахат-лукум Ассорти Азовская КФ 200г","calories":350,"protein":1,"fat":1,"carbs":87,"unit":"g","default":100,"category":"Магнит"},
    {"id":493,"name":"Торнадо с творожной начинкой","calories":486,"protein":7,"fat":22.7,"carbs":64.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":494,"name":"Печенье Choco Boy Orion 45г в ассортименте","calories":500,"protein":7,"fat":27,"carbs":57,"unit":"g","default":100,"category":"Магнит"},
    {"id":495,"name":"Печенье Goute Coffee Orion 72г","calories":470,"protein":5,"fat":23,"carbs":60,"unit":"g","default":100,"category":"Магнит"},
    {"id":496,"name":"Светлое пиво фильтрованное безалкогольное Бавария","calories":46,"protein":0,"fat":0,"carbs":4.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":497,"name":"Светлое пиво фильтрованное безалкогольное Тихорецк","calories":25,"protein":0,"fat":0,"carbs":2.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":498,"name":"Пивной напиток нефильтрованный безалкогольный Hoeg","calories":31,"protein":0,"fat":0,"carbs":4.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":499,"name":"Филе Индилайт бедра индейки 410г","calories":150,"protein":16,"fat":9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":500,"name":"Азу из индейки М Свежесть кусковая 500г","calories":110,"protein":22,"fat":2.5,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":501,"name":"Гуляш из филе бедра индейки Индилайт 300г","calories":150,"protein":19,"fat":8,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":502,"name":"Филе голени индейки Индилайт 400г","calories":130,"protein":19,"fat":6,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":503,"name":"Бедро цыпленка-бройлера Петелинка охлажденное","calories":210,"protein":17,"fat":16,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":504,"name":"Печень цыпленка-бройлера Благояр 490г","calories":160,"protein":18,"fat":10,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":505,"name":"Масло подсолнечное Слобода рафинированное 1л","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":506,"name":"Подсолнечное масло рафинированное Россиянка/Я любл","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":507,"name":"Масло подсолнечное Семейные секреты с добавлением","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":508,"name":"Масло подсолнечное Слобода 2.7л","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":509,"name":"Масло кокосовое Delicato 400г","calories":900,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":510,"name":"Масло оливковое Extra Virgin Premiere of Taste 250","calories":828,"protein":0,"fat":92,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":511,"name":"Масло подсолнечное Золотая семечка рафинированное","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":512,"name":"Масло подсолнечное Mr. Ricco 1л","calories":899,"protein":0,"fat":99.9,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":513,"name":"Масло льняное Здоровое меню нерафинированное 250мл","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":514,"name":"Карась","calories":87,"protein":17.7,"fat":1.8,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":515,"name":"Селедочка Русское море традиционного посола 230г","calories":420,"protein":10,"fat":38,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":516,"name":"Филе сельди Русское море Селедочка к картошке Трад","calories":440,"protein":9,"fat":45,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":517,"name":"Паутинка из горбуши Solonina","calories":181,"protein":35.1,"fat":45,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":518,"name":"Минтай Магнит/Северная гавань филе 600г","calories":89,"protein":20,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":519,"name":"Салат Оливье М Кухня 200г","calories":221,"protein":4.1,"fat":19.8,"carbs":6.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":520,"name":"Салат Цезарь 150г","calories":203,"protein":8.2,"fat":16,"carbs":6,"unit":"g","default":100,"category":"Магнит"},
    {"id":521,"name":"Салат Русская красавица 200г","calories":219,"protein":5.4,"fat":18.7,"carbs":7.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":522,"name":"Салат Мимоза","calories":188,"protein":7.1,"fat":15.4,"carbs":5.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":523,"name":"Салат из крабовых палочек","calories":4,"protein":2.3,"fat":12,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":524,"name":"Кунжут Восточный гость 20г","calories":570,"protein":19,"fat":49,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":525,"name":"Кориандр Восточный гость молотый 20г","calories":298,"protein":21.9,"fat":4.8,"carbs":52.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":526,"name":"Лист лавровый Восточный гость сухой 10г","calories":310,"protein":0,"fat":0,"carbs":19,"unit":"g","default":100,"category":"Магнит"},
    {"id":527,"name":"Укроп Восточный гость сушеный 10г","calories":75,"protein":0,"fat":0,"carbs":19,"unit":"g","default":100,"category":"Магнит"},
    {"id":528,"name":"Базилик Восточный гость сушеный 10г","calories":215,"protein":14,"fat":4,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":529,"name":"Чеснок Восточный гость сушеный 15г","calories":360,"protein":6.5,"fat":6,"carbs":69,"unit":"g","default":100,"category":"Магнит"},
    {"id":530,"name":"Перец Восточный гость душистый целый 20г","calories":263,"protein":6.1,"fat":8.7,"carbs":50.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":531,"name":"Морс облепиховый М Кухня 500мл","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":532,"name":"Смузи груша-шпинат-мята М Кухня 300мл","calories":65,"protein":0,"fat":0,"carbs":16,"unit":"g","default":100,"category":"Магнит"},
    {"id":533,"name":"Продукт питьевой J7  Смузи Киви-Ананас -Манго-Ябло","calories":60,"protein":0,"fat":0,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":534,"name":"Сок яблочный прямого отжима 300мл","calories":38,"protein":0,"fat":0,"carbs":9.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":535,"name":"Смузи манго-персик-яблоко со злаками и витаминами","calories":60,"protein":0,"fat":0,"carbs":15,"unit":"g","default":100,"category":"Магнит"},
    {"id":536,"name":"Сок мандарина прямого отжима 300мл","calories":44,"protein":0,"fat":0,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":537,"name":"Яблочно-морковный сок прямого отжима 300мл","calories":40,"protein":0.6,"fat":0.3,"carbs":8.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":538,"name":"Напиток фруктовый чай со вкусом лимон-лайм 400мл","calories":39,"protein":0,"fat":0,"carbs":9.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":539,"name":"Палочки Cheetos кукурузные сыр 50г","calories":470,"protein":7,"fat":22,"carbs":62,"unit":"g","default":100,"category":"Магнит"},
    {"id":540,"name":"Кукурузные палочки Cheetos Кетчуп 50г","calories":490,"protein":7.5,"fat":23,"carbs":63,"unit":"g","default":100,"category":"Магнит"},
    {"id":541,"name":"Кукуруз палочки Cheetos со вкусом Пицца 43г","calories":490,"protein":8,"fat":24,"carbs":60,"unit":"g","default":100,"category":"Магнит"},
    {"id":542,"name":"Сыр President Чечил спагетти 35% 100г","calories":337,"protein":26,"fat":26,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":543,"name":"Семечки От Мартина полосатые с солью 150г","calories":570,"protein":22.8,"fat":42.6,"carbs":19.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":544,"name":"Семечки Крутой Окер полосатые жареные с солью 135г","calories":600,"protein":24,"fat":47.5,"carbs":19,"unit":"g","default":100,"category":"Магнит"},
    {"id":545,"name":"Набор к пиву Рыба And соль рыба сушеная 180г","calories":240,"protein":42,"fat":8,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":546,"name":"Семечки подсолнечника Джинн Солнечные Великан жаре","calories":660,"protein":27,"fat":58,"carbs":9,"unit":"g","default":100,"category":"Магнит"},
    {"id":547,"name":"Напиток Любимый Апельсиновое манго 1.93л","calories":50,"protein":0.2,"fat":0,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":548,"name":"Напиток сокосодержащий Яблоко Любимый 1.93л","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":549,"name":"Сок J7 апельсиновый с мякотью 970мл","calories":35,"protein":0.7,"fat":0,"carbs":9,"unit":"g","default":100,"category":"Магнит"},
    {"id":550,"name":"Сок Сады Придонья из зеленых яблок 2л","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":551,"name":"Морс из клубники-вишни-смородины М Кухня 500мл","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":552,"name":"Нектар Мультифрукт Добрый 1л","calories":48,"protein":0,"fat":0,"carbs":12,"unit":"g","default":100,"category":"Магнит"},
    {"id":553,"name":"Сок Березовый Великая Русь 1л","calories":12,"protein":0,"fat":0,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":554,"name":"Напиток Fitogugu Energy сокосодержащий обогащенный","calories":32,"protein":0,"fat":0,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":555,"name":"Напиток Любимый Земляничное лето 1.93л","calories":35,"protein":0,"fat":0,"carbs":9,"unit":"g","default":100,"category":"Магнит"},
    {"id":556,"name":"Сок Яблочный Premiere of Taste 950мл","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":557,"name":"Горчица Махеевъ Русская столовая 140г","calories":181,"protein":9.6,"fat":10.9,"carbs":11,"unit":"g","default":100,"category":"Магнит"},
    {"id":558,"name":"Уксус Моя цена Столовый 9% 1л","calories":32,"protein":0.1,"fat":0,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":559,"name":"Кислота уксусная Магнит 70% 180г","calories":18,"protein":0,"fat":0,"carbs":0.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":560,"name":"Соус Терияки деликатесный Махеевъ 230мл в ассортим","calories":140,"protein":1.2,"fat":0,"carbs":33.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":561,"name":"Майонез Слобода Оливковый 67% 750г","calories":620,"protein":0.3,"fat":67,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":562,"name":"Уксус Моя цена столовый 9% 500мл","calories":32,"protein":0,"fat":0,"carbs":0.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":563,"name":"Соус Astoria Бургер 200г","calories":330,"protein":0.7,"fat":30,"carbs":14.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":564,"name":"Соус Sen Soy для приготовления Якитори 120г","calories":190,"protein":2.4,"fat":4.1,"carbs":36,"unit":"g","default":100,"category":"Магнит"},
    {"id":565,"name":"Яблочный уксус из пищевого сырья 6% Магнит 500мл","calories":40,"protein":0.4,"fat":0.1,"carbs":0.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":566,"name":"Семена льна Секреты природы 400г","calories":581,"protein":22.2,"fat":43.4,"carbs":21.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":567,"name":"Смесь орехово-фруктовая Premium Premiere of Taste","calories":500,"protein":10,"fat":32,"carbs":42,"unit":"g","default":100,"category":"Магнит"},
    {"id":568,"name":"Смесь Восточный Гость фруктово-ореховая жареная 13","calories":420,"protein":7,"fat":20,"carbs":52,"unit":"g","default":100,"category":"Магнит"},
    {"id":569,"name":"Сыр Моя цена Российский весовой","calories":328,"protein":24.5,"fat":25.5,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":570,"name":"Сыр плавленый Карат Дружба 45% 90г","calories":240,"protein":5.7,"fat":18,"carbs":13.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":571,"name":"Сыр Белебеевский 45% 190г","calories":347,"protein":27,"fat":26.5,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":572,"name":"Сыр плавленый Карат Шоколадный 30% 230г","calories":267,"protein":6.2,"fat":15.3,"carbs":26.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":573,"name":"Сыр Вкуснотеево Тильзитер Премиум 45% 200г","calories":329,"protein":25.5,"fat":25,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":574,"name":"Сыр Вкуснотеево тёртый микс 4 сыра 45% 150г","calories":344,"protein":25,"fat":26.5,"carbs":1.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":575,"name":"Продукт рассольный Сиртаки Original 55% 200г","calories":235,"protein":7,"fat":22,"carbs":2,"unit":"g","default":100,"category":"Магнит"},
    {"id":576,"name":"Сыр Bonfesto Маскарпоне 78% 250г","calories":388,"protein":4.1,"fat":40,"carbs":2.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":577,"name":"Сыр Николаевские сыроварни Российский 50% 180г","calories":347,"protein":22.5,"fat":28.5,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":578,"name":"Сыр Село Зеленое Сливочный 50% 200г","calories":350,"protein":26.7,"fat":27,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":579,"name":"Эклеры с белковым кремом Mirel 160г","calories":341,"protein":5.3,"fat":19.5,"carbs":36.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":580,"name":"Пирожное Трубочка слоеная Золотой колос 2шт 130г","calories":390,"protein":6.5,"fat":18,"carbs":51,"unit":"g","default":100,"category":"Магнит"},
    {"id":581,"name":"Пирожное Корзинка с белковым кремом Золотой колос","calories":360,"protein":4,"fat":12,"carbs":58,"unit":"g","default":100,"category":"Магнит"},
    {"id":582,"name":"Пирожное Картошка Классическое в молочном бельгийс","calories":443,"protein":5.2,"fat":27.1,"carbs":44.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":583,"name":"Торт бисквитный Сметанный 900г","calories":210,"protein":3.4,"fat":9.2,"carbs":29.3,"unit":"g","default":100,"category":"Магнит"},
    {"id":584,"name":"Пирожное бисквитное Тирамису Дубайский шоколад 130","calories":415,"protein":4.5,"fat":18.7,"carbs":27.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":585,"name":"Пирожные Профитроли с ванильным кремом Фарше 150г","calories":395,"protein":3,"fat":17,"carbs":56.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":586,"name":"Пирожное Пончо Метрополис 150г","calories":270,"protein":3,"fat":17,"carbs":27,"unit":"g","default":100,"category":"Магнит"},
    {"id":587,"name":"Пирожное Заварное с заварным кремом Золотой колос","calories":310,"protein":5,"fat":10,"carbs":51,"unit":"g","default":100,"category":"Магнит"},
    {"id":588,"name":"Торт Бельгийский шоколадный заливной Фарше 330г","calories":317,"protein":4.6,"fat":16.4,"carbs":37.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":589,"name":"Батон Летний дар нарезанный Краснодарский хлебозав","calories":266,"protein":8,"fat":3,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":590,"name":"Лаваш Армянский бездрожжевой Анрик 340г","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":591,"name":"Батон Нарезной нарезанный Аютинский хлеб 380г","calories":264,"protein":7.5,"fat":2.9,"carbs":50.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":592,"name":"Батон Летний дар Краснодарский хлебозавод №6 350г","calories":266,"protein":8,"fat":3,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":593,"name":"Хлеб Тостовый пшеничный нарезанный Аютинский хлеб","calories":268,"protein":7.7,"fat":2.7,"carbs":52,"unit":"g","default":100,"category":"Магнит"},
    {"id":594,"name":"Хлеб Бородинский ржаной нарезанный 680г","calories":207,"protein":6.8,"fat":1.3,"carbs":41.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":595,"name":"Хлеб Тостовый половинка нарезанный 280г","calories":187,"protein":5.4,"fat":0.8,"carbs":39.7,"unit":"g","default":100,"category":"Магнит"},
    {"id":596,"name":"Лаваш тонкий Хлеб Продукт 320г","calories":297,"protein":8.9,"fat":2.2,"carbs":59.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":597,"name":"Лаваш Армянский Классический Каравай Кубани 340г","calories":280,"protein":9,"fat":1,"carbs":56,"unit":"g","default":100,"category":"Магнит"},
    {"id":598,"name":"Хлеб Ремесленный на закваске нарезанный Аютинский","calories":190,"protein":6.5,"fat":0.7,"carbs":39,"unit":"g","default":100,"category":"Магнит"},
    {"id":599,"name":"Чай черный холодный Малина Lipton 500мл","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"g","default":100,"category":"Магнит"},
    {"id":600,"name":"Чай черный холодный Лимон Lipton 1.5л","calories":19,"protein":0,"fat":0,"carbs":4.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":601,"name":"Квас Староминский традиционный пастеризованный 1.5","calories":30,"protein":0,"fat":0,"carbs":6.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":602,"name":"Квас Очаковский двойного брожения 2л","calories":30,"protein":0,"fat":0,"carbs":5.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":603,"name":"Квас Желтая Бочка светлый фильтрованный 1.5л","calories":40,"protein":0,"fat":0,"carbs":8.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":604,"name":"Напиток Kombucha Claccic натуральный природного бр","calories":30,"protein":0.1,"fat":0,"carbs":7.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":605,"name":"Чай зеленый холодный Lipton 1.5л","calories":19,"protein":0,"fat":0,"carbs":4.6,"unit":"g","default":100,"category":"Магнит"},
    {"id":606,"name":"Напиток Kombucha Immuno натуральный природного бро","calories":30,"protein":0.1,"fat":0,"carbs":7.5,"unit":"g","default":100,"category":"Магнит"},
    {"id":607,"name":"Чай черный холодный Персик Lipton 1.5л","calories":21,"protein":0,"fat":0,"carbs":5,"unit":"g","default":100,"category":"Магнит"},
    {"id":608,"name":"Напиток Фрутмотив Ice Tea Чай зеленый холодный Мал","calories":30,"protein":0,"fat":0,"carbs":7,"unit":"g","default":100,"category":"Магнит"},
    {"id":609,"name":"Чай черный Richard Royal Ceylon 100пак","calories":2,"protein":0.1,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":610,"name":"Чай черный Richard Royal Earl Grey цейлон с аромат","calories":3,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":611,"name":"Чай черный Greenfield Golden Ceylon 100пак","calories":15,"protein":0.5,"fat":0.5,"carbs":2.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":612,"name":"Добавка в чай Земляника Bioniq 40г","calories":189,"protein":11,"fat":2,"carbs":32,"unit":"g","default":100,"category":"Магнит"},
    {"id":613,"name":"Чайный напиток Richard Functiona Immune 20пак","calories":5,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":614,"name":"Добавка в чай Лаванда Bioniq 30г","calories":23,"protein":1,"fat":1,"carbs":0.2,"unit":"g","default":100,"category":"Магнит"},
    {"id":615,"name":"Чай черный Ahmad Tea клубника-сливки 25пак 37.5г","calories":1,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":616,"name":"Чай черный Greenfield Kenyan Sunrise 25пак","calories":15,"protein":0.5,"fat":0.5,"carbs":2.1,"unit":"g","default":100,"category":"Магнит"},
    {"id":617,"name":"Сухарики ржаные Холодец/Бекон/Ветчина с сыром Кири","calories":400,"protein":12,"fat":7.5,"carbs":71,"unit":"g","default":100,"category":"Магнит"},
    {"id":618,"name":"Чипсы рифленые со вкусом чили и лайма Lays 105г","calories":550,"protein":6,"fat":32,"carbs":53,"unit":"g","default":100,"category":"Магнит"},
    {"id":619,"name":"Сухарики Хрусteam Багет Королевский краб 60г","calories":440,"protein":10,"fat":15,"carbs":67,"unit":"g","default":100,"category":"Магнит"},
    {"id":620,"name":"Чипсы рифленые со вкусом пряная креветка Lays 105г","calories":550,"protein":6,"fat":32,"carbs":53,"unit":"g","default":100,"category":"Магнит"},
    {"id":621,"name":"Сухарики Хрусteam Багет Томат и зелень 60г","calories":440,"protein":10,"fat":15,"carbs":67,"unit":"g","default":100,"category":"Магнит"},
    {"id":622,"name":"Луковые кольца Solo Nina со вкусом сметана и лук 9","calories":480,"protein":9,"fat":21,"carbs":63,"unit":"g","default":100,"category":"Магнит"},
    {"id":623,"name":"Чипсы со вкусом лимона и уксуса Pattes 100г","calories":560,"protein":3,"fat":37,"carbs":52,"unit":"g","default":100,"category":"Магнит"},
    {"id":624,"name":"Чипсы со вкусом Бекон Binggrae 40г","calories":500,"protein":7.5,"fat":23,"carbs":65,"unit":"g","default":100,"category":"Магнит"},
    {"id":625,"name":"Крендель хрустящий с розмарином Saltletts 70г","calories":450,"protein":10,"fat":14,"carbs":70,"unit":"g","default":100,"category":"Магнит"},
    {"id":626,"name":"🥩 Куриная грудка филе","calories":165,"protein":31,"fat":3.6,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":627,"name":"🥩 Куриное филе бедро","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":628,"name":"🥩 Говядина вырезка","calories":250,"protein":25,"fat":16,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":629,"name":"🥩 Свинина корейка","calories":310,"protein":20,"fat":25,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":630,"name":"🦃 Индейка филе грудки","calories":135,"protein":25,"fat":3,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":631,"name":"🥚 Яйцо перепелиное","calories":158,"protein":13,"fat":11,"carbs":0.5,"unit":"pcs","options":[5,10,15,20,25,30],"category":"Магнит"},
    {"id":632,"name":"🐟 Семга филе","calories":208,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":633,"name":"🐟 Форель филе","calories":190,"protein":20,"fat":12,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":634,"name":"🐟 Горбуша филе","calories":150,"protein":20.5,"fat":7,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":635,"name":"🥛 Молоко 0.5% обезжиренное","calories":35,"protein":3,"fat":0.5,"carbs":4.8,"unit":"g","default":200,"category":"Магнит"},
    {"id":636,"name":"🥛 Кефир 0% обезжиренный","calories":30,"protein":3,"fat":0,"carbs":4,"unit":"g","default":200,"category":"Магнит"},
    {"id":637,"name":"🥛 Творог 0% обезжиренный","calories":71,"protein":16,"fat":0,"carbs":2,"unit":"g","default":100,"category":"Магнит"},
    {"id":638,"name":"🥛 Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"category":"Магнит"},
    {"id":639,"name":"🧀 Пармезан 42%","calories":431,"protein":38,"fat":29,"carbs":2,"unit":"g","default":30,"category":"Магнит"},
    {"id":640,"name":"🌾 Киноа","calories":120,"protein":4.4,"fat":1.9,"carbs":21,"unit":"g","default":100,"category":"Магнит"},
    {"id":641,"name":"🥫 Горошек зеленый","calories":55,"protein":3,"fat":0.2,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":642,"name":"🥫 Кукуруза сладкая","calories":93,"protein":2.5,"fat":1.2,"carbs":17,"unit":"g","default":100,"category":"Магнит"},
    {"id":643,"name":"🧅 Лук репчатый","calories":40,"protein":1.1,"fat":0.1,"carbs":9,"unit":"g","default":50,"category":"Магнит"},
    {"id":644,"name":"🥬 Капуста белокочанная","calories":25,"protein":1.3,"fat":0.1,"carbs":5,"unit":"g","default":100,"category":"Магнит"},
    {"id":645,"name":"🌿 Укроп","calories":43,"protein":3.5,"fat":1.1,"carbs":7,"unit":"g","default":10,"category":"Магнит"},
    {"id":646,"name":"🍋 Лимон","calories":29,"protein":1.1,"fat":0.3,"carbs":9.3,"unit":"g","default":50,"category":"Магнит"},
    {"id":647,"name":"🌰 Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":21,"unit":"g","default":30,"category":"Магнит"},
    {"id":648,"name":"🌰 Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":14,"unit":"g","default":30,"category":"Магнит"},
    {"id":649,"name":"🍯 Мед натуральный","calories":304,"protein":0.3,"fat":0,"carbs":82,"unit":"g","default":20,"category":"Магнит"},
    {"id":650,"name":"🍞 Хлеб цельнозерновой","calories":250,"protein":8,"fat":3,"carbs":45,"unit":"g","default":50,"category":"Магнит"},
    {"id":651,"name":"🥣 Мюсли","calories":350,"protein":8,"fat":5,"carbs":70,"unit":"g","default":50,"category":"Магнит"},
    {"id":652,"name":"🥦 Овощная смесь Гавайская","calories":50,"protein":2,"fat":0.5,"carbs":10,"unit":"g","default":100,"category":"Магнит"},
    {"id":653,"name":"🥞 Блины с творогом","calories":210,"protein":9,"fat":10.5,"carbs":19.8,"unit":"g","default":100,"category":"Магнит"},
    {"id":654,"name":"🍗 Куриные наггетсы 6 шт","calories":268,"protein":17,"fat":14,"carbs":19,"unit":"pcs","options":[6,9,12],"category":"Магнит"},
    {"id":655,"name":"🍟 Картофель фри","calories":310,"protein":3.5,"fat":15,"carbs":40,"unit":"g","default":100,"category":"Магнит"},
    [
    {"id":200,"name":"Печенье шоколадный брауни Refit 35г","calories":279,"protein":25,"fat":11,"carbs":14,"brand":"Refit","unit":"g","default":100,"category":"Магнит"},
    {"id":201,"name":"Клетчатка Сибирская клетчатка витаминная поляна 28","calories":130,"protein":13,"fat":3,"carbs":13,"brand":"Сибирская клетчатка","unit":"g","default":100,"category":"Магнит"},
    {"id":202,"name":"Протеиновое печенье с суфле Фисташка и катаифи Chi","calories":339,"protein":22,"fat":17,"carbs":10.2,"brand":"Chi","unit":"g","default":100,"category":"Магнит"},
    {"id":203,"name":"Молочный шоколад с фисташковой пастой и катаифи Ch","calories":516,"protein":19,"fat":37,"carbs":18,"brand":"Ch","unit":"g","default":100,"category":"Магнит"},
    {"id":204,"name":"Печенье Ё Батон Jamy Pie Шоколад 60г","calories":289,"protein":20,"fat":11,"carbs":18,"brand":"Jamy Pie","unit":"g","default":100,"category":"Магнит"},
    {"id":205,"name":"Протеиновое печенье Северная черника Kultlab Diet","calories":293,"protein":23.5,"fat":8.4,"carbs":22.8,"brand":"Kultlab","unit":"g","default":100,"category":"Магнит"},
    {"id":206,"name":"Печенье Snaq Fabriq глазированное вишня карамель","calories":308,"protein":15,"fat":14,"carbs":19,"brand":"Snaq Fabriq","unit":"g","default":100,"category":"Магнит"},
    {"id":207,"name":"Печенье Bombbar со вкусом шоколадного брауни","calories":271,"protein":25,"fat":10.5,"carbs":13,"brand":"Bombbar","unit":"g","default":100,"category":"Магнит"},
    {"id":208,"name":"Батончик мюсли с клюквой с глазировкой","calories":370,"protein":1.5,"fat":18,"carbs":51,"brand":"Кондитери Кубани","unit":"g","default":100,"category":"Магнит"},
    {"id":209,"name":"Конфитюр из вишни","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Ратибор","unit":"g","default":100,"category":"Магнит"},
    {"id":210,"name":"Конфитюр Апельсин","calories":230,"protein":0.2,"fat":0,"carbs":56,"brand":"Zuegg","unit":"g","default":100,"category":"Магнит"},
    {"id":211,"name":"Конфитюр Экстра Груша Вильямс","calories":193,"protein":0.3,"fat":0,"carbs":47,"brand":"Zuegg","unit":"g","default":100,"category":"Магнит"},
    {"id":212,"name":"Конфитюр Лесные ягоды с пониженной калорийностью","calories":57,"protein":0.5,"fat":0,"carbs":12,"brand":"Zuegg","unit":"g","default":100,"category":"Магнит"},
    {"id":213,"name":"Повидло Земляничное","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Сава","unit":"g","default":100,"category":"Магнит"},
    {"id":214,"name":"Джем Клубничный","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","unit":"g","default":100,"category":"Магнит"},
    {"id":215,"name":"Конфитюр Экстра Абрикос","calories":193,"protein":0.3,"fat":0,"carbs":47,"brand":"Zuegg","unit":"g","default":100,"category":"Магнит"},
    {"id":216,"name":"Соус Крем-Шоколад","calories":280,"protein":2.5,"fat":3,"carbs":60,"brand":"Heinz","unit":"g","default":100,"category":"Магнит"},
    {"id":217,"name":"Ореховая паста","calories":520,"protein":6.5,"fat":30,"carbs":55,"brand":"Babyfox","unit":"g","default":100,"category":"Магнит"},
    {"id":218,"name":"Вино игристое полусладкое безалкогольное","calories":25,"protein":0,"fat":0,"carbs":5,"brand":"Abr","unit":"g","default":100,"category":"Магнит"},
    {"id":219,"name":"Вода питьевая лимон негазированная","calories":10,"protein":0,"fat":0,"carbs":0,"brand":"Святой источник","unit":"g","default":100,"category":"Магнит"},
    {"id":220,"name":"Желатин пищевой","calories":360,"protein":87,"fat":0.4,"carbs":1,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":221,"name":"Агар-Агар пищевой","calories":378,"protein":8.5,"fat":0.3,"carbs":83,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":222,"name":"Ванилин","calories":288,"protein":0.1,"fat":0.1,"carbs":12.7,"brand":"Haas","unit":"g","default":100,"category":"Магнит"},
    {"id":223,"name":"Разрыхлитель теста","calories":146,"protein":5,"fat":0.5,"carbs":32,"brand":"Haas","unit":"g","default":100,"category":"Магнит"},
    {"id":224,"name":"Разрыхлитель теста","calories":79,"protein":0.2,"fat":0,"carbs":19.6,"brand":"Dr. Bakers","unit":"g","default":100,"category":"Магнит"},
    {"id":225,"name":"Хлопья панировочные Темпура японские","calories":370,"protein":11,"fat":1,"carbs":80,"brand":"Sen Soy","unit":"g","default":100,"category":"Магнит"},
    {"id":226,"name":"Сухари панировочные","calories":330,"protein":11,"fat":1.5,"carbs":68,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":227,"name":"Гамбургер","calories":274,"protein":10,"fat":11.9,"carbs":31.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":228,"name":"Чикенбургер","calories":312,"protein":10.6,"fat":12.5,"carbs":39.1,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":229,"name":"Голубцы с мясом","calories":333,"protein":5.3,"fat":31.9,"carbs":6.2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":230,"name":"Чикенбургер","calories":312,"protein":10.6,"fat":12.5,"carbs":39.1,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":231,"name":"Отбивная По-креольски","calories":199,"protein":10.3,"fat":14.9,"carbs":6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":232,"name":"Бутерброд с ветчиной","calories":299,"protein":9.1,"fat":10.2,"carbs":38.9,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":233,"name":"Гамбургер","calories":274,"protein":10,"fat":11.9,"carbs":31.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":234,"name":"Чизбургер","calories":388,"protein":13.7,"fat":19.7,"carbs":39,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":235,"name":"Свинина по-французски","calories":346,"protein":10.7,"fat":30.2,"carbs":7.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":236,"name":"Куры гриль","calories":310,"protein":24.1,"fat":23.5,"carbs":1,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":237,"name":"Тарталетки для икры","calories":479,"protein":7.3,"fat":25,"carbs":49.2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":238,"name":"Тарталетки для салата","calories":479,"protein":7.3,"fat":25,"carbs":49.2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":239,"name":"Пампушки с чесноком","calories":55,"protein":8,"fat":9.5,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":240,"name":"Булка Французская","calories":177,"protein":6.2,"fat":1.5,"carbs":35,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":241,"name":"Крендели с солью классические","calories":410,"protein":10,"fat":6.5,"carbs":75,"brand":"Saltletts","unit":"g","default":100,"category":"Магнит"},
    {"id":242,"name":"Сдоба Забава","calories":358,"protein":8.7,"fat":8.9,"carbs":60.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":243,"name":"Крекер Чудесный улов","calories":440,"protein":9,"fat":17,"carbs":62,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":244,"name":"Сдоба Купеческая","calories":355,"protein":9.7,"fat":9.5,"carbs":57.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":245,"name":"Сушки Традиционные","calories":370,"protein":10,"fat":3,"carbs":75,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":246,"name":"Слойка с адыгейским сыром и зеленью","calories":300,"protein":8,"fat":15,"carbs":32,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":247,"name":"Газированный напиток Кола","calories":18,"protein":0,"fat":0,"carbs":4.5,"brand":"Evervess","unit":"g","default":100,"category":"Магнит"},
    {"id":248,"name":"Газированный напиток Кола","calories":44,"protein":0,"fat":0,"carbs":11.1,"brand":"Evervess","unit":"g","default":100,"category":"Магнит"},
    {"id":249,"name":"Напиток Кола","calories":19,"protein":0,"fat":0,"carbs":4.7,"brand":"Черноголовка","unit":"g","default":100,"category":"Магнит"},
    {"id":250,"name":"Напиток Cola","calories":19,"protein":0,"fat":0,"carbs":4.8,"brand":"Добрый","unit":"g","default":100,"category":"Магнит"},
    {"id":251,"name":"Напиток экстра Ситро","calories":20,"protein":0,"fat":0,"carbs":4.7,"brand":"Ах!","unit":"g","default":100,"category":"Магнит"},
    {"id":252,"name":"Напиток Cola без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Добрый","unit":"g","default":100,"category":"Магнит"},
    {"id":253,"name":"Напиток Лимонад","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","unit":"g","default":100,"category":"Магнит"},
    {"id":254,"name":"Напиток Тетя Груша","calories":18,"protein":0,"fat":0,"carbs":4.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":255,"name":"Газированный напиток Лимон-лайм","calories":18,"protein":0,"fat":0,"carbs":4.4,"brand":"Frustyle","unit":"g","default":100,"category":"Магнит"},
    {"id":256,"name":"Напиток Мохито Клубника","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":257,"name":"Мясо криля натуральное","calories":63,"protein":13,"fat":1,"carbs":0,"brand":"Ультрамарин","unit":"g","default":100,"category":"Магнит"},
    {"id":258,"name":"Мидии в ракушках варено-мороженые","calories":126,"protein":9.4,"fat":8.2,"carbs":3.5,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":259,"name":"Креветки Королевские очищенные вареные","calories":50,"protein":11,"fat":0.4,"carbs":0.5,"brand":"Бухта изобилия","unit":"g","default":100,"category":"Магнит"},
    {"id":260,"name":"Чай Спокойной ночи","calories":380,"protein":1,"fat":1,"carbs":95,"brand":"Когда я вырасту","unit":"g","default":100,"category":"Магнит"},
    {"id":261,"name":"Чай детский груша мелисса яблоко","calories":370,"protein":1,"fat":1,"carbs":93,"brand":"Когда я вырасту","unit":"g","default":100,"category":"Магнит"},
    {"id":262,"name":"Нектар из тыквы","calories":44,"protein":0,"fat":0,"carbs":11,"brand":"Динозаврик Ди","unit":"g","default":100,"category":"Магнит"},
    {"id":263,"name":"Морс из клюквы и земляники","calories":50,"protein":0,"fat":0,"carbs":12,"brand":"Дары Кубани","unit":"g","default":100,"category":"Магнит"},
    {"id":264,"name":"Морс клюквенный","calories":50,"protein":0,"fat":0,"carbs":12,"brand":"Дары Кубани","unit":"g","default":100,"category":"Магнит"},
    {"id":265,"name":"Творог клубника 3.5%","calories":104,"protein":6.5,"fat":3.5,"carbs":11.7,"brand":"Растишка","unit":"g","default":100,"category":"Магнит"},
    {"id":266,"name":"Каша детская жидкая молочная гречневая","calories":70,"protein":3.2,"fat":2.5,"carbs":8.5,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":267,"name":"Биотворог груша 4%","calories":108,"protein":7.5,"fat":4,"carbs":10.6,"brand":"Тема","unit":"g","default":100,"category":"Магнит"},
    {"id":268,"name":"Блинчики с творогом","calories":210,"protein":9,"fat":10.5,"carbs":19.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":269,"name":"Блинчики с творогом","calories":250,"protein":11,"fat":15,"carbs":28,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":270,"name":"Блинчики с ветчиной","calories":280,"protein":15,"fat":16,"carbs":20,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":271,"name":"Блинчики Цезарь с курицей","calories":227,"protein":8.8,"fat":15.2,"carbs":13.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":272,"name":"Сырники жареные","calories":200,"protein":14,"fat":4.5,"carbs":27,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":273,"name":"Митболы с сыром и ветчиной","calories":330,"protein":16,"fat":19,"carbs":24,"brand":"Ряба Крымская","unit":"g","default":100,"category":"Магнит"},
    {"id":274,"name":"Наггетсы из мяса цыпленка Сочные","calories":191,"protein":10.5,"fat":7.6,"carbs":20.2,"brand":"Мираторг","unit":"g","default":100,"category":"Магнит"},
    {"id":275,"name":"Куриные наггетсы хрустящие","calories":183,"protein":13,"fat":7.4,"carbs":16,"brand":"Мираторг","unit":"g","default":100,"category":"Магнит"},
    {"id":276,"name":"Наггетсы с ветчиной и сыром","calories":290,"protein":6,"fat":18,"carbs":25,"brand":"Стародворье","unit":"g","default":100,"category":"Магнит"},
    {"id":277,"name":"Наггетсы","calories":290,"protein":8,"fat":11,"carbs":24,"brand":"Стародворье","unit":"g","default":100,"category":"Магнит"},
    {"id":278,"name":"Набор для бульона из утенка","calories":240,"protein":15,"fat":20,"carbs":0,"brand":"Озёрка","unit":"g","default":100,"category":"Магнит"},
    {"id":279,"name":"Печень цыпленка-бройлера замороженная","calories":162,"protein":18,"fat":10,"carbs":0.1,"brand":"Благояр","unit":"g","default":100,"category":"Магнит"},
    {"id":280,"name":"Наггетсы с индейкой","calories":230,"protein":9,"fat":10,"carbs":25,"brand":"Вязанка","unit":"g","default":100,"category":"Магнит"},
    {"id":281,"name":"Наггетсы куриные Классические","calories":183,"protein":13,"fat":7.4,"carbs":16,"brand":"Мираторг","unit":"g","default":100,"category":"Магнит"},
    {"id":282,"name":"Котлеты Домашние","calories":240,"protein":8,"fat":20,"carbs":6.5,"brand":"Агрокомплес","unit":"g","default":100,"category":"Магнит"},
    {"id":283,"name":"Вишня без косточки быстрозамороженная","calories":50,"protein":1,"fat":0.4,"carbs":11,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":284,"name":"Клубника быстрозамороженная","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":285,"name":"Клюква быстрозамороженная","calories":20,"protein":0.5,"fat":0.2,"carbs":3.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":286,"name":"Клубника быстрозамороженная","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"brand":"Green Ribbon","unit":"g","default":100,"category":"Магнит"},
    {"id":287,"name":"Смесь овощная 8 овощей быстрозамороженная","calories":45,"protein":2.5,"fat":0.2,"carbs":8,"brand":"4 Сезона","unit":"g","default":100,"category":"Магнит"},
    {"id":288,"name":"Мексиканская смесь быстрозамороженная","calories":50,"protein":2.5,"fat":0.5,"carbs":11,"brand":"Мираторг","unit":"g","default":100,"category":"Магнит"},
    {"id":289,"name":"Черная смородина быстрозамороженная","calories":67,"protein":1.2,"fat":0.4,"carbs":14.6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":290,"name":"Брокколи соцветиями быстрозамороженная","calories":40,"protein":3,"fat":0.4,"carbs":5.2,"brand":"Green Ribbon","unit":"g","default":100,"category":"Магнит"},
    {"id":291,"name":"Гавайская смесь быстрозамороженная","calories":100,"protein":4,"fat":1,"carbs":18,"brand":"Agama","unit":"g","default":100,"category":"Магнит"},
    {"id":292,"name":"Чебупели сочные","calories":240,"protein":7,"fat":11,"carbs":28,"brand":"Горячая штучка","unit":"g","default":100,"category":"Магнит"},
    {"id":293,"name":"Чебупицца Курочка по-итальянски","calories":270,"protein":8,"fat":13,"carbs":29,"brand":"Горячая штучка","unit":"g","default":100,"category":"Магнит"},
    {"id":294,"name":"Оладушки пышные домашние","calories":220,"protein":6,"fat":4,"carbs":40,"brand":"С пылу с жару","unit":"g","default":100,"category":"Магнит"},
    {"id":295,"name":"Чебурек с мясом","calories":258,"protein":11,"fat":10.2,"carbs":30.6,"brand":"Жаренки","unit":"g","default":100,"category":"Магнит"},
    {"id":296,"name":"Основа для пиццы","calories":320,"protein":8,"fat":6.5,"carbs":56.5,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":297,"name":"Самса с мясом","calories":300,"protein":10,"fat":20,"carbs":30,"brand":"Жаренки","unit":"g","default":100,"category":"Магнит"},
    {"id":298,"name":"Чебурек с бараниной","calories":240,"protein":8,"fat":12,"carbs":26,"brand":"Жаренки","unit":"g","default":100,"category":"Магнит"},
    {"id":299,"name":"Чебуманы с говядиной","calories":270,"protein":7,"fat":14,"carbs":28,"brand":"Горячая штучка","unit":"g","default":100,"category":"Магнит"},
    {"id":300,"name":"Филе минтая свежемороженое","calories":90,"protein":20,"fat":1,"carbs":0,"brand":"Borealis","unit":"g","default":100,"category":"Магнит"},
    {"id":301,"name":"Клемы Вонголе в раковине варено-мороженые","calories":132,"protein":14.8,"fat":1,"carbs":3.6,"brand":"Шифудо","unit":"g","default":100,"category":"Магнит"},
    {"id":302,"name":"Треска филе без кожи без кости","calories":77,"protein":17,"fat":1,"carbs":0,"brand":"Borealis","unit":"g","default":100,"category":"Магнит"},
    {"id":303,"name":"Креветки Королевские","calories":73,"protein":15.6,"fat":1,"carbs":0.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":304,"name":"Мидии синие на полустворках раковин","calories":102,"protein":14.7,"fat":2.5,"carbs":5.1,"brand":"Шифудо","unit":"g","default":100,"category":"Магнит"},
    {"id":305,"name":"Ассорти из морепродуктов свежемороженое","calories":69,"protein":7.9,"fat":0.9,"carbs":7.4,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":306,"name":"Кальмар командорский тушка свежемороженый","calories":100,"protein":18,"fat":2,"carbs":2,"brand":"Borealis","unit":"g","default":100,"category":"Магнит"},
    {"id":307,"name":"Стейк форели свежемороженый","calories":88,"protein":20.5,"fat":2,"carbs":0,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":308,"name":"Креветки с хвостом очищенные свежемороженые","calories":103,"protein":21,"fat":1.1,"carbs":0,"brand":"Вкусарт","unit":"g","default":100,"category":"Магнит"},
    {"id":309,"name":"Икра мойвы с копченым лососем","calories":440,"protein":6.8,"fat":43.3,"carbs":5.7,"brand":"Санта Бремор","unit":"g","default":100,"category":"Магнит"},
    {"id":310,"name":"Салат из морских водорослей","calories":190,"protein":2.4,"fat":15.6,"carbs":9.5,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":311,"name":"Масло лососевое бутербродное","calories":490,"protein":2,"fat":54,"carbs":0,"brand":"Санта Бремор","unit":"g","default":100,"category":"Магнит"},
    {"id":312,"name":"Салат из морских водорослей Чука орех","calories":90,"protein":3.3,"fat":3.7,"carbs":11.7,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":313,"name":"Паста из мяса мидии в соусе Сальса","calories":200,"protein":4.5,"fat":16,"carbs":9,"brand":"Санта Бремор","unit":"g","default":100,"category":"Магнит"},
    {"id":314,"name":"Паста Фиш-мусс с лососем","calories":420,"protein":5.5,"fat":44,"carbs":0,"brand":"Санта Бремор","unit":"g","default":100,"category":"Магнит"},
    {"id":315,"name":"Икра лососевая стольная имитация Люкс","calories":22,"protein":0.2,"fat":1.4,"carbs":2.2,"brand":"Русское Море","unit":"g","default":100,"category":"Магнит"},
    {"id":316,"name":"Кисломолочный напиток High-Pro обезжиренный","calories":60,"protein":12,"fat":0,"carbs":2.5,"brand":"Exponenta","unit":"g","default":100,"category":"Магнит"},
    {"id":317,"name":"Кисломолочный напиток Дыня кантал обезжиренный","calories":35,"protein":6,"fat":0,"carbs":3,"brand":"Exponenta","unit":"g","default":100,"category":"Магнит"},
    {"id":318,"name":"Пирожное бисквитное Молочный ломтик","calories":421,"protein":7.9,"fat":27.9,"carbs":34,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":319,"name":"Йогурт Греческий 2.5%","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"brand":"Epica","unit":"g","default":100,"category":"Магнит"},
    {"id":320,"name":"Питьевой йогурт Ягодное мороженое","calories":86,"protein":2.8,"fat":1.9,"carbs":14.3,"brand":"Чудо","unit":"g","default":100,"category":"Магнит"},
    {"id":321,"name":"Напиток кисломолочный со вкусом клубники","calories":67,"protein":2.6,"fat":1,"carbs":12,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":322,"name":"Йогурт густой персик и маракуйя","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"brand":"Фругурт","unit":"g","default":100,"category":"Магнит"},
    {"id":323,"name":"Творожный десерт взбитый ягодное мороженое","calories":132,"protein":6.3,"fat":5.8,"carbs":13.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":324,"name":"Творожок двухслойный Ежевика-малина 4.2%","calories":129,"protein":4,"fat":4.2,"carbs":18.9,"brand":"Чудо","unit":"g","default":100,"category":"Магнит"},
    {"id":325,"name":"Йогурт термостатный черника 3.4%","calories":85,"protein":3,"fat":3.4,"carbs":10.5,"brand":"Простоквашино","unit":"g","default":100,"category":"Магнит"},
    {"id":326,"name":"Цикорий растворимый","calories":270,"protein":4,"fat":0.5,"carbs":57,"brand":"Большая чашка","unit":"g","default":100,"category":"Магнит"},
    {"id":327,"name":"Цикорий растворимый со сливочным вкусом","calories":290,"protein":6,"fat":4,"carbs":55,"brand":"Здравник","unit":"g","default":100,"category":"Магнит"},
    {"id":328,"name":"Какао-порошок Российский","calories":359,"protein":28,"fat":13,"carbs":12,"brand":"Россия щедрая душа","unit":"g","default":100,"category":"Магнит"},
    {"id":329,"name":"Цикорий гранулированный","calories":370,"protein":2,"fat":0,"carbs":80,"brand":"Цикорич","unit":"g","default":100,"category":"Магнит"},
    {"id":330,"name":"Горячий шоколад","calories":390,"protein":2,"fat":8,"carbs":76,"brand":"MacСhocolate","unit":"g","default":100,"category":"Магнит"},
    {"id":331,"name":"Какао растворимый натуральный","calories":320,"protein":24.5,"fat":12,"carbs":28.3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":332,"name":"Цикорий натуральный растворимый","calories":320,"protein":4,"fat":0.5,"carbs":57,"brand":"Экологика","unit":"g","default":100,"category":"Магнит"},
    {"id":333,"name":"Цикорий растворимый сублимированный","calories":340,"protein":4.1,"fat":0,"carbs":68,"brand":"Uliss","unit":"g","default":100,"category":"Магнит"},
    {"id":334,"name":"Горячий шоколад с коллагеном","calories":260,"protein":9,"fat":7,"carbs":41,"brand":"Леовит","unit":"g","default":100,"category":"Магнит"},
    {"id":335,"name":"Какао-порошок","calories":330,"protein":24,"fat":12,"carbs":10,"brand":"Золотой ярлык","unit":"g","default":100,"category":"Магнит"},
    {"id":336,"name":"Напиток кисломолочный безлактозный обезжиренный","calories":69,"protein":12.5,"fat":0.6,"carbs":3.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":337,"name":"Кефир 1%","calories":37,"protein":3,"fat":1,"carbs":4,"brand":"Кавказский долгожитель","unit":"g","default":100,"category":"Магнит"},
    {"id":338,"name":"Творог 5%","calories":121,"protein":16,"fat":5,"carbs":3,"brand":"Вкуснотеево","unit":"g","default":100,"category":"Магнит"},
    {"id":339,"name":"Творог мягкий с малиной 5%","calories":105,"protein":6.8,"fat":4.2,"carbs":9.9,"brand":"Вкуснотеево","unit":"g","default":100,"category":"Магнит"},
    {"id":340,"name":"Бифилакт термостатный 1%","calories":40,"protein":2.8,"fat":1,"carbs":4.6,"brand":"Биота","unit":"g","default":100,"category":"Магнит"},
    {"id":341,"name":"Катык 4%","calories":66,"protein":2.8,"fat":4,"carbs":4.7,"brand":"Кавказский долгожитель","unit":"g","default":100,"category":"Магнит"},
    {"id":342,"name":"Творог 9%","calories":157,"protein":16,"fat":9,"carbs":3,"brand":"Коровка из Кореновки","unit":"g","default":100,"category":"Магнит"},
    {"id":343,"name":"Айран 0.5%","calories":17,"protein":1.4,"fat":0.5,"carbs":1.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":344,"name":"Шпикачки Деревенские","calories":245,"protein":10,"fat":13,"carbs":4,"brand":"Дым Дымыч","unit":"g","default":100,"category":"Магнит"},
    {"id":345,"name":"Сервелат Пражский варено-копченый","calories":257,"protein":13,"fat":21,"carbs":4,"brand":"Папа может","unit":"g","default":100,"category":"Магнит"},
    {"id":346,"name":"Сервелат Финский варено-копченый","calories":495,"protein":12,"fat":48,"carbs":0,"brand":"Папа может","unit":"g","default":100,"category":"Магнит"},
    {"id":347,"name":"Шейка/Балык сырокопченая нарезка","calories":200,"protein":20,"fat":13,"carbs":0,"brand":"Мясная история","unit":"g","default":100,"category":"Магнит"},
    {"id":348,"name":"Колбаса Балыковая","calories":243,"protein":14,"fat":20,"carbs":1.8,"brand":"Мираторг","unit":"g","default":100,"category":"Магнит"},
    {"id":349,"name":"Колбаса сырокопченая","calories":525,"protein":19,"fat":49,"carbs":2,"brand":"Папин Выбор","unit":"g","default":100,"category":"Магнит"},
    {"id":350,"name":"Сосиски Супер Сытные","calories":142,"protein":8,"fat":10,"carbs":5,"brand":"Папа может","unit":"g","default":100,"category":"Магнит"},
    {"id":351,"name":"Ветчина Филе грудки индейки вареная","calories":100,"protein":16,"fat":2,"carbs":4,"brand":"Индилайт","unit":"g","default":100,"category":"Магнит"},
    {"id":352,"name":"Колбаса Классическая вареная","calories":178,"protein":9,"fat":14,"carbs":4,"brand":"Папа может","unit":"g","default":100,"category":"Магнит"},
    {"id":353,"name":"Ветчина Рубленая вареная","calories":169,"protein":10,"fat":13,"carbs":3,"brand":"Папа может","unit":"g","default":100,"category":"Магнит"},
    {"id":354,"name":"Паштет с гусиной печенью","calories":240,"protein":6,"fat":22,"carbs":4.5,"brand":"ХАМЕ","unit":"g","default":100,"category":"Магнит"},
    {"id":355,"name":"Паштет с индейкой","calories":230,"protein":7,"fat":22,"carbs":5,"brand":"Хаме","unit":"g","default":100,"category":"Магнит"},
    {"id":356,"name":"Паштет Французский с уткой","calories":280,"protein":9,"fat":26,"carbs":3,"brand":"Рублевский","unit":"g","default":100,"category":"Магнит"},
    {"id":357,"name":"Ветчина Консервированная","calories":290,"protein":15,"fat":25,"carbs":0,"brand":"Великолукский МК","unit":"g","default":100,"category":"Магнит"},
    {"id":358,"name":"Рассольник","calories":108,"protein":2.7,"fat":2.5,"carbs":18.7,"brand":"Буздякский","unit":"g","default":100,"category":"Магнит"},
    {"id":359,"name":"Суп гороховый","calories":165,"protein":8.6,"fat":4,"carbs":23.6,"brand":"Буздякский","unit":"g","default":100,"category":"Магнит"},
    {"id":360,"name":"Мясо гуся в собственном соку","calories":363,"protein":12,"fat":35,"carbs":0,"brand":"Балтийский Деликатес","unit":"g","default":100,"category":"Магнит"},
    {"id":361,"name":"Паштет Куриный","calories":309,"protein":10,"fat":29,"carbs":2.1,"brand":"Argeta","unit":"g","default":100,"category":"Магнит"},
    {"id":362,"name":"Оливки без косточки","calories":172,"protein":1.2,"fat":18,"carbs":0.5,"brand":"Iberica","unit":"g","default":100,"category":"Магнит"},
    {"id":363,"name":"Томатная паста Оригинальная","calories":90,"protein":3,"fat":0,"carbs":20,"brand":"Baisad","unit":"g","default":100,"category":"Магнит"},
    {"id":364,"name":"Суп гороховый","calories":90,"protein":3,"fat":4,"carbs":10,"brand":"Меленъ","unit":"g","default":100,"category":"Магнит"},
    {"id":365,"name":"Закуска овощная Закуска для зятя","calories":50,"protein":1,"fat":0,"carbs":11,"brand":"Пиканта","unit":"g","default":100,"category":"Магнит"},
    {"id":366,"name":"Брускетта Сладкий перец","calories":115,"protein":2.5,"fat":5.2,"carbs":14.5,"brand":"Бондюэль","unit":"g","default":100,"category":"Магнит"},
    {"id":367,"name":"Рассольник","calories":100,"protein":2,"fat":4.5,"carbs":14,"brand":"Меленъ","unit":"g","default":100,"category":"Магнит"},
    {"id":368,"name":"Тунец филе в собственном соку","calories":100,"protein":23,"fat":1,"carbs":0,"brand":"Северная Гавань","unit":"g","default":100,"category":"Магнит"},
    {"id":369,"name":"Килька обжаренная в томатном соусе","calories":182,"protein":14,"fat":12,"carbs":4.5,"brand":"Вкусные консервы","unit":"g","default":100,"category":"Магнит"},
    {"id":370,"name":"Паштет из лосося","calories":255,"protein":14.5,"fat":19.5,"carbs":5.5,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":371,"name":"Шпроты в масле","calories":356,"protein":17,"fat":32,"carbs":0,"brand":"Вкусные консервы","unit":"g","default":100,"category":"Магнит"},
    {"id":372,"name":"Килька балтийская неразделанная в томатном соусе","calories":180,"protein":13,"fat":12,"carbs":4,"brand":"За Родину","unit":"g","default":100,"category":"Магнит"},
    {"id":373,"name":"Сайра Тихоокеанская натуральная","calories":202,"protein":19.2,"fat":13.9,"carbs":0,"brand":"Северная Гавань","unit":"g","default":100,"category":"Магнит"},
    {"id":374,"name":"Шпроты в масле","calories":420,"protein":14,"fat":40,"carbs":0,"brand":"Капитан Вкусов","unit":"g","default":100,"category":"Магнит"},
    {"id":375,"name":"Шпроты Крупные в масле","calories":356,"protein":17,"fat":32,"carbs":0,"brand":"Вкусные консервы","unit":"g","default":100,"category":"Магнит"},
    {"id":376,"name":"Шпроты Экстра в масле","calories":376,"protein":15,"fat":35,"carbs":0,"brand":"Вкусные консервы","unit":"g","default":100,"category":"Магнит"},
    {"id":377,"name":"Протертая облепиха с сахаром","calories":240,"protein":0,"fat":0,"carbs":60,"brand":"Сибирская ягода","unit":"g","default":100,"category":"Магнит"},
    {"id":378,"name":"Кусочки ананаса консервированные в собственном соку","calories":56,"protein":0.3,"fat":0.1,"carbs":13,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":379,"name":"Сироп со вкусом малины","calories":220,"protein":0,"fat":0,"carbs":55,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":380,"name":"Ананасы шайбы","calories":65,"protein":0.3,"fat":0.3,"carbs":15,"brand":"Lorado","unit":"g","default":100,"category":"Магнит"},
    {"id":381,"name":"Кольца ананаса консервированные в собственном соку","calories":65,"protein":0.4,"fat":0.1,"carbs":15,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":382,"name":"Персики","calories":82,"protein":0.4,"fat":0.1,"carbs":19.9,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":383,"name":"Ананасы кусочки","calories":60,"protein":0.3,"fat":0.3,"carbs":15,"brand":"Lorado","unit":"g","default":100,"category":"Магнит"},
    {"id":384,"name":"Шоколад экстрамолочный","calories":550,"protein":7.5,"fat":34,"carbs":55,"brand":"Особый","unit":"g","default":100,"category":"Магнит"},
    {"id":385,"name":"Молочный шоколад","calories":520,"protein":5.2,"fat":27,"carbs":61,"brand":"Alpen Gold","unit":"g","default":100,"category":"Магнит"},
    {"id":386,"name":"Молочный шоколад с цельным фундуком","calories":551,"protein":7.6,"fat":36,"carbs":50,"brand":"Milka","unit":"g","default":100,"category":"Магнит"},
    {"id":387,"name":"Конфеты с трюфельной начинкой","calories":510,"protein":6,"fat":30,"carbs":54,"brand":"Чио-Рио","unit":"g","default":100,"category":"Магнит"},
    {"id":388,"name":"Шоколад экстра молочный с трюфельной начинкой","calories":556,"protein":6.6,"fat":35.4,"carbs":52.8,"brand":"Особый","unit":"g","default":100,"category":"Магнит"},
    {"id":389,"name":"Шоколад Дубайский с фисташковой начинкой и катаифи","calories":500,"protein":8.5,"fat":26,"carbs":57,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":390,"name":"Десерт Ломтишка","calories":436,"protein":5,"fat":24,"carbs":50,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":391,"name":"Шоколадный батончик с карамелью Twix Xtra","calories":497,"protein":3.9,"fat":24,"carbs":65.4,"brand":"Twix","unit":"g","default":100,"category":"Магнит"},
    {"id":392,"name":"Десерт Тортимилка Плюс","calories":405,"protein":3.5,"fat":14,"carbs":63,"brand":"Акконд","unit":"g","default":100,"category":"Магнит"},
    {"id":393,"name":"Кофе растворимый","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"brand":"Ambassador Platinum","unit":"g","default":100,"category":"Магнит"},
    {"id":394,"name":"Кофе растворимый","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"brand":"Ambassador Platinum","unit":"g","default":100,"category":"Магнит"},
    {"id":395,"name":"Кофе растворимый","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"brand":"Jardin","unit":"g","default":100,"category":"Магнит"},
    {"id":396,"name":"Напиток кофейный 3в1","calories":420,"protein":3,"fat":8,"carbs":86,"brand":"MacCoffee","unit":"g","default":100,"category":"Магнит"},
    {"id":397,"name":"Кофе растворимый","calories":340,"protein":18.6,"fat":0.1,"carbs":65.4,"brand":"Fresco","unit":"g","default":100,"category":"Магнит"},
    {"id":398,"name":"Кофе растворимый","calories":14,"protein":0.3,"fat":0,"carbs":0.5,"brand":"Московская кофейня","unit":"g","default":100,"category":"Магнит"},
    {"id":399,"name":"Чебурек с мясом","calories":440,"protein":10,"fat":35,"carbs":21.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":400,"name":"Сдоба Смаковница","calories":290,"protein":7.4,"fat":8,"carbs":47.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":401,"name":"Пампушки с чесноком","calories":299,"protein":7.7,"fat":6.6,"carbs":52.3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":402,"name":"Слойка с вишней","calories":424,"protein":7.1,"fat":24.8,"carbs":43.2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":403,"name":"Мини-маффины Клубника","calories":340,"protein":4,"fat":12,"carbs":54,"brand":"Kovis","unit":"g","default":100,"category":"Магнит"},
    {"id":404,"name":"Булочка со вкусом банана","calories":354,"protein":7.7,"fat":14.3,"carbs":48.5,"brand":"Lejinji","unit":"g","default":100,"category":"Магнит"},
    {"id":405,"name":"Крабовое мясо охлажденное","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":406,"name":"Крабовое мясо замороженное","calories":69,"protein":7,"fat":10,"carbs":0.2,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":407,"name":"Крабовые палочки охлажденные","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":408,"name":"Мясо сурими","calories":100,"protein":5.2,"fat":5,"carbs":18.6,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":409,"name":"Крабовые палочки замороженные","calories":70,"protein":6.3,"fat":0.1,"carbs":19.7,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":410,"name":"Крабовые палочки с мясом натурального краба","calories":83,"protein":8.5,"fat":0.5,"carbs":11.1,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":411,"name":"Крабовые палочки охлажденные","calories":121,"protein":7.2,"fat":0.8,"carbs":21.2,"brand":"Vici","unit":"g","default":100,"category":"Магнит"},
    {"id":412,"name":"Крабовые палочки","calories":97,"protein":6,"fat":1,"carbs":10,"brand":"Русское Море","unit":"g","default":100,"category":"Магнит"},
    {"id":413,"name":"Крабовые палочки с ароматом трюфеля","calories":95,"protein":9.9,"fat":0.5,"carbs":12.5,"brand":"Milegrin","unit":"g","default":100,"category":"Магнит"},
    {"id":414,"name":"Крупа Булгур","calories":360,"protein":12,"fat":1.5,"carbs":75,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":415,"name":"Мясо соевое Бефстроганов","calories":310,"protein":48.9,"fat":2.3,"carbs":8.9,"brand":"Ego","unit":"g","default":100,"category":"Магнит"},
    {"id":416,"name":"Чечевица Арабская","calories":310,"protein":24,"fat":1,"carbs":51,"brand":"Националь","unit":"g","default":100,"category":"Магнит"},
    {"id":417,"name":"Кисель клубничный","calories":360,"protein":0,"fat":0,"carbs":91,"brand":"Русский продукт","unit":"g","default":100,"category":"Магнит"},
    {"id":418,"name":"Рис Экстра Восточный шлифованный","calories":350,"protein":7,"fat":1,"carbs":79,"brand":"Агро-Альянс","unit":"g","default":100,"category":"Магнит"},
    {"id":419,"name":"Рис Круглозерный шлифованный","calories":340,"protein":8,"fat":1,"carbs":72,"brand":"Увелка","unit":"g","default":100,"category":"Магнит"},
    {"id":420,"name":"Макароны Спагетти тонкие","calories":350,"protein":13,"fat":1.5,"carbs":72,"brand":"Шебекинские","unit":"g","default":100,"category":"Магнит"},
    {"id":421,"name":"Макароны Рожок полубублик","calories":350,"protein":13,"fat":1.5,"carbs":72,"brand":"Шебекинские","unit":"g","default":100,"category":"Магнит"},
    {"id":422,"name":"Вермишель Фунчоза","calories":340,"protein":1.5,"fat":1,"carbs":83,"brand":"Sen Soy Premium","unit":"g","default":100,"category":"Магнит"},
    {"id":423,"name":"Макароны Фузилли","calories":352,"protein":13,"fat":1.6,"carbs":70,"brand":"Gaetano Dapuzzo","unit":"g","default":100,"category":"Магнит"},
    {"id":424,"name":"Макароны Паста птитим","calories":330,"protein":12,"fat":1,"carbs":67,"brand":"Увелка","unit":"g","default":100,"category":"Магнит"},
    {"id":425,"name":"Макаронные изделия Пенне Ригате","calories":352,"protein":13,"fat":1.6,"carbs":70,"brand":"Gaetano Dapuzzo","unit":"g","default":100,"category":"Магнит"},
    {"id":426,"name":"Макароны Петушиные гребешки","calories":344,"protein":12.5,"fat":1.3,"carbs":70.5,"brand":"Makfa","unit":"g","default":100,"category":"Магнит"},
    {"id":427,"name":"Макароны Виток","calories":344,"protein":12.5,"fat":1.3,"carbs":70.5,"brand":"Makfa","unit":"g","default":100,"category":"Магнит"},
    {"id":428,"name":"Макароны Улитка Сабо","calories":350,"protein":13,"fat":1.5,"carbs":72,"brand":"Шебекинские","unit":"g","default":100,"category":"Магнит"},
    {"id":429,"name":"Макароны Перышки","calories":350,"protein":13,"fat":1.5,"carbs":72,"brand":"Шебекинские","unit":"g","default":100,"category":"Магнит"},
    {"id":430,"name":"Аскорбиновая кислота таблетки жевательные","calories":383,"protein":0,"fat":0,"carbs":96.6,"brand":"М Здоровье","unit":"g","default":100,"category":"Магнит"},
    {"id":431,"name":"Драже без сахара со вкусом смородины и базилика","calories":220,"protein":0,"fat":0,"carbs":93,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":432,"name":"Суфле с начинкой Кислое яблоко","calories":330,"protein":4,"fat":0,"carbs":77,"brand":"Пухлый Кролик","unit":"g","default":100,"category":"Магнит"},
    {"id":433,"name":"Маршмэллоу клубника ваниль","calories":340,"protein":0,"fat":2.5,"carbs":82,"brand":"Zerfer","unit":"g","default":100,"category":"Магнит"},
    {"id":434,"name":"Леденцы Кола","calories":11,"protein":0,"fat":0.1,"carbs":2.8,"brand":"Halls","unit":"g","default":100,"category":"Магнит"},
    {"id":435,"name":"Леденцы Coffee Candy","calories":442,"protein":1.2,"fat":9.3,"carbs":88.2,"brand":"Kopiko","unit":"g","default":100,"category":"Магнит"},
    {"id":436,"name":"Леденцы Cappuccino Candy","calories":454,"protein":0.7,"fat":12.1,"carbs":85.8,"brand":"Kopiko","unit":"g","default":100,"category":"Магнит"},
    {"id":437,"name":"Маршмэллоу Клубника-ваниль-банан","calories":350,"protein":0,"fat":0,"carbs":82.2,"brand":"Zerfer","unit":"g","default":100,"category":"Магнит"},
    {"id":438,"name":"Жевательная резинка Вишня","calories":200,"protein":0.4,"fat":2,"carbs":74,"brand":"Mentos","unit":"g","default":100,"category":"Магнит"},
    {"id":439,"name":"Молоко сгущенное 8.5%","calories":330,"protein":7,"fat":8.5,"carbs":56,"brand":"Алексеевское","unit":"g","default":100,"category":"Магнит"},
    {"id":440,"name":"Молочный кофейный напиток Frappe","calories":65,"protein":2.3,"fat":2.6,"carbs":8.6,"brand":"Natura Selection","unit":"g","default":100,"category":"Магнит"},
    {"id":441,"name":"Маргарин для выпечки 72%","calories":648,"protein":0,"fat":72,"carbs":0,"brand":"Пышка","unit":"g","default":100,"category":"Магнит"},
    {"id":442,"name":"Молоко пастеризованное 2.5%","calories":53,"protein":3,"fat":2.5,"carbs":4.7,"brand":"Кубанская буренка","unit":"g","default":100,"category":"Магнит"},
    {"id":443,"name":"Молоко пастеризованное 2.5%","calories":53,"protein":3,"fat":2.5,"carbs":4.7,"brand":"Молочная легенда","unit":"g","default":100,"category":"Магнит"},
    {"id":444,"name":"Молоко пастеризованное 2.5%","calories":54,"protein":3,"fat":2.5,"carbs":4.7,"brand":"Простоквашино","unit":"g","default":100,"category":"Магнит"},
    {"id":445,"name":"Молоко пастеризованное 3.4-6%","calories":61,"protein":2.8,"fat":6,"carbs":4.7,"brand":"Кубанский молочник","unit":"g","default":100,"category":"Магнит"},
    {"id":446,"name":"Маргарин сливочный 60%","calories":540,"protein":0.1,"fat":60,"carbs":0.8,"brand":"Добавкин","unit":"g","default":100,"category":"Магнит"},
    {"id":447,"name":"Молоко пастеризованное 3.2%","calories":60,"protein":3,"fat":3.2,"carbs":4.7,"brand":"Домик в Деревне","unit":"g","default":100,"category":"Магнит"},
    {"id":448,"name":"Питьевой йогурт малиновый пломбир","calories":78,"protein":2.8,"fat":2.7,"carbs":10.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":449,"name":"Творожок детский Малиновый пломбир","calories":104,"protein":7.3,"fat":3.9,"carbs":10,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":450,"name":"Каша детская жидкая молочная злаковая Груша","calories":75,"protein":3.1,"fat":2.7,"carbs":9.5,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":451,"name":"Творог детский Яблоко-банан 3.9%","calories":103,"protein":7.4,"fat":3.9,"carbs":9.5,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":452,"name":"Творог детский Клубника банан 3.8%","calories":106,"protein":7.2,"fat":3.8,"carbs":10.7,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":453,"name":"Каша детская жидкая молочная рисовая Яблоко","calories":76,"protein":3,"fat":2.7,"carbs":9.7,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":454,"name":"Трубочки для молока Ягодный микс","calories":400,"protein":0.2,"fat":0.8,"carbs":99,"brand":"Лео и Тиг","unit":"g","default":100,"category":"Магнит"},
    {"id":455,"name":"Биолакт детский клубника-банан 3%","calories":75,"protein":2.8,"fat":3,"carbs":9.2,"brand":"Тема","unit":"g","default":100,"category":"Магнит"},
    {"id":456,"name":"Биотворог Клубника банан 4%","calories":106,"protein":7.5,"fat":4,"carbs":10.1,"brand":"Тема","unit":"g","default":100,"category":"Магнит"},
    {"id":457,"name":"Биолакт без сахара 3.4%","calories":61,"protein":3,"fat":3.4,"carbs":4.7,"brand":"Тема","unit":"g","default":100,"category":"Магнит"},
    {"id":458,"name":"Мороженое пломбир 12%","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"brand":"Золотой Стандарт","unit":"g","default":100,"category":"Магнит"},
    {"id":459,"name":"Мороженое Пломбир с шоколадной глазурью","calories":243,"protein":4,"fat":17,"carbs":20,"brand":"Коровка из Кореновки","unit":"g","default":100,"category":"Магнит"},
    {"id":460,"name":"Мороженое Пломбир Крем-Брюле","calories":216,"protein":3,"fat":14,"carbs":19,"brand":"Коровка из Кореновки","unit":"g","default":100,"category":"Магнит"},
    {"id":461,"name":"Мороженое шоколадное","calories":125,"protein":1.4,"fat":3.6,"carbs":23,"brand":"Seoju Mallow","unit":"g","default":100,"category":"Магнит"},
    {"id":462,"name":"Жимолость в белом шоколаде быстрозамороженная","calories":336,"protein":3.6,"fat":20.7,"carbs":33.6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":463,"name":"Мороженое пломбир ванильный","calories":240,"protein":3.5,"fat":15,"carbs":22,"brand":"Коровка из Кореновки","unit":"g","default":100,"category":"Магнит"},
    {"id":464,"name":"Мороженое эскимо Dubai фисташка с катаифи","calories":339,"protein":4.5,"fat":20,"carbs":34.1,"brand":"Магнат","unit":"g","default":100,"category":"Магнит"},
    {"id":465,"name":"Мороженое пломбир ванильный с черникой","calories":232,"protein":3.1,"fat":10.8,"carbs":29.8,"brand":"Золотой Стандарт","unit":"g","default":100,"category":"Магнит"},
    {"id":466,"name":"Мороженое ореховое пралине в рожке","calories":292,"protein":5,"fat":13.4,"carbs":37.3,"brand":"Коркунов","unit":"g","default":100,"category":"Магнит"},
    {"id":467,"name":"Мороженое эскимо с рисовыми шариками в малиновой глазури","calories":310,"protein":4,"fat":21.2,"carbs":26.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":468,"name":"Пюре яблоко-банан-клубника-киви","calories":52,"protein":0,"fat":0,"carbs":13,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":469,"name":"Фруктовое пюре Яблоко","calories":52,"protein":0,"fat":0,"carbs":13,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":470,"name":"Фруктовые кусочки яблоко клубника","calories":337,"protein":1.8,"fat":1.3,"carbs":79.6,"brand":"Когда Я Вырасту","unit":"g","default":100,"category":"Магнит"},
    {"id":471,"name":"Палочки кукурузные сладкие","calories":510,"protein":4,"fat":23,"carbs":72,"brand":"Кузя Лакомкин","unit":"g","default":100,"category":"Магнит"},
    {"id":472,"name":"Печенье детское обогащенное кальцием","calories":410,"protein":9,"fat":11,"carbs":74,"brand":"Бонди Бегемотик","unit":"g","default":100,"category":"Магнит"},
    {"id":473,"name":"Пюре фруктовое из яблок","calories":60,"protein":0,"fat":0,"carbs":15,"brand":"Ладушки","unit":"g","default":100,"category":"Магнит"},
    {"id":474,"name":"Снэки Звездочки рисово-пшеничные Банан и малина","calories":423,"protein":9.7,"fat":8.6,"carbs":76,"brand":"Gerber","unit":"g","default":100,"category":"Магнит"},
    {"id":475,"name":"Печенье с начинкой яблоко-персик","calories":397,"protein":5.5,"fat":9.7,"carbs":72,"brand":"Фрутоняня","unit":"g","default":100,"category":"Магнит"},
    {"id":476,"name":"Печенье Детское обогащенное кальцием","calories":410,"protein":7.5,"fat":8.5,"carbs":75,"brand":"Когда я вырасту","unit":"g","default":100,"category":"Магнит"},
    {"id":477,"name":"Детское фруктово-ягодное пюре Яблоко-ежевика","calories":52,"protein":0,"fat":0,"carbs":13,"brand":"Агуша","unit":"g","default":100,"category":"Магнит"},
    {"id":478,"name":"Хинкали Грузинские","calories":630,"protein":7,"fat":50,"carbs":38,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":479,"name":"Хинкали ручной работы","calories":160,"protein":10,"fat":4,"carbs":22,"brand":"Сибирская Коллекция","unit":"g","default":100,"category":"Магнит"},
    {"id":480,"name":"Пельмени фирменные свино-говяжьи","calories":322,"protein":10,"fat":18,"carbs":30,"brand":"Тавр","unit":"g","default":100,"category":"Магнит"},
    {"id":481,"name":"Пельмени Бигбули с мясом","calories":240,"protein":8,"fat":10,"carbs":29,"brand":"Горячая штучка","unit":"g","default":100,"category":"Магнит"},
    {"id":482,"name":"Дамплинги Королевские свинина и овощи","calories":238,"protein":7.7,"fat":14.7,"carbs":20.1,"brand":"Бибиго","unit":"g","default":100,"category":"Магнит"},
    {"id":483,"name":"Дамплинги Королевские курица овощи","calories":135,"protein":9.7,"fat":4.7,"carbs":17.7,"brand":"Бибиго","unit":"g","default":100,"category":"Магнит"},
    {"id":484,"name":"Пельмени Сочные с фаршем на мраморной говядине","calories":217,"protein":9,"fat":11,"carbs":20.7,"brand":"Сибирская Коллекция","unit":"g","default":100,"category":"Магнит"},
    {"id":485,"name":"Пельмени отборная говядина","calories":220,"protein":8,"fat":9,"carbs":28,"brand":"Caesar Elite","unit":"g","default":100,"category":"Магнит"},
    {"id":486,"name":"Пельмени Бульмени говядина-свинина","calories":240,"protein":8,"fat":10,"carbs":29,"brand":"Горячая штучка","unit":"g","default":100,"category":"Магнит"},
    {"id":487,"name":"Пельмени Традиционные","calories":26,"protein":14,"fat":26,"carbs":0,"brand":"Выселковские","unit":"g","default":100,"category":"Магнит"},
    {"id":488,"name":"Чак-чак","calories":460,"protein":4.9,"fat":31,"carbs":40,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":489,"name":"Печенье с кусочками молочного шоколада","calories":491,"protein":6.3,"fat":24,"carbs":62,"brand":"Milka","unit":"g","default":100,"category":"Магнит"},
    {"id":490,"name":"Козинаки Классические неглазированные","calories":479,"protein":14,"fat":35,"carbs":27,"brand":"Богучарские","unit":"g","default":100,"category":"Магнит"},
    {"id":491,"name":"Рахат-лукум","calories":350,"protein":0.2,"fat":0,"carbs":86,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":492,"name":"Рахат-лукум Ассорти","calories":350,"protein":1,"fat":1,"carbs":87,"brand":"Азовская КФ","unit":"g","default":100,"category":"Магнит"},
    {"id":493,"name":"Торнадо с творожной начинкой","calories":486,"protein":7,"fat":22.7,"carbs":64.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":494,"name":"Печенье","calories":500,"protein":7,"fat":27,"carbs":57,"brand":"Choco Boy","unit":"g","default":100,"category":"Магнит"},
    {"id":495,"name":"Печенье","calories":470,"protein":5,"fat":23,"carbs":60,"brand":"Goute Coffee","unit":"g","default":100,"category":"Магнит"},
    {"id":496,"name":"Пиво светлое фильтрованное безалкогольное","calories":46,"protein":0,"fat":0,"carbs":4.7,"brand":"Бавария","unit":"g","default":100,"category":"Магнит"},
    {"id":497,"name":"Пиво светлое фильтрованное безалкогольное","calories":25,"protein":0,"fat":0,"carbs":2.9,"brand":"Тихорецкое","unit":"g","default":100,"category":"Магнит"},
    {"id":498,"name":"Пивной напиток нефильтрованный безалкогольный","calories":31,"protein":0,"fat":0,"carbs":4.2,"brand":"Hoegaarden","unit":"g","default":100,"category":"Магнит"},
    {"id":499,"name":"Филе бедра индейки","calories":150,"protein":16,"fat":9,"carbs":0,"brand":"Индилайт","unit":"g","default":100,"category":"Магнит"},
    {"id":500,"name":"Азу из индейки кусковая","calories":110,"protein":22,"fat":2.5,"carbs":0,"brand":"М Свежесть","unit":"g","default":100,"category":"Магнит"},
    {"id":501,"name":"Гуляш из филе бедра индейки","calories":150,"protein":19,"fat":8,"carbs":0,"brand":"Индилайт","unit":"g","default":100,"category":"Магнит"},
    {"id":502,"name":"Филе голени индейки","calories":130,"protein":19,"fat":6,"carbs":0,"brand":"Индилайт","unit":"g","default":100,"category":"Магнит"},
    {"id":503,"name":"Бедро цыпленка-бройлера охлажденное","calories":210,"protein":17,"fat":16,"carbs":0,"brand":"Петелинка","unit":"g","default":100,"category":"Магнит"},
    {"id":504,"name":"Печень цыпленка-бройлера","calories":160,"protein":18,"fat":10,"carbs":0,"brand":"Благояр","unit":"g","default":100,"category":"Магнит"},
    {"id":505,"name":"Масло подсолнечное рафинированное","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Слобода","unit":"g","default":100,"category":"Магнит"},
    {"id":506,"name":"Подсолнечное масло рафинированное","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Россиянка","unit":"g","default":100,"category":"Магнит"},
    {"id":507,"name":"Масло подсолнечное с добавлением оливкового","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Семейные секреты","unit":"g","default":100,"category":"Магнит"},
    {"id":508,"name":"Масло подсолнечное","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Слобода","unit":"g","default":100,"category":"Магнит"},
    {"id":509,"name":"Масло кокосовое","calories":900,"protein":0,"fat":99.9,"carbs":0,"brand":"Delicato","unit":"g","default":100,"category":"Магнит"},
    {"id":510,"name":"Масло оливковое Extra Virgin","calories":828,"protein":0,"fat":92,"carbs":0,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":511,"name":"Масло подсолнечное рафинированное","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Золотая семечка","unit":"g","default":100,"category":"Магнит"},
    {"id":512,"name":"Масло подсолнечное","calories":899,"protein":0,"fat":99.9,"carbs":0,"brand":"Mr. Ricco","unit":"g","default":100,"category":"Магнит"},
    {"id":513,"name":"Масло льняное нерафинированное","calories":900,"protein":0,"fat":100,"carbs":0,"brand":"Здоровое меню","unit":"g","default":100,"category":"Магнит"},
    {"id":514,"name":"Карась","calories":87,"protein":17.7,"fat":1.8,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":515,"name":"Селедка традиционного посола","calories":420,"protein":10,"fat":38,"carbs":0,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":516,"name":"Филе сельди к картошке Традиционное","calories":440,"protein":9,"fat":45,"carbs":0,"brand":"Русское море","unit":"g","default":100,"category":"Магнит"},
    {"id":517,"name":"Паутинка из горбуши","calories":181,"protein":35.1,"fat":45,"carbs":0,"brand":"Solonina","unit":"g","default":100,"category":"Магнит"},
    {"id":518,"name":"Минтай филе","calories":89,"protein":20,"fat":1,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":519,"name":"Салат Оливье","calories":221,"protein":4.1,"fat":19.8,"carbs":6.5,"brand":"М Кухня","unit":"g","default":100,"category":"Магнит"},
    {"id":520,"name":"Салат Цезарь","calories":203,"protein":8.2,"fat":16,"carbs":6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":521,"name":"Салат Русская красавица","calories":219,"protein":5.4,"fat":18.7,"carbs":7.3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":522,"name":"Салат Мимоза","calories":188,"protein":7.1,"fat":15.4,"carbs":5.3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":523,"name":"Салат из крабовых палочек","calories":4,"protein":2.3,"fat":12,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":524,"name":"Кунжут","calories":570,"protein":19,"fat":49,"carbs":12,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":525,"name":"Кориандр молотый","calories":298,"protein":21.9,"fat":4.8,"carbs":52.1,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":526,"name":"Лист лавровый сухой","calories":310,"protein":0,"fat":0,"carbs":19,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":527,"name":"Укроп сушеный","calories":75,"protein":0,"fat":0,"carbs":19,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":528,"name":"Базилик сушеный","calories":215,"protein":14,"fat":4,"carbs":10,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":529,"name":"Чеснок сушеный","calories":360,"protein":6.5,"fat":6,"carbs":69,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":530,"name":"Перец душистый целый","calories":263,"protein":6.1,"fat":8.7,"carbs":50.5,"brand":"Восточный гость","unit":"g","default":100,"category":"Магнит"},
    {"id":531,"name":"Морс облепиховый","calories":40,"protein":0,"fat":0,"carbs":10,"brand":"М Кухня","unit":"g","default":100,"category":"Магнит"},
    {"id":532,"name":"Смузи груша-шпинат-мята","calories":65,"protein":0,"fat":0,"carbs":16,"brand":"М Кухня","unit":"g","default":100,"category":"Магнит"},
    {"id":533,"name":"Смузи Киви-Ананас-Манго-Яблоко","calories":60,"protein":0,"fat":0,"carbs":15,"brand":"J7","unit":"g","default":100,"category":"Магнит"},
    {"id":534,"name":"Сок яблочный прямого отжима","calories":38,"protein":0,"fat":0,"carbs":9.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":535,"name":"Смузи манго-персик-яблоко со злаками","calories":60,"protein":0,"fat":0,"carbs":15,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":536,"name":"Сок мандарина прямого отжима","calories":44,"protein":0,"fat":0,"carbs":11,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":537,"name":"Яблочно-морковный сок прямого отжима","calories":40,"protein":0.6,"fat":0.3,"carbs":8.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":538,"name":"Напиток фруктовый чай лимон-лайм","calories":39,"protein":0,"fat":0,"carbs":9.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":539,"name":"Палочки кукурузные сыр","calories":470,"protein":7,"fat":22,"carbs":62,"brand":"Cheetos","unit":"g","default":100,"category":"Магнит"},
    {"id":540,"name":"Кукурузные палочки Кетчуп","calories":490,"protein":7.5,"fat":23,"carbs":63,"brand":"Cheetos","unit":"g","default":100,"category":"Магнит"},
    {"id":541,"name":"Кукурузные палочки Пицца","calories":490,"protein":8,"fat":24,"carbs":60,"brand":"Cheetos","unit":"g","default":100,"category":"Магнит"},
    {"id":542,"name":"Сыр Чечил спагетти 35%","calories":337,"protein":26,"fat":26,"carbs":0,"brand":"President","unit":"g","default":100,"category":"Магнит"},
    {"id":543,"name":"Семечки полосатые с солью","calories":570,"protein":22.8,"fat":42.6,"carbs":19.5,"brand":"От Мартина","unit":"g","default":100,"category":"Магнит"},
    {"id":544,"name":"Семечки полосатые жареные с солью","calories":600,"protein":24,"fat":47.5,"carbs":19,"brand":"Крутой Окер","unit":"g","default":100,"category":"Магнит"},
    {"id":545,"name":"Рыба сушеная к пиву","calories":240,"protein":42,"fat":8,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":546,"name":"Семечки подсолнечника жареные","calories":660,"protein":27,"fat":58,"carbs":9,"brand":"Джинн Солнечные","unit":"g","default":100,"category":"Магнит"},
    {"id":547,"name":"Напиток Апельсиновое манго","calories":50,"protein":0.2,"fat":0,"carbs":12,"brand":"Любимый","unit":"g","default":100,"category":"Магнит"},
    {"id":548,"name":"Напиток Яблоко","calories":40,"protein":0,"fat":0,"carbs":10,"brand":"Любимый","unit":"g","default":100,"category":"Магнит"},
    {"id":549,"name":"Сок апельсиновый с мякотью","calories":35,"protein":0.7,"fat":0,"carbs":9,"brand":"J7","unit":"g","default":100,"category":"Магнит"},
    {"id":550,"name":"Сок из зеленых яблок","calories":46,"protein":0,"fat":0,"carbs":11.5,"brand":"Сады Придонья","unit":"g","default":100,"category":"Магнит"},
    {"id":551,"name":"Морс из клубники-вишни-смородины","calories":40,"protein":0,"fat":0,"carbs":10,"brand":"М Кухня","unit":"g","default":100,"category":"Магнит"},
    {"id":552,"name":"Нектар Мультифрукт","calories":48,"protein":0,"fat":0,"carbs":12,"brand":"Добрый","unit":"g","default":100,"category":"Магнит"},
    {"id":553,"name":"Сок Березовый","calories":12,"protein":0,"fat":0,"carbs":3,"brand":"Великая Русь","unit":"g","default":100,"category":"Магнит"},
    {"id":554,"name":"Напиток сокосодержащий обогащенный","calories":32,"protein":0,"fat":0,"carbs":8,"brand":"Fitogugu Energy","unit":"g","default":100,"category":"Магнит"},
    {"id":555,"name":"Напиток Земляничное лето","calories":35,"protein":0,"fat":0,"carbs":9,"brand":"Любимый","unit":"g","default":100,"category":"Магнит"},
    {"id":556,"name":"Сок Яблочный","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":557,"name":"Горчица Русская столовая","calories":181,"protein":9.6,"fat":10.9,"carbs":11,"brand":"Махеевъ","unit":"g","default":100,"category":"Магнит"},
    {"id":558,"name":"Уксус Столовый 9%","calories":32,"protein":0.1,"fat":0,"carbs":3,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":559,"name":"Кислота уксусная 70%","calories":18,"protein":0,"fat":0,"carbs":0.4,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":560,"name":"Соус Терияки деликатесный","calories":140,"protein":1.2,"fat":0,"carbs":33.5,"brand":"Махеевъ","unit":"g","default":100,"category":"Магнит"},
    {"id":561,"name":"Майонез Оливковый 67%","calories":620,"protein":0.3,"fat":67,"carbs":3,"brand":"Слобода","unit":"g","default":100,"category":"Магнит"},
    {"id":562,"name":"Уксус столовый 9%","calories":32,"protein":0,"fat":0,"carbs":0.1,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":563,"name":"Соус Бургер","calories":330,"protein":0.7,"fat":30,"carbs":14.5,"brand":"Astoria","unit":"g","default":100,"category":"Магнит"},
    {"id":564,"name":"Соус для приготовления Якитори","calories":190,"protein":2.4,"fat":4.1,"carbs":36,"brand":"Sen Soy","unit":"g","default":100,"category":"Магнит"},
    {"id":565,"name":"Яблочный уксус 6%","calories":40,"protein":0.4,"fat":0.1,"carbs":0.9,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":566,"name":"Семена льна","calories":581,"protein":22.2,"fat":43.4,"carbs":21.1,"brand":"Секреты природы","unit":"g","default":100,"category":"Магнит"},
    {"id":567,"name":"Смесь орехово-фруктовая Premium","calories":500,"protein":10,"fat":32,"carbs":42,"brand":"Premiere of Taste","unit":"g","default":100,"category":"Магнит"},
    {"id":568,"name":"Смесь фруктово-ореховая жареная","calories":420,"protein":7,"fat":20,"carbs":52,"brand":"Восточный Гость","unit":"g","default":100,"category":"Магнит"},
    {"id":569,"name":"Сыр Российский весовой","calories":328,"protein":24.5,"fat":25.5,"carbs":0,"brand":"Моя цена","unit":"g","default":100,"category":"Магнит"},
    {"id":570,"name":"Сыр плавленый Дружба 45%","calories":240,"protein":5.7,"fat":18,"carbs":13.9,"brand":"Карат","unit":"g","default":100,"category":"Магнит"},
    {"id":571,"name":"Сыр 45%","calories":347,"protein":27,"fat":26.5,"carbs":0,"brand":"Белебеевский","unit":"g","default":100,"category":"Магнит"},
    {"id":572,"name":"Сыр плавленый Шоколадный 30%","calories":267,"protein":6.2,"fat":15.3,"carbs":26.1,"brand":"Карат","unit":"g","default":100,"category":"Магнит"},
    {"id":573,"name":"Сыр Тильзитер Премиум 45%","calories":329,"protein":25.5,"fat":25,"carbs":0,"brand":"Вкуснотеево","unit":"g","default":100,"category":"Магнит"},
    {"id":574,"name":"Сыр тёртый микс 4 сыра 45%","calories":344,"protein":25,"fat":26.5,"carbs":1.2,"brand":"Вкуснотеево","unit":"g","default":100,"category":"Магнит"},
    {"id":575,"name":"Продукт рассольный Сиртаки Original 55%","calories":235,"protein":7,"fat":22,"carbs":2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":576,"name":"Сыр Маскарпоне 78%","calories":388,"protein":4.1,"fat":40,"carbs":2.9,"brand":"Bonfesto","unit":"g","default":100,"category":"Магнит"},
    {"id":577,"name":"Сыр Российский 50%","calories":347,"protein":22.5,"fat":28.5,"carbs":0,"brand":"Николаевские сыроварни","unit":"g","default":100,"category":"Магнит"},
    {"id":578,"name":"Сыр Сливочный 50%","calories":350,"protein":26.7,"fat":27,"carbs":0,"brand":"Село Зеленое","unit":"g","default":100,"category":"Магнит"},
    {"id":579,"name":"Эклеры с белковым кремом","calories":341,"protein":5.3,"fat":19.5,"carbs":36.1,"brand":"Mirel","unit":"g","default":100,"category":"Магнит"},
    {"id":580,"name":"Пирожное Трубочка слоеная","calories":390,"protein":6.5,"fat":18,"carbs":51,"brand":"Золотой колос","unit":"g","default":100,"category":"Магнит"},
    {"id":581,"name":"Пирожное Корзинка с белковым кремом","calories":360,"protein":4,"fat":12,"carbs":58,"brand":"Золотой колос","unit":"g","default":100,"category":"Магнит"},
    {"id":582,"name":"Пирожное Картошка Классическое","calories":443,"protein":5.2,"fat":27.1,"carbs":44.6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":583,"name":"Торт бисквитный Сметанный","calories":210,"protein":3.4,"fat":9.2,"carbs":29.3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":584,"name":"Пирожное бисквитное Тирамису Дубайский шоколад","calories":415,"protein":4.5,"fat":18.7,"carbs":27.6,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":585,"name":"Пирожные Профитроли с ванильным кремом","calories":395,"protein":3,"fat":17,"carbs":56.8,"brand":"Фарше","unit":"g","default":100,"category":"Магнит"},
    {"id":586,"name":"Пирожное Пончо","calories":270,"protein":3,"fat":17,"carbs":27,"brand":"Метрополис","unit":"g","default":100,"category":"Магнит"},
    {"id":587,"name":"Пирожное Заварное с заварным кремом","calories":310,"protein":5,"fat":10,"carbs":51,"brand":"Золотой колос","unit":"g","default":100,"category":"Магнит"},
    {"id":588,"name":"Торт Бельгийский шоколадный заливной","calories":317,"protein":4.6,"fat":16.4,"carbs":37.7,"brand":"Фарше","unit":"g","default":100,"category":"Магнит"},
    {"id":589,"name":"Батон Летний дар нарезанный","calories":266,"protein":8,"fat":3,"carbs":8,"brand":"Краснодарский хлебозавод","unit":"g","default":100,"category":"Магнит"},
    {"id":590,"name":"Лаваш Армянский бездрожжевой","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"brand":"Анрик","unit":"g","default":100,"category":"Магнит"},
    {"id":591,"name":"Батон Нарезной нарезанный","calories":264,"protein":7.5,"fat":2.9,"carbs":50.9,"brand":"Аютинский хлеб","unit":"g","default":100,"category":"Магнит"},
    {"id":592,"name":"Батон Летний дар","calories":266,"protein":8,"fat":3,"carbs":8,"brand":"Краснодарский хлебозавод","unit":"g","default":100,"category":"Магнит"},
    {"id":593,"name":"Хлеб Тостовый пшеничный нарезанный","calories":268,"protein":7.7,"fat":2.7,"carbs":52,"brand":"Аютинский хлеб","unit":"g","default":100,"category":"Магнит"},
    {"id":594,"name":"Хлеб Бородинский ржаной нарезанный","calories":207,"protein":6.8,"fat":1.3,"carbs":41.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":595,"name":"Хлеб Тостовый половинка нарезанный","calories":187,"protein":5.4,"fat":0.8,"carbs":39.7,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":596,"name":"Лаваш тонкий","calories":297,"protein":8.9,"fat":2.2,"carbs":59.2,"brand":"Хлеб Продукт","unit":"g","default":100,"category":"Магнит"},
    {"id":597,"name":"Лаваш Армянский Классический","calories":280,"protein":9,"fat":1,"carbs":56,"brand":"Каравай Кубани","unit":"g","default":100,"category":"Магнит"},
    {"id":598,"name":"Хлеб Ремесленный на закваске нарезанный","calories":190,"protein":6.5,"fat":0.7,"carbs":39,"brand":"Аютинский","unit":"g","default":100,"category":"Магнит"},
    {"id":599,"name":"Чай черный холодный Малина","calories":20,"protein":0,"fat":0,"carbs":4.9,"brand":"Lipton","unit":"g","default":100,"category":"Магнит"},
    {"id":600,"name":"Чай черный холодный Лимон","calories":19,"protein":0,"fat":0,"carbs":4.6,"brand":"Lipton","unit":"g","default":100,"category":"Магнит"},
    {"id":601,"name":"Квас традиционный пастеризованный","calories":30,"protein":0,"fat":0,"carbs":6.5,"brand":"Староминский","unit":"g","default":100,"category":"Магнит"},
    {"id":602,"name":"Квас двойного брожения","calories":30,"protein":0,"fat":0,"carbs":5.5,"brand":"Очаковский","unit":"g","default":100,"category":"Магнит"},
    {"id":603,"name":"Квас светлый фильтрованный","calories":40,"protein":0,"fat":0,"carbs":8.5,"brand":"Желтая Бочка","unit":"g","default":100,"category":"Магнит"},
    {"id":604,"name":"Напиток Kombucha Classic натуральный","calories":30,"protein":0.1,"fat":0,"carbs":7.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":605,"name":"Чай зеленый холодный","calories":19,"protein":0,"fat":0,"carbs":4.6,"brand":"Lipton","unit":"g","default":100,"category":"Магнит"},
    {"id":606,"name":"Напиток Kombucha Immuno натуральный","calories":30,"protein":0.1,"fat":0,"carbs":7.5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":607,"name":"Чай черный холодный Персик","calories":21,"protein":0,"fat":0,"carbs":5,"brand":"Lipton","unit":"g","default":100,"category":"Магнит"},
    {"id":608,"name":"Напиток Ice Tea Чай зеленый холодный Малина","calories":30,"protein":0,"fat":0,"carbs":7,"brand":"Фрутмотив","unit":"g","default":100,"category":"Магнит"},
    {"id":609,"name":"Чай черный","calories":2,"protein":0.1,"fat":0,"carbs":0,"brand":"Richard Royal","unit":"g","default":100,"category":"Магнит"},
    {"id":610,"name":"Чай черный Earl Grey","calories":3,"protein":0,"fat":0,"carbs":0,"brand":"Richard Royal","unit":"g","default":100,"category":"Магнит"},
    {"id":611,"name":"Чай черный Golden Ceylon","calories":15,"protein":0.5,"fat":0.5,"carbs":2.1,"brand":"Greenfield","unit":"g","default":100,"category":"Магнит"},
    {"id":612,"name":"Добавка в чай Земляника","calories":189,"protein":11,"fat":2,"carbs":32,"brand":"Bioniq","unit":"g","default":100,"category":"Магнит"},
    {"id":613,"name":"Чайный напиток Immune","calories":5,"protein":0,"fat":0,"carbs":0,"brand":"Richard Functiona","unit":"g","default":100,"category":"Магнит"},
    {"id":614,"name":"Добавка в чай Лаванда","calories":23,"protein":1,"fat":1,"carbs":0.2,"brand":"Bioniq","unit":"g","default":100,"category":"Магнит"},
    {"id":615,"name":"Чай черный клубника-сливки","calories":1,"protein":0,"fat":0,"carbs":0,"brand":"Ahmad Tea","unit":"g","default":100,"category":"Магнит"},
    {"id":616,"name":"Чай черный Kenyan Sunrise","calories":15,"protein":0.5,"fat":0.5,"carbs":2.1,"brand":"Greenfield","unit":"g","default":100,"category":"Магнит"},
    {"id":617,"name":"Сухарики ржаные","calories":400,"protein":12,"fat":7.5,"carbs":71,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":618,"name":"Чипсы рифленые чили и лайм","calories":550,"protein":6,"fat":32,"carbs":53,"brand":"Lays","unit":"g","default":100,"category":"Магнит"},
    {"id":619,"name":"Сухарики Багет Королевский краб","calories":440,"protein":10,"fat":15,"carbs":67,"brand":"Хрусteam","unit":"g","default":100,"category":"Магнит"},
    {"id":620,"name":"Чипсы рифленые пряная креветка","calories":550,"protein":6,"fat":32,"carbs":53,"brand":"Lays","unit":"g","default":100,"category":"Магнит"},
    {"id":621,"name":"Сухарики Багет Томат и зелень","calories":440,"protein":10,"fat":15,"carbs":67,"brand":"Хрусteam","unit":"g","default":100,"category":"Магнит"},
    {"id":622,"name":"Луковые кольца со вкусом сметана и лук","calories":480,"protein":9,"fat":21,"carbs":63,"brand":"Solo Nina","unit":"g","default":100,"category":"Магнит"},
    {"id":623,"name":"Чипсы лимон и уксус","calories":560,"protein":3,"fat":37,"carbs":52,"brand":"Pattes","unit":"g","default":100,"category":"Магнит"},
    {"id":624,"name":"Чипсы Бекон","calories":500,"protein":7.5,"fat":23,"carbs":65,"brand":"Binggrae","unit":"g","default":100,"category":"Магнит"},
    {"id":625,"name":"Крендель хрустящий с розмарином","calories":450,"protein":10,"fat":14,"carbs":70,"brand":"Saltletts","unit":"g","default":100,"category":"Магнит"},
    {"id":626,"name":"Куриная грудка филе","calories":165,"protein":31,"fat":3.6,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":627,"name":"Куриное филе бедро","calories":210,"protein":18,"fat":15,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":628,"name":"Говядина вырезка","calories":250,"protein":25,"fat":16,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":629,"name":"Свинина корейка","calories":310,"protein":20,"fat":25,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":630,"name":"Индейка филе грудки","calories":135,"protein":25,"fat":3,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":631,"name":"Яйцо перепелиное","calories":158,"protein":13,"fat":11,"carbs":0.5,"brand":"Магнит","unit":"pcs","default":10,"category":"Магнит"},
    {"id":632,"name":"Семга филе","calories":208,"protein":20,"fat":13,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":633,"name":"Форель филе","calories":190,"protein":20,"fat":12,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":634,"name":"Горбуша филе","calories":150,"protein":20.5,"fat":7,"carbs":0,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":635,"name":"Молоко 0.5% обезжиренное","calories":35,"protein":3,"fat":0.5,"carbs":4.8,"brand":"Магнит","unit":"ml","default":200,"category":"Магнит"},
    {"id":636,"name":"Кефир 0% обезжиренный","calories":30,"protein":3,"fat":0,"carbs":4,"brand":"Магнит","unit":"ml","default":200,"category":"Магнит"},
    {"id":637,"name":"Творог 0% обезжиренный","calories":71,"protein":16,"fat":0,"carbs":2,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":638,"name":"Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":639,"name":"Пармезан 42%","calories":431,"protein":38,"fat":29,"carbs":2,"brand":"Магнит","unit":"g","default":30,"category":"Магнит"},
    {"id":640,"name":"Киноа","calories":120,"protein":4.4,"fat":1.9,"carbs":21,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":641,"name":"Горошек зеленый","calories":55,"protein":3,"fat":0.2,"carbs":8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":642,"name":"Кукуруза сладкая","calories":93,"protein":2.5,"fat":1.2,"carbs":17,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":643,"name":"Лук репчатый","calories":40,"protein":1.1,"fat":0.1,"carbs":9,"brand":"Магнит","unit":"g","default":50,"category":"Магнит"},
    {"id":644,"name":"Капуста белокочанная","calories":25,"protein":1.3,"fat":0.1,"carbs":5,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":645,"name":"Укроп","calories":43,"protein":3.5,"fat":1.1,"carbs":7,"brand":"Магнит","unit":"g","default":10,"category":"Магнит"},
    {"id":646,"name":"Лимон","calories":29,"protein":1.1,"fat":0.3,"carbs":9.3,"brand":"Магнит","unit":"g","default":50,"category":"Магнит"},
    {"id":647,"name":"Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":21,"brand":"Магнит","unit":"g","default":30,"category":"Магнит"},
    {"id":648,"name":"Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":14,"brand":"Магнит","unit":"g","default":30,"category":"Магнит"},
    {"id":649,"name":"Мед натуральный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Магнит","unit":"g","default":20,"category":"Магнит"},
    {"id":650,"name":"Хлеб цельнозерновой","calories":250,"protein":8,"fat":3,"carbs":45,"brand":"Магнит","unit":"g","default":50,"category":"Магнит"},
    {"id":651,"name":"Мюсли","calories":350,"protein":8,"fat":5,"carbs":70,"brand":"Магнит","unit":"g","default":50,"category":"Магнит"},
    {"id":652,"name":"Овощная смесь Гавайская","calories":50,"protein":2,"fat":0.5,"carbs":10,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":653,"name":"Блины с творогом","calories":210,"protein":9,"fat":10.5,"carbs":19.8,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"},
    {"id":654,"name":"Куриные наггетсы 6 шт","calories":268,"protein":17,"fat":14,"carbs":19,"brand":"Магнит","unit":"pcs","default":6,"category":"Магнит"},
    {"id":655,"name":"Картофель фри","calories":310,"protein":3.5,"fat":15,"carbs":40,"brand":"Магнит","unit":"g","default":100,"category":"Магнит"}
]
];

// ========== 2. ВКУСНО И ТОЧКА (ПОЛНОЕ МЕНЮ) ==========
const VKUSNO_PRODUCTS = [
      [
    {"id":101,"name":"🍔 Гамбургер","calories":251,"protein":13,"fat":8.8,"carbs":29,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":102,"name":"🍔 Чизбургер","calories":302,"protein":16,"fat":13,"carbs":31,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":103,"name":"🍔 Чикенбургер","calories":339,"protein":16,"fat":13,"carbs":31,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":104,"name":"🍔 Двойной Чизбургер","calories":410,"protein":25,"fat":21,"carbs":38,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":105,"name":"🍔 Фиш Бургер","calories":339,"protein":15,"fat":16,"carbs":34,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":106,"name":"🍔 Двойной Фиш Бургер","calories":440,"protein":22,"fat":21,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":107,"name":"🍔 Биг Хит","calories":524,"protein":27,"fat":28,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":228,"category":"Вкусно и точка"},
    {"id":108,"name":"🍔 Двойной Биг Хит","calories":711,"protein":43,"fat":41,"carbs":41,"brand":"Вкусно и точка","unit":"g","default":300,"category":"Вкусно и точка"},
    {"id":109,"name":"🍔 Биг Хит Бекон","calories":552,"protein":29,"fat":30,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":110,"name":"🍔 Гранд","calories":514,"protein":30,"fat":26,"carbs":38,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":111,"name":"🍔 Двойной Гранд","calories":610,"protein":42,"fat":35,"carbs":42,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":112,"name":"🍔 Гранд Де Люкс","calories":570,"protein":31,"fat":31,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":113,"name":"🍔 Гранд Де Люкс Чипотл","calories":585,"protein":31,"fat":32,"carbs":43,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":114,"name":"🍔 Гранд Де Люкс Халапеньо","calories":530,"protein":29,"fat":28,"carbs":45,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":115,"name":"🍔 Биг Спешиал","calories":812,"protein":44,"fat":48,"carbs":50,"brand":"Вкусно и точка","unit":"g","default":340,"category":"Вкусно и точка"},
    {"id":116,"name":"🍔 Двойной Биг Спешиал","calories":1114,"protein":71,"fat":69,"carbs":50,"brand":"Вкусно и точка","unit":"g","default":400,"category":"Вкусно и точка"},
    {"id":117,"name":"🍔 Биг Спешиал с грибами","calories":650,"protein":38,"fat":35,"carbs":55,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":118,"name":"🍔 Биг Спешиал Перец гриль","calories":751,"protein":43,"fat":38,"carbs":59,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":119,"name":"🍔 Биг Спешиал Джуниор","calories":450,"protein":25,"fat":24,"carbs":38,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":120,"name":"🍔 Чикен Хит","calories":491,"protein":17,"fat":21,"carbs":58,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":121,"name":"🍔 Чикен Хит Пекинский барбекю","calories":491,"protein":17,"fat":21,"carbs":58,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":122,"name":"🍔 Чикен Хит Сычуаньский","calories":495,"protein":18,"fat":22,"carbs":57,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":123,"name":"🍔 Чикен Премьер","calories":563,"protein":22,"fat":27,"carbs":59,"brand":"Вкусно и точка","unit":"g","default":243,"category":"Вкусно и точка"},
    {"id":124,"name":"🍔 Чикен Премьер Пекинский барбекю","calories":563,"protein":22,"fat":27,"carbs":59,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":125,"name":"🍔 Чикен Премьер Сычуаньский","calories":568,"protein":23,"fat":28,"carbs":58,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":126,"name":"🍔 Биг Чикен Бургер","calories":550,"protein":32,"fat":26,"carbs":45,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":127,"name":"🍔 Атлантик Бургер","calories":450,"protein":15,"fat":21,"carbs":49,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":128,"name":"🍔 Атлантик Бургер Кунжутный","calories":455,"protein":16,"fat":22,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":129,"name":"🍔 Тройной Фреш","calories":720,"protein":45,"fat":38,"carbs":52,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":130,"name":"🌯 Цезарь Ролл","calories":552,"protein":19,"fat":32,"carbs":46,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":131,"name":"🌯 Цезарь Ролл с беконом","calories":500,"protein":21,"fat":25,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":132,"name":"🌯 Шримп Ролл","calories":412,"protein":15,"fat":18,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":133,"name":"🌯 Фреш Ролл","calories":537,"protein":23,"fat":34,"carbs":34,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":134,"name":"🌯 Утренний Ролл со свиной котлетой","calories":450,"protein":20,"fat":22,"carbs":42,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":135,"name":"🌯 Утренний Ролл с курицей","calories":410,"protein":22,"fat":18,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":136,"name":"🌯 Биг Спешиал ролл","calories":556,"protein":27,"fat":29,"carbs":47,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":137,"name":"🌯 Биг Спешиал ролл Перец гриль","calories":556,"protein":27,"fat":29,"carbs":47,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":138,"name":"🌯 Биг Спешиал ролл Чураско","calories":540,"protein":27,"fat":31,"carbs":38,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":139,"name":"🌯 Биг Спешиал Демиглас Ролл","calories":583,"protein":27,"fat":33,"carbs":45,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":140,"name":"🥗 Салат Цезарь","calories":231,"protein":15,"fat":11,"carbs":17,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":141,"name":"🥗 Салат Цезарь с креветками","calories":186,"protein":11,"fat":10,"carbs":13,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":142,"name":"🥗 Овощной салат","calories":31,"protein":1,"fat":2,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":143,"name":"🍟 Картофель Фри маленький","calories":231,"protein":2.8,"fat":11,"carbs":29,"brand":"Вкусно и точка","unit":"g","default":80,"category":"Вкусно и точка"},
    {"id":144,"name":"🍟 Картофель Фри средний","calories":330,"protein":3.9,"fat":16,"carbs":41,"brand":"Вкусно и точка","unit":"g","default":110,"category":"Вкусно и точка"},
    {"id":145,"name":"🍟 Картофель Фри большой","calories":420,"protein":5,"fat":20,"carbs":52,"brand":"Вкусно и точка","unit":"g","default":140,"category":"Вкусно и точка"},
    {"id":146,"name":"🍟 Картофель Фри с сыром и беконом","calories":480,"protein":8,"fat":28,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":147,"name":"🍟 Картофель по-деревенски","calories":331,"protein":4.6,"fat":15,"carbs":42,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":148,"name":"🍟 Картофель по-деревенски с сыром и беконом","calories":390,"protein":7,"fat":22,"carbs":40,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":149,"name":"🍟 Картофель по-деревенски Сметана и лук","calories":473,"protein":5,"fat":28,"carbs":47,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":150,"name":"🥔 Картофельный оладушек","calories":121,"protein":2,"fat":6,"carbs":14,"brand":"Вкусно и точка","unit":"pcs","default":1,"category":"Вкусно и точка"},
    {"id":151,"name":"🍗 Куриные наггетсы 4 шт","calories":179,"protein":11,"fat":9,"carbs":12,"brand":"Вкусно и точка","unit":"pcs","default":4,"category":"Вкусно и точка"},
    {"id":152,"name":"🍗 Куриные стрипсы 3 шт","calories":223,"protein":14,"fat":10,"carbs":19,"brand":"Вкусно и точка","unit":"pcs","default":3,"category":"Вкусно и точка"},
    {"id":153,"name":"🍗 Куриные крылышки 3 шт","calories":165,"protein":10,"fat":12,"carbs":5,"brand":"Вкусно и точка","unit":"pcs","default":3,"category":"Вкусно и точка"},
    {"id":154,"name":"🍤 Креветки 4 шт","calories":150,"protein":12,"fat":7,"carbs":10,"brand":"Вкусно и точка","unit":"pcs","default":4,"category":"Вкусно и точка"},
    {"id":155,"name":"🐟 Рыбные палочки","calories":225,"protein":11,"fat":13,"carbs":15,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":156,"name":"🍎 Яблочные дольки","calories":85,"protein":0.5,"fat":0.5,"carbs":20,"brand":"Вкусно и точка","unit":"g","default":80,"category":"Вкусно и точка"},
    {"id":157,"name":"🥕 Морковные палочки","calories":35,"protein":1,"fat":0.5,"carbs":7,"brand":"Вкусно и точка","unit":"g","default":80,"category":"Вкусно и точка"},
    {"id":158,"name":"📦 Снэк Бокс с крыльями","calories":866,"protein":38,"fat":46,"carbs":73,"brand":"Вкусно и точка","unit":"set","default":1,"category":"Вкусно и точка"},
    {"id":159,"name":"📦 Снэк Бокс со стрипсами","calories":620,"protein":35,"fat":30,"carbs":55,"brand":"Вкусно и точка","unit":"set","default":1,"category":"Вкусно и точка"},
    {"id":160,"name":"📦 Большой Снэк Бокс с крыльями","calories":1594,"protein":63,"fat":87,"carbs":136,"brand":"Вкусно и точка","unit":"set","default":1,"category":"Вкусно и точка"},
    {"id":161,"name":"📦 Большой Снэк Бокс со стрипсами","calories":1397,"protein":51,"fat":67,"carbs":142,"brand":"Вкусно и точка","unit":"set","default":1,"category":"Вкусно и точка"},
    {"id":162,"name":"☕ Американо","calories":15,"protein":0,"fat":0,"carbs":3,"brand":"Вкусно и точка","unit":"ml","default":200,"category":"Вкусно и точка"},
    {"id":163,"name":"☕ Капучино","calories":55,"protein":2.5,"fat":2.5,"carbs":5.5,"brand":"Вкусно и точка","unit":"ml","default":200,"category":"Вкусно и точка"},
    {"id":164,"name":"☕ Латте","calories":140,"protein":5,"fat":6,"carbs":14,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":165,"name":"☕ Раф Классический","calories":180,"protein":5,"fat":8,"carbs":20,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":166,"name":"☕ Раф Апельсиновый","calories":326,"protein":6,"fat":22,"carbs":26,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":167,"name":"☕ Раф Имбирный пряник","calories":190,"protein":5,"fat":9,"carbs":22,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":168,"name":"🥤 Капучино/Латте с сиропом Печенье с орехами","calories":180,"protein":5,"fat":6,"carbs":25,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":169,"name":"🥤 Бамбл Кофе","calories":200,"protein":4,"fat":7,"carbs":30,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":170,"name":"🥤 Бабл Айс Кофе","calories":210,"protein":3,"fat":5,"carbs":38,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":171,"name":"🥤 Айс Кофе Карамель","calories":155,"protein":4,"fat":4,"carbs":26,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":172,"name":"🥤 Красный дракон (латте)","calories":190,"protein":5,"fat":6,"carbs":28,"brand":"Вкусно и точка","unit":"ml","default":300,"category":"Вкусно и точка"},
    {"id":173,"name":"🥤 Молочный коктейль Ванильный","calories":244,"protein":6,"fat":4.6,"carbs":45,"brand":"Вкусно и точка","unit":"ml","default":250,"category":"Вкусно и точка"},
    {"id":174,"name":"🥤 Молочный коктейль Шоколадный","calories":260,"protein":6,"fat":5,"carbs":48,"brand":"Вкусно и точка","unit":"ml","default":250,"category":"Вкусно и точка"},
    {"id":175,"name":"🥤 Молочный коктейль Клубничный","calories":250,"protein":6,"fat":4.8,"carbs":46,"brand":"Вкусно и точка","unit":"ml","default":250,"category":"Вкусно и точка"},
    {"id":176,"name":"🍹 Лимонад Капри","calories":100,"protein":0,"fat":0,"carbs":25,"brand":"Вкусно и точка","unit":"ml","default":350,"category":"Вкусно и точка"},
    {"id":177,"name":"🍹 Пунш Смородина-малина","calories":97,"protein":0,"fat":0,"carbs":24,"brand":"Вкусно и точка","unit":"ml","default":350,"category":"Вкусно и точка"},
    {"id":178,"name":"🍹 Пунш Брусника-можжевельник","calories":94,"protein":0,"fat":0,"carbs":23,"brand":"Вкусно и точка","unit":"ml","default":350,"category":"Вкусно и точка"},
    {"id":179,"name":"🥤 Кока-Кола 0.33","calories":140,"protein":0,"fat":0,"carbs":35,"brand":"Вкусно и точка","unit":"ml","default":330,"category":"Вкусно и точка"},
    {"id":180,"name":"🥤 Добрый Кола","calories":140,"protein":0,"fat":0,"carbs":35,"brand":"Вкусно и точка","unit":"ml","default":330,"category":"Вкусно и точка"},
    {"id":181,"name":"🥤 Добрый Апельсин","calories":140,"protein":0,"fat":0,"carbs":34,"brand":"Вкусно и точка","unit":"ml","default":330,"category":"Вкусно и точка"},
    {"id":182,"name":"🧃 Липтон Айс Ти (Лимон)","calories":134,"protein":0,"fat":0,"carbs":34,"brand":"Вкусно и точка","unit":"ml","default":330,"category":"Вкусно и точка"},
    {"id":183,"name":"🧃 Апельсиновый сок","calories":150,"protein":0,"fat":0,"carbs":33,"brand":"Вкусно и точка","unit":"ml","default":250,"category":"Вкусно и точка"},
    {"id":184,"name":"🧃 Яблочный сок","calories":120,"protein":0,"fat":0,"carbs":28,"brand":"Вкусно и точка","unit":"ml","default":250,"category":"Вкусно и точка"},
    {"id":185,"name":"🥐 Круассан","calories":400,"protein":6,"fat":20,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":80,"category":"Вкусно и точка"},
    {"id":186,"name":"🥐 Круассан с ветчиной и сыром","calories":450,"protein":12,"fat":25,"carbs":42,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":187,"name":"🥐 Шоколадный круассан","calories":440,"protein":7,"fat":22,"carbs":52,"brand":"Вкусно и точка","unit":"g","default":85,"category":"Вкусно и точка"},
    {"id":188,"name":"🍪 Печенье с шоколадной крошкой","calories":480,"protein":6,"fat":22,"carbs":65,"brand":"Вкусно и точка","unit":"g","default":50,"category":"Вкусно и точка"},
    {"id":189,"name":"🍪 Печенье Малина-белый шоколад","calories":332,"protein":4,"fat":13,"carbs":49,"brand":"Вкусно и точка","unit":"g","default":50,"category":"Вкусно и точка"},
    {"id":190,"name":"🍰 Пирожок Вишневый","calories":249,"protein":2.8,"fat":12,"carbs":32,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":191,"name":"🍰 Пирожок Черная смородина","calories":276,"protein":3,"fat":15,"carbs":33,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":192,"name":"🍰 Пирожок Пряное яблоко","calories":212,"protein":3,"fat":8,"carbs":31,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":193,"name":"🍰 Пирожок Норвежские ягоды","calories":237,"protein":4,"fat":13,"carbs":25,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":194,"name":"🍰 Пирожок Манго-кремчиз","calories":223,"protein":2,"fat":12,"carbs":25,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":195,"name":"🍰 Пирожок Клубника-малина","calories":267,"protein":3,"fat":14,"carbs":32,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":196,"name":"🍰 Пирожок Манго-маракуйя","calories":240,"protein":2,"fat":11,"carbs":33,"brand":"Вкусно и точка","unit":"g","default":79,"category":"Вкусно и точка"},
    {"id":197,"name":"🍦 Мороженое Карамельное","calories":319,"protein":6,"fat":7,"carbs":59,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":198,"name":"🍦 Мороженое Шоколадное","calories":310,"protein":6,"fat":9,"carbs":51,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":199,"name":"🍦 Мороженое Клубничное","calories":258,"protein":5,"fat":5,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":200,"name":"🍦 Мороженое Черничное","calories":254,"protein":5,"fat":5,"carbs":47,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":201,"name":"🍦 Мороженое Груша-апельсин","calories":260,"protein":5,"fat":6,"carbs":48,"brand":"Вкусно и точка","unit":"g","default":100,"category":"Вкусно и точка"},
    {"id":202,"name":"🍫 Айс Де Люкс Шоколадный брауни","calories":430,"protein":7,"fat":14,"carbs":62,"brand":"Вкусно и точка","unit":"g","default":130,"category":"Вкусно и точка"},
    {"id":203,"name":"🍫 Айс Де Люкс Вишня","calories":400,"protein":6,"fat":12,"carbs":68,"brand":"Вкусно и точка","unit":"g","default":130,"category":"Вкусно и точка"},
    {"id":204,"name":"🍰 Чизкейк Нью-Йорк","calories":341,"protein":7,"fat":22,"carbs":29,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":205,"name":"🍰 Малиновый мусс","calories":280,"protein":4,"fat":15,"carbs":33,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":206,"name":"🍰 Медовик","calories":380,"protein":5,"fat":18,"carbs":50,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":207,"name":"🍰 Тирамису","calories":350,"protein":6,"fat":20,"carbs":36,"brand":"Вкусно и точка","unit":"g","default":120,"category":"Вкусно и точка"},
    {"id":208,"name":"🍩 Макарони","calories":420,"protein":5,"fat":18,"carbs":60,"brand":"Вкусно и точка","unit":"pcs","default":1,"category":"Вкусно и точка"},
    {"id":209,"name":"🍩 Макарони Матча-кокос","calories":430,"protein":5,"fat":19,"carbs":59,"brand":"Вкусно и точка","unit":"pcs","default":1,"category":"Вкусно и точка"},
    {"id":210,"name":"🧀 Сырный соус","calories":90,"protein":1,"fat":9,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":211,"name":"🧀 Соус Сырный с халапеньо","calories":88,"protein":1,"fat":9,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":212,"name":"🥫 Кисло-сладкий соус","calories":47,"protein":0,"fat":0,"carbs":11,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":213,"name":"🥫 Соус Барбекю","calories":47,"protein":0,"fat":0,"carbs":11,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":214,"name":"🥫 Соус Терияки","calories":54,"protein":1,"fat":0,"carbs":13,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":215,"name":"🥫 Соус Сладкий Чили","calories":46,"protein":0,"fat":0,"carbs":11,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":216,"name":"🥫 Соус Горчичный","calories":62,"protein":1,"fat":3,"carbs":8,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":217,"name":"🥫 Соус Чесночный","calories":84,"protein":0,"fat":8,"carbs":3,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":218,"name":"🥫 Соус 1000 островов","calories":79,"protein":0,"fat":7,"carbs":3,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":219,"name":"🥫 Кетчуп","calories":36,"protein":1,"fat":0,"carbs":8,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":220,"name":"🥫 Соус Цезарь","calories":80,"protein":1,"fat":8,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":221,"name":"🥫 Соус Тартар","calories":85,"protein":0.5,"fat":8.5,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"},
    {"id":222,"name":"🥫 Йогуртовый соус","calories":57,"protein":0,"fat":5,"carbs":2,"brand":"Вкусно и точка","unit":"g","default":30,"category":"Вкусно и точка"}
]
];

// ========== 3. ДОДО ПИЦЦА ==========
const DODO_PRODUCTS = [
    // ========== ПИЦЦЫ ==========
   
    {"id":22,"name":"🍕 Пепперони","calories":273,"protein":11,"fat":11,"carbs":30.7,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":23,"name":"🍕 Пепперони с томатами","calories":270,"protein":11,"fat":10.5,"carbs":31,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":24,"name":"🍕 Пепперони Фифи","calories":270,"protein":11,"fat":10.5,"carbs":31,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":25,"name":"🍕 Двойная пепперони","calories":290,"protein":12,"fat":12,"carbs":32,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":26,"name":"🍕 Сырная","calories":294,"protein":10.6,"fat":10.3,"carbs":37.8,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":27,"name":"🍕 Сырная с томатами","calories":280,"protein":10,"fat":9.5,"carbs":38,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":28,"name":"🍕 Четыре сыра","calories":257,"protein":11.9,"fat":9.9,"carbs":28.3,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":29,"name":"🍕 Сырный цыпленок","calories":223,"protein":10.6,"fat":7.7,"carbs":26.3,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":30,"name":"🍕 Карбонара","calories":322,"protein":10.2,"fat":17.1,"carbs":29.7,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":31,"name":"🍕 Мясная","calories":344,"protein":14,"fat":19.6,"carbs":28.1,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":32,"name":"🍕 Пять мяса","calories":350,"protein":15,"fat":20,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":33,"name":"🍕 Пряная говядина со сливочным хреном","calories":310,"protein":13,"fat":16,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":34,"name":"🍕 Мясное ассорти","calories":340,"protein":14,"fat":19,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":35,"name":"🍕 Свиная шейка и пряная говядина","calories":330,"protein":13,"fat":18,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":36,"name":"🍕 Свиная шейка","calories":320,"protein":13,"fat":17,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":37,"name":"🍕 Грибная","calories":240,"protein":9,"fat":9,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":38,"name":"🍕 Шампиньоны и бекон","calories":280,"protein":11,"fat":15,"carbs":26,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":39,"name":"🍕 Ветчина и сыр","calories":260,"protein":12,"fat":12,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":40,"name":"🍕 Ветчина и грибы","calories":250,"protein":11,"fat":11,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":41,"name":"🍕 Цыпленок и чеснок","calories":230,"protein":12,"fat":8,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":42,"name":"🍕 Цыпленок терияки","calories":250,"protein":13,"fat":9,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":43,"name":"🍕 Цыпленок ранч","calories":260,"protein":14,"fat":10,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":44,"name":"🍕 Двойной цыпленок","calories":240,"protein":15,"fat":8,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":45,"name":"🍕 Цыпленок барбекю","calories":270,"protein":14,"fat":11,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":46,"name":"🍕 Цыпленок с ананасом","calories":240,"protein":12,"fat":8,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":47,"name":"🍕 Цыпленок песто","calories":280,"protein":14,"fat":13,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":48,"name":"🍕 Цыпленок грибной","calories":260,"protein":13,"fat":10,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":49,"name":"🍕 Цыпленок чоризо","calories":300,"protein":14,"fat":16,"carbs":26,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":50,"name":"🍕 Цыпленок сырный","calories":250,"protein":14,"fat":9,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":51,"name":"🍕 Цыпленок с ветчиной","calories":260,"protein":13,"fat":10,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":52,"name":"🍕 Острая чоризо","calories":310,"protein":13,"fat":17,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":53,"name":"🍕 Чоризо барбекю","calories":320,"protein":13,"fat":18,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":54,"name":"🍕 Чоризо халапеньо","calories":300,"protein":12,"fat":17,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":55,"name":"🍕 Охотничьи колбаски","calories":290,"protein":12,"fat":15,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":56,"name":"🍕 Креветки песто","calories":260,"protein":12,"fat":12,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":57,"name":"🍕 Креветки и ананасы","calories":250,"protein":11,"fat":11,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":58,"name":"🍕 Креветки сладкий чили","calories":260,"protein":12,"fat":11,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":59,"name":"🍕 Маргарита","calories":220,"protein":8,"fat":7,"carbs":31,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":60,"name":"🍕 Маргарита с томатами","calories":210,"protein":7.5,"fat":6.5,"carbs":32,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":61,"name":"🍕 Гавайская","calories":230,"protein":10,"fat":8,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":62,"name":"🍕 Песто с томатами","calories":250,"protein":9,"fat":12,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":63,"name":"🍕 Песто с брынзой","calories":260,"protein":10,"fat":13,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":64,"name":"🍕 Песто с цыпленком","calories":270,"protein":13,"fat":12,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":65,"name":"🍕 Бургер соус","calories":310,"protein":13,"fat":16,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":66,"name":"🍕 Бургер ранч","calories":300,"protein":13,"fat":15,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":67,"name":"🍕 Гриль тейсти","calories":290,"protein":12,"fat":14,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":68,"name":"🍕 Митболы и чоризо","calories":330,"protein":14,"fat":19,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":69,"name":"🍕 Митболы из говядины","calories":320,"protein":15,"fat":18,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":70,"name":"🍕 Бекон, цыпленок, ветчина","calories":340,"protein":15,"fat":19,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":71,"name":"🍕 Сливочный хрен","calories":300,"protein":12,"fat":16,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":72,"name":"🍕 Альфредо","calories":280,"protein":11,"fat":14,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":73,"name":"🍕 Грибной соус","calories":260,"protein":10,"fat":11,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":74,"name":"🍕 Соус ранч и терияки","calories":270,"protein":12,"fat":12,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":75,"name":"🍕 Индийская масала","calories":290,"protein":13,"fat":14,"carbs":29,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":76,"name":"🍕 Шашлычная","calories":310,"protein":14,"fat":16,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":77,"name":"🍕 Супер мясная","calories":340,"protein":15,"fat":19,"carbs":27,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":78,"name":"🍕 Четыре сезона","calories":260,"protein":11,"fat":10,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":79,"name":"🍕 Вегетарианская","calories":200,"protein":7,"fat":6,"carbs":30,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},
    {"id":80,"name":"🍕 Брынза и томаты","calories":220,"protein":8,"fat":9,"carbs":28,"brand":"Додо Пицца","unit":"g","default":100,"category":"Додо Пицца"},

    // ========== САЛАТЫ ==========
    {"id":81,"name":"🥗 Салат Цезарь","calories":210,"protein":8.6,"fat":14.4,"carbs":11.5,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":82,"name":"🥗 Салат Цезарь с креветками","calories":186,"protein":11,"fat":10,"carbs":13,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":83,"name":"🥗 Салат Греческий","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":84,"name":"🥗 Овощной салат","calories":50,"protein":1.5,"fat":2,"carbs":7,"unit":"g","default":100,"category":"Додо Пицца"},

    // ========== ЗАКУСКИ ==========
    {"id":85,"name":"🍟 Картофель из печи","calories":222,"protein":3.8,"fat":6.8,"carbs":34.9,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":86,"name":"🍟 Картофель из печи с соусом","calories":260,"protein":4,"fat":10,"carbs":35,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":87,"name":"🍗 Куриные наггетсы 4 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","options":[4,6,9,12],"category":"Додо Пицца"},
    {"id":88,"name":"🍗 Куриные крылья 4 шт","calories":253,"protein":15,"fat":16,"carbs":10,"unit":"pcs","options":[4,6,8,12],"category":"Додо Пицца"},
    {"id":89,"name":"🍗 Куриные стрипсы 3 шт","calories":223,"protein":14,"fat":10,"carbs":19,"unit":"pcs","options":[3,5,10],"category":"Додо Пицца"},
    {"id":90,"name":"🍗 Куриные кусочки","calories":250,"protein":16,"fat":12,"carbs":20,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":91,"name":"🧀 Сырные палочки 4 шт","calories":280,"protein":12,"fat":15,"carbs":22,"unit":"pcs","options":[4,8,12],"category":"Додо Пицца"},
    {"id":92,"name":"🌯 Покет-пицца с цыпленком","calories":340,"protein":15,"fat":11,"carbs":45,"unit":"g","default":120,"category":"Додо Пицца"},
    {"id":93,"name":"🌯 Покет-пицца с пепперони","calories":360,"protein":15,"fat":13,"carbs":44,"unit":"g","default":120,"category":"Додо Пицца"},
    {"id":94,"name":"🌯 Покет-пицца вегетарианская","calories":320,"protein":12,"fat":9,"carbs":47,"unit":"g","default":120,"category":"Додо Пицца"},

    // ========== ДЕСЕРТЫ ==========
    {"id":95,"name":"🍰 Чизкейк Нью-Йорк","calories":341,"protein":6.9,"fat":22.1,"carbs":28.5,"unit":"g","default":120,"category":"Додо Пицца"},
    {"id":96,"name":"🍫 Фондан","calories":430,"protein":5.2,"fat":26,"carbs":43,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":97,"name":"🍫 Фондан с мороженым","calories":520,"protein":7,"fat":30,"carbs":53,"unit":"g","default":140,"category":"Додо Пицца"},
    {"id":98,"name":"🍪 Маффин шоколадный","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"Додо Пицца"},
    {"id":99,"name":"🍪 Маффин малиновый","calories":370,"protein":5,"fat":17,"carbs":49,"unit":"g","default":80,"category":"Додо Пицца"},
    {"id":100,"name":"🍰 Малиновый мусс","calories":280,"protein":4,"fat":15,"carbs":33,"unit":"g","default":120,"category":"Додо Пицца"},
    {"id":101,"name":"🍦 Мороженое пломбир","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":102,"name":"🍩 Пончик с сахарной пудрой","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"Додо Пицца"},
    {"id":103,"name":"🍩 Пончик с шоколадной начинкой","calories":410,"protein":5,"fat":20,"carbs":50,"unit":"g","default":85,"category":"Додо Пицца"},
    {"id":104,"name":"🍎 Яблочный штрудель","calories":290,"protein":4,"fat":12,"carbs":40,"unit":"g","default":100,"category":"Додо Пицца"},
    {"id":105,"name":"🥨 Крендель с солью","calories":320,"protein":8,"fat":10,"carbs":48,"unit":"g","default":80,"category":"Додо Пицца"},

    // ========== НАПИТКИ ==========
    {"id":106,"name":"🥤 Молочный коктейль Классический","calories":126,"protein":3.3,"fat":7.1,"carbs":11.3,"unit":"ml","default":250,"category":"Додо Пицца"},
    {"id":107,"name":"🥤 Молочный коктейль Клубничный","calories":130,"protein":3.5,"fat":7,"carbs":12,"unit":"ml","default":250,"category":"Додо Пицца"},
    {"id":108,"name":"🥤 Молочный коктейль Шоколадный","calories":140,"protein":3.5,"fat":7.5,"carbs":13,"unit":"ml","default":250,"category":"Додо Пицца"},
    {"id":109,"name":"🥤 Молочный коктейль Карамельный","calories":135,"protein":3.3,"fat":7.2,"carbs":12.5,"unit":"ml","default":250,"category":"Додо Пицца"},
    {"id":110,"name":"🥤 Айс кофе","calories":80,"protein":2,"fat":2.5,"carbs":12,"unit":"ml","default":250,"category":"Додо Пицца"},
    {"id":111,"name":"☕ Капучино","calories":55,"protein":2.5,"fat":2.5,"carbs":5.5,"unit":"ml","default":200,"category":"Додо Пицца"},
    {"id":112,"name":"☕ Латте","calories":80,"protein":3,"fat":3.5,"carbs":8,"unit":"ml","default":300,"category":"Додо Пицца"},
    {"id":113,"name":"☕ Американо","calories":15,"protein":0.5,"fat":0,"carbs":3,"unit":"ml","default":200,"category":"Додо Пицца"},
    {"id":114,"name":"🥤 Лимонад Классический","calories":100,"protein":0,"fat":0,"carbs":25,"unit":"ml","default":350,"category":"Додо Пицца"},
    {"id":115,"name":"🥤 Лимонад Манго-Маракуйя","calories":110,"protein":0,"fat":0,"carbs":27,"unit":"ml","default":350,"category":"Додо Пицца"},
    {"id":116,"name":"🥤 Лимонад Клубника-Базилик","calories":105,"protein":0,"fat":0,"carbs":26,"unit":"ml","default":350,"category":"Додо Пицца"},
    {"id":117,"name":"🧃 Морс Клюквенный","calories":80,"protein":0,"fat":0,"carbs":20,"unit":"ml","default":350,"category":"Додо Пицца"},
    {"id":118,"name":"🧃 Сок Добрый Яблочный","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":200,"category":"Додо Пицца"},
    {"id":119,"name":"🧃 Сок Добрый Апельсиновый","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":200,"category":"Додо Пицца"},
    {"id":120,"name":"🧃 Кола 0.33","calories":140,"protein":0,"fat":0,"carbs":35,"unit":"ml","default":330,"category":"Додо Пицца"},
    {"id":121,"name":"🧃 Кола без сахара 0.33","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Додо Пицца"},
    {"id":122,"name":"🧃 Спрайт 0.33","calories":140,"protein":0,"fat":0,"carbs":35,"unit":"ml","default":330,"category":"Додо Пицца"},
    {"id":123,"name":"🧃 Фанта 0.33","calories":140,"protein":0,"fat":0,"carbs":35,"unit":"ml","default":330,"category":"Додо Пицца"},
    {"id":124,"name":"🧃 Вода питьевая","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":500,"category":"Додо Пицца"},

    // ========== СОУСЫ ==========
    {"id":125,"name":"🥫 Сырный соус","calories":90,"protein":1,"fat":9,"carbs":2,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":126,"name":"🥫 Чесночный соус","calories":84,"protein":0,"fat":8,"carbs":3,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":127,"name":"🥫 Барбекю соус","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":128,"name":"🥫 Кисло-сладкий соус","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":129,"name":"🥫 Сливочный хрен соус","calories":50,"protein":0,"fat":3,"carbs":6,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":130,"name":"🥫 Кетчуп","calories":36,"protein":1,"fat":0,"carbs":8,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":131,"name":"🥫 Ранч соус","calories":57,"protein":0,"fat":5,"carbs":2,"unit":"g","default":30,"category":"Додо Пицца"},
    {"id":132,"name":"🥫 Сладкий чили соус","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"Додо Пицца"}
];

// ========== 4. БУРГЕР КИНГ ==========
const BURGERKING_PRODUCTS = [
    // ========== БУРГЕРЫ (ГОВЯДИНА) ==========
    {"id":30,"name":"🍔 Воппер","calories":350,"protein":21,"fat":19,"carbs":28,"unit":"g","default":274,"category":"Бургер Кинг"},
    {"id":31,"name":"🍔 Двойной Воппер","calories":490,"protein":36,"fat":33,"carbs":31,"unit":"g","default":367,"category":"Бургер Кинг"},
    {"id":32,"name":"🍔 Тройной Воппер","calories":530,"protein":44,"fat":39,"carbs":33,"unit":"g","default":460,"category":"Бургер Кинг"},
    {"id":33,"name":"🍔 Воппер с сыром","calories":420,"protein":23,"fat":24,"carbs":30,"unit":"g","default":280,"category":"Бургер Кинг"},
    {"id":34,"name":"🍔 Двойной Воппер с сыром","calories":510,"protein":37,"fat":33,"carbs":33,"unit":"g","default":388,"category":"Бургер Кинг"},
    {"id":35,"name":"🍔 Острый Воппер","calories":360,"protein":21,"fat":20,"carbs":29,"unit":"g","default":274,"category":"Бургер Кинг"},
    {"id":36,"name":"🍔 Острый Воппер с сыром","calories":430,"protein":24,"fat":25,"carbs":31,"unit":"g","default":295,"category":"Бургер Кинг"},
    {"id":37,"name":"🍔 Чизбургер","calories":302,"protein":15,"fat":14,"carbs":30,"unit":"g","default":114,"category":"Бургер Кинг"},
    {"id":38,"name":"🍔 Двойной Чизбургер","calories":390,"protein":22,"fat":24,"carbs":25,"unit":"g","default":160,"category":"Бургер Кинг"},
    {"id":39,"name":"🍔 Гамбургер","calories":261,"protein":15,"fat":11,"carbs":26,"unit":"g","default":108,"category":"Бургер Кинг"},
    
    // ========== БУРГЕРЫ (КОЛЛЕКЦИОННЫЕ/ПРЕМИУМ) ==========
    {"id":40,"name":"🍔 Ангус Пармеджано","calories":590,"protein":31,"fat":35,"carbs":38,"unit":"g","default":320,"category":"Бургер Кинг"},
    {"id":41,"name":"🍔 Ангус Пармеджано Двойной","calories":730,"protein":48,"fat":51,"carbs":42,"unit":"g","default":425,"category":"Бургер Кинг"},
    {"id":42,"name":"🍔 Воппер Жюльен","calories":410,"protein":21,"fat":25,"carbs":29,"unit":"g","default":273,"category":"Бургер Кинг"},
    {"id":43,"name":"🍔 Воппер Жюльен Двойной","calories":550,"protein":36,"fat":37,"carbs":34,"unit":"g","default":366,"category":"Бургер Кинг"},
    {"id":44,"name":"🍔 Чизбургер Жюльен","calories":350,"protein":18,"fat":20,"carbs":28,"unit":"g","default":130,"category":"Бургер Кинг"},
    {"id":45,"name":"🍔 Брутал Бэйкон (Brutal Bacon)","calories":420,"protein":26,"fat":28,"carbs":35,"unit":"g","default":220,"category":"Бургер Кинг"},
    {"id":46,"name":"🍔 Чистер Биф (Cheester Beef)","calories":370,"protein":24,"fat":22,"carbs":33,"unit":"g","default":180,"category":"Бургер Кинг"},

    // ========== КУРИЦА (БУРГЕРЫ, СТРИПСЫ, НАГГЕТСЫ) ==========
    {"id":47,"name":"🐔 Чикенбургер","calories":435,"protein":18,"fat":26,"carbs":33,"unit":"g","default":250,"category":"Бургер Кинг"},
    {"id":48,"name":"🐔 Чикен Ролл Жюльен","calories":410,"protein":19,"fat":22,"carbs":36,"unit":"g","default":216,"category":"Бургер Кинг"},
    {"id":49,"name":"🐔 Чикен Жюльен","calories":440,"protein":21,"fat":26,"carbs":33,"unit":"g","default":220,"category":"Бургер Кинг"},
    {"id":50,"name":"🐔 Чикен Тар-Тар","calories":450,"protein":20,"fat":28,"carbs":33,"unit":"g","default":230,"category":"Бургер Кинг"},
    
    {"id":51,"name":"🍗 Куриные наггетсы 4 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","options":[4,6,9,12,20],"category":"Бургер Кинг"},
    {"id":52,"name":"🍗 Куриные стрипсы 3 шт","calories":270,"protein":18,"fat":14,"carbs":20,"unit":"pcs","options":[3,5,10],"category":"Бургер Кинг"},
    {"id":53,"name":"🍗 Куриные крылья (6 шт)","calories":465,"protein":24,"fat":28,"carbs":30,"unit":"pcs","options":[6,9,12],"category":"Бургер Кинг"},

    // ========== ПИТЫ, РОЛЛЫ И ЗАКУСКИ ==========
    {"id":54,"name":"🫓 Ангус Пита Пармеджано","calories":306,"protein":18,"fat":14,"carbs":28,"unit":"g","default":250,"category":"Бургер Кинг"},
    {"id":55,"name":"🫓 Ангус Пита Чеддер-Бекон","calories":320,"protein":19,"fat":16,"carbs":27,"unit":"g","default":250,"category":"Бургер Кинг"},
    {"id":56,"name":"🌯 Воппер Ролл","calories":580,"protein":22,"fat":32,"carbs":52,"unit":"g","default":280,"category":"Бургер Кинг"},
    {"id":57,"name":"🌯 Фиш Ролл","calories":375,"protein":12,"fat":16,"carbs":46,"unit":"g","default":226,"category":"Бургер Кинг"},
    {"id":58,"name":"🌯 Шримп Ролл","calories":370,"protein":14,"fat":15,"carbs":47,"unit":"g","default":230,"category":"Бургер Кинг"},
    {"id":59,"name":"🌯 Цезарь Ролл","calories":380,"protein":16,"fat":18,"carbs":43,"unit":"g","default":245,"category":"Бургер Кинг"},
    {"id":60,"name":"🌯 Чикен Ролл Жюльен","calories":410,"protein":19,"fat":22,"carbs":36,"unit":"g","default":216,"category":"Бургер Кинг"},
    
    {"id":61,"name":"🧀 Сырные медальоны (Моцарелла Стикс)","calories":280,"protein":12,"fat":15,"carbs":22,"unit":"pcs","options":[4,6,9],"category":"Бургер Кинг"},
    {"id":62,"name":"🧅 Луковые кольца","calories":320,"protein":4,"fat":15,"carbs":42,"unit":"g","default":100,"category":"Бургер Кинг"},

    // ========== КАРТОФЕЛЬ ==========
    {"id":63,"name":"🍟 Картофель фри маленький","calories":310,"protein":3.7,"fat":12,"carbs":44,"unit":"g","default":80,"category":"Бургер Кинг"},
    {"id":64,"name":"🍟 Картофель фри стандартный","calories":395,"protein":4.5,"fat":16,"carbs":57,"unit":"g","default":110,"category":"Бургер Кинг"},
    {"id":65,"name":"🍟 Картофель фри большой","calories":485,"protein":5.5,"fat":20,"carbs":70,"unit":"g","default":150,"category":"Бургер Кинг"},

    // ========== ДЕСЕРТЫ И НАПИТКИ ==========
    {"id":66,"name":"🍦 Мороженое десерт","calories":180,"protein":4,"fat":8,"carbs":22,"unit":"g","default":100,"category":"Бургер Кинг"},
    {"id":67,"name":"🍦 Шейк","calories":450,"protein":9,"fat":12,"carbs":75,"unit":"ml","default":300,"category":"Бургер Кинг"},
    {"id":68,"name":"🥤 Кока-Кола","calories":42,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":330,"category":"Бургер Кинг"},

    // ========== РЫБА И МОРЕПРОДУКТЫ ==========
    {"id":69,"name":"🐟 Фиш Бургер","calories":470,"protein":16,"fat":23,"carbs":49,"unit":"g","default":220,"category":"Бургер Кинг"},
    {"id":70,"name":"🐟 Фиш Бургер Двойной","calories":570,"protein":24,"fat":28,"carbs":51,"unit":"g","default":275,"category":"Бургер Кинг"},

    // ========== СОУСЫ ==========
    {"id":71,"name":"🧀 Сырный соус","calories":90,"protein":1,"fat":9,"carbs":2,"unit":"g","default":30,"category":"Бургер Кинг"},
    {"id":72,"name":"🥫 Барбекю соус","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"Бургер Кинг"},
    {"id":73,"name":"🧄 Чесночный соус","calories":84,"protein":0,"fat":8,"carbs":3,"unit":"g","default":30,"category":"Бургер Кинг"},
    {"id":74,"name":"🥫 Кетчуп","calories":36,"protein":1,"fat":0,"carbs":8,"unit":"g","default":30,"category":"Бургер Кинг"},
    {"id":75,"name":"🥫 Соус Ранч","calories":57,"protein":0,"fat":5,"carbs":2,"unit":"g","default":30,"category":"Бургер Кинг"}
];

// ========== 5. ПЕРЕКРЁСТОК ==========
const PEREKRESTOK_PRODUCTS = [
// --- ГОТОВЫЕ БЛЮДА ---
    {"id":4001,"name":"Азу из Говядины с Картофельным Пюре","calories":150,"protein":6.5,"fat":11.4,"carbs":9.6,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4002,"name":"Азу из Мяса Индейки","calories":123,"protein":18.2,"fat":5.6,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4003,"name":"Аджапсандали","calories":84,"protein":1.8,"fat":6.1,"carbs":7.1,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4004,"name":"Баклажаны Тушеные","calories":152,"protein":2.8,"fat":9.5,"carbs":13.7,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4005,"name":"Баклажаны в Аджике","calories":85,"protein":1.4,"fat":6,"carbs":6.2,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4006,"name":"Баклажаны Ким-Чи","calories":64,"protein":1.2,"fat":4.3,"carbs":5.2,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4007,"name":"Биточек из Курицы с Овощами","calories":214,"protein":14.4,"fat":15.2,"carbs":4.9,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4008,"name":"Биточек Картофельный","calories":172,"protein":3.9,"fat":6,"carbs":25.7,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4009,"name":"Биточек Рыбный из Филе Пангасиуса","calories":159,"protein":13.4,"fat":8.2,"carbs":7.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4010,"name":"Биточек Рыбный из Филе Тилапии","calories":160,"protein":15.2,"fat":7.6,"carbs":7.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4011,"name":"Биточки из Куриного Филе","calories":258,"protein":17.8,"fat":16.2,"carbs":10.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4012,"name":"Биточки из Филе Трески","calories":321,"protein":23,"fat":21.3,"carbs":17,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4013,"name":"Винегрет Овощной с Маслом","calories":130,"protein":1.5,"fat":10,"carbs":8.6,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4014,"name":"Голубцы с Мясом (по кулинарии)","calories":333,"protein":5.3,"fat":31.9,"carbs":6.2,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4015,"name":"Капуста Тушеная","calories":105,"protein":2.4,"fat":6,"carbs":10.4,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4016,"name":"Котлета по-киевски с картофельным пюре","calories":231,"protein":11.5,"fat":11.8,"carbs":19.6,"unit":"g","default":100,"category":"Перекресток", "source":"Шеф Перекресток [citation:10]"},
    {"id":4017,"name":"Котлеты Сочные из Индейки","calories":260,"protein":12,"fat":23.6,"carbs":5.6,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4018,"name":"Куриные Котлеты","calories":240,"protein":8,"fat":20,"carbs":6.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4019,"name":"Суп Норвежский (Шеф Перекресток)","calories":66.8,"protein":5.3,"fat":3.2,"carbs":4.2,"unit":"g","default":100,"category":"Перекресток", "source":"[citation:8]"},
    {"id":4020,"name":"Митболы (фрикадельки)","calories":330,"protein":16,"fat":19,"carbs":24,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4021,"name":"Салат Витаминный","calories":99,"protein":1.6,"fat":7.8,"carbs":5.7,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4022,"name":"Салат Греческий","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4023,"name":"Салат Лакс","calories":212,"protein":7.4,"fat":18.3,"carbs":4.4,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4024,"name":"Салат Мексиканский","calories":101,"protein":5.9,"fat":6.1,"carbs":5.7,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4025,"name":"Салат Надежда","calories":209,"protein":3.8,"fat":17.7,"carbs":8.7,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4026,"name":"Салат Оливье (М Кухня)","calories":221,"protein":4.1,"fat":19.8,"carbs":6.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4027,"name":"Салат Русская Красавица","calories":219,"protein":5.4,"fat":18.7,"carbs":7.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4028,"name":"Салат из Крабовых Палочек","calories":174,"protein":2.3,"fat":12,"carbs":14,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4029,"name":"Салат с Капустой и Яблоками","calories":105,"protein":1.4,"fat":6.2,"carbs":11,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4030,"name":"Сельдь под Шубой","calories":194,"protein":4.1,"fat":16.3,"carbs":7.6,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4031,"name":"Студень (Холодец)","calories":105,"protein":18,"fat":6.2,"carbs":9,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4032,"name":"Творожная Запеканка с Яблоком","calories":150,"protein":10,"fat":2.5,"carbs":22,"unit":"g","default":100,"category":"Перекресток"},

// --- НОВАЯ ЛИНЕЙКА "ПРАВИЛЬНОЕ ПИТАНИЕ" 2026 (40 блюд) --- [citation:2][citation:5][citation:9]
    {"id":4033,"name":"Завтрак протеиновый с креветками, яйцом и киноа","calories":245,"protein":18,"fat":10,"carbs":19,"unit":"g","default":250,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4034,"name":"Блинчики овсяные безглютеновые с клубникой и коллагеном","calories":210,"protein":12,"fat":8,"carbs":24,"unit":"g","default":150,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4035,"name":"Сырники из тофу с тыквой","calories":180,"protein":9,"fat":7,"carbs":20,"unit":"g","default":120,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4036,"name":"Крем-суп из чечевицы, моркови и имбиря","calories":95,"protein":5,"fat":4,"carbs":12,"unit":"g","default":300,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4037,"name":"Кето-бифштекс из говядины с сыром","calories":380,"protein":28,"fat":28,"carbs":3,"unit":"g","default":180,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4038,"name":"Креветки обжаренные на масле гхи с фунчозой","calories":290,"protein":16,"fat":14,"carbs":22,"unit":"g","default":220,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4039,"name":"Смузи клубника-питахайя с коллагеном","calories":85,"protein":5,"fat":0.5,"carbs":16,"unit":"ml","default":250,"category":"Перекресток","note":"ПП-линейка 2026"},
    {"id":4040,"name":"Матча латте на растительном молоке","calories":120,"protein":3,"fat":5,"carbs":15,"unit":"ml","default":300,"category":"Перекресток","note":"Кафе Select 2025"},

// --- ФРУКТЫ ---
    {"id":4041,"name":"Авокадо","calories":160,"protein":2,"fat":15,"carbs":9,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4042,"name":"Ананас Нарезанный","calories":46,"protein":0.4,"fat":0.2,"carbs":10.6,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4043,"name":"Апельсины","calories":47,"protein":0.9,"fat":0.1,"carbs":12,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4044,"name":"Арбуз","calories":25,"protein":0.6,"fat":0.1,"carbs":5.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4045,"name":"Актинидия (Киви)","calories":67,"protein":1.3,"fat":0.5,"carbs":14,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4046,"name":"Банан","calories":89,"protein":1.1,"fat":0.3,"carbs":23,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4047,"name":"Бананы-Мини","calories":90,"protein":1.3,"fat":0.6,"carbs":20,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4048,"name":"Гранат","calories":72,"protein":1.5,"fat":0.6,"carbs":16,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4049,"name":"Грейпфрут","calories":35,"protein":0.9,"fat":0.1,"carbs":8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4050,"name":"Груша","calories":47,"protein":0.4,"fat":0.3,"carbs":11,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4051,"name":"Клубника","calories":32,"protein":0.8,"fat":0.4,"carbs":7.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4052,"name":"Лимон","calories":29,"protein":1.1,"fat":0.3,"carbs":9.3,"unit":"g","default":50,"category":"Перекресток"},
    {"id":4053,"name":"Манго","calories":60,"protein":0.8,"fat":0.4,"carbs":14,"unit":"g","default":100,"category":"Перекресток"},
    // --- ВЫПЕЧКА И ХЛЕБ (продолжение) --- [citation:1][citation:7]
    {"id":4054,"name":"Багет Дары Леса","calories":168,"protein":5.2,"fat":0.8,"carbs":35,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4055,"name":"Багет Деревенский","calories":258,"protein":9.1,"fat":0.8,"carbs":53.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4056,"name":"Багет Итальяно","calories":172,"protein":5.4,"fat":0.7,"carbs":36,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4057,"name":"Багет Пшеничный","calories":203,"protein":6.3,"fat":1.1,"carbs":48.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4058,"name":"Багет Ржано-Пшеничный","calories":279,"protein":9.5,"fat":4.9,"carbs":49.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4059,"name":"Багет Традиционный","calories":266,"protein":8.4,"fat":1.6,"carbs":54.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4060,"name":"Багет Фитнес","calories":292,"protein":10.2,"fat":2.9,"carbs":56.2,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4061,"name":"Багет Французский","calories":222,"protein":7.3,"fat":0.6,"carbs":49,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4062,"name":"Булка с Семенами Тыквы (Зеленый)","calories":250,"protein":7,"fat":2,"carbs":51,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4063,"name":"Батон Нарезной","calories":260,"protein":7.5,"fat":3,"carbs":51,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4064,"name":"Батон Французский","calories":259,"protein":8.2,"fat":1.4,"carbs":52,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4065,"name":"Хлеб Бородинский","calories":207,"protein":6.8,"fat":1.3,"carbs":41.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4066,"name":"Хлеб Ciabatta Темный","calories":210,"protein":8.5,"fat":0.9,"carbs":41.1,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4067,"name":"Хлеб Светлинский Фитнес","calories":198,"protein":9.8,"fat":9.4,"carbs":50.5,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4068,"name":"Лаваш Армянский","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4069,"name":"Круассан Сливочный","calories":373,"protein":5.6,"fat":13.7,"carbs":57,"unit":"g","default":80,"category":"Перекресток"},
    {"id":4070,"name":"Сушки Традиционные","calories":370,"protein":10,"fat":3,"carbs":75,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4071,"name":"Крекер Чудесный улов","calories":440,"protein":9,"fat":17,"carbs":62,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4072,"name":"Гренки / Сухарики ржаные (Кириешки)","calories":400,"protein":12,"fat":7.5,"carbs":71,"unit":"g","default":100,"category":"Перекресток"},

// --- МЯСНЫЕ И РЫБНЫЕ ПОЛУФАБРИКАТЫ --- [citation:1]
    {"id":4073,"name":"Бедро Индейки Бескостное","calories":141,"protein":14.5,"fat":9.2,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4074,"name":"Грудка Индейки Сыровяленая","calories":150,"protein":29,"fat":4,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4075,"name":"Антрекот","calories":105,"protein":20.3,"fat":2.6,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4076,"name":"Лопатка Свинина","calories":257,"protein":16,"fat":21,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4077,"name":"Грудка Куриная Филе","calories":165,"protein":31,"fat":3.6,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4078,"name":"Бедро Куриное (Охлажденное)","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4079,"name":"Фарш Куриный","calories":215,"protein":18,"fat":16,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4080,"name":"Филе Индейки","calories":193,"protein":13.7,"fat":15.3,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4081,"name":"Говядина Вырезка","calories":250,"protein":25,"fat":16,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4082,"name":"Фарш Говяжий","calories":254,"protein":17,"fat":20,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4083,"name":"Филе Семги (Свежемороженое)","calories":208,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4084,"name":"Филе Форели","calories":152,"protein":20,"fat":8,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4085,"name":"Филе Минтая","calories":79,"protein":17,"fat":0.9,"carbs":0,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4086,"name":"Креветки Королевские","calories":73,"protein":15.6,"fat":1,"carbs":0.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4087,"name":"Кальмар Тушка","calories":100,"protein":18,"fat":2,"carbs":2,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4088,"name":"Крабовые Палочки (Русское Море)","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"unit":"g","default":100,"category":"Перекресток"},

// --- МОЛОЧНАЯ ПРОДУКЦИЯ --- [citation:7]
    {"id":4089,"name":"Творог 0% (Зеленая Линия)","calories":101,"protein":18,"fat":0,"carbs":3.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4090,"name":"Творог 5%","calories":121,"protein":16,"fat":5,"carbs":3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4091,"name":"Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4092,"name":"Йогурт Греческий 2.5%","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4093,"name":"Молоко 0.5% (Обезжиренное)","calories":36,"protein":3,"fat":0.5,"carbs":4.8,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4094,"name":"Молоко 2.5%","calories":54,"protein":3,"fat":2.5,"carbs":4.7,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4095,"name":"Кефир 1%","calories":40,"protein":3,"fat":1,"carbs":4,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4096,"name":"Ряженка 2.5%","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4097,"name":"Сметана 15%","calories":158,"protein":2.5,"fat":15,"carbs":3,"unit":"g","default":20,"category":"Перекресток"},
    {"id":4098,"name":"Сыр Моцарелла","calories":280,"protein":28,"fat":17,"carbs":3,"unit":"g","default":100,"category":"Перекресток"},

// --- БАКАЛЕЯ И ОРЕХИ ---
    {"id":4099,"name":"Гречка (Ядрица)","calories":330,"protein":12.5,"fat":3.3,"carbs":62,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4100,"name":"Рис Круглозерный","calories":340,"protein":7,"fat":1,"carbs":79,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4101,"name":"Макароны (Спагетти)","calories":350,"protein":13,"fat":1.5,"carbs":72,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4102,"name":"Овсяные Хлопья (Геркулес)","calories":350,"protein":12,"fat":6,"carbs":60,"unit":"g","default":50,"category":"Перекресток"},
    {"id":4103,"name":"Нут","calories":310,"protein":19,"fat":6,"carbs":46,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4104,"name":"Арахис Жареный Соленый","calories":610,"protein":25,"fat":50,"carbs":14,"unit":"g","default":30,"category":"Перекресток"},
    {"id":4105,"name":"Курага","calories":240,"protein":3,"fat":0.5,"carbs":58,"unit":"g","default":20,"category":"Перекресток"},
    {"id":4106,"name":"Чернослив","calories":230,"protein":2.5,"fat":0.5,"carbs":56,"unit":"g","default":20,"category":"Перекресток"},
    {"id":4107,"name":"Мед Натуральный","calories":304,"protein":0.3,"fat":0,"carbs":82,"unit":"g","default":20,"category":"Перекресток"},

// --- ДЕСЕРТЫ И СЛАДОСТИ --- [citation:7]
    {"id":4108,"name":"Пирожное Берлинское","calories":417,"protein":3.6,"fat":18.9,"carbs":59.1,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4109,"name":"Пирожное Браунис Шоколадный","calories":444,"protein":7,"fat":25.7,"carbs":46.3,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4110,"name":"Безе","calories":326,"protein":3,"fat":0.2,"carbs":78,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4111,"name":"Белёвская Пастила","calories":276,"protein":4,"fat":0,"carbs":65,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4112,"name":"Печенье Овсяное Изюминка","calories":358,"protein":4.4,"fat":11.7,"carbs":58.8,"unit":"g","default":100,"category":"Перекресток"},
    {"id":4113,"name":"Пирог с Зеленым Луком и Яйцом","calories":323,"protein":16.5,"fat":10.3,"carbs":41,"unit":"g","default":100,"category":"Перекресток"},

// --- Б/АЛКОГОЛЬНЫЕ НАПИТКИ --- [citation:1]
    {"id":4114,"name":"Сок Яблочный (Прямой отжим)","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4115,"name":"Сок Апельсиновый (J7)","calories":45,"protein":0.8,"fat":0,"carbs":10,"unit":"ml","default":200,"category":"Перекресток"},
    {"id":4116,"name":"Морс Клюквенный","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Перекресток"},
    {"id":4117,"name":"Квас Очаковский","calories":30,"protein":0,"fat":0,"carbs":5.5,"unit":"ml","default":500,"category":"Перекресток"},
    {"id":4118,"name":"Кола (Добрый Cola)","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Перекресток"},
    {"id":4119,"name":"Вода Питьевая","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":500,"category":"Перекресток"},
    
// --- ФУНКЦИОНАЛЬНЫЕ ПРОДУКТЫ 2025 (Хлеб VQformula) --- [citation:3]
    {"id":4120,"name":"VQformula Хлеб (Белок и полба)","calories":245,"protein":12.6,"fat":3.5,"carbs":38.8,"unit":"g","default":60,"category":"Перекресток","note":"Функциональный продукт. 2 ломтика = 60% нормы клетчатки"}

];

// ========== 6. ДОМАШНЯЯ ЕДА ==========
const HOMEMADE_PRODUCTS = [
    // ========== ПЕРВЫЕ БЛЮДА (СУПЫ, БОРЩИ) ==========
    {"id":5001,"name":"🥣 Борщ украинский","calories":49,"protein":1.1,"fat":2.2,"carbs":6.7,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5002,"name":"🥣 Борщ из свежей капусты","calories":116,"protein":3,"fat":7,"carbs":10,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5003,"name":"🥣 Борщ из квашеной капусты","calories":156,"protein":5,"fat":8,"carbs":15,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5004,"name":"🥣 Борщ сибирский","calories":48,"protein":1.9,"fat":1.5,"carbs":6.8,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5005,"name":"🥣 Борщ летний","calories":49,"protein":1.1,"fat":2.1,"carbs":6.4,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5006,"name":"🥣 Бульон куриный","calories":15,"protein":2,"fat":0.8,"carbs":0.2,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5007,"name":"🥣 Бульон говяжий","calories":20,"protein":2.5,"fat":1.2,"carbs":0,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5008,"name":"🥣 Бульон грибной","calories":18,"protein":1,"fat":0.5,"carbs":2,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5009,"name":"🥣 Бульон рыбный","calories":16,"protein":2,"fat":0.5,"carbs":0,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5010,"name":"🥣 Суп гороховый","calories":66,"protein":4.4,"fat":2.4,"carbs":8.9,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5011,"name":"🥣 Суп грибной","calories":26,"protein":1.3,"fat":1.8,"carbs":1.3,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5012,"name":"🥣 Суп харчо","calories":75,"protein":3.1,"fat":4.5,"carbs":5.5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5013,"name":"🥣 Рассольник","calories":42,"protein":1.4,"fat":2,"carbs":5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5014,"name":"🥣 Солянка мясная","calories":64,"protein":3.5,"fat":3.5,"carbs":4.3,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5015,"name":"🥣 Солянка рыбная","calories":25,"protein":2.4,"fat":1.2,"carbs":1.2,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5016,"name":"🥣 Щи из свежей капусты","calories":31,"protein":0.9,"fat":2.1,"carbs":3.1,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5017,"name":"🥣 Щи из квашеной капусты","calories":34,"protein":0.6,"fat":2.8,"carbs":1.5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5018,"name":"🥣 Щи суточные","calories":34,"protein":0.6,"fat":2.8,"carbs":1.5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5019,"name":"🥣 Окрошка мясная на квасе","calories":52,"protein":2.1,"fat":1.7,"carbs":6.3,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5020,"name":"🥣 Окрошка на кефире","calories":47,"protein":3.1,"fat":1.9,"carbs":4.3,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5021,"name":"🥣 Свекольник холодный","calories":36,"protein":0.5,"fat":2,"carbs":4.2,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5022,"name":"🥣 Суп картофельный","calories":39,"protein":1.4,"fat":1.1,"carbs":6.6,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5023,"name":"🥣 Суп овощной","calories":43,"protein":1.7,"fat":1.8,"carbs":6.2,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5024,"name":"🥣 Суп-пюре из тыквы","calories":45,"protein":1.2,"fat":2.3,"carbs":5.5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5025,"name":"🥣 Суп молочный с макаронами","calories":58,"protein":2.2,"fat":1.9,"carbs":7.9,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5026,"name":"🥣 Уха","calories":46,"protein":3.4,"fat":1,"carbs":5.5,"unit":"g","default":250,"category":"Домашняя еда"},
    {"id":5027,"name":"🥣 Лагман","calories":158,"protein":4.3,"fat":8.9,"carbs":13.3,"unit":"g","default":250,"category":"Домашняя еда"},

    // ========== ВТОРЫЕ БЛЮДА (МЯСО, ПТИЦА) ==========
    {"id":5028,"name":"🍖 Бефстроганов","calories":193,"protein":16.7,"fat":11.3,"carbs":5.9,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5029,"name":"🍖 Гуляш говяжий","calories":148,"protein":14,"fat":9.2,"carbs":2.6,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5030,"name":"🍖 Гуляш свиной","calories":355,"protein":12,"fat":28,"carbs":5,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5031,"name":"🍖 Азу по-татарски","calories":214,"protein":11.9,"fat":14.2,"carbs":10.2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5032,"name":"🍖 Котлеты домашние (говядина)","calories":260,"protein":18,"fat":17,"carbs":12,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5033,"name":"🍖 Котлеты из курицы","calories":222,"protein":18.2,"fat":10.4,"carbs":13.8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5034,"name":"🍖 Котлеты свиные","calories":489,"protein":15,"fat":45,"carbs":8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5035,"name":"🍖 Бифштекс","calories":384,"protein":27.8,"fat":29.6,"carbs":1.7,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5036,"name":"🍖 Эскалоп","calories":487,"protein":19,"fat":42.8,"carbs":6.8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5037,"name":"🍖 Тефтели свиные","calories":172,"protein":7,"fat":10,"carbs":12,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5038,"name":"🍖 Голубцы с мясом","calories":311,"protein":10,"fat":18,"carbs":28,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5039,"name":"🍖 Плов с говядиной","calories":359,"protein":12,"fat":15,"carbs":40,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5040,"name":"🍖 Плов с курицей","calories":215,"protein":14,"fat":8,"carbs":24,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5041,"name":"🍖 Свинина тушеная","calories":235,"protein":9.8,"fat":20.3,"carbs":3.2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5042,"name":"🍖 Говядина тушеная","calories":230,"protein":16,"fat":18,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5043,"name":"🍖 Курица отварная","calories":173,"protein":25,"fat":7,"carbs":0.5,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5044,"name":"🍗 Курица жареная","calories":270,"protein":22,"fat":20,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5045,"name":"🍗 Курица тушеная","calories":185,"protein":21,"fat":11,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5046,"name":"🍖 Куриные бедра запеченные","calories":185,"protein":21.3,"fat":11,"carbs":0.1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5047,"name":"🍗 Куриные крылышки запеченные","calories":265,"protein":18,"fat":20,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5048,"name":"🍖 Индейка запеченная","calories":170,"protein":20,"fat":10,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5049,"name":"🍖 Печень говяжья жареная","calories":200,"protein":18,"fat":12,"carbs":6,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5050,"name":"🍖 Печень куриная тушеная","calories":165,"protein":17,"fat":9,"carbs":4,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5051,"name":"🍖 Зразы картофельные","calories":108,"protein":3.3,"fat":3.9,"carbs":15,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5052,"name":"🍖 Перец фаршированный","calories":162,"protein":8,"fat":10,"carbs":12,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5053,"name":"🥘 Стейк из говядины","calories":250,"protein":26,"fat":16,"carbs":0,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5054,"name":"🥘 Стейк из свинины","calories":310,"protein":20,"fat":25,"carbs":0,"unit":"g","default":150,"category":"Домашняя еда"},

    // ========== РЫБНЫЕ БЛЮДА ==========
    {"id":5055,"name":"🐟 Рыба отварная (судак, щука)","calories":70,"protein":15,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5056,"name":"🐟 Рыба жареная","calories":180,"protein":18,"fat":10,"carbs":4,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5057,"name":"🐟 Рыба запеченная","calories":120,"protein":18,"fat":5,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5058,"name":"🐟 Котлеты рыбные","calories":133,"protein":14,"fat":6,"carbs":8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5059,"name":"🐟 Скумбрия копченая","calories":191,"protein":18,"fat":13,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5060,"name":"🐟 Семга запеченная","calories":208,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5061,"name":"🐟 Форель запеченная","calories":152,"protein":20,"fat":8,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5062,"name":"🐟 Горбуша отварная","calories":168,"protein":26,"fat":7,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5063,"name":"🐟 Минтай отварной","calories":79,"protein":17,"fat":1,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5064,"name":"🐟 Треска отварная","calories":75,"protein":17,"fat":0.7,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5065,"name":"🐟 Рыба тушеная с овощами","calories":220,"protein":15,"fat":12,"carbs":14,"unit":"g","default":100,"category":"Домашняя еда"},

    // ========== КАШИ И ГАРНИРЫ ==========
    {"id":5066,"name":"🍚 Гречневая каша","calories":197,"protein":6.5,"fat":3.2,"carbs":35,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5067,"name":"🍚 Рисовая каша","calories":152,"protein":3.2,"fat":1.5,"carbs":31,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5068,"name":"🍚 Перловая каша","calories":137,"protein":3.5,"fat":1.2,"carbs":28,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5069,"name":"🍚 Пшенная каша","calories":168,"protein":4.5,"fat":2.5,"carbs":31,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5070,"name":"🍚 Овсяная каша","calories":100,"protein":3.5,"fat":2.5,"carbs":16,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5071,"name":"🍚 Ячневая каша","calories":141,"protein":3.8,"fat":1.5,"carbs":28,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5072,"name":"🍚 Картофельное пюре","calories":141,"protein":2.5,"fat":5,"carbs":22,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5073,"name":"🍟 Картофель жареный","calories":192,"protein":2.5,"fat":9.5,"carbs":24,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5074,"name":"🥔 Картофель отварной","calories":82,"protein":2,"fat":0.4,"carbs":18,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5075,"name":"🍝 Макароны отварные","calories":135,"protein":4.5,"fat":0.5,"carbs":30,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5076,"name":"🍝 Макароны по-флотски","calories":250,"protein":14,"fat":12,"carbs":24,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5077,"name":"🥦 Овощи тушеные","calories":50,"protein":1.5,"fat":3,"carbs":5,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5078,"name":"🥗 Овощное рагу","calories":38,"protein":0.5,"fat":0.1,"carbs":3.8,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5079,"name":"🥦 Брокколи на пару","calories":35,"protein":3,"fat":0.4,"carbs":5,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5080,"name":"🍠 Тыква запеченная","calories":45,"protein":1,"fat":0.5,"carbs":10,"unit":"g","default":100,"category":"Домашняя еда"},

    // ========== САЛАТЫ ==========
    {"id":5081,"name":"🥗 Оливье","calories":200,"protein":5,"fat":15,"carbs":12,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5082,"name":"🥗 Сельдь под шубой","calories":183,"protein":5.7,"fat":14.8,"carbs":7.2,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5083,"name":"🥗 Винегрет","calories":128,"protein":2,"fat":6,"carbs":16,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5084,"name":"🥗 Салат Цезарь","calories":190,"protein":15,"fat":10,"carbs":9,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5085,"name":"🥗 Салат Мимоза","calories":183,"protein":5.7,"fat":14.8,"carbs":7.2,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5086,"name":"🥗 Салат Крабовый","calories":128,"protein":9.2,"fat":7.4,"carbs":5.9,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5087,"name":"🥗 Греческий салат","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5088,"name":"🥗 Салат из свежих овощей","calories":50,"protein":1.5,"fat":3,"carbs":5,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5089,"name":"🥗 Салат из капусты","calories":83,"protein":2,"fat":5,"carbs":8,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5090,"name":"🥗 Салат из свеклы","calories":67,"protein":1.5,"fat":4,"carbs":7,"unit":"g","default":150,"category":"Домашняя еда"},

    // ========== ВЫПЕЧКА ==========
    {"id":5091,"name":"🥞 Блины","calories":233,"protein":6.1,"fat":12.3,"carbs":26,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5092,"name":"🥞 Блины с творогом","calories":195,"protein":10,"fat":8,"carbs":20,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5093,"name":"🥞 Оладьи","calories":220,"protein":6,"fat":8,"carbs":32,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5094,"name":"🍳 Сырники","calories":272,"protein":24.1,"fat":7.5,"carbs":26.4,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5095,"name":"🍮 Запеканка творожная","calories":168,"protein":17.6,"fat":4.2,"carbs":14.2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5096,"name":"🥟 Пельмени","calories":275,"protein":11.9,"fat":12.4,"carbs":29,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5097,"name":"🥟 Вареники с картофелем","calories":125,"protein":4.4,"fat":3.7,"carbs":18.5,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5098,"name":"🥟 Вареники с творогом","calories":235,"protein":12,"fat":8,"carbs":28,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5099,"name":"🍞 Домашний хлеб","calories":250,"protein":8,"fat":4,"carbs":45,"unit":"g","default":50,"category":"Домашняя еда"},
    {"id":5100,"name":"🍰 Шарлотка","calories":220,"protein":4,"fat":8,"carbs":32,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5101,"name":"🍰 Манник","calories":230,"protein":5,"fat":9,"carbs":33,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5102,"name":"🍰 Пирог с яблоками","calories":250,"protein":4,"fat":10,"carbs":35,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5103,"name":"🍪 Печенье домашнее","calories":350,"protein":8,"fat":15,"carbs":45,"unit":"g","default":50,"category":"Домашняя еда"},

    // ========== ЗАВТРАКИ / БЛЮДА ИЗ ЯИЦ ==========
    {"id":5104,"name":"🍳 Омлет","calories":250,"protein":11,"fat":18,"carbs":4,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5105,"name":"🍳 Яичница","calories":190,"protein":12,"fat":14,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5106,"name":"🥚 Яйцо вареное","calories":155,"protein":12.5,"fat":10.5,"carbs":0.7,"unit":"pcs","options":[1,2,3,4,5,6],"category":"Домашняя еда"},
    {"id":5107,"name":"🥚 Яйцо пашот","calories":142,"protein":12,"fat":10,"carbs":0.5,"unit":"pcs","options":[1,2,3,4],"category":"Домашняя еда"},
    {"id":5108,"name":"🍳 Скрэмбл","calories":210,"protein":13,"fat":15,"carbs":4,"unit":"g","default":100,"category":"Домашняя еда"},

    // ========== ПАСТА ==========
    {"id":5109,"name":"🍝 Паста Карбонара","calories":450,"protein":15,"fat":25,"carbs":40,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5110,"name":"🍝 Паста Болоньезе","calories":380,"protein":14,"fat":18,"carbs":42,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5111,"name":"🍝 Паста с курицей и грибами","calories":380,"protein":20,"fat":14,"carbs":42,"unit":"g","default":150,"category":"Домашняя еда"},
    {"id":5112,"name":"🍝 Паста с морепродуктами","calories":350,"protein":18,"fat":12,"carbs":45,"unit":"g","default":150,"category":"Домашняя еда"},

    // ========== НАПИТКИ ==========
    {"id":5113,"name":"☕ Кофе черный","calories":2,"protein":0.2,"fat":0,"carbs":0.3,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5114,"name":"☕ Кофе с молоком","calories":40,"protein":1.5,"fat":1.5,"carbs":5,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5115,"name":"☕ Капучино домашний","calories":55,"protein":2.5,"fat":2.5,"carbs":5.5,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5116,"name":"🍵 Чай черный","calories":2,"protein":0,"fat":0,"carbs":0.5,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5117,"name":"🍵 Чай зеленый","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5118,"name":"🍵 Компот из сухофруктов","calories":60,"protein":0.5,"fat":0,"carbs":15,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5119,"name":"🍵 Кисель","calories":100,"protein":0.5,"fat":0,"carbs":25,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5120,"name":"🥛 Морс клюквенный","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":200,"category":"Домашняя еда"},
    {"id":5121,"name":"🥛 Смузи фруктовый","calories":70,"protein":1,"fat":1,"carbs":15,"unit":"ml","default":250,"category":"Домашняя еда"},

    // ========== ДОПОЛНИТЕЛЬНЫЕ МЯСНЫЕ БЛЮДА ==========
    {"id":5122,"name":"🍖 Шницель","calories":168,"protein":16,"fat":10,"carbs":4,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5123,"name":"🍖 Рулет мясной","calories":210,"protein":18,"fat":13,"carbs":5,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5124,"name":"🍖 Зразы мясные","calories":220,"protein":16,"fat":14,"carbs":8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5125,"name":"🍖 Шашлык из свинины","calories":310,"protein":20,"fat":25,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5126,"name":"🍖 Шашлык из курицы","calories":190,"protein":25,"fat":9,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5127,"name":"🍖 Люля-кебаб","calories":280,"protein":18,"fat":21,"carbs":3,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5128,"name":"🍖 Мясо запеченное в духовке","calories":220,"protein":22,"fat":14,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5129,"name":"🍖 Мясо в горшочке","calories":200,"protein":18,"fat":12,"carbs":6,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5130,"name":"🍖 Жаркое","calories":180,"protein":15,"fat":10,"carbs":8,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5131,"name":"🍖 Свинина отварная","calories":375,"protein":20,"fat":32,"carbs":0,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5132,"name":"🍖 Язык отварной","calories":160,"protein":16,"fat":10,"carbs":1,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5133,"name":"🍖 Сердце тушеное","calories":168,"protein":15,"fat":11,"carbs":2,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5134,"name":"🍖 Почки в сметане","calories":130,"protein":12,"fat":8,"carbs":3,"unit":"g","default":100,"category":"Домашняя еда"},
    {"id":5135,"name":"🍖 Холодец","calories":105,"protein":18,"fat":6.2,"carbs":9,"unit":"g","default":100,"category":"Домашняя еда"},

    // ========== СОУСЫ И ЗАПРАВКИ ==========
    {"id":5136,"name":"🥫 Соус бешамель","calories":120,"protein":3,"fat":8,"carbs":8,"unit":"g","default":30,"category":"Домашняя еда"},
    {"id":5137,"name":"🥫 Соус сметанный","calories":100,"protein":3,"fat":8,"carbs":4,"unit":"g","default":30,"category":"Домашняя еда"},
    {"id":5138,"name":"🥫 Соус томатный","calories":50,"protein":1.5,"fat":0.5,"carbs":10,"unit":"g","default":30,"category":"Домашняя еда"},
    {"id":5139,"name":"🥫 Соус грибной","calories":70,"protein":2,"fat":5,"carbs":5,"unit":"g","default":30,"category":"Домашняя еда"},
    {"id":5140,"name":"🥫 Подлива мясная","calories":80,"protein":4,"fat":5,"carbs":5,"unit":"g","default":50,"category":"Домашняя еда"}
];
// ========== 7. MYBOX ==========
const MYBOX_PRODUCTS = [
    // ========== СЕТЫ ==========
    {"id":7001,"name":"📦 Сет Икари 32 шт","calories":255,"protein":10,"fat":8,"carbs":32,"unit":"g","default":923,"category":"MYBOX"},
    {"id":7002,"name":"📦 Сет Дабл 24 шт","calories":241,"protein":9,"fat":7,"carbs":33,"unit":"g","default":907,"category":"MYBOX"},
    {"id":7003,"name":"📦 Сет М-Бокс spicy 14 шт","calories":230,"protein":9,"fat":7,"carbs":31,"unit":"pcs","options":[14],"category":"MYBOX"},
    {"id":7004,"name":"📦 Сет Лайк 40 шт","calories":245,"protein":10,"fat":8,"carbs":30,"unit":"pcs","options":[40],"category":"MYBOX"},
    {"id":7005,"name":"📦 Сет Любовь это... 24 шт","calories":250,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[24],"category":"MYBOX"},
    {"id":7006,"name":"📦 Сет Ронин 35 шт","calories":248,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[35],"category":"MYBOX"},
    {"id":7007,"name":"📦 Сет Царица 40 шт","calories":242,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[40],"category":"MYBOX"},
    {"id":7008,"name":"📦 Сет Соло 16 шт","calories":238,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[16],"category":"MYBOX"},
    {"id":7009,"name":"📦 Сет Семейный 72 шт","calories":240,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[72],"category":"MYBOX"},
    {"id":7010,"name":"📦 Сет Галактика Плюс 65 шт","calories":244,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[65],"category":"MYBOX"},
    {"id":7011,"name":"📦 Сет Мега Лосось 42 шт","calories":252,"protein":11,"fat":9,"carbs":30,"unit":"pcs","options":[42],"category":"MYBOX"},
    {"id":7012,"name":"📦 Сет Сотня Плюс 104 шт","calories":243,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[104],"category":"MYBOX"},
    {"id":7013,"name":"📦 Сет Мидийный 48 шт","calories":245,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[48],"category":"MYBOX"},
    {"id":7014,"name":"📦 Сет Море 34 шт","calories":240,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[34],"category":"MYBOX"},
    {"id":7015,"name":"📦 Сет Сити 40 шт","calories":238,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[40],"category":"MYBOX"},
    {"id":7016,"name":"📦 Сет Френдли 42 шт","calories":242,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[42],"category":"MYBOX"},
    {"id":7017,"name":"📦 Сет Филадельфия 24 шт","calories":260,"protein":10,"fat":10,"carbs":28,"unit":"pcs","options":[24],"category":"MYBOX"},
    {"id":7018,"name":"📦 Сет Хит запечённый 32 шт","calories":270,"protein":11,"fat":10,"carbs":30,"unit":"pcs","options":[32],"category":"MYBOX"},
    {"id":7019,"name":"📦 Сет Африка 32 шт","calories":245,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[32],"category":"MYBOX"},
    {"id":7020,"name":"📦 Сет Интересный 32 шт","calories":248,"protein":10,"fat":8,"carbs":31,"unit":"pcs","options":[32],"category":"MYBOX"},
    {"id":7021,"name":"📦 Сет Кранч 24 шт","calories":265,"protein":10,"fat":9,"carbs":30,"unit":"pcs","options":[24],"category":"MYBOX"},
    {"id":7022,"name":"📦 Сет Огонь 18 шт","calories":240,"protein":9,"fat":7,"carbs":32,"unit":"pcs","options":[18],"category":"MYBOX"},

    // ========== КЛАССИЧЕСКИЕ РОЛЛЫ ==========
    {"id":7023,"name":"🍣 Филадельфия","calories":260,"protein":10,"fat":10,"carbs":28,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7024,"name":"🍣 Калифорния","calories":280,"protein":9,"fat":10,"carbs":30,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7025,"name":"🍣 Ролл с лососем","calories":200,"protein":9,"fat":6,"carbs":30,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7026,"name":"🍣 Ролл с угрём","calories":240,"protein":10,"fat":8,"carbs":32,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7027,"name":"🍣 Ролл с креветкой","calories":210,"protein":8,"fat":7,"carbs":31,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7028,"name":"🍣 Ролл овощной","calories":161,"protein":3,"fat":0.3,"carbs":36.6,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7029,"name":"🍣 Ролл с тунцом","calories":210,"protein":10,"fat":6,"carbs":30,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7030,"name":"🍣 Ролл с копчёной курицей","calories":230,"protein":12,"fat":8,"carbs":28,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7031,"name":"🍣 Ролл с беконом","calories":260,"protein":11,"fat":11,"carbs":27,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7032,"name":"🍣 Ролл с крабом","calories":200,"protein":7,"fat":6,"carbs":30,"unit":"g","default":180,"category":"MYBOX"},

    // ========== TEMPURA (ЗАПЕЧЁННЫЕ/ТЕМПУРНЫЕ) ==========
    {"id":7033,"name":"🔥 Запечённый ролл с угрём","calories":280,"protein":11,"fat":11,"carbs":30,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7034,"name":"🔥 Запечённый ролл с лососем","calories":270,"protein":12,"fat":10,"carbs":31,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7035,"name":"🔥 Запечённый ролл с креветкой","calories":265,"protein":10,"fat":10,"carbs":32,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7036,"name":"🔥 Темпура ролл с креветкой","calories":290,"protein":10,"fat":12,"carbs":33,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7037,"name":"🔥 Темпура ролл с лососем","calories":285,"protein":11,"fat":12,"carbs":32,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7038,"name":"🔥 Запечённый ролл Чиз","calories":310,"protein":13,"fat":14,"carbs":30,"unit":"g","default":200,"category":"MYBOX"},

    // ========== СУШИ (НИГИРИ, ГУНКАНЫ) ==========
    {"id":7039,"name":"🍣 Суши с лососем","calories":90,"protein":4,"fat":3,"carbs":12,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7040,"name":"🍣 Суши с угрём","calories":100,"protein":4,"fat":3.5,"carbs":13,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7041,"name":"🍣 Суши с креветкой","calories":85,"protein":3.5,"fat":2.5,"carbs":12,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7042,"name":"🍣 Суши с тунцом","calories":90,"protein":4,"fat":2.5,"carbs":12,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7043,"name":"🍣 Гункан с лососем","calories":95,"protein":4,"fat":3.5,"carbs":11,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7044,"name":"🍣 Гункан с крабом","calories":85,"protein":3,"fat":3,"carbs":11,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7045,"name":"🍣 Гункан с сыром","calories":100,"protein":4,"fat":5,"carbs":10,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},
    {"id":7046,"name":"🍫 Гункан с масаго","calories":90,"protein":4,"fat":3,"carbs":11,"unit":"pcs","options":[2,4,6,8,10],"category":"MYBOX"},

    // ========== СПАЙСИ РОЛЛЫ ==========
    {"id":7047,"name":"🌶️ Спайси ролл с лососем","calories":250,"protein":11,"fat":9,"carbs":29,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7048,"name":"🌶️ Спайси ролл с тунцом","calories":245,"protein":11,"fat":8,"carbs":30,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7049,"name":"🌶️ Спайси ролл с креветкой","calories":240,"protein":10,"fat":8,"carbs":30,"unit":"g","default":180,"category":"MYBOX"},
    {"id":7050,"name":"🌶️ Спайси ролл с крабом","calories":235,"protein":9,"fat":8,"carbs":31,"unit":"g","default":180,"category":"MYBOX"},

    // ========== BOULS / ОЯКОДОН ==========
    {"id":7051,"name":"🥣 Оякодон с курицей","calories":450,"protein":22,"fat":15,"carbs":50,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7052,"name":"🥣 Оякодон с лососем","calories":480,"protein":24,"fat":16,"carbs":50,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7053,"name":"🥣 Оякодон с креветкой","calories":440,"protein":22,"fat":14,"carbs":52,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7054,"name":"🥣 Боул с лососем и авокадо","calories":420,"protein":20,"fat":15,"carbs":48,"unit":"g","default":400,"category":"MYBOX"},
    {"id":7055,"name":"🥣 Боул с курицей терияки","calories":410,"protein":24,"fat":12,"carbs":50,"unit":"g","default":400,"category":"MYBOX"},
    {"id":7056,"name":"🥣 Боул с тунцом","calories":390,"protein":22,"fat":10,"carbs":52,"unit":"g","default":400,"category":"MYBOX"},
    {"id":7057,"name":"🥣 Боул с креветкой и манго","calories":400,"protein":18,"fat":12,"carbs":55,"unit":"g","default":400,"category":"MYBOX"},

    // ========== ВОК / NOODLES ==========
    {"id":7058,"name":"🍜 Лапша вок с курицей","calories":450,"protein":20,"fat":15,"carbs":52,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7059,"name":"🍜 Лапша вок с креветкой","calories":430,"protein":18,"fat":14,"carbs":54,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7060,"name":"🍜 Лапша вок с говядиной","calories":470,"protein":22,"fat":16,"carbs":50,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7061,"name":"🍜 Лапша вок с овощами","calories":350,"protein":8,"fat":10,"carbs":55,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7062,"name":"🍜 Лапша вок с морепродуктами","calories":420,"protein":20,"fat":12,"carbs":52,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7063,"name":"🍜 Фунчоза с курицей","calories":380,"protein":18,"fat":12,"carbs":48,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7064,"name":"🍜 Удон с креветкой","calories":400,"protein":16,"fat":12,"carbs":55,"unit":"g","default":350,"category":"MYBOX"},
    {"id":7065,"name":"🍜 Рисовая лапша с морепродуктами (Пад Тай)","calories":420,"protein":18,"fat":14,"carbs":52,"unit":"g","default":350,"category":"MYBOX"},

    // ========== СУПЫ ==========
    {"id":7066,"name":"🍜 Том Ям с креветками","calories":258,"protein":9.1,"fat":8.3,"carbs":36.7,"unit":"g","default":415,"category":"MYBOX"},
    {"id":7067,"name":"🍜 Том Кха с курицей","calories":280,"protein":15,"fat":12,"carbs":28,"unit":"g","default":400,"category":"MYBOX"},
    {"id":7068,"name":"🍜 Мисо суп","calories":40,"protein":3,"fat":1.5,"carbs":5,"unit":"g","default":200,"category":"MYBOX"},
    {"id":7069,"name":"🍜 Лапша с курицей в бульоне","calories":350,"protein":18,"fat":12,"carbs":40,"unit":"g","default":450,"category":"MYBOX"},
    {"id":7070,"name":"🍜 Суп с вок-лапшой и морепродуктами","calories":380,"protein":20,"fat":14,"carbs":42,"unit":"g","default":450,"category":"MYBOX"},

    // ========== ЗАКУСКИ И ДОПОЛНИТЕЛЬНЫЕ БЛЮДА ==========
    {"id":7071,"name":"🍤 Креветки темпура 4 шт","calories":250,"protein":12,"fat":14,"carbs":20,"unit":"pcs","options":[4,6,8,10],"category":"MYBOX"},
    {"id":7072,"name":"🥟 Корейские манду (кунжутные)","calories":220,"protein":8,"fat":10,"carbs":25,"unit":"pcs","options":[4,6,8,10],"category":"MYBOX"},
    {"id":7073,"name":"🍗 Крылышки в кисло-сладком соусе","calories":280,"protein":18,"fat":15,"carbs":18,"unit":"g","default":150,"category":"MYBOX"},
    {"id":7074,"name":"🍗 Кунжутные куриные полоски","calories":290,"protein":18,"fat":16,"carbs":20,"unit":"g","default":150,"category":"MYBOX"},
    {"id":7075,"name":"🍤 Эби-темпура","calories":260,"protein":12,"fat":15,"carbs":20,"unit":"pcs","options":[4,6,8,10],"category":"MYBOX"},
    {"id":7076,"name":"🥟 Гёдза с курицей","calories":200,"protein":10,"fat":8,"carbs":22,"unit":"pcs","options":[4,6,8,10],"category":"MYBOX"},
    {"id":7077,"name":"🥟 Гёдза с овощами","calories":180,"protein":6,"fat":7,"carbs":24,"unit":"pcs","options":[4,6,8,10],"category":"MYBOX"},
    {"id":7078,"name":"🍤 Креветки попкорн","calories":280,"protein":14,"fat":16,"carbs":22,"unit":"g","default":120,"category":"MYBOX"},

    // ========== СОУСЫ ==========
    {"id":7079,"name":"🥫 Соус унаги (сладкий соус для роллов)","calories":180,"protein":1,"fat":0.5,"carbs":45,"unit":"g","default":30,"category":"MYBOX"},
    {"id":7080,"name":"🌶️ Соус спайси (острый соус)","calories":250,"protein":1,"fat":20,"carbs":15,"unit":"g","default":30,"category":"MYBOX"},
    {"id":7081,"name":"🥫 Соевый соус","calories":40,"protein":3,"fat":0,"carbs":7,"unit":"g","default":30,"category":"MYBOX"},
    {"id":7082,"name":"🧄 Чесночный соус","calories":400,"protein":1,"fat":35,"carbs":20,"unit":"g","default":30,"category":"MYBOX"},
    {"id":7083,"name":"🍊 Соус апельсиновый чили","calories":150,"protein":0,"fat":0,"carbs":38,"unit":"g","default":30,"category":"MYBOX"},
    {"id":7084,"name":"🥜 Ореховый соус","calories":450,"protein":5,"fat":35,"carbs":25,"unit":"g","default":30,"category":"MYBOX"}
];

// ========== 8. KFC / ROSTIC'S ==========
const KFC_PRODUCTS = [
    // ========== БУРГЕРЫ (ШЕФБУРГЕРЫ И ДР.) ==========
    {"id":49,"name":"🍔 Зингер Бургер","calories":670,"protein":28,"fat":35,"carbs":56,"unit":"g","default":274,"category":"KFC"},
    {"id":50,"name":"🍔 Биггер Бургер","calories":520,"protein":24,"fat":26,"carbs":48,"unit":"g","default":220,"category":"KFC"},
    {"id":51,"name":"🍔 Кентукки бургер","calories":580,"protein":26,"fat":30,"carbs":50,"unit":"g","default":250,"category":"KFC"},
    {"id":52,"name":"🍔 Чизбургер","calories":302,"protein":15,"fat":14,"carbs":30,"unit":"g","default":114,"category":"KFC"},
    {"id":53,"name":"🍔 Гамбургер","calories":261,"protein":15,"fat":11,"carbs":26,"unit":"g","default":108,"category":"KFC"},
    {"id":54,"name":"🍔 Чикенбургер","calories":339,"protein":16,"fat":13,"carbs":31,"unit":"g","default":100,"category":"KFC"},
    {"id":55,"name":"🍔 Лонгер","calories":450,"protein":20,"fat":22,"carbs":42,"unit":"g","default":200,"category":"KFC"},
    {"id":56,"name":"🍔 Шефбургер Оригинальный","calories":645,"protein":29,"fat":32,"carbs":59,"unit":"g","default":274,"category":"KFC","special":"big"},
    {"id":57,"name":"🍔 Шефбургер Острый","calories":645,"protein":29,"fat":32,"carbs":59,"unit":"g","default":274,"category":"KFC","special":"big"},
    {"id":58,"name":"🍔 Биг Маэстро Оригинальный","calories":620,"protein":30,"fat":30,"carbs":58,"unit":"g","default":260,"category":"KFC","special":"limited"},
    {"id":59,"name":"🍔 Биг Маэстро Острый","calories":620,"protein":30,"fat":30,"carbs":58,"unit":"g","default":260,"category":"KFC","special":"limited"},
    {"id":60,"name":"🍔 Шефролл Джуниор","calories":380,"protein":18,"fat":18,"carbs":38,"unit":"g","default":160,"category":"KFC"},
    
    // ========== РОЛЛЫ (БОКСМАСТЕРЫ, АЗИЯ РОЛЛ и др.) ==========
    {"id":61,"name":"🌯 Боксмастер Оригинальный","calories":460,"protein":19,"fat":20,"carbs":49,"unit":"g","default":100,"category":"KFC"},
    {"id":62,"name":"🌯 Боксмастер Острый","calories":460,"protein":19,"fat":20,"carbs":49,"unit":"g","default":100,"category":"KFC"},
    {"id":63,"name":"🌯 Боксмастер BBQ","calories":470,"protein":20,"fat":21,"carbs":50,"unit":"g","default":100,"category":"KFC"},
    {"id":64,"name":"🌯 Ростмастер Оригинальный","calories":450,"protein":20,"fat":19,"carbs":48,"unit":"g","default":200,"category":"KFC"},
    {"id":65,"name":"🌯 Ростмастер Острый","calories":450,"protein":20,"fat":19,"carbs":48,"unit":"g","default":200,"category":"KFC"},
    {"id":66,"name":"🌯 Азия Ролл с курицей","calories":460,"protein":22,"fat":18,"carbs":52,"unit":"g","default":200,"category":"KFC","special":"new"},
    {"id":67,"name":"🌯 Азия Ролл с креветками","calories":450,"protein":20,"fat":16,"carbs":54,"unit":"g","default":174,"category":"KFC","special":"new"},
    {"id":68,"name":"🌯 Мега Ролл Оригинальный","calories":635,"protein":33.2,"fat":26,"carbs":67,"unit":"g","default":313,"category":"KFC"},
    {"id":69,"name":"🌯 Мега Ролл Острый","calories":650,"protein":34,"fat":27,"carbs":68,"unit":"g","default":313,"category":"KFC"},
    {"id":70,"name":"🌯 Мега Ролл BBQ","calories":640,"protein":33,"fat":26.5,"carbs":67.5,"unit":"g","default":313,"category":"KFC"},
    {"id":71,"name":"🌯 Твистер Острый","calories":470,"protein":20,"fat":22,"carbs":48,"unit":"g","default":100,"category":"KFC"},
    {"id":72,"name":"🌯 Твистер Классический","calories":450,"protein":19,"fat":20,"carbs":47,"unit":"g","default":100,"category":"KFC"},
    {"id":73,"name":"🌯 Твистер BBQ","calories":460,"protein":20,"fat":21,"carbs":48,"unit":"g","default":100,"category":"KFC"},
    {"id":74,"name":"🥙 Шефролл Оригинальный","calories":430,"protein":18,"fat":19,"carbs":46,"unit":"g","default":180,"category":"KFC"},
    {"id":75,"name":"🥙 Шефролл Острый","calories":430,"protein":18,"fat":19,"carbs":46,"unit":"g","default":180,"category":"KFC"},

    // ========== БОЛЕЕ 301 НАИМЕНОВАНИЯ [citation:2] ==========
    
    // ========== БАСКЕТЫ / БОКСЫ / КОМБО ==========
    {"id":76,"name":"📦 Баскет Острый (6 крыльев + 4 ножки)","calories":290,"protein":19,"fat":20,"carbs":8,"unit":"set","default":430,"category":"KFC"},
    {"id":77,"name":"📦 Большое Комбо","calories":310,"protein":18,"fat":19,"carbs":22,"unit":"set","default":1800,"category":"KFC","special":"box"},
    {"id":78,"name":"📦 Бокс XXL (10 крыльев + 6 стрипсов)","calories":290,"protein":19,"fat":20,"carbs":10,"unit":"set","default":680,"category":"KFC","special":"box"},
    {"id":79,"name":"📦 Семейный бокс/Корзина","calories":300,"protein":18,"fat":19,"carbs":15,"unit":"set","default":1200,"category":"KFC","special":"box"},

    // ========== КУРИЦА ==========
    {"id":80,"name":"🍗 Куриные ножки","calories":250,"protein":18,"fat":18,"carbs":5,"unit":"pcs","options":[1,2,3,4,5,6],"category":"KFC"},
    {"id":81,"name":"🍗 Бедро куриное","calories":280,"protein":19,"fat":22,"carbs":6,"unit":"pcs","options":[1,2,3,4],"category":"KFC"},
    {"id":82,"name":"🍗 Крылышки 4 шт","calories":380,"protein":22,"fat":24,"carbs":16,"unit":"pcs","options":[4,6,8,12],"category":"KFC"},
    {"id":83,"name":"🍗 Крылышки 6 шт","calories":380,"protein":22,"fat":24,"carbs":16,"unit":"pcs","options":[6,8,12],"category":"KFC"},
    {"id":84,"name":"🍗 Крылышки 8 шт","calories":380,"protein":22,"fat":24,"carbs":16,"unit":"pcs","options":[8,12],"category":"KFC"},
    {"id":85,"name":"🍗 Крылышки 12 шт","calories":380,"protein":22,"fat":24,"carbs":16,"unit":"pcs","category":"KFC"},
    {"id":86,"name":"🍗 Острые Крылышки","calories":310,"protein":17,"fat":23,"carbs":9,"unit":"pcs","options":[4,6,8,12],"category":"KFC"},
    {"id":87,"name":"🍗 Стрипсы 3 шт","calories":270,"protein":21.1,"fat":10,"carbs":11.3,"unit":"pcs","options":[3,5,10],"category":"KFC"},
    {"id":88,"name":"🍗 Стрипсы 5 шт","calories":270,"protein":21.1,"fat":10,"carbs":11.3,"unit":"pcs","options":[5,10],"category":"KFC"},
    {"id":89,"name":"🍗 Стрипсы 10 шт","calories":270,"protein":21.1,"fat":10,"carbs":11.3,"unit":"pcs","category":"KFC"},
    {"id":90,"name":"🍗 Байтсы Малые (95г)","calories":220,"protein":20.8,"fat":11.5,"carbs":8.4,"unit":"g","default":95,"category":"KFC","special":"shareable"},
    {"id":91,"name":"🍗 Байтсы Средние (135г)","calories":220,"protein":20.8,"fat":11.5,"carbs":8.4,"unit":"g","default":135,"category":"KFC","special":"shareable"},
    {"id":92,"name":"🍗 Байтсы Большие (300г)","calories":220,"protein":20.8,"fat":11.5,"carbs":8.4,"unit":"g","default":300,"category":"KFC","special":"shareable"},
    {"id":93,"name":"🍗 Терияки Байтсы","calories":240,"protein":18,"fat":10,"carbs":20,"unit":"g","default":134,"category":"KFC","special":"limited"},
    {"id":94,"name":"🍗 Наггетсы 4 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","options":[4,6,9,20],"category":"KFC"},
    {"id":95,"name":"🍗 Наггетсы 6 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","options":[6,9,20],"category":"KFC"},
    {"id":96,"name":"🍗 Наггетсы 9 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","options":[9,20],"category":"KFC"},
    {"id":97,"name":"🍗 Наггетсы 20 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","category":"KFC"},

    // ========== МОРЕПРОДУКТЫ ==========
    {"id":98,"name":"🍤 Креветки 6 шт","calories":260,"protein":14,"fat":14,"carbs":20,"unit":"pcs","options":[6,12],"category":"KFC","special":"premium"},
    {"id":99,"name":"🍤 Креветки 12 шт","calories":260,"protein":14,"fat":14,"carbs":20,"unit":"pcs","options":[12],"category":"KFC","special":"premium"},

    // ========== КАРТОФЕЛЬ ==========
    {"id":100,"name":"🍟 Картофель фри маленький (60г)","calories":291,"protein":3.6,"fat":20.7,"carbs":22.6,"unit":"g","default":60,"category":"KFC"},
    {"id":101,"name":"🍟 Картофель фри стандартный (100г)","calories":291,"protein":3.6,"fat":20.7,"carbs":22.6,"unit":"g","default":100,"category":"KFC"},
    {"id":102,"name":"🍟 Картофель фри большой (150г)","calories":291,"protein":3.6,"fat":20.7,"carbs":22.6,"unit":"g","default":150,"category":"KFC"},
    {"id":103,"name":"🍟 Картофель по-деревенски малый (80г)","calories":265,"protein":3,"fat":17.4,"carbs":24.2,"unit":"g","default":80,"category":"KFC"},
    {"id":104,"name":"🍟 Картофель по-деревенски большой (135г)","calories":265,"protein":3,"fat":17.4,"carbs":24.2,"unit":"g","default":135,"category":"KFC"},

    // ========== БОЛЕЕ 81 НАИМЕНОВАНИЯ (ПРОДОЛЖЕНИЕ) ==========

    // ========== ВОК И УДОН (АЗИАТСКИЕ БЛЮДА) ==========
    {"id":105,"name":"🍜 Терияки Рис Боул","calories":210,"protein":12,"fat":6,"carbs":28,"unit":"g","default":307,"category":"KFC","special":"bowl"},
    {"id":106,"name":"🍜 Кебаб/Дёнер с курицей","calories":550,"protein":28,"fat":25,"carbs":52,"unit":"g","default":300,"category":"KFC","special":"limited"},
    {"id":107,"name":"🌯 Дюрюм (Дёнер в лаваше)","calories":580,"protein":29,"fat":26,"carbs":55,"unit":"g","default":320,"category":"KFC","special":"limited"},
    {"id":108,"name":"🥙 Фалафель (вегетарианский кебаб)","calories":420,"protein":12,"fat":15,"carbs":58,"unit":"g","default":250,"category":"KFC","special":"limited"},

    // ========== САЛАТЫ ==========
    {"id":109,"name":"🥗 Салат Цезарь","calories":220,"protein":15,"fat":12,"carbs":14,"unit":"g","default":162,"category":"KFC"},
    {"id":110,"name":"🥗 Салат Греческий","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":150,"category":"KFC"},

    // ========== СОУСЫ ==========
    {"id":111,"name":"🧀 Сырный соус","calories":90,"protein":1,"fat":9,"carbs":2,"unit":"g","default":30,"category":"KFC"},
    {"id":112,"name":"🧄 Чесночный соус","calories":84,"protein":0,"fat":8,"carbs":3,"unit":"g","default":30,"category":"KFC"},
    {"id":113,"name":"🥫 Барбекю соус","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"KFC"},
    {"id":114,"name":"🥫 Кисло-сладкий соус","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"g","default":30,"category":"KFC"},
    {"id":115,"name":"🥫 Кетчуп","calories":36,"protein":1,"fat":0,"carbs":8,"unit":"g","default":30,"category":"KFC"},
    {"id":116,"name":"🌶️ Соус Кебаб майонезный","calories":250,"protein":1,"fat":25,"carbs":5,"unit":"g","default":30,"category":"KFC","special":"limited"},
    {"id":117,"name":"🥫 Кебаб соус пикантный","calories":180,"protein":1,"fat":15,"carbs":10,"unit":"g","default":30,"category":"KFC","special":"limited"},

    // ========== ДЕСЕРТЫ ==========
    {"id":118,"name":"🍦 Мороженое стаканчик","calories":180,"protein":4,"fat":8,"carbs":22,"unit":"g","default":100,"category":"KFC"},
    {"id":119,"name":"🍦 Мороженое шоколадное","calories":190,"protein":4,"fat":9,"carbs":23,"unit":"g","default":100,"category":"KFC"},
    {"id":120,"name":"🍫 Чизкейк","calories":340,"protein":6,"fat":22,"carbs":30,"unit":"g","default":120,"category":"KFC"},
    {"id":121,"name":"🍩 Пончик","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"KFC"},
    {"id":122,"name":"🥨 Пирожок с вишней","calories":240,"protein":3,"fat":10,"carbs":33,"unit":"g","default":79,"category":"KFC"},

    // ========== НАПИТКИ ==========
    {"id":123,"name":"🥤 Кола","calories":42,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":330,"category":"KFC"},
    {"id":124,"name":"🥤 Кола без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"KFC"},
    {"id":125,"name":"🥤 Спрайт","calories":42,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":330,"category":"KFC"},
    {"id":126,"name":"🥤 Фанта","calories":42,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":330,"category":"KFC"},
    {"id":127,"name":"🧃 Липтон Айс Ти (Лимон)","calories":134,"protein":0,"fat":0,"carbs":34,"unit":"ml","default":330,"category":"KFC"},
    {"id":128,"name":"🥤 Лимонад на выбор","calories":100,"protein":0,"fat":0,"carbs":25,"unit":"ml","default":400,"category":"KFC"},
    {"id":129,"name":"🧃 Сок J7 Апельсиновый","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"KFC"},
    {"id":130,"name":"☕ Кофе Средний (Капучино)","calories":55,"protein":2,"fat":2,"carbs":6,"unit":"ml","default":250,"category":"KFC"},
    {"id":131,"name":"💧 Вода питьевая","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":500,"category":"KFC"},
    {"id":132,"name":"🥛 Молоко (для кофе)","calories":54,"protein":3,"fat":2.5,"carbs":4.7,"unit":"ml","default":50,"category":"KFC"},

    // ========== ДЕТСКОЕ МЕНЮ ==========
    {"id":133,"name":"🍔 Кидз бургер","calories":350,"protein":15,"fat":16,"carbs":36,"unit":"g","default":120,"category":"KFC"},
    {"id":134,"name":"🍗 Кидз наггетсы 4 шт","calories":179,"protein":11,"fat":9,"carbs":12,"unit":"pcs","category":"KFC"},
    {"id":135,"name":"🍟 Кидз картофель фри","calories":291,"protein":3.6,"fat":20.7,"carbs":22.6,"unit":"g","default":60,"category":"KFC"},
    {"id":136,"name":"🧃 Кидз сок","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":200,"category":"KFC"}
];

// ========== 9. ONE PRICE COFFEE ==========
const ONEPRICE_PRODUCTS = [
    // ========== КОФЕ ==========
    {"id":8001,"name":"☕ Американо","calories":5,"protein":0.2,"fat":0,"carbs":0.8,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8002,"name":"☕ Эспрессо","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":30,"category":"One Price Coffee"},
    {"id":8003,"name":"☕ Двойной эспрессо","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":60,"category":"One Price Coffee"},
    {"id":8004,"name":"☕ Капучино","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8005,"name":"☕ Латте","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8006,"name":"☕ Флэт Уайт","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":200,"category":"One Price Coffee"},
    {"id":8007,"name":"☕ Мокко (Мокачино)","calories":65,"protein":2.5,"fat":3,"carbs":7,"unit":"ml","default":300,"category":"One Price Coffee"},

    // ========== АВТОРСКИЕ НАПИТКИ ==========
    {"id":8008,"name":"☕ Раф Классический","calories":88,"protein":2.9,"fat":5.8,"carbs":7.1,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8009,"name":"☕ Раф Ванильный","calories":95,"protein":2.8,"fat":5.5,"carbs":9,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8010,"name":"☕ Раф Карамельный","calories":100,"protein":2.7,"fat":5.5,"carbs":10,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8011,"name":"☕ Раф Медовый","calories":98,"protein":2.8,"fat":5.5,"carbs":9.5,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8012,"name":"☕ Раф Арахисовое пралине Сакура","calories":75,"protein":2.5,"fat":2.5,"carbs":10.8,"unit":"ml","default":400,"category":"One Price Coffee","note":"калорийность на 100мл"},
    {"id":8013,"name":"☕ Капучино Карамель-Лайм","calories":127,"protein":2.4,"fat":1.9,"carbs":26.8,"unit":"ml","default":400,"category":"One Price Coffee","note":"калорийность на 100мл"},
    {"id":8014,"name":"☕ Бамбл (Bumble)","calories":85,"protein":2.5,"fat":3.5,"carbs":11,"unit":"ml","default":350,"category":"One Price Coffee"},

    // ========== ЧАЙ И МАТЧА ==========
    {"id":8015,"name":"🍵 Матча","calories":45,"protein":3,"fat":1.5,"carbs":5,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8016,"name":"🍵 Матча-латте","calories":63,"protein":2.4,"fat":2.6,"carbs":7.7,"unit":"ml","default":400,"category":"One Price Coffee","note":"калорийность на 100мл"},
    {"id":8017,"name":"🍵 Матча Зеленая","calories":63,"protein":2.4,"fat":2.6,"carbs":7.7,"unit":"ml","default":400,"category":"One Price Coffee"},
    {"id":8018,"name":"🍵 Чай черный","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8019,"name":"🍵 Чай зеленый","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8020,"name":"🍵 Чай улун","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8021,"name":"🍵 Чай Эрл Грей","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"One Price Coffee"},

    // ========== ГОРЯЧИЙ ШОКОЛАД ==========
    {"id":8022,"name":"🍫 Горячий шоколад","calories":90,"protein":3,"fat":4,"carbs":12,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8023,"name":"🍫 Горячий шоколад с маршмеллоу","calories":110,"protein":3.2,"fat":4.5,"carbs":15,"unit":"ml","default":300,"category":"One Price Coffee"},
    {"id":8024,"name":"🍫 Какао","calories":75,"protein":3,"fat":3,"carbs":9,"unit":"ml","default":300,"category":"One Price Coffee"},

    // ========== ХОЛОДНЫЕ НАПИТКИ ==========
    {"id":8025,"name":"🧊 Айс-кофе","calories":35,"protein":1.5,"fat":1.5,"carbs":4,"unit":"ml","default":400,"category":"One Price Coffee"},
    {"id":8026,"name":"🧊 Айс-латте","calories":45,"protein":2,"fat":2,"carbs":5,"unit":"ml","default":400,"category":"One Price Coffee"},
    {"id":8027,"name":"🧊 Фраппе","calories":85,"protein":2,"fat":3,"carbs":12,"unit":"ml","default":400,"category":"One Price Coffee"},
    {"id":8028,"name":"🧊 Лимонад","calories":35,"protein":0,"fat":0,"carbs":9,"unit":"ml","default":400,"category":"One Price Coffee"},

    // ========== ДЕСЕРТЫ ==========
    {"id":8029,"name":"🍰 Чизкейк классический","calories":320,"protein":6,"fat":22,"carbs":25,"unit":"g","default":120,"category":"One Price Coffee"},
    {"id":8030,"name":"🍰 Чизкейк Нью-Йорк","calories":340,"protein":7,"fat":24,"carbs":26,"unit":"g","default":120,"category":"One Price Coffee"},
    {"id":8031,"name":"🍮 Панна-котта","calories":250,"protein":4,"fat":18,"carbs":20,"unit":"g","default":120,"category":"One Price Coffee"},
    {"id":8032,"name":"🍫 Брауни","calories":450,"protein":5,"fat":25,"carbs":50,"unit":"g","default":80,"category":"One Price Coffee"},
    {"id":8033,"name":"🥐 Круассан","calories":400,"protein":6,"fat":20,"carbs":48,"unit":"g","default":80,"category":"One Price Coffee"},
    {"id":8034,"name":"🥨 Пирожное картошка","calories":380,"protein":4,"fat":18,"carbs":50,"unit":"g","default":90,"category":"One Price Coffee"},
    {"id":8035,"name":"🍪 Печенье с шоколадом","calories":480,"protein":6,"fat":22,"carbs":65,"unit":"g","default":50,"category":"One Price Coffee"},
    {"id":8036,"name":"🍪 Овсяное печенье","calories":420,"protein":7,"fat":16,"carbs":62,"unit":"g","default":50,"category":"One Price Coffee"},

    // ========== ВЫПЕЧКА ==========
    {"id":8037,"name":"🥐 Круассан с шоколадом","calories":440,"protein":7,"fat":22,"carbs":52,"unit":"g","default":85,"category":"One Price Coffee"},
    {"id":8038,"name":"🥐 Круассан с миндалем","calories":450,"protein":8,"fat":24,"carbs":50,"unit":"g","default":85,"category":"One Price Coffee"},
    {"id":8039,"name":"🥐 Синнабон","calories":380,"protein":6,"fat":18,"carbs":48,"unit":"g","default":100,"category":"One Price Coffee"},
    {"id":8040,"name":"🍩 Пончик","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"One Price Coffee"},
    {"id":8041,"name":"🍩 Пончик с начинкой","calories":410,"protein":5,"fat":20,"carbs":50,"unit":"g","default":85,"category":"One Price Coffee"},

    // ========== СЭНДВИЧИ ==========
    {"id":8042,"name":"🥪 Сэндвич с курицей","calories":250,"protein":15,"fat":10,"carbs":25,"unit":"g","default":150,"category":"One Price Coffee"},
    {"id":8043,"name":"🥪 Сэндвич с лососем","calories":280,"protein":14,"fat":12,"carbs":28,"unit":"g","default":150,"category":"One Price Coffee"},
    {"id":8044,"name":"🥪 Сэндвич с ветчиной и сыром","calories":260,"protein":12,"fat":14,"carbs":22,"unit":"g","default":150,"category":"One Price Coffee"},
    {"id":8045,"name":"🥪 Тосты с авокадо","calories":220,"protein":6,"fat":14,"carbs":18,"unit":"g","default":120,"category":"One Price Coffee"},

    // ========== СИРОПЫ (ДОБАВКИ) ==========
    {"id":8046,"name":"🍯 Сироп Карамельный","calories":300,"protein":0,"fat":0,"carbs":75,"unit":"ml","default":20,"category":"One Price Coffee"},
    {"id":8047,"name":"🍯 Сироп Ванильный","calories":300,"protein":0,"fat":0,"carbs":75,"unit":"ml","default":20,"category":"One Price Coffee"},
    {"id":8048,"name":"🍯 Сироп Фундук","calories":300,"protein":0,"fat":0,"carbs":75,"unit":"ml","default":20,"category":"One Price Coffee"},
    {"id":8049,"name":"🍯 Сироп Кокос","calories":300,"protein":0,"fat":0,"carbs":75,"unit":"ml","default":20,"category":"One Price Coffee"},
    {"id":8050,"name":"🍯 Сироп Медовый","calories":300,"protein":0,"fat":0,"carbs":75,"unit":"ml","default":20,"category":"One Price Coffee"}
];

// ========== 10. SURF COFFEE ==========
const SURF_PRODUCTS = [
    // ========== КОФЕ (КЛАССИЧЕСКИЙ) ==========
    {"id":9001,"name":"☕ Американо","calories":5,"protein":0.2,"fat":0,"carbs":0.8,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9002,"name":"☕ Капучино","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9003,"name":"☕ Латте","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9004,"name":"☕ Флэт Уайт","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":200,"category":"Surf Coffee"},
    {"id":9005,"name":"☕ Фильтр кофе","calories":4,"protein":0.2,"fat":0,"carbs":0.6,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== ФИРМЕННЫЕ НАПИТКИ ==========
    {"id":9006,"name":"☕ Двойной Гавайский","calories":65,"protein":2.2,"fat":3.5,"carbs":6.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9007,"name":"☕ Малиновый Латте","calories":70,"protein":2.47,"fat":2.62,"carbs":8.94,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== РАФЫ ==========
    {"id":9008,"name":"☕ Раф Классический","calories":88,"protein":2.9,"fat":5.8,"carbs":7.1,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9009,"name":"☕ Раф Солёная Карамель","calories":95,"protein":2.8,"fat":5.5,"carbs":9,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9010,"name":"☕ Раф Лавандовый","calories":90,"protein":2.7,"fat":5.5,"carbs":8.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9011,"name":"☕ Раф Пуэрториканский","calories":100,"protein":2.8,"fat":6,"carbs":9,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9012,"name":"☕ Джинджер Раф","calories":85,"protein":2.5,"fat":5,"carbs":8,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== АВТОРСКИЕ НАПИТКИ (ДОМ МЕЧТАТЕЛЕЙ) ==========
    {"id":9013,"name":"🍊 Капучино Пряный Мандарин","calories":70,"protein":2.4,"fat":3,"carbs":8.5,"unit":"ml","default":300,"category":"Surf Coffee","special":"limited"},
    {"id":9014,"name":"🍫 Мокко Цитрусовый Брауни","calories":85,"protein":2.5,"fat":3.5,"carbs":11,"unit":"ml","default":300,"category":"Surf Coffee","special":"limited"},
    {"id":9015,"name":"🍵 Матча Белый Юдзу","calories":75,"protein":2.5,"fat":3.2,"carbs":9,"unit":"ml","default":300,"category":"Surf Coffee","special":"limited"},

    // ========== ЧАЙ ==========
    {"id":9016,"name":"🍵 Чай Чиллин (облепиха-имбирь)","calories":35,"protein":0.2,"fat":0,"carbs":8.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9017,"name":"🍵 Чай Биарриц (малина-лимон-мята)","calories":30,"protein":0.2,"fat":0,"carbs":7.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9018,"name":"🍵 Чай Латте","calories":55,"protein":1.5,"fat":2.5,"carbs":7,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9019,"name":"🍵 Матча Латте","calories":63,"protein":2.4,"fat":2.6,"carbs":7.7,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9020,"name":"🍵 Иван-чай","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9021,"name":"🍵 Гречишный чай","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9022,"name":"🍵 Да Хун Пао (улун)","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9023,"name":"🍵 Молочный улун","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9024,"name":"🍵 Габа фермерская (улун)","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== ГОРЯЧИЙ ШОКОЛАД И КАКАО ==========
    {"id":9025,"name":"🍫 Какао","calories":75,"protein":3,"fat":3,"carbs":9,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9026,"name":"🍫 Бин ту бар какао","calories":85,"protein":3.2,"fat":3.5,"carbs":10,"unit":"ml","default":200,"category":"Surf Coffee"},

    // ========== ХОЛОДНЫЕ НАПИТКИ ==========
    {"id":9027,"name":"🧊 Айс Латте","calories":45,"protein":2,"fat":2,"carbs":5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9028,"name":"🧊 Эспрессо Тоник","calories":30,"protein":0.3,"fat":0,"carbs":7,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9029,"name":"🧊 Айс Матча Латте","calories":55,"protein":2,"fat":2,"carbs":7,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9030,"name":"🧊 Айс Матча Тоник","calories":40,"protein":1,"fat":1,"carbs":8,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9031,"name":"🧊 Мэверик Бамбл","calories":65,"protein":1,"fat":1.5,"carbs":13,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== ЛИМОНАДЫ ==========
    {"id":9032,"name":"🍋 Лимонад Кейптаун","calories":35,"protein":0.2,"fat":0,"carbs":8.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9033,"name":"🍋 Лимонад Флауэр Пауэр","calories":38,"protein":0.2,"fat":0,"carbs":9,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9034,"name":"🍋 Лимонад Дабл Элевен","calories":36,"protein":0.2,"fat":0,"carbs":8.8,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== СМУЗИ ==========
    {"id":9035,"name":"🥤 Смузи Португальский","calories":85,"protein":2,"fat":2.5,"carbs":14,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9036,"name":"🥤 Смузи Бали Бум","calories":80,"protein":2,"fat":2,"carbs":13.5,"unit":"ml","default":300,"category":"Surf Coffee"},

    // ========== КОМПОТЫ И ФРЕШИ ==========
    {"id":9037,"name":"🍎 Грушево-вишневый компот","calories":30,"protein":0.2,"fat":0,"carbs":7.5,"unit":"ml","default":300,"category":"Surf Coffee"},
    {"id":9038,"name":"🍊 Апельсиновый фреш","calories":45,"protein":0.7,"fat":0.2,"carbs":10.5,"unit":"ml","default":200,"category":"Surf Coffee"},
    {"id":9039,"name":"🍏 Яблочный фреш","calories":46,"protein":0.2,"fat":0.1,"carbs":11,"unit":"ml","default":200,"category":"Surf Coffee"},

    // ========== ДЕСЕРТЫ ==========
    {"id":9040,"name":"🍫 Брауни с морской солью","calories":450,"protein":5,"fat":25,"carbs":50,"unit":"g","default":70,"category":"Surf Coffee"},
    {"id":9041,"name":"🍋 Кекс Мак-лимон","calories":380,"protein":5.5,"fat":18,"carbs":48,"unit":"g","default":85,"category":"Surf Coffee"},
    {"id":9042,"name":"🍌 Кекс Банан-пекан","calories":390,"protein":6,"fat":19,"carbs":47,"unit":"g","default":85,"category":"Surf Coffee"},
    {"id":9043,"name":"🌱 Вегетарианский брауни с бананом и финиками","calories":320,"protein":4.5,"fat":14,"carbs":45,"unit":"g","default":80,"category":"Surf Coffee"},

    // ========== БУТЫЛИРОВАННЫЕ НАПИТКИ ==========
    {"id":9044,"name":"💧 Вода минеральная Surf","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":500,"category":"Surf Coffee"},
    {"id":9045,"name":"🧴 Лимонад Matcha Elixir","calories":35,"protein":0.2,"fat":0,"carbs":8.5,"unit":"ml","default":330,"category":"Surf Coffee"}
];

// ========== 11. ШОКОЛАДНИЦА ==========
const SHOKOLADNITSA_PRODUCTS = [
    // ========== КОФЕ ==========
    {"id":10001,"name":"☕ Американо","calories":5,"protein":0.2,"fat":0,"carbs":0.8,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10002,"name":"☕ Капучино","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10003,"name":"☕ Латте","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10004,"name":"☕ Флэт Уайт","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":200,"category":"Шоколадница"},
    {"id":10005,"name":"☕ Эспрессо","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":30,"category":"Шоколадница"},
    {"id":10006,"name":"☕ Двойной эспрессо","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":60,"category":"Шоколадница"},
    {"id":10007,"name":"☕ Раф","calories":88,"protein":2.9,"fat":5.8,"carbs":7.1,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10008,"name":"☕ Глясе","calories":85,"protein":2,"fat":4,"carbs":10,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10009,"name":"☕ Латте имбирный пряник (зимнее промо)","calories":70,"protein":2.2,"fat":3,"carbs":9,"unit":"ml","default":350,"category":"Шоколадница","special":"seasonal"},
    {"id":10010,"name":"☕ Капучино на кокосовом молоке","calories":27,"protein":1.4,"fat":1.1,"carbs":2.8,"unit":"ml","default":360,"category":"Шоколадница","note":"калорийность на 100мл: 27 ккал. На порцию 360 мл: 98 ккал"},

    // ========== АВТОРСКИЕ НАПИТКИ ==========
    {"id":10011,"name":"☕ Мокко","calories":65,"protein":2.5,"fat":3,"carbs":7,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10012,"name":"☕ Медовый раф","calories":95,"protein":2.8,"fat":5.5,"carbs":9,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10013,"name":"☕ Соленая карамель латте","calories":90,"protein":2.5,"fat":4.5,"carbs":11,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10014,"name":"☕ Кокосовый капучино","calories":27,"protein":1.4,"fat":1.1,"carbs":2.8,"unit":"ml","default":360,"category":"Шоколадница"},

    // ========== ГОРЯЧИЙ ШОКОЛАД ==========
    {"id":10015,"name":"🍫 Горячий шоколад классический","calories":90,"protein":3,"fat":4,"carbs":12,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10016,"name":"🍫 Горячий шоколад с маршмеллоу","calories":110,"protein":3.2,"fat":4.5,"carbs":15,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10017,"name":"🍫 Какао","calories":75,"protein":3,"fat":3,"carbs":9,"unit":"ml","default":300,"category":"Шоколадница"},

    // ========== ЧАЙ ==========
    {"id":10018,"name":"🍵 Чай черный","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10019,"name":"🍵 Чай зеленый","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10020,"name":"🍵 Чай с бергамотом","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10021,"name":"🍵 Матча-латте","calories":63,"protein":2.4,"fat":2.6,"carbs":7.7,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10022,"name":"🍵 Гречишный чай","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Шоколадница"},
    {"id":10023,"name":"🍵 Цикорий (постное меню)","calories":3,"protein":0.1,"fat":0,"carbs":0.7,"unit":"ml","default":200,"category":"Шоколадница","special":"post"},
    {"id":10024,"name":"🥤 Смузи Витаминный заряд (клюква, апельсин, мед, банан)","calories":65,"protein":0.8,"fat":0.3,"carbs":15,"unit":"ml","default":300,"category":"Шоколадница","special":"post"},

    // ========== САЛАТЫ ==========
    {"id":10025,"name":"🥗 Салат Цезарь с курицей","calories":220,"protein":15,"fat":14,"carbs":9,"unit":"g","default":200,"category":"Шоколадница"},
    {"id":10026,"name":"🥗 Салат Греческий","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":150,"category":"Шоколадница"},
    {"id":10027,"name":"🥗 Салат Золотая рыбка (лосось г/к, слабосоленый лосось, картофель, овощи)","calories":295,"protein":12,"fat":23,"carbs":9,"unit":"g","default":200,"category":"Шоколадница","special":"seasonal"},
    {"id":10028,"name":"🥗 Салат с тыквой и кабачком (постное меню)","calories":80,"protein":1.5,"fat":5,"carbs":8,"unit":"g","default":150,"category":"Шоколадница","special":"post"},
    {"id":10029,"name":"🥗 Салат микс (гарнир)","calories":50,"protein":1,"fat":3,"carbs":5,"unit":"g","default":80,"category":"Шоколадница"},

    // ========== СУПЫ ==========
    {"id":10030,"name":"🥣 Тыквенный крем-суп","calories":65,"protein":1.5,"fat":4,"carbs":6,"unit":"g","default":250,"category":"Шоколадница","special":"post"},
    {"id":10031,"name":"🥣 Суп томатный","calories":45,"protein":1,"fat":2.5,"carbs":5,"unit":"g","default":250,"category":"Шоколадница"},

    // ========== ГОРЯЧИЕ БЛЮДА ==========
    {"id":10032,"name":"🍝 Паста Карбонара","calories":320,"protein":14,"fat":18,"carbs":28,"unit":"g","default":250,"category":"Шоколадница"},
    {"id":10033,"name":"🍝 Паста Болоньезе (постное меню)","calories":250,"protein":12,"fat":8,"carbs":32,"unit":"g","default":280,"category":"Шоколадница","special":"post"},
    {"id":10034,"name":"🍝 Паста со сливочным постным песто (руккола, кедровые орехи)","calories":280,"protein":7,"fat":14,"carbs":32,"unit":"g","default":250,"category":"Шоколадница","special":"post"},
    {"id":10035,"name":"🍝 Паста тальятелле с копченым лососем","calories":270,"protein":12,"fat":14,"carbs":27,"unit":"g","default":270,"category":"Шоколадница","special":"seasonal"},
    {"id":10036,"name":"🍚 Рис с овощами","calories":140,"protein":3,"fat":4,"carbs":23,"unit":"g","default":200,"category":"Шоколадница"},
    {"id":10037,"name":"🍖 Пир Щелкунчика (томленые говяжьи щечки, картофельное пюре)","calories":356,"protein":18,"fat":24,"carbs":16,"unit":"g","default":250,"category":"Шоколадница","special":"seasonal"},
    {"id":10038,"name":"🥔 Драники по щучьему веленью (с икрой и сметаной)","calories":247,"protein":8,"fat":15,"carbs":21,"unit":"g","default":190,"category":"Шоколадница","special":"seasonal"},
    {"id":10039,"name":"🍳 Сбалансированный завтрак (с тыквой, авокадо, тофу, песто)","calories":180,"protein":7,"fat":12,"carbs":13,"unit":"g","default":250,"category":"Шоколадница","special":"post"},
    {"id":10040,"name":"🍳 Английский завтрак","calories":250,"protein":16,"fat":14,"carbs":18,"unit":"g","default":300,"category":"Шоколадница"},

    // ========== ДЕСЕРТЫ ==========
    {"id":10041,"name":"🍰 Чизкейк Нью-Йорк","calories":340,"protein":7,"fat":24,"carbs":26,"unit":"g","default":130,"category":"Шоколадница"},
    {"id":10042,"name":"🍰 Чизкейк классический","calories":320,"protein":6,"fat":22,"carbs":25,"unit":"g","default":130,"category":"Шоколадница"},
    {"id":10043,"name":"🍫 Брауни","calories":450,"protein":5,"fat":25,"carbs":50,"unit":"g","default":80,"category":"Шоколадница"},
    {"id":10044,"name":"🍮 Панна-котта","calories":250,"protein":4,"fat":18,"carbs":20,"unit":"g","default":120,"category":"Шоколадница"},
    {"id":10045,"name":"🍰 Медовик","calories":380,"protein":5,"fat":18,"carbs":50,"unit":"g","default":120,"category":"Шоколадница"},
    {"id":10046,"name":"🍰 Тирамису","calories":350,"protein":6,"fat":20,"carbs":36,"unit":"g","default":120,"category":"Шоколадница"},
    {"id":10047,"name":"🍫 Тофники (сырники из тофу с вишневым вареньем)","calories":210,"protein":6,"fat":12,"carbs":20,"unit":"g","default":140,"category":"Шоколадница","special":"post"},
    {"id":10048,"name":"🌱 Тофники с кокосовым кремом","calories":230,"protein":6.5,"fat":13,"carbs":22,"unit":"g","default":150,"category":"Шоколадница","special":"post"},
    {"id":10049,"name":"🏰 Ключ к сердцу Кая (ромовая баба, апельсиновый апероль соус, безе)","calories":290,"protein":3,"fat":12,"carbs":42,"unit":"g","default":140,"category":"Шоколадница","special":"seasonal"},
    {"id":10050,"name":"👸 Сырники Снежной королевы (с соусом чатни из черноплодной рябины)","calories":233,"protein":9,"fat":12,"carbs":23,"unit":"g","default":210,"category":"Шоколадница","special":"seasonal"},

    // ========== ВЫПЕЧКА ==========
    {"id":10051,"name":"🥐 Круассан","calories":400,"protein":6,"fat":20,"carbs":48,"unit":"g","default":80,"category":"Шоколадница"},
    {"id":10052,"name":"🥐 Круассан с шоколадом","calories":440,"protein":7,"fat":22,"carbs":52,"unit":"g","default":85,"category":"Шоколадница"},
    {"id":10053,"name":"🍪 Печенье с шоколадом","calories":480,"protein":6,"fat":22,"carbs":65,"unit":"g","default":50,"category":"Шоколадница"},

    // ========== КОМБО НАБОРЫ ==========
    {"id":10054,"name":"📦 Комбо Обед (паста + суп)","calories":300,"protein":12,"fat":14,"carbs":34,"unit":"g","default":500,"category":"Шоколадница","special":"post"},
    {"id":10055,"name":"📦 Комбо Ужин (суп + десерт)","calories":280,"protein":8,"fat":16,"carbs":28,"unit":"g","default":400,"category":"Шоколадница","special":"post"}
];


// ========== 12. КОФЕМАНИЯ ==========
const COFFEEMANIA_PRODUCTS = [
    // ========== КОФЕ ==========
    {"id":11001,"name":"☕ Американо","calories":5,"protein":0.2,"fat":0,"carbs":0.8,"unit":"ml","default":200,"category":"Кофемания"},
    {"id":11002,"name":"☕ Американо доппио","calories":5,"protein":0.2,"fat":0,"carbs":0.8,"unit":"ml","default":200,"category":"Кофемания"},
    {"id":11003,"name":"☕ Эспрессо","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":30,"category":"Кофемания"},
    {"id":11004,"name":"☕ Эспрессо доппио","calories":3,"protein":0.1,"fat":0.1,"carbs":0.5,"unit":"ml","default":60,"category":"Кофемания"},
    {"id":11005,"name":"☕ Капучино","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":200,"category":"Кофемания"},
    {"id":11006,"name":"☕ Капучино гранде","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":350,"category":"Кофемания"},
    {"id":11007,"name":"☕ Капучино крим","calories":65,"protein":2,"fat":5,"carbs":4,"unit":"ml","default":200,"category":"Кофемания"},
    {"id":11008,"name":"☕ Капучино крим 350мл","calories":65,"protein":2,"fat":5,"carbs":4,"unit":"ml","default":350,"category":"Кофемания"},
    {"id":11009,"name":"☕ Латте","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11010,"name":"☕ Латте 400мл","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":400,"category":"Кофемания"},
    {"id":11011,"name":"☕ Флэт уайт","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":230,"category":"Кофемания"},
    {"id":11012,"name":"☕ Пикколо","calories":46,"protein":2.4,"fat":2.6,"carbs":3.2,"unit":"ml","default":150,"category":"Кофемания"},
    
    // ========== ФИЛЬТР-КОФЕ ==========
    {"id":11013,"name":"☕ Фильтр-кофе Гватемала Гаскон","calories":4,"protein":0.2,"fat":0,"carbs":0.6,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11014,"name":"☕ Фильтр-кофе Эфиопия Бомбе","calories":4,"protein":0.2,"fat":0,"carbs":0.6,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11015,"name":"☕ Фильтр-кофе Эфиопия Сидамо","calories":4,"protein":0.2,"fat":0,"carbs":0.6,"unit":"ml","default":300,"category":"Кофемания"},
    
    // ========== РАФЫ ==========
    {"id":11016,"name":"☕ Раф The Original","calories":88,"protein":2.9,"fat":5.8,"carbs":7.1,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11017,"name":"☕ Раф апельсиновый","calories":90,"protein":2.5,"fat":5.5,"carbs":8.5,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11018,"name":"☕ Раф мандарин","calories":85,"protein":2.3,"fat":5,"carbs":8,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11019,"name":"☕ Раф молочный","calories":88,"protein":2.9,"fat":5.8,"carbs":7.1,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11020,"name":"☕ Раф миндаль","calories":95,"protein":3,"fat":6,"carbs":7.5,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11021,"name":"☕ Раф цикорий","calories":55,"protein":1.2,"fat":2.5,"carbs":7,"unit":"ml","default":300,"category":"Кофемания","note":"на овсяной основе без кофеина"},
    {"id":11022,"name":"☕ Раф Moss","calories":70,"protein":2,"fat":3.5,"carbs":8,"unit":"ml","default":300,"category":"Кофемания","note":"с матчей на кокосовой основе"},
    
    // ========== ЛАТТЕ АВТОРСКИЕ ==========
    {"id":11023,"name":"☕ Латте Сингапур","calories":65,"protein":2,"fat":3,"carbs":8,"unit":"ml","default":230,"category":"Кофемания","note":"сливочная карамель с лемонграссом"},
    {"id":11024,"name":"☕ Латте Сингапур 400мл","calories":65,"protein":2,"fat":3,"carbs":8,"unit":"ml","default":400,"category":"Кофемания"},
    {"id":11025,"name":"☕ Латте Халва","calories":70,"protein":2.2,"fat":3.5,"carbs":8.5,"unit":"ml","default":300,"category":"Кофемания","note":"халва, кокосовая основа, кунжут"},
    {"id":11026,"name":"☕ Латте киндер","calories":75,"protein":2.5,"fat":4,"carbs":9,"unit":"ml","default":300,"category":"Кофемания","note":"ганаш из белого шоколада"},
    {"id":11027,"name":"☕ Латте матча","calories":63,"protein":2.4,"fat":2.6,"carbs":7.7,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11028,"name":"☕ Латте матча и манго","calories":70,"protein":2,"fat":3,"carbs":9,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11029,"name":"☕ Латте куркума","calories":50,"protein":1.5,"fat":2.5,"carbs":6,"unit":"ml","default":300,"category":"Кофемания","note":"пряный, веганский"},
    {"id":11030,"name":"☕ Индийский латте","calories":55,"protein":1.5,"fat":2,"carbs":8,"unit":"ml","default":300,"category":"Кофемания","note":"банановая основа со специями"},
    {"id":11031,"name":"☕ Бамбл","calories":91,"protein":1,"fat":0.1,"carbs":21.4,"unit":"ml","default":300,"category":"Кофемания","source":"fatsecret [citation:1]"},
    
    // ========== КАКАО И ГОРЯЧИЙ ШОКОЛАД ==========
    {"id":11032,"name":"🍫 Какао","calories":75,"protein":3,"fat":3,"carbs":9,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11033,"name":"🍫 Какао 400мл","calories":75,"protein":3,"fat":3,"carbs":9,"unit":"ml","default":400,"category":"Кофемания"},
    {"id":11034,"name":"🍫 Апельсиновое какао","calories":85,"protein":2.5,"fat":3.5,"carbs":11,"unit":"ml","default":300,"category":"Кофемания","note":"сезонное"},
    {"id":11035,"name":"🍫 Белое какао","calories":90,"protein":2,"fat":4,"carbs":12,"unit":"ml","default":300,"category":"Кофемания","note":"на овсяной основе с белым шоколадом"},
    {"id":11036,"name":"🍫 Какао на грибах","calories":65,"protein":1.5,"fat":3,"carbs":8,"unit":"ml","default":300,"category":"Кофемания","note":"на кокосовой основе с грибами-адаптогенами"},
    
    // ========== ЧАЙ ==========
    {"id":11037,"name":"🍵 Чай черный","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11038,"name":"🍵 Чай зеленый","calories":1,"protein":0.1,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Кофемания"},
    
    // ========== СВЕЖЕВЫЖАТЫЕ СОКИ И СМУЗИ ==========
    {"id":11039,"name":"🧃 Апельсиновый фреш","calories":45,"protein":0.7,"fat":0.2,"carbs":10.5,"unit":"ml","default":250,"category":"Кофемания"},
    {"id":11040,"name":"🧃 Яблочный фреш","calories":46,"protein":0.2,"fat":0.1,"carbs":11,"unit":"ml","default":250,"category":"Кофемания"},
    {"id":11041,"name":"🧃 Смузи Португальский","calories":85,"protein":2,"fat":2.5,"carbs":14,"unit":"ml","default":300,"category":"Кофемания"},
    {"id":11042,"name":"🧃 Смузи Бали Бум","calories":80,"protein":2,"fat":2,"carbs":13.5,"unit":"ml","default":300,"category":"Кофемания"},
    
    // ========== САЛАТЫ ==========
    {"id":11043,"name":"🥗 Тёплый салат с морепродуктами","calories":120,"protein":10,"fat":6,"carbs":8,"unit":"g","default":200,"category":"Кофемания","special":"collection [citation:2]"},
    {"id":11044,"name":"🥗 Ростбиф Вителло Тонато","calories":180,"protein":15,"fat":12,"carbs":4,"unit":"g","default":200,"category":"Кофемания","special":"collection [citation:2]"},
    {"id":11045,"name":"🥗 Боул из овощей с зелёной гречкой","calories":90,"protein":4,"fat":5,"carbs":10,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11046,"name":"🥗 Салат из баклажанов со стручковой фасолью","calories":110,"protein":3,"fat":7,"carbs":9,"unit":"g","default":200,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== СУПЫ ==========
    {"id":11047,"name":"🥣 Куриный бульон","calories":15,"protein":2,"fat":0.8,"carbs":0.2,"unit":"g","default":285,"category":"Кофемания","source":"меню [citation:4]"},
    {"id":11048,"name":"🥣 Щи с фасолью","calories":45,"protein":3,"fat":2,"carbs":5,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== ЗАВТРАКИ И БЛЮДА УТРОМ ==========
    {"id":11049,"name":"🍳 Бенедикт с лососем","calories":280,"protein":18,"fat":18,"carbs":14,"unit":"g","default":225,"category":"Кофемания","source":"меню [citation:4]"},
    {"id":11050,"name":"🍳 Сырники","calories":272,"protein":24.1,"fat":7.5,"carbs":26.4,"unit":"g","default":180,"category":"Кофемания","source":"меню [citation:4]"},
    {"id":11051,"name":"🥔 Картофельные драники со сметаной","calories":220,"protein":5,"fat":14,"carbs":20,"unit":"g","default":260,"category":"Кофемания","source":"меню [citation:4]"},
    {"id":11052,"name":"🥔 Драники с салатом из огурцов и редиса","calories":200,"protein":4,"fat":12,"carbs":18,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11053,"name":"🍳 Бабушкины домашние зразы","calories":210,"protein":6,"fat":10,"carbs":24,"unit":"g","default":250,"category":"Кофемания","special":"collection [citation:2]"},
    
    // ========== КАШИ ==========
    {"id":11054,"name":"🥣 Кокосовая рисовая каша с ягодным вареньем","calories":140,"protein":3,"fat":6,"carbs":19,"unit":"g","default":200,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== ПАСТА ==========
    {"id":11055,"name":"🍝 Паста с индейкой","calories":280,"protein":18,"fat":12,"carbs":26,"unit":"g","default":250,"category":"Кофемания","source":"меню [citation:4]"},
    {"id":11056,"name":"🍝 Спагетти с артишоками и баклажанами","calories":250,"protein":7,"fat":12,"carbs":30,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== ОСНОВНЫЕ БЛЮДА ==========
    {"id":11057,"name":"🍖 Ягнёнок в томатном соусе с фасолью","calories":320,"protein":25,"fat":20,"carbs":12,"unit":"g","default":300,"category":"Кофемания","special":"collection [citation:2]"},
    {"id":11058,"name":"🐟 Палтус с соусом бермонте","calories":220,"protein":22,"fat":12,"carbs":8,"unit":"g","default":250,"category":"Кофемания","special":"collection [citation:2]"},
    {"id":11059,"name":"🐓 Цыплёнок с чимичурри из кинзы","calories":250,"protein":28,"fat":14,"carbs":4,"unit":"g","default":250,"category":"Кофемания","special":"collection [citation:2]"},
    {"id":11060,"name":"🥔 Гречка с белыми грибами","calories":150,"protein":6,"fat":8,"carbs":16,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11061,"name":"🥔 Жареный картофель с белыми грибами","calories":180,"protein":4,"fat":10,"carbs":20,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11062,"name":"🥔 Жареный картофель с лисичками","calories":170,"protein":3,"fat":9,"carbs":20,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== ВАРЕНИКИ И БЛЮДА ТЕСТА ==========
    {"id":11063,"name":"🥟 Вареники с капустой","calories":160,"protein":5,"fat":6,"carbs":22,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11064,"name":"🥟 Вареники с картошкой","calories":170,"protein":4,"fat":5,"carbs":28,"unit":"g","default":250,"category":"Кофемания","special":"post [citation:10]"},
    
    // ========== РАМЕН ==========
    {"id":11065,"name":"🍜 Сио рамен со свининой Дюрок","calories":450,"protein":25,"fat":18,"carbs":45,"unit":"g","default":450,"category":"Кофемания","special":"collection [citation:2]"},
    
    // ========== СЭНДВИЧИ ==========
    {"id":11066,"name":"🥪 Сэндвич с курицей","calories":230,"protein":14,"fat":10,"carbs":22,"unit":"g","default":235,"category":"Кофемания","source":"меню [citation:4]"},
    
    // ========== ДЕСЕРТЫ ==========
    {"id":11067,"name":"🍰 Блан де Блан","calories":320,"protein":4,"fat":20,"carbs":30,"unit":"g","default":120,"category":"Кофемания","note":"кокосовый мусс с манго-маракуйя [citation:8]"},
    {"id":11068,"name":"🍰 Ванильное мороженое","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"unit":"g","default":100,"category":"Кофемания"},
    {"id":11069,"name":"🌱 Веган тарт с малиной","calories":280,"protein":3,"fat":16,"carbs":32,"unit":"g","default":120,"category":"Кофемания","special":"vegan [citation:8]"},
    {"id":11070,"name":"🍰 Воздушная запеканка","calories":220,"protein":10,"fat":8,"carbs":28,"unit":"g","default":180,"category":"Кофемания","note":"творожная запеканка с вареньем [citation:8]"},
    {"id":11071,"name":"🍰 Дос Потатос (картошка)","calories":380,"protein":4,"fat":18,"carbs":50,"unit":"g","default":100,"category":"Кофемания","note":"шоколадно-сливочное пирожное [citation:8]"},
    {"id":11072,"name":"🌰 Золотой орешек","calories":450,"protein":6,"fat":28,"carbs":42,"unit":"g","default":80,"category":"Кофемания","note":"песочная ореховая тарталетка [citation:8]"},
    {"id":11073,"name":"🍰 Тирамису","calories":350,"protein":6,"fat":20,"carbs":36,"unit":"g","default":120,"category":"Кофемания"},
    {"id":11074,"name":"🍫 Чизкейк","calories":340,"protein":7,"fat":24,"carbs":26,"unit":"g","default":130,"category":"Кофемания"},
    
    // ========== ПОСТНЫЕ ДЕСЕРТЫ ==========
    {"id":11075,"name":"🍰 Тарталетка со свежей малиной","calories":250,"protein":3,"fat":14,"carbs":28,"unit":"g","default":100,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11076,"name":"🍰 Грушевый кекс","calories":310,"protein":4,"fat":12,"carbs":46,"unit":"g","default":100,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11077,"name":"🍰 Медово-кофейная коврижка","calories":320,"protein":4,"fat":10,"carbs":53,"unit":"g","default":100,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11078,"name":"🍰 Тарталетка с миндальным кремом и яблоком","calories":300,"protein":5,"fat":18,"carbs":32,"unit":"g","default":100,"category":"Кофемания","special":"post [citation:10]"},
    {"id":11079,"name":"🍰 Тарталетка с пеканом и карамелью","calories":350,"protein":4,"fat":22,"carbs":34,"unit":"g","default":100,"category":"Кофемания","special":"post [citation:10]"}
];

// ========== 13. PIMS ==========
const PIMS_PRODUCTS = [
    // ========== FULL PIMS (ФИРМЕННЫЕ НАПИТКИ) ==========
    {"id":12001,"name":"🧋 Strawgranny Tea","calories":55.7,"protein":0.68,"fat":2.8,"carbs":10.13,"unit":"ml","default":600,"category":"Pims","source":"fatsecret "},
    {"id":12002,"name":"🧋 Strawgranny Coffee","calories":55.7,"protein":0.68,"fat":2.8,"carbs":10.13,"unit":"ml","default":600,"category":"Pims"},
    {"id":12003,"name":"🧋 Tropical Vibes","calories":52,"protein":0.85,"fat":2.75,"carbs":7.7,"unit":"ml","default":600,"category":"Pims","source":"fatsecret "},
    {"id":12004,"name":"🧋 Milky Matcha","calories":34.3,"protein":0.73,"fat":0.8,"carbs":6.07,"unit":"ml","default":600,"category":"Pims","source":"fatsecret "},
    {"id":12005,"name":"🧋 Young Red","calories":45,"protein":0.5,"fat":1.5,"carbs":8,"unit":"ml","default":600,"category":"Pims"},
    {"id":12006,"name":"🧋 Jade","calories":36.3,"protein":0.12,"fat":1.27,"carbs":6.28,"unit":"ml","default":600,"category":"Pims","source":"fatsecret "},
    {"id":12007,"name":"🧋 Berries X Berries","calories":40,"protein":0.5,"fat":1.2,"carbs":7.5,"unit":"ml","default":600,"category":"Pims","source":"talabat "},

    // ========== TEA & FRUITS (ЧАЙ С ФРУКТАМИ) ==========
    {"id":12008,"name":"🍑 Peach Tea","calories":35,"protein":0.3,"fat":0.5,"carbs":8,"unit":"ml","default":600,"category":"Pims"},
    {"id":12009,"name":"🍓 Strawberry Tea","calories":35,"protein":0.3,"fat":0.5,"carbs":8,"unit":"ml","default":600,"category":"Pims"},
    {"id":12010,"name":"🥭 Mango Tea","calories":38,"protein":0.3,"fat":0.5,"carbs":9,"unit":"ml","default":600,"category":"Pims"},
    {"id":12011,"name":"🍋 Lemon Tea","calories":30,"protein":0.2,"fat":0.3,"carbs":7,"unit":"ml","default":600,"category":"Pims"},
    {"id":12012,"name":"🍒 Cherry Tea","calories":35,"protein":0.3,"fat":0.4,"carbs":8,"unit":"ml","default":600,"category":"Pims"},
    {"id":12013,"name":"🍇 Grape Tea","calories":38,"protein":0.3,"fat":0.5,"carbs":9,"unit":"ml","default":600,"category":"Pims"},

    // ========== MILKY & TAPIOCA (МОЛОЧНЫЙ ЧАЙ С ТАПИОКОЙ) ==========
    {"id":12014,"name":"🥛 Classic Milk Tea","calories":45,"protein":0.8,"fat":1.2,"carbs":8,"unit":"ml","default":600,"category":"Pims"},
    {"id":12015,"name":"🥛 Brown Sugar Milk Tea","calories":55,"protein":0.8,"fat":1.5,"carbs":10,"unit":"ml","default":600,"category":"Pims"},
    {"id":12016,"name":"🥛 Matcha Milk Tea","calories":48,"protein":1,"fat":1.3,"carbs":8.5,"unit":"ml","default":600,"category":"Pims"},
    {"id":12017,"name":"🥛 Taro Milk Tea","calories":50,"protein":0.7,"fat":1.2,"carbs":9.5,"unit":"ml","default":600,"category":"Pims"},
    {"id":12018,"name":"🥛 Thai Milk Tea","calories":52,"protein":0.8,"fat":1.4,"carbs":9,"unit":"ml","default":600,"category":"Pims"},
    {"id":12019,"name":"🥛 Da Hong Pao Tea & Black Bubble","calories":48,"protein":0.7,"fat":1.2,"carbs":8.8,"unit":"ml","default":600,"category":"Pims","source":"talabat "},

    // ========== PURE TEA (ЧИСТЫЙ ЧАЙ) ==========
    {"id":12020,"name":"🍵 Da Hong Pao","calories":2,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":600,"category":"Pims"},
    {"id":12021,"name":"🍵 Jasmine Green Tea","calories":2,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":600,"category":"Pims"},
    {"id":12022,"name":"🍵 Oolong Tea","calories":2,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":600,"category":"Pims"},
    {"id":12023,"name":"🍵 Earl Grey Tea","calories":2,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":600,"category":"Pims"},
    {"id":12024,"name":"🍵 Sencha Green Tea","calories":2,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":600,"category":"Pims"},

    // ========== ДОБАВКИ (ТАПИОКА, ТОППИНГИ) ==========
    {"id":12025,"name":"⚪ Тапиока (классическая)","calories":290,"protein":0.2,"fat":0.1,"carbs":72.2,"unit":"g","default":50,"category":"Pims","source":"fatsecret "},
    {"id":12026,"name":"⚪ Tapioca","calories":281,"protein":0.7,"fat":0.7,"carbs":67.9,"unit":"g","default":50,"category":"Pims","source":"fatsecret "},
    {"id":12027,"name":"🍮 Пудинг (крем-брюле)","calories":120,"protein":1,"fat":3,"carbs":22,"unit":"g","default":50,"category":"Pims"},
    {"id":12028,"name":"🍯 Топикко (инжир/манго)","calories":85,"protein":0.3,"fat":0.1,"carbs":21,"unit":"g","default":50,"category":"Pims"},
    {"id":12029,"name":"🌋 Крем-чиз (сырная пенка)","calories":250,"protein":4,"fat":22,"carbs":8,"unit":"g","default":30,"category":"Pims"}
];

// ========== 14. БАБЛ ТИ ==========
const BUBBLE_PRODUCTS = [
    // ========== МОЛОЧНЫЙ ЧАЙ (КЛАССИЧЕСКАЯ ОСНОВА) ==========
    {"id":13001,"name":"🥛 Классический молочный чай","calories":80,"protein":0.9,"fat":1,"carbs":16,"unit":"ml","default":400,"category":"Bubble Tea","note":"Стандарт, без топпингов [citation:1]"},
    {"id":13002,"name":"🥛 Классический молочный чай с тапиокой","calories":118,"protein":1.1,"fat":1.2,"carbs":24,"unit":"ml","default":450,"category":"Bubble Tea","note":"400мл чая + 50г тапиоки"},
    {"id":13003,"name":"🥛 Коричневый сахар (Brown Sugar)","calories":95,"protein":0.8,"fat":1.1,"carbs":19,"unit":"ml","default":400,"category":"Bubble Tea","note":"С карамельным сиропом"},
    {"id":13004,"name":"🥛 Тайский молочный чай","calories":85,"protein":0.9,"fat":1.3,"carbs":17,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13005,"name":"🥛 Таро (фиолетовый картофель)","calories":82,"protein":0.8,"fat":0.9,"carbs":18,"unit":"ml","default":400,"category":"Bubble Tea"},

    // ========== МАТЧА (ЗЕЛЁНЫЙ ЧАЙ) ==========
    {"id":13006,"name":"🍵 Матча латте","calories":70,"protein":2,"fat":3,"carbs":9,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13007,"name":"🍵 Матча с кокосовым молоком","calories":85,"protein":1.5,"fat":5.5,"carbs":8,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13008,"name":"🍵 Матча айс","calories":45,"protein":1.5,"fat":2,"carbs":5.5,"unit":"ml","default":400,"category":"Bubble Tea"},

    // ========== ФРУКТОВЫЙ ЧАЙ ==========
    {"id":13009,"name":"🍑 Персиковый чай","calories":45,"protein":0.2,"fat":0.1,"carbs":11,"unit":"ml","default":400,"category":"Bubble Tea","note":"Без молока, сироп"},
    {"id":13010,"name":"🥭 Манговый чай","calories":48,"protein":0.3,"fat":0.1,"carbs":12,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13011,"name":"🍓 Клубничный чай","calories":45,"protein":0.2,"fat":0.1,"carbs":11,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13012,"name":"🍋 Лимонный чай","calories":38,"protein":0.2,"fat":0,"carbs":9.5,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13013,"name":"🍒 Личи-чай","calories":44,"protein":0.2,"fat":0.1,"carbs":11,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13014,"name":"🍇 Виноградный чай","calories":46,"protein":0.2,"fat":0.1,"carbs":11.5,"unit":"ml","default":400,"category":"Bubble Tea"},
    {"id":13015,"name":"🌺 Гибискус (каркаде) айс","calories":35,"protein":0.3,"fat":0,"carbs":8.5,"unit":"ml","default":400,"category":"Bubble Tea"},

    // ========== БЕЗЛАКТОЗНЫЕ ВАРИАНТЫ ==========
    {"id":13016,"name":"🥛 Овсяное молоко чай","calories":85,"protein":1.2,"fat":3,"carbs":13,"unit":"ml","default":400,"category":"Bubble Tea","note":"Безлактозный"},
    {"id":13017,"name":"🥛 Миндальное молоко чай","calories":65,"protein":1,"fat":3.5,"carbs":8,"unit":"ml","default":400,"category":"Bubble Tea","note":"Безлактозный"},
    {"id":13018,"name":"🥛 Соевое молоко чай","calories":75,"protein":2.5,"fat":2.8,"carbs":9.5,"unit":"ml","default":400,"category":"Bubble Tea","note":"Безлактозный"},

    // ========== ТОППИНГИ (ОСНОВНЫЕ) ==========
    {"id":13019,"name":"⚪ Шарики тапиоки (классические)","calories":290,"protein":0.2,"fat":0.1,"carbs":72,"unit":"g","default":50,"category":"Bubble Tea","note":"Жемчуг, готовится 30-40 минут [citation:8][citation:9]"},
    {"id":13020,"name":"⚪ Блэк боба (черная тапиока)","calories":285,"protein":0.2,"fat":0.1,"carbs":71,"unit":"g","default":50,"category":"Bubble Tea"},
    {"id":13021,"name":"🍓 Popping Boba (клубника)","calories":120,"protein":0.1,"fat":0.1,"carbs":30,"unit":"g","default":50,"category":"Bubble Tea","note":"С жидкой начинкой [citation:8]"},
    {"id":13022,"name":"🥭 Popping Boba (манго)","calories":118,"protein":0.1,"fat":0.1,"carbs":29.5,"unit":"g","default":50,"category":"Bubble Tea"},
    {"id":13023,"name":"🍑 Popping Boba (персик)","calories":115,"protein":0.1,"fat":0.1,"carbs":29,"unit":"g","default":50,"category":"Bubble Tea"},
    {"id":13024,"name":"🍒 Popping Boba (личи)","calories":110,"protein":0.1,"fat":0.1,"carbs":27.5,"unit":"g","default":50,"category":"Bubble Tea","note":"Популярный азиатский вкус [citation:8]"},
    {"id":13025,"name":"🍋 Popping Boba (маракуйя)","calories":112,"protein":0.1,"fat":0.1,"carbs":28,"unit":"g","default":50,"category":"Bubble Tea"},
    {"id":13026,"name":"🍮 Кристаллы алоэ вера","calories":25,"protein":0.2,"fat":0.1,"carbs":6,"unit":"g","default":50,"category":"Bubble Tea","note":"Низкокалорийный топпинг"},
    {"id":13027,"name":"🍮 Коучуки/радужная тапиока","calories":290,"protein":0.2,"fat":0.1,"carbs":72,"unit":"g","default":50,"category":"Bubble Tea","note":"Цветные шарики"},
    {"id":13028,"name":"⚪ Стеклянная тапиока","calories":285,"protein":0,"fat":0,"carbs":71,"unit":"g","default":50,"category":"Bubble Tea","note":"Прозрачные шарики"},
    {"id":13029,"name":"🍮 Конжаковая тапиока","calories":180,"protein":0.5,"fat":0.5,"carbs":45,"unit":"g","default":50,"category":"Bubble Tea","note":"Низкокалорийная версия, ~30 ккал на 50г"},
    {"id":13030,"name":"🧀 Крем-чиз пенка","calories":250,"protein":4,"fat":25,"carbs":4,"unit":"g","default":30,"category":"Bubble Tea","note":"Соленая/сладкая сырная шапка [citation:1]"},
    {"id":13031,"name":"🍮 Пудинг (карамельный)","calories":120,"protein":1,"fat":3,"carbs":22,"unit":"g","default":50,"category":"Bubble Tea"},

    // ========== БЕЗ САХАРА (ДИАБЕТИЧЕСКИЕ ВАРИАНТЫ) ==========
    {"id":13032,"name":"🥛 Молочный чай без сахара","calories":40,"protein":0.9,"fat":1,"carbs":4,"unit":"ml","default":400,"category":"Bubble Tea","note":"На фруктозе [citation:4]"},
    {"id":13033,"name":"🍑 Фруктовый чай без сахара","calories":20,"protein":0.2,"fat":0,"carbs":5,"unit":"ml","default":400,"category":"Bubble Tea","note":"На фруктозе [citation:4]"},

    // ========== ДОМАШНИЙ / РЕСТОРАННЫЙ ВАРИАНТ ==========
    {"id":13034,"name":"🏠 Домашний бабл ти","calories":124,"protein":1,"fat":1,"carbs":26,"unit":"ml","default":500,"category":"Bubble Tea","note":"См. рецепт классический [citation:2][citation:9]"},
    {"id":13035,"name":"🍍 Бабл ти с манго (без тапиоки)","calories":106,"protein":1,"fat":1,"carbs":25,"unit":"ml","default":500,"category":"Bubble Tea","note":"Рецепт с крахмалом [citation:3]"}
];


// ========== 15. АЛКОГОЛЬ ==========
const ALCOHOL_PRODUCTS = [
    // ========== ВИНО КРАСНОЕ СУХОЕ ==========
    {"id":14001,"name":"🍷 Вино красное сухое Каберне","calories":70,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14002,"name":"🍷 Вино красное сухое Мерло","calories":68,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14003,"name":"🍷 Вино красное сухое Пино Нуар","calories":69,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14004,"name":"🍷 Вино красное сухое Шираз","calories":71,"protein":0.1,"fat":0,"carbs":0.6,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14005,"name":"🍷 Вино красное сухое Чили","calories":68,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14006,"name":"🍷 Вино красное сухое Мальбек","calories":70,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14007,"name":"🍷 Вино красное сухое Кьянти","calories":72,"protein":0.1,"fat":0,"carbs":0.6,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14008,"name":"🍷 Вино красное сухое Риоха","calories":71,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14009,"name":"🍷 Вино красное сухое Южная Жемчужина","calories":70,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14010,"name":"🍷 Вино красное сухое Виноградники Тамри","calories":68,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ВИНО КРАСНОЕ ПОЛУСУХОЕ ==========
    {"id":14011,"name":"🍷 Вино красное полусухое","calories":75,"protein":0.1,"fat":0,"carbs":2,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14012,"name":"🍷 Вино красное полусухое Алазанская долина","calories":74,"protein":0.1,"fat":0,"carbs":1.8,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14013,"name":"🍷 Вино красное полусухое Киндзмараули","calories":82,"protein":0.1,"fat":0,"carbs":3,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ВИНО КРАСНОЕ ПОЛУСЛАДКОЕ ==========
    {"id":14014,"name":"🍷 Вино красное полусладкое","calories":85,"protein":0.1,"fat":0,"carbs":4,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14015,"name":"🍷 Вино красное полусладкое Хванчкара","calories":88,"protein":0.1,"fat":0,"carbs":4.2,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14016,"name":"🍷 Вино красное полусладкое Южная Жемчужина","calories":85,"protein":0.1,"fat":0,"carbs":4,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14017,"name":"🍷 Вино красное полусладкое Хаусан","calories":84,"protein":0.1,"fat":0,"carbs":3.8,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ВИНО БЕЛОЕ СУХОЕ ==========
    {"id":14018,"name":"🥂 Вино белое сухое","calories":66,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14019,"name":"🥂 Вино белое сухое Совиньон Блан","calories":65,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14020,"name":"🥂 Вино белое сухое Шардоне","calories":67,"protein":0.1,"fat":0,"carbs":0.4,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14021,"name":"🥂 Вино белое сухое Рислинг","calories":64,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14022,"name":"🥂 Вино белое сухое Пино Гриджио","calories":66,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14023,"name":"🥂 Вино белое сухое Южная Жемчужина","calories":66,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14024,"name":"🥂 Вино белое сухое Меджврис","calories":65,"protein":0.1,"fat":0,"carbs":0.3,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ВИНО БЕЛОЕ ПОЛУСЛАДКОЕ ==========
    {"id":14025,"name":"🥂 Вино белое полусладкое","calories":80,"protein":0.1,"fat":0,"carbs":3.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14026,"name":"🥂 Вино белое полусладкое Южная Жемчужина","calories":80,"protein":0.1,"fat":0,"carbs":3.5,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ВИНО РОЗОВОЕ ==========
    {"id":14027,"name":"🩷 Вино розовое сухое","calories":68,"protein":0.1,"fat":0,"carbs":0.5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14028,"name":"🩷 Вино розовое полусладкое","calories":82,"protein":0.1,"fat":0,"carbs":3.8,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== ШАМПАНСКОЕ И ИГРИСТЫЕ ВИНА ==========
    {"id":14029,"name":"🥂 Шампанское брют","calories":70,"protein":0.1,"fat":0,"carbs":2,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14030,"name":"🥂 Шампанское полусухое","calories":75,"protein":0.1,"fat":0,"carbs":3,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14031,"name":"🥂 Шампанское полусладкое","calories":85,"protein":0.1,"fat":0,"carbs":5,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14032,"name":"🥂 Шампанское сладкое","calories":95,"protein":0.1,"fat":0,"carbs":7,"unit":"ml","default":150,"category":"Алкоголь"},
    {"id":14033,"name":"🍾 Просекко","calories":70,"protein":0.1,"fat":0,"carbs":1.5,"unit":"ml","default":150,"category":"Алкоголь"},

    // ========== КРЕПЛЁНЫЕ ВИНА ==========
    {"id":14034,"name":"🍷 Портвейн красный","calories":150,"protein":0.1,"fat":0,"carbs":8,"unit":"ml","default":100,"category":"Алкоголь"},
    {"id":14035,"name":"🥂 Портвейн белый","calories":145,"protein":0.1,"fat":0,"carbs":7.5,"unit":"ml","default":100,"category":"Алкоголь"},
    {"id":14036,"name":"🍷 Мадера","calories":140,"protein":0.1,"fat":0,"carbs":7,"unit":"ml","default":100,"category":"Алкоголь"},
    {"id":14037,"name":"🍷 Вермут Martini Bianco","calories":150,"protein":0.1,"fat":0,"carbs":12,"unit":"ml","default":100,"category":"Алкоголь"},
    {"id":14038,"name":"🍷 Вермут Martini Rosso","calories":160,"protein":0.1,"fat":0,"carbs":13,"unit":"ml","default":100,"category":"Алкоголь"},

    // ========== ВОДКА ==========
    {"id":14039,"name":"🥃 Водка","calories":235,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14040,"name":"🥃 Водка Царская","calories":235,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14041,"name":"🥃 Водка Беленькая","calories":235,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14042,"name":"🥃 Водка Finlandia","calories":235,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== ВИСКИ ==========
    {"id":14043,"name":"🥃 Виски","calories":250,"protein":0,"fat":0,"carbs":0.1,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14044,"name":"🥃 Джон Уокер (Johnnie Walker)","calories":250,"protein":0,"fat":0,"carbs":0.1,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14045,"name":"🥃 Джек Дэниэлс (Jack Daniel's)","calories":250,"protein":0,"fat":0,"carbs":0.1,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14046,"name":"🥃 Jameson","calories":250,"protein":0,"fat":0,"carbs":0.1,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== КОНЬЯК ==========
    {"id":14047,"name":"🥃 Коньяк","calories":240,"protein":0,"fat":0,"carbs":0.5,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14048,"name":"🥃 Коньяк VSOP","calories":240,"protein":0,"fat":0,"carbs":0.5,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14049,"name":"🥃 Армянский коньяк","calories":240,"protein":0,"fat":0,"carbs":0.5,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== ДЖИН ==========
    {"id":14050,"name":"🍸 Джин","calories":240,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14051,"name":"🍸 Джин Beefeater","calories":240,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== РОМ ==========
    {"id":14052,"name":"🍸 Ром (Bacardi)","calories":240,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== ТЕКИЛА ==========
    {"id":14053,"name":"🍸 Текила","calories":220,"protein":0,"fat":0,"carbs":6,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14054,"name":"🍸 Текила Olmeca","calories":220,"protein":0,"fat":0,"carbs":6,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== ЛИКЁРЫ ==========
    {"id":14055,"name":"🍸 Ликёр Baileys","calories":327,"protein":3,"fat":13,"carbs":25,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14056,"name":"🍸 Ликёр Amaretto","calories":240,"protein":0,"fat":0,"carbs":25,"unit":"ml","default":50,"category":"Алкоголь"},
    {"id":14057,"name":"🍸 Ликёр яичный","calories":300,"protein":4,"fat":8,"carbs":40,"unit":"ml","default":50,"category":"Алкоголь"},

    // ========== КОКТЕЙЛИ ГОТОВЫЕ ==========
    {"id":14058,"name":"🍹 Мохито","calories":150,"protein":0.5,"fat":0,"carbs":15,"unit":"ml","default":250,"category":"Алкоголь"},
    {"id":14059,"name":"🍹 Пина Колада","calories":230,"protein":0.5,"fat":5,"carbs":25,"unit":"ml","default":200,"category":"Алкоголь"},

    // ========== ПИВО ==========
    {"id":14060,"name":"🍺 Пиво светлое 4.5%","calories":45,"protein":0.5,"fat":0,"carbs":3.5,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14061,"name":"🍺 Пиво светлое Балтика 7","calories":50,"protein":0.5,"fat":0,"carbs":4,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14062,"name":"🍺 Пиво светлое Heineken","calories":45,"protein":0.5,"fat":0,"carbs":3.5,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14063,"name":"🍺 Пиво светлое Stella Artois","calories":46,"protein":0.5,"fat":0,"carbs":3.6,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14064,"name":"🍺 Пиво темное 5%","calories":50,"protein":0.6,"fat":0,"carbs":4,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14065,"name":"🍺 Пиво безалкогольное","calories":25,"protein":0.4,"fat":0,"carbs":5,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14066,"name":"🍺 Пиво светлое безалкогольное","calories":15,"protein":0.3,"fat":0,"carbs":3,"unit":"ml","default":500,"category":"Алкоголь"},

    // ========== СИДР И МИКСЫ ==========
    {"id":14067,"name":"🍏 Сидр яблочный","calories":50,"protein":0.1,"fat":0,"carbs":6,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14068,"name":"🍐 Сидр грушевый","calories":52,"protein":0.1,"fat":0,"carbs":6.5,"unit":"ml","default":500,"category":"Алкоголь"},
    {"id":14069,"name":"🥤 Коктейль пивной (Ерофеич)","calories":180,"protein":1,"fat":0,"carbs":15,"unit":"ml","default":500,"category":"Алкоголь"}
];


// ========== 16. ЭНЕРГЕТИКИ ==========
const ENERGY_PRODUCTS = [
    // RED BULL
    {"id":15001,"name":"Red Bull оригинальный","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Классический"},
    {"id":15002,"name":"Red Bull без сахара","calories":5,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Без сахара"},
    {"id":15003,"name":"Red Bull Energy Edition","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Клубника-Апельсин"},
    {"id":15004,"name":"Red Bull Киви-Арбуз","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Киви-Арбуз"},
    {"id":15005,"name":"Red Bull Голубая ягода","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Голубая ягода"},
    {"id":15006,"name":"Red Bull Тропический","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Тропический"},
    {"id":15007,"name":"Red Bull Жимолость","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Жимолость"},
    {"id":15008,"name":"Red Bull Личи","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Личи"},
    {"id":15009,"name":"Red Bull Кола","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Кола"},
    {"id":15010,"name":"Red Bull Лимон","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Red Bull","flavor":"Лимон"},

    // BURN
    {"id":15011,"name":"Burn Цитрус","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":449,"category":"Энергетики","brand":"Burn","flavor":"Цитрус"},
    {"id":15012,"name":"Burn Ваниль-Кофе","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":449,"category":"Энергетики","brand":"Burn","flavor":"Ваниль-Кофе"},
    {"id":15013,"name":"Burn Яблоко-Смородина","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":449,"category":"Энергетики","brand":"Burn","flavor":"Зеленое яблоко-Черная смородина"},
    {"id":15014,"name":"Burn Манго","calories":65,"protein":0,"fat":0,"carbs":16,"unit":"ml","default":500,"category":"Энергетики","brand":"Burn","flavor":"Манго"},
    {"id":15015,"name":"Burn Гуава","calories":65,"protein":0,"fat":0,"carbs":16,"unit":"ml","default":500,"category":"Энергетики","brand":"Burn","flavor":"Гуава"},
    {"id":15016,"name":"Burn Малина","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":449,"category":"Энергетики","brand":"Burn","flavor":"Малина"},
    {"id":15017,"name":"Burn Кола","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":449,"category":"Энергетики","brand":"Burn","flavor":"Кола"},

    // MONSTER
    {"id":15018,"name":"Monster Original","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Классический"},
    {"id":15019,"name":"Monster Zero Ultra","calories":4,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Цитрус без сахара"},
    {"id":15020,"name":"Monster Mango Loco","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Манго"},
    {"id":15021,"name":"Monster Pacific Punch","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Фруктовый пунш"},
    {"id":15022,"name":"Monster Pipeline Punch","calories":52,"protein":0,"fat":0,"carbs":13,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Грейпфрут-Маракуйя"},
    {"id":15023,"name":"Monster Ultra Paradise","calories":4,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Киви-Лайм без сахара"},
    {"id":15024,"name":"Monster Ultra Rosa","calories":4,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Розовый грейпфрут без сахара"},
    {"id":15025,"name":"Monster Ultra Gold","calories":4,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Ананас без сахара"},
    {"id":15026,"name":"Monster Assault","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Кола"},
    {"id":15027,"name":"Monster Green Tea","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Monster","flavor":"Зеленый чай"},

    // ADRENALINE RUSH
    {"id":15028,"name":"Adrenaline Rush Original","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":449,"category":"Энергетики","brand":"Adrenaline Rush","flavor":"Классический"},
    {"id":15029,"name":"Adrenaline Rush Меган","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":449,"category":"Энергетики","brand":"Adrenaline Rush","flavor":"Клубника"},
    {"id":15030,"name":"Adrenaline Rush Экзотик","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":449,"category":"Энергетики","brand":"Adrenaline Rush","flavor":"Тропические фрукты"},
    {"id":15031,"name":"Adrenaline Rush Манго","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":449,"category":"Энергетики","brand":"Adrenaline Rush","flavor":"Манго"},

    // FLASH UP
    {"id":15032,"name":"Flash Up Original","calories":48,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":450,"category":"Энергетики","brand":"Flash Up","flavor":"Классический"},
    {"id":15033,"name":"Flash Up Citrus","calories":48,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":450,"category":"Энергетики","brand":"Flash Up","flavor":"Цитрус"},
    {"id":15034,"name":"Flash Up Berry","calories":48,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":450,"category":"Энергетики","brand":"Flash Up","flavor":"Ягодный"},
    {"id":15035,"name":"Flash Up Tropical","calories":48,"protein":0,"fat":0,"carbs":12,"unit":"ml","default":450,"category":"Энергетики","brand":"Flash Up","flavor":"Тропический"},
    {"id":15036,"name":"Flash Up Zero","calories":5,"protein":0,"fat":0,"carbs":1,"unit":"ml","default":450,"category":"Энергетики","brand":"Flash Up","flavor":"Без сахара"},

    // GARAGE
    {"id":15037,"name":"Гараж Энергия","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":450,"category":"Энергетики","brand":"Гараж","flavor":"Классический"},
    {"id":15038,"name":"Гараж Соло","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":450,"category":"Энергетики","brand":"Гараж","flavor":"Мятный лимонад"},
    {"id":15039,"name":"Гараж Дуэт","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":450,"category":"Энергетики","brand":"Гараж","flavor":"Лимон-лайм-имбирь"},

    // E-ON
    {"id":15040,"name":"E-ON Взрыв","calories":35,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":450,"category":"Энергетики","brand":"E-ON","flavor":"Зеленое яблоко"},
    {"id":15041,"name":"E-ON Danger Berry","calories":35,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":450,"category":"Энергетики","brand":"E-ON","flavor":"Грейпфрут-Дикая малина"},

    // BY
    {"id":15042,"name":"BY Energy Pink","calories":49,"protein":0,"fat":0,"carbs":11.9,"unit":"ml","default":500,"category":"Энергетики","brand":"BY","flavor":"Апельсин-Манго"},
    {"id":15043,"name":"BY Energy Original","calories":49,"protein":0,"fat":0,"carbs":11.9,"unit":"ml","default":500,"category":"Энергетики","brand":"BY","flavor":"Классический"},
    {"id":15044,"name":"BY Energy Green","calories":49,"protein":0,"fat":0,"carbs":11.9,"unit":"ml","default":500,"category":"Энергетики","brand":"BY","flavor":"Зеленое яблоко-Арбуз"},
    {"id":15045,"name":"BY Energy Красный дракон","calories":49,"protein":0,"fat":0,"carbs":11.9,"unit":"ml","default":500,"category":"Энергетики","brand":"BY","flavor":"Клубника-Гуарана"},

    // LIT ENERGY
    {"id":15046,"name":"Lit Energy Lime","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Лайм"},
    {"id":15047,"name":"Lit Energy Pineapple","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Ананас"},
    {"id":15048,"name":"Lit Energy Lemonade Kaktus","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Лимонад-Кактус"},
    {"id":15049,"name":"Lit Energy Blueberry Donut","calories":20,"protein":0,"fat":0.1,"carbs":4.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Голубика-Пончик"},
    {"id":15050,"name":"Lit Energy Blood Orange","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Кровавый апельсин"},
    {"id":15051,"name":"Lit Energy Mojito","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Энергетики","brand":"Lit Energy","flavor":"Мохито"},

    // BULLIT
    {"id":15052,"name":"Bullit Original","calories":47,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":250,"category":"Энергетики","brand":"Bullit","flavor":"Классический"},
    {"id":15053,"name":"Bullit Ice Coffee","calories":56,"protein":2.6,"fat":0.8,"carbs":9.6,"unit":"ml","default":250,"category":"Энергетики","brand":"Bullit","flavor":"Кофе"},

    // BAIKAL
    {"id":15054,"name":"Байкал Natural Energy","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Байкал","flavor":"Кофе-Лимон"},

    // DRAGON
    {"id":15055,"name":"Dragon Energy Original","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Dragon","flavor":"Классический"},
    {"id":15056,"name":"Dragon Energy Gold","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Dragon","flavor":"Тропический"},
    {"id":15057,"name":"Dragon Energy Mango","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Dragon","flavor":"Манго"},
    {"id":15058,"name":"Dragon Energy Watermelon","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Dragon","flavor":"Арбуз"},

    // NEXT
    {"id":15059,"name":"Next Energy","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"Next","flavor":"Классический"},
    {"id":15060,"name":"Next Ice Coffee","calories":56,"protein":2.6,"fat":0.8,"carbs":9.6,"unit":"ml","default":500,"category":"Энергетики","brand":"Next","flavor":"Кофе"},

    // TORNADO
    {"id":15061,"name":"Tornado Energy","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Tornado","flavor":"Классический"},
    {"id":15062,"name":"Tornado Energy Mango","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Tornado","flavor":"Манго"},

    // STIMUL
    {"id":15063,"name":"Стимул Original","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Стимул","flavor":"Классический"},
    {"id":15064,"name":"Стимул Малина","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Стимул","flavor":"Малина"},

    // JAGUAR
    {"id":15065,"name":"Jaguar Energy","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Jaguar","flavor":"Классический"},
    {"id":15066,"name":"Jaguar Lime","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Jaguar","flavor":"Лайм"},

    // AMP
    {"id":15067,"name":"AMP Energy Original","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"AMP","flavor":"Классический"},

    // 1ST
    {"id":15068,"name":"1ST Energy","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":500,"category":"Энергетики","brand":"1ST","flavor":"Классический"},

    // ICE COFFEE
    {"id":15069,"name":"Ice Coffee Original","calories":56,"protein":2.6,"fat":0.8,"carbs":9.6,"unit":"ml","default":250,"category":"Энергетики","brand":"Ice Coffee","flavor":"Кофе"},
    {"id":15070,"name":"Ice Coffee Mocca","calories":56,"protein":2.6,"fat":0.8,"carbs":9.6,"unit":"ml","default":250,"category":"Энергетики","brand":"Ice Coffee","flavor":"Мокко"},

    // RUSSIAN BRANDS
    {"id":15071,"name":"Чёрный Русский Энергия","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Чёрный Русский","flavor":"Классический"},
    {"id":15072,"name":"Гютер Мотор","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Гютер","flavor":"Классический"},
    {"id":15073,"name":"Non Stop Energy","calories":46,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":500,"category":"Энергетики","brand":"Non Stop","flavor":"Классический"},
    {"id":15074,"name":"Atom Energy","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Atom","flavor":"Классический"},
    {"id":15075,"name":"Impulse Energy","calories":46,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":500,"category":"Энергетики","brand":"Impulse","flavor":"Классический"},

    // SPORT ENERGY
    {"id":15076,"name":"WorkOut Energy Pre-Workout","calories":15,"protein":0,"fat":0,"carbs":3.5,"unit":"ml","default":300,"category":"Энергетики","brand":"WorkOut","flavor":"Лимон"},
    {"id":15077,"name":"Gym Energy Booster","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"ml","default":300,"category":"Энергетики","brand":"Gym Energy","flavor":"Арбуз-Манго"}
];

// ========== 17. СПОРТПИТ ==========
const SPORT_PRODUCTS = [
    // ==================== БОМББАР (BOMBBAR) — РАСШИРЕННЫЙ АССОРТИМЕНТ ====================
    
    // --- Протеин (порошок) ---
    {"id":16001,"name":"Bombbar PRO Complex Whey","calories":367,"protein":73,"fat":5.3,"carbs":5.7,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Классический"},
    {"id":16002,"name":"Bombbar PRO Whey","calories":367,"protein":73,"fat":5.3,"carbs":5.7,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Классический"},
    {"id":16003,"name":"Bombbar PRO Casein","calories":367,"protein":80,"fat":4,"carbs":4,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Классический"},
    {"id":16004,"name":"Bombbar Isolate PRO","calories":350,"protein":83,"fat":1.3,"carbs":1,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Классический"},
    {"id":16005,"name":"Bombbar Коктейль порционный","calories":355,"protein":71.1,"fat":5,"carbs":6,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Крем-брюле"},

    // --- Протеиновые батончики ---
    {"id":16006,"name":"Bombbar Protein Bar 50g","calories":286,"protein":25,"fat":9.7,"carbs":16.2,"unit":"g","default":50,"category":"Спортпит","brand":"Bombbar","flavor":"Классический"},
    {"id":16007,"name":"Bombbar Protein Stick Raspberry Sorbet","calories":356,"protein":25,"fat":15.9,"carbs":8.4,"unit":"g","default":40,"category":"Спортпит","brand":"Bombbar","flavor":"Малиновый сорбет"},

    // --- Протеиновое печенье ---
    {"id":16008,"name":"Bombbar Protein Cookie Currant-Blueberry","calories":255,"protein":25,"fat":8,"carbs":26.8,"unit":"g","default":40,"category":"Спортпит","brand":"Bombbar","flavor":"Смородина-Голубика"},
    {"id":16009,"name":"Bombbar Protein Cookie with Chocolate","calories":295,"protein":35,"fat":10,"carbs":10,"unit":"g","default":60,"category":"Спортпит","brand":"Bombbar","flavor":"Шоколад"},

    // --- Протеиновые панкейки и вафли ---
    {"id":16010,"name":"Bombbar Protein Pancake Strawberry Cream","calories":110,"protein":10,"fat":5.3,"carbs":2.6,"unit":"g","default":40,"category":"Спортпит","brand":"Bombbar","flavor":"Клубничный крем"},
    {"id":16011,"name":"Bombbar Protein Wafer Hazelnut Ice Cream","calories":817,"protein":10,"fat":13,"carbs":7,"unit":"g","default":45,"category":"Спортпит","brand":"Bombbar","flavor":"Фундук-Мороженое"},

    // --- Протеиновые чипсы ---
    {"id":16012,"name":"Bombbar Protein Chips Bacon Paprika","calories":304,"protein":16,"fat":4,"carbs":54,"unit":"g","default":50,"category":"Спортпит","brand":"Bombbar","flavor":"Бекон-Паприка"},
    {"id":16013,"name":"Bombbar Protein Chips Milk Chocolate","calories":298,"protein":15,"fat":2,"carbs":51,"unit":"g","default":100,"category":"Спортпит","brand":"Bombbar","flavor":"Молочный шоколад"},

    // --- Соусы ---
    {"id":16014,"name":"Bombbar Curry Sauce","calories":49,"protein":3.2,"fat":0.3,"carbs":4.3,"unit":"g","default":30,"category":"Спортпит","brand":"Bombbar","flavor":"Карри"},

    // ==================== POWER PRO ====================
    {"id":16015,"name":"Power Pro Protein Bar Moccacino","calories":242,"protein":36,"fat":14.5,"carbs":30.2,"unit":"g","default":60,"category":"Спортпит","brand":"Power Pro","flavor":"Мокачино"},
    {"id":16016,"name":"Power Pro Multi-Stage Mix Cinnamon","calories":367,"protein":70,"fat":5,"carbs":10,"unit":"g","default":30,"category":"Спортпит","brand":"Power Pro","flavor":"Шоколадный циннамон"},

    // ==================== ATLETIC FOOD ====================
    {"id":16017,"name":"Atletic Food 100% Hydrolyzed Beef Protein Vanilla","calories":370,"protein":90,"fat":2,"carbs":2,"unit":"g","default":30,"category":"Спортпит","brand":"Atletic Food","flavor":"Ваниль"},
    {"id":16018,"name":"Atletic Food 100% Hydrolyzed Beef Protein Chocolate","calories":370,"protein":90,"fat":2,"carbs":2,"unit":"g","default":30,"category":"Спортпит","brand":"Atletic Food","flavor":"Шоколад"},
    {"id":16019,"name":"Atletic Food WPC 80 Premium","calories":380,"protein":80,"fat":6,"carbs":6,"unit":"g","default":30,"category":"Спортпит","brand":"Atletic Food","flavor":"Нейтральный"},
    {"id":16020,"name":"Atletic Food 100% Maltodextrin FC","calories":380,"protein":0,"fat":0,"carbs":95,"unit":"g","default":30,"category":"Спортпит","brand":"Atletic Food","flavor":"Без вкуса"},
    {"id":16021,"name":"Atletic Food Creatine Monohydrate","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":5,"category":"Спортпит","brand":"Atletic Food","flavor":"Без вкуса"},
    {"id":16022,"name":"Atletic Food Omega-3 1000mg","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":1,"category":"Спортпит","brand":"Atletic Food","flavor":"Без вкуса"},
    {"id":16023,"name":"Atletic Food Tribulus Terrestris + Yohimbe","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"caps","default":2,"category":"Спортпит","brand":"Atletic Food","flavor":"Без вкуса"},

    // ==================== BE FIRST ====================
    {"id":16024,"name":"Be First First Collagen + HA + Vitamin Pineapple","calories":350,"protein":85,"fat":0,"carbs":5,"unit":"g","default":10,"category":"Спортпит","brand":"Be First","flavor":"Ананас"},
    {"id":16025,"name":"Be First First Collagen + HA + Vitamin Forest Berries","calories":350,"protein":85,"fat":0,"carbs":5,"unit":"g","default":10,"category":"Спортпит","brand":"Be First","flavor":"Лесные ягоды"},

    // ==================== MAXLER ====================
    {"id":16026,"name":"Maxler Ultra Whey Strawberry","calories":380,"protein":75,"fat":6,"carbs":8,"unit":"g","default":30,"category":"Спортпит","brand":"Maxler","flavor":"Клубника"},
    {"id":16027,"name":"Maxler Ultra Whey Chocolate","calories":380,"protein":75,"fat":6,"carbs":8,"unit":"g","default":30,"category":"Спортпит","brand":"Maxler","flavor":"Шоколад"},
    {"id":16028,"name":"Maxler Mega Gainer Vanilla","calories":380,"protein":50,"fat":8,"carbs":35,"unit":"g","default":100,"category":"Спортпит","brand":"Maxler","flavor":"Ваниль"},
    {"id":16029,"name":"Maxler 100% Collagen Hydrolysate Apricot-Mango","calories":350,"protein":90,"fat":0,"carbs":5,"unit":"g","default":10,"category":"Спортпит","brand":"Maxler","flavor":"Абрикос-Манго"},
    {"id":16030,"name":"Maxler BCAA Powder 2:1:1 Sour Cherry","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"g","default":10,"category":"Спортпит","brand":"Maxler","flavor":"Кислая вишня"},
    {"id":16031,"name":"Maxler BCAA Powder 2:1:1 Kiwi-Strawberry","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"g","default":10,"category":"Спортпит","brand":"Maxler","flavor":"Клубника-Киви"},
    {"id":16032,"name":"Maxler L-Carnitine 2000 mg Lemon-Green Tea","calories":15,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":15,"category":"Спортпит","brand":"Maxler","flavor":"Лимон-Зеленый чай"},
    {"id":16033,"name":"Maxler L-Carnitine 3000 Comfortable Shape","calories":15,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":15,"category":"Спортпит","brand":"Maxler","flavor":"Абрикос-Манго"},
    {"id":16034,"name":"Maxler Max Motion Apricot-Mango","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"g","default":10,"category":"Спортпит","brand":"Maxler","flavor":"Абрикос-Манго"},
    {"id":16035,"name":"Maxler Daily Max Tablets","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"tab","default":1,"category":"Спортпит","brand":"Maxler","flavor":"Без вкуса"},
    {"id":16036,"name":"Maxler B-Complex Tablets","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"tab","default":1,"category":"Спортпит","brand":"Maxler","flavor":"Без вкуса"},

    // ==================== RLINe (самое вкусное спортивное питание) ====================
    {"id":16037,"name":"RLine WHEY Protein","calories":348,"protein":60,"fat":5,"carbs":17,"unit":"g","default":33,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16038,"name":"RLine Power Whey","calories":350,"protein":65,"fat":4.5,"carbs":15,"unit":"g","default":33,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16039,"name":"RLine ISO UP","calories":340,"protein":80,"fat":1,"carbs":3,"unit":"g","default":30,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16040,"name":"RLine Casein Micellar","calories":360,"protein":70,"fat":4,"carbs":6,"unit":"g","default":30,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16041,"name":"RLine Mass Gainers","calories":380,"protein":30,"fat":5,"carbs":55,"unit":"g","default":100,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16042,"name":"RLine Titan Creatine","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":5,"category":"Спортпит","brand":"RLine","flavor":"Без вкуса"},
    {"id":16043,"name":"RLine BCAA Powder","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"g","default":10,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16044,"name":"RLine L-Carnitine Liquid","calories":15,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":15,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16045,"name":"RLine Glutamine Powder","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":5,"category":"Спортпит","brand":"RLine","flavor":"Без вкуса"},
    {"id":16046,"name":"RLine Fitness Pancakes","calories":350,"protein":25,"fat":8,"carbs":45,"unit":"g","default":50,"category":"Спортпит","brand":"RLine","flavor":"Классический"},
    {"id":16047,"name":"RLine Fitness Jam","calories":250,"protein":0,"fat":0,"carbs":62,"unit":"g","default":20,"category":"Спортпит","brand":"RLine","flavor":"Фруктовый"},

    // ==================== OLIMP SPORT NUTRITION ====================
    {"id":16048,"name":"Olimp Whey Protein Xplode 70G Dubai Style Chocolate","calories":370,"protein":70,"fat":6,"carbs":8,"unit":"g","default":30,"category":"Спортпит","brand":"Olimp","flavor":"Дубайский шоколад"},
    {"id":16049,"name":"Olimp Flex Xplode","calories":10,"protein":0,"fat":0,"carbs":2,"unit":"g","default":10,"category":"Спортпит","brand":"Olimp","flavor":"Классический"},
    {"id":16050,"name":"Olimp Rocky Athletes Creatine","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":5,"category":"Спортпит","brand":"Olimp","flavor":"Без вкуса"},

    // ==================== ДРУГИЕ / НОВИНКИ ====================
    {"id":16051,"name":"Вкус и Польза Куриное филе с ореховым соусом","calories":180,"protein":25,"fat":8,"carbs":6,"unit":"g","default":250,"category":"Спортпит","brand":"Вкус и Польза","flavor":"Ореховый соус"},
    {"id":16052,"name":"Вкус и Польза Куриная грудка с овощами-гриль","calories":150,"protein":27,"fat":5,"carbs":4,"unit":"g","default":250,"category":"Спортпит","brand":"Вкус и Польза","flavor":"Овощи-гриль"},
    {"id":16053,"name":"Вкус и Польза Салат Цезарь с креветками","calories":130,"protein":15,"fat":7,"carbs":5,"unit":"g","default":200,"category":"Спортпит","brand":"Вкус и Польза","flavor":"Цезарь"},
    {"id":16054,"name":"Вкус и Польза Тыквенный суп-пюре","calories":60,"protein":2,"fat":3,"carbs":8,"unit":"g","default":300,"category":"Спортпит","brand":"Вкус и Польза","flavor":"Тыквенный"},
    {"id":16055,"name":"Вкус и Польза Рисовая каша на кокосовом молоке","calories":120,"protein":3,"fat":5,"carbs":18,"unit":"g","default":200,"category":"Спортпит","brand":"Вкус и Польза","flavor":"Кокос"},

    // ==================== 2SN ====================
    {"id":16056,"name":"2SN Magnesium + B6","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"caps","default":1,"category":"Спортпит","brand":"2SN","flavor":"Без вкуса"},
    {"id":16057,"name":"2SN Cult Protein","calories":370,"protein":75,"fat":5,"carbs":8,"unit":"g","default":30,"category":"Спортпит","brand":"2SN","flavor":"Классический"},

    // ==================== DR. HOFFMAN ====================
    {"id":16058,"name":"Dr.Hoffman Top Casein Twix","calories":360,"protein":75,"fat":5,"carbs":8,"unit":"g","default":30,"category":"Спортпит","brand":"Dr.Hoffman","flavor":"Twix"},

    // ==================== EPIMEDYUM (Классика) ====================
    {"id":16059,"name":"Epimedyumlu macun","calories":350,"protein":2,"fat":1,"carbs":85,"unit":"g","default":15,"category":"Спортпит","brand":"Epimedyumlu","flavor":"Медовый"}
];

// ========== 18. РАСТИТЕЛЬНОЕ МОЛОКО ==========
const PLANT_PRODUCTS = [
    // ==================== HI BARISTA (НОВИНКА 2026) ====================
    {"id":17001,"name":"Hi Barista Овсяное","calories":50,"protein":0.5,"fat":1.5,"carbs":8.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Hi Barista","flavor":"Овсяное"},
    {"id":17002,"name":"Hi Barista Миндальное","calories":33,"protein":1.5,"fat":1.4,"carbs":3.3,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Hi Barista","flavor":"Миндальное"},
    {"id":17003,"name":"Hi Barista Кокосовое","calories":69,"protein":0.5,"fat":2,"carbs":12,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Hi Barista","flavor":"Кокосовое"},
    {"id":17004,"name":"Hi Barista Фундучное","calories":62,"protein":2,"fat":3.2,"carbs":6.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Hi Barista","flavor":"Фундучное"},
    {"id":17005,"name":"Hi Barista Банановое","calories":74,"protein":0.5,"fat":0.5,"carbs":11,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Hi Barista","flavor":"Банановое"},

    // ==================== ЗДОРОВОЕ МЕНЮ / GREEN MILK (РОССИЯ) ====================
    {"id":17006,"name":"Здоровое меню Соевое","calories":40,"protein":2,"fat":1,"carbs":2.2,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Здоровое меню","flavor":"Соевое"},
    {"id":17007,"name":"Здоровое меню Гречневое","calories":54,"protein":1,"fat":1,"carbs":11,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Здоровое меню","flavor":"Гречневое"},
    {"id":17008,"name":"Здоровое меню Овсяное","calories":43,"protein":1,"fat":1,"carbs":8,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Здоровое меню","flavor":"Овсяное"},
    {"id":17009,"name":"Green Milk Миндаль","calories":52,"protein":0.5,"fat":1.5,"carbs":10,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Green Milk","flavor":"Миндаль"},
    {"id":17010,"name":"Green Milk Кокос","calories":54,"protein":0.3,"fat":1.5,"carbs":10,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Green Milk","flavor":"Кокос"},
    {"id":17011,"name":"Green Milk Соя+ваниль","calories":54,"protein":3.5,"fat":2,"carbs":7,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Green Milk","flavor":"Соя+ваниль"},

    // ==================== NE MOLOKO (САДЫ ПРИДОНЬЯ) ====================
    {"id":17012,"name":"Ne moloko Овсяное классическое","calories":43,"protein":1,"fat":1.5,"carbs":6.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Ne moloko","flavor":"Овсяное"},
    {"id":17013,"name":"Ne moloko Гречневое лайт","calories":43,"protein":1,"fat":1.5,"carbs":6.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Ne moloko","flavor":"Гречневое"},

    // ==================== ALPRO (DANONE) ====================
    {"id":17014,"name":"Alpro Soya","calories":39,"protein":3,"fat":1.8,"carbs":2.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Alpro","flavor":"Соевое"},
    {"id":17015,"name":"Alpro Almond","calories":24,"protein":0.5,"fat":1.1,"carbs":3,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Alpro","flavor":"Миндальное"},
    {"id":17016,"name":"Alpro Oat","calories":44,"protein":0.3,"fat":1.5,"carbs":6.8,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Alpro","flavor":"Овсяное"},
    {"id":17017,"name":"Alpro Coconut","calories":5,"protein":0.1,"fat":0.9,"carbs":2.7,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Alpro","flavor":"Кокосовое"},

    // ==================== PLANTO (ЛОГИКА МОЛОКА) ====================
    {"id":17018,"name":"Planto Растительный напиток","calories":45,"protein":0.5,"fat":1.5,"carbs":7.7,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Planto","flavor":"Классический"},

    // ==================== РАСТИТЕЛЬНОЕ МОЛОКО (ОБЩИЕ ПОЗИЦИИ) ====================
    {"id":17019,"name":"Молоко соевое","calories":40,"protein":3,"fat":1.5,"carbs":2.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Соевое"},
    {"id":17020,"name":"Молоко миндальное","calories":30,"protein":1,"fat":2.5,"carbs":1.5,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Миндальное"},
    {"id":17021,"name":"Молоко овсяное","calories":45,"protein":1,"fat":1.5,"carbs":7,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Овсяное"},
    {"id":17022,"name":"Молоко кокосовое","calories":70,"protein":0.5,"fat":3.5,"carbs":9,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Кокосовое"},
    {"id":17023,"name":"Молоко рисовое","calories":50,"protein":0.3,"fat":1,"carbs":10,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Рисовое"},
    {"id":17024,"name":"Молоко гороховое","calories":42,"protein":2,"fat":3,"carbs":1.8,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Гороховое"},

    // ==================== ДОПОЛНИТЕЛЬНО (ИЗ ДРУГИХ ИСТОЧНИКОВ) ====================
    {"id":17025,"name":"Растительное молоко (среднее)","calories":45,"protein":0.5,"fat":1.5,"carbs":7.7,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Универсальное"},
    {"id":17026,"name":"Растительное молоко (среднее 71 ккал)","calories":71,"protein":0.6,"fat":3.2,"carbs":10,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Питательное"},
    {"id":17027,"name":"Молоко конопляное","calories":50,"protein":2,"fat":3,"carbs":4,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Конопляное"},
    {"id":17028,"name":"Молоко кешью","calories":35,"protein":1,"fat":2.5,"carbs":2,"unit":"ml","default":200,"category":"Растительное молоко","brand":"Разные","flavor":"Кешью"}
];

// ========== 19. МИРОВЫЕ КУХНИ ==========
const WORLD_PRODUCTS = [
    // ========== ИТАЛЬЯНСКАЯ КУХНЯ ==========
    {"id":18001,"name":"🍝 Каннеллони с мясом","calories":237,"protein":12,"fat":14,"carbs":18,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18002,"name":"🍝 Каннеллони с курицей и шпинатом","calories":208,"protein":15,"fat":8,"carbs":22,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18003,"name":"🍝 Каннеллони с цветным соусом","calories":242,"protein":10,"fat":12,"carbs":24,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18004,"name":"🍕 Пицца Маргарита","calories":235,"protein":10,"fat":8,"carbs":30,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18005,"name":"🍕 Пицца Пепперони","calories":273,"protein":11,"fat":11,"carbs":30,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18006,"name":"🍝 Паста Карбонара","calories":450,"protein":15,"fat":25,"carbs":40,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18007,"name":"🍝 Паста Болоньезе","calories":380,"protein":14,"fat":18,"carbs":42,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18008,"name":"🍮 Тирамису","calories":350,"protein":6,"fat":20,"carbs":36,"unit":"g","default":120,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18009,"name":"🧀 Соус Песто классический","calories":420,"protein":5,"fat":42,"carbs":5,"unit":"g","default":30,"category":"Мировые кухни","cuisine":"Итальянская"},
    {"id":18010,"name":"🍝 Лазанья мясная","calories":250,"protein":15,"fat":14,"carbs":18,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Итальянская"},

    // ========== ГРУЗИНСКАЯ КУХНЯ ==========
    {"id":18011,"name":"🥟 Хинкали с мясом","calories":210,"protein":12,"fat":10,"carbs":18,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Мировые кухни","cuisine":"Грузинская"},
    {"id":18012,"name":"🥟 Хинкали с грибами","calories":180,"protein":8,"fat":7,"carbs":20,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Мировые кухни","cuisine":"Грузинская"},
    {"id":18013,"name":"🥟 Хинкали с сыром","calories":220,"protein":11,"fat":12,"carbs":18,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Мировые кухни","cuisine":"Грузинская"},
    {"id":18014,"name":"🫓 Хачапури по-аджарски","calories":280,"protein":14,"fat":15,"carbs":24,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Грузинская"},
    {"id":18015,"name":"🫓 Хачапури по-имеретински","calories":290,"protein":13,"fat":16,"carbs":25,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Грузинская"},
    {"id":18016,"name":"🍲 Солянка по-грузински (не суп)","calories":128,"protein":10,"fat":8,"carbs":5,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Грузинская"},

    // ========== ЯПОНСКАЯ КУХНЯ ==========
    {"id":18017,"name":"🍣 Суши с лососем","calories":90,"protein":4,"fat":3,"carbs":12,"unit":"pcs","options":[2,4,6,8,10],"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18018,"name":"🍣 Суши с тунцом","calories":90,"protein":4,"fat":2.5,"carbs":12,"unit":"pcs","options":[2,4,6,8,10],"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18019,"name":"🍣 Филадельфия ролл","calories":260,"protein":10,"fat":10,"carbs":28,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18020,"name":"🍣 Калифорния ролл","calories":280,"protein":9,"fat":10,"carbs":30,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18021,"name":"🍜 Рамен тёплый","calories":150,"protein":12,"fat":6,"carbs":14,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18022,"name":"🍜 Удон с креветками","calories":180,"protein":10,"fat":4,"carbs":28,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18023,"name":"🥟 Гёдза с курицей","calories":200,"protein":10,"fat":8,"carbs":22,"unit":"pcs","options":[4,6,8,10],"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18024,"name":"🥟 Гёдза с овощами","calories":180,"protein":6,"fat":7,"carbs":24,"unit":"pcs","options":[4,6,8,10],"category":"Мировые кухни","cuisine":"Японская"},
    {"id":18025,"name":"🍜 Мисо суп","calories":40,"protein":3,"fat":1.5,"carbs":5,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Японская"},

    // ========== ТАЙСКАЯ И ПАНАЗИАТСКАЯ КУХНЯ ==========
    {"id":18026,"name":"🍜 Том Ям с креветками","calories":258,"protein":9.1,"fat":8.3,"carbs":36.7,"unit":"g","default":415,"category":"Мировые кухни","cuisine":"Тайская"},
    {"id":18027,"name":"🍜 Том Кха с курицей","calories":280,"protein":15,"fat":12,"carbs":28,"unit":"g","default":400,"category":"Мировые кухни","cuisine":"Тайская"},
    {"id":18028,"name":"🍜 Пад Тай с креветками","calories":420,"protein":18,"fat":14,"carbs":52,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Тайская"},
    {"id":18029,"name":"🍛 Карри с курицей","calories":350,"protein":18,"fat":15,"carbs":35,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Тайская"},

    // ========== КИТАЙСКАЯ КУХНЯ ==========
    {"id":18030,"name":"🥟 Димсамы со свининой","calories":180,"protein":12,"fat":6,"carbs":20,"unit":"pcs","options":[3,4,5,6,8,10],"category":"Мировые кухни","cuisine":"Китайская"},
    {"id":18031,"name":"🥟 Димсамы с креветками","calories":170,"protein":11,"fat":5,"carbs":21,"unit":"pcs","options":[3,4,5,6,8,10],"category":"Мировые кухни","cuisine":"Китайская"},
    {"id":18032,"name":"🥩 Утка по-пекински","calories":350,"protein":18,"fat":25,"carbs":12,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Китайская"},
    {"id":18033,"name":"🍚 Жареный рис по-китайски","calories":180,"protein":6,"fat":8,"carbs":22,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Китайская"},
    {"id":18034,"name":"🍝 Лапша WOK с курицей","calories":450,"protein":20,"fat":15,"carbs":52,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Китайская"},
    {"id":18035,"name":"🍝 Лапша WOK с овощами","calories":350,"protein":8,"fat":10,"carbs":55,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Китайская"},

    // ========== ИНДИЙСКАЯ КУХНЯ ==========
    {"id":18036,"name":"🍛 Чикен масала","calories":250,"protein":20,"fat":12,"carbs":15,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Индийская"},
    {"id":18037,"name":"🍛 Карри с чечевицей","calories":180,"protein":10,"fat":6,"carbs":22,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Индийская"},
    {"id":18038,"name":"🍛 Бирьяни с курицей","calories":320,"protein":15,"fat":12,"carbs":38,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Индийская"},
    {"id":18039,"name":"🍛 Наан сырный","calories":300,"protein":8,"fat":10,"carbs":42,"unit":"g","default":100,"category":"Мировые кухни","cuisine":"Индийская"},

    // ========== МЕКСИКАНСКАЯ КУХНЯ ==========
    {"id":18040,"name":"🌮 Тако с говядиной","calories":220,"protein":14,"fat":12,"carbs":18,"unit":"pcs","options":[1,2,3,4,5],"category":"Мировые кухни","cuisine":"Мексиканская"},
    {"id":18041,"name":"🌯 Буррито с курицей","calories":350,"protein":18,"fat":14,"carbs":38,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Мексиканская"},
    {"id":18042,"name":"🧀 Чили кон карне","calories":280,"protein":15,"fat":14,"carbs":22,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Мексиканская"},
    {"id":18043,"name":"🌮 Начос с сыром","calories":350,"protein":10,"fat":18,"carbs":38,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Мексиканская"},
    {"id":18044,"name":"🍽️ Фахитас с курицей","calories":250,"protein":20,"fat":10,"carbs":20,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Мексиканская"},

    // ========== ИСПАНСКАЯ КУХНЯ ==========
    {"id":18045,"name":"🥘 Паэлья с морепродуктами","calories":200,"protein":12,"fat":8,"carbs":24,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Испанская"},
    {"id":18046,"name":"🥘 Паэлья с курицей","calories":180,"protein":15,"fat":6,"carbs":22,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Испанская"},
    {"id":18047,"name":"🍳 Тортилья испанская","calories":194,"protein":7,"fat":10,"carbs":18,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Испанская"},
    {"id":18048,"name":"🍅 Гаспачо","calories":50,"protein":1.5,"fat":3,"carbs":5,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Испанская"},

    // ========== ФРАНЦУЗСКАЯ КУХНЯ ==========
    {"id":18049,"name":"🦆 Фуа-гра","calories":462,"protein":11,"fat":44,"carbs":4,"unit":"g","default":50,"category":"Мировые кухни","cuisine":"Французская"},
    {"id":18050,"name":"🐌 Эскарго (улитки)","calories":130,"protein":16,"fat":5,"carbs":4,"unit":"pcs","options":[6,12],"category":"Мировые кухни","cuisine":"Французская"},
    {"id":18051,"name":"🐟 Рататуй","calories":70,"protein":1.5,"fat":5,"carbs":6,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Французская"},
    {"id":18052,"name":"🍲 Буйабес","calories":150,"protein":15,"fat":5,"carbs":10,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Французская"},
    {"id":18053,"name":"🍗 Кок-о-вен","calories":250,"protein":25,"fat":15,"carbs":5,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Французская"},
    {"id":18054,"name":"🍮 Крем-брюле","calories":350,"protein":5,"fat":20,"carbs":38,"unit":"g","default":120,"category":"Мировые кухни","cuisine":"Французская"},

    // ========== ГРЕЧЕСКАЯ КУХНЯ ==========
    {"id":18055,"name":"🥗 Греческий салат","calories":117,"protein":3,"fat":10,"carbs":5,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Греческая"},
    {"id":18056,"name":"🍢 Сувлаки","calories":280,"protein":25,"fat":18,"carbs":5,"unit":"pcs","options":[1,2,3,4],"category":"Мировые кухни","cuisine":"Греческая"},
    {"id":18057,"name":"🫓 Мусака","calories":220,"protein":12,"fat":14,"carbs":15,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Греческая"},
    {"id":18058,"name":"🥙 Гирос","calories":300,"protein":18,"fat":16,"carbs":24,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Греческая"},
    {"id":18059,"name":"🫓 Цацики","calories":80,"protein":3,"fat":6,"carbs":3,"unit":"g","default":50,"category":"Мировые кухни","cuisine":"Греческая"},

    // ========== УЗБЕКСКАЯ КУХНЯ ==========
    {"id":18060,"name":"🍚 Плов узбекский","calories":250,"protein":12,"fat":12,"carbs":28,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Узбекская"},
    {"id":18061,"name":"🍜 Лагман","calories":320,"protein":15,"fat":10,"carbs":40,"unit":"g","default":350,"category":"Мировые кухни","cuisine":"Узбекская"},
    {"id":18062,"name":"🥟 Манты с мясом","calories":220,"protein":12,"fat":10,"carbs":22,"unit":"pcs","options":[4,5,6,8,10],"category":"Мировые кухни","cuisine":"Узбекская"},
    {"id":18063,"name":"🍖 Самса","calories":300,"protein":10,"fat":20,"carbs":30,"unit":"pcs","options":[1,2,3,4],"category":"Мировые кухни","cuisine":"Узбекская"},
    {"id":18064,"name":"🍎 Шурпа","calories":120,"protein":8,"fat":5,"carbs":12,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Узбекская"},

    // ========== КОРЕЙСКАЯ КУХНЯ ==========
    {"id":18065,"name":"🍚 Кимчи","calories":25,"protein":1.5,"fat":0.5,"carbs":4,"unit":"g","default":100,"category":"Мировые кухни","cuisine":"Корейская"},
    {"id":18066,"name":"🍜 Бибимбап","calories":180,"protein":8,"fat":6,"carbs":26,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Корейская"},
    {"id":18067,"name":"🍗 Кимчхи Чиге","calories":200,"protein":14,"fat":12,"carbs":10,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Корейская"},
    {"id":18068,"name":"🐙 Чанчжорим","calories":180,"protein":18,"fat":10,"carbs":5,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Корейская"},

    // ========== НЕМЕЦКАЯ КУХНЯ ==========
    {"id":18069,"name":"🌭 Братвурст","calories":300,"protein":15,"fat":25,"carbs":3,"unit":"pcs","options":[1,2],"category":"Мировые кухни","cuisine":"Немецкая"},
    {"id":18070,"name":"🥔 Шойфеле (свиная лопатка)","calories":300,"protein":18,"fat":22,"carbs":8,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Немецкая"},
    {"id":18071,"name":"🥬 Зауэркраут","calories":20,"protein":1,"fat":0.5,"carbs":4,"unit":"g","default":100,"category":"Мировые кухни","cuisine":"Немецкая"},

    // ========== АНГЛИЙСКАЯ КУХНЯ ==========
    {"id":18072,"name":"🍖 Ростбиф","calories":250,"protein":26,"fat":15,"carbs":2,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Английская"},
    {"id":18073,"name":"🐟 Фиш энд чипс","calories":300,"protein":18,"fat":15,"carbs":25,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Английская"},
    {"id":18074,"name":"🥧 Пастуший пирог","calories":220,"protein":15,"fat":10,"carbs":20,"unit":"g","default":250,"category":"Мировые кухни","cuisine":"Английская"},

    // ========== АМЕРИКАНСКАЯ КУХНЯ ==========
    {"id":18075,"name":"🍔 Гамбургер","calories":261,"protein":15,"fat":11,"carbs":26,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Американская"},
    {"id":18076,"name":"🍗 Крылышки барбекю","calories":280,"protein":18,"fat":16,"carbs":15,"unit":"pcs","options":[6,12],"category":"Мировые кухни","cuisine":"Американская"},
    {"id":18077,"name":"🥧 Чизкейк Нью-Йорк","calories":341,"protein":7,"fat":22,"carbs":29,"unit":"g","default":120,"category":"Мировые кухни","cuisine":"Американская"},

    // ========== МАРОККАНСКАЯ КУХНЯ ==========
    {"id":18078,"name":"🥘 Тажин с курицей и курагой","calories":220,"protein":18,"fat":12,"carbs":14,"unit":"g","default":300,"category":"Мировые кухни","cuisine":"Марокканская"},
    {"id":18079,"name":"🍚 Кускус","calories":180,"protein":5,"fat":4,"carbs":32,"unit":"g","default":200,"category":"Мировые кухни","cuisine":"Марокканская"},

    // ========== РУССКАЯ КУХНЯ / СНГ ==========
    {"id":18080,"name":"🥟 Пельмени","calories":275,"protein":12,"fat":12,"carbs":29,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Русская"},
    {"id":18081,"name":"🥟 Вареники с картофелем","calories":125,"protein":4.4,"fat":3.7,"carbs":18.5,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Русская"},
    {"id":18082,"name":"🥟 Вареники с творогом","calories":235,"protein":12,"fat":8,"carbs":28,"unit":"g","default":150,"category":"Мировые кухни","cuisine":"Русская"}
];


// ========== 20. ДОПОЛНИТЕЛЬНЫЕ ПРОДУКТЫ МАГНИТА ==========
const MAGNIT_EXTRA = [
    {"id":169,"name":"🥛 Молоко топленое 4%","calories":67,"protein":2.9,"fat":4,"carbs":4.7,"unit":"ml","default":200,"category":"Магнит"},
    {"id":170,"name":"🧀 Сыр Гауда","calories":356,"protein":25,"fat":27,"carbs":2,"unit":"g","default":100,"category":"Магнит"},
    {"id":171,"name":"🧈 Масло сливочное 82%","calories":748,"protein":0.5,"fat":82,"carbs":0.8,"unit":"g","default":10,"category":"Магнит"},
    {"id":172,"name":"🥚 Яйцо куриное С1","calories":150,"protein":12.5,"fat":10.5,"carbs":0.7,"unit":"pcs","options":[1,2,3,4,5,6,10],"category":"Магнит"},
    {"id":173,"name":"🥚 Яйцо перепелиное","calories":158,"protein":13,"fat":11,"carbs":0.5,"unit":"pcs","options":[5,10,15,20,25,30],"category":"Магнит"},
    {"id":174,"name":"🍞 Хлеб ржаной","calories":210,"protein":6.5,"fat":1.2,"carbs":41,"unit":"g","default":50,"category":"Магнит"},
    {"id":175,"name":"🫓 Лаваш тонкий","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"unit":"g","default":100,"category":"Магнит"},
    {"id":176,"name":"🥐 Круассан","calories":400,"protein":6,"fat":20,"carbs":48,"unit":"g","default":80,"category":"Магнит"},
    {"id":177,"name":"🍩 Пончик","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"Магнит"},
    {"id":178,"name":"🍪 Печенье овсяное","calories":450,"protein":6,"fat":18,"carbs":65,"unit":"g","default":50,"category":"Магнит"},
    {"id":179,"name":"🥫 Говядина тушеная","calories":320,"protein":15,"fat":28,"carbs":0,"unit":"g","default":100,"category":"Магнит"},
    {"id":180,"name":"🥫 Икра лососевая","calories":250,"protein":24,"fat":17,"carbs":1,"unit":"g","default":30,"category":"Магнит"},
    {"id":181,"name":"🥫 Горошек зеленый","calories":55,"protein":3,"fat":0.2,"carbs":8,"unit":"g","default":100,"category":"Магнит"},
    {"id":182,"name":"🍿 Попкорн сладкий","calories":450,"protein":5,"fat":15,"carbs":75,"unit":"g","default":50,"category":"Магнит"},
    {"id":183,"name":"🌰 Семечки подсолнечника","calories":600,"protein":20,"fat":53,"carbs":10,"unit":"g","default":50,"category":"Магнит"},
    {"id":184,"name":"🍫 Батончик шоколадный","calories":500,"protein":6,"fat":28,"carbs":58,"unit":"g","default":50,"category":"Магнит"},
    {"id":185,"name":"🍬 Халва","calories":520,"protein":12,"fat":28,"carbs":55,"unit":"g","default":50,"category":"Магнит"},
    {"id":186,"name":"🍚 Булгур","calories":360,"protein":12,"fat":1.5,"carbs":75,"unit":"g","default":100,"category":"Магнит"},
    {"id":187,"name":"🍚 Рис бурый","calories":110,"protein":2.5,"fat":0.9,"carbs":23,"unit":"g","default":100,"category":"Магнит"},
    {"id":188,"name":"🍚 Лапша рисовая","calories":364,"protein":3,"fat":0.5,"carbs":82,"unit":"g","default":100,"category":"Магнит"},
    {"id":189,"name":"🍚 Гранола","calories":450,"protein":10,"fat":18,"carbs":60,"unit":"g","default":50,"category":"Магнит"},
    {"id":190,"name":"🍝 Макароны цельнозерновые","calories":330,"protein":14,"fat":2,"carbs":68,"unit":"g","default":100,"category":"Магнит"},
    {"id":191,"name":"🥫 Кетчуп томатный","calories":100,"protein":1.5,"fat":0.5,"carbs":23,"unit":"g","default":30,"category":"Магнит"},
    {"id":192,"name":"🥫 Майонез Провансаль","calories":620,"protein":0.5,"fat":67,"carbs":3,"unit":"g","default":30,"category":"Магнит"},
    {"id":193,"name":"🥫 Горчица русская","calories":65,"protein":4,"fat":4,"carbs":5,"unit":"g","default":30,"category":"Магнит"},
    {"id":194,"name":"🥫 Соус песто","calories":450,"protein":5,"fat":45,"carbs":5,"unit":"g","default":30,"category":"Магнит"},
    {"id":195,"name":"🥫 Соевый соус","calories":40,"protein":3,"fat":0,"carbs":7,"unit":"g","default":30,"category":"Магнит"},
    {"id":196,"name":"🌿 Перец черный молотый","calories":255,"protein":10,"fat":3,"carbs":65,"unit":"g","default":5,"category":"Магнит"},
    {"id":197,"name":"🌿 Корица","calories":250,"protein":4,"fat":1,"carbs":80,"unit":"g","default":5,"category":"Магнит"},
    {"id":198,"name":"🌿 Желатин","calories":360,"protein":87,"fat":0.4,"carbs":1,"unit":"g","default":10,"category":"Магнит"},
    {"id":199,"name":"🍯 Мед цветочный","calories":304,"protein":0.3,"fat":0,"carbs":82,"unit":"g","default":20,"category":"Магнит"}
];

const STARIK_PRODUCTS = [
    // ========== ХИНКАЛИ ==========
    {"id":19001,"name":"🥟 Хинкали с мясом и зеленью","calories":210,"protein":10,"fat":12,"carbs":18,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19002,"name":"🥟 Хинкали с мясом без зелени","calories":200,"protein":9.5,"fat":11,"carbs":18.5,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19003,"name":"🥟 Хинкали с говядиной","calories":179,"protein":6.8,"fat":7.69,"carbs":19.93,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19004,"name":"🥟 Хинкали с говядиной и укропом","calories":179,"protein":6.8,"fat":7.69,"carbs":19.93,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19005,"name":"🥟 Хинкали с бараниной","calories":210,"protein":11,"fat":13,"carbs":17,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19006,"name":"🥟 Хинкали с курицей","calories":157,"protein":9,"fat":5.17,"carbs":22.75,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19007,"name":"🥟 Хинкали с курицей и сулугуни","calories":106,"protein":4,"fat":1,"carbs":23,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19008,"name":"🥟 Хинкали с индейкой","calories":133,"protein":9,"fat":2.8,"carbs":17.9,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19009,"name":"🥟 Хинкали с грибами","calories":157,"protein":4.53,"fat":5.17,"carbs":22.75,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19010,"name":"🥟 Хинкали с сыром","calories":210,"protein":9.4,"fat":8.27,"carbs":22.14,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19011,"name":"🥟 Хинкали три сыра","calories":211,"protein":10,"fat":9,"carbs":23,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19012,"name":"🥟 Хинкали с горбушей и шпинатом","calories":175,"protein":8.5,"fat":8,"carbs":18,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19013,"name":"🥟 Хинкали с креветкой","calories":164,"protein":7.66,"fat":4.47,"carbs":23.22,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19014,"name":"🥟 Хинкали с мидиями","calories":156,"protein":5.5,"fat":4.16,"carbs":23.85,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19015,"name":"🥟 Хинкали с кальмаром","calories":181,"protein":10.9,"fat":4.6,"carbs":23.9,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19016,"name":"🥟 Хинкали Дай Тай","calories":201,"protein":12.8,"fat":5.8,"carbs":24.4,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19017,"name":"🥟 Хинкали Чкмерули","calories":196,"protein":8,"fat":17,"carbs":5,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19018,"name":"🥟 Хинкали с вишней и творогом","calories":220,"protein":6.5,"fat":7,"carbs":32,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19019,"name":"🥟 Сливочное хинкали с шоколадом (пеламуши)","calories":280,"protein":5,"fat":14,"carbs":34,"unit":"pcs","options":[1,2,3,4],"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== МИНИ-ХИНКАЛИ ==========
    {"id":19020,"name":"🥟 Мини-хинкали с говядиной в соусе демиглас","calories":210,"protein":9,"fat":11,"carbs":20,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19021,"name":"🥟 Мини-хинкали с курицей в грибном соусе","calories":200,"protein":8.5,"fat":10,"carbs":21,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19022,"name":"🥟 Мини-хинкали с курицей в соусе блю чиз","calories":215,"protein":9,"fat":12,"carbs":19,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19023,"name":"🥟 Мини-хинкали с курицей в соусе чкмерули","calories":205,"protein":8.5,"fat":10.5,"carbs":20,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19024,"name":"🥟 Мини-хинкали с говядиной в перечном соусе","calories":215,"protein":9,"fat":11.5,"carbs":19.5,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19025,"name":"🥟 Жареные мини-хинкали с курицей","calories":280,"protein":10,"fat":16,"carbs":24,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19026,"name":"🥟 Жареные мини-хинкали с говядиной","calories":295,"protein":10.5,"fat":17,"carbs":25,"unit":"set","default":10,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19027,"name":"🥟 Хрустящая двадцатка (10+10)","calories":288,"protein":10,"fat":16.5,"carbs":24.5,"unit":"set","default":20,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== ХАЧАПУРИ ==========
    {"id":19028,"name":"🫓 Хачапури по-аджарски","calories":278,"protein":10.9,"fat":14.86,"carbs":22.36,"unit":"g","default":300,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19029,"name":"🫓 Хачапури по-аджарски (острый)","calories":290,"protein":11,"fat":15.5,"carbs":23,"unit":"g","default":300,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19030,"name":"🫓 Хачапури по-аджарски с курицей","calories":310,"protein":14,"fat":16,"carbs":28,"unit":"g","default":320,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19031,"name":"🫓 Хачапури по-аджарски с беконом","calories":340,"protein":15,"fat":20,"carbs":27,"unit":"g","default":330,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19032,"name":"🫓 Хачапури по-аджарски с говяжьим рагу","calories":320,"protein":16,"fat":17,"carbs":28,"unit":"g","default":350,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19033,"name":"🫓 Хачапури по-аджарски мини","calories":294,"protein":11,"fat":16,"carbs":25,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19034,"name":"🫓 Хачапури по-имеретински","calories":280,"protein":12,"fat":15,"carbs":26,"unit":"g","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19035,"name":"🫓 Хачапури по-мегрельски","calories":300,"protein":13,"fat":17,"carbs":27,"unit":"g","default":260,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== САЛАТЫ ==========
    {"id":19036,"name":"🥗 Овощной салат по-тбилисски","calories":110,"protein":4.4,"fat":8.9,"carbs":3.2,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19037,"name":"🥗 Грузинский салат с говядиной","calories":180,"protein":8,"fat":12,"carbs":10,"unit":"g","default":200,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19038,"name":"🥗 Салат с хрустящими баклажанами","calories":145,"protein":1.2,"fat":8.8,"carbs":15.2,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19039,"name":"🥗 Салат по-грузински","calories":204,"protein":5.15,"fat":17.8,"carbs":17.8,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19040,"name":"🥗 Тёплый салат с говядиной","calories":165,"protein":8,"fat":10,"carbs":12,"unit":"g","default":200,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19041,"name":"🥗 Винегрет с ореховой заправкой","calories":130,"protein":3,"fat":8,"carbs":13,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19042,"name":"🥗 Запечённый картофель с опятами","calories":120,"protein":3.5,"fat":6,"carbs":14,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== ЗАКУСКИ ==========
    {"id":19043,"name":"🍆 Бадриджани","calories":250,"protein":5,"fat":20,"carbs":12,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19044,"name":"🧀 Жареный адыгейский сыр с наршарабом","calories":280,"protein":15,"fat":22,"carbs":6,"unit":"g","default":150,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19045,"name":"🍞 Пури","calories":250,"protein":8,"fat":3,"carbs":48,"unit":"pcs","options":[1,2],"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19046,"name":"🍄 Лобио","calories":160,"protein":8,"fat":8,"carbs":15,"unit":"g","default":200,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19047,"name":"🥬 Грибной суп","calories":80,"protein":3,"fat":4,"carbs":8,"unit":"g","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== ОСНОВНЫЕ БЛЮДА ==========
    {"id":19048,"name":"🥘 Чихиртма с курицей","calories":90,"protein":8,"fat":4,"carbs":6,"unit":"g","default":300,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19049,"name":"🍗 Куриный суп с домашней лапшой","calories":70,"protein":6,"fat":3,"carbs":6,"unit":"g","default":300,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== ДЕСЕРТЫ ==========
    {"id":19050,"name":"🍰 Морковный пирог","calories":380,"protein":5,"fat":18,"carbs":50,"unit":"g","default":120,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19051,"name":"🍪 Орешки со сгущёнкой","calories":450,"protein":6,"fat":22,"carbs":56,"unit":"g","default":100,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19052,"name":"🍰 Маковый кекс","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":120,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19053,"name":"🍯 Пахлава чизкейк","calories":420,"protein":7,"fat":24,"carbs":46,"unit":"g","default":130,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== НАПИТКИ ==========
    {"id":19054,"name":"🧃 Компот из сухофруктов (узвар)","calories":60,"protein":0.5,"fat":0,"carbs":15,"unit":"ml","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19055,"name":"🥛 Айран","calories":50,"protein":2.5,"fat":3,"carbs":3.5,"unit":"ml","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19056,"name":"🧃 Морс","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== СОУСЫ ==========
    {"id":19057,"name":"🥫 Мацони","calories":60,"protein":2.5,"fat":3.5,"carbs":4,"unit":"g","default":50,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19058,"name":"🥫 Соус перечный","calories":120,"protein":1,"fat":10,"carbs":6,"unit":"g","default":30,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19059,"name":"🥫 Соус демиглас","calories":80,"protein":5,"fat":5,"carbs":4,"unit":"g","default":30,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19060,"name":"🥫 Ткемали","calories":50,"protein":0.5,"fat":0,"carbs":12,"unit":"g","default":30,"category":"Старик Хинкалыч","cuisine":"Грузинская"},
    {"id":19061,"name":"🥫 Сацебели","calories":55,"protein":1,"fat":0.5,"carbs":12,"unit":"g","default":30,"category":"Старик Хинкалыч","cuisine":"Грузинская"},

    // ========== ДЕТСКОЕ МЕНЮ ==========
    {"id":19062,"name":"🍳 Картофельное пюре с куриными котлетами","calories":180,"protein":10,"fat":8,"carbs":18,"unit":"g","default":250,"category":"Старик Хинкалыч","cuisine":"Грузинская"}
];

const STREET_FOOD_PRODUCTS = [
    // ========== ШАУРМА И ДЁНЕР ==========
    {"id":21001,"name":"🌯 Шаурма классическая с курицей","calories":200,"protein":12.5,"fat":9.8,"carbs":16.8,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21002,"name":"🌯 Шаурма с говядиной","calories":210,"protein":13,"fat":10.5,"carbs":17,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21003,"name":"🌯 Шаурма с бараниной","calories":215,"protein":12.8,"fat":11.2,"carbs":16.5,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21004,"name":"🌯 Шаурма с индейкой","calories":185,"protein":14,"fat":8.5,"carbs":17,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21005,"name":"🌯 Шаурма острая","calories":210,"protein":12,"fat":11,"carbs":18,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21006,"name":"🌯 Шаурма с сыром","calories":230,"protein":13,"fat":13.5,"carbs":16.5,"unit":"g","default":350,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21007,"name":"🌯 Шаурма с картофелем фри внутри","calories":260,"protein":11,"fat":14,"carbs":23,"unit":"g","default":380,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21008,"name":"🌯 Дёнер c курицей","calories":250,"protein":15,"fat":14,"carbs":19,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная","note":""},
    {"id":21009,"name":"🌯 Дёнер c говядиной","calories":300,"protein":17.6,"fat":20.6,"carbs":23.5,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная","note":""},
    {"id":21010,"name":"🌯 Дёнер c бараниной","calories":310,"protein":16.5,"fat":21,"carbs":22.5,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21011,"name":"🌯 Шаурма домашняя","calories":97.4,"protein":9.8,"fat":1.1,"carbs":12.3,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная","note":"Рецепт из куриной грудки, лаваша, йогурта без масла [citation:1]"},
    {"id":21012,"name":"🥙 Шаурма в пите","calories":280,"protein":14,"fat":16,"carbs":22,"unit":"g","default":280,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21013,"name":"🥙 Шаурма вегетарианская","calories":150,"protein":5,"fat":7,"carbs":18,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21014,"name":"🌯 Дёнер вегетарианский","calories":180,"protein":6,"fat":9,"carbs":20,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21015,"name":"🌯 Дёнер в лаваше","calories":300,"protein":17.6,"fat":20.6,"carbs":23.5,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Уличная","note":""},

    // ========== ПЛОВ ==========
    {"id":21016,"name":"🍚 Плов с курицей","calories":183,"protein":10.1,"fat":7.1,"carbs":20.2,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская","note":"Средние значения по всем типам плова [citation:5]"},
    {"id":21017,"name":"🍚 Плов с говядиной","calories":195,"protein":11,"fat":8.2,"carbs":21,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская"},
    {"id":21018,"name":"🍚 Плов с бараниной","calories":213,"protein":9.6,"fat":13.6,"carbs":19.2,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская","note":"Плов из баранины [citation:9]"},
    {"id":21019,"name":"🍚 Плов со свининой","calories":250,"protein":10,"fat":15,"carbs":20,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская"},
    {"id":21020,"name":"🍚 Плов вегетарианский","calories":142,"protein":3.5,"fat":4.2,"carbs":23,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская"},
    {"id":21021,"name":"🍚 Плов с морепродуктами","calories":165,"protein":8.5,"fat":5,"carbs":22,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Узбекская"},

    // ========== ГИРОС (ГРЕЧЕСКАЯ ШАУРМА) ==========
    {"id":21022,"name":"🥙 Гирос с курицей","calories":250,"protein":14,"fat":12,"carbs":24,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Греческая"},
    {"id":21023,"name":"🥙 Гирос со свининой","calories":280,"protein":13,"fat":16,"carbs":23,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Греческая"},
    {"id":21024,"name":"🥙 Гирос с соусом цацики","calories":260,"protein":13,"fat":13,"carbs":25,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Греческая"},

    // ========== БУРГЕРЫ ==========
    {"id":21025,"name":"🍔 Гамбургер","calories":261,"protein":15,"fat":11,"carbs":26,"unit":"g","default":200,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21026,"name":"🍔 Чизбургер","calories":302,"protein":16,"fat":14,"carbs":30,"unit":"g","default":200,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21027,"name":"🍔 Двойной чизбургер","calories":450,"protein":25,"fat":24,"carbs":35,"unit":"g","default":250,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21028,"name":"🍔 Гамбургер домашний","calories":295,"protein":17,"fat":14,"carbs":27,"unit":"g","default":200,"category":"Уличная еда","cuisine":"Американская"},

    // ========== ХОТ-ДОГИ ==========
    {"id":21029,"name":"🌭 Хот-дог классический","calories":270,"protein":10,"fat":16,"carbs":23,"unit":"g","default":150,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21030,"name":"🌭 Хот-дог с сыром","calories":310,"protein":12,"fat":19,"carbs":25,"unit":"g","default":160,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21031,"name":"🌭 Хот-дог с беконом","calories":340,"protein":13,"fat":22,"carbs":24,"unit":"g","default":170,"category":"Уличная еда","cuisine":"Американская"},
    {"id":21032,"name":"🌭 Корн-дог","calories":310,"protein":11,"fat":17,"carbs":28,"unit":"g","default":120,"category":"Уличная еда","cuisine":"Американская"},

    // ========== ЧЕБУРЕКИ ==========
    {"id":21033,"name":"🥟 Чебурек с мясом","calories":290,"protein":11,"fat":18,"carbs":22,"unit":"g","default":120,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21034,"name":"🥟 Чебурек с сыром","calories":310,"protein":10,"fat":20,"carbs":23,"unit":"g","default":120,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21035,"name":"🥟 Чебурек с грибами","calories":250,"protein":7,"fat":15,"carbs":24,"unit":"g","default":120,"category":"Уличная еда","cuisine":"Уличная"},

    // ========== КАРТОФЕЛЬ (УЛИЧНЫЙ) ==========
    {"id":21036,"name":"🍟 Картофель фри","calories":310,"protein":3.5,"fat":15,"carbs":40,"unit":"g","default":120,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21037,"name":"🍟 Картофель по-деревенски","calories":250,"protein":3,"fat":12,"carbs":32,"unit":"g","default":150,"category":"Уличная еда","cuisine":"Уличная"},

    // ========== ЛАВАШ И ПИТА ==========
    {"id":21038,"name":"🫓 Лаваш армянский (без начинки)","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"unit":"g","default":100,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21039,"name":"🫓 Пита","calories":300,"protein":9,"fat":1.5,"carbs":60,"unit":"g","default":80,"category":"Уличная еда","cuisine":"Уличная"},

    // ========== НАПИТКИ (УЛИЧНЫЕ) ==========
    {"id":21040,"name":"🧃 Компот из сухофруктов","calories":60,"protein":0.5,"fat":0,"carbs":15,"unit":"ml","default":250,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21041,"name":"🥛 Айран","calories":50,"protein":2.5,"fat":3,"carbs":3.5,"unit":"ml","default":250,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21042,"name":"🧃 Морс клюквенный","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Уличная еда","cuisine":"Уличная"},

    // ========== СОУСЫ (ДОБАВКИ) ==========
    {"id":21043,"name":"🥫 Соус чесночный","calories":250,"protein":0.5,"fat":25,"carbs":5,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21044,"name":"🥫 Соус сырный","calories":280,"protein":2,"fat":28,"carbs":4,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21045,"name":"🥫 Соус острый","calories":50,"protein":0.5,"fat":1,"carbs":10,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21046,"name":"🥫 Соус барбекю","calories":120,"protein":1,"fat":0.5,"carbs":28,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21047,"name":"🥫 Соус белый","calories":150,"protein":1,"fat":15,"carbs":3,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21048,"name":"🥫 Соус ткемали","calories":50,"protein":0.5,"fat":0,"carbs":12,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21049,"name":"🥫 Соус наршараб","calories":120,"protein":0.5,"fat":0,"carbs":30,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21050,"name":"🥫 Майонез","calories":620,"protein":0.5,"fat":67,"carbs":3,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},
    {"id":21051,"name":"🥫 Кетчуп","calories":100,"protein":1.5,"fat":0.5,"carbs":23,"unit":"g","default":30,"category":"Уличная еда","cuisine":"Уличная"},

    // ========== ЭКЗОТИКА (ПО МИРУ) ==========
    {"id":21052,"name":"🌯 Донер-кебаб","calories":300,"protein":17.6,"fat":20.6,"carbs":23.5,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Турецкая","note":""},
    {"id":21053,"name":"🌯 Донер-кебаб острый","calories":320,"protein":18,"fat":22,"carbs":24,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Турецкая"},
    {"id":21054,"name":"🌮 Тако с говядиной","calories":220,"protein":14,"fat":12,"carbs":18,"unit":"pcs","options":[1,2,3,4,5],"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21055,"name":"🌮 Тако с курицей","calories":200,"protein":13,"fat":10,"carbs":18,"unit":"pcs","options":[1,2,3,4,5],"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21056,"name":"🌮 Тако вегетарианский","calories":170,"protein":6,"fat":8,"carbs":20,"unit":"pcs","options":[1,2,3,4,5],"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21057,"name":"🌯 Буррито с курицей","calories":300,"protein":15,"fat":12,"carbs":35,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21058,"name":"🌯 Буррито с говядиной","calories":340,"protein":16,"fat":15,"carbs":36,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21059,"name":"🌯 Буррито с бобами и рисом","calories":280,"protein":10,"fat":9,"carbs":40,"unit":"g","default":300,"category":"Уличная еда","cuisine":"Мексиканская"},
    {"id":21060,"name":"🥨 Крендель с солью","calories":320,"protein":8,"fat":10,"carbs":48,"unit":"g","default":80,"category":"Уличная еда","cuisine":"Уличная"}
];

const MIYAGI_PRODUCTS = [
    // ========== WOK / РИС ==========
    {"id":22001,"name":"Тяхан с курицей","calories":180,"protein":12,"fat":8,"carbs":18,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},
    {"id":22002,"name":"Тяхан с мидиями и пармезаном","calories":190,"protein":14,"fat":10,"carbs":17,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},
    {"id":22003,"name":"Жареный рис том-ям","calories":150,"protein":10,"fat":5,"carbs":18,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Тайская"},
    {"id":22004,"name":"Жареный рис с овощами","calories":140,"protein":4,"fat":5,"carbs":20,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},

    // ========== УДОН И ЛАПША ==========
    {"id":22005,"name":"Сливочный удон с курицей","calories":220,"protein":15,"fat":12,"carbs":18,"unit":"g","default":280,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22006,"name":"Сливочный удон с морепродуктами","calories":210,"protein":16,"fat":10,"carbs":19,"unit":"g","default":280,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22007,"name":"Соба с курицей в кисло-сладком соусе","calories":190,"protein":13,"fat":7,"carbs":22,"unit":"g","default":280,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22008,"name":"Соба с морепродуктами в кисло-сладком соусе","calories":180,"protein":14,"fat":6,"carbs":23,"unit":"g","default":280,"category":"MIYAGI","cuisine":"Японская"},

    // ========== КУРИЦА ==========
    {"id":22009,"name":"Курица мияги","calories":200,"protein":18,"fat":12,"carbs":10,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},
    {"id":22010,"name":"Курица сладкий чили","calories":240,"protein":16,"fat":14,"carbs":14,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},

    // ========== МОРЕПРОДУКТЫ И РЫБА ==========
    {"id":22011,"name":"Фишболы с овощами в кисло-сладком соусе","calories":160,"protein":12,"fat":8,"carbs":14,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},

    // ========== ДЕСЕРТЫ ==========
    {"id":22012,"name":"Чизкейк Нью-Йорк MIYAGI","calories":340,"protein":6,"fat":22,"carbs":26,"unit":"g","default":130,"category":"MIYAGI","cuisine":"Европейская"},

    // ========== ЭТО БЛЮДА АВТОРСКИЕ, НО Я ДОБАВИЛ ЧТО ЕСТЬ ==========
    // ========== ЕЩЁ ПОЗИЦИИ ИЗ МЕНЮ (ДОБАВЛЕНЫ 2026) ==========
    {"id":22013,"name":"Ролл Филадельфия MIYAGI","calories":260,"protein":10,"fat":10,"carbs":28,"unit":"g","default":200,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22014,"name":"Ролл Калифорния MIYAGI","calories":280,"protein":9,"fat":10,"carbs":30,"unit":"g","default":200,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22015,"name":"Суши сет Мияги","calories":220,"protein":8,"fat":8,"carbs":30,"unit":"set","default":1,"category":"MIYAGI","cuisine":"Японская"},
    {"id":22016,"name":"Вок с креветкой","calories":170,"protein":12,"fat":6,"carbs":19,"unit":"g","default":250,"category":"MIYAGI","cuisine":"Азиатская"},
    {"id":22017,"name":"Том Ям с морепродуктами MIYAGI","calories":45,"protein":5,"fat":3,"carbs":4,"unit":"ml","default":350,"category":"MIYAGI","cuisine":"Тайская"}
];

const SEAFOOD_PRODUCTS = [
    // ========== УСТРИЦЫ ==========
    {"id":23001,"name":"🦪 Устрица свежая","calories":72,"protein":9.45,"fat":2.3,"carbs":4.7,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Французская","note":"1 шт ≈ 50-70г"},
    {"id":23002,"name":"🦪 Устрица Хасанская","calories":72,"protein":9.5,"fat":2.3,"carbs":4.7,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Русская","note":"Дальневосточная"},
    {"id":23003,"name":"🦪 Устрица Розовая Джоли","calories":78,"protein":10,"fat":2.5,"carbs":5,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Французская"},
    {"id":23004,"name":"🦪 Устрица Фин де Клер","calories":82,"protein":10.5,"fat":2.8,"carbs":5.2,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Французская","note":"Premium"},
    {"id":23005,"name":"🦪 Устрица Императорская","calories":85,"protein":11,"fat":3,"carbs":5.5,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Французская"},
    {"id":23006,"name":"🦪 Устрицы запечённые Рокфеллер","calories":255,"protein":12,"fat":18,"carbs":10,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Американская","note":"Соус из трав, сыра, панировка"},
    {"id":23007,"name":"🦪 Устрицы под сыром (гратен)","calories":220,"protein":14,"fat":15,"carbs":8,"unit":"pcs","options":[3,6,12],"category":"Морепродукты","cuisine":"Французская"},

    // ========== МИДИИ ==========
    {"id":23008,"name":"🦪 Мидии свежие сырые","calories":77,"protein":11.5,"fat":2,"carbs":3.3,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23009,"name":"🦪 Мидии отварные","calories":50,"protein":9.1,"fat":1.5,"carbs":0,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23010,"name":"🦪 Мидии в масле","calories":128,"protein":18,"fat":4,"carbs":5,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23011,"name":"🦪 Мидии запечённые","calories":127,"protein":8.1,"fat":10.4,"carbs":0.4,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23012,"name":"🦪 Мидии в сырно-сливочном соусе","calories":184,"protein":11,"fat":12,"carbs":8,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Французская"},
    {"id":23013,"name":"🦪 Мидии в соусе Том-Ям","calories":128,"protein":10,"fat":6,"carbs":9,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Тайская"},
    {"id":23014,"name":"🦪 Мидии в томатном соусе","calories":118,"protein":9,"fat":5,"carbs":8,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23015,"name":"🦪 Мидии с карри и кокосовым молоком","calories":152,"protein":9,"fat":9,"carbs":10,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Тайская"},
    {"id":23016,"name":"🦪 Мидии в соусе сладкий чили","calories":122,"protein":8,"fat":5,"carbs":12,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Азиатская"},
    {"id":23017,"name":"🦪 Мидии с гранатом и кориандром","calories":110,"protein":8,"fat":4,"carbs":10,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Авторская"},
    {"id":23018,"name":"🦪 Мидии с пармезаном и эстрагоном","calories":198,"protein":12,"fat":13,"carbs":9,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23019,"name":"🦪 Мидии запечённые под сыром пармезан","calories":190,"protein":13,"fat":12,"carbs":8,"unit":"g","default":680,"category":"Морепродукты","cuisine":"Итальянская"},

    // ========== КРЕВЕТКИ ==========
    {"id":23020,"name":"🍤 Креветки отварные","calories":95,"protein":19,"fat":1.5,"carbs":1,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23021,"name":"🍤 Креветки жареные","calories":160,"protein":18,"fat":9,"carbs":2,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23022,"name":"🍤 Креветки на гриле","calories":130,"protein":20,"fat":5,"carbs":1,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23023,"name":"🍤 Креветки в кляре темпура","calories":240,"protein":12,"fat":14,"carbs":18,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Японская"},
    {"id":23024,"name":"🍤 Креветки с чесноком и чили","calories":175,"protein":17,"fat":10,"carbs":5,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Азиатская"},
    {"id":23025,"name":"🍤 Тигровые креветки жареные","calories":140,"protein":21,"fat":5,"carbs":2,"unit":"pcs","options":[4,6,8,10],"category":"Морепродукты","cuisine":"Интернациональная","note":"1 шт ≈ 30г"},
    {"id":23026,"name":"🍤 Жареные тигровые креветки в соусе Том-Ям","calories":175,"protein":18,"fat":9,"carbs":7,"unit":"g","default":250,"category":"Морепродукты","cuisine":"Тайская"},
    {"id":23027,"name":"🍤 Креветочные чипсы","calories":480,"protein":3,"fat":24,"carbs":62,"unit":"g","default":50,"category":"Морепродукты","cuisine":"Азиатская"},

    // ========== ЛАНГУСТИНЫ ==========
    {"id":23028,"name":"🦞 Лангустины на гриле","calories":110,"protein":19,"fat":3,"carbs":1,"unit":"pcs","options":[5,10,15],"category":"Морепродукты","cuisine":"Средиземноморская","note":"1 шт ≈ 30г"},

    // ========== КАЛЬМАРЫ ==========
    {"id":23029,"name":"🦑 Кальмар отварной","calories":100,"protein":18,"fat":2,"carbs":2,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23030,"name":"🦑 Кальмары жареные","calories":175,"protein":15,"fat":10,"carbs":6,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23031,"name":"🦑 Кольца кальмара в кляре","calories":280,"protein":12,"fat":16,"carbs":22,"unit":"g","default":150,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23032,"name":"🦑 Щупальца кальмара","calories":155,"protein":14,"fat":8,"carbs":8,"unit":"g","default":490,"category":"Морепродукты","cuisine":"Средиземноморская","note":"с картофельными дольками"},

    // ========== ОСЬМИНОГ ==========
    {"id":23033,"name":"🐙 Осьминог отварной","calories":82,"protein":15,"fat":2,"carbs":2,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Средиземноморская"},
    {"id":23034,"name":"🐙 Осьминог на гриле","calories":140,"protein":18,"fat":6,"carbs":4,"unit":"g","default":200,"category":"Морепродукты","cuisine":"Греческая"},
    {"id":23035,"name":"🐙 Осьминог с чесночным соусом и картофелем","calories":158,"protein":15,"fat":7,"carbs":9,"unit":"g","default":300,"category":"Морепродукты","cuisine":"Испанская"},

    // ========== МОРСКИЕ ГРЕБЕШКИ ==========
    {"id":23036,"name":"🐚 Морские гребешки сырые","calories":88,"protein":17,"fat":1,"carbs":3,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23037,"name":"🐚 Морские гребешки на гриле","calories":120,"protein":18,"fat":4,"carbs":3,"unit":"g","default":150,"category":"Морепродукты","cuisine":"Интернациональная"},
    {"id":23038,"name":"🐚 Морские гребешки с кремом из цветной капусты","calories":145,"protein":15,"fat":7,"carbs":6,"unit":"g","default":250,"category":"Морепродукты","cuisine":"Авторская"},

    // ========== РАПАНЫ ==========
    {"id":23039,"name":"🐚 Рапаны отварные","calories":95,"protein":16,"fat":2.5,"carbs":2,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Черноморская"},
    {"id":23040,"name":"🐚 Жареные рапаны с чесноком и травами","calories":165,"protein":14,"fat":10,"carbs":5,"unit":"g","default":200,"category":"Морепродукты","cuisine":"Черноморская"},

    // ========== РЫБА (МОРЕПРОДУКТЫ) ==========
    {"id":23041,"name":"🐟 Барабуля черноморская во фритюре","calories":220,"protein":18,"fat":14,"carbs":8,"unit":"g","default":400,"category":"Морепродукты","cuisine":"Черноморская"},
    {"id":23042,"name":"🐟 Форель на гриле с овощной сальсой","calories":180,"protein":20,"fat":10,"carbs":4,"unit":"g","default":400,"category":"Морепродукты","cuisine":"Средиземноморская"},
    {"id":23043,"name":"🐟 Стейк из тунца","calories":150,"protein":23,"fat":5,"carbs":2,"unit":"g","default":200,"category":"Морепродукты","cuisine":"Японская"},

    // ========== СУПЫ С МОРЕПРОДУКТАМИ ==========
    {"id":23044,"name":"🥣 Тайский суп Том-Ям","calories":45,"protein":4,"fat":3,"carbs":3,"unit":"ml","default":350,"category":"Морепродукты","cuisine":"Тайская","note":"с морепродуктами"},
    {"id":23045,"name":"🥣 Буйабес","calories":55,"protein":6,"fat":2,"carbs":4,"unit":"ml","default":350,"category":"Морепродукты","cuisine":"Французская","note":"рыбный суп с морепродуктами"},
    {"id":23046,"name":"🥣 Суп с морепродуктами томатный","calories":85,"protein":7,"fat":4,"carbs":7,"unit":"ml","default":350,"category":"Морепродукты","cuisine":"Средиземноморская"},

    // ========== ПАСТА С МОРЕПРОДУКТАМИ ==========
    {"id":23047,"name":"🍝 Паста Карбонара с беконом","calories":450,"protein":15,"fat":25,"carbs":40,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23048,"name":"🍝 Паста с морепродуктами в томатном соусе","calories":220,"protein":14,"fat":8,"carbs":26,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23049,"name":"🍝 Паста с креветками в соусе песто","calories":310,"protein":16,"fat":18,"carbs":24,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23050,"name":"🍝 Паста с морепродуктами в сливочном соусе","calories":280,"protein":15,"fat":14,"carbs":26,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23051,"name":"🍝 Спагетти с вонголе (морские ракушки)","calories":230,"protein":12,"fat":9,"carbs":28,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская"},
    {"id":23052,"name":"🍝 Орзотто с морепродуктами","calories":250,"protein":14,"fat":10,"carbs":28,"unit":"g","default":350,"category":"Морепродукты","cuisine":"Итальянская","note":"паста в форме риса"},

    // ========== ЗАКУСКИ ИЗ МОРЕПРОДУКТОВ ==========
    {"id":23053,"name":"🥗 Севиче из тунца","calories":120,"protein":16,"fat":5,"carbs":4,"unit":"g","default":250,"category":"Морепродукты","cuisine":"Латиноамериканская"},
    {"id":23054,"name":"🥗 Тартар из лосося","calories":180,"protein":14,"fat":12,"carbs":4,"unit":"g","default":150,"category":"Морепродукты","cuisine":"Французская"},
    {"id":23055,"name":"🍣 Микс морепродуктов под соусом бер-блан","calories":160,"protein":12,"fat":10,"carbs":6,"unit":"g","default":250,"category":"Морепродукты","cuisine":"Французская"},
    {"id":23056,"name":"🍢 Набор морепродуктов на гриле","calories":130,"protein":15,"fat":6,"carbs":4,"unit":"set","default":300,"category":"Морепродукты","cuisine":"Средиземноморская"}
];

const CINNABON_PRODUCTS = [
    // ========== КЛАССИЧЕСКИЕ РОЛЛЫ ==========
    {"id":24001,"name":"Классический ролл","calories":880,"protein":12,"fat":37,"carbs":129,"unit":"g","default":241,"category":"Cinnabon"},
    {"id":24002,"name":"Карамельный Пеканбон","calories":1090,"protein":14,"fat":51,"carbs":149,"unit":"g","default":286,"category":"Cinnabon"},
    {"id":24003,"name":"Тертлбон","calories":1100,"protein":15,"fat":53,"carbs":149,"unit":"g","default":286,"category":"Cinnabon"},
    {"id":24004,"name":"Карамельный ролл","calories":1000,"protein":13,"fat":41,"carbs":147,"unit":"g","default":241,"category":"Cinnabon"},
    {"id":24005,"name":"OREO ролл","calories":1080,"protein":14,"fat":44,"carbs":162,"unit":"g","default":241,"category":"Cinnabon"},
    {"id":24006,"name":"Клубничный чизкейк ролл","calories":1020,"protein":13,"fat":39,"carbs":153,"unit":"g","default":241,"category":"Cinnabon"},
    {"id":24007,"name":"Шоколадно-арахисовый ролл","calories":1110,"protein":16,"fat":49,"carbs":158,"unit":"g","default":241,"category":"Cinnabon"},

    // ========== МИНИБОНЫ ==========
    {"id":24008,"name":"Минибон классический","calories":350,"protein":5,"fat":15,"carbs":52,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24009,"name":"Минибон карамельный пекан","calories":460,"protein":6,"fat":22,"carbs":62,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24010,"name":"Минибон тертл","calories":470,"protein":7,"fat":23,"carbs":62,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24011,"name":"Минибон карамельный","calories":410,"protein":5,"fat":17,"carbs":61,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24012,"name":"Минибон OREO","calories":450,"protein":6,"fat":18,"carbs":68,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24013,"name":"Минибон клубничный чизкейк","calories":420,"protein":5,"fat":16,"carbs":65,"unit":"g","default":100,"category":"Cinnabon"},
    {"id":24014,"name":"Минибон шоколадный","calories":350,"protein":5,"fat":16,"carbs":48,"unit":"g","default":100,"category":"Cinnabon"},

    // ========== БОНБАЙТС (4 ШТУКИ) ==========
    {"id":24015,"name":"Бонбайтс классические (4 шт)","calories":410,"protein":5,"fat":17,"carbs":58,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},
    {"id":24016,"name":"Бонбайтс карамельные пекан (4 шт)","calories":560,"protein":7,"fat":30,"carbs":67,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},
    {"id":24017,"name":"Бонбайтс тертл (4 шт)","calories":590,"protein":7,"fat":33,"carbs":69,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},
    {"id":24018,"name":"Бонбайтс карамельные (4 шт)","calories":470,"protein":5,"fat":20,"carbs":67,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},
    {"id":24019,"name":"Бонбайтс OREO (4 шт)","calories":510,"protein":6,"fat":21,"carbs":75,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},
    {"id":24020,"name":"Бонбайтс шоколадные (4 шт)","calories":440,"protein":5,"fat":19,"carbs":61,"unit":"pcs","options":[4,8,12],"category":"Cinnabon"},

    // ========== ЧИНАБОН КАТАЙФИ ==========
    {"id":24021,"name":"Катайфи с корицей","calories":520,"protein":6,"fat":28,"carbs":62,"unit":"g","default":120,"category":"Cinnabon"},
    {"id":24022,"name":"Катайфи с орехом пекан","calories":580,"protein":7,"fat":32,"carbs":66,"unit":"g","default":120,"category":"Cinnabon"},

    // ========== НАПИТКИ ==========
    {"id":24023,"name":"Чокобон фраппе","calories":550,"protein":8,"fat":22,"carbs":80,"unit":"ml","default":350,"category":"Cinnabon"},
    {"id":24024,"name":"Карамельное фраппе","calories":530,"protein":7,"fat":21,"carbs":78,"unit":"ml","default":350,"category":"Cinnabon"},
    {"id":24025,"name":"Взбитый лимонад","calories":250,"protein":1,"fat":0,"carbs":62,"unit":"ml","default":350,"category":"Cinnabon"},
    {"id":24026,"name":"Классический лимонад","calories":180,"protein":0,"fat":0,"carbs":45,"unit":"ml","default":350,"category":"Cinnabon"},
    {"id":24027,"name":"Чай черный","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Cinnabon"},
    {"id":24028,"name":"Чай зеленый","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":300,"category":"Cinnabon"},
    {"id":24029,"name":"Капучино","calories":55,"protein":2.5,"fat":2.5,"carbs":5.5,"unit":"ml","default":300,"category":"Cinnabon"},
    {"id":24030,"name":"Латте","calories":52,"protein":2.5,"fat":2.8,"carbs":4,"unit":"ml","default":300,"category":"Cinnabon"},
    {"id":24031,"name":"Горячий шоколад","calories":90,"protein":3,"fat":4,"carbs":12,"unit":"ml","default":300,"category":"Cinnabon"},

    // ========== МОРОЖЕНОЕ ==========
    {"id":24032,"name":"Горящий Бон","calories":480,"protein":6,"fat":25,"carbs":58,"unit":"g","default":150,"category":"Cinnabon"}
];

const DESSERTS_PRODUCTS = [
    // ========== ГОНКОНГСКИЕ ВАФЛИ ==========
    {"id":25001,"name":"Гонконгская вафля классическая","calories":300,"protein":6,"fat":12,"carbs":42,"unit":"g","default":150,"category":"Десерты","cuisine":"Азиатская"},
    {"id":25002,"name":"Гонконгская вафля с шоколадом","calories":350,"protein":7,"fat":15,"carbs":48,"unit":"g","default":160,"category":"Десерты","cuisine":"Азиатская"},
    {"id":25003,"name":"Гонконгская вафля с клубникой","calories":280,"protein":5,"fat":11,"carbs":41,"unit":"g","default":160,"category":"Десерты","cuisine":"Азиатская"},
    {"id":25004,"name":"Гонконгская вафля с бананом","calories":290,"protein":5,"fat":11,"carbs":43,"unit":"g","default":160,"category":"Десерты","cuisine":"Азиатская"},
    {"id":25005,"name":"Гонконгская вафля с мороженым","calories":380,"protein":7,"fat":18,"carbs":50,"unit":"g","default":180,"category":"Десерты","cuisine":"Азиатская"},
    {"id":25006,"name":"Гонконгская вафля с нутеллой","calories":420,"protein":8,"fat":22,"carbs":52,"unit":"g","default":170,"category":"Десерты","cuisine":"Азиатская"},

    // ========== САХАРНАЯ ВАТА ==========
    {"id":25007,"name":"Сахарная вата классическая (30г)","calories":390,"protein":0,"fat":0,"carbs":98,"unit":"g","default":30,"category":"Десерты","cuisine":"Уличная"},
    {"id":25008,"name":"Сахарная вата с ароматом клубники (30г)","calories":390,"protein":0,"fat":0,"carbs":98,"unit":"g","default":30,"category":"Десерты","cuisine":"Уличная"},
    {"id":25009,"name":"Сахарная вата с ароматом яблока (30г)","calories":390,"protein":0,"fat":0,"carbs":98,"unit":"g","default":30,"category":"Десерты","cuisine":"Уличная"},
    {"id":25010,"name":"Сахарная вата с ароматом винограда (30г)","calories":390,"protein":0,"fat":0,"carbs":98,"unit":"g","default":30,"category":"Десерты","cuisine":"Уличная"},
    {"id":25011,"name":"Сахарная вата радуга (30г)","calories":390,"protein":0,"fat":0,"carbs":98,"unit":"g","default":30,"category":"Десерты","cuisine":"Уличная"},

    // ========== ПОПКОРН ==========
    {"id":25012,"name":"Попкорн соленый","calories":387,"protein":12,"fat":13,"carbs":55,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25013,"name":"Попкорн сладкий","calories":450,"protein":5,"fat":18,"carbs":72,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25014,"name":"Попкорн карамельный","calories":500,"protein":4,"fat":20,"carbs":78,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25015,"name":"Попкорн сырный","calories":480,"protein":10,"fat":25,"carbs":55,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25016,"name":"Попкорн шоколадный","calories":520,"protein":6,"fat":24,"carbs":70,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},

    // ========== ПОНЧИКИ ==========
    {"id":25017,"name":"Пончик классический с сахарной пудрой","calories":380,"protein":5,"fat":18,"carbs":48,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},
    {"id":25018,"name":"Пончик с шоколадной глазурью","calories":420,"protein":6,"fat":20,"carbs":52,"unit":"g","default":85,"category":"Десерты","cuisine":"Уличная"},
    {"id":25019,"name":"Пончик с клубничной глазурью","calories":410,"protein":5,"fat":19,"carbs":53,"unit":"g","default":85,"category":"Десерты","cuisine":"Уличная"},
    {"id":25020,"name":"Пончик с ванильной глазурью","calories":400,"protein":5,"fat":18,"carbs":52,"unit":"g","default":85,"category":"Десерты","cuisine":"Уличная"},
    {"id":25021,"name":"Пончик с карамелью","calories":430,"protein":5,"fat":21,"carbs":54,"unit":"g","default":85,"category":"Десерты","cuisine":"Уличная"},
    {"id":25022,"name":"Пончик с посыпкой","calories":410,"protein":5,"fat":19,"carbs":53,"unit":"g","default":85,"category":"Десерты","cuisine":"Уличная"},
    {"id":25023,"name":"Пончик с начинкой клубника","calories":430,"protein":5,"fat":20,"carbs":55,"unit":"g","default":90,"category":"Десерты","cuisine":"Уличная"},

    // ========== ПИРОЖНЫЕ ТРУБОЧКИ ==========
    {"id":25024,"name":"Трубочка со сгущёнкой","calories":420,"protein":6,"fat":22,"carbs":50,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},
    {"id":25025,"name":"Трубочка с варёной сгущёнкой","calories":430,"protein":6,"fat":23,"carbs":49,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},
    {"id":25026,"name":"Трубочка с творожным кремом","calories":380,"protein":8,"fat":18,"carbs":46,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},
    {"id":25027,"name":"Трубочка с шоколадным кремом","calories":450,"protein":7,"fat":24,"carbs":52,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},
    {"id":25028,"name":"Трубочка с кремом","calories":400,"protein":5,"fat":20,"carbs":48,"unit":"g","default":80,"category":"Десерты","cuisine":"Уличная"},

    // ========== МОРОЖЕНОЕ ==========
    {"id":25029,"name":"Мороженое пломбир","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25030,"name":"Мороженое шоколадное","calories":250,"protein":4,"fat":14,"carbs":26,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25031,"name":"Мороженое клубничное","calories":240,"protein":3.5,"fat":12,"carbs":27,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25032,"name":"Мороженое фисташковое","calories":250,"protein":4.5,"fat":14.5,"carbs":25,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25033,"name":"Мороженое ванильное","calories":240,"protein":4,"fat":13,"carbs":26,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25034,"name":"Сливочное мороженое в стаканчике","calories":220,"protein":4,"fat":12,"carbs":24,"unit":"g","default":90,"category":"Десерты","cuisine":"Уличная"},
    {"id":25035,"name":"Сливочное мороженое в рожке","calories":250,"protein":4,"fat":13,"carbs":28,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25036,"name":"Мороженое с шоколадной крошкой","calories":260,"protein":4.5,"fat":15,"carbs":27,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},
    {"id":25037,"name":"Мороженое с карамелью","calories":270,"protein":4,"fat":15,"carbs":29,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},

    // ========== ВАФЛИ В СТАКАНЧИКЕ (ТРУБОЧКИ) ==========
    {"id":25038,"name":"Вафельный стаканчик с мороженым","calories":320,"protein":5,"fat":14,"carbs":44,"unit":"g","default":120,"category":"Десерты","cuisine":"Уличная"},
    {"id":25039,"name":"Вафля в стаканчике с кремом","calories":350,"protein":4,"fat":16,"carbs":48,"unit":"g","default":100,"category":"Десерты","cuisine":"Уличная"},

    // ========== БЛИНЧИКИ С НАЧИНКОЙ ==========
    {"id":25040,"name":"Блинчик с шоколадом","calories":280,"protein":6,"fat":12,"carbs":38,"unit":"g","default":120,"category":"Десерты","cuisine":"Уличная"},
    {"id":25041,"name":"Блинчик с варёной сгущёнкой","calories":290,"protein":6,"fat":13,"carbs":39,"unit":"g","default":120,"category":"Десерты","cuisine":"Уличная"},
    {"id":25042,"name":"Блинчик с творогом","calories":250,"protein":10,"fat":10,"carbs":32,"unit":"g","default":120,"category":"Десерты","cuisine":"Уличная"},
    {"id":25043,"name":"Блинчик с клубникой","calories":260,"protein":5,"fat":11,"carbs":37,"unit":"g","default":120,"category":"Десерты","cuisine":"Уличная"},

    // ========== ЧУРРОС (ИСПАНСКИЕ ПОНЧИКИ) ==========
    {"id":25044,"name":"Чуррос классический","calories":350,"protein":5,"fat":18,"carbs":42,"unit":"g","default":100,"category":"Десерты","cuisine":"Испанская"},
    {"id":25045,"name":"Чуррос с шоколадным соусом","calories":420,"protein":6,"fat":22,"carbs":50,"unit":"g","default":120,"category":"Десерты","cuisine":"Испанская"},
    {"id":25046,"name":"Чуррос с карамельным соусом","calories":410,"protein":5,"fat":21,"carbs":51,"unit":"g","default":120,"category":"Десерты","cuisine":"Испанская"},

    // ========== МАКАРОН (ФРАНЦУЗСКОЕ ПЕЧЕНЬЕ) ==========
    {"id":25047,"name":"Макарон","calories":420,"protein":5,"fat":18,"carbs":60,"unit":"g","default":30,"category":"Десерты","cuisine":"Французская"},

    // ========== ЯБЛОКО В КАРАМЕЛИ ==========
    {"id":25048,"name":"Яблоко в карамели","calories":250,"protein":1,"fat":5,"carbs":52,"unit":"g","default":150,"category":"Десерты","cuisine":"Уличная"},

    // ========== ДЖЕЛАТО (ИТАЛЬЯНСКОЕ МОРОЖЕНОЕ) ==========
    {"id":25049,"name":"Джелато фисташковое","calories":220,"protein":4.5,"fat":12,"carbs":24,"unit":"g","default":100,"category":"Десерты","cuisine":"Итальянская"},
    {"id":25050,"name":"Джелато шоколадное","calories":230,"protein":4,"fat":13,"carbs":25,"unit":"g","default":100,"category":"Десерты","cuisine":"Итальянская"},
    {"id":25051,"name":"Джелато клубничное","calories":210,"protein":3.5,"fat":10,"carbs":26,"unit":"g","default":100,"category":"Десерты","cuisine":"Итальянская"}
];

const VIETNAMESE_PRODUCTS = [
    // ========== СУПЫ (Lẩu / Phở / Bún) ==========
    {"id":26001,"name":"Фо Бо (суп с говядиной и рисовой лапшой)","calories":72,"protein":7,"fat":1.6,"carbs":7,"unit":"ml","default":350,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26002,"name":"Фо Га (суп с курицей и рисовой лапшой)","calories":68,"protein":8,"fat":1.2,"carbs":6.5,"unit":"ml","default":350,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26003,"name":"Бун Ча (рисовая лапша со свининой)","calories":430,"protein":37,"fat":63,"carbs":143,"unit":"g","default":300,"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"калорийность на порцию, ~300г"},
    {"id":26004,"name":"Ка Кхо То (рыба в карамельном соусе)","calories":862,"protein":84,"fat":17,"carbs":117,"unit":"g","default":300,"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"на 1 порцию"},

    // ========== ЗАКУСКИ И БЛИНЧИКИ ==========
    {"id":26005,"name":"Нэм (вьетнамские спринг-роллы)","calories":237,"protein":9.5,"fat":17.6,"carbs":10.7,"unit":"g","default":100,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26006,"name":"Гой Куон (свежие рисовые роллы с креветками)","calories":120,"protein":5,"fat":2,"carbs":20,"unit":"pcs","options":[2,4,6,8],"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"1 шт ≈ 50г"},

    // ========== ОСНОВНЫЕ БЛЮДА ==========
    {"id":26007,"name":"Ком Га (рис с курицей)","calories":320,"protein":14.7,"fat":4.5,"carbs":55.2,"unit":"g","default":250,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26008,"name":"Бань Ми (вьетнамский сэндвич)","calories":232,"protein":11,"fat":7,"carbs":29,"unit":"g","default":220,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26009,"name":"Бань Ми с курицей","calories":240,"protein":12,"fat":8,"carbs":30,"unit":"g","default":220,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26010,"name":"Бань Ми со свининой","calories":260,"protein":13,"fat":10,"carbs":31,"unit":"g","default":220,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},

    // ========== РИС И ЛАПША ==========
    {"id":26011,"name":"Лапша рисовая жареная","calories":180,"protein":4,"fat":6,"carbs":28,"unit":"g","default":250,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
    {"id":26012,"name":"Рис жареный по-вьетнамски","calories":200,"protein":6,"fat":8,"carbs":28,"unit":"g","default":250,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},

    // ========== СОУСЫ ==========
    {"id":26013,"name":"Соус Ныок Мам (рыбный)","calories":30,"protein":5,"fat":0,"carbs":2,"unit":"ml","default":15,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"}
];

const Roll_all = [
    // ========== ЯПОНСКИЕ РОЛЛЫ (МАКИ) ==========
{"id":10001,"name":"Ролл Филадельфия","calories":290,"protein":11.2,"fat":15.8,"carbs":26.5,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10002,"name":"Ролл Калифорния","calories":255,"protein":9.5,"fat":12.0,"carbs":28.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10003,"name":"Ролл с лососем","calories":190,"protein":8.5,"fat":6.5,"carbs":24.0,"unit":"g","default":180,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10004,"name":"Ролл с тунцом","calories":185,"protein":9.0,"fat":5.8,"carbs":24.0,"unit":"g","default":180,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10005,"name":"Ролл с угрём","calories":240,"protein":10.5,"fat":10.0,"carbs":27.0,"unit":"g","default":180,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10006,"name":"Ролл с креветкой","calories":210,"protein":9.0,"fat":8.5,"carbs":25.0,"unit":"g","default":180,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10007,"name":"Ролл с огурцом (Каппа маки)","calories":140,"protein":3.0,"fat":1.5,"carbs":29.0,"unit":"g","default":150,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10008,"name":"Ролл с авокадо","calories":165,"protein":3.2,"fat":6.0,"carbs":26.0,"unit":"g","default":150,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10009,"name":"Ролл с крабом (сурими)","calories":170,"protein":6.5,"fat":4.0,"carbs":27.0,"unit":"g","default":180,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10010,"name":"Текка маки (тунец)","calories":185,"protein":8.8,"fat":5.5,"carbs":24.5,"unit":"g","default":150,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},

// ========== ТЕМПУРА РОЛЛЫ ==========
{"id":10011,"name":"Ролл с креветкой темпура","calories":310,"protein":9.5,"fat":16.0,"carbs":30.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10012,"name":"Ролл Филадельфия темпура","calories":340,"protein":12.0,"fat":19.0,"carbs":32.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10013,"name":"Ролл Калифорния темпура","calories":305,"protein":10.0,"fat":15.0,"carbs":33.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},

// ========== ХОСОМАКИ (ТОНКИЕ РОЛЛЫ) ==========
{"id":10014,"name":"Хосомаки с лососем","calories":185,"protein":8.2,"fat":6.0,"carbs":25.0,"unit":"g","default":140,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10015,"name":"Хосомаки с тунцом","calories":180,"protein":8.5,"fat":5.5,"carbs":24.5,"unit":"g","default":140,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10016,"name":"Хосомаки с огурцом","calories":135,"protein":2.8,"fat":1.2,"carbs":28.0,"unit":"g","default":140,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10017,"name":"Хосомаки с авокадо","calories":160,"protein":3.0,"fat":5.8,"carbs":25.5,"unit":"g","default":140,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},
{"id":10018,"name":"Хосомаки с яйцом (Тамаго)","calories":155,"protein":5.5,"fat":4.0,"carbs":24.0,"unit":"g","default":140,"category":"Японская кухня","cuisine":"Японская","note":"6 кусочков"},

// ========== УРАМАКИ ==========
{"id":10019,"name":"Урамаки с лососем и авокадо","calories":245,"protein":9.5,"fat":11.0,"carbs":27.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10020,"name":"Урамаки с угрём и авокадо","calories":275,"protein":11.0,"fat":12.5,"carbs":29.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},
{"id":10021,"name":"Урамаки с креветкой","calories":230,"protein":9.5,"fat":9.0,"carbs":27.0,"unit":"g","default":200,"category":"Японская кухня","cuisine":"Японская","note":"8 кусочков"},

// ========== ВЬЕТНАМСКИЕ РОЛЛЫ ==========
{"id":26005,"name":"Нэм (вьетнамские спринг-роллы)","calories":237,"protein":9.5,"fat":17.6,"carbs":10.7,"unit":"g","default":100,"category":"Вьетнамская кухня","cuisine":"Вьетнамская"},
{"id":26006,"name":"Гой Куон (свежие рисовые роллы с креветками)","calories":120,"protein":5,"fat":2,"carbs":20,"unit":"pcs","options":[2,4,6,8],"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"1 шт ≈ 50г"},
{"id":26007,"name":"Гой Куон с курицей","calories":115,"protein":6,"fat":2.5,"carbs":18,"unit":"pcs","options":[2,4,6,8],"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"1 шт ≈ 50г"},
{"id":26008,"name":"Гой Куон со свининой","calories":130,"protein":5.5,"fat":3.5,"carbs":19,"unit":"pcs","options":[2,4,6,8],"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"1 шт ≈ 50г"},
{"id":26009,"name":"Чынг Куон (жареные рисовые роллы)","calories":210,"protein":7,"fat":12,"carbs":19,"unit":"pcs","options":[2,4,6,8],"category":"Вьетнамская кухня","cuisine":"Вьетнамская","note":"1 шт ≈ 45г"},

// ========== КОРЕЙСКИЕ РОЛЛЫ ==========
{"id":30001,"name":"Кимбап (классический)","calories":210,"protein":7.5,"fat":5.5,"carbs":33.0,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},
{"id":30002,"name":"Кимбап с тунцом","calories":220,"protein":8.5,"fat":6.0,"carbs":33.0,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},
{"id":30003,"name":"Кимбап с говядиной","calories":235,"protein":9.5,"fat":7.5,"carbs":32.0,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},
{"id":30004,"name":"Чончжу кимбап","calories":225,"protein":8.0,"fat":6.5,"carbs":33.5,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},
{"id":30005,"name":"Кимбап с сыром","calories":245,"protein":9.0,"fat":9.0,"carbs":31.0,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},
{"id":30006,"name":"Кимбап с кимучи","calories":195,"protein":6.0,"fat":4.5,"carbs":33.0,"unit":"g","default":200,"category":"Корейская кухня","cuisine":"Корейская","note":"1 рулет ≈ 200г"},

// ========== ТАЙСКИЕ РОЛЛЫ ==========
{"id":40001,"name":"По Пиа (тайские спринг-роллы)","calories":245,"protein":6.5,"fat":14.0,"carbs":24.0,"unit":"pcs","options":[2,3,4,5,6],"category":"Тайская кухня","cuisine":"Тайская","note":"1 шт ≈ 60г"},
{"id":40002,"name":"Свежие роллы По Пиа Сот","calories":95,"protein":4.0,"fat":1.5,"carbs":17.0,"unit":"pcs","options":[2,3,4,5,6],"category":"Тайская кухня","cuisine":"Тайская","note":"1 шт ≈ 55г"},
{"id":40003,"name":"По Пиа с креветками","calories":110,"protein":5.5,"fat":1.8,"carbs":18.0,"unit":"pcs","options":[2,3,4,5,6],"category":"Тайская кухня","cuisine":"Тайская","note":"1 шт ≈ 55г"},
{"id":40004,"name":"По Пиа с тофу","calories":100,"protein":4.5,"fat":2.0,"carbs":16.5,"unit":"pcs","options":[2,3,4,5,6],"category":"Тайская кухня","cuisine":"Тайская","note":"1 шт ≈ 55г"}
];
const Base_product = [
    // ========== БАЗОВЫЕ ПРОДУКТЫ ==========
// ========== ЯЙЦА И МОЛОЧКА ==========
{"id":11001,"name":"Яйцо куриное (С1)","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Бакалея","cuisine":"Базовая","note":"1 шт ≈ 50г"},
{"id":11002,"name":"Яйцо куриное крупное (С0)","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"pcs","options":[1,2,3,4,5,6,8,10],"category":"Бакалея","cuisine":"Базовая","note":"1 шт ≈ 65г"},
{"id":11003,"name":"Яичный белок (жидкий)","calories":52,"protein":10.9,"fat":0.2,"carbs":0.7,"unit":"ml","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11004,"name":"Яичный желток (жидкий)","calories":322,"protein":15.9,"fat":26.5,"carbs":3.6,"unit":"ml","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11005,"name":"Молоко 3.2%","calories":60,"protein":3.2,"fat":3.2,"carbs":4.7,"unit":"ml","default":200,"category":"Бакалея","cuisine":"Базовая"},
{"id":11006,"name":"Молоко 1.5%","calories":44,"protein":3.0,"fat":1.5,"carbs":4.8,"unit":"ml","default":200,"category":"Бакалея","cuisine":"Базовая"},
{"id":11007,"name":"Молоко сгущенное с сахаром","calories":329,"protein":7.0,"fat":8.5,"carbs":55.5,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11008,"name":"Молоко сгущенное вареное","calories":328,"protein":7.2,"fat":8.5,"carbs":55.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11009,"name":"Сливки 20%","calories":205,"protein":2.8,"fat":20.0,"carbs":3.7,"unit":"ml","default":50,"category":"Бакалея","cuisine":"Базовая"},
{"id":11010,"name":"Сливки 33%","calories":325,"protein":2.2,"fat":33.0,"carbs":2.9,"unit":"ml","default":50,"category":"Бакалея","cuisine":"Базовая"},
{"id":11011,"name":"Сметана 15%","calories":158,"protein":2.5,"fat":15.0,"carbs":3.9,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11012,"name":"Сметана 20%","calories":207,"protein":2.8,"fat":20.0,"carbs":3.7,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11013,"name":"Масло сливочное 82.5%","calories":748,"protein":0.5,"fat":82.5,"carbs":0.8,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11014,"name":"Масло топленое","calories":885,"protein":0.3,"fat":98.0,"carbs":0.6,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11015,"name":"Маргарин","calories":720,"protein":0.5,"fat":80.0,"carbs":1.0,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11016,"name":"Творог 5%","calories":121,"protein":17.0,"fat":5.0,"carbs":2.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11017,"name":"Творог 9%","calories":159,"protein":16.0,"fat":9.0,"carbs":2.5,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11018,"name":"Сыр творожный","calories":240,"protein":9.5,"fat":20.0,"carbs":4.0,"unit":"g","default":30,"category":"Бакалея","cuisine":"Базовая"},
{"id":11019,"name":"Сыр твердый (Российский)","calories":364,"protein":24.0,"fat":29.0,"carbs":0.5,"unit":"g","default":30,"category":"Бакалея","cuisine":"Базовая"},
{"id":11020,"name":"Сыр Моцарелла","calories":280,"protein":28.0,"fat":17.0,"carbs":3.0,"unit":"g","default":30,"category":"Бакалея","cuisine":"Базовая"},
{"id":11021,"name":"Сыр Пармезан","calories":431,"protein":38.0,"fat":29.0,"carbs":4.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11022,"name":"Сыр сливочный (Филадельфия)","calories":342,"protein":6.0,"fat":34.0,"carbs":4.0,"unit":"g","default":30,"category":"Бакалея","cuisine":"Базовая"},
{"id":11023,"name":"Йогурт натуральный 3.2%","calories":68,"protein":4.5,"fat":3.2,"carbs":5.0,"unit":"g","default":150,"category":"Бакалея","cuisine":"Базовая"},
{"id":11024,"name":"Кефир 2.5%","calories":53,"protein":3.0,"fat":2.5,"carbs":4.0,"unit":"ml","default":200,"category":"Бакалея","cuisine":"Базовая"},

// ========== МУКА И КРУПЫ ==========
{"id":11025,"name":"Мука пшеничная в/с","calories":334,"protein":10.3,"fat":1.1,"carbs":69.9,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11026,"name":"Мука цельнозерновая","calories":340,"protein":13.0,"fat":2.5,"carbs":65.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11027,"name":"Мука ржаная","calories":298,"protein":8.9,"fat":1.7,"carbs":61.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11028,"name":"Мука кукурузная","calories":364,"protein":7.2,"fat":1.5,"carbs":76.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11029,"name":"Мука рисовая","calories":366,"protein":5.9,"fat":1.4,"carbs":80.1,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11030,"name":"Мука гречневая","calories":353,"protein":13.6,"fat":2.5,"carbs":70.6,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11031,"name":"Миндальная мука","calories":602,"protein":21.0,"fat":52.0,"carbs":19.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11032,"name":"Рис круглозерный","calories":344,"protein":7.0,"fat":1.0,"carbs":76.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11033,"name":"Рис длиннозерный","calories":365,"protein":7.5,"fat":0.8,"carbs":80.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11034,"name":"Рис для суши (японский)","calories":348,"protein":6.8,"fat":0.9,"carbs":77.5,"unit":"g","default":100,"category":"Бакалея","cuisine":"Японская"},
{"id":11035,"name":"Рис бурый (коричневый)","calories":362,"protein":7.5,"fat":2.5,"carbs":73.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11036,"name":"Гречка ядрица","calories":343,"protein":12.6,"fat":3.3,"carbs":62.1,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11037,"name":"Овсяные хлопья (геркулес)","calories":350,"protein":12.0,"fat":6.0,"carbs":62.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11038,"name":"Манная крупа","calories":328,"protein":10.0,"fat":1.0,"carbs":70.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11039,"name":"Пшеничная крупа (булгур)","calories":342,"protein":12.0,"fat":1.5,"carbs":69.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11040,"name":"Киноа","calories":368,"protein":14.0,"fat":6.0,"carbs":64.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11041,"name":"Кускус","calories":376,"protein":13.0,"fat":1.5,"carbs":77.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Базовая"},
{"id":11042,"name":"Лапша рисовая","calories":364,"protein":3.5,"fat":0.8,"carbs":82.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Азиатская"},
{"id":11043,"name":"Лапша удон","calories":337,"protein":10.0,"fat":1.5,"carbs":71.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Японская"},
{"id":11044,"name":"Лапша соба","calories":336,"protein":14.0,"fat":2.5,"carbs":68.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Японская"},
{"id":11045,"name":"Вермишель рисовая","calories":364,"protein":3.5,"fat":0.8,"carbs":82.0,"unit":"g","default":100,"category":"Бакалея","cuisine":"Азиатская"},

// ========== САХАР, СЛАДОСТИ ==========
{"id":11046,"name":"Сахар белый песок","calories":399,"protein":0.0,"fat":0.0,"carbs":99.8,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11047,"name":"Сахарная пудра","calories":399,"protein":0.0,"fat":0.0,"carbs":99.8,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11048,"name":"Мед натуральный","calories":304,"protein":0.8,"fat":0.0,"carbs":80.3,"unit":"g","default":15,"category":"Бакалея","cuisine":"Базовая"},
{"id":11049,"name":"Сироп кленовый","calories":260,"protein":0.0,"fat":0.1,"carbs":67.0,"unit":"ml","default":15,"category":"Бакалея","cuisine":"Базовая"},
{"id":11050,"name":"Варенье клубничное","calories":250,"protein":0.3,"fat":0.1,"carbs":65.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11051,"name":"Джем абрикосовый","calories":260,"protein":0.4,"fat":0.1,"carbs":68.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},

// ========== МАСЛА РАСТИТЕЛЬНЫЕ ==========
{"id":11052,"name":"Масло подсолнечное","calories":899,"protein":0.0,"fat":99.9,"carbs":0.0,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11053,"name":"Масло оливковое","calories":884,"protein":0.0,"fat":100.0,"carbs":0.0,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11054,"name":"Масло кокосовое","calories":862,"protein":0.0,"fat":95.0,"carbs":0.0,"unit":"g","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11055,"name":"Масло растительное рафинированное","calories":899,"protein":0.0,"fat":99.9,"carbs":0.0,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11056,"name":"Масло кунжутное","calories":884,"protein":0.0,"fat":100.0,"carbs":0.0,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Азиатская"},

// ========== ОВОЩИ ==========
{"id":11057,"name":"Картофель","calories":77,"protein":2.0,"fat":0.4,"carbs":17.0,"unit":"g","default":150,"category":"Овощи","cuisine":"Базовая"},
{"id":11058,"name":"Лук репчатый","calories":40,"protein":1.1,"fat":0.1,"carbs":8.7,"unit":"g","default":50,"category":"Овощи","cuisine":"Базовая"},
{"id":11059,"name":"Морковь","calories":41,"protein":0.9,"fat":0.1,"carbs":9.6,"unit":"g","default":50,"category":"Овощи","cuisine":"Базовая"},
{"id":11060,"name":"Чеснок","calories":149,"protein":6.4,"fat":0.5,"carbs":33.1,"unit":"g","default":5,"category":"Овощи","cuisine":"Базовая"},
{"id":11061,"name":"Огурец свежий","calories":15,"protein":0.7,"fat":0.1,"carbs":3.0,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11062,"name":"Помидор свежий","calories":18,"protein":0.9,"fat":0.2,"carbs":3.8,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11063,"name":"Перец болгарский","calories":26,"protein":1.0,"fat":0.2,"carbs":5.3,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11064,"name":"Брокколи","calories":34,"protein":2.8,"fat":0.4,"carbs":6.6,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11065,"name":"Цветная капуста","calories":25,"protein":1.9,"fat":0.3,"carbs":5.0,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11066,"name":"Кабачок","calories":17,"protein":1.2,"fat":0.3,"carbs":3.5,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11067,"name":"Свекла","calories":43,"protein":1.6,"fat":0.2,"carbs":9.6,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},
{"id":11068,"name":"Капуста белокочанная","calories":27,"protein":1.8,"fat":0.1,"carbs":4.7,"unit":"g","default":100,"category":"Овощи","cuisine":"Базовая"},

// ========== ЗЕЛЕНЬ ==========
{"id":11069,"name":"Укроп","calories":38,"protein":2.5,"fat":0.6,"carbs":6.3,"unit":"g","default":10,"category":"Зелень","cuisine":"Базовая"},
{"id":11070,"name":"Петрушка","calories":36,"protein":3.0,"fat":0.8,"carbs":6.3,"unit":"g","default":10,"category":"Зелень","cuisine":"Базовая"},
{"id":11071,"name":"Зеленый лук","calories":32,"protein":1.3,"fat":0.1,"carbs":6.5,"unit":"g","default":10,"category":"Зелень","cuisine":"Базовая"},
{"id":11072,"name":"Кинза","calories":23,"protein":2.1,"fat":0.5,"carbs":3.7,"unit":"g","default":10,"category":"Зелень","cuisine":"Азиатская"},
{"id":11073,"name":"Базилик","calories":44,"protein":3.2,"fat":0.6,"carbs":8.0,"unit":"g","default":10,"category":"Зелень","cuisine":"Базовая"},
{"id":11074,"name":"Салат айсберг","calories":15,"protein":0.9,"fat":0.2,"carbs":2.9,"unit":"g","default":50,"category":"Овощи","cuisine":"Базовая"},

// ========== СПЕЦИИ И ПРИПРАВЫ ==========
{"id":11075,"name":"Соль поваренная","calories":0,"protein":0.0,"fat":0.0,"carbs":0.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11076,"name":"Перец черный молотый","calories":255,"protein":10.0,"fat":3.3,"carbs":64.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11077,"name":"Перец красный молотый","calories":318,"protein":12.0,"fat":13.0,"carbs":56.0,"unit":"g","default":1,"category":"Специи","cuisine":"Базовая"},
{"id":11078,"name":"Паприка молотая","calories":282,"protein":14.0,"fat":13.0,"carbs":54.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11079,"name":"Куркума","calories":354,"protein":7.8,"fat":9.9,"carbs":65.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11080,"name":"Имбирь молотый","calories":335,"protein":9.0,"fat":4.0,"carbs":72.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11081,"name":"Корица молотая","calories":247,"protein":4.0,"fat":1.2,"carbs":80.0,"unit":"g","default":2,"category":"Специи","cuisine":"Базовая"},
{"id":11082,"name":"Ванилин","calories":288,"protein":0.1,"fat":0.1,"carbs":71.0,"unit":"g","default":1,"category":"Специи","cuisine":"Базовая"},
{"id":11083,"name":"Лавровый лист","calories":313,"protein":7.6,"fat":8.4,"carbs":75.0,"unit":"g","default":1,"category":"Специи","cuisine":"Базовая"},
{"id":11084,"name":"Уксус 9%","calories":12,"protein":0.0,"fat":0.0,"carbs":0.5,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11085,"name":"Уксус яблочный","calories":21,"protein":0.0,"fat":0.0,"carbs":5.0,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Базовая"},
{"id":11086,"name":"Уксус рисовый","calories":20,"protein":0.0,"fat":0.0,"carbs":4.5,"unit":"ml","default":10,"category":"Бакалея","cuisine":"Японская"},
{"id":11087,"name":"Разрыхлитель теста","calories":53,"protein":0.0,"fat":0.0,"carbs":13.0,"unit":"g","default":5,"category":"Бакалея","cuisine":"Базовая"},
{"id":11088,"name":"Сода пищевая","calories":0,"protein":0.0,"fat":0.0,"carbs":0.0,"unit":"g","default":5,"category":"Бакалея","cuisine":"Базовая"},
{"id":11089,"name":"Дрожжи сухие","calories":325,"protein":40.0,"fat":7.0,"carbs":38.0,"unit":"g","default":7,"category":"Бакалея","cuisine":"Базовая"},
{"id":11090,"name":"Крахмал картофельный","calories":300,"protein":0.1,"fat":0.0,"carbs":75.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11091,"name":"Крахмал кукурузный","calories":381,"protein":0.3,"fat":0.1,"carbs":91.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11092,"name":"Панировочные сухари","calories":350,"protein":11.0,"fat":5.0,"carbs":70.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},
{"id":11093,"name":"Кунжут белый","calories":573,"protein":18.0,"fat":49.0,"carbs":23.0,"unit":"g","default":10,"category":"Специи","cuisine":"Азиатская"},
{"id":11094,"name":"Кунжут черный","calories":570,"protein":18.0,"fat":48.0,"carbs":24.0,"unit":"g","default":10,"category":"Специи","cuisine":"Азиатская"},
{"id":11095,"name":"Нори (листы)","calories":35,"protein":5.0,"fat":0.5,"carbs":3.0,"unit":"pcs","options":[1,2,3,4,5,10],"category":"Бакалея","cuisine":"Японская","note":"1 лист ≈ 10г"},

// ========== ОРЕХИ И СУХОФРУКТЫ ==========
{"id":11096,"name":"Грецкий орех","calories":654,"protein":15.0,"fat":65.0,"carbs":14.0,"unit":"g","default":30,"category":"Орехи","cuisine":"Базовая"},
{"id":11097,"name":"Миндаль","calories":579,"protein":21.0,"fat":50.0,"carbs":22.0,"unit":"g","default":30,"category":"Орехи","cuisine":"Базовая"},
{"id":11098,"name":"Фундук","calories":628,"protein":15.0,"fat":61.0,"carbs":17.0,"unit":"g","default":30,"category":"Орехи","cuisine":"Базовая"},
{"id":11099,"name":"Кешью","calories":553,"protein":18.0,"fat":44.0,"carbs":30.0,"unit":"g","default":30,"category":"Орехи","cuisine":"Базовая"},
{"id":11100,"name":"Семена подсолнечника","calories":584,"protein":20.5,"fat":51.5,"carbs":11.5,"unit":"g","default":30,"category":"Орехи","cuisine":"Базовая"},
{"id":11101,"name":"Семена льна","calories":534,"protein":18.0,"fat":42.0,"carbs":29.0,"unit":"g","default":15,"category":"Орехи","cuisine":"Базовая"},
{"id":11102,"name":"Изюм","calories":299,"protein":3.0,"fat":0.5,"carbs":79.0,"unit":"g","default":30,"category":"Сухофрукты","cuisine":"Базовая"},
{"id":11103,"name":"Курага","calories":241,"protein":3.0,"fat":0.5,"carbs":63.0,"unit":"g","default":30,"category":"Сухофрукты","cuisine":"Базовая"},
{"id":11104,"name":"Финики","calories":282,"protein":2.5,"fat":0.4,"carbs":75.0,"unit":"g","default":30,"category":"Сухофрукты","cuisine":"Базовая"},

// ========== КАКАО И ШОКОЛАД ==========
{"id":11105,"name":"Какао-порошок","calories":229,"protein":20.0,"fat":14.0,"carbs":29.0,"unit":"g","default":10,"category":"Десерты","cuisine":"Базовая"},
{"id":11106,"name":"Шоколад темный 70%","calories":540,"protein":8.0,"fat":38.0,"carbs":48.0,"unit":"g","default":20,"category":"Десерты","cuisine":"Базовая"},
{"id":11107,"name":"Шоколад молочный","calories":546,"protein":7.0,"fat":35.0,"carbs":54.0,"unit":"g","default":20,"category":"Десерты","cuisine":"Базовая"},
{"id":11108,"name":"Шоколад белый","calories":539,"protein":6.0,"fat":32.0,"carbs":59.0,"unit":"g","default":20,"category":"Десерты","cuisine":"Базовая"},
{"id":11109,"name":"Паста шоколадная Nutella","calories":544,"protein":6.0,"fat":31.0,"carbs":57.0,"unit":"g","default":15,"category":"Десерты","cuisine":"Базовая"},
{"id":11110,"name":"Сгущенное молоко с какао","calories":330,"protein":7.0,"fat":8.5,"carbs":55.0,"unit":"g","default":20,"category":"Бакалея","cuisine":"Базовая"},

// ========== КОНСЕРВАЦИЯ ==========
{"id":11111,"name":"Горошек зеленый консервированный","calories":55,"protein":3.5,"fat":0.2,"carbs":9.5,"unit":"g","default":100,"category":"Консервация","cuisine":"Базовая"},
{"id":11112,"name":"Кукуруза консервированная","calories":85,"protein":2.5,"fat":1.0,"carbs":17.0,"unit":"g","default":100,"category":"Консервация","cuisine":"Базовая"},
{"id":11113,"name":"Оливки","calories":145,"protein":1.0,"fat":15.0,"carbs":2.0,"unit":"g","default":50,"category":"Консервация","cuisine":"Базовая"},
{"id":11114,"name":"Маслины","calories":115,"protein":0.8,"fat":11.0,"carbs":3.0,"unit":"g","default":50,"category":"Консервация","cuisine":"Базовая"},
{"id":11115,"name":"Томатная паста","calories":82,"protein":4.5,"fat":0.5,"carbs":16.0,"unit":"g","default":30,"category":"Консервация","cuisine":"Базовая"},
{"id":30001,"name":"Шампиньоны свежие","calories":22,"protein":4.3,"fat":0.1,"carbs":0.5,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30002,"name":"Вешенки свежие","calories":33,"protein":3.3,"fat":0.4,"carbs":6.1,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30003,"name":"Белые грибы свежие","calories":34,"protein":3.7,"fat":0.5,"carbs":3.4,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30004,"name":"Лисички свежие","calories":19,"protein":1.5,"fat":0.5,"carbs":2.4,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30005,"name":"Грибы сушёные (белые)","calories":286,"protein":25.0,"fat":4.5,"carbs":33.0,"unit":"g","default":20,"category":"Грибы","cuisine":"Базовая"},
{"id":30006,"name":"Грибы маринованные","calories":18,"protein":2.0,"fat":0.2,"carbs":2.5,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30007,"name":"Опята маринованные","calories":18,"protein":2.2,"fat":0.4,"carbs":1.8,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":30008,"name":"Грузди солёные","calories":23,"protein":1.8,"fat":0.6,"carbs":3.0,"unit":"g","default":100,"category":"Грибы","cuisine":"Базовая"},
{"id":31001,"name":"Фасоль красная сухая","calories":292,"protein":21.0,"fat":1.5,"carbs":47.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31002,"name":"Фасоль белая сухая","calories":288,"protein":20.0,"fat":1.3,"carbs":47.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31003,"name":"Фасоль консервированная","calories":95,"protein":6.0,"fat":0.5,"carbs":16.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31004,"name":"Нут (турецкий горох)","calories":310,"protein":19.0,"fat":6.0,"carbs":46.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31005,"name":"Чечевица зелёная","calories":310,"protein":24.0,"fat":1.0,"carbs":51.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31006,"name":"Чечевица красная","calories":310,"protein":23.0,"fat":1.0,"carbs":54.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":31007,"name":"Маш (бобы мунг)","calories":300,"protein":23.0,"fat":1.5,"carbs":46.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Азиатская"},
{"id":31008,"name":"Соя сухая","calories":380,"protein":36.0,"fat":18.0,"carbs":17.0,"unit":"g","default":100,"category":"Бобовые","cuisine":"Базовая"},
{"id":32001,"name":"Полба","calories":337,"protein":14.5,"fat":2.4,"carbs":70.0,"unit":"g","default":100,"category":"Крупы","cuisine":"Базовая"},
{"id":32002,"name":"Кукурузная крупа","calories":328,"protein":8.3,"fat":1.2,"carbs":71.0,"unit":"g","default":100,"category":"Крупы","cuisine":"Базовая"},
{"id":32003,"name":"Сорго","calories":339,"protein":11.3,"fat":3.3,"carbs":68.0,"unit":"g","default":100,"category":"Крупы","cuisine":"Базовая"},
{"id":32004,"name":"Амарант","calories":371,"protein":13.6,"fat":7.0,"carbs":65.0,"unit":"g","default":100,"category":"Крупы","cuisine":"Базовая"},
{"id":32005,"name":"Спельта","calories":338,"protein":14.5,"fat":2.4,"carbs":70.0,"unit":"g","default":100,"category":"Крупы","cuisine":"Базовая"},
{"id":33001,"name":"Яблоко","calories":52,"protein":0.3,"fat":0.2,"carbs":14.0,"unit":"pcs","options":[1,2,3],"category":"Фрукты","cuisine":"Базовая","note":"1 шт ≈ 150г"},
{"id":33002,"name":"Груша","calories":57,"protein":0.4,"fat":0.3,"carbs":15.0,"unit":"pcs","options":[1,2,3],"category":"Фрукты","cuisine":"Базовая"},
{"id":33003,"name":"Апельсин","calories":47,"protein":0.9,"fat":0.1,"carbs":12.0,"unit":"pcs","options":[1,2,3],"category":"Фрукты","cuisine":"Базовая"},
{"id":33004,"name":"Мандарин","calories":53,"protein":0.8,"fat":0.3,"carbs":13.0,"unit":"pcs","options":[1,2,3,4,5],"category":"Фрукты","cuisine":"Базовая"},
{"id":33005,"name":"Банан","calories":89,"protein":1.1,"fat":0.3,"carbs":23.0,"unit":"pcs","options":[1,2],"category":"Фрукты","cuisine":"Базовая","note":"1 шт ≈ 120г"},
{"id":33006,"name":"Киви","calories":61,"protein":1.1,"fat":0.5,"carbs":15.0,"unit":"pcs","options":[1,2,3,4],"category":"Фрукты","cuisine":"Базовая"},
{"id":33007,"name":"Виноград","calories":69,"protein":0.6,"fat":0.2,"carbs":18.0,"unit":"g","default":100,"category":"Фрукты","cuisine":"Базовая"},
{"id":33008,"name":"Ананас","calories":50,"protein":0.5,"fat":0.1,"carbs":13.0,"unit":"g","default":100,"category":"Фрукты","cuisine":"Базовая"},
{"id":33009,"name":"Арбуз","calories":30,"protein":0.6,"fat":0.1,"carbs":8.0,"unit":"g","default":200,"category":"Фрукты","cuisine":"Базовая"},
{"id":33010,"name":"Дыня","calories":34,"protein":0.8,"fat":0.2,"carbs":8.0,"unit":"g","default":150,"category":"Фрукты","cuisine":"Базовая"},
{"id":33011,"name":"Персик","calories":39,"protein":0.9,"fat":0.3,"carbs":10.0,"unit":"pcs","options":[1,2,3],"category":"Фрукты","cuisine":"Базовая"},
{"id":33012,"name":"Нектарин","calories":44,"protein":1.1,"fat":0.3,"carbs":11.0,"unit":"pcs","options":[1,2,3],"category":"Фрукты","cuisine":"Базовая"},
{"id":33013,"name":"Слива","calories":46,"protein":0.7,"fat":0.3,"carbs":12.0,"unit":"pcs","options":[2,3,4,5],"category":"Фрукты","cuisine":"Базовая"},
{"id":33014,"name":"Вишня","calories":52,"protein":1.0,"fat":0.2,"carbs":12.0,"unit":"g","default":100,"category":"Фрукты","cuisine":"Базовая"},
{"id":33015,"name":"Черешня","calories":63,"protein":1.1,"fat":0.2,"carbs":16.0,"unit":"g","default":100,"category":"Фрукты","cuisine":"Базовая"},
{"id":33016,"name":"Клубника","calories":32,"protein":0.7,"fat":0.3,"carbs":8.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33017,"name":"Малина","calories":52,"protein":1.2,"fat":0.7,"carbs":12.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33018,"name":"Голубика","calories":57,"protein":0.7,"fat":0.3,"carbs":14.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33019,"name":"Черника","calories":57,"protein":0.7,"fat":0.3,"carbs":14.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33020,"name":"Клюква","calories":46,"protein":0.4,"fat":0.1,"carbs":12.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33021,"name":"Брусника","calories":43,"protein":0.6,"fat":0.5,"carbs":9.5,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33022,"name":"Смородина чёрная","calories":63,"protein":1.0,"fat":0.4,"carbs":15.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33023,"name":"Смородина красная","calories":56,"protein":0.8,"fat":0.2,"carbs":14.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33024,"name":"Крыжовник","calories":44,"protein":0.9,"fat":0.2,"carbs":10.0,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":33025,"name":"Ежевика","calories":43,"protein":1.4,"fat":0.5,"carbs":9.6,"unit":"g","default":100,"category":"Ягоды","cuisine":"Базовая"},
{"id":34001,"name":"Говядина вырезка","calories":250,"protein":25.0,"fat":16.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34002,"name":"Говядина (лопатка)","calories":210,"protein":20.0,"fat":14.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34003,"name":"Свинина (корейка)","calories":310,"protein":20.0,"fat":25.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34004,"name":"Свинина (лопатка)","calories":280,"protein":17.0,"fat":23.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34005,"name":"Свинина (карбонад)","calories":240,"protein":22.0,"fat":17.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34006,"name":"Куриная грудка (филе)","calories":165,"protein":31.0,"fat":3.6,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34007,"name":"Куриное бедро (филе)","calories":210,"protein":18.0,"fat":15.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34008,"name":"Куриное крыло","calories":203,"protein":19.0,"fat":14.0,"carbs":0,"unit":"g","default":100,"category":"Мясо","cuisine":"Базовая"},
{"id":34009,"name":"Индейка грудка","calories":135,"protein":25.0,"fat":3.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34010,"name":"Индейка бедро","calories":150,"protein":20.0,"fat":7.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34011,"name":"Баранина (нога)","calories":230,"protein":22.0,"fat":16.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34012,"name":"Баранина (корейка)","calories":280,"protein":20.0,"fat":22.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34013,"name":"Кролик (мясо)","calories":173,"protein":21.0,"fat":10.0,"carbs":0,"unit":"g","default":150,"category":"Мясо","cuisine":"Базовая"},
{"id":34014,"name":"Печень говяжья","calories":135,"protein":18.0,"fat":6.0,"carbs":4.0,"unit":"g","default":100,"category":"Субпродукты","cuisine":"Базовая"},
{"id":34015,"name":"Печень куриная","calories":140,"protein":19.0,"fat":6.5,"carbs":1.5,"unit":"g","default":100,"category":"Субпродукты","cuisine":"Базовая"},
{"id":34016,"name":"Сердце говяжье","calories":112,"protein":17.0,"fat":4.5,"carbs":1.5,"unit":"g","default":100,"category":"Субпродукты","cuisine":"Базовая"},
{"id":34017,"name":"Язык говяжий","calories":173,"protein":16.0,"fat":12.0,"carbs":0,"unit":"g","default":100,"category":"Субпродукты","cuisine":"Базовая"},
{"id":34018,"name":"Почки говяжьи","calories":86,"protein":15.0,"fat":3.0,"carbs":0,"unit":"g","default":100,"category":"Субпродукты","cuisine":"Базовая"},
{"id":34019,"name":"Фарш говяжий","calories":254,"protein":17.0,"fat":20.0,"carbs":0,"unit":"g","default":100,"category":"Фарш","cuisine":"Базовая"},
{"id":34020,"name":"Фарш свиной","calories":280,"protein":16.0,"fat":23.0,"carbs":0,"unit":"g","default":100,"category":"Фарш","cuisine":"Базовая"},
{"id":34021,"name":"Фарш куриный","calories":215,"protein":18.0,"fat":16.0,"carbs":0,"unit":"g","default":100,"category":"Фарш","cuisine":"Базовая"},
{"id":34022,"name":"Фарш индюшиный","calories":200,"protein":20.0,"fat":13.0,"carbs":0,"unit":"g","default":100,"category":"Фарш","cuisine":"Базовая"},
{"id":35001,"name":"Лосось (сёмга) филе","calories":208,"protein":20.0,"fat":13.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35002,"name":"Форель филе","calories":190,"protein":20.0,"fat":12.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35003,"name":"Горбуша филе","calories":150,"protein":20.5,"fat":7.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35004,"name":"Тунец филе","calories":144,"protein":23.0,"fat":5.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35005,"name":"Минтай филе","calories":79,"protein":17.0,"fat":1.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35006,"name":"Треска филе","calories":78,"protein":18.0,"fat":0.5,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35007,"name":"Пикша филе","calories":82,"protein":18.0,"fat":0.8,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35008,"name":"Судак филе","calories":84,"protein":18.4,"fat":1.1,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35009,"name":"Щука филе","calories":84,"protein":18.4,"fat":1.1,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35010,"name":"Окунь морской","calories":110,"protein":18.0,"fat":4.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35011,"name":"Скумбрия свежая","calories":205,"protein":18.0,"fat":14.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35012,"name":"Сельдь свежая","calories":158,"protein":17.0,"fat":10.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35013,"name":"Палтус","calories":102,"protein":14.0,"fat":5.0,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35014,"name":"Камбала","calories":83,"protein":16.5,"fat":1.5,"carbs":0,"unit":"g","default":100,"category":"Рыба","cuisine":"Базовая"},
{"id":35015,"name":"Креветки сырые","calories":85,"protein":18.0,"fat":1.0,"carbs":0,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35016,"name":"Мидии сырые","calories":77,"protein":11.5,"fat":2.0,"carbs":3.3,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35017,"name":"Кальмары сырые","calories":100,"protein":18.0,"fat":2.0,"carbs":2.0,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35018,"name":"Осьминог сырой","calories":82,"protein":15.0,"fat":2.0,"carbs":2.0,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35019,"name":"Гребешок сырой","calories":88,"protein":17.0,"fat":1.0,"carbs":3.0,"unit":"g","default":100,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35020,"name":"Икра лососевая","calories":250,"protein":24.0,"fat":17.0,"carbs":1.0,"unit":"g","default":30,"category":"Морепродукты","cuisine":"Базовая"},
{"id":35021,"name":"Икра минтая","calories":130,"protein":28.0,"fat":1.5,"carbs":0,"unit":"g","default":30,"category":"Морепродукты","cuisine":"Базовая"},
{"id":36001,"name":"Хлеб пшеничный","calories":265,"protein":7.5,"fat":2.5,"carbs":50.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36002,"name":"Хлеб ржаной","calories":210,"protein":6.5,"fat":1.2,"carbs":41.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36003,"name":"Хлеб цельнозерновой","calories":250,"protein":8.0,"fat":3.0,"carbs":45.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36004,"name":"Хлеб бородинский","calories":207,"protein":6.8,"fat":1.3,"carbs":41.8,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36005,"name":"Лаваш армянский тонкий","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"unit":"g","default":100,"category":"Хлеб","cuisine":"Базовая"},
{"id":36006,"name":"Батон нарезной","calories":260,"protein":7.5,"fat":3.0,"carbs":51.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36007,"name":"Багет французский","calories":270,"protein":9.0,"fat":1.5,"carbs":55.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36008,"name":"Тостовый хлеб","calories":280,"protein":8.0,"fat":4.0,"carbs":50.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36009,"name":"Лепешка","calories":250,"protein":7.0,"fat":5.0,"carbs":45.0,"unit":"g","default":100,"category":"Хлеб","cuisine":"Базовая"},
{"id":36010,"name":"Чиабатта","calories":230,"protein":8.0,"fat":3.5,"carbs":43.0,"unit":"g","default":80,"category":"Хлеб","cuisine":"Итальянская"},
{"id":36011,"name":"Фокачча","calories":250,"protein":7.0,"fat":8.0,"carbs":40.0,"unit":"g","default":80,"category":"Хлеб","cuisine":"Итальянская"},
{"id":36012,"name":"Бублик","calories":280,"protein":8.0,"fat":2.0,"carbs":58.0,"unit":"pcs","options":[1,2,3],"category":"Хлеб","cuisine":"Базовая"},
{"id":36013,"name":"Сушки","calories":370,"protein":10.0,"fat":3.0,"carbs":75.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":36014,"name":"Бараночки с маком","calories":370,"protein":10.0,"fat":4.0,"carbs":72.0,"unit":"g","default":50,"category":"Хлеб","cuisine":"Базовая"},
{"id":37001,"name":"Сыр Чеддер","calories":404,"protein":25.0,"fat":33.0,"carbs":1.5,"unit":"g","default":30,"category":"Сыры","cuisine":"Базовая"},
{"id":37002,"name":"Сыр Гауда","calories":356,"protein":25.0,"fat":27.0,"carbs":2.0,"unit":"g","default":30,"category":"Сыры","cuisine":"Базовая"},
{"id":37003,"name":"Сыр Эдам","calories":357,"protein":25.0,"fat":28.0,"carbs":1.5,"unit":"g","default":30,"category":"Сыры","cuisine":"Базовая"},
{"id":37004,"name":"Сыр Маасдам","calories":340,"protein":26.0,"fat":26.0,"carbs":0,"unit":"g","default":30,"category":"Сыры","cuisine":"Базовая"},
{"id":37005,"name":"Сыр Пармезан","calories":431,"protein":38.0,"fat":29.0,"carbs":2.0,"unit":"g","default":20,"category":"Сыры","cuisine":"Итальянская"},
{"id":37006,"name":"Сыр Рикотта","calories":174,"protein":11.0,"fat":13.0,"carbs":3.0,"unit":"g","default":50,"category":"Сыры","cuisine":"Итальянская"},
{"id":37007,"name":"Сыр Камамбер","calories":300,"protein":20.0,"fat":24.0,"carbs":0.5,"unit":"g","default":30,"category":"Сыры","cuisine":"Французская"},
{"id":37008,"name":"Сыр Бри","calories":334,"protein":21.0,"fat":27.0,"carbs":0.5,"unit":"g","default":30,"category":"Сыры","cuisine":"Французская"},
{"id":37009,"name":"Сыр Дор Блю","calories":354,"protein":21.0,"fat":30.0,"carbs":0,"unit":"g","default":30,"category":"Сыры","cuisine":"Европейская"},
{"id":37010,"name":"Сыр Рокфор","calories":369,"protein":22.0,"fat":31.0,"carbs":0.5,"unit":"g","default":30,"category":"Сыры","cuisine":"Французская"},
{"id":37011,"name":"Сыр Фета","calories":264,"protein":14.0,"fat":21.0,"carbs":4.0,"unit":"g","default":30,"category":"Сыры","cuisine":"Греческая"},
{"id":37012,"name":"Сыр Сулугуни","calories":290,"protein":20.0,"fat":22.0,"carbs":2.0,"unit":"g","default":30,"category":"Сыры","cuisine":"Грузинская"},
{"id":37013,"name":"Сыр Адыгейский","calories":264,"protein":19.0,"fat":20.0,"carbs":1.5,"unit":"g","default":50,"category":"Сыры","cuisine":"Кавказская"},
{"id":37014,"name":"Сыр Моцарелла (мини, 8г)","calories":280,"protein":28.0,"fat":17.0,"carbs":3.0,"unit":"pcs","options":[5,10,15,20],"category":"Сыры","cuisine":"Итальянская","note":"1 шарик ≈ 8г"},
{"id":37015,"name":"Сыр Косичка (чечил)","calories":310,"protein":24.0,"fat":23.0,"carbs":2.0,"unit":"g","default":100,"category":"Сыры","cuisine":"Кавказская"},
{"id":38001,"name":"Колбаса варёная Докторская","calories":257,"protein":13.0,"fat":22.0,"carbs":1.5,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38002,"name":"Колбаса варёная Молочная","calories":252,"protein":11.0,"fat":23.0,"carbs":1.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38003,"name":"Сервелат","calories":360,"protein":15.0,"fat":32.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38004,"name":"Салями","calories":450,"protein":20.0,"fat":40.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Итальянская"},
{"id":38005,"name":"Ветчина","calories":145,"protein":15.0,"fat":9.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38006,"name":"Бекон","calories":550,"protein":12.0,"fat":55.0,"carbs":0.5,"unit":"g","default":30,"category":"Колбасы","cuisine":"Базовая"},
{"id":38007,"name":"Карбонад свиной","calories":240,"protein":22.0,"fat":17.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38008,"name":"Шейка свиная копчёная","calories":280,"protein":15.0,"fat":24.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38009,"name":"Грудинка копчёная","calories":450,"protein":10.0,"fat":46.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38001,"name":"Колбаса варёная Докторская","calories":257,"protein":13.0,"fat":22.0,"carbs":1.5,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38002,"name":"Колбаса варёная Молочная","calories":252,"protein":11.0,"fat":23.0,"carbs":1.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38003,"name":"Сервелат","calories":360,"protein":15.0,"fat":32.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38004,"name":"Салями","calories":450,"protein":20.0,"fat":40.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Итальянская"},
{"id":38005,"name":"Ветчина","calories":145,"protein":15.0,"fat":9.0,"carbs":2.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38006,"name":"Бекон","calories":550,"protein":12.0,"fat":55.0,"carbs":0.5,"unit":"g","default":30,"category":"Колбасы","cuisine":"Базовая"},
{"id":38007,"name":"Карбонад свиной","calories":240,"protein":22.0,"fat":17.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38008,"name":"Шейка свиная копчёная","calories":280,"protein":15.0,"fat":24.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38009,"name":"Грудинка копчёная","calories":450,"protein":10.0,"fat":46.0,"carbs":0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":38010,"name":"Паштет печёночный","calories":300,"protein":11.0,"fat":27.0,"carbs":3.0,"unit":"g","default":50,"category":"Колбасы","cuisine":"Базовая"},
{"id":39001,"name":"Глютен (клейковина)","calories":370,"protein":75.0,"fat":2.0,"carbs":14.0,"unit":"g","default":100,"category":"БАДы","cuisine":"Базовая"},
{"id":39002,"name":"Лактоза","calories":350,"protein":0,"fat":0,"carbs":88.0,"unit":"g","default":100,"category":"БАДы","cuisine":"Базовая"},
{"id":39003,"name":"Пектин","calories":330,"protein":0,"fat":0,"carbs":85.0,"unit":"g","default":100,"category":"БАДы","cuisine":"Базовая"},
{"id":39004,"name":"Агар-агар","calories":378,"protein":8.5,"fat":0.3,"carbs":83.0,"unit":"g","default":100,"category":"БАДы","cuisine":"Базовая"},
];
// ========== 21. ГАЗИРОВАННЫЕ НАПИТКИ (КОЛА, ЛИМОНАДЫ) ==========
const SODA_PRODUCTS = [
    // ========== COCA-COLA ==========
    {"id":41001,"name":"Coca-Cola Classic","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Классическая"},
    {"id":41002,"name":"Coca-Cola без сахара (Zero)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Zero"},
    {"id":41003,"name":"Coca-Cola с сахаром (Мексиканская)","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":355,"category":"Газировка","brand":"Coca-Cola","flavor":"Мексиканская"},
    {"id":41004,"name":"Coca-Cola Vanilla","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Ваниль"},
    {"id":41005,"name":"Coca-Cola Cherry","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Вишня"},
    {"id":41006,"name":"Coca-Cola Lime","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Лайм"},
    {"id":41007,"name":"Coca-Cola Light (Diet Coke)","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":330,"category":"Газировка","brand":"Coca-Cola","flavor":"Diet"},
    {"id":41008,"name":"Coca-Cola Glass Bottle (как в ресторанах)","calories":42,"protein":0,"fat":0,"carbs":10.6,"unit":"ml","default":200,"category":"Газировка","brand":"Coca-Cola","flavor":"Стеклянная бутылка"},

    // ========== PEPSI ==========
    {"id":41009,"name":"Pepsi","calories":41,"protein":0,"fat":0,"carbs":10.3,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Классическая"},
    {"id":41010,"name":"Pepsi Max","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Max (без сахара)"},
    {"id":41011,"name":"Pepsi Zero Sugar","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Zero"},
    {"id":41012,"name":"Pepsi Twist (Лимон)","calories":41,"protein":0,"fat":0,"carbs":10.3,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Лимон"},
    {"id":41013,"name":"Pepsi Wild Cherry","calories":41,"protein":0,"fat":0,"carbs":10.3,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Вишня"},
    {"id":41014,"name":"Pepsi Vanilla","calories":41,"protein":0,"fat":0,"carbs":10.3,"unit":"ml","default":330,"category":"Газировка","brand":"Pepsi","flavor":"Ваниль"},

    // ========== РОССИЙСКИЕ КОЛЫ ==========
    {"id":41015,"name":"Добрый Cola","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Добрый","flavor":"Кола"},
    {"id":41016,"name":"Добрый Cola без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Добрый","flavor":"Кола без сахара"},
    {"id":41017,"name":"Черноголовка Кола","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Кола"},
    {"id":41018,"name":"Черноголовка Кола без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Кола без сахара"},
    {"id":41019,"name":"Кола Черноголовка Кола с витаминами","calories":20,"protein":0,"fat":0,"carbs":5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Кола с витаминами"},
    {"id":41020,"name":"Evervess Кола","calories":44,"protein":0,"fat":0,"carbs":11.1,"unit":"ml","default":330,"category":"Газировка","brand":"Evervess","flavor":"Кола"},
    {"id":41021,"name":"Кола Лайм Черноголовка","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Кола-Лайм"},

    // ========== SPRITE / 7UP / MIRINDA ==========
    {"id":41022,"name":"Sprite","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Sprite","flavor":"Лимон-Лайм"},
    {"id":41023,"name":"Sprite Zero","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":330,"category":"Газировка","brand":"Sprite","flavor":"Zero"},
    {"id":41024,"name":"7UP","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"7UP","flavor":"Лимон-Лайм"},
    {"id":41025,"name":"7UP Free (без сахара)","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":330,"category":"Газировка","brand":"7UP","flavor":"Free"},
    {"id":41026,"name":"Mirinda Апельсин","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Mirinda","flavor":"Апельсин"},
    {"id":41027,"name":"Mirinda Лимон","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Mirinda","flavor":"Лимон"},
    {"id":41028,"name":"Mirinda Клубника","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Mirinda","flavor":"Клубника"},
    {"id":41029,"name":"Mirinda Груша","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Mirinda","flavor":"Груша"},

    // ========== FANTA / SCHWEPPES ==========
    {"id":41030,"name":"Fanta Апельсин","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Апельсин"},
    {"id":41031,"name":"Fanta Лимон","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Лимон"},
    {"id":41032,"name":"Fanta Клубника","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Клубника"},
    {"id":41033,"name":"Fanta Манго","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Манго"},
    {"id":41034,"name":"Fanta Grape","calories":45,"protein":0,"fat":0,"carbs":11.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Виноград"},
    {"id":41035,"name":"Fanta Zero","calories":1,"protein":0,"fat":0,"carbs":0.2,"unit":"ml","default":330,"category":"Газировка","brand":"Fanta","flavor":"Zero"},
    {"id":41036,"name":"Schweppes Тонизированная (Indian Tonic)","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Schweppes","flavor":"Тоник"},
    {"id":41037,"name":"Schweppes Мохито","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Schweppes","flavor":"Мохито"},
    {"id":41038,"name":"Schweppes Имбирный эль","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Schweppes","flavor":"Ginger Ale"},
    {"id":41039,"name":"Schweppes Bitter Lemon","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Schweppes","flavor":"Bitter Lemon"},

    // ========== РОССИЙСКИЕ ЛИМОНАДЫ ==========
    {"id":41040,"name":"Черноголовка Лимонад","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Лимонад"},
    {"id":41041,"name":"Черноголовка Дюшес","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Дюшес"},
    {"id":41042,"name":"Черноголовка Тархун","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Тархун"},
    {"id":41043,"name":"Черноголовка Байкал","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Байкал"},
    {"id":41044,"name":"Черноголовка Саяны","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Саяны"},
    {"id":41045,"name":"Черноголовка Клюква","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Клюква"},
    {"id":41046,"name":"Черноголовка Груша","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Груша"},
    {"id":41047,"name":"Черноголовка Манго-Маракуйя","calories":20,"protein":0,"fat":0,"carbs":4.5,"unit":"ml","default":330,"category":"Газировка","brand":"Черноголовка","flavor":"Манго-Маракуйя"},

    // ========== ДРУГИЕ ГАЗИРОВАННЫЕ НАПИТКИ ==========
    {"id":41048,"name":"Dr Pepper","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Dr Pepper","flavor":"Оригинальный"},
    {"id":41049,"name":"Mountain Dew","calories":46,"protein":0,"fat":0,"carbs":11.5,"unit":"ml","default":330,"category":"Газировка","brand":"Mountain Dew","flavor":"Цитрус"},
    {"id":41050,"name":"Mountain Dew Zero","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Mountain Dew","flavor":"Zero"},
    {"id":41051,"name":"Irn-Bru","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":330,"category":"Газировка","brand":"Irn-Bru","flavor":"Оригинальный"},
    {"id":41052,"name":"Club-Mate","calories":33,"protein":0,"fat":0,"carbs":8.3,"unit":"ml","default":330,"category":"Газировка","brand":"Club-Mate","flavor":"Мате"},
    {"id":41053,"name":"Тархун Натахтари","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Натахтари","flavor":"Тархун"},
    {"id":41054,"name":"Дюшес Натахтари","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Натахтари","flavor":"Дюшес"},
    {"id":41055,"name":"Лимонад Лагерфельд Дюшес","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Лагерфельд","flavor":"Дюшес"},
    {"id":41056,"name":"Лимонад Лагерфельд Груша","calories":35,"protein":0,"fat":0,"carbs":8.8,"unit":"ml","default":330,"category":"Газировка","brand":"Лагерфельд","flavor":"Груша"},

    // ========== СОДОВАЯ И МИНЕРАЛЬНАЯ ВОДА ==========
    {"id":41057,"name":"Содовая (газированная вода)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Разные","flavor":"Содовая"},
    {"id":41058,"name":"Мин. вода газированная (Боржоми)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Боржоми","flavor":"Минеральная"},
    {"id":41059,"name":"Мин. вода газированная (Ессентуки 4)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Ессентуки","flavor":"Минеральная"},
    {"id":41060,"name":"Мин. вода газированная (Нарзан)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":330,"category":"Газировка","brand":"Нарзан","flavor":"Минеральная"},

    // ========== ЛИМОНАДЫ ПРЕМИУМ ==========
    {"id":41061,"name":"San Pellegrino Limonata","calories":32,"protein":0,"fat":0,"carbs":8,"unit":"ml","default":330,"category":"Газировка","brand":"San Pellegrino","flavor":"Лимон"},
    {"id":41062,"name":"San Pellegrino Aranciata","calories":32,"protein":0,"fat":0,"carbs":8,"unit":"ml","default":330,"category":"Газировка","brand":"San Pellegrino","flavor":"Апельсин"},
    {"id":41063,"name":"San Pellegrino Pompelmo","calories":32,"protein":0,"fat":0,"carbs":8,"unit":"ml","default":330,"category":"Газировка","brand":"San Pellegrino","flavor":"Грейпфрут"}
];

// ========== 22. СОКИ И НЕКТАРЫ ==========
const JUICE_PRODUCTS = [
    // ========== АПЕЛЬСИНОВЫЙ СОК ==========
    {"id":42001,"name":"Сок апельсиновый (прямой отжим)","calories":45,"protein":0.7,"fat":0.2,"carbs":10.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Апельсин"},
    {"id":42002,"name":"Сок апельсиновый с мякотью","calories":45,"protein":0.7,"fat":0.2,"carbs":10.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Апельсин с мякотью"},
    {"id":42003,"name":"Сок апельсиновый (восстановленный)","calories":45,"protein":0.7,"fat":0.2,"carbs":10.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Апельсин восстановленный"},
    {"id":42004,"name":"Naked Juice Апельсин","calories":50,"protein":1,"fat":0,"carbs":12,"unit":"ml","default":300,"category":"Соки","brand":"Naked","flavor":"Апельсин"},

    // ========== ЯБЛОЧНЫЙ СОК ==========
    {"id":42005,"name":"Сок яблочный (прямой отжим)","calories":46,"protein":0.2,"fat":0.1,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Яблоко"},
    {"id":42006,"name":"Сок яблочный осветлённый","calories":46,"protein":0.2,"fat":0.1,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Яблоко осветлённый"},
    {"id":42007,"name":"Сок яблочный с мякотью","calories":46,"protein":0.2,"fat":0.1,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Яблоко с мякотью"},
    {"id":42008,"name":"Сок яблочно-виноградный","calories":50,"protein":0.3,"fat":0.1,"carbs":12.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Яблоко-Виноград"},
    {"id":42009,"name":"Сок яблочно-морковный","calories":45,"protein":0.5,"fat":0.2,"carbs":11,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Яблоко-Морковь"},

    // ========== ГРЕЙПФРУТОВЫЙ СОК ==========
    {"id":42010,"name":"Сок грейпфрутовый","calories":35,"protein":0.5,"fat":0.1,"carbs":8.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Грейпфрут"},
    {"id":42011,"name":"Сок грейпфрутовый с мякотью","calories":35,"protein":0.5,"fat":0.1,"carbs":8.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Грейпфрут с мякотью"},

    // ========== ВИНОГРАДНЫЙ СОК ==========
    {"id":42012,"name":"Сок виноградный (белый)","calories":60,"protein":0.4,"fat":0.1,"carbs":15,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Виноград белый"},
    {"id":42013,"name":"Сок виноградный (красный)","calories":60,"protein":0.4,"fat":0.1,"carbs":15,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Виноград красный"},

    // ========== ТОМАТНЫЙ СОК ==========
    {"id":42014,"name":"Сок томатный","calories":17,"protein":0.8,"fat":0.1,"carbs":3.2,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Томат"},
    {"id":42015,"name":"Сок томатный с солью","calories":17,"protein":0.8,"fat":0.1,"carbs":3.2,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Томат с солью"},
    {"id":42016,"name":"Сок томатный с сельдереем","calories":18,"protein":0.9,"fat":0.1,"carbs":3.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Томат-Сельдерей"},

    // ========== АНАНАСОВЫЙ СОК ==========
    {"id":42017,"name":"Сок ананасовый","calories":53,"protein":0.4,"fat":0.1,"carbs":13,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Ананас"},
    {"id":42018,"name":"Сок ананасовый с мякотью","calories":53,"protein":0.4,"fat":0.1,"carbs":13,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Ананас с мякотью"},

    // ========== ВИШНЁВЫЙ СОК ==========
    {"id":42019,"name":"Сок вишнёвый","calories":51,"protein":0.7,"fat":0.2,"carbs":12.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Вишня"},
    {"id":42020,"name":"Сок вишнёвый с мякотью","calories":51,"protein":0.7,"fat":0.2,"carbs":12.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Вишня с мякотью"},

    // ========== ГРАНАТОВЫЙ СОК ==========
    {"id":42021,"name":"Сок гранатовый","calories":60,"protein":0.4,"fat":0.1,"carbs":15,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Гранат"},
    {"id":42022,"name":"Сок гранатовый с мякотью","calories":60,"protein":0.4,"fat":0.1,"carbs":15,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Гранат с мякотью"},

    // ========== МОРКОВНЫЙ СОК ==========
    {"id":42023,"name":"Сок морковный","calories":40,"protein":1,"fat":0.2,"carbs":9.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Морковь"},
    {"id":42024,"name":"Сок морковно-яблочный","calories":43,"protein":0.6,"fat":0.2,"carbs":10.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Морковь-Яблоко"},
    {"id":42025,"name":"Сок морковно-апельсиновый","calories":44,"protein":0.8,"fat":0.2,"carbs":10.8,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Морковь-Апельсин"},

    // ========== СВЁКОЛЬНЫЙ СОК ==========
    {"id":42026,"name":"Сок свёкольный","calories":45,"protein":1.5,"fat":0.2,"carbs":10,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Свёкла"},

    // ========== МАНГО СОК ==========
    {"id":42027,"name":"Сок манго","calories":55,"protein":0.5,"fat":0.3,"carbs":13.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Манго"},
    {"id":42028,"name":"Сок манго-маракуйя","calories":55,"protein":0.5,"fat":0.3,"carbs":13.5,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Манго-Маракуйя"},

    // ========== МУЛЬТИФРУКТОВЫЕ И ФРУКТОВЫЕ СМЕСИ ==========
    {"id":42029,"name":"Сок мультифруктовый","calories":50,"protein":0.5,"fat":0.2,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Мультифрукт"},
    {"id":42030,"name":"Сок тропический микс","calories":52,"protein":0.4,"fat":0.2,"carbs":13,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Тропический микс"},
    {"id":42031,"name":"Сок 4 сезона","calories":48,"protein":0.4,"fat":0.2,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"4 сезона"},
    {"id":42032,"name":"Сок ягодный микс (клубника-малина)","calories":48,"protein":0.3,"fat":0.1,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Ягодный микс"},
    {"id":42033,"name":"Сок цитрусовый микс","calories":45,"protein":0.6,"fat":0.2,"carbs":11,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Цитрусовый"},

    // ========== БРЕНДЫ (J7, Добрый, Сады Придонья, Любимый) ==========
    {"id":42034,"name":"J7 Апельсин","calories":45,"protein":0.7,"fat":0,"carbs":10.8,"unit":"ml","default":200,"category":"Соки","brand":"J7","flavor":"Апельсин"},
    {"id":42035,"name":"J7 Яблоко","calories":46,"protein":0.2,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"J7","flavor":"Яблоко"},
    {"id":42036,"name":"J7 Грейпфрут","calories":38,"protein":0.5,"fat":0,"carbs":9.5,"unit":"ml","default":200,"category":"Соки","brand":"J7","flavor":"Грейпфрут"},
    {"id":42037,"name":"J7 Томатный","calories":17,"protein":0.8,"fat":0,"carbs":4,"unit":"ml","default":200,"category":"Соки","brand":"J7","flavor":"Томат"},
    {"id":42038,"name":"Добрый Апельсин","calories":45,"protein":0.7,"fat":0,"carbs":10.7,"unit":"ml","default":200,"category":"Соки","brand":"Добрый","flavor":"Апельсин"},
    {"id":42039,"name":"Добрый Яблоко","calories":46,"protein":0.2,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Добрый","flavor":"Яблоко"},
    {"id":42040,"name":"Добрый Мультифрукт","calories":48,"protein":0.3,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Добрый","flavor":"Мультифрукт"},
    {"id":42041,"name":"Добрый Томатный","calories":17,"protein":0.8,"fat":0,"carbs":4,"unit":"ml","default":200,"category":"Соки","brand":"Добрый","flavor":"Томат"},
    {"id":42042,"name":"Сады Придонья Яблоко","calories":46,"protein":0.2,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Сады Придонья","flavor":"Яблоко"},
    {"id":42043,"name":"Сады Придонья Апельсин","calories":45,"protein":0.7,"fat":0,"carbs":11,"unit":"ml","default":200,"category":"Соки","brand":"Сады Придонья","flavor":"Апельсин"},
    {"id":42044,"name":"Сады Придонья Томатный","calories":17,"protein":0.8,"fat":0,"carbs":4,"unit":"ml","default":200,"category":"Соки","brand":"Сады Придонья","flavor":"Томат"},
    {"id":42045,"name":"Сады Придонья Гранат","calories":54,"protein":0.3,"fat":0,"carbs":13.5,"unit":"ml","default":200,"category":"Соки","brand":"Сады Придонья","flavor":"Гранат"},
    {"id":42046,"name":"Любимый Апельсин","calories":45,"protein":0.7,"fat":0,"carbs":11.2,"unit":"ml","default":200,"category":"Соки","brand":"Любимый","flavor":"Апельсин"},
    {"id":42047,"name":"Любимый Яблоко","calories":46,"protein":0.2,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Любимый","flavor":"Яблоко"},
    {"id":42048,"name":"Любимый Персик-Яблоко","calories":45,"protein":0.3,"fat":0,"carbs":11.2,"unit":"ml","default":200,"category":"Соки","brand":"Любимый","flavor":"Персик-Яблоко"},
    {"id":42049,"name":"Любимый Вишня","calories":48,"protein":0.4,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Любимый","flavor":"Вишня"},
    {"id":42050,"name":"Rich Апельсин","calories":45,"protein":0.7,"fat":0,"carbs":11,"unit":"ml","default":200,"category":"Соки","brand":"Rich","flavor":"Апельсин"},
    {"id":42051,"name":"Rich Персик","calories":46,"protein":0.3,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Соки","brand":"Rich","flavor":"Персик"},
    {"id":42052,"name":"Rich Мультифрукт","calories":48,"protein":0.4,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Соки","brand":"Rich","flavor":"Мультифрукт"},

    // ========== НЕКТАРЫ ==========
    {"id":42053,"name":"Нектар персиковый","calories":45,"protein":0.4,"fat":0,"carbs":11.2,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Персик"},
    {"id":42054,"name":"Нектар абрикосовый","calories":45,"protein":0.4,"fat":0,"carbs":11.2,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Абрикос"},
    {"id":42055,"name":"Нектар грушевый","calories":46,"protein":0.2,"fat":0,"carbs":11.5,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Груша"},
    {"id":42056,"name":"Нектар маракуйя","calories":48,"protein":0.3,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Маракуйя"},
    {"id":42057,"name":"Нектар банановый","calories":55,"protein":0.5,"fat":0.3,"carbs":13.5,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Банан"},
    {"id":42058,"name":"Нектар клубничный","calories":48,"protein":0.3,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Клубника"},
    {"id":42059,"name":"Нектар вишнёво-яблочный","calories":48,"protein":0.3,"fat":0,"carbs":12,"unit":"ml","default":200,"category":"Нектары","brand":"Разные","flavor":"Вишня-Яблоко"},

    // ========== МОРСЫ (ТРАДИЦИОННЫЕ) ==========
    {"id":42060,"name":"Морс клюквенный","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Клюква"},
    {"id":42061,"name":"Морс брусничный","calories":38,"protein":0,"fat":0,"carbs":9.5,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Брусника"},
    {"id":42062,"name":"Морс клубничный","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Клубника"},
    {"id":42063,"name":"Морс облепиховый","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Облепиха"},
    {"id":42064,"name":"Морс черная смородина","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Чёрная смородина"},
    {"id":42065,"name":"Морс малиновый","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Малина"},
    {"id":42066,"name":"Морс вишнёвый","calories":42,"protein":0,"fat":0,"carbs":10.5,"unit":"ml","default":250,"category":"Морсы","brand":"Разные","flavor":"Вишня"},
    
    // ========== Холодные чаи и напитки на травах ==========
    {"id":42067,"name":"Липтон холодный чай лимон","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"ml","default":330,"category":"Холодный чай","brand":"Lipton","flavor":"Лимон"},
    {"id":42068,"name":"Липтон холодный чай персик","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"ml","default":330,"category":"Холодный чай","brand":"Lipton","flavor":"Персик"},
    {"id":42069,"name":"Липтон холодный чай малина","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"ml","default":330,"category":"Холодный чай","brand":"Lipton","flavor":"Малина"},
    {"id":42070,"name":"Липтон холодный чай манго","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"ml","default":330,"category":"Холодный чай","brand":"Lipton","flavor":"Манго"},
    {"id":42071,"name":"Липтон холодный чай зеленый","calories":20,"protein":0,"fat":0,"carbs":4.9,"unit":"ml","default":330,"category":"Холодный чай","brand":"Lipton","flavor":"Зелёный"},
    {"id":42072,"name":"Nestea лимон","calories":20,"protein":0,"fat":0,"carbs":5,"unit":"ml","default":330,"category":"Холодный чай","brand":"Nestea","flavor":"Лимон"},
    {"id":42073,"name":"Nestea персик","calories":20,"protein":0,"fat":0,"carbs":5,"unit":"ml","default":330,"category":"Холодный чай","brand":"Nestea","flavor":"Персик"},
    {"id":42074,"name":"Квас хлебный","calories":30,"protein":0.2,"fat":0,"carbs":5.5,"unit":"ml","default":500,"category":"Квас","brand":"Разные","flavor":"Хлебный"},

    // ========== БЕРЕЗОВЫЙ СОК ==========
    {"id":42075,"name":"Сок берёзовый","calories":12,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":200,"category":"Соки","brand":"Разные","flavor":"Берёза"}
];
const SPAR_PRODUCTS = [
    // 🥛 МОЛОЧНЫЕ ПРОДУКТЫ
    {"id":1,"name":"SPAR Молоко пастеризованное 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"category":"SPAR Молочные продукты"},
    {"id":2,"name":"SPAR Молоко пастеризованное 1.5% 1л","calories":44,"protein":3,"fat":1.5,"carbs":4.8,"unit":"ml","default":100,"category":"SPAR Молочные продукты"},
    {"id":3,"name":"SPAR Кефир 2.5% 900мл","calories":50,"protein":3,"fat":2.5,"carbs":4,"unit":"ml","default":100,"category":"SPAR Молочные продукты"},
    {"id":4,"name":"SPAR Ряженка 2.5% 900мл","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"unit":"ml","default":100,"category":"SPAR Молочные продукты"},
    {"id":5,"name":"SPAR Сметана 15% 400г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":6,"name":"SPAR Сметана 20% 400г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":7,"name":"SPAR Творог 5% 500г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":8,"name":"SPAR Творог 9% 500г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":9,"name":"SPAR Творог обезжиренный 500г","calories":70,"protein":16,"fat":0.5,"carbs":3,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":10,"name":"SPAR Йогурт питьевой 2.5% клубника 1кг","calories":80,"protein":2.8,"fat":2.5,"carbs":11,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":11,"name":"SPAR Йогурт питьевой 2.5% персик 1кг","calories":80,"protein":2.8,"fat":2.5,"carbs":11,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":12,"name":"SPAR Йогурт питьевой 2.5% черника 1кг","calories":80,"protein":2.8,"fat":2.5,"carbs":11,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":13,"name":"SPAR Масло сливочное 72.5% 180г","calories":661,"protein":0.5,"fat":72.5,"carbs":0.5,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":14,"name":"SPAR Масло сливочное 82.5% 180г","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"category":"SPAR Молочные продукты"},
    {"id":15,"name":"SPAR Сыр Российский 45%","calories":350,"protein":24,"fat":28,"carbs":0,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":16,"name":"SPAR Сыр Гауда","calories":356,"protein":24,"fat":28,"carbs":0,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":17,"name":"SPAR Сыр Моцарелла","calories":280,"protein":18,"fat":22,"carbs":1,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":18,"name":"SPAR Сыр Пармезан","calories":431,"protein":35,"fat":28,"carbs":4,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":19,"name":"SPAR Сыр Фета","calories":264,"protein":14,"fat":21,"carbs":4,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":20,"name":"SPAR Сыр Маасдам","calories":340,"protein":26,"fat":26,"carbs":0,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":21,"name":"SPAR Сыр Чеддер","calories":400,"protein":25,"fat":33,"carbs":0,"unit":"g","default":100,"category":"SPAR Сыры"},
    {"id":22,"name":"SPAR Сыр Рикотта","calories":174,"protein":11,"fat":13,"carbs":3,"unit":"g","default":100,"category":"SPAR Сыры"},

    // 🍖 МЯСО И ПТИЦА
    {"id":23,"name":"SPAR Филе куриной грудки охлажденное","calories":110,"protein":23,"fat":1.2,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":24,"name":"SPAR Филе куриного бедра без кости","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":25,"name":"SPAR Филе индейки грудка","calories":84,"protein":19,"fat":0.7,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":26,"name":"SPAR Говядина вырезка","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":27,"name":"SPAR Говядина для тушения","calories":170,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":28,"name":"SPAR Свинина вырезка","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":29,"name":"SPAR Фарш куриный","calories":143,"protein":16,"fat":8.5,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":30,"name":"SPAR Фарш говяжий","calories":190,"protein":17,"fat":14,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":31,"name":"SPAR Фарш домашний (свинина+говядина)","calories":230,"protein":15,"fat":19,"carbs":0,"unit":"g","default":100,"category":"SPAR Мясо"},
    {"id":32,"name":"SPAR Колбаса Докторская","calories":257,"protein":12,"fat":22,"carbs":1.5,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":33,"name":"SPAR Колбаса Московская","calories":330,"protein":13,"fat":30,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":34,"name":"SPAR Колбаса Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":35,"name":"SPAR Ветчина куриная","calories":120,"protein":15,"fat":6,"carbs":1,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":36,"name":"SPAR Бекон","calories":500,"protein":12,"fat":48,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":37,"name":"SPAR Сосиски молочные","calories":260,"protein":11,"fat":23,"carbs":1,"unit":"g","default":100,"category":"SPAR Мясо"},

    // 🐟 РЫБА И МОРЕПРОДУКТЫ
    {"id":38,"name":"SPAR Горбуша потрошеная","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":39,"name":"SPAR Семга слабосоленая","calories":200,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":40,"name":"SPAR Сельдь слабосоленая","calories":190,"protein":17,"fat":13,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":41,"name":"SPAR Филе минтая","calories":70,"protein":15,"fat":0.8,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":42,"name":"SPAR Креветки варено-мороженые","calories":95,"protein":18,"fat":2,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":43,"name":"SPAR Мидии замороженные","calories":86,"protein":12,"fat":3,"carbs":3,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":44,"name":"SPAR Кальмар тушка","calories":92,"protein":15,"fat":3,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":45,"name":"SPAR Печень трески","calories":613,"protein":4,"fat":65,"carbs":1,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":46,"name":"SPAR Шпроты","calories":360,"protein":14,"fat":32,"carbs":0,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":47,"name":"SPAR Скумбрия копченая","calories":221,"protein":19,"fat":16,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},

    // 🌾 БАКАЛЕЯ (КРУПЫ, МАКАРОНЫ)
    {"id":48,"name":"SPAR Гречка ядрица","calories":343,"protein":12.6,"fat":3.3,"carbs":62,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":49,"name":"SPAR Рис шлифованный","calories":340,"protein":7,"fat":0.7,"carbs":77,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":50,"name":"SPAR Овсяные хлопья","calories":350,"protein":12,"fat":6,"carbs":60,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":51,"name":"SPAR Пшено","calories":348,"protein":11.5,"fat":3.3,"carbs":69,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":52,"name":"SPAR Перловка","calories":324,"protein":9.3,"fat":1.1,"carbs":67,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":53,"name":"SPAR Чечевица красная","calories":340,"protein":24,"fat":1.5,"carbs":53,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":54,"name":"SPAR Нут","calories":364,"protein":19,"fat":6,"carbs":61,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":55,"name":"SPAR Булгур","calories":342,"protein":12.6,"fat":1.6,"carbs":70,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":56,"name":"SPAR Кускус","calories":376,"protein":12.8,"fat":0.6,"carbs":78,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":57,"name":"SPAR Макароны из твердых сортов","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":58,"name":"SPAR Спагетти","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":59,"name":"SPAR Лапша яичная","calories":380,"protein":11,"fat":4,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},

    // 🥫 КОНСЕРВЫ
    {"id":60,"name":"SPAR Горошек зеленый","calories":55,"protein":3,"fat":0.2,"carbs":8.5,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":61,"name":"SPAR Кукуруза сахарная","calories":93,"protein":3,"fat":1.5,"carbs":17,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":62,"name":"SPAR Фасоль белая","calories":92,"protein":6.5,"fat":0.5,"carbs":15,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":63,"name":"SPAR Оливки зеленые","calories":145,"protein":1,"fat":15,"carbs":2,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":64,"name":"SPAR Маслины черные","calories":145,"protein":1,"fat":15,"carbs":2,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":65,"name":"SPAR Тунец в собственном соку","calories":110,"protein":24,"fat":1,"carbs":0,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":66,"name":"SPAR Сайра в масле","calories":250,"protein":18,"fat":20,"carbs":0,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":67,"name":"SPAR Горбуша натуральная","calories":140,"protein":22,"fat":5,"carbs":0,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":68,"name":"SPAR Лечо","calories":35,"protein":0.8,"fat":0.2,"carbs":7,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":69,"name":"SPAR Икра кабачковая","calories":85,"protein":1.5,"fat":6,"carbs":8,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":70,"name":"SPAR Томатная паста","calories":80,"protein":4,"fat":0.5,"carbs":16,"unit":"g","default":100,"category":"SPAR Консервы"},

    // 🍞 ХЛЕБ И ВЫПЕЧКА
    {"id":71,"name":"SPAR Хлеб Бородинский","calories":210,"protein":6,"fat":1,"carbs":44,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":72,"name":"SPAR Хлеб зерновой с отрубями","calories":230,"protein":8,"fat":3,"carbs":43,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":73,"name":"SPAR Батон нарезной","calories":262,"protein":7.5,"fat":2.5,"carbs":51,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":74,"name":"SPAR Тостовый хлеб","calories":250,"protein":7,"fat":3,"carbs":48,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":75,"name":"SPAR Багет французский","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":76,"name":"SPAR Лаваш тонкий","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":77,"name":"SPAR Булочка с маком","calories":300,"protein":7,"fat":8,"carbs":50,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":78,"name":"SPAR Пирог с капустой","calories":250,"protein":6,"fat":12,"carbs":30,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":79,"name":"SPAR Пирог с яблоком","calories":280,"protein":4,"fat":12,"carbs":40,"unit":"g","default":100,"category":"SPAR Выпечка"},

    // 🍎 ФРУКТЫ И ОВОЩИ
    {"id":80,"name":"Яблоко","calories":52,"protein":0.3,"fat":0.2,"carbs":14,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":81,"name":"Банан","calories":89,"protein":1.1,"fat":0.3,"carbs":23,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":82,"name":"Апельсин","calories":47,"protein":0.9,"fat":0.1,"carbs":12,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":83,"name":"Грейпфрут","calories":42,"protein":0.8,"fat":0.1,"carbs":10,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":84,"name":"Киви","calories":61,"protein":1.1,"fat":0.5,"carbs":15,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":85,"name":"Груша","calories":57,"protein":0.4,"fat":0.3,"carbs":15,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":86,"name":"Мандарин","calories":53,"protein":0.8,"fat":0.3,"carbs":13,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":87,"name":"Виноград","calories":69,"protein":0.6,"fat":0.2,"carbs":18,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":88,"name":"Картофель","calories":77,"protein":2,"fat":0.1,"carbs":17,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":89,"name":"Морковь","calories":41,"protein":0.9,"fat":0.2,"carbs":9.6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":90,"name":"Огурец","calories":15,"protein":0.7,"fat":0.1,"carbs":2.5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":91,"name":"Помидор","calories":18,"protein":0.9,"fat":0.2,"carbs":3.1,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":92,"name":"Капуста белокочанная","calories":25,"protein":1.3,"fat":0.1,"carbs":4.8,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":93,"name":"Брокколи","calories":34,"protein":2.8,"fat":0.4,"carbs":6.6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":94,"name":"Цветная капуста","calories":25,"protein":1.9,"fat":0.3,"carbs":4.5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":95,"name":"Лук репчатый","calories":40,"protein":1.1,"fat":0.1,"carbs":9,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":96,"name":"Чеснок","calories":149,"protein":6.4,"fat":0.5,"carbs":33,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":97,"name":"Свекла","calories":43,"protein":1.6,"fat":0.1,"carbs":9.6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":98,"name":"Перец болгарский","calories":31,"protein":1,"fat":0.3,"carbs":6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":99,"name":"Кабачок","calories":17,"protein":1.2,"fat":0.3,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":100,"name":"Баклажан","calories":25,"protein":1,"fat":0.1,"carbs":5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":101,"name":"Салат айсберг","calories":14,"protein":1,"fat":0.1,"carbs":2.5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":102,"name":"Руккола","calories":25,"protein":2.6,"fat":0.7,"carbs":3.7,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":103,"name":"Шпинат","calories":23,"protein":2.9,"fat":0.4,"carbs":3.6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":104,"name":"Авокадо","calories":160,"protein":2,"fat":15,"carbs":6,"unit":"g","default":100,"category":"SPAR Фрукты"},

    // 🥜 ОРЕХИ И СУХОФРУКТЫ
    {"id":105,"name":"SPAR Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":9,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":106,"name":"SPAR Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":7,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":107,"name":"SPAR Фундук","calories":628,"protein":15,"fat":61,"carbs":10,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":108,"name":"SPAR Кешью","calories":553,"protein":18,"fat":44,"carbs":27,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":109,"name":"SPAR Кедровые орехи","calories":673,"protein":14,"fat":68,"carbs":5,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":110,"name":"SPAR Арахис сырой","calories":567,"protein":26,"fat":49,"carbs":8,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":111,"name":"SPAR Изюм","calories":299,"protein":3,"fat":0.5,"carbs":79,"unit":"g","default":100,"category":"SPAR Сухофрукты"},
    {"id":112,"name":"SPAR Курага","calories":241,"protein":3.4,"fat":0.5,"carbs":63,"unit":"g","default":100,"category":"SPAR Сухофрукты"},
    {"id":113,"name":"SPAR Финики","calories":282,"protein":2,"fat":0.4,"carbs":75,"unit":"g","default":100,"category":"SPAR Сухофрукты"},
    {"id":114,"name":"SPAR Чернослив","calories":240,"protein":2.2,"fat":0.4,"carbs":63,"unit":"g","default":100,"category":"SPAR Сухофрукты"},
    {"id":115,"name":"SPAR Семена льна","calories":534,"protein":18,"fat":42,"carbs":1,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":116,"name":"SPAR Семена подсолнечника","calories":584,"protein":21,"fat":51,"carbs":10,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":117,"name":"SPAR Семена чиа","calories":486,"protein":16.5,"fat":31,"carbs":42,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":118,"name":"SPAR Тыквенные семечки","calories":559,"protein":30,"fat":49,"carbs":11,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":119,"name":"SPAR Кунжут","calories":573,"protein":18,"fat":50,"carbs":23,"unit":"g","default":100,"category":"SPAR Орехи"},

    // 🧈 МАСЛА И СОУСЫ
    {"id":120,"name":"SPAR Масло подсолнечное","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"category":"SPAR Масла"},
    {"id":121,"name":"SPAR Масло оливковое","calories":884,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"category":"SPAR Масла"},
    {"id":122,"name":"SPAR Масло льняное","calories":884,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"category":"SPAR Масла"},
    {"id":123,"name":"SPAR Кетчуп","calories":100,"protein":1,"fat":0.2,"carbs":23,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":124,"name":"SPAR Майонез","calories":627,"protein":1,"fat":67,"carbs":2.5,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":125,"name":"SPAR Соус песто","calories":450,"protein":5,"fat":45,"carbs":5,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":126,"name":"SPAR Соевый соус","calories":60,"protein":8,"fat":0,"carbs":6,"unit":"ml","default":100,"category":"SPAR Соусы"},
    {"id":127,"name":"SPAR Мед натуральный","calories":320,"protein":0.3,"fat":0,"carbs":80,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":128,"name":"SPAR Варенье клубничное","calories":250,"protein":0.3,"fat":0.1,"carbs":62,"unit":"g","default":100,"category":"SPAR Соусы"},

    // 🍪 СЛАДОСТИ И ДЕСЕРТЫ
    {"id":129,"name":"SPAR Печенье овсяное","calories":420,"protein":7,"fat":15,"carbs":65,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":130,"name":"SPAR Печенье сахарное","calories":450,"protein":5,"fat":18,"carbs":68,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":131,"name":"SPAR Шоколад молочный","calories":546,"protein":6,"fat":35,"carbs":52,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":132,"name":"SPAR Шоколад горький 72%","calories":550,"protein":8,"fat":38,"carbs":45,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":133,"name":"SPAR Мармелад жевательный","calories":330,"protein":4,"fat":0,"carbs":78,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":134,"name":"SPAR Зефир","calories":320,"protein":0.8,"fat":0,"carbs":79,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":135,"name":"SPAR Пастила","calories":310,"protein":0.5,"fat":0,"carbs":80,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":136,"name":"SPAR Халва","calories":550,"protein":12,"fat":33,"carbs":50,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":137,"name":"SPAR Вафли","calories":500,"protein":5,"fat":25,"carbs":65,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":138,"name":"SPAR Пряники","calories":380,"protein":5,"fat":6,"carbs":80,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":139,"name":"SPAR Козинаки","calories":520,"protein":10,"fat":30,"carbs":50,"unit":"g","default":100,"category":"SPAR Сладости"},

    // 🍹 НАПИТКИ
    {"id":140,"name":"SPAR Вода питьевая 5л","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":141,"name":"SPAR Сок апельсиновый","calories":45,"protein":0.7,"fat":0,"carbs":11,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":142,"name":"SPAR Сок яблочный","calories":46,"protein":0.5,"fat":0,"carbs":11,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":143,"name":"SPAR Чай черный","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":144,"name":"SPAR Чай зеленый","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":145,"name":"SPAR Кофе растворимый","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR Напитки"},
    {"id":146,"name":"SPAR Какао","calories":50,"protein":4,"fat":3,"carbs":4,"unit":"g","default":100,"category":"SPAR Напитки"},
    {"id":147,"name":"SPAR Лимонад","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},

    // 🧊 ЗАМОРОЖЕННЫЕ ПРОДУКТЫ
    {"id":148,"name":"SPAR Смесь овощная","calories":40,"protein":2,"fat":0.5,"carbs":7,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":149,"name":"SPAR Брокколи замороженная","calories":34,"protein":3,"fat":0.4,"carbs":6,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":150,"name":"SPAR Ягоды замороженные","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":151,"name":"SPAR Пельмени","calories":250,"protein":11,"fat":12,"carbs":25,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":152,"name":"SPAR Вареники с творогом","calories":200,"protein":9,"fat":5,"carbs":30,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":153,"name":"SPAR Котлеты куриные","calories":180,"protein":15,"fat":12,"carbs":5,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":154,"name":"SPAR Блины с мясом","calories":220,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":155,"name":"SPAR Сырники","calories":230,"protein":12,"fat":10,"carbs":25,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":156,"name":"SPAR Мороженое пломбир","calories":230,"protein":4,"fat":15,"carbs":20,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":157,"name":"SPAR Сорбет","calories":130,"protein":0.5,"fat":0,"carbs":32,"unit":"g","default":100,"category":"SPAR Заморозка"},

    // 🥗 ГОТОВАЯ ЕДА (КУЛИНАРИЯ SPAR)
    {"id":158,"name":"SPAR Салат Греческий","calories":120,"protein":4,"fat":10,"carbs":5,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":159,"name":"SPAR Салат Цезарь","calories":180,"protein":10,"fat":14,"carbs":8,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":160,"name":"SPAR Салат Оливье","calories":200,"protein":5,"fat":15,"carbs":12,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":161,"name":"SPAR Салат Витаминный","calories":50,"protein":1,"fat":3,"carbs":5,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":162,"name":"SPAR Лапша с курицей WOK","calories":150,"protein":12,"fat":5,"carbs":15,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":163,"name":"SPAR Роллы Филадельфия","calories":180,"protein":7,"fat":8,"carbs":20,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":164,"name":"SPAR Пицца Маргарита","calories":230,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":165,"name":"SPAR Гречка с курицей","calories":160,"protein":15,"fat":6,"carbs":14,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":166,"name":"SPAR Рис с овощами","calories":120,"protein":3,"fat":2,"carbs":24,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":167,"name":"SPAR Картофельное пюре с котлетой","calories":180,"protein":10,"fat":10,"carbs":15,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":168,"name":"SPAR Горбуша запеченная с лисичками","calories":150,"protein":20,"fat":7,"carbs":3,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":169,"name":"SPAR Хот-дог классический","calories":280,"protein":12,"fat":15,"carbs":25,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":170,"name":"SPAR Боул с индейкой","calories":140,"protein":18,"fat":5,"carbs":8,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":171,"name":"SPAR Куриные наггетсы","calories":250,"protein":15,"fat":15,"carbs":18,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":172,"name":"SPAR Картофель фри","calories":312,"protein":3.4,"fat":15,"carbs":41,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":173,"name":"SPAR Крылышки BBQ","calories":320,"protein":18,"fat":24,"carbs":8,"unit":"g","default":100,"category":"SPAR Готовая еда"},

    // 🌱 ЗОЖ И ПРОТЕИНОВЫЕ ПРОДУКТЫ
    {"id":174,"name":"SPAR Протеиновый батончик","calories":350,"protein":20,"fat":12,"carbs":35,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":175,"name":"SPAR Творожный сыр 0%","calories":70,"protein":16,"fat":0,"carbs":3,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":176,"name":"SPAR Тофу","calories":76,"protein":8,"fat":4.8,"carbs":1.5,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":177,"name":"SPAR Сейтан","calories":147,"protein":25,"fat":3,"carbs":5,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":178,"name":"SPAR Рисовые хлебцы","calories":350,"protein":8,"fat":3,"carbs":75,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":179,"name":"SPAR Гречневые хлебцы","calories":340,"protein":12,"fat":3,"carbs":70,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":180,"name":"SPAR ПП-печенье","calories":280,"protein":15,"fat":8,"carbs":35,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":181,"name":"SPAR Чиа пудинг","calories":120,"protein":4,"fat":6,"carbs":12,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":182,"name":"SPAR Смузи зеленый","calories":45,"protein":2,"fat":1,"carbs":8,"unit":"ml","default":100,"category":"SPAR ЗОЖ"},
    {"id":183,"name":"SPAR Кокосовое молоко","calories":230,"protein":2,"fat":24,"carbs":3,"unit":"ml","default":100,"category":"SPAR ЗОЖ"},
    {"id":184,"name":"SPAR Овсяное молоко","calories":45,"protein":1,"fat":1.5,"carbs":7,"unit":"ml","default":100,"category":"SPAR ЗОЖ"},
    {"id":185,"name":"SPAR Миндальное молоко","calories":30,"protein":1,"fat":2.5,"carbs":1,"unit":"ml","default":100,"category":"SPAR ЗОЖ"},
    {"id":186,"name":"SPAR Нутовая паста","calories":150,"protein":8,"fat":5,"carbs":20,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":187,"name":"SPAR Кешью-масло","calories":600,"protein":18,"fat":50,"carbs":20,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":188,"name":"SPAR Урбеч","calories":620,"protein":15,"fat":52,"carbs":18,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":189,"name":"SPAR Спирулина","calories":290,"protein":57,"fat":8,"carbs":24,"unit":"g","default":100,"category":"SPAR ЗОЖ"},

    // 🍷 АЛКОГОЛЬ
    {"id":190,"name":"SPAR Пиво светлое","calories":45,"protein":0.5,"fat":0,"carbs":4,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":191,"name":"SPAR Пиво темное","calories":50,"protein":0.5,"fat":0,"carbs":5,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":192,"name":"SPAR Вино красное сухое","calories":70,"protein":0.1,"fat":0,"carbs":2,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":193,"name":"SPAR Вино белое сухое","calories":66,"protein":0.1,"fat":0,"carbs":2,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":194,"name":"SPAR Виски","calories":250,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":195,"name":"SPAR Водка","calories":235,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":196,"name":"SPAR Коньяк","calories":240,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":197,"name":"SPAR Вермут","calories":150,"protein":0,"fat":0,"carbs":15,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":198,"name":"SPAR Сидр","calories":50,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Алкоголь"},
    {"id":199,"name":"SPAR Джин","calories":230,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"category":"SPAR Алкоголь"},

    // 🥚 ПРОЧИЕ ТОВАРЫ
    {"id":200,"name":"SPAR Соль поваренная","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":201,"name":"SPAR Перец черный","calories":251,"protein":10,"fat":3,"carbs":64,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":202,"name":"SPAR Сахар белый","calories":387,"protein":0,"fat":0,"carbs":100,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":203,"name":"SPAR Разрыхлитель","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":204,"name":"SPAR Ванильный сахар","calories":387,"protein":0,"fat":0,"carbs":100,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":205,"name":"SPAR Дрожжи","calories":105,"protein":12,"fat":2,"carbs":12,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":206,"name":"SPAR Уксус 9%","calories":10,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":100,"category":"SPAR Бакалея"},
    {"id":207,"name":"SPAR Горчица","calories":66,"protein":4,"fat":3,"carbs":6,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":208,"name":"SPAR Хрен","calories":50,"protein":1,"fat":0.5,"carbs":10,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":209,"name":"SPAR Томатная паста","calories":80,"protein":4,"fat":0.5,"carbs":16,"unit":"g","default":100,"category":"SPAR Соусы"},
    // ПРОДОЛЖЕНИЕ SPAR_PRODUCTS (еще 200+ товаров)

    // 🥚 ЯЙЦА И ЯИЧНЫЕ ПРОДУКТЫ
    {"id":210,"name":"SPAR Яйцо куриное С1","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"category":"SPAR Яйца"},
    {"id":211,"name":"SPAR Яйцо куриное С0","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"category":"SPAR Яйца"},
    {"id":212,"name":"SPAR Яйцо перепелиное","calories":158,"protein":13,"fat":11,"carbs":0.6,"unit":"g","default":100,"category":"SPAR Яйца"},
    {"id":213,"name":"SPAR Меланж яичный замороженный","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"category":"SPAR Яйца"},
    {"id":214,"name":"SPAR Белок яичный жидкий","calories":48,"protein":10.9,"fat":0,"carbs":0.8,"unit":"g","default":100,"category":"SPAR Яйца"},

    // 🥓 КОЛБАСЫ И ДЕЛИКАТЕСЫ
    {"id":215,"name":"SPAR Сервелат Золотой","calories":380,"protein":14,"fat":36,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":216,"name":"SPAR Колбаса Кровянка","calories":350,"protein":12,"fat":30,"carbs":8,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":217,"name":"SPAR Шинка свиная","calories":250,"protein":16,"fat":20,"carbs":1,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":218,"name":"SPAR Карбонад свиной","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":219,"name":"SPAR Буженина","calories":220,"protein":19,"fat":16,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":220,"name":"SPAR Сало соленое","calories":790,"protein":2,"fat":85,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":221,"name":"SPAR Сосиски сырокопченые","calories":400,"protein":15,"fat":38,"carbs":1,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":222,"name":"SPAR Сардельки свиные","calories":280,"protein":12,"fat":25,"carbs":1,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":223,"name":"SPAR Хамон","calories":250,"protein":30,"fat":12,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},
    {"id":224,"name":"SPAR Панчетта","calories":500,"protein":10,"fat":50,"carbs":0,"unit":"g","default":100,"category":"SPAR Колбасы"},

    // 🐟 РЫБНЫЕ ДЕЛИКАТЕСЫ
    {"id":225,"name":"SPAR Форель слабосоленая","calories":190,"protein":20,"fat":12,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":226,"name":"SPAR Палтус слабосоленый","calories":200,"protein":16,"fat":15,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":227,"name":"SPAR Масляная рыба копченая","calories":220,"protein":18,"fat":16,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":228,"name":"SPAR Угорь копченый","calories":300,"protein":18,"fat":25,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":229,"name":"SPAR Килька пряного посола","calories":160,"protein":14,"fat":11,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":230,"name":"SPAR Треска печень","calories":613,"protein":4,"fat":65,"carbs":1,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":231,"name":"SPAR Икра лососевая","calories":250,"protein":32,"fat":13,"carbs":1,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":232,"name":"SPAR Икра минтая","calories":110,"protein":24,"fat":1,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":233,"name":"SPAR Креветки королевские","calories":100,"protein":20,"fat":2,"carbs":0,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":234,"name":"SPAR Мидии в рассоле","calories":86,"protein":12,"fat":3,"carbs":3,"unit":"g","default":100,"category":"SPAR Рыба"},
    {"id":235,"name":"SPAR Осьминог маринованный","calories":110,"protein":18,"fat":3,"carbs":4,"unit":"g","default":100,"category":"SPAR Рыба"},

    // 🥛 РАСТИТЕЛЬНЫЕ МОЛОКО И ЙОГУРТЫ
    {"id":236,"name":"SPAR Йогурт кокосовый","calories":150,"protein":1,"fat":10,"carbs":12,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":237,"name":"SPAR Йогурт соевый","calories":80,"protein":3,"fat":3,"carbs":9,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":238,"name":"SPAR Сметана соевая","calories":100,"protein":2,"fat":8,"carbs":5,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":239,"name":"SPAR Сыр тофу копченый","calories":150,"protein":12,"fat":10,"carbs":2,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":240,"name":"SPAR Сыр пармезан веганский","calories":350,"protein":1,"fat":30,"carbs":15,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":241,"name":"SPAR Сливочный сыр веганский","calories":250,"protein":2,"fat":22,"carbs":8,"unit":"g","default":100,"category":"SPAR Растительные продукты"},
    {"id":242,"name":"SPAR Рисовое молоко","calories":45,"protein":0.5,"fat":1,"carbs":9,"unit":"ml","default":100,"category":"SPAR Растительные продукты"},
    {"id":243,"name":"SPAR Соевое молоко","calories":45,"protein":3,"fat":2,"carbs":3,"unit":"ml","default":100,"category":"SPAR Растительные продукты"},

    // 🥨 СНЕКИ (ЧИПСЫ, СУХАРИКИ)
    {"id":244,"name":"SPAR Чипсы соль","calories":520,"protein":6,"fat":32,"carbs":52,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":245,"name":"SPAR Чипсы паприка","calories":520,"protein":6,"fat":32,"carbs":52,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":246,"name":"SPAR Чипсы сыр","calories":520,"protein":6,"fat":32,"carbs":52,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":247,"name":"SPAR Сухарики чесночные","calories":420,"protein":10,"fat":15,"carbs":62,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":248,"name":"SPAR Сухарики бекон","calories":420,"protein":10,"fat":15,"carbs":62,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":249,"name":"SPAR Крендельки соленые","calories":380,"protein":10,"fat":8,"carbs":70,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":250,"name":"SPAR Крекеры с солью","calories":450,"protein":8,"fat":18,"carbs":65,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":251,"name":"SPAR Соломка сладкая","calories":450,"protein":7,"fat":15,"carbs":72,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":252,"name":"SPAR Попкорн сладкий","calories":450,"protein":8,"fat":20,"carbs":60,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":253,"name":"SPAR Попкорн соленый","calories":420,"protein":10,"fat":18,"carbs":55,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":254,"name":"SPAR Гренки ржаные","calories":350,"protein":11,"fat":5,"carbs":68,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":255,"name":"SPAR Тако","calories":450,"protein":8,"fat":20,"carbs":58,"unit":"g","default":100,"category":"SPAR Снеки"},
    {"id":256,"name":"SPAR Начос","calories":500,"protein":7,"fat":25,"carbs":60,"unit":"g","default":100,"category":"SPAR Снеки"},

    // 🧃 СОКИ И НАПИТКИ
    {"id":257,"name":"SPAR Сок мультифрукт","calories":48,"protein":0.5,"fat":0,"carbs":12,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":258,"name":"SPAR Сок томатный","calories":18,"protein":1,"fat":0,"carbs":4,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":259,"name":"SPAR Сок березовый","calories":12,"protein":0,"fat":0,"carbs":3,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":260,"name":"SPAR Морс клюквенный","calories":30,"protein":0,"fat":0,"carbs":8,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":261,"name":"SPAR Компот из сухофруктов","calories":40,"protein":0.3,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":262,"name":"SPAR Квас хлебный","calories":27,"protein":0.2,"fat":0,"carbs":7,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":263,"name":"SPAR Энергетик","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":264,"name":"SPAR Тархун","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":265,"name":"SPAR Лимонад тархун","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":266,"name":"SPAR Лимонад дюшес","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},
    {"id":267,"name":"SPAR Лимонад буратино","calories":40,"protein":0,"fat":0,"carbs":10,"unit":"ml","default":100,"category":"SPAR Напитки"},

    // 🍲 ПЕРВЫЕ БЛЮДА (БЫСТРОГО ПРИГОТОВЛЕНИЯ)
    {"id":268,"name":"SPAR Лапша быстрого приготовления курица","calories":350,"protein":8,"fat":15,"carbs":45,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":269,"name":"SPAR Лапша быстрого приготовления говядина","calories":350,"protein":8,"fat":15,"carbs":45,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":270,"name":"SPAR Суп гороховый в пакете","calories":320,"protein":15,"fat":4,"carbs":55,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":271,"name":"SPAR Суп грибной в пакете","calories":300,"protein":10,"fat":5,"carbs":55,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":272,"name":"SPAR Суп куриный в пакете","calories":280,"protein":12,"fat":6,"carbs":48,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":273,"name":"SPAR Картофельное пюре быстрого приготовления","calories":350,"protein":8,"fat":2,"carbs":78,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":274,"name":"SPAR Каша гречневая быстрого приготовления","calories":340,"protein":12,"fat":3,"carbs":68,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":275,"name":"SPAR Каша овсяная быстрого приготовления","calories":350,"protein":12,"fat":6,"carbs":65,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":276,"name":"SPAR Каша рисовая быстрого приготовления","calories":360,"protein":7,"fat":2,"carbs":78,"unit":"g","default":100,"category":"SPAR Бакалея"},

    // 🥫 ЗАГОТОВКИ (СОЛЕНЬЯ)
    {"id":277,"name":"SPAR Огурцы соленые","calories":11,"protein":0.8,"fat":0,"carbs":2.5,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":278,"name":"SPAR Помидоры соленые","calories":13,"protein":1,"fat":0,"carbs":3,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":279,"name":"SPAR Капуста квашеная","calories":19,"protein":1.8,"fat":0,"carbs":3.6,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":280,"name":"SPAR Грузди соленые","calories":18,"protein":1.5,"fat":0,"carbs":3,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":281,"name":"SPAR Опята маринованные","calories":18,"protein":2,"fat":0,"carbs":3,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":282,"name":"SPAR Аджика домашняя","calories":80,"protein":2,"fat":5,"carbs":8,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":283,"name":"SPAR Хренодёр","calories":50,"protein":1,"fat":0.5,"carbs":10,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":284,"name":"SPAR Чеснок маринованный","calories":60,"protein":2,"fat":0,"carbs":14,"unit":"g","default":100,"category":"SPAR Консервы"},

    // 🍚 КРУПЫ ЭКЗОТИЧЕСКИЕ
    {"id":285,"name":"SPAR Киноа","calories":368,"protein":14,"fat":6,"carbs":64,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":286,"name":"SPAR Амарант","calories":371,"protein":14,"fat":7,"carbs":65,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":287,"name":"SPAR Полба","calories":337,"protein":15,"fat":2.5,"carbs":70,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":288,"name":"SPAR Сорго","calories":339,"protein":11,"fat":3,"carbs":68,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":289,"name":"SPAR Спельта","calories":340,"protein":14,"fat":2,"carbs":70,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":290,"name":"SPAR Чумиза","calories":350,"protein":11,"fat":4,"carbs":68,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":291,"name":"SPAR Кукурузная крупа","calories":330,"protein":8,"fat":1,"carbs":75,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":292,"name":"SPAR Ячневая крупа","calories":310,"protein":10,"fat":1.3,"carbs":65,"unit":"g","default":100,"category":"SPAR Крупы"},
    {"id":293,"name":"SPAR Пшеничная крупа","calories":320,"protein":11,"fat":1.2,"carbs":68,"unit":"g","default":100,"category":"SPAR Крупы"},

    // 🥜 ОРЕХОВЫЕ ПАСТЫ
    {"id":294,"name":"SPAR Паста арахисовая","calories":580,"protein":25,"fat":45,"carbs":20,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":295,"name":"SPAR Паста миндальная","calories":600,"protein":21,"fat":50,"carbs":18,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":296,"name":"SPAR Паста кешью","calories":580,"protein":18,"fat":48,"carbs":25,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":297,"name":"SPAR Паста фисташковая","calories":550,"protein":20,"fat":45,"carbs":25,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":298,"name":"SPAR Паста кокосовая","calories":600,"protein":5,"fat":55,"carbs":25,"unit":"g","default":100,"category":"SPAR Орехи"},
    {"id":299,"name":"SPAR Паста из семян подсолнечника","calories":550,"protein":20,"fat":48,"carbs":18,"unit":"g","default":100,"category":"SPAR Орехи"},

    // 🍞 ХЛЕБОБУЛОЧНЫЕ ИЗДЕЛИЯ
    {"id":300,"name":"SPAR Лепешка тортилья","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":301,"name":"SPAR Пита","calories":260,"protein":9,"fat":1,"carbs":55,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":302,"name":"SPAR Чиабатта","calories":250,"protein":8,"fat":2,"carbs":50,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":303,"name":"SPAR Фокачча","calories":280,"protein":8,"fat":6,"carbs":48,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":304,"name":"SPAR Бриошь","calories":380,"protein":9,"fat":18,"carbs":48,"unit":"g","default":100,"category":"SPAR Хлеб"},
    {"id":305,"name":"SPAR Круассан","calories":400,"protein":8,"fat":20,"carbs":48,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":306,"name":"SPAR Рогалик","calories":380,"protein":7,"fat":15,"carbs":55,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":307,"name":"SPAR Синнабон","calories":450,"protein":6,"fat":22,"carbs":58,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":308,"name":"SPAR Кекс","calories":380,"protein":5,"fat":18,"carbs":50,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":309,"name":"SPAR Маффин","calories":400,"protein":6,"fat":20,"carbs":50,"unit":"g","default":100,"category":"SPAR Выпечка"},

    // 🧁 КОНДИТЕРСКИЕ ИЗДЕЛИЯ
    {"id":310,"name":"SPAR Эклер","calories":320,"protein":5,"fat":18,"carbs":35,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":311,"name":"SPAR Пирожное корзиночка","calories":350,"protein":4,"fat":20,"carbs":40,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":312,"name":"SPAR Чизкейк","calories":350,"protein":7,"fat":24,"carbs":28,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":313,"name":"SPAR Тирамису","calories":380,"protein":6,"fat":22,"carbs":40,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":314,"name":"SPAR Наполеон","calories":400,"protein":6,"fat":24,"carbs":42,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":315,"name":"SPAR Медовик","calories":380,"protein":5,"fat":18,"carbs":50,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":316,"name":"SPAR Муравейник","calories":420,"protein":6,"fat":22,"carbs":52,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":317,"name":"SPAR Картошка","calories":380,"protein":5,"fat":18,"carbs":52,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":318,"name":"SPAR Безе","calories":300,"protein":3,"fat":0,"carbs":72,"unit":"g","default":100,"category":"SPAR Сладости"},

    // 🍦 МОРОЖЕНОЕ
    {"id":319,"name":"SPAR Пломбир вафельный стаканчик","calories":230,"protein":4,"fat":15,"carbs":20,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":320,"name":"SPAR Эскимо","calories":280,"protein":3,"fat":18,"carbs":26,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":321,"name":"SPAR Мороженое фисташковое","calories":240,"protein":4,"fat":16,"carbs":20,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":322,"name":"SPAR Мороженое шоколадное","calories":250,"protein":4,"fat":15,"carbs":25,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":323,"name":"SPAR Фруктовый лед","calories":70,"protein":0,"fat":0,"carbs":18,"unit":"g","default":100,"category":"SPAR Заморозка"},
    {"id":324,"name":"SPAR Мороженое сортбет","calories":130,"protein":1,"fat":0,"carbs":32,"unit":"g","default":100,"category":"SPAR Заморозка"},

    // 🥫 ДЕТСКОЕ ПИТАНИЕ
    {"id":325,"name":"SPAR Пюре яблочное для детей","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"g","default":100,"category":"SPAR Детское питание"},
    {"id":326,"name":"SPAR Пюре грушевое для детей","calories":50,"protein":0,"fat":0,"carbs":12,"unit":"g","default":100,"category":"SPAR Детское питание"},
    {"id":327,"name":"SPAR Пюре овощное для детей","calories":35,"protein":1,"fat":0,"carbs":7,"unit":"g","default":100,"category":"SPAR Детское питание"},
    {"id":328,"name":"SPAR Сок детский яблоко","calories":45,"protein":0,"fat":0,"carbs":11,"unit":"ml","default":100,"category":"SPAR Детское питание"},
    {"id":329,"name":"SPAR Каша молочная для детей","calories":380,"protein":12,"fat":8,"carbs":68,"unit":"g","default":100,"category":"SPAR Детское питание"},
    {"id":330,"name":"SPAR Печенье детское","calories":400,"protein":8,"fat":12,"carbs":70,"unit":"g","default":100,"category":"SPAR Детское питание"},

    // 💊 БАДЫ И ПП-ПРОДУКТЫ
    {"id":331,"name":"SPAR Протеин растительный гороховый","calories":360,"protein":80,"fat":5,"carbs":8,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":332,"name":"SPAR L-карнитин","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":333,"name":"SPAR BCAA","calories":400,"protein":100,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":334,"name":"SPAR Колаген гидролизованный","calories":350,"protein":90,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":335,"name":"SPAR Витамин D3","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":336,"name":"SPAR Омега-3","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":337,"name":"SPAR Магний","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":338,"name":"SPAR Цинк","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":339,"name":"SPAR Витамин C","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR ЗОЖ"},
    {"id":340,"name":"SPAR Электролиты","calories":20,"protein":0,"fat":0,"carbs":5,"unit":"g","default":100,"category":"SPAR ЗОЖ"},

    // 🧂 ПРИПРАВЫ И СПЕЦИИ
    {"id":341,"name":"SPAR Приправа для курицы","calories":250,"protein":5,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":342,"name":"SPAR Приправа для мяса","calories":250,"protein":5,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":343,"name":"SPAR Приправа для рыбы","calories":250,"protein":5,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":344,"name":"SPAR Хмели-сунели","calories":250,"protein":8,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":345,"name":"SPAR Карри","calories":250,"protein":8,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":346,"name":"SPAR Куркума","calories":250,"protein":8,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":347,"name":"SPAR Паприка","calories":250,"protein":10,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":348,"name":"SPAR Орегано","calories":250,"protein":10,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":349,"name":"SPAR Базилик","calories":250,"protein":10,"fat":5,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":350,"name":"SPAR Розмарин","calories":250,"protein":5,"fat":10,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":351,"name":"SPAR Тимьян","calories":250,"protein":5,"fat":10,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":352,"name":"SPAR Кунжут","calories":573,"protein":18,"fat":50,"carbs":23,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":353,"name":"SPAR Мак","calories":525,"protein":18,"fat":42,"carbs":28,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":354,"name":"SPAR Лавровый лист","calories":313,"protein":8,"fat":8,"carbs":48,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":355,"name":"SPAR Гвоздика","calories":274,"protein":6,"fat":13,"carbs":31,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":356,"name":"SPAR Корица","calories":247,"protein":4,"fat":1,"carbs":50,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":357,"name":"SPAR Имбирь молотый","calories":335,"protein":9,"fat":4,"carbs":70,"unit":"g","default":100,"category":"SPAR Бакалея"},
    {"id":358,"name":"SPAR Мускатный орех","calories":525,"protein":5,"fat":36,"carbs":49,"unit":"g","default":100,"category":"SPAR Бакалея"},

    // 🌶️ СОУСЫ МИРОВОЙ КУХНИ
    {"id":359,"name":"SPAR Соус Тартар","calories":450,"protein":1,"fat":45,"carbs":8,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":360,"name":"SPAR Соус Ранч","calories":450,"protein":1,"fat":45,"carbs":8,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":361,"name":"SPAR Соус Цезарь","calories":450,"protein":2,"fat":45,"carbs":10,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":362,"name":"SPAR Соус Барбекю","calories":120,"protein":1,"fat":0,"carbs":30,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":363,"name":"SPAR Соус Терияки","calories":100,"protein":2,"fat":0,"carbs":25,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":364,"name":"SPAR Соус Сырный","calories":350,"protein":5,"fat":30,"carbs":15,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":365,"name":"SPAR Соус Грибной","calories":120,"protein":2,"fat":8,"carbs":10,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":366,"name":"SPAR Соус Шрирача","calories":40,"protein":1,"fat":0,"carbs":10,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":367,"name":"SPAR Соус Табаско","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":368,"name":"SPAR Соус Сладкий чили","calories":200,"protein":1,"fat":0,"carbs":50,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":369,"name":"SPAR Соус Песто красный","calories":450,"protein":5,"fat":45,"carbs":8,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":370,"name":"SPAR Соус Альфредо","calories":350,"protein":6,"fat":30,"carbs":15,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":371,"name":"SPAR Соус Гуакамоле","calories":150,"protein":2,"fat":14,"carbs":6,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":372,"name":"SPAR Соус Сацебели","calories":100,"protein":2,"fat":5,"carbs":12,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":373,"name":"SPAR Соус Ткемали","calories":80,"protein":1,"fat":0,"carbs":18,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":374,"name":"SPAR Соус Наршараб","calories":200,"protein":1,"fat":0,"carbs":50,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":375,"name":"SPAR Соус Чили","calories":80,"protein":1,"fat":0,"carbs":18,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":376,"name":"SPAR Соус Кетчуп томатный","calories":100,"protein":1,"fat":0,"carbs":25,"unit":"g","default":100,"category":"SPAR Соусы"},

    // 🍝 ПАСТЫ И ЛАПША
    {"id":377,"name":"SPAR Паста феттучини","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":378,"name":"SPAR Паста тальятелле","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":379,"name":"SPAR Паста лингуине","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":380,"name":"SPAR Паста каннеллони","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":381,"name":"SPAR Паста конкильоне","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":382,"name":"SPAR Лапша рисовая","calories":360,"protein":5,"fat":1,"carbs":82,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":383,"name":"SPAR Лапша гречневая соба","calories":340,"protein":14,"fat":1,"carbs":72,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":384,"name":"SPAR Лапша фунчоза","calories":350,"protein":0.5,"fat":0,"carbs":86,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":385,"name":"SPAR Равиоли","calories":250,"protein":10,"fat":8,"carbs":35,"unit":"g","default":100,"category":"SPAR Макароны"},
    {"id":386,"name":"SPAR Тортеллини","calories":250,"protein":10,"fat":8,"carbs":35,"unit":"g","default":100,"category":"SPAR Макароны"},

    // 🥗 ЗЕЛЕНЬ И САЛАТЫ
    {"id":387,"name":"SPAR Укроп свежий","calories":40,"protein":3,"fat":0.5,"carbs":7,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":388,"name":"SPAR Петрушка свежая","calories":50,"protein":4,"fat":0.5,"carbs":8,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":389,"name":"SPAR Кинза свежая","calories":30,"protein":2,"fat":0.5,"carbs":5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":390,"name":"SPAR Базилик свежий","calories":45,"protein":3,"fat":1,"carbs":6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":391,"name":"SPAR Мята свежая","calories":45,"protein":3,"fat":0.5,"carbs":8,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":392,"name":"SPAR Салат латук","calories":15,"protein":1.5,"fat":0.2,"carbs":2,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":393,"name":"SPAR Салат фризе","calories":15,"protein":1,"fat":0.2,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":394,"name":"SPAR Салат лолло россо","calories":15,"protein":1,"fat":0.2,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":395,"name":"SPAR Салат радичио","calories":20,"protein":1.5,"fat":0.2,"carbs":4,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":396,"name":"SPAR Кресс-салат","calories":25,"protein":2.5,"fat":0.5,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":397,"name":"SPAR Руккола свежая","calories":25,"protein":2.6,"fat":0.7,"carbs":3.7,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":398,"name":"SPAR Шпинат свежий","calories":23,"protein":2.9,"fat":0.4,"carbs":3.6,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":399,"name":"SPAR Сельдерей стебель","calories":16,"protein":0.7,"fat":0.2,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":400,"name":"SPAR Сельдерей корень","calories":42,"protein":1.5,"fat":0.3,"carbs":9,"unit":"g","default":100,"category":"SPAR Овощи"},

    // 🍄 ГРИБЫ
    {"id":401,"name":"SPAR Шампиньоны свежие","calories":27,"protein":4.3,"fat":0.1,"carbs":0.5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":402,"name":"SPAR Вешенки свежие","calories":33,"protein":3.3,"fat":0.4,"carbs":4.2,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":403,"name":"SPAR Белые грибы","calories":30,"protein":3.5,"fat":0.5,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":404,"name":"SPAR Лисички","calories":19,"protein":1.5,"fat":0.5,"carbs":2.5,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":405,"name":"SPAR Опята свежие","calories":22,"protein":2.5,"fat":0.5,"carbs":3,"unit":"g","default":100,"category":"SPAR Овощи"},
    {"id":406,"name":"SPAR Шампиньоны маринованные","calories":15,"protein":3,"fat":0.5,"carbs":1,"unit":"g","default":100,"category":"SPAR Консервы"},
    {"id":407,"name":"SPAR Грибы сушеные (смесь)","calories":300,"protein":30,"fat":5,"carbs":30,"unit":"g","default":100,"category":"SPAR Бакалея"},

    // 🍏 ФРУКТЫ ЭКЗОТИЧЕСКИЕ
    {"id":408,"name":"SPAR Манго","calories":60,"protein":0.8,"fat":0.4,"carbs":15,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":409,"name":"SPAR Папайя","calories":43,"protein":0.5,"fat":0.3,"carbs":11,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":410,"name":"SPAR Маракуйя","calories":97,"protein":2.2,"fat":0.7,"carbs":23,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":411,"name":"SPAR Личи","calories":66,"protein":0.8,"fat":0.4,"carbs":16,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":412,"name":"SPAR Рамбутан","calories":84,"protein":0.6,"fat":0.2,"carbs":21,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":413,"name":"SPAR Дуриан","calories":147,"protein":1.5,"fat":5.3,"carbs":23,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":414,"name":"SPAR Помело","calories":38,"protein":0.8,"fat":0,"carbs":9,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":415,"name":"SPAR Карамбола","calories":31,"protein":0.5,"fat":0.3,"carbs":7,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":416,"name":"SPAR Фейхоа","calories":49,"protein":0.9,"fat":0.4,"carbs":11,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":417,"name":"SPAR Хурма","calories":70,"protein":0.5,"fat":0.4,"carbs":16,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":418,"name":"SPAR Гранат","calories":83,"protein":1.7,"fat":1.2,"carbs":18,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":419,"name":"SPAR Инжир","calories":74,"protein":0.8,"fat":0.3,"carbs":19,"unit":"g","default":100,"category":"SPAR Фрукты"},

    // 🍯 МЕД И СИРОПЫ
    {"id":420,"name":"SPAR Мед гречишный","calories":320,"protein":0.5,"fat":0,"carbs":80,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":421,"name":"SPAR Мед липовый","calories":320,"protein":0.5,"fat":0,"carbs":80,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":422,"name":"SPAR Мед акациевый","calories":320,"protein":0.5,"fat":0,"carbs":80,"unit":"g","default":100,"category":"SPAR Соусы"},
    {"id":423,"name":"SPAR Сироп кленовый","calories":260,"protein":0,"fat":0,"carbs":67,"unit":"ml","default":100,"category":"SPAR Соусы"},
    {"id":424,"name":"SPAR Сироп топинамбура","calories":260,"protein":0,"fat":0,"carbs":65,"unit":"ml","default":100,"category":"SPAR Соусы"},
    {"id":425,"name":"SPAR Сироп агавы","calories":310,"protein":0,"fat":0,"carbs":76,"unit":"ml","default":100,"category":"SPAR Соусы"},
    {"id":426,"name":"SPAR Сироп финиковый","calories":290,"protein":0.5,"fat":0,"carbs":72,"unit":"ml","default":100,"category":"SPAR Соусы"},

    // 🎄 СЕЗОННЫЕ И ПРАЗДНИЧНЫЕ ТОВАРЫ
    {"id":427,"name":"SPAR Кулич пасхальный","calories":350,"protein":8,"fat":12,"carbs":52,"unit":"g","default":100,"category":"SPAR Выпечка"},
    {"id":428,"name":"SPAR Пасха творожная","calories":300,"protein":12,"fat":18,"carbs":24,"unit":"g","default":100,"category":"SPAR Сладости"},
    {"id":429,"name":"SPAR Крашенки яйца","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"category":"SPAR Яйца"},
    {"id":430,"name":"SPAR Мандарины новогодние","calories":53,"protein":0.8,"fat":0.3,"carbs":13,"unit":"g","default":100,"category":"SPAR Фрукты"},
    {"id":431,"name":"SPAR Оливье (готовый)","calories":200,"protein":5,"fat":15,"carbs":12,"unit":"g","default":100,"category":"SPAR Готовая еда"},
    {"id":432,"name":"SPAR Селедка под шубой","calories":210,"protein":8,"fat":16,"carbs":8,"unit":"g","default":100,"category":"SPAR Готовая еда"},

];
const AUCHAN_PRODUCTS = [
    // 🥛 МОЛОЧНЫЕ ПРОДУКТЫ И ЯЙЦА
    {"id":500,"name":"Ашан Молоко пастеризованное 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":501,"name":"Ашан Молоко пастеризованное 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":502,"name":"Ашан Молоко пастеризованное 1.5% 1л","calories":44,"protein":3,"fat":1.5,"carbs":4.8,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":503,"name":"Ашан Кефир 2.5% 900мл","calories":50,"protein":3,"fat":2.5,"carbs":4,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":504,"name":"Ашан Ряженка 2.5% 900мл","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":505,"name":"Ашан Сметана 15% 400г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":506,"name":"Ашан Сметана 20% 400г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":507,"name":"Ашан Сметана 25% 400г","calories":247,"protein":2.4,"fat":25,"carbs":3.2,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":508,"name":"Ашан Творог 5% 500г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":509,"name":"Ашан Творог 9% 500г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":510,"name":"Ашан Творог обезжиренный 500г","calories":70,"protein":16,"fat":0.5,"carbs":3,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":511,"name":"Ашан Fromage Blanc 0%","calories":46,"protein":8,"fat":0,"carbs":3.4,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Молочные продукты"},
    {"id":512,"name":"Ашан Fromage Blanc Vanille 0%","calories":76,"protein":7.1,"fat":0.1,"carbs":12,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Молочные продукты"},
    {"id":513,"name":"Ашан Масло сливочное 72.5% 180г","calories":661,"protein":0.5,"fat":72.5,"carbs":0.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":514,"name":"Ашан Масло сливочное 82.5% 180г","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Молочные продукты"},
    {"id":515,"name":"Ашан Сыр Российский 45%","calories":350,"protein":24,"fat":28,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сыры"},
    {"id":516,"name":"Ашан Сыр Гауда","calories":356,"protein":24,"fat":28,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сыры"},
    {"id":517,"name":"Ашан Сыр Моцарелла","calories":280,"protein":18,"fat":22,"carbs":1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сыры"},
    {"id":518,"name":"Ашан Сыр Petit Brie","calories":355,"protein":19,"fat":31,"carbs":0.1,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Сыры"},
    {"id":519,"name":"Ашан Яйцо куриное С1","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Яйца"},

    // 🍖 МЯСО И ПТИЦА (СТМ АШАН: Красная птица, Золотая птица)
    {"id":520,"name":"Ашан Филе куриной грудки охлажденное","calories":110,"protein":23,"fat":1.2,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":521,"name":"Ашан Филе куриного бедра без кости","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":522,"name":"Ашан Филе индейки грудка","calories":84,"protein":19,"fat":0.7,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":523,"name":"Ашан Говядина вырезка","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":524,"name":"Ашан Говядина для тушения","calories":170,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":525,"name":"Ашан Свинина вырезка","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":526,"name":"Ашан Антрекот из говядины","calories":131,"protein":17,"fat":7,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":527,"name":"Ашан Антрекот из телятины","calories":85,"protein":19,"fat":1,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":528,"name":"Ашан Фарш куриный","calories":143,"protein":16,"fat":8.5,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":529,"name":"Ашан Фарш говяжий","calories":190,"protein":17,"fat":14,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":530,"name":"Ашан Фарш домашний (свинина+говядина)","calories":230,"protein":15,"fat":19,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":531,"name":"Ашан Азу из говядины","calories":123,"protein":19,"fat":5,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Мясо"},
    {"id":532,"name":"Ашан Биточки мясные жареные с картофельным пюре","calories":831,"protein":8.3,"fat":14.3,"carbs":9.3,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},

    // 🥩 КОЛБАСЫ И ДЕЛИКАТЕСЫ
    {"id":533,"name":"Ашан Колбаса Докторская","calories":257,"protein":12,"fat":22,"carbs":1.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Колбасы"},
    {"id":534,"name":"Ашан Колбаса Московская","calories":330,"protein":13,"fat":30,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Колбасы"},
    {"id":535,"name":"Ашан Колбаса Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Колбасы"},
    {"id":536,"name":"Ашан Ветчина куриная","calories":120,"protein":15,"fat":6,"carbs":1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Колбасы"},
    {"id":537,"name":"Ашан Бекон","calories":500,"protein":12,"fat":48,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Колбасы"},

    // 🌾 КРУПЫ, МАКАРОНЫ, МУКА
    {"id":538,"name":"Ашан Гречка ядрица","calories":343,"protein":12.6,"fat":3.3,"carbs":62,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":539,"name":"Ашан Рис шлифованный","calories":340,"protein":7,"fat":0.7,"carbs":77,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":540,"name":"Ашан Рис черный","calories":350,"protein":8,"fat":2,"carbs":75,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Крупы"},
    {"id":541,"name":"Ашан Рис длиннозерный","calories":340,"protein":7,"fat":0.7,"carbs":77,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Крупы"},
    {"id":542,"name":"Ашан Овсяные хлопья","calories":350,"protein":12,"fat":6,"carbs":60,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":543,"name":"Ашан Киноа","calories":368,"protein":14,"fat":6,"carbs":64,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Крупы"},
    {"id":544,"name":"Ашан Булгур","calories":342,"protein":12.6,"fat":1.6,"carbs":70,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":545,"name":"Ашан Чечевица красная","calories":340,"protein":24,"fat":1.5,"carbs":53,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":546,"name":"Ашан Нут","calories":364,"protein":19,"fat":6,"carbs":61,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Крупы"},
    {"id":547,"name":"Ашан Макароны из твердых сортов","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Макароны"},
    {"id":548,"name":"Ашан Спагетти","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Макароны"},
    {"id":549,"name":"Ашан Паста пенне","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Макароны"},
    {"id":550,"name":"Ашан Cannelloni","calories":324,"protein":12,"fat":1,"carbs":67,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Макароны"},
    {"id":551,"name":"Ашан Pastina Gemmine","calories":350,"protein":12,"fat":1.2,"carbs":71,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Макароны"},
    {"id":552,"name":"Ашан Мука пшеничная","calories":342,"protein":10,"fat":1,"carbs":72,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":553,"name":"Ашан Мука ржаная","calories":310,"protein":9,"fat":2,"carbs":62,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":554,"name":"Ашан Мука кукурузная","calories":330,"protein":7,"fat":1.5,"carbs":72,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},

    // 🌱 ОРГАНИЧЕСКАЯ ПРОДУКЦИЯ (Красная птица Органик) [citation:8]
    {"id":555,"name":"Ашан Мука пшеничная органическая","calories":342,"protein":10,"fat":1,"carbs":72,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},
    {"id":556,"name":"Ашан Мука ржаная органическая","calories":310,"protein":9,"fat":2,"carbs":62,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},
    {"id":557,"name":"Ашан Гречка органическая","calories":343,"protein":12.6,"fat":3.3,"carbs":62,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},
    {"id":558,"name":"Ашан Овсяные хлопья органические","calories":350,"protein":12,"fat":6,"carbs":60,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},
    {"id":559,"name":"Ашан Миндаль органический","calories":579,"protein":21,"fat":49,"carbs":9,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},
    {"id":560,"name":"Ашан Грецкий орех органический","calories":654,"protein":15,"fat":65,"carbs":7,"unit":"g","default":100,"brand":"Красная птица Органик","category":"Ашан Органик"},

    // 🥫 КОНСЕРВЫ И СОЛЕНЬЯ
    {"id":561,"name":"Ашан Горошек зеленый","calories":55,"protein":3,"fat":0.2,"carbs":8.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":562,"name":"Ашан Кукуруза сахарная","calories":93,"protein":3,"fat":1.5,"carbs":17,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":563,"name":"Ашан Фасоль белая","calories":92,"protein":6.5,"fat":0.5,"carbs":15,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":564,"name":"Ашан Оливки зеленые","calories":145,"protein":1,"fat":15,"carbs":2,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":565,"name":"Ашан Маслины черные","calories":145,"protein":1,"fat":15,"carbs":2,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":566,"name":"Ашан Огурцы соленые","calories":11,"protein":0.8,"fat":0,"carbs":2.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":567,"name":"Ашан Помидоры соленые","calories":13,"protein":1,"fat":0,"carbs":3,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":568,"name":"Ашан Капуста квашеная","calories":19,"protein":1.8,"fat":0,"carbs":3.6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":569,"name":"Ашан Персики в сиропе","calories":70,"protein":0,"fat":0,"carbs":17,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Консервы"},
    {"id":570,"name":"Ашан Томаты в собственном соку","calories":25,"protein":1.2,"fat":0.2,"carbs":5,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Консервы"},

    // 🐟 РЫБА И МОРЕПРОДУКТЫ
    {"id":571,"name":"Ашан Горбуша потрошеная","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Рыба"},
    {"id":572,"name":"Ашан Семга слабосоленая","calories":200,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан Рыба"},
    {"id":573,"name":"Ашан Филе минтая","calories":70,"protein":15,"fat":0.8,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Рыба"},
    {"id":574,"name":"Ашан Креветки варено-мороженые","calories":95,"protein":18,"fat":2,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Рыба"},
    {"id":575,"name":"Ашан Ассорти из морепродуктов","calories":54,"protein":8.6,"fat":1.4,"carbs":1.6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Рыба"},
    {"id":576,"name":"Ашан Печень трески","calories":613,"protein":4,"fat":65,"carbs":1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":577,"name":"Ашан Шпроты","calories":360,"protein":14,"fat":32,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},
    {"id":578,"name":"Ашан Сайра в масле","calories":250,"protein":18,"fat":20,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Консервы"},

    // 🍞 ХЛЕБ И ВЫПЕЧКА
    {"id":579,"name":"Ашан Хлеб Бородинский","calories":210,"protein":6,"fat":1,"carbs":44,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":580,"name":"Ашан Хлеб зерновой с отрубями","calories":230,"protein":8,"fat":3,"carbs":43,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":581,"name":"Ашан Батон нарезной","calories":262,"protein":7.5,"fat":2.5,"carbs":51,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":582,"name":"Ашан Тостовый хлеб","calories":250,"protein":7,"fat":3,"carbs":48,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":583,"name":"Ашан Багет французский","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":584,"name":"Ашан Багет 8 злаков","calories":253,"protein":13,"fat":5,"carbs":39,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Хлеб"},
    {"id":585,"name":"Ашан Багет Гурман Фитнес","calories":200,"protein":6,"fat":2,"carbs":38,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан Хлеб"},
    {"id":586,"name":"Ашан Пирожок с картофелем","calories":219,"protein":4.8,"fat":8.8,"carbs":30.2,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Выпечка"},

    // 🍎 ФРУКТЫ И ОВОЩИ
    {"id":587,"name":"Ашан Авокадо Хасс","calories":144,"protein":2,"fat":16,"carbs":2.6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":588,"name":"Ашан Ананас","calories":38,"protein":0.4,"fat":0.2,"carbs":11.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":589,"name":"Ашан Апельсин","calories":43,"protein":0.9,"fat":0.2,"carbs":8.1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":590,"name":"Ашан Банан","calories":89,"protein":1.1,"fat":0.3,"carbs":23,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":591,"name":"Ашан Груша","calories":57,"protein":0.4,"fat":0.3,"carbs":15,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":592,"name":"Ашан Манго","calories":60,"protein":0.8,"fat":0.4,"carbs":15,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":593,"name":"Ашан Хурма","calories":70,"protein":0.5,"fat":0.4,"carbs":16,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":594,"name":"Ашан Гранат","calories":83,"protein":1.7,"fat":1.2,"carbs":18,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Фрукты"},
    {"id":595,"name":"Ашан Картофель","calories":77,"protein":2,"fat":0.1,"carbs":17,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},
    {"id":596,"name":"Ашан Морковь","calories":41,"protein":0.9,"fat":0.2,"carbs":9.6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},
    {"id":597,"name":"Ашан Огурец","calories":15,"protein":0.7,"fat":0.1,"carbs":2.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},
    {"id":598,"name":"Ашан Помидор","calories":18,"protein":0.9,"fat":0.2,"carbs":3.1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},
    {"id":599,"name":"Ашан Брокколи","calories":34,"protein":2.8,"fat":0.4,"carbs":6.6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},
    {"id":600,"name":"Ашан Перец болгарский","calories":31,"protein":1,"fat":0.3,"carbs":6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Овощи"},

    // 🥜 ОРЕХИ, СУХОФРУКТЫ, СНЕКИ
    {"id":601,"name":"Ашан Арахис жареный соленый","calories":640,"protein":25,"fat":52,"carbs":17,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":602,"name":"Ашан Арахис сырой очищенный","calories":550,"protein":26,"fat":45,"carbs":8.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":603,"name":"Ашан Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":9,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":604,"name":"Ашан Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":7,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":605,"name":"Ашан Фундук","calories":628,"protein":15,"fat":61,"carbs":10,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":606,"name":"Ашан Кешью","calories":553,"protein":18,"fat":44,"carbs":27,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":607,"name":"Ашан Кедровые орехи","calories":673,"protein":14,"fat":68,"carbs":5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":608,"name":"Ашан Изюм","calories":299,"protein":3,"fat":0.5,"carbs":79,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сухофрукты"},
    {"id":609,"name":"Ашан Курага","calories":241,"protein":3.4,"fat":0.5,"carbs":63,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сухофрукты"},
    {"id":610,"name":"Ашан Финики","calories":282,"protein":2,"fat":0.4,"carbs":75,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сухофрукты"},
    {"id":611,"name":"Ашан Чернослив","calories":240,"protein":2.2,"fat":0.4,"carbs":63,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сухофрукты"},
    {"id":612,"name":"Ашан Абрикос сушеный","calories":230,"protein":5,"fat":0.5,"carbs":51,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сухофрукты"},
    {"id":613,"name":"Ашан Семена льна","calories":534,"protein":18,"fat":42,"carbs":1,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":614,"name":"Ашан Семена подсолнечника","calories":584,"protein":21,"fat":51,"carbs":10,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},
    {"id":615,"name":"Ашан Чиа семена","calories":486,"protein":16.5,"fat":31,"carbs":42,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Орехи"},

    // 🧈 МАСЛА И СОУСЫ
    {"id":616,"name":"Ашан Масло подсолнечное","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Масла"},
    {"id":617,"name":"Ашан Масло оливковое","calories":884,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Масла"},
    {"id":618,"name":"Ашан Масло кунжутное","calories":884,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"brand":"Красная птица","category":"Ашан Масла"},
    {"id":619,"name":"Ашан Арахисовая паста","calories":580,"protein":25,"fat":45,"carbs":20,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Соусы"},
    {"id":620,"name":"Ашан Кетчуп","calories":100,"protein":1,"fat":0.2,"carbs":23,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Соусы"},
    {"id":621,"name":"Ашан Майонез","calories":627,"protein":1,"fat":67,"carbs":2.5,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Соусы"},
    {"id":622,"name":"Ашан Соевый соус","calories":60,"protein":8,"fat":0,"carbs":6,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Соусы"},
    {"id":623,"name":"Ашан Соус Wok с грибами шиитаке","calories":150,"protein":2,"fat":10,"carbs":14,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Соусы"},
    {"id":624,"name":"Ашан Мед натуральный","calories":320,"protein":0.3,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Соусы"},

    // 🍪 СЛАДОСТИ, ПЕЧЕНЬЕ, ШОКОЛАД
    {"id":625,"name":"Ашан Шоколад темный 72%","calories":555,"protein":8.4,"fat":42.1,"carbs":29.7,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Сладости"},
    {"id":626,"name":"Ашан Шоколад темный 85%","calories":591,"protein":8,"fat":51.6,"carbs":16.8,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Сладости"},
    {"id":627,"name":"Ашан Печенье овсяное","calories":420,"protein":7,"fat":15,"carbs":65,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сладости"},
    {"id":628,"name":"Ашан Choco Crac","calories":506,"protein":8.2,"fat":26,"carbs":59,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Сладости"},
    {"id":629,"name":"Ашан Minicookies","calories":392,"protein":8.1,"fat":4,"carbs":78,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Сладости"},
    {"id":630,"name":"Ашан Зефир","calories":320,"protein":0.8,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сладости"},
    {"id":631,"name":"Ашан Пастила","calories":310,"protein":0.5,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сладости"},
    {"id":632,"name":"Ашан Халва","calories":550,"protein":12,"fat":33,"carbs":50,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Сладости"},
    {"id":633,"name":"Ашан Варенье из жимолости","calories":250,"protein":0.3,"fat":0.1,"carbs":62,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Сладости"},
    {"id":634,"name":"Ашан Пастила без сахара с клюквой (Белёв)","calories":280,"protein":2,"fat":0,"carbs":68,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Сладости"},
    {"id":635,"name":"Ашан Смоква (Белёв)","calories":270,"protein":1.5,"fat":0,"carbs":66,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Сладости"},
    {"id":636,"name":"Ашан Чак-чак (Казань)","calories":450,"protein":7,"fat":20,"carbs":60,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Сладости"},
    {"id":637,"name":"Ашан Вятские пряники (Киров)","calories":380,"protein":5,"fat":4,"carbs":82,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Сладости"},
    {"id":638,"name":"Ашан Марципан (Калининград)","calories":480,"protein":6,"fat":24,"carbs":58,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Сладости"},

    // 🍹 НАПИТКИ
    {"id":639,"name":"Ашан Вода питьевая 5л","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Напитки"},
    {"id":640,"name":"Ашан Сок апельсиновый","calories":45,"protein":0.7,"fat":0,"carbs":11,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Напитки"},
    {"id":641,"name":"Ашан Сок яблочный","calories":46,"protein":0.5,"fat":0,"carbs":11,"unit":"ml","default":100,"brand":"Каждый день","category":"Ашан Напитки"},
    {"id":642,"name":"Ашан Основа для морса (Карелия)","calories":250,"protein":0.5,"fat":0,"carbs":62,"unit":"g","default":100,"brand":"Ашан Регионы России","category":"Ашан Напитки"},
    {"id":643,"name":"Ашан Чай черный","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Напитки"},
    {"id":644,"name":"Ашан Чай зеленый","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Напитки"},
    {"id":645,"name":"Ашан Кофе молотый","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Напитки"},
    {"id":646,"name":"Ашан Кофе в капсулах","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Напитки"},

    // 🧊 ЗАМОРОЖЕННЫЕ ПРОДУКТЫ
    {"id":647,"name":"Ашан Смесь овощная замороженная","calories":40,"protein":2,"fat":0.5,"carbs":7,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":648,"name":"Ашан Брокколи замороженная","calories":34,"protein":3,"fat":0.4,"carbs":6,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":649,"name":"Ашан Ягоды замороженные","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":650,"name":"Ашан Пельмени","calories":250,"protein":11,"fat":12,"carbs":25,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":651,"name":"Ашан Вареники с творогом","calories":200,"protein":9,"fat":5,"carbs":30,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":652,"name":"Ашан Котлеты куриные","calories":180,"protein":15,"fat":12,"carbs":5,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Заморозка"},
    {"id":653,"name":"Ашан Блины с мясом","calories":220,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":654,"name":"Ашан Сырники","calories":230,"protein":12,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},
    {"id":655,"name":"Ашан Мороженое пломбир","calories":230,"protein":4,"fat":15,"carbs":20,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Заморозка"},

    // 🥗 ГОТОВАЯ ЕДА
    {"id":656,"name":"Ашан Салат Греческий","calories":120,"protein":4,"fat":10,"carbs":5,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":657,"name":"Ашан Салат Цезарь","calories":180,"protein":10,"fat":14,"carbs":8,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":658,"name":"Ашан Салат Оливье","calories":200,"protein":5,"fat":15,"carbs":12,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":659,"name":"Ашан Аджапсандал","calories":44,"protein":1.6,"fat":1.3,"carbs":6.5,"unit":"g","default":100,"brand":"Ашан","category":"Ашан Готовая еда"},
    {"id":660,"name":"Ашан Лапша с курицей WOK","calories":150,"protein":12,"fat":5,"carbs":15,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":661,"name":"Ашан Пицца Маргарита","calories":230,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":662,"name":"Ашан Гречка с курицей","calories":160,"protein":15,"fat":6,"carbs":14,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":663,"name":"Ашан Рис с овощами","calories":120,"protein":3,"fat":2,"carbs":24,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":664,"name":"Ашан Горбуша запеченная","calories":150,"protein":20,"fat":7,"carbs":3,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":665,"name":"Ашан Картофельное пюре с котлетой","calories":180,"protein":10,"fat":10,"carbs":15,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":666,"name":"Ашан Крылышки BBQ","calories":320,"protein":18,"fat":24,"carbs":8,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},
    {"id":667,"name":"Ашан Картофель фри","calories":312,"protein":3.4,"fat":15,"carbs":41,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан Готовая еда"},

    // 💊 БАДЫ И ВИТАМИНЫ (Красная птица) [citation:5]
    {"id":668,"name":"Ашан Витамин D3","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":669,"name":"Ашан Витамин C","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":670,"name":"Ашан Витамин E","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":671,"name":"Ашан Омега-3","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":672,"name":"Ашан Омега-3-6-9","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":673,"name":"Ашан Магний В6","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":674,"name":"Ашан Кальций D3","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":675,"name":"Ашан Янтарная кислота","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":676,"name":"Ашан Валериана в капсулах","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":677,"name":"Ашан Пустырник в капсулах","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":678,"name":"Ашан Травяной чай для иммунитета","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},
    {"id":679,"name":"Ашан Травяной чай Спокойной ночи","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Красная птица","category":"Ашан ЗОЖ"},

    // 🌱 ЗОЖ ПРОДУКТЫ (Золотая птица, Просто полезно)
    {"id":680,"name":"Ашан Гранола","calories":450,"protein":10,"fat":18,"carbs":60,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":681,"name":"Ашан Рисовые хлебцы","calories":350,"protein":8,"fat":3,"carbs":75,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":682,"name":"Ашан Гречневые хлебцы","calories":340,"protein":12,"fat":3,"carbs":70,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":683,"name":"Ашан Протеиновый батончик","calories":350,"protein":20,"fat":12,"carbs":35,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":684,"name":"Ашан Тофу","calories":76,"protein":8,"fat":4.8,"carbs":1.5,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":685,"name":"Ашан Кокосовое молоко","calories":230,"protein":2,"fat":24,"carbs":3,"unit":"ml","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":686,"name":"Ашан Миндальное молоко","calories":30,"protein":1,"fat":2.5,"carbs":1,"unit":"ml","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},
    {"id":687,"name":"Ашан Урбеч","calories":620,"protein":15,"fat":52,"carbs":18,"unit":"g","default":100,"brand":"Золотая птица","category":"Ашан ЗОЖ"},

    // 🧂 ПРИПРАВЫ И СПЕЦИИ
    {"id":688,"name":"Ашан Перец черный молотый","calories":251,"protein":10,"fat":3,"carbs":64,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":689,"name":"Ашан Паприка молотая","calories":250,"protein":10,"fat":5,"carbs":50,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":690,"name":"Ашан Куркума","calories":250,"protein":8,"fat":5,"carbs":50,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":691,"name":"Ашан Корица","calories":247,"protein":4,"fat":1,"carbs":50,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":692,"name":"Ашан Соль поваренная","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"},
    {"id":693,"name":"Ашан Сахар белый","calories":387,"protein":0,"fat":0,"carbs":100,"unit":"g","default":100,"brand":"Каждый день","category":"Ашан Бакалея"}
];
const METRO_PRODUCTS = [
    // 🥛 МОЛОЧНЫЕ ПРОДУКТЫ (METRO Chef)
    {"id":700,"name":"METRO Chef Кефир 2.5% 800мл","calories":50,"protein":3,"fat":2.5,"carbs":4,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Молочные продукты"},
    {"id":701,"name":"METRO Chef Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Молочные продукты"},
    {"id":702,"name":"METRO Chef Сыр Моцарелла мягкий 330г","calories":280,"protein":18,"fat":22,"carbs":1,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Сыры"},
    {"id":703,"name":"METRO Chef Сыр Фета 100г","calories":264,"protein":14,"fat":21,"carbs":4,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Сыры"},
    {"id":704,"name":"METRO Chef Сыр Пармезан 40г","calories":431,"protein":35,"fat":28,"carbs":4,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Сыры"},
    {"id":705,"name":"METRO Chef Сыр Брынза 100г","calories":260,"protein":18,"fat":20,"carbs":2,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Сыры"},
    {"id":706,"name":"METRO Chef Йогурт Rioba 3% 350мл","calories":80,"protein":2.8,"fat":3,"carbs":11,"unit":"ml","default":100,"brand":"Rioba","category":"METRO Молочные продукты"},
    {"id":707,"name":"METRO Chef Масло сливочное","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Молочные продукты"},
    {"id":708,"name":"METRO Chef Яйца куриные","calories":157,"protein":12.7,"fat":11.5,"carbs":0.7,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Яйца"},

    // 🍖 МЯСО И ПТИЦА (METRO Chef)
    {"id":709,"name":"METRO Chef Филе куриное охлажденное 300г","calories":110,"protein":23,"fat":1.2,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},
    {"id":710,"name":"METRO Chef Фарш куриный 200г","calories":143,"protein":16,"fat":8.5,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},
    {"id":711,"name":"METRO Chef Печень куриная 200г","calories":140,"protein":20,"fat":6,"carbs":2,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},
    {"id":712,"name":"METRO Chef Говядина вырезка","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},
    {"id":713,"name":"METRO Chef Свинина корейка","calories":220,"protein":16,"fat":17,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},
    {"id":714,"name":"METRO Chef Фарш мясной (говядина+свинина)","calories":230,"protein":15,"fat":19,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Мясо"},

    // 🐟 РЫБА И МОРЕПРОДУКТЫ
    {"id":715,"name":"METRO Chef Креветки варено-мороженые 100г","calories":95,"protein":18,"fat":2,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Рыба"},
    {"id":716,"name":"METRO Chef Филе лосося охлажденное","calories":200,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Рыба"},
    {"id":717,"name":"METRO Chef Филе минтая","calories":70,"protein":15,"fat":0.8,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Рыба"},
    {"id":718,"name":"AGO Тунец в рассоле 100г","calories":110,"protein":24,"fat":1,"carbs":0,"unit":"g","default":100,"brand":"AGO","category":"METRO Консервы"},
    {"id":719,"name":"AGO Анчоусы в масле","calories":210,"protein":20,"fat":14,"carbs":0,"unit":"g","default":100,"brand":"AGO","category":"METRO Консервы"},

    // 🌾 КРУПЫ, БОБОВЫЕ, ПАСТА
    {"id":720,"name":"METRO Chef Булгур пшеничный 190г","calories":342,"protein":12.6,"fat":1.6,"carbs":70,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Крупы"},
    {"id":721,"name":"METRO Chef Кускус пшеничный 120г","calories":376,"protein":12.8,"fat":0.6,"carbs":78,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Крупы"},
    {"id":722,"name":"METRO Chef Чечевица красная 150г","calories":340,"protein":24,"fat":1.5,"carbs":53,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Крупы"},
    {"id":723,"name":"METRO Chef Нут консервированный AGO 80г","calories":140,"protein":7,"fat":3,"carbs":20,"unit":"g","default":100,"brand":"AGO","category":"METRO Консервы"},
    {"id":724,"name":"METRO Chef Рис басмати","calories":350,"protein":7,"fat":0.5,"carbs":80,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Крупы"},
    {"id":725,"name":"METRO Chef Паста пенне","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Макароны"},
    {"id":726,"name":"METRO Chef Спагетти","calories":360,"protein":13,"fat":2,"carbs":72,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Макароны"},
    {"id":727,"name":"METRO Chef Лапша яичная","calories":380,"protein":11,"fat":4,"carbs":72,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Макароны"},

    // 🥫 КОНСЕРВЫ И ЗАГОТОВКИ
    {"id":728,"name":"AGO Оливки черные без косточки","calories":145,"protein":1,"fat":15,"carbs":2,"unit":"g","default":100,"brand":"AGO","category":"METRO Консервы"},
    {"id":729,"name":"METRO Chef Томаты в собственном соку 100г","calories":25,"protein":1.2,"fat":0.2,"carbs":5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Консервы"},
    {"id":730,"name":"METRO Chef Томатная паста 100г","calories":80,"protein":4,"fat":0.5,"carbs":16,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Соусы"},
    {"id":731,"name":"METRO Chef Огурцы маринованные","calories":11,"protein":0.8,"fat":0,"carbs":2.5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Консервы"},

    // 🍞 ХЛЕБ И ХЛЕБЦЫ
    {"id":732,"name":"METRO Chef Лаваш цельнозерновой 200г","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Хлеб"},
    {"id":733,"name":"METRO Chef Хлебцы рисовые","calories":350,"protein":8,"fat":3,"carbs":75,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Хлеб"},
    {"id":734,"name":"METRO Chef Хлебцы гречневые","calories":340,"protein":12,"fat":3,"carbs":70,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Хлеб"},
    {"id":735,"name":"METRO Chef Багет замороженный","calories":270,"protein":8,"fat":1,"carbs":55,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Хлеб"},
    {"id":736,"name":"METRO Chef Круассаны замороженные","calories":400,"protein":8,"fat":20,"carbs":48,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Выпечка"},

    // 🥗 ОВОЩИ, ЗЕЛЕНЬ, ФРУКТЫ
    {"id":737,"name":"METRO Chef Салат Айсберг 500г","calories":14,"protein":1,"fat":0.1,"carbs":2.5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},
    {"id":738,"name":"METRO Chef Рукола пучок","calories":25,"protein":2.6,"fat":0.7,"carbs":3.7,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},
    {"id":739,"name":"METRO Chef Зелень (петрушка/кинза/укроп)","calories":40,"protein":3,"fat":0.5,"carbs":7,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},
    {"id":740,"name":"METRO Chef Базилик свежий","calories":45,"protein":3,"fat":1,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},
    {"id":741,"name":"METRO Chef Лимон","calories":29,"protein":1.1,"fat":0.3,"carbs":9.3,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Фрукты"},
    {"id":742,"name":"METRO Chef Финики без косточки 150г","calories":282,"protein":2,"fat":0.4,"carbs":75,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Сухофрукты"},
    {"id":743,"name":"METRO Chef Авокадо","calories":160,"protein":2,"fat":15,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Фрукты"},
    {"id":744,"name":"METRO Chef Помидоры черри 200г","calories":18,"protein":0.9,"fat":0.2,"carbs":3.1,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},
    {"id":745,"name":"METRO Chef Перец болгарский","calories":31,"protein":1,"fat":0.3,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Овощи"},

    // 🥜 ОРЕХИ, СЕМЕНА, СУХОФРУКТЫ
    {"id":746,"name":"METRO Chef Орехи грецкие","calories":654,"protein":15,"fat":65,"carbs":7,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Орехи"},
    {"id":747,"name":"METRO Chef Семена льна","calories":534,"protein":18,"fat":42,"carbs":1,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Орехи"},
    {"id":748,"name":"METRO Chef Семена кунжута","calories":573,"protein":18,"fat":50,"carbs":23,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Орехи"},
    {"id":749,"name":"METRO Chef Кешью сырой","calories":553,"protein":18,"fat":44,"carbs":27,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Орехи"},
    {"id":750,"name":"METRO Chef Миндаль","calories":579,"protein":21,"fat":49,"carbs":9,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Орехи"},

    // 🧈 МАСЛА, СОУСЫ, ПРИПРАВЫ
    {"id":751,"name":"METRO Chef Масло оливковое","calories":884,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Масла"},
    {"id":752,"name":"METRO Chef Масло подсолнечное","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Масла"},
    {"id":753,"name":"METRO Chef Соус песто","calories":450,"protein":5,"fat":45,"carbs":5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Соусы"},
    {"id":754,"name":"METRO Chef Соус соевый","calories":60,"protein":8,"fat":0,"carbs":6,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Соусы"},
    {"id":755,"name":"METRO Chef Горчица американская","calories":66,"protein":4,"fat":3,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Соусы"},
    {"id":756,"name":"METRO Chef Бальзамический уксус из Модены","calories":88,"protein":0,"fat":0,"carbs":20,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Соусы"},
    {"id":757,"name":"METRO Chef Соль морская","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":758,"name":"METRO Chef Перец черный молотый","calories":251,"protein":10,"fat":3,"carbs":64,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":759,"name":"METRO Chef Паприка","calories":250,"protein":10,"fat":5,"carbs":50,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":760,"name":"METRO Chef Куркума","calories":250,"protein":8,"fat":5,"carbs":50,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":761,"name":"METRO Chef Корица","calories":247,"protein":4,"fat":1,"carbs":50,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":762,"name":"METRO Chef Имбирь молотый","calories":335,"protein":9,"fat":4,"carbs":70,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":763,"name":"METRO Chef Мак","calories":525,"protein":18,"fat":42,"carbs":28,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},

    // 🍰 СЛАДОСТИ, МУКА ДЛЯ ВЫПЕЧКИ
    {"id":764,"name":"METRO Chef Спельтовая мука","calories":340,"protein":14,"fat":2,"carbs":70,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":765,"name":"METRO Chef Разрыхлитель","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Бакалея"},
    {"id":766,"name":"METRO Chef Подсластитель (стевия/эритритол)","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO ЗОЖ"},

    // 💊 БАДЫ И ЗОЖ
    {"id":767,"name":"METRO Chef Протеин растительный","calories":360,"protein":80,"fat":5,"carbs":8,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO ЗОЖ"},
    {"id":768,"name":"METRO Chef L-карнитин","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO ЗОЖ"},
    {"id":769,"name":"METRO Chef Клетчатка","calories":130,"protein":13,"fat":3,"carbs":13,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO ЗОЖ"},
    {"id":770,"name":"METRO Chef Спирулина","calories":290,"protein":57,"fat":8,"carbs":24,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO ЗОЖ"},

    // 🚰 НАПИТКИ
    {"id":771,"name":"METRO Chef Вода питьевая 5л","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Напитки"},
    {"id":772,"name":"METRO Chef Сок апельсиновый 1л","calories":45,"protein":0.7,"fat":0,"carbs":11,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Напитки"},
    {"id":773,"name":"METRO Chef Сок яблочный 1л","calories":46,"protein":0.5,"fat":0,"carbs":11,"unit":"ml","default":100,"brand":"METRO Chef","category":"METRO Напитки"},
    {"id":774,"name":"METRO Chef Чай черный","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Напитки"},
    {"id":775,"name":"METRO Chef Кофе в зернах","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Напитки"},

    // 🍽️ METRO PROFESSIONAL — ПОСУДА, ИНВЕНТАРЬ, ОБОРУДОВАНИЕ [citation:7][citation:9]
    {"id":776,"name":"METRO Professional Нож универсальный 10см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":777,"name":"METRO Professional Нож шеф-повара 20см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":778,"name":"METRO Professional Нож для обвалки 16см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":779,"name":"METRO Professional Нож сантоку 18см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":780,"name":"METRO Professional Точилка для ножей","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":781,"name":"METRO Professional Доска разделочная 29x20см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":782,"name":"METRO Professional Венчик антискользящий 26.4см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":783,"name":"METRO Professional Пресс для чеснока 15.5см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":784,"name":"METRO Professional Скалка деревянная 45см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":785,"name":"METRO Professional Сито мелкое 9.2см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":786,"name":"METRO Professional Щипцы кухонные 27см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":787,"name":"METRO Professional Штопор официанта 12.3см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":788,"name":"METRO Professional Шейкер 700мл","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":789,"name":"METRO Professional Джиггер 30/50мл","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":790,"name":"METRO Professional Соковыжималка цитрусовая 22см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":791,"name":"METRO Professional Сковорода 24см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":792,"name":"METRO Professional Лопатка кухонная","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":793,"name":"METRO Professional Форма для маффинов силиконовая","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":794,"name":"METRO Professional Подставка для ножей магнитная 45см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":795,"name":"METRO Professional Совок для льда","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":796,"name":"METRO Professional Пинцет для костей 10см","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":797,"name":"METRO Professional Мельница для соли/перца","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":798,"name":"METRO Professional Терка","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},

    // 🔥 METRO PROFESSIONAL — КРУПНАЯ ТЕХНИКА [citation:9]
    {"id":799,"name":"METRO Professional Плита индукционная 230В","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Техника"},
    {"id":800,"name":"METRO Professional Гриль электрический 3000W","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Техника"},
    {"id":801,"name":"METRO Professional Кофемашина DeLonghi","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Техника"},
    {"id":802,"name":"METRO Professional Витрина холодильная 117L","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Техника"},
    {"id":803,"name":"METRO Professional Ящик для доставки пластиковый","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Техника"},

    // 🧺 METRO PROFESSIONAL — ГИГИЕНА И ХРАНЕНИЕ
    {"id":804,"name":"METRO Professional Контейнер гастроном GN 1/3","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":805,"name":"METRO Professional Бумага для выпечки","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Инвентарь"},
    {"id":806,"name":"METRO Professional Перчатки нитриловые","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"METRO Professional","category":"METRO Гигиена"},

    // 🧴 ARO — НЕПРОДОВОЛЬСТВЕННЫЕ ТОВАРЫ
    {"id":807,"name":"ARO Салфетки бумажные","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"ARO","category":"METRO Гигиена"},
    {"id":808,"name":"ARO Полотенца бумажные","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"g","default":100,"brand":"ARO","category":"METRO Гигиена"},
    {"id":809,"name":"ARO Мыло жидкое","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"brand":"ARO","category":"METRO Гигиена"},
    {"id":810,"name":"ARO Средство для мытья посуды","calories":0,"protein":0,"fat":0,"carbs":0,"unit":"ml","default":100,"brand":"ARO","category":"METRO Гигиена"},

    // 🥩 ГОТОВАЯ ЕДА И ПОЛУФАБРИКАТЫ METRO
    {"id":811,"name":"METRO Chef Салат Греческий","calories":120,"protein":4,"fat":10,"carbs":5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":812,"name":"METRO Chef Салат Цезарь","calories":180,"protein":10,"fat":14,"carbs":8,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":813,"name":"METRO Chef Салат Оливье","calories":200,"protein":5,"fat":15,"carbs":12,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":814,"name":"METRO Chef Картофельное пюре с котлетой","calories":180,"protein":10,"fat":10,"carbs":15,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":815,"name":"METRO Chef Рис с овощами","calories":120,"protein":3,"fat":2,"carbs":24,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":816,"name":"METRO Chef Лапша WOK с курицей","calories":150,"protein":12,"fat":5,"carbs":15,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":817,"name":"METRO Chef Пицца Маргарита","calories":230,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":818,"name":"METRO Chef Крылышки BBQ","calories":320,"protein":18,"fat":24,"carbs":8,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Готовая еда"},
    {"id":819,"name":"METRO Chef Картофель фри","calories":312,"protein":3.4,"fat":15,"carbs":41,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},

    // 🧊 ЗАМОРОЖЕННЫЕ ПРОДУКТЫ
    {"id":820,"name":"METRO Chef Овощи гриль замороженные","calories":50,"protein":2,"fat":3,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":821,"name":"METRO Chef Ягоды замороженные","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":822,"name":"METRO Chef Брокколи замороженная","calories":34,"protein":3,"fat":0.4,"carbs":6,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":823,"name":"METRO Chef Вареники с творогом","calories":200,"protein":9,"fat":5,"carbs":30,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":824,"name":"METRO Chef Пельмени","calories":250,"protein":11,"fat":12,"carbs":25,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":825,"name":"METRO Chef Котлеты куриные","calories":180,"protein":15,"fat":12,"carbs":5,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":826,"name":"METRO Chef Сырники замороженные","calories":230,"protein":12,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":827,"name":"METRO Chef Блины с мясом","calories":220,"protein":10,"fat":10,"carbs":25,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"},
    {"id":828,"name":"METRO Chef Мороженое пломбир","calories":230,"protein":4,"fat":15,"carbs":20,"unit":"g","default":100,"brand":"METRO Chef","category":"METRO Заморозка"}
];
const MEAT_REFERENCE = [
    // ==================== ГОВЯДИНА (Более 50 позиций) ====================
    // Вырезка
    {"id":1000,"name":"Говяжья вырезка целая","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Вырезка","description":"Самая нежная часть, минимальное количество жира"},
    {"id":1001,"name":"Филе миньон","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Вырезка","description":"Порционные стейки из узкой части вырезки, самые дорогие и нежные"},
    {"id":1002,"name":"Шатобриан","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Вырезка","description":"Толстый срез из центральной части вырезки на 2-3 персоны"},
    
    // Рибай
    {"id":1003,"name":"Рибай на кости","calories":270,"protein":18,"fat":22,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Рибай","description":"Классический мраморный стейк с прослойками жира"},
    {"id":1004,"name":"Рибай без кости","calories":270,"protein":18,"fat":22,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Рибай","description":"То же, но без кости"},
    {"id":1005,"name":"Кабо-рибай","calories":270,"protein":18,"fat":22,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Рибай","description":"Часть рибая с максимальной мраморностью"},
    
    // Стриплойн
    {"id":1006,"name":"Стриплойн (Нью-Йорк)","calories":210,"protein":20,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Стриплойн","description":"Плотный стейк с выраженным мясным вкусом"},
    {"id":1007,"name":"Канзас-сити стрип","calories":210,"protein":20,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Стриплойн","description":"Стриплойн на кости"},
    
    // Тейндерлойн (Филе)
    {"id":1008,"name":"Тейндерлойн целый","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Филе","description":"Вся вырезка целиком"},
    {"id":1009,"name":"Турнедо","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Филе","description":"Маленькие круглые стейки из филе, обернутые беконом"},
    {"id":1010,"name":"Шато-брион","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Филе","description":"Толстый срез из центральной части вырезки"},
    
    // Толстый край
    {"id":1011,"name":"Толстый край","calories":250,"protein":18,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Толстый край","description":"Часть спинной мышцы с хорошей мраморностью"},
    {"id":1012,"name":"Пиканью (шапочка)","calories":220,"protein":19,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Толстый край","description":"Жирная шапочка на толстом крае"},
    
    // Тонкий край (Кострец)
    {"id":1013,"name":"Тонкий край","calories":190,"protein":20,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Тонкий край","description":"Постная часть спинной мышцы"},
    
    // Оковалок (Верхняя часть бедра)
    {"id":1014,"name":"Оковалок целый","calories":180,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Оковалок","description":"Мышца с бедра, универсальное мясо"},
    {"id":1015,"name":"Фланк стейк","calories":170,"protein":21,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Оковалок","description":"Пашина, ярко выраженный волокнистый вкус"},
    {"id":1016,"name":"Скерт стейк","calories":170,"protein":21,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Оковалок","description":"Диафрагма, сильный говяжий вкус"},
    
    // Лопатка
    {"id":1017,"name":"Лопатка целая","calories":185,"protein":19,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Лопатка","description":"Для тушения, гуляша и жарки тонкими ломтиками"},
    {"id":1018,"name":"Лопатка на кости","calories":185,"protein":19,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Лопатка","description":"Для запекания целиком или бульонов"},
    {"id":1019,"name":"Чакулас","calories":220,"protein":17,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Лопатка","description":"Подлопаточная часть с жировыми прослойками"},
    
    // Грудинка
    {"id":1020,"name":"Грудинка целиком","calories":350,"protein":15,"fat":32,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Грудинка","description":"Для варки, тушения и кошерного прошутто"},
    {"id":1021,"name":"Грудинка с пашиной","calories":330,"protein":16,"fat":29,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Грудинка","description":"Слой брюшной полости"},
    
    // Шея
    {"id":1022,"name":"Шея говяжья","calories":220,"protein":17,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Шея","description":"Для тушения, бульонов, гуляша"},
    
    // Пашина
    {"id":1023,"name":"Пашина","calories":220,"protein":17,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Пашина","description":"Брюшная стенка с жировыми прослойками"},
    
    // Окорок (Голяшка)
    {"id":1024,"name":"Голяшка передняя","calories":180,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Голяшка","description":"С мозговой косточкой, для бульонов и заливного"},
    {"id":1025,"name":"Голяшка задняя","calories":180,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Голяшка","description":"Более мясная часть голяшки"},
    {"id":1026,"name":"Рулька","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Голяшка","description":"Часть ноги выше голяшки"},
    
    // Элитные стейки
    {"id":1027,"name":"Вагью стейк","calories":350,"protein":15,"fat":32,"carbs":0,"unit":"g","default":100,"animal":"Говядина Вагью","cut":"Элитный","description":"Японская мраморная говядина, высшая категория"},
    {"id":1028,"name":"Кобе стейк","calories":400,"protein":14,"fat":38,"carbs":0,"unit":"g","default":100,"animal":"Говядина Кобе","cut":"Элитный","description":"Самый дорогой стейк в мире"},
    {"id":1029,"name":"Денвер стейк","calories":250,"protein":18,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Элитный","description":"Из подлопаточной части"},
    {"id":1030,"name":"Ром стейк","calories":220,"protein":19,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Элитный","description":"Из тазобедренной части, выраженный вкус"},
    {"id":1031,"name":"Блейд стейк","calories":240,"protein":17,"fat":19,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Элитный","description":"Из лопаточной части с жировой шапочкой"},
    {"id":1032,"name":"Осебуко","calories":180,"protein":20,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Элитный","description":"Голяшка с мозговой косточкой по-итальянски"},
    
    // Субпродукты говяжьи
    {"id":1033,"name":"Печень говяжья","calories":135,"protein":20,"fat":3.5,"carbs":4,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Богата железом и витамином А"},
    {"id":1034,"name":"Сердце говяжье","calories":112,"protein":17,"fat":4,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Плотное мясо, идеально для запекания"},
    {"id":1035,"name":"Почки говяжьи","calories":80,"protein":15,"fat":2.5,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Для пирогов и рагу"},
    {"id":1036,"name":"Мозги говяжьи","calories":125,"protein":11,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Нежная консистенция, жарят в панировке"},
    {"id":1037,"name":"Легкое говяжье","calories":85,"protein":16,"fat":2,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Губчатая структура, для начинок"},
    {"id":1038,"name":"Селезенка говяжья","calories":100,"protein":18,"fat":3,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Плотное мясо, вкус сладковатый"},
    {"id":1039,"name":"Язык говяжий","calories":224,"protein":16,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Деликатес, нежное мясо"},
    {"id":1040,"name":"Хвост говяжий","calories":250,"protein":18,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Для наваристого бульона"},
    {"id":1041,"name":"Рубец говяжий","calories":85,"protein":15,"fat":3,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Для азиатских супов, специфический вкус"},
    {"id":1042,"name":"Трахея говяжья","calories":70,"protein":14,"fat":1.5,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Хрящевая ткань для бульонов"},
    {"id":1043,"name":"Диафрагма говяжья","calories":170,"protein":21,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Субпродукты","description":"Скерт-стейк, сильный говяжий вкус"},
    
    // Говяжий фарш
    {"id":1044,"name":"Фарш говяжий 90/10","calories":150,"protein":20,"fat":7,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Фарш","description":"Постный фарш для котлет"},
    {"id":1045,"name":"Фарш говяжий 80/20","calories":250,"protein":17,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Фарш","description":"Сочный фарш для бургеров"},
    {"id":1046,"name":"Фарш говяжий 70/30","calories":330,"protein":14,"fat":30,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Фарш","description":"Жирный фарш для сочных котлет"},
    
    // ==================== СВИНИНА (Более 40 позиций) ====================
    // Корейка
    {"id":1047,"name":"Корейка свиная на кости","calories":220,"protein":17,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Корейка","description":"Для жарки целиком или стейками"},
    {"id":1048,"name":"Корейка без кости","calories":220,"protein":17,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Корейка","description":"То же без кости"},
    
    // Карбонад
    {"id":1049,"name":"Карбонад свиной","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Карбонад","description":"Спинная часть, постное мясо"},
    {"id":1050,"name":"Шницель свиной","calories":140,"protein":20,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Карбонад","description":"Тонко отбитая спинная часть"},
    
    // Шея
    {"id":1051,"name":"Шея свиная","calories":250,"protein":15,"fat":21,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Шея","description":"Сочная мраморная часть для шашлыка и стейков"},
    {"id":1052,"name":"Шея свиная на кости","calories":250,"protein":15,"fat":21,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Шея","description":"Для запекания целиком"},
    
    // Лопатка
    {"id":1053,"name":"Лопатка свиная","calories":230,"protein":16,"fat":18,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Лопатка","description":"Универсальная часть для тушения и жарки"},
    {"id":1054,"name":"Плечо свиное","calories":230,"protein":16,"fat":18,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Лопатка","description":"Целиковая часть передней ноги"},
    
    // Окорок (окорок)
    {"id":1055,"name":"Окорок свиной задний","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Окорок","description":"Для запекания и варки"},
    {"id":1056,"name":"Окорок свиной передний","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Окорок","description":"Более жирный вариант окорока"},
    {"id":1057,"name":"Ветчина сырокопченая","calories":320,"protein":15,"fat":28,"carbs":1,"unit":"g","default":100,"animal":"Свинина","cut":"Деликатес","description":"Из окорока, сыровяленая"},
    
    // Грудинка и брюшина
    {"id":1058,"name":"Грудинка свиная","calories":350,"protein":15,"fat":32,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Грудинка","description":"Жирная часть с прожилками"},
    {"id":1059,"name":"Брюшина свиная","calories":450,"protein":12,"fat":45,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Брюшина","description":"Мягкая жирная часть"},
    {"id":1060,"name":"Ребра свиные","calories":300,"protein":15,"fat":26,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Ребра","description":"Для BBQ и запекания"},
    {"id":1061,"name":"Ребра бэби бэк","calories":300,"protein":15,"fat":26,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Ребра","description":"Молодые ребра с позвоночника"},
    {"id":1062,"name":"Ребра с грудинки","calories":350,"protein":14,"fat":33,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Ребра","description":"Самые жирные ребра"},
    
    // Голяшка
    {"id":1063,"name":"Голяшка свиная","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Голяшка","description":"С хрящами, для холодца"},
    {"id":1064,"name":"Рулька свиная","calories":250,"protein":16,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Голяшка","description":"Верхняя часть ноги, для запекания"},
    {"id":1065,"name":"Ножки свиные","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Голяшка","description":"Для студня и холодца"},
    
    // Уши, пятачок
    {"id":1066,"name":"Уши свиные","calories":250,"protein":16,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Хрящ, для закусок и запекания"},
    {"id":1067,"name":"Пятачок свиной","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Носовая часть, для варки"},
    {"id":1068,"name":"Рыло свиное","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Вся лицевая часть"},
    
    // Субпродукты свиные
    {"id":1069,"name":"Печень свиная","calories":130,"protein":19,"fat":4.5,"carbs":3,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Более нежная чем говяжья"},
    {"id":1070,"name":"Сердце свиное","calories":118,"protein":16,"fat":5,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Плотное мясо, для начинок"},
    {"id":1071,"name":"Почки свиные","calories":90,"protein":14,"fat":3.5,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Мягче говяжьих"},
    {"id":1072,"name":"Язык свиной","calories":210,"protein":15,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Меньше и нежнее говяжьего"},
    {"id":1073,"name":"Легкое свиное","calories":85,"protein":15,"fat":2.5,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Губчатая структура"},
    {"id":1074,"name":"Селезенка свиная","calories":100,"protein":17,"fat":3.5,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Плотная текстура"},
    {"id":1075,"name":"Хвост свиной","calories":250,"protein":16,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Субпродукты","description":"Для бульона и холодца"},
    
    // Свиной фарш
    {"id":1076,"name":"Фарш свиной постный","calories":180,"protein":18,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Фарш","description":"Из карбонада и лопатки"},
    {"id":1077,"name":"Фарш свиной жирный","calories":350,"protein":13,"fat":33,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Фарш","description":"С грудинкой и брюшиной"},
    
    // ==================== БАРАНИНА (Более 30 позиций) ====================
    // Корейка и ребра
    {"id":1078,"name":"Корейка баранья","calories":250,"protein":16,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Корейка","description":"Для стейков и жарки"},
    {"id":1079,"name":"Ребра бараньи","calories":280,"protein":15,"fat":24,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Ребра","description":"Для BBQ и запекания"},
    {"id":1080,"name":"Стейк из ребер","calories":280,"protein":15,"fat":24,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Ребра","description":"Толстые ребра на кости"},
    
    // Окорок (нога)
    {"id":1081,"name":"Окорок бараний целый","calories":220,"protein":18,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Окорок","description":"Для запекания целиком"},
    {"id":1082,"name":"Нога баранья задняя","calories":220,"protein":18,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Окорок","description":"Сочная часть задней ноги"},
    {"id":1083,"name":"Нога баранья передняя","calories":210,"protein":17,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Окорок","description":"Менее жирная часть"},
    
    // Лопатка и шея
    {"id":1084,"name":"Лопатка баранья","calories":230,"protein":16,"fat":18,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Лопатка","description":"Для тушения и рагу"},
    {"id":1085,"name":"Шея баранья","calories":240,"protein":15,"fat":19,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Шея","description":"Сочная часть для шашлыка"},
    {"id":1086,"name":"Плечо баранье","calories":230,"protein":16,"fat":18,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Лопатка","description":"Для долгого тушения"},
    
    // Грудинка
    {"id":1087,"name":"Грудинка баранья","calories":320,"protein":14,"fat":29,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Грудинка","description":"Для супов и плова"},
    
    // Субпродукты бараньи
    {"id":1088,"name":"Печень баранья","calories":140,"protein":19,"fat":6,"carbs":2,"unit":"g","default":100,"animal":"Баранина","cut":"Субпродукты","description":"Нежная печень"},
    {"id":1089,"name":"Сердце баранье","calories":120,"protein":16,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Субпродукты","description":"Для шашлыка из сердца"},
    {"id":1090,"name":"Почки бараньи","calories":95,"protein":14,"fat":4,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Субпродукты","description":"Для пирогов"},
    {"id":1091,"name":"Язык бараний","calories":220,"protein":15,"fat":17,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Субпродукты","description":"Деликатес"},
    {"id":1092,"name":"Курдюк бараньий","calories":800,"protein":5,"fat":88,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Жир","description":"Чистый жир для плова"},
    
    // Стейки баранины
    {"id":1093,"name":"Лойн-стейк","calories":250,"protein":16,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Стейк","description":"Из корейки на кости"},
    {"id":1094,"name":"Рэм-стейк","calories":240,"protein":16,"fat":19,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Стейк","description":"Из лопатки"},
    {"id":1095,"name":"Стейк из ноги","calories":220,"protein":18,"fat":16,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Стейк","description":"Постный стейк"},
    
    // ==================== ПТИЦА (Более 35 позиций) ====================
    // Курица
    {"id":1096,"name":"Грудка куриная филе","calories":110,"protein":23,"fat":1.2,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Грудка","description":"Самая постная часть"},
    {"id":1097,"name":"Грудка куриная на кости","calories":120,"protein":22,"fat":3,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Грудка","description":"С кожей и костью, сочнее"},
    {"id":1098,"name":"Голень куриная","calories":150,"protein":19,"fat":8,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Голень","description":"Для запекания и жарки"},
    {"id":1099,"name":"Бедро куриное","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Бедро","description":"Сочная темная часть"},
    {"id":1100,"name":"Бедро куриное без кости","calories":160,"protein":19,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Бедро","description":"Для рулетов и начинок"},
    {"id":1101,"name":"Крылышки куриные","calories":200,"protein":18,"fat":14,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Крылья","description":"Для закусок и BBQ"},
    {"id":1102,"name":"Спинка куриная","calories":180,"protein":16,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Спинка","description":"Для бульона"},
    {"id":1103,"name":"Лапки куриные","calories":150,"protein":16,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Лапки","description":"Для холодца и студня"},
    {"id":1104,"name":"Курица целиком","calories":165,"protein":18,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Целиком","description":"Для запекания"},
    {"id":1105,"name":"Цыпленок бройлер","calories":165,"protein":18,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Целиком","description":"Молодой цыпленок"},
    {"id":1106,"name":"Субпродукты куриные (набор)","calories":150,"protein":16,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Субпродукты","description":"Сердце, печень, желудки"},
    {"id":1107,"name":"Печень куриная","calories":140,"protein":20,"fat":6,"carbs":2,"unit":"g","default":100,"animal":"Курица","cut":"Субпродукты","description":"Нежная, для паштетов"},
    {"id":1108,"name":"Желудки куриные","calories":120,"protein":18,"fat":4,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Субпродукты","description":"Для варки и тушения"},
    {"id":1109,"name":"Сердце куриное","calories":158,"protein":26,"fat":5,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Субпродукты","description":"Для шашлычка"},
    {"id":1110,"name":"Пуповинки куриные","calories":150,"protein":16,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Субпродукты","description":"Хрящи для бульона"},
    {"id":1111,"name":"Куриный фарш","calories":143,"protein":16,"fat":8.5,"carbs":0,"unit":"g","default":100,"animal":"Курица","cut":"Фарш","description":"Диетический фарш"},
    
    // Индейка
    {"id":1112,"name":"Грудка индейки филе","calories":84,"protein":19,"fat":0.7,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Грудка","description":"Самая постная часть птицы"},
    {"id":1113,"name":"Голень индейки","calories":140,"protein":18,"fat":7,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Голень","description":"Для запекания"},
    {"id":1114,"name":"Бедро индейки","calories":150,"protein":18,"fat":8,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Бедро","description":"Сочная темная часть"},
    {"id":1115,"name":"Крыло индейки","calories":180,"protein":17,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Крыло","description":"Для BBQ"},
    {"id":1116,"name":"Индейка целиком","calories":135,"protein":18,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Целиком","description":"Для запекания"},
    {"id":1117,"name":"Филе индейки медальоны","calories":84,"protein":19,"fat":0.7,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Филе","description":"Порционные кусочки"},
    {"id":1118,"name":"Фарш индейки","calories":150,"protein":18,"fat":8.5,"carbs":0,"unit":"g","default":100,"animal":"Индейка","cut":"Фарш","description":"Диетический фарш"},
    
    // Утка
    {"id":1119,"name":"Грудка утки","calories":337,"protein":19,"fat":28,"carbs":0,"unit":"g","default":100,"animal":"Утка","cut":"Грудка","description":"С жирной кожицей, для утиной грудки"},
    {"id":1120,"name":"Ножка утиная","calories":300,"protein":18,"fat":25,"carbs":0,"unit":"g","default":100,"animal":"Утка","cut":"Ножка","description":"Для конфи"},
    {"id":1121,"name":"Утка целиком","calories":337,"protein":19,"fat":28,"carbs":0,"unit":"g","default":100,"animal":"Утка","cut":"Целиком","description":"Для запекания"},
    {"id":1122,"name":"Утиный жир","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"animal":"Утка","cut":"Жир","description":"Для жарки"},
    {"id":1123,"name":"Печень утиная","calories":462,"protein":16,"fat":43,"carbs":2,"unit":"g","default":100,"animal":"Утка","cut":"Субпродукты","description":"Для фуа-гра"},
    
    // Гусь
    {"id":1124,"name":"Гусь целиком","calories":371,"protein":15,"fat":34,"carbs":0,"unit":"g","default":100,"animal":"Гусь","cut":"Целиком","description":"Для праздничного стола"},
    {"id":1125,"name":"Грудка гусиная","calories":350,"protein":16,"fat":31,"carbs":0,"unit":"g","default":100,"animal":"Гусь","cut":"Грудка","description":"Жирная часть"},
    {"id":1126,"name":"Гусиный жир","calories":900,"protein":0,"fat":100,"carbs":0,"unit":"g","default":100,"animal":"Гусь","cut":"Жир","description":"Для жарки"},
    
    // Перепел
    {"id":1127,"name":"Перепел целиком","calories":192,"protein":21,"fat":12,"carbs":0,"unit":"g","default":100,"animal":"Перепел","cut":"Целиком","description":"Для запекания"},
    {"id":1128,"name":"Перепелиная грудка","calories":180,"protein":22,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Перепел","cut":"Грудка","description":"Нежное мясо"},
    {"id":1129,"name":"Яйца перепелиные","calories":158,"protein":13,"fat":11,"carbs":0.6,"unit":"g","default":100,"animal":"Перепел","cut":"Яйца","description":"Мелкие яйца"},
    
    // Страус
    {"id":1130,"name":"Страус филе","calories":145,"protein":22,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Страус","cut":"Филе","description":"Красное мясо птицы, низкий холестерин"},
    {"id":1131,"name":"Страус стейк","calories":145,"protein":22,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Страус","cut":"Стейк","description":"Похож на говядину"},
    
    // ==================== КРОЛИК (6 позиций) ====================
    {"id":1132,"name":"Кролик целиком","calories":173,"protein":33,"fat":4,"carbs":0,"unit":"g","default":100,"animal":"Кролик","cut":"Целиком","description":"Диетическое мясо"},
    {"id":1133,"name":"Кролик задняя часть","calories":180,"protein":32,"fat":5.5,"carbs":0,"unit":"g","default":100,"animal":"Кролик","cut":"Задняя часть","description":"Более мясистая"},
    {"id":1134,"name":"Кролик передняя часть","calories":160,"protein":34,"fat":2.5,"carbs":0,"unit":"g","default":100,"animal":"Кролик","cut":"Передняя часть","description":"Постнее"},
    {"id":1135,"name":"Кролик спинка","calories":165,"protein":33,"fat":3.5,"carbs":0,"unit":"g","default":100,"animal":"Кролик","cut":"Спинка","description":"Лучшие отрубы"},
    {"id":1136,"name":"Кролик окорок","calories":180,"protein":31,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Кролик","cut":"Окорок","description":"Задняя нога"},
    {"id":1137,"name":"Печень кроличья","calories":140,"protein":19,"fat":6,"carbs":2,"unit":"g","default":100,"animal":"Кролик","cut":"Субпродукты","description":"Нежная печень"},
    
    // ==================== ДИЧЬ (6 позиций) ====================
    {"id":1138,"name":"Оленина вырезка","calories":150,"protein":22,"fat":6,"carbs":0,"unit":"g","default":100,"animal":"Оленина","cut":"Вырезка","description":"Красное диетическое мясо"},
    {"id":1139,"name":"Оленина окорок","calories":158,"protein":21,"fat":7.5,"carbs":0,"unit":"g","default":100,"animal":"Оленина","cut":"Окорок","description":"Для запекания"},
    {"id":1140,"name":"Лосятина вырезка","calories":146,"protein":23,"fat":5.5,"carbs":0,"unit":"g","default":100,"animal":"Лосятина","cut":"Вырезка","description":"Постное мясо"},
    {"id":1141,"name":"Лосятина окорок","calories":155,"protein":22,"fat":7,"carbs":0,"unit":"g","default":100,"animal":"Лосятина","cut":"Окорок","description":"Для тушения"},
    {"id":1142,"name":"Медвежатина","calories":200,"protein":20,"fat":13,"carbs":0,"unit":"g","default":100,"animal":"Медвежатина","cut":"Филе","description":"Специфический вкус"},
    {"id":1143,"name":"Кабанина","calories":210,"protein":18,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Кабан","cut":"Филе","description":"Жесткое мясо, требует вымачивания"},
    
    // ==================== КОНИНА (4 позиции) ====================
    {"id":1144,"name":"Конина вырезка","calories":150,"protein":21,"fat":7,"carbs":0,"unit":"g","default":100,"animal":"Конина","cut":"Вырезка","description":"Постное мясо"},
    {"id":1145,"name":"Конина окорок","calories":160,"protein":20,"fat":9,"carbs":0,"unit":"g","default":100,"animal":"Конина","cut":"Окорок","description":"Для запекания"},
    {"id":1146,"name":"Конина корейка","calories":155,"protein":20.5,"fat":8,"carbs":0,"unit":"g","default":100,"animal":"Конина","cut":"Корейка","description":"Для стейков"},
    {"id":1147,"name":"Конина лопатка","calories":165,"protein":19,"fat":10,"carbs":0,"unit":"g","default":100,"animal":"Конина","cut":"Лопатка","description":"Для тушения"},
    
    // ==================== МЯСНЫЕ СМЕСИ И ФАРШИ ====================
    {"id":1148,"name":"Фарш домашний (свинина+говядина)","calories":230,"protein":15,"fat":19,"carbs":0,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"Классический для котлет"},
    {"id":1149,"name":"Фарш по-домашнему (с луком)","calories":220,"protein":14,"fat":18,"carbs":4,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"С добавлением лука"},
    {"id":1150,"name":"Фарш по-итальянски","calories":250,"protein":14,"fat":21,"carbs":1,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"С зеленью и чесноком"},
    {"id":1151,"name":"Фарш для бургеров","calories":250,"protein":17,"fat":20,"carbs":0,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"Грубый помол"},
    {"id":1152,"name":"Люля-кебаб фарш","calories":300,"protein":15,"fat":26,"carbs":2,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"С курдючным жиром"},
    {"id":1153,"name":"Фарш для хинкали","calories":230,"protein":16,"fat":18,"carbs":1,"unit":"g","default":100,"animal":"Смесь","cut":"Фарш","description":"С зеленью и специями"},
    
    // ==================== СЫРОКОПЧЕНЫЕ ДЕЛИКАТЕСЫ ====================
    {"id":1154,"name":"Бастурма из говядины","calories":180,"protein":25,"fat":8,"carbs":1,"unit":"g","default":100,"animal":"Говядина","cut":"Деликатес","description":"Сыровяленое мясо со специями"},
    {"id":1155,"name":"Суджук","calories":350,"protein":18,"fat":30,"carbs":1,"unit":"g","default":100,"animal":"Смесь","cut":"Деликатес","description":"Острая колбаса"},
    {"id":1156,"name":"Пастрами из говядины","calories":150,"protein":24,"fat":5,"carbs":1,"unit":"g","default":100,"animal":"Говядина","cut":"Деликатес","description":"Запеченно-копченая"},
    {"id":1157,"name":"Свиная пастрами","calories":200,"protein":22,"fat":12,"carbs":1,"unit":"g","default":100,"animal":"Свинина","cut":"Деликатес","description":"Из свиной вырезки"},
    {"id":1158,"name":"Карпаччо из говядины","calories":160,"protein":20,"fat":8,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Деликатес","description":"Тонкие слайсы сырой говядины"},
    {"id":1159,"name":"Тартар из говядины","calories":200,"protein":18,"fat":14,"carbs":1,"unit":"g","default":100,"animal":"Говядина","cut":"Деликатес","description":"Рубленое сырое мясо с соусом"},
    
    // ==================== КОСТИ И ОСНОВЫ ДЛЯ БУЛЬОНА ====================
    {"id":1160,"name":"Кости говяжьи мозговые","calories":200,"protein":15,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Кости","description":"Для наваристого бульона"},
    {"id":1161,"name":"Кости говяжьи суповые","calories":180,"protein":14,"fat":13,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Кости","description":"Ассорти костей"},
    {"id":1162,"name":"Кости свиные","calories":250,"protein":12,"fat":22,"carbs":0,"unit":"g","default":100,"animal":"Свинина","cut":"Кости","description":"Для бульона и холодца"},
    {"id":1163,"name":"Набор для холодца","calories":200,"protein":15,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Смесь","cut":"Кости","description":"Ножки, губы, хвосты"},
    {"id":1164,"name":"Кости бараньи","calories":220,"protein":14,"fat":18,"carbs":0,"unit":"g","default":100,"animal":"Баранина","cut":"Кости","description":"Для шурпы и бульона"},
    {"id":1165,"name":"Мослы говяжьи","calories":200,"protein":15,"fat":15,"carbs":0,"unit":"g","default":100,"animal":"Говядина","cut":"Кости","description":"Большие мозговые кости"}
];
const RUSSIAN_DAIRY_PRODUCTS = [
    // ==================== ВИММ-БИЛЛЬ-ДАНН (PepsiCo) ====================
    // Бренды: Домик в деревне, Чудо, Весёлый Молочник, Bio Max, Иммунеле, Актуаль
    
    // Домик в деревне
    {"id":1200,"name":"Домик в деревне Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1201,"name":"Домик в деревне Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1202,"name":"Домик в деревне Молоко 1.5% 1л","calories":44,"protein":3,"fat":1.5,"carbs":4.8,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1203,"name":"Домик в деревне Молоко топленое 4% 1л","calories":67,"protein":3,"fat":4,"carbs":4.7,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1204,"name":"Домик в деревне Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Кефир"},
    {"id":1205,"name":"Домик в деревне Кефир 2.5% 1л","calories":53,"protein":3,"fat":2.5,"carbs":4,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Кефир"},
    {"id":1206,"name":"Домик в деревне Ряженка 2.5% 1л","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Ряженка"},
    {"id":1207,"name":"Домик в деревне Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Ряженка"},
    {"id":1208,"name":"Домик в деревне Сметана 15% 200г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сметана"},
    {"id":1209,"name":"Домик в деревне Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сметана"},
    {"id":1210,"name":"Домик в деревне Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Творог"},
    {"id":1211,"name":"Домик в деревне Творог 9% 200г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Творог"},
    {"id":1212,"name":"Домик в деревне Масло сливочное 72.5% 180г","calories":661,"protein":0.5,"fat":72.5,"carbs":0.5,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Масло"},
    {"id":1213,"name":"Домик в деревне Масло сливочное 82.5% 180г","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Масло"},
    {"id":1214,"name":"Домик в деревне Сливки 10% 500мл","calories":119,"protein":3,"fat":10,"carbs":4.3,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сливки"},
    {"id":1215,"name":"Домик в деревне Сливки 20% 500мл","calories":205,"protein":3,"fat":20,"carbs":4,"unit":"ml","default":100,"brand":"Домик в деревне","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сливки"},
    
    // Чудо
    {"id":1216,"name":"Чудо Йогурт питьевой клубника 3.2% 270г","calories":85,"protein":2.8,"fat":3.2,"carbs":11.5,"unit":"g","default":100,"brand":"Чудо","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Йогурт"},
    {"id":1217,"name":"Чудо Йогурт питьевой персик 3.2% 270г","calories":85,"protein":2.8,"fat":3.2,"carbs":11.5,"unit":"g","default":100,"brand":"Чудо","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Йогурт"},
    {"id":1218,"name":"Чудо Йогурт питьевой черника 3.2% 270г","calories":85,"protein":2.8,"fat":3.2,"carbs":11.5,"unit":"g","default":100,"brand":"Чудо","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Йогурт"},
    {"id":1219,"name":"Чудо Творожный сыр 5% 100г","calories":120,"protein":14,"fat":5,"carbs":5,"unit":"g","default":100,"brand":"Чудо","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сыр творожный"},
    
    // Весёлый молочник
    {"id":1220,"name":"Весёлый молочник Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Весёлый молочник","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1221,"name":"Весёлый молочник Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Весёлый молочник","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко"},
    {"id":1222,"name":"Весёлый молочник Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Весёлый молочник","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Кефир"},
    {"id":1223,"name":"Весёлый молочник Сметана 15% 200г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"brand":"Весёлый молочник","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Сметана"},
    {"id":1224,"name":"Весёлый молочник Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Весёлый молочник","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Творог"},
    
    // Bio Max
    {"id":1225,"name":"Bio Max Биойогурт питьевой 2.8% 270г","calories":67,"protein":3.2,"fat":2.8,"carbs":7.1,"unit":"g","default":100,"brand":"Bio Max","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Йогурт","tags":["био","пробиотики"]},
    
    // Иммунеле
    {"id":1226,"name":"Иммунеле Биойогурт 2.5% 200г","calories":65,"protein":2.8,"fat":2.5,"carbs":7.5,"unit":"g","default":100,"brand":"Иммунеле","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Йогурт","tags":["био","иммунитет"]},
    
    // Актуаль
    {"id":1227,"name":"Актуаль Молоко 3.2% 900мл","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Актуаль","manufacturer":"Вимм-Билль-Данн","region":"Россия","category":"Молоко","tags":["эконом"]},
    
    // ==================== ДАНОН (Россия) ====================
    // Бренды: Простоквашино, Danone, Activia, Actimel, Растишка, Тёма, Даниссимо
    
    // Простоквашино
    {"id":1228,"name":"Простоквашино Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Молоко"},
    {"id":1229,"name":"Простоквашино Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Молоко"},
    {"id":1230,"name":"Простоквашино Молоко 1.5% 1л","calories":44,"protein":3,"fat":1.5,"carbs":4.8,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Молоко"},
    {"id":1231,"name":"Простоквашино Молоко топленое 4% 930мл","calories":67,"protein":3,"fat":4,"carbs":4.7,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Молоко"},
    {"id":1232,"name":"Простоквашино Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Кефир"},
    {"id":1233,"name":"Простоквашино Кефир 2.5% 1л","calories":53,"protein":3,"fat":2.5,"carbs":4,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Кефир"},
    {"id":1234,"name":"Простоквашино Ряженка 2.5% 1л","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Ряженка"},
    {"id":1235,"name":"Простоквашино Ряженка 4% 930мл","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Ряженка"},
    {"id":1236,"name":"Простоквашино Сметана 15% 200г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Сметана"},
    {"id":1237,"name":"Простоквашино Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Сметана"},
    {"id":1238,"name":"Простоквашино Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Творог"},
    {"id":1239,"name":"Простоквашино Творог 9% 200г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Творог"},
    {"id":1240,"name":"Простоквашино Творог обезжиренный 200г","calories":70,"protein":16,"fat":0.5,"carbs":3,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Творог"},
    {"id":1241,"name":"Простоквашино Масло сливочное 82.5% 180г","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Масло"},
    {"id":1242,"name":"Простоквашино Глазированный сырок 23% 45г","calories":360,"protein":8,"fat":23,"carbs":30,"unit":"g","default":100,"brand":"Простоквашино","manufacturer":"Danon","region":"Россия","category":"Сырок"},
    
    // Activia
    {"id":1243,"name":"Activia Йогурт термостатный 1.5% 120г","calories":55,"protein":4,"fat":1.5,"carbs":6,"unit":"g","default":100,"brand":"Activia","manufacturer":"Danon","region":"Россия","category":"Йогурт","tags":["пробиотики"]},
    {"id":1244,"name":"Activia Питьевой йогурт клубника 1.5% 270г","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"unit":"g","default":100,"brand":"Activia","manufacturer":"Danon","region":"Россия","category":"Йогурт"},
    {"id":1245,"name":"Activia Питьевой йогурт черника 1.5% 270г","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"unit":"g","default":100,"brand":"Activia","manufacturer":"Danon","region":"Россия","category":"Йогурт"},
    
    // Actimel
    {"id":1246,"name":"Actimel Питьевой йогурт 1.5% 100мл","calories":62,"protein":2.8,"fat":1.5,"carbs":8.5,"unit":"ml","default":100,"brand":"Actimel","manufacturer":"Danon","region":"Россия","category":"Йогурт","tags":["иммунитет"]},
    
    // Растишка
    {"id":1247,"name":"Растишка Йогурт детский 3.2% 100г","calories":87,"protein":3.2,"fat":3.2,"carbs":11.5,"unit":"g","default":100,"brand":"Растишка","manufacturer":"Danon","region":"Россия","category":"Детское питание"},
    
    // Тёма
    {"id":1248,"name":"Тёма Творожок детский 4.5% 100г","calories":110,"protein":8,"fat":4.5,"carbs":9,"unit":"g","default":100,"brand":"Тёма","manufacturer":"Danon","region":"Россия","category":"Детское питание"},
    
    // Даниссимо
    {"id":1249,"name":"Даниссимо Йогурт термостатный 3.2% 120г","calories":93,"protein":4,"fat":3.2,"carbs":11,"unit":"g","default":100,"brand":"Даниссимо","manufacturer":"Danon","region":"Россия","category":"Йогурт"},
    
    // ==================== ЭКМАН (Альтернатива) ====================
    // Крупнейший частный молочный холдинг
    {"id":1250,"name":"Экман Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Молоко"},
    {"id":1251,"name":"Экман Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Молоко"},
    {"id":1252,"name":"Экман Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Кефир"},
    {"id":1253,"name":"Экман Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Ряженка"},
    {"id":1254,"name":"Экман Сметана 15% 200г","calories":162,"protein":2.5,"fat":15,"carbs":3.4,"unit":"g","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Сметана"},
    {"id":1255,"name":"Экман Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Творог"},
    {"id":1256,"name":"Экман Масло сливочное 82.5% 180г","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"unit":"g","default":100,"brand":"Экман","manufacturer":"Экман","region":"Россия","category":"Масло"},
    
    // ==================== ПИСКАРЁВСКИЙ МОЛОЧНЫЙ ЗАВОД (Санкт-Петербург) ====================
    {"id":1257,"name":"Пискарёвское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Пискарёвское","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Молоко"},
    {"id":1258,"name":"Пискарёвское Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Пискарёвское","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Молоко"},
    {"id":1259,"name":"Пискарёвское Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Пискарёвское","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Кефир"},
    {"id":1260,"name":"Пискарёвское Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Пискарёвское","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Ряженка"},
    {"id":1261,"name":"Пискарёвское Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Пискарёвское","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Сметана"},
    {"id":1262,"name":"Пискарёвский Творог 9% 200г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"brand":"Пискарёвский","manufacturer":"Пискарёвский МЗ","region":"Санкт-Петербург","category":"Творог"},
    
    // ==================== ВОЛЖАНИН (Волгоград) ====================
    {"id":1263,"name":"Волжанин Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Волжанин","manufacturer":"Волжанин","region":"Волгоград","category":"Молоко"},
    {"id":1264,"name":"Волжанин Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Волжанин","manufacturer":"Волжанин","region":"Волгоград","category":"Молоко"},
    {"id":1265,"name":"Волжанин Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Волжанин","manufacturer":"Волжанин","region":"Волгоград","category":"Кефир"},
    {"id":1266,"name":"Волжанин Бифидок 1л","calories":55,"protein":3,"fat":2.5,"carbs":5,"unit":"ml","default":100,"brand":"Волжанин","manufacturer":"Волжанин","region":"Волгоград","category":"Кисломолочный","tags":["био","бифидобактерии"]},
    
    // ==================== РОСТАГРОЭКСПОРТ (РОСТАГРО) ====================
    {"id":1267,"name":"Ростагро Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Ростагро","manufacturer":"Ростагроэкспорт","region":"Московская обл.","category":"Молоко"},
    {"id":1268,"name":"Ростагро Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Ростагро","manufacturer":"Ростагроэкспорт","region":"Московская обл.","category":"Молоко"},
    {"id":1269,"name":"Ростагро Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Ростагро","manufacturer":"Ростагроэкспорт","region":"Московская обл.","category":"Кефир"},
    {"id":1270,"name":"Ростагро Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Ростагро","manufacturer":"Ростагроэкспорт","region":"Московская обл.","category":"Ряженка"},
    
    // ==================== ОСТАНКИНСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Москва) ====================
    {"id":1271,"name":"Останкинское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Останкинское","manufacturer":"Останкинский МК","region":"Москва","category":"Молоко"},
    {"id":1272,"name":"Останкинское Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Останкинское","manufacturer":"Останкинский МК","region":"Москва","category":"Молоко"},
    {"id":1273,"name":"Останкинский Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Останкинский","manufacturer":"Останкинский МК","region":"Москва","category":"Кефир"},
    
    // ==================== ЛИАНОЗОВСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Москва) ====================
    {"id":1274,"name":"Лианозовское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Лианозовское","manufacturer":"Лианозовский МК","region":"Москва","category":"Молоко"},
    {"id":1275,"name":"Лианозовский Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Лианозовский","manufacturer":"Лианозовский МК","region":"Москва","category":"Кефир"},
    {"id":1276,"name":"Лианозовский Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Лианозовский","manufacturer":"Лианозовский МК","region":"Москва","category":"Творог"},
    
    // ==================== ЦАРИЦЫНСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Волгоград) ====================
    {"id":1277,"name":"Царицынское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Царицынское","manufacturer":"Царицынский МК","region":"Волгоград","category":"Молоко"},
    {"id":1278,"name":"Царицынское Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Царицынское","manufacturer":"Царицынский МК","region":"Волгоград","category":"Кефир"},
    
    // ==================== КАЛОРИЯ (Краснодар) ====================
    {"id":1279,"name":"Калория Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Калория","manufacturer":"Калория","region":"Краснодар","category":"Молоко"},
    {"id":1280,"name":"Калория Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Калория","manufacturer":"Калория","region":"Краснодар","category":"Кефир"},
    {"id":1281,"name":"Калория Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Калория","manufacturer":"Калория","region":"Краснодар","category":"Ряженка"},
    {"id":1282,"name":"Калория Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Калория","manufacturer":"Калория","region":"Краснодар","category":"Сметана"},
    {"id":1283,"name":"Калория Творог 9% 200г","calories":159,"protein":16,"fat":9,"carbs":3,"unit":"g","default":100,"brand":"Калория","manufacturer":"Калория","region":"Краснодар","category":"Творог"},
    
    // ==================== САРАНСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Мордовия) ====================
    {"id":1284,"name":"Саранский Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Саранский","manufacturer":"Саранский МК","region":"Мордовия","category":"Молоко"},
    {"id":1285,"name":"Саранский Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Саранский","manufacturer":"Саранский МК","region":"Мордовия","category":"Кефир"},
    
    // ==================== КУБАНСКАЯ БУРЁНКА (Краснодар) ====================
    {"id":1286,"name":"Кубанская Бурёнка Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Кубанская Бурёнка","manufacturer":"Кубанская Бурёнка","region":"Краснодар","category":"Молоко"},
    {"id":1287,"name":"Кубанская Бурёнка Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Кубанская Бурёнка","manufacturer":"Кубанская Бурёнка","region":"Краснодар","category":"Кефир"},
    {"id":1288,"name":"Кубанская Бурёнка Топлёное молоко 4% 1л","calories":67,"protein":3,"fat":4,"carbs":4.7,"unit":"ml","default":100,"brand":"Кубанская Бурёнка","manufacturer":"Кубанская Бурёнка","region":"Краснодар","category":"Молоко"},
    
    // ==================== СЕВЕРНАЯ ДОЛИНА (Приморский край) ====================
    {"id":1289,"name":"Северная долина Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Северная долина","manufacturer":"Северная долина","region":"Приморский край","category":"Молоко"},
    {"id":1290,"name":"Северная долина Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Северная долина","manufacturer":"Северная долина","region":"Приморский край","category":"Кефир"},
    {"id":1291,"name":"Северная долина Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Северная долина","manufacturer":"Северная долина","region":"Приморский край","category":"Сметана"},
    
    // ==================== ЗДРАВУШКА (Алтай) ====================
    {"id":1292,"name":"Здравушка Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Здравушка","manufacturer":"Здравушка","region":"Алтай","category":"Молоко"},
    {"id":1293,"name":"Здравушка Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Здравушка","manufacturer":"Здравушка","region":"Алтай","category":"Кефир"},
    {"id":1294,"name":"Здравушка Благода Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Здравушка","manufacturer":"Здравушка","region":"Алтай","category":"Творог"},
    
    // ==================== СТАВРОПОЛЬСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Ставрополь) ====================
    {"id":1295,"name":"Ставропольское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Ставропольское","manufacturer":"Ставропольский МК","region":"Ставрополь","category":"Молоко"},
    {"id":1296,"name":"Ставропольский Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Ставропольский","manufacturer":"Ставропольский МК","region":"Ставрополь","category":"Кефир"},
    
    // ==================== ЕКАТЕРИНБУРГСКИЙ МОЛОЧНЫЙ КОМБИНАТ (Урал) ====================
    {"id":1297,"name":"Уральское Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Уральское","manufacturer":"Екатеринбургский МК","region":"Урал","category":"Молоко"},
    {"id":1298,"name":"Уральский Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Уральский","manufacturer":"Екатеринбургский МК","region":"Урал","category":"Кефир"},
    
    // ==================== ВКУСНОТЕЕВО (Московская обл.) ====================
    {"id":1299,"name":"Вкуснотеево Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Вкуснотеево","manufacturer":"Вкуснотеево","region":"Московская обл.","category":"Молоко"},
    {"id":1300,"name":"Вкуснотеево Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Вкуснотеево","manufacturer":"Вкуснотеево","region":"Московская обл.","category":"Молоко"},
    {"id":1301,"name":"Вкуснотеево Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Вкуснотеево","manufacturer":"Вкуснотеево","region":"Московская обл.","category":"Кефир"},
    {"id":1302,"name":"Вкуснотеево Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Вкуснотеево","manufacturer":"Вкуснотеево","region":"Московская обл.","category":"Творог"},
    
    // ==================== СЛАВЯНСКИЕ ТРАДИЦИИ (Славянск-на-Кубани) ====================
    {"id":1303,"name":"Славянские традиции Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Славянские традиции","manufacturer":"Славянские традиции","region":"Краснодар","category":"Молоко"},
    {"id":1304,"name":"Славянские традиции Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Славянские традиции","manufacturer":"Славянские традиции","region":"Краснодар","category":"Кефир"},
    {"id":1305,"name":"Славянские традиции Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Славянские традиции","manufacturer":"Славянские традиции","region":"Краснодар","category":"Ряженка"},
    {"id":1306,"name":"Славянские традиции Сметана 20% 200г","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"unit":"g","default":100,"brand":"Славянские традиции","manufacturer":"Славянские традиции","region":"Краснодар","category":"Сметана"},
    
    // ==================== АВИДА (Белгород) ====================
    {"id":1307,"name":"Авида Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Авида","manufacturer":"Авида","region":"Белгород","category":"Молоко"},
    {"id":1308,"name":"Авида Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Авида","manufacturer":"Авида","region":"Белгород","category":"Кефир"},
    
    // ==================== ЛЕТО (по всей России) ====================
    {"id":1309,"name":"Лето Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Лето","manufacturer":"Лето","region":"Россия","category":"Молоко","tags":["эконом"]},
    {"id":1310,"name":"Лето Молоко 2.5% 1л","calories":52,"protein":2.8,"fat":2.5,"carbs":4.7,"unit":"ml","default":100,"brand":"Лето","manufacturer":"Лето","region":"Россия","category":"Молоко","tags":["эконом"]},
    {"id":1311,"name":"Лето Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Лето","manufacturer":"Лето","region":"Россия","category":"Кефир","tags":["эконом"]},
    
    // ==================== ЗОЛОТАЯ БУРЁНКА ====================
    {"id":1312,"name":"Золотая бурёнка Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Золотая бурёнка","manufacturer":"Золотая бурёнка","region":"Россия","category":"Молоко"},
    {"id":1313,"name":"Золотая бурёнка Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Золотая бурёнка","manufacturer":"Золотая бурёнка","region":"Россия","category":"Кефир"},
    
    // ==================== СЕЛЬСКОЕ ПОДВОРЬЕ ====================
    {"id":1314,"name":"Сельское подворье Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Сельское подворье","manufacturer":"Сельское подворье","region":"Россия","category":"Молоко"},
    {"id":1315,"name":"Сельское подворье Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Сельское подворье","manufacturer":"Сельское подворье","region":"Россия","category":"Кефир"},
    {"id":1316,"name":"Сельское подворье Творог 5% 200г","calories":121,"protein":15,"fat":5,"carbs":3,"unit":"g","default":100,"brand":"Сельское подворье","manufacturer":"Сельское подворье","region":"Россия","category":"Творог"},
    
    // ==================== ДАЛЬНЕВОСТОЧНЫЙ МОЛОЧНЫЙ КОМБИНАТ (Хабаровск) ====================
    {"id":1317,"name":"Дальневосточное Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Дальневосточное","manufacturer":"ДВ МК","region":"Хабаровск","category":"Молоко"},
    {"id":1318,"name":"Дальневосточный Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Дальневосточный","manufacturer":"ДВ МК","region":"Хабаровск","category":"Кефир"},
    
    // ==================== СИБИРСКАЯ БУРЁНКА (Сибирь) ====================
    {"id":1319,"name":"Сибирская бурёнка Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Сибирская бурёнка","manufacturer":"Сибирская бурёнка","region":"Сибирь","category":"Молоко"},
    {"id":1320,"name":"Сибирская бурёнка Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Сибирская бурёнка","manufacturer":"Сибирская бурёнка","region":"Сибирь","category":"Кефир"},
    
    // ==================== ВОЗРОЖДЕНИЕ (Хакасия) ====================
    {"id":1321,"name":"Возрождение Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Возрождение","manufacturer":"Возрождение","region":"Хакасия","category":"Молоко"},
    
    // ==================== СВЯТОГОР (Московская обл.) ====================
    {"id":1322,"name":"Святогор Сыр творожный 5% 100г","calories":120,"protein":14,"fat":5,"carbs":5,"unit":"g","default":100,"brand":"Святогор","manufacturer":"Святогор","region":"Московская обл.","category":"Сыр творожный"},
    {"id":1323,"name":"Святогор Йогурт греческий 2% 100г","calories":65,"protein":10,"fat":2,"carbs":3.5,"unit":"g","default":100,"brand":"Святогор","manufacturer":"Святогор","region":"Московская обл.","category":"Йогурт","tags":["греческий","высокобелковый"]},
    
    // ==================== ЛАКТИКА (по всей России) ====================
    {"id":1324,"name":"Лактика Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Лактика","manufacturer":"Лактика","region":"Россия","category":"Молоко"},
    {"id":1325,"name":"Лактика Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Лактика","manufacturer":"Лактика","region":"Россия","category":"Кефир"},
    
    // ==================== БАЛТКОМЮНИОН (Калининград) ====================
    {"id":1326,"name":"Балткомюнион Молоко 3.2% 1л","calories":60,"protein":3.2,"fat":3.2,"carbs":4.8,"unit":"ml","default":100,"brand":"Балткомюнион","manufacturer":"Балткомюнион","region":"Калининград","category":"Молоко"},
    {"id":1327,"name":"Балткомюнион Кефир 3.2% 1л","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"unit":"ml","default":100,"brand":"Балткомюнион","manufacturer":"Балткомюнион","region":"Калининград","category":"Кефир"},
    {"id":1328,"name":"Балткомюнион Ряженка 4% 1л","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"unit":"ml","default":100,"brand":"Балткомюнион","manufacturer":"Балткомюнион","region":"Калининград","category":"Ряженка"}
];
const KINDER_PRODUCTS = [
    // KINDER CHOCOLATE (классика)
    {"id":2000,"name":"Kinder Chocolate","calories":566,"protein":8.7,"fat":35,"carbs":53.5,"unit":"g","default":100,"brand":"Kinder","series":"Chocolate"},
    {"id":2001,"name":"Kinder Chocolate Mini","calories":566,"protein":8.7,"fat":35,"carbs":53.5,"unit":"g","default":100,"brand":"Kinder","series":"Chocolate"},
    {"id":2002,"name":"Kinder Maxi","calories":566,"protein":8.7,"fat":35,"carbs":53.5,"unit":"g","default":100,"brand":"Kinder","series":"Chocolate"},
    {"id":2003,"name":"Kinder Duplo","calories":575,"protein":7.5,"fat":37,"carbs":51,"unit":"g","default":100,"brand":"Kinder","series":"Duplo"},
    {"id":2004,"name":"Kinder Duplo White","calories":580,"protein":7,"fat":38,"carbs":50,"unit":"g","default":100,"brand":"Kinder","series":"Duplo"},
    {"id":2005,"name":"Kinder Duplo Dark","calories":570,"protein":7.5,"fat":36.5,"carbs":51.5,"unit":"g","default":100,"brand":"Kinder","series":"Duplo"},
    
    // KINDER SURPRISE (яйца)
    {"id":2006,"name":"Kinder Surprise 20г","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2007,"name":"Kinder Surprise Maxi 100г","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2008,"name":"Kinder Surprise 3D","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2009,"name":"Kinder Surprise Disney","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2010,"name":"Kinder Surprise Marvel","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2011,"name":"Kinder Surprise DC Comics","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2012,"name":"Kinder Surprise Barbie","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    {"id":2013,"name":"Kinder Surprise Hot Wheels","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Surprise"},
    
    // KINDER JOY (яйцо с ложкой и игрушкой)
    {"id":2014,"name":"Kinder Joy","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Joy"},
    {"id":2015,"name":"Kinder Joy Girls","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Joy"},
    {"id":2016,"name":"Kinder Joy Boys","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Joy"},
    {"id":2017,"name":"Kinder Joy Disney Princess","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Joy"},
    {"id":2018,"name":"Kinder Joy Paw Patrol","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Joy"},
    
    // KINDER BUENO (вафельные батончики)
    {"id":2019,"name":"Kinder Bueno 43г","calories":590,"protein":8,"fat":39,"carbs":51,"unit":"g","default":100,"brand":"Kinder","series":"Bueno"},
    {"id":2020,"name":"Kinder Bueno Mini 15г","calories":590,"protein":8,"fat":39,"carbs":51,"unit":"g","default":100,"brand":"Kinder","series":"Bueno"},
    {"id":2021,"name":"Kinder Bueno White","calories":595,"protein":7.8,"fat":39.5,"carbs":50.5,"unit":"g","default":100,"brand":"Kinder","series":"Bueno"},
    {"id":2022,"name":"Kinder Bueno Dark","calories":585,"protein":8.2,"fat":38.5,"carbs":51.5,"unit":"g","default":100,"brand":"Kinder","series":"Bueno"},
    {"id":2023,"name":"Kinder Bueno Ice Cream (мороженое)","calories":320,"protein":4,"fat":18,"carbs":35,"unit":"g","default":100,"brand":"Kinder","series":"Bueno"},
    
    // KINDER PINGUI (молочные десерты)
    {"id":2024,"name":"Kinder Pinguí","calories":310,"protein":5,"fat":18,"carbs":32,"unit":"g","default":100,"brand":"Kinder","series":"Pinguí"},
    {"id":2025,"name":"Kinder Pinguí Caramel","calories":315,"protein":4.8,"fat":18.5,"carbs":32.5,"unit":"g","default":100,"brand":"Kinder","series":"Pinguí"},
    {"id":2026,"name":"Kinder Pinguí Cacao","calories":312,"protein":5.1,"fat":18.2,"carbs":32.2,"unit":"g","default":100,"brand":"Kinder","series":"Pinguí"},
    {"id":2027,"name":"Kinder Pinguí Strawberry","calories":310,"protein":5,"fat":18,"carbs":32,"unit":"g","default":100,"brand":"Kinder","series":"Pinguí"},
    
    // KINDER CARDS (печенье)
    {"id":2028,"name":"Kinder Cards","calories":540,"protein":7,"fat":34,"carbs":54,"unit":"g","default":100,"brand":"Kinder","series":"Cards"},
    {"id":2029,"name":"Kinder Cards Dark","calories":538,"protein":7.2,"fat":33.5,"carbs":54.5,"unit":"g","default":100,"brand":"Kinder","series":"Cards"},
    
    // KINDER SCHOKO-BONS (конфеты)
    {"id":2030,"name":"Kinder Schoko-Bons","calories":570,"protein":8.5,"fat":38,"carbs":50,"unit":"g","default":100,"brand":"Kinder","series":"Schoko-Bons"},
    {"id":2031,"name":"Kinder Schoko-Bons White","calories":575,"protein":8.3,"fat":38.5,"carbs":49.5,"unit":"g","default":100,"brand":"Kinder","series":"Schoko-Bons"},
    
    // KINDER COUNTRY (хрустящий батончик)
    {"id":2032,"name":"Kinder Country","calories":535,"protein":7,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Kinder","series":"Country"},
    {"id":2033,"name":"Kinder Country Mini","calories":535,"protein":7,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Kinder","series":"Country"},
    
    // KINDER HAPPY SNACK (перекус для детей)
    {"id":2034,"name":"Kinder Happy Snack","calories":460,"protein":9,"fat":28,"carbs":45,"unit":"g","default":100,"brand":"Kinder","series":"Happy Snack"},
    {"id":2035,"name":"Kinder Happy Hippo","calories":530,"protein":7.5,"fat":35,"carbs":50,"unit":"g","default":100,"brand":"Kinder","series":"Happy Hippo"},
    {"id":2036,"name":"Kinder Happy Hippo Cacao","calories":532,"protein":7.4,"fat":35.2,"carbs":49.8,"unit":"g","default":100,"brand":"Kinder","series":"Happy Hippo"},
    {"id":2037,"name":"Kinder Happy Hippo White","calories":535,"protein":7.3,"fat":35.5,"carbs":49.5,"unit":"g","default":100,"brand":"Kinder","series":"Happy Hippo"},
    
    // KINDER BRIOS (сэндвичи для детей)
    {"id":2038,"name":"Kinder Brios","calories":420,"protein":7,"fat":24,"carbs":45,"unit":"g","default":100,"brand":"Kinder","series":"Brios"},
    {"id":2039,"name":"Kinder Brios Cacao","calories":422,"protein":6.9,"fat":24.2,"carbs":45.2,"unit":"g","default":100,"brand":"Kinder","series":"Brios"},
    
    // KINDER TOGO (продукция для перекуса "на ходу")
    {"id":2040,"name":"Kinder ToGo Chocolate","calories":560,"protein":8.5,"fat":36,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"ToGo"},
    {"id":2041,"name":"Kinder ToGo Bueno","calories":585,"protein":8,"fat":38.5,"carbs":51,"unit":"g","default":100,"brand":"Kinder","series":"ToGo"},
    
    // KINDER Рождественские и праздничные наборы
    {"id":2042,"name":"Kinder Advent Calendar","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Seasonal"},
    {"id":2043,"name":"Kinder Easter Egg","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Seasonal"},
    {"id":2044,"name":"Kinder Christmas Snowman","calories":550,"protein":8.2,"fat":36,"carbs":51.8,"unit":"g","default":100,"brand":"Kinder","series":"Seasonal"},
    {"id":2045,"name":"Kinder Valentine Heart","calories":560,"protein":8.5,"fat":35,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Seasonal"},
    
    // KINDER Мультиупаковки (для удобства бота — отдельные позиции)
    {"id":2046,"name":"Kinder Chocolate Multipack 10x","calories":566,"protein":8.7,"fat":35,"carbs":53.5,"unit":"g","default":100,"brand":"Kinder","series":"Multipack"},
    {"id":2047,"name":"Kinder Bueno Multipack 8x","calories":590,"protein":8,"fat":39,"carbs":51,"unit":"g","default":100,"brand":"Kinder","series":"Multipack"},
    {"id":2048,"name":"Kinder Surprise Multipack 3x","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Multipack"},
    {"id":2049,"name":"Kinder Schoko-Bons Pouch 16x","calories":570,"protein":8.5,"fat":38,"carbs":50,"unit":"g","default":100,"brand":"Kinder","series":"Multipack"},
    
    // ОГРАНИЧЕННЫЕ СЕРИИ (специальные коллекции)
    {"id":2050,"name":"Kinder Surprise Smurfs","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Limited"},
    {"id":2051,"name":"Kinder Surprise Harry Potter","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Limited"},
    {"id":2052,"name":"Kinder Surprise Pokémon","calories":545,"protein":8,"fat":35.5,"carbs":52,"unit":"g","default":100,"brand":"Kinder","series":"Limited"},
    {"id":2053,"name":"Kinder Joy Mario Kart","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Limited"},
    {"id":2054,"name":"Kinder Joy Frozen","calories":540,"protein":7.5,"fat":36,"carbs":53,"unit":"g","default":100,"brand":"Kinder","series":"Limited"}
];
const MARMELADE_PRODUCTS = [
    // HARIBO (Германия) — самый известный бренд мармелада
    {"id":3000,"name":"Haribo Goldbären (Золотые мишки)","calories":330,"protein":6.9,"fat":0,"carbs":77,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavors":"клубника, малина, ананас, апельсин, лимон, яблоко"},
    {"id":3001,"name":"Haribo Happy-Cola","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavor":"кола"},
    {"id":3002,"name":"Haribo Tropifrutti","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavors":"экзотические фрукты"},
    {"id":3003,"name":"Haribo Fruity-Frutti","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavors":"фруктовое ассорти"},
    {"id":3004,"name":"Haribo Sour Safties","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"кислый","flavors":"фруктовые кислые"},
    {"id":3005,"name":"Haribo Starmix","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"микс","description":"мишки, кола, кольца, зайцы"},
    {"id":3006,"name":"Haribo Pico-Balla","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavor":"фруктовый"},
    {"id":3007,"name":"Haribo Fruity-Bussi","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavors":"фруктовые поцелуи"},
    {"id":3008,"name":"Haribo Schnatter Schnecken","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","flavor":"улитки"},
    {"id":3009,"name":"Haribo Chamallows","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"зефир/маршмэллоу"},
    
    // MAMBA (Германия)
    {"id":3010,"name":"Mamba Frümeladki сочный центр","calories":340,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Mamba","type":"жевательный","feature":"начинка внутри"},
    {"id":3011,"name":"Mamba клубника","calories":340,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Mamba","type":"жевательный","flavor":"клубника"},
    {"id":3012,"name":"Mamba малина","calories":340,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Mamba","type":"жевательный","flavor":"малина"},
    {"id":3013,"name":"Mamba вишня","calories":340,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Mamba","type":"жевательный","flavor":"вишня"},
    {"id":3014,"name":"Mamba Fruit & Yogurt","calories":340,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Mamba","type":"жевательный","flavor":"фрукт + йогурт"},
    
    // БОН ПАРИ (Bon Pari)
    {"id":3015,"name":"Bon Pari Фруттифа","calories":330,"protein":4,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Bon Pari","type":"жевательный","feature":"фруктовые дольки"},
    {"id":3016,"name":"Bon Pari Машинки","calories":330,"protein":4,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Bon Pari","type":"жевательный","shape":"машинки"},
    {"id":3017,"name":"Bon Pari Зверюшки","calories":330,"protein":4,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Bon Pari","type":"жевательный","shape":"животные"},
    {"id":3018,"name":"Bon Pari Фру-Фру мишки","calories":330,"protein":4,"fat":0,"carbs":80,"unit":"g","default":100,"brand":"Bon Pari","type":"жевательный","shape":"мишки"},
    
    // MAHEEВЪ (Mахеевъ) — российский бренд
    {"id":3019,"name":"Махеевъ Мармелад желейный Фруктово-ягодный","calories":310,"protein":0,"fat":0,"carbs":78.7,"unit":"g","default":100,"brand":"Махеевъ","type":"желейный","flavors":"малина, яблоко, лимон, персик, апельсин, клубника","features":"6 форм и вкусов"},
    {"id":3020,"name":"Махеевъ Мармелад желейный Тропические вкусы","calories":310,"protein":0,"fat":0,"carbs":78.7,"unit":"g","default":100,"brand":"Махеевъ","type":"желейный","flavors":"ананас, маракуйя, грейпфрут, апельсин, лимон, микс"},
    {"id":3021,"name":"Махеевъ Мармелад Фруктовый микс","calories":320,"protein":0,"fat":0.1,"carbs":80,"unit":"g","default":100,"brand":"Махеевъ","type":"желейный","flavors":"малина, яблоко"},
    {"id":3022,"name":"Махеевъ Мармелад Цитрусовый микс","calories":320,"protein":0,"fat":0.1,"carbs":80,"unit":"g","default":100,"brand":"Махеевъ","type":"желейный","flavors":"лимон, апельсин"},
    
    // FRUTTARE (Италия/Россия)
    {"id":3023,"name":"Fruittarella","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Fruittarella","type":"жевательный","feature":"итальянский мармелад"},
    {"id":3024,"name":"Fruittella Медвежата","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Fruittella","type":"жевательный","shape":"мишки"},
    
    // FINI (Испания)
    {"id":3025,"name":"Fini Яичница","calories":334,"protein":4.5,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Fini","type":"жевательный","shape":"яичница"},
    {"id":3026,"name":"Fini Червячки в сахаре","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Fini","type":"жевательный","shape":"червячки"},
    {"id":3027,"name":"Fini Ягоды голубые в обсыпке","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Fini","type":"жевательный","shape":"ягоды"},
    {"id":3028,"name":"Fini Клубника","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Fini","type":"жевательный","flavor":"клубника"},
    {"id":3029,"name":"Fini Малина","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Fini","type":"жевательный","flavor":"малина"},
    
    // DAMEL (Испания)
    {"id":3030,"name":"Damel Червячки в сахаре","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Damel","type":"жевательный","shape":"червячки"},
    {"id":3031,"name":"Damel Мишки","calories":334,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Damel","type":"жевательный","shape":"мишки"},
    
    // FRUITS (Россия)
    {"id":3032,"name":"Fruits Батончики фруктовые","calories":320,"protein":2,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Fruits","type":"фруктовый","feature":"на основе фруктового пюре"},
    
    // ТРОПИЧЕСКИЕ ЗМЕЙКИ (Азовская КФ)
    {"id":3033,"name":"Тропические Змейки","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"змейки"},
    {"id":3034,"name":"Мармелад в форме медведей","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"мишки"},
    {"id":3035,"name":"Тропические фрукты (фигурный)","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"фрукты"},
    {"id":3036,"name":"Кола (фигурный)","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","flavor":"кола","shape":"бутылочки"},
    {"id":3037,"name":"Динозавры","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"динозавры"},
    {"id":3038,"name":"Сердечки","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"сердечки"},
    {"id":3039,"name":"Дельфины, Акулы","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"морские обитатели"},
    {"id":3040,"name":"Гонки (машинки)","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"машинки"},
    {"id":3041,"name":"Зоопарк","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"животные"},
    {"id":3042,"name":"Крокодилы","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"крокодилы"},
    {"id":3043,"name":"Кислые гусенички","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"кислый","shape":"гусеницы"},
    {"id":3044,"name":"Соски","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Азовская КФ","type":"жевательный","shape":"пустышки"},
    
    // Confectum (Россия)
    {"id":3045,"name":"Confectum funny 3D Утята","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Confectum","type":"жевательный","shape":"утята в яйце","flavors":"черника, яблоко, клубника, ананас, ваниль"},
    
    // FRANCAIS (Азовская КФ)
    {"id":3046,"name":"Francais Voyage суфле ванильное","calories":350,"protein":3,"fat":0,"carbs":85,"unit":"g","default":100,"brand":"Francais","type":"суфле","flavor":"ваниль"},
    
    // ЛАКРИЧНЫЙ МАРМЕЛАД (лакрица/солодка)
    {"id":3047,"name":"Dolci Capricci Ягодки лакричные","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Dolci Capricci","type":"лакрица","flavor":"солодка","country":"Италия"},
    {"id":3048,"name":"Лакричные червячки","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"лакрица","flavor":"солодка"},
    {"id":3049,"name":"Лакричные палочки","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"лакрица","flavor":"солодка"},
    
    // ВКУСВИЛЛ
    {"id":3050,"name":"ВкусВилл Мармелад Фруктовый микс","calories":300,"protein":2,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"ВкусВилл","type":"фруктовый"},
    {"id":3051,"name":"ВкусВилл Жевательный мармелад Haribo косточки","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Haribo","type":"жевательный","shape":"косточки"},
    {"id":3052,"name":"ВкусВилл Желе Orihiro конняку","calories":80,"protein":0,"fat":0,"carbs":20,"unit":"g","default":100,"brand":"Orihiro","type":"конняку","country":"Япония"},
    {"id":3053,"name":"ВкусВилл Мармелад Лаврушин Вороника","calories":300,"protein":2,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"Лаврушин","type":"фруктовый"},
    {"id":3054,"name":"ВкусВилл Fazer Green Jellies","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Fazer","type":"жевательный","country":"Финляндия"},
    
    // ЧУПА-ЧУПС (Chupa Chups)
    {"id":3055,"name":"Chupa Chups Sour Tubes Mini","calories":350,"protein":3,"fat":0,"carbs":85,"unit":"g","default":100,"brand":"Chupa Chups","type":"кислый","shape":"трубочки"},
    
    // CRAZY PARTY
    {"id":3056,"name":"Crazy Party Тропические фрукты","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"Crazy Party","type":"жевательный","flavors":"тропические фрукты"},
    
    // МАРМЕЛАД ПО ВКУСАМ (обобщенные позиции из ТУ)
    {"id":3057,"name":"Мармелад жевательный Абрикос","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"абрикос"},
    {"id":3058,"name":"Мармелад жевательный Ананас","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"ананас"},
    {"id":3059,"name":"Мармелад жевательный Апельсин","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"апельсин"},
    {"id":3060,"name":"Мармелад жевательный Арбуз","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"арбуз"},
    {"id":3061,"name":"Мармелад жевательный Банан","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"банан"},
    {"id":3062,"name":"Мармелад жевательный Барбарис","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"барбарис"},
    {"id":3063,"name":"Мармелад жевательный Вишня","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"вишня"},
    {"id":3064,"name":"Мармелад жевательный Виноград","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"виноград"},
    {"id":3065,"name":"Мармелад жевательный Грейпфрут","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"грейпфрут"},
    {"id":3066,"name":"Мармелад жевательный Груша","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"груша"},
    {"id":3067,"name":"Мармелад жевательный Дыня","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"дыня"},
    {"id":3068,"name":"Мармелад жевательный Клубника","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"клубника"},
    {"id":3069,"name":"Мармелад жевательный Киви","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"киви"},
    {"id":3070,"name":"Мармелад жевательный Клюква","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"клюква"},
    {"id":3071,"name":"Мармелад жевательный Лимон","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"лимон"},
    {"id":3072,"name":"Мармелад жевательный Малина","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"малина"},
    {"id":3073,"name":"Мармелад жевательный Манго","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"манго"},
    {"id":3074,"name":"Мармелад жевательный Мандарин","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"мандарин"},
    {"id":3075,"name":"Мармелад жевательный Маракуйя","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"маракуйя"},
    {"id":3076,"name":"Мармелад жевательный Персик","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"персик"},
    {"id":3077,"name":"Мармелад жевательный Слива","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"слива"},
    {"id":3078,"name":"Мармелад жевательный Яблоко","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"яблоко"},
    {"id":3079,"name":"Мармелад жевательный Черная смородина","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"черная смородина"},
    {"id":3080,"name":"Мармелад жевательный Черника","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"черника"},
    {"id":3081,"name":"Мармелад жевательный Гуава","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"экзотический","flavor":"гуава"},
    {"id":3082,"name":"Мармелад жевательный Папайя","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"экзотический","flavor":"папайя"},
    {"id":3083,"name":"Мармелад жевательный Лайм","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"лайм"},
    {"id":3084,"name":"Мармелад жевательный Ежевика","calories":330,"protein":4,"fat":0,"carbs":79,"unit":"g","default":100,"brand":"—","type":"фруктовый","flavor":"ежевика"},
    
    // КЛАССИЧЕСКИЙ (ФРУКТОВЫЙ) МАРМЕЛАД
    {"id":3085,"name":"Мармелад яблочный пластовой","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","flavor":"яблоко"},
    {"id":3086,"name":"Мармелад сливовый пластовой","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","flavor":"слива"},
    {"id":3087,"name":"Мармелад абрикосовый пластовой","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","flavor":"абрикос"},
    {"id":3088,"name":"Мармелад лимонный дольки","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","shape":"дольки","flavor":"лимон"},
    {"id":3089,"name":"Мармелад апельсиновый дольки","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","shape":"дольки","flavor":"апельсин"},
    {"id":3090,"name":"Мармелад грейпфрутовый дольки","calories":300,"protein":1,"fat":0,"carbs":75,"unit":"g","default":100,"brand":"—","type":"классический","shape":"дольки","flavor":"грейпфрут"},
    
    // ДРУГИЕ БРЕНДЫ
    {"id":3091,"name":"Maynard's Wine Gums","calories":330,"protein":5,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Maynard's","type":"жевательный","country":"Великобритания"},
    {"id":3092,"name":"Белевская пастила","calories":280,"protein":2,"fat":0,"carbs":70,"unit":"g","default":100,"brand":"Белевская","type":"пастила","feature":"русская традиционная"},
    {"id":3093,"name":"Шармэль (суфле в шоколаде)","calories":380,"protein":3,"fat":10,"carbs":70,"unit":"g","default":100,"brand":"Шармэль","type":"суфле","feature":"глазированное"},
    
    // ПОМИМА (Франция)
    {"id":3094,"name":"Pomima Мармелад дегустационный","calories":320,"protein":3,"fat":0,"carbs":78,"unit":"g","default":100,"brand":"Pomima","type":"французский","feature":"высокое содержание фруктов"}
];
const CANDY_PRODUCTS = [
    // ==================== ХОЛДИНГ «ОБЪЕДИНЕННЫЕ КОНДИТЕРЫ» ====================
    // Фабрика «КРАСНЫЙ ОКТЯБРЬ» (Москва) — более 300 наименований [citation:10]
    
    // Конфеты на развес (весовые) и в упаковках
    {"id":4000,"name":"Алёнка (шоколадная конфета)","calories":530,"protein":7,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"шоколадные"},
    {"id":4001,"name":"Красная Шапочка","calories":540,"protein":6,"fat":34,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"шоколадные","filling":"вафельная крошка, арахис"},
    {"id":4002,"name":"Птичье молоко","calories":460,"protein":5,"fat":28,"carbs":50,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"суфле","filling":"сливочное суфле в шоколаде"},
    {"id":4003,"name":"Кара-Кум","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"помадка с орехами"},
    {"id":4004,"name":"Пчёлка","calories":500,"protein":4,"fat":30,"carbs":58,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"глазированные","filling":"помадка"},
    {"id":4005,"name":"Маска","calories":520,"protein":5,"fat":33,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"грильяж"},
    {"id":4006,"name":"Сливочный пломбир","calories":450,"protein":4,"fat":26,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"глазированные","filling":"сливочная помадка"},
    {"id":4007,"name":"Южные ночи","calories":535,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"помадка с орехами"},
    {"id":4008,"name":"Мишка на Севере","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"шоколадные"},
    {"id":4009,"name":"Вечерний звон","calories":520,"protein":5,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"помадка с цукатами"},
    {"id":4010,"name":"Золотой ключик","calories":510,"protein":5,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"помадка"},
    {"id":4011,"name":"Шоколадница","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"шоколадные","filling":"молочная начинка"},
    {"id":4012,"name":"Москвичка (карамель)","calories":400,"protein":1,"fat":5,"carbs":88,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"карамель"},
    {"id":4013,"name":"Снежок","calories":470,"protein":4,"fat":28,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"глазированные","filling":"сливочная помадка"},
    {"id":4014,"name":"Коровка молочная","calories":480,"protein":5,"fat":27,"carbs":56,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"глазированные","filling":"помадка вареная"},
    {"id":4015,"name":"Золотая Нива","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"ореховая начинка"},
    {"id":4016,"name":"Купола","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные","filling":"вафельная крошка, арахис"},
    {"id":4017,"name":"Суфле шоколадное","calories":460,"protein":5,"fat":28,"carbs":50,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"суфле"},
    {"id":4018,"name":"Вафельные конфеты ассорти","calories":520,"protein":6,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"вафельные"},
    {"id":4019,"name":"Ирис тираженный","calories":400,"protein":4,"fat":12,"carbs":75,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"ирис"},
    
    // Фабрика «РОТ ФРОНТ»
    {"id":4020,"name":"Чародейка","calories":520,"protein":5,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес/упаковка","type":"шоколадные","filling":"помадка"},
    {"id":4021,"name":"Москва","calories":510,"protein":5,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"шоколадные","filling":"помадка с орехами"},
    {"id":4022,"name":"Вдохновение","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес/упаковка","type":"шоколадные","filling":"пралине"},
    {"id":4023,"name":"Коровка (конфета)","calories":480,"protein":5,"fat":27,"carbs":56,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"глазированные","filling":"помадка вареная"},
    {"id":4024,"name":"Раковая шейка","calories":500,"protein":5,"fat":30,"carbs":57,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"глазированные","filling":"вафельная крошка с орехом"},
    {"id":4025,"name":"Столичные","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"шоколадные"},
    {"id":4026,"name":"Батончики","calories":490,"protein":5,"fat":29,"carbs":57,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"глазированные","filling":"помадка"},
    {"id":4027,"name":"Грильяж в шоколаде","calories":550,"protein":7,"fat":35,"carbs":52,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес/упаковка","type":"грильяж"},
    
    // Фабрика «БАБАЕВСКИЙ»
    {"id":4028,"name":"Бабаевские (ассорти)","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"шоколадные"},
    {"id":4029,"name":"Космическая одиссея","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Бабаевский","pack":"на развес","type":"шоколадные","filling":"пралине с вафлей"},
    {"id":4030,"name":"Вдохновение","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"шоколадные","filling":"пралине"},
    {"id":4031,"name":"Шоколадные конфеты премиум","calories":550,"protein":7,"fat":35,"carbs":52,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"шоколадные","filling":"разные виды начинок"},
    {"id":4032,"name":"Ночка","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Бабаевский","pack":"на развес","type":"шоколадные"},
    {"id":4033,"name":"Любимые","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Бабаевский","pack":"на развес","type":"шоколадные"},
    
    // ==================== НЕСТЛЕ (Nestlé) ====================
    {"id":4034,"name":"Кит-Кат (KitKat)","calories":518,"protein":6.5,"fat":27,"carbs":62,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"вафельные"},
    {"id":4035,"name":"Кит-Кат миники","calories":518,"protein":6.5,"fat":27,"carbs":62,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"вафельные","feature":"мини-версия"},
    {"id":4036,"name":"Эйро (Aero)","calories":520,"protein":5,"fat":30,"carbs":58,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"шоколадные","feature":"пористый шоколад"},
    {"id":4037,"name":"Лайон (Lion)","calories":500,"protein":6,"fat":28,"carbs":60,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"вафельные","filling":"карамель с рисовыми шариками"},
    {"id":4038,"name":"Россия - Щедрая душа","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Nestlé","pack":"коробка","type":"шоколадные"},
    {"id":4039,"name":"Тофи-Крисп (Toffee Crisp)","calories":490,"protein":5,"fat":27,"carbs":59,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"батончик","filling":"ирис с хрустящими шариками"},
    {"id":4040,"name":"Роло (Rolo)","calories":520,"protein":6,"fat":31,"carbs":58,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"карамель","filling":"карамель в шоколаде"},
    {"id":4041,"name":"Манчиз (Munchies)","calories":510,"protein":6,"fat":30,"carbs":57,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"шоколадные","filling":"карамель"},
    {"id":4042,"name":"Милкибар (Milkybar)","calories":540,"protein":7,"fat":33,"carbs":55,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"белый шоколад"},
    {"id":4043,"name":"Йорки (Yorkie)","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"молочный шоколад"},
    {"id":4044,"name":"Кит-Кат Пасхальное яйцо","calories":530,"protein":6,"fat":30,"carbs":58,"unit":"g","default":100,"brand":"Nestlé","pack":"подарочный","type":"пасхальные","season":"пасха"},
    {"id":4045,"name":"Кит-Кат Чанки Фанки","calories":530,"protein":6,"fat":31,"carbs":57,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"шоколадные","feature":"с печеньем и кукурузными хлопьями"},
    
    // Рузанна (Nestlé)
    {"id":4046,"name":"Рузанна конфеты","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Рузанна","pack":"коробка/на развес","type":"шоколадные"},
    
    // ==================== ФЕРРЕРО (Ferrero) ====================
    {"id":4047,"name":"Рафаэлло","calories":610,"protein":8,"fat":42,"carbs":48,"unit":"g","default":100,"brand":"Ferrero","pack":"коробка","type":"шоколадные","filling":"кокосовая стружка, миндаль"},
    {"id":4048,"name":"Ферреро Роше (Ferrero Rocher)","calories":610,"protein":8,"fat":42,"carbs":48,"unit":"g","default":100,"brand":"Ferrero","pack":"коробка","type":"шоколадные","filling":"цельный орех, пралине"},
    {"id":4049,"name":"Киндер (Kinder)","calories":566,"protein":8.7,"fat":35,"carbs":53.5,"unit":"g","default":100,"brand":"Kinder","pack":"упаковка","type":"шоколадные","filling":"молочная начинка"},
    {"id":4050,"name":"Коркунов","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Коркунов","pack":"коробка","type":"шоколадные премиум","country":"Россия (Ferrero)"},
    
    // ==================== МОНДЕЛИС Интернешнл (Kraft/Mondelez) ====================
    {"id":4051,"name":"Милка (Milka)","calories":540,"protein":6,"fat":33,"carbs":55,"unit":"g","default":100,"brand":"Milka","pack":"упаковка","type":"шоколад"},
    {"id":4052,"name":"ВОЗДУШНЫЙ (Alpen Gold)","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Alpen Gold","pack":"упаковка","type":"шоколад"},
    {"id":4053,"name":"ВОЗДУШНЫЙ конфеты","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Alpen Gold","pack":"коробка","type":"шоколадные"},
    {"id":4054,"name":"Юбилейное (печенье)","calories":450,"protein":6,"fat":15,"carbs":72,"unit":"g","default":100,"brand":"Юбилейное","pack":"упаковка","type":"печенье"},
    
    // ==================== КОНДИТЕРСКАЯ ФАБРИКА АККОНД (Чебоксары) ====================
    {"id":4055,"name":"Акконд Шоколадные конфеты","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Акконд","pack":"на развес/коробка","type":"шоколадные"},
    {"id":4056,"name":"Акконд Весовые конфеты","calories":520,"protein":5,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Акконд","pack":"на развес","type":"разные"},
    
    // ==================== ФАБРИКА ИМ. КРУПСКОЙ (Санкт-Петербург) ====================
    {"id":4057,"name":"Ленинградские","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Крупской","pack":"на развес","type":"шоколадные","feature":"один из лучших весовых брендов"},
    {"id":4058,"name":"Жаклин","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Крупской","pack":"на развес","type":"шоколадные","filling":"пралине"},
    {"id":4059,"name":"Крупской конфеты ассорти","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Крупской","pack":"на развес/коробка","type":"шоколадные"},
    {"id":4060,"name":"Ромашка","calories":510,"protein":5,"fat":30,"carbs":57,"unit":"g","default":100,"brand":"Крупской","pack":"на развес","type":"глазированные"},
    
    // ==================== КРАСКОН (Красноярск) ====================
    {"id":4061,"name":"Манна (Краскон)","calories":500,"protein":5,"fat":29,"carbs":57,"unit":"g","default":100,"brand":"Краскон","pack":"на развес","type":"шоколадные"},
    {"id":4062,"name":"Краскон Весовые конфеты","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Краскон","pack":"на развес","type":"шоколадные"},
    
    // ==================== КОНТИ (Курск) ====================
    {"id":4063,"name":"Конти Шоколадные конфеты","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Конти","pack":"на развес/коробка","type":"шоколадные"},
    
    // ==================== ЛЮБИМЫЙ КРАЙ (Компания ЛЮБИМЫЙ КРАЙ) ====================
    {"id":4064,"name":"Любимый край вафельные конфеты","calories":520,"protein":6,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Любимый край","pack":"упаковка","type":"вафельные"},
    
    // ==================== СЛАВЯНКА ====================
    {"id":4065,"name":"Славянка Весовые","calories":520,"protein":5,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Славянка","pack":"на развес","type":"шоколадные"},
    {"id":4066,"name":"Белочка","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Славянка","pack":"на развес/коробка","type":"шоколадные","filling":"лесной орех"},
    
    // ==================== ФАБРИКИ СТРАН СНГ ====================
    
    // Рахат (Казахстан)
    {"id":4067,"name":"Рахат Весовые конфеты","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Рахат","pack":"на развес/коробка","type":"шоколадные","country":"Казахстан"},
    {"id":4068,"name":"Рахат Карамель","calories":400,"protein":1,"fat":5,"carbs":88,"unit":"g","default":100,"brand":"Рахат","pack":"на развес","type":"карамель","country":"Казахстан"},
    
    // Спартак (Беларусь)
    {"id":4069,"name":"Спартак Весовые конфеты","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Спартак","pack":"на развес/коробка","type":"шоколадные","country":"Беларусь"},
    {"id":4070,"name":"Спартак Шоколад","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Спартак","pack":"упаковка","type":"шоколад","country":"Беларусь"},
    
    // Победа (Калуга / Россия)
    {"id":4071,"name":"Победа Шоколад","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Победа","pack":"упаковка/на развес","type":"шоколад"},
    
    // АТАГ (Атаг — производитель весовых конфет)
    {"id":4072,"name":"Атаг Вафельные конфеты","calories":520,"protein":6,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Атаг","pack":"на развес","type":"вафельные"},
    
    // САРАПУЛЬСКАЯ КОНДИТЕРСКАЯ ФАБРИКА
    {"id":4073,"name":"Сарапульская Весовые","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Сарапульская","pack":"на развес","type":"шоколадные"},
    
    // ==================== ВЕСОВЫЕ КОНФЕТЫ ПО НАЗВАНИЯМ ====================
    {"id":4074,"name":"Беловежская пуща","calories":510,"protein":5,"fat":30,"carbs":57,"unit":"g","default":100,"brand":"Беловежская пуща","pack":"на развес","type":"шоколадные","filling":"яблочное пюре"},
    {"id":4075,"name":"Царская птица (вафельные)","calories":520,"protein":6,"fat":31,"carbs":56,"unit":"g","default":100,"brand":"Царская птица","pack":"на развес","type":"вафельные","filling":"пралине"},
    {"id":4076,"name":"Птица дивная (суфле)","calories":470,"protein":5,"fat":28,"carbs":54,"unit":"g","default":100,"brand":"Птица дивная","pack":"на развес","type":"суфле","filling":"нежное суфле"},
    {"id":4077,"name":"Красный мак (конфеты)","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"шоколадные"},
    {"id":4078,"name":"Столичные любимые","calories":520,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Столичные","pack":"на развес","type":"шоколадные"},
    {"id":4079,"name":"Рот-Фронт белочка (с арахисом)","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Рот Фронт","pack":"на развес","type":"шоколадные","filling":"арахис"},
    
    // ==================== КАРАМЕЛЬ, ИРИС, ДРАЖЕ ====================
    {"id":4080,"name":"Дюшес карамель","calories":400,"protein":0,"fat":0,"carbs":99,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"карамель","flavor":"груша"},
    {"id":4081,"name":"Барбарис карамель","calories":400,"protein":0,"fat":0,"carbs":99,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"карамель","flavor":"барбарис"},
    {"id":4082,"name":"Театральная карамель","calories":400,"protein":0,"fat":0,"carbs":99,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"карамель","filling":"фруктовая начинка"},
    {"id":4083,"name":"Клюква в сахаре","calories":380,"protein":1,"fat":0,"carbs":96,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"драже"},
    {"id":4084,"name":"Золотистые шарики (драже)","calories":450,"protein":3,"fat":12,"carbs":80,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"драже"},
    {"id":4085,"name":"Ирис Золотой ключик","calories":400,"protein":4,"fat":12,"carbs":75,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес","type":"ирис"},
    {"id":4086,"name":"Ирис Кис-Кис","calories":400,"protein":4,"fat":12,"carbs":75,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"на развес/упаковка","type":"ирис"},
    
    // ==================== ШОКОЛАДНЫЕ КОНФЕТЫ В КОРОБКАХ (ОСНОВНЫЕ) ====================
    {"id":4087,"name":"Ассорти №1 (Красный Октябрь)","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"коробка","type":"шоколадные","feature":"набор конфет"},
    {"id":4088,"name":"Ассорти №5 (Красный Октябрь)","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"коробка","type":"шоколадные","feature":"набор конфет"},
    {"id":4089,"name":"Ассорти №7 (Красный Октябрь)","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"коробка","type":"шоколадные","feature":"набор конфет"},
    {"id":4090,"name":"Бабаевское ассорти","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"шоколадные премиум"},
    {"id":4091,"name":"Вдохновение (Рот Фронт)","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Рот Фронт","pack":"коробка","type":"шоколадные","filling":"пралине"},
    {"id":4092,"name":"Merci","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Merci","pack":"коробка","type":"шоколадные","country":"Германия"},
    {"id":4093,"name":"Lindor (Lindt)","calories":600,"protein":5,"fat":45,"carbs":45,"unit":"g","default":100,"brand":"Lindt","pack":"коробка","type":"шоколадные премиум","country":"Швейцария","filling":"растопленный шоколад"},
    {"id":4094,"name":"Truffles","calories":580,"protein":6,"fat":40,"carbs":48,"unit":"g","default":100,"brand":"—","pack":"коробка","type":"трюфели"},
    
    // ==================== ПОДАРОЧНЫЕ И НОВОГОДНИЕ НАБОРЫ ====================
    {"id":4095,"name":"Новогодний подарок детский","calories":500,"protein":5,"fat":28,"carbs":58,"unit":"g","default":100,"brand":"Объединенные кондитеры","pack":"подарочный","type":"набор","season":"новый год"},
    {"id":4096,"name":"Новогодний подарок премиум","calories":520,"protein":6,"fat":30,"carbs":55,"unit":"g","default":100,"brand":"Объединенные кондитеры","pack":"подарочный","type":"набор","season":"новый год"},
    {"id":4097,"name":"Пасхальные яйца (конфеты)","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Nestlé","pack":"подарочный","type":"пасхальные","season":"пасха"},
    
    // ==================== ПЛИТОЧНЫЙ ШОКОЛАД ====================
    {"id":4098,"name":"Alpen Gold шоколад","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Alpen Gold","pack":"упаковка","type":"шоколад","format":"плитка"},
    {"id":4099,"name":"Milka шоколад","calories":540,"protein":6,"fat":33,"carbs":55,"unit":"g","default":100,"brand":"Milka","pack":"упаковка","type":"шоколад","format":"плитка"},
    {"id":4100,"name":"Воздушный шоколад","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Воздушный","pack":"упаковка","type":"шоколад","format":"плитка","feature":"пористый"},
    {"id":4101,"name":"Россия - Щедрая душа шоколад","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Nestlé","pack":"упаковка","type":"шоколад","format":"плитка"},
    {"id":4102,"name":"Бабаевский шоколад","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Бабаевский","pack":"упаковка","type":"шоколад","format":"плитка"},
    {"id":4103,"name":"Красный Октябрь шоколад","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Красный Октябрь","pack":"упаковка","type":"шоколад","format":"плитка"},
    {"id":4104,"name":"Спартак шоколад","calories":530,"protein":6,"fat":33,"carbs":54,"unit":"g","default":100,"brand":"Спартак","pack":"упаковка","type":"шоколад","format":"плитка","country":"Беларусь"},
    {"id":4105,"name":"Победа шоколад","calories":530,"protein":6,"fat":32,"carbs":55,"unit":"g","default":100,"brand":"Победа","pack":"упаковка","type":"шоколад","format":"плитка"},
    
    // ==================== КОНФЕТЫ ПРЕМИУМ-КЛАССА ====================
    {"id":4106,"name":"Коркунов премиум","calories":550,"protein":7,"fat":35,"carbs":52,"unit":"g","default":100,"brand":"Коркунов","pack":"коробка","type":"премиум","filling":"разные начинки"},
    {"id":4107,"name":"Вдохновение (премиум)","calories":540,"protein":7,"fat":34,"carbs":53,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"премиум"},
    {"id":4108,"name":"Бабаевские премиум","calories":550,"protein":7,"fat":35,"carbs":52,"unit":"g","default":100,"brand":"Бабаевский","pack":"коробка","type":"премиум"},
    
    // ==================== КОНФЕТЫ НА РАЗВЕС ДРУГИЕ (УНИВЕРСАЛЬНЫЕ) ====================
    {"id":4109,"name":"Пралине в шоколаде","calories":550,"protein":6,"fat":36,"carbs":52,"unit":"g","default":100,"brand":"—","pack":"на развес","type":"шоколадные","filling":"ореховая паста"},
    {"id":4110,"name":"Грильяж в шоколаде","calories":550,"protein":5,"fat":35,"carbs":54,"unit":"g","default":100,"brand":"—","pack":"на развес","type":"грильяж"},
    {"id":4111,"name":"Леденцовая карамель ассорти","calories":400,"protein":0,"fat":0,"carbs":99,"unit":"g","default":100,"brand":"—","pack":"на развес","type":"леденцы"},
    {"id":4112,"name":"Мятная карамель","calories":400,"protein":0,"fat":0,"carbs":99,"unit":"g","default":100,"brand":"—","pack":"на развес","type":"леденцы","flavor":"мята"}
];
// ============================================
// СЫРЫ И ХЛЕБ - ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const CHEESE_BREAD_PRODUCTS = [
    // ==================== ТВЁРДЫЕ СЫРЫ ====================
    {"id":55001,"name":"Пармезан","calories":431,"protein":38,"fat":29,"carbs":2,"brand":"Galbani","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55002,"name":"Пармезан Российский","calories":430,"protein":35,"fat":28,"carbs":2,"brand":"Простоквашино","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55003,"name":"Грана Падано","calories":398,"protein":32,"fat":28,"carbs":1,"brand":"Zanetti","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55004,"name":"Пекорино Романо","calories":420,"protein":35,"fat":30,"carbs":1,"brand":"Ambrosi","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55005,"name":"Чеддер","calories":404,"protein":25,"fat":33,"carbs":2,"brand":"President","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55006,"name":"Чеддер Российский","calories":400,"protein":24,"fat":32,"carbs":2,"brand":"Вкуснотеево","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55007,"name":"Гауда","calories":356,"protein":25,"fat":27,"carbs":2,"brand":"President","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55008,"name":"Гауда Российская","calories":350,"protein":24,"fat":26,"carbs":2,"brand":"Домик в деревне","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55009,"name":"Эдам","calories":357,"protein":25,"fat":28,"carbs":2,"brand":"President","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55010,"name":"Маасдам","calories":340,"protein":26,"fat":26,"carbs":0,"brand":"Hochland","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55011,"name":"Российский сыр","calories":364,"protein":24,"fat":29,"carbs":1,"brand":"Каждый день","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55012,"name":"Российский сыр 50%","calories":347,"protein":22.5,"fat":28.5,"carbs":0,"brand":"Николаевские сыроварни","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55013,"name":"Костромской сыр","calories":350,"protein":25,"fat":26,"carbs":0,"brand":"Костромской","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55014,"name":"Пошехонский сыр","calories":350,"protein":26,"fat":27,"carbs":0,"brand":"Пошехонский","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55015,"name":"Голландский сыр","calories":352,"protein":26,"fat":27,"carbs":0,"brand":"Голландский","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55016,"name":"Швейцарский сыр","calories":380,"protein":27,"fat":29,"carbs":1,"brand":"Швейцарский","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55017,"name":"Тильзитер","calories":340,"protein":24,"fat":25,"carbs":1,"brand":"Вкуснотеево","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55018,"name":"Эменталь","calories":380,"protein":28,"fat":29,"carbs":0,"brand":"Emmi","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55019,"name":"Грюйер","calories":413,"protein":30,"fat":32,"carbs":0,"brand":"Le Gruyère","category":"Сыры твёрдые","unit":"g","default":30},
    {"id":55020,"name":"Манчего","calories":390,"protein":26,"fat":31,"carbs":1,"brand":"Quesos","category":"Сыры твёрдые","unit":"g","default":30},
    
    // ==================== ПОЛУТВЁРДЫЕ СЫРЫ ====================
    {"id":55021,"name":"Моцарелла твёрдая","calories":300,"protein":28,"fat":20,"carbs":2,"brand":"Galbani","category":"Сыры полутвёрдые","unit":"g","default":30},
    {"id":55022,"name":"Моцарелла Российская","calories":280,"protein":25,"fat":18,"carbs":2,"brand":"Вкуснотеево","category":"Сыры полутвёрдые","unit":"g","default":30},
    {"id":55023,"name":"Проволоне","calories":351,"protein":25,"fat":27,"carbs":2,"brand":"Galbani","category":"Сыры полутвёрдые","unit":"g","default":30},
    {"id":55024,"name":"Скандинавский сыр","calories":340,"protein":24,"fat":26,"carbs":1,"brand":"President","category":"Сыры полутвёрдые","unit":"g","default":30},
    {"id":55025,"name":"Ольтермани","calories":340,"protein":24,"fat":27,"carbs":0,"brand":"Valio","category":"Сыры полутвёрдые","unit":"g","default":30},
    
    // ==================== МЯГКИЕ СЫРЫ ====================
    {"id":55026,"name":"Бри","calories":334,"protein":21,"fat":27,"carbs":1,"brand":"President","category":"Сыры мягкие","unit":"g","default":30},
    {"id":55027,"name":"Камамбер","calories":300,"protein":20,"fat":24,"carbs":1,"brand":"President","category":"Сыры мягкие","unit":"g","default":30},
    {"id":55028,"name":"Дор Блю","calories":354,"protein":21,"fat":30,"carbs":0,"brand":"President","category":"Сыры с плесенью","unit":"g","default":30},
    {"id":55029,"name":"Рокфор","calories":369,"protein":22,"fat":31,"carbs":1,"brand":"Papillon","category":"Сыры с плесенью","unit":"g","default":30},
    {"id":55030,"name":"Горгонзола","calories":360,"protein":20,"fat":30,"carbs":1,"brand":"Galbani","category":"Сыры с плесенью","unit":"g","default":30},
    {"id":55031,"name":"Кабралес","calories":370,"protein":21,"fat":31,"carbs":0,"brand":"Cabrales","category":"Сыры с плесенью","unit":"g","default":30},
    
    // ==================== РАССОЛЬНЫЕ СЫРЫ ====================
    {"id":55032,"name":"Фета","calories":264,"protein":14,"fat":21,"carbs":4,"brand":"President","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55033,"name":"Фета Российская","calories":250,"protein":13,"fat":20,"carbs":3,"brand":"Каждый день","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55034,"name":"Брынза","calories":260,"protein":18,"fat":20,"carbs":2,"brand":"Каждый день","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55035,"name":"Брынза овечья","calories":265,"protein":17,"fat":21,"carbs":2,"brand":"Адыгейская","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55036,"name":"Сулугуни","calories":290,"protein":20,"fat":22,"carbs":2,"brand":"Сулугуни","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55037,"name":"Сулугуни копчёный","calories":310,"protein":20,"fat":24,"carbs":2,"brand":"Сулугуни","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55038,"name":"Адыгейский сыр","calories":264,"protein":19,"fat":20,"carbs":2,"brand":"Адыгейский","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55039,"name":"Чечил (косичка)","calories":310,"protein":24,"fat":23,"carbs":2,"brand":"Чечил","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55040,"name":"Моцарелла мини","calories":280,"protein":28,"fat":17,"carbs":3,"brand":"Galbani","category":"Сыры рассольные","unit":"pcs","unit_name":"шт","piece_weight":8,"default":5},
    {"id":55041,"name":"Халлуми","calories":330,"protein":22,"fat":26,"carbs":2,"brand":"Halloumi","category":"Сыры рассольные","unit":"g","default":50},
    {"id":55042,"name":"Панир","calories":300,"protein":18,"fat":24,"carbs":4,"brand":"Панир","category":"Сыры рассольные","unit":"g","default":50},
    
    // ==================== СЛИВОЧНЫЕ СЫРЫ ====================
    {"id":55043,"name":"Маскарпоне","calories":388,"protein":4,"fat":40,"carbs":3,"brand":"Galbani","category":"Сыры сливочные","unit":"g","default":50},
    {"id":55044,"name":"Маскарпоне Российский","calories":380,"protein":4,"fat":39,"carbs":3,"brand":"Вкуснотеево","category":"Сыры сливочные","unit":"g","default":50},
    {"id":55045,"name":"Филадельфия","calories":342,"protein":6,"fat":34,"carbs":4,"brand":"Philadelphia","category":"Сыры сливочные","unit":"g","default":30},
    {"id":55046,"name":"Филадельфия Российская","calories":330,"protein":6,"fat":33,"carbs":4,"brand":"Вкуснотеево","category":"Сыры сливочные","unit":"g","default":30},
    {"id":55047,"name":"Рикотта","calories":174,"protein":11,"fat":13,"carbs":3,"brand":"Galbani","category":"Сыры сливочные","unit":"g","default":50},
    {"id":55048,"name":"Рикотта Российская","calories":170,"protein":10,"fat":12,"carbs":3,"brand":"Вкуснотеево","category":"Сыры сливочные","unit":"g","default":50},
    {"id":55049,"name":"Крем-чиз","calories":330,"protein":5,"fat":33,"carbs":4,"brand":"Hochland","category":"Сыры сливочные","unit":"g","default":30},
    {"id":55050,"name":"Сливочный сыр","calories":310,"protein":5,"fat":31,"carbs":3,"brand":"Каждый день","category":"Сыры сливочные","unit":"g","default":30},
    
    // ==================== ПЛАВЛЕНЫЕ СЫРЫ ====================
    {"id":55051,"name":"Янтарь плавленый","calories":250,"protein":8,"fat":20,"carbs":8,"brand":"Янтарь","category":"Сыры плавленые","unit":"g","default":20},
    {"id":55052,"name":"Дружба плавленый","calories":240,"protein":5.7,"fat":18,"carbs":14,"brand":"Карат","category":"Сыры плавленые","unit":"g","default":20},
    {"id":55053,"name":"Плавленый сыр с ветчиной","calories":260,"protein":9,"fat":20,"carbs":10,"brand":"Hochland","category":"Сыры плавленые","unit":"g","default":20},
    {"id":55054,"name":"Плавленый сыр с грибами","calories":255,"protein":8,"fat":19,"carbs":11,"brand":"Hochland","category":"Сыры плавленые","unit":"g","default":20},
    {"id":55055,"name":"Плавленый сыр шоколадный","calories":267,"protein":6,"fat":15,"carbs":26,"brand":"Карат","category":"Сыры плавленые","unit":"g","default":20},
    {"id":55056,"name":"Плавленый сыр сливочный","calories":250,"protein":7,"fat":22,"carbs":8,"brand":"Viola","category":"Сыры плавленые","unit":"g","default":20},
    
    // ==================== КОЗЬИ СЫРЫ ====================
    {"id":55057,"name":"Сен-Мор","calories":280,"protein":16,"fat":22,"carbs":1,"brand":"Saint-Maure","category":"Сыры козьи","unit":"g","default":30},
    {"id":55058,"name":"Шевр","calories":290,"protein":17,"fat":24,"carbs":1,"brand":"Chèvre","category":"Сыры козьи","unit":"g","default":30},
    {"id":55059,"name":"Козий сыр мягкий","calories":250,"protein":15,"fat":20,"carbs":2,"brand":"Козий","category":"Сыры козьи","unit":"g","default":30},
    {"id":55060,"name":"Козий сыр твёрдый","calories":350,"protein":22,"fat":28,"carbs":2,"brand":"Козий","category":"Сыры козьи","unit":"g","default":30},
    
    // ==================== ОВЕЧЬИ СЫРЫ ====================
    {"id":55061,"name":"Пекорино","calories":420,"protein":28,"fat":33,"carbs":1,"brand":"Pecorino","category":"Сыры овечьи","unit":"g","default":30},
    {"id":55062,"name":"Манчего овечий","calories":390,"protein":25,"fat":32,"carbs":1,"brand":"Manchego","category":"Сыры овечьи","unit":"g","default":30},

    // ==================== ХЛЕБ ====================
    // Белый хлеб
    {"id":55101,"name":"Хлеб пшеничный","calories":265,"protein":7.5,"fat":2.5,"carbs":50,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55102,"name":"Батон нарезной","calories":262,"protein":7.5,"fat":2.5,"carbs":51,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55103,"name":"Тостовый хлеб","calories":250,"protein":7,"fat":3,"carbs":48,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55104,"name":"Багет французский","calories":270,"protein":8,"fat":1,"carbs":55,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55105,"name":"Чиабатта","calories":230,"protein":8,"fat":3.5,"carbs":43,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55106,"name":"Фокачча","calories":250,"protein":7,"fat":8,"carbs":40,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    {"id":55107,"name":"Бриошь","calories":380,"protein":9,"fat":18,"carbs":48,"brand":"Каждый день","category":"Хлеб белый","unit":"g","default":50},
    
    // Ржаной и ржано-пшеничный хлеб
    {"id":55108,"name":"Хлеб ржаной","calories":210,"protein":6.5,"fat":1.2,"carbs":41,"brand":"Каждый день","category":"Хлеб ржаной","unit":"g","default":50},
    {"id":55109,"name":"Бородинский хлеб","calories":207,"protein":6.8,"fat":1.3,"carbs":41.8,"brand":"Каждый день","category":"Хлеб ржаной","unit":"g","default":50},
    {"id":55110,"name":"Дарницкий хлеб","calories":210,"protein":6.5,"fat":1.2,"carbs":42,"brand":"Дарницкий","category":"Хлеб ржаной","unit":"g","default":50},
    {"id":55111,"name":"Рижский хлеб","calories":220,"protein":7,"fat":1.5,"carbs":43,"brand":"Рижский","category":"Хлеб ржаной","unit":"g","default":50},
    
    // Цельнозерновой и отрубной хлеб
    {"id":55112,"name":"Хлеб цельнозерновой","calories":230,"protein":8,"fat":3,"carbs":43,"brand":"Каждый день","category":"Хлеб цельнозерновой","unit":"g","default":50},
    {"id":55113,"name":"Хлеб с отрубями","calories":220,"protein":8,"fat":2.5,"carbs":42,"brand":"Каждый день","category":"Хлеб цельнозерновой","unit":"g","default":50},
    {"id":55114,"name":"Зерновой хлеб","calories":250,"protein":9,"fat":4,"carbs":44,"brand":"Каждый день","category":"Хлеб цельнозерновой","unit":"g","default":50},
    {"id":55115,"name":"Фитнес-хлеб","calories":200,"protein":8,"fat":2,"carbs":38,"brand":"Фитнес","category":"Хлеб цельнозерновой","unit":"g","default":50},
    
    // Бездрожжевой хлеб
    {"id":55116,"name":"Бездрожжевой хлеб","calories":220,"protein":7,"fat":1.5,"carbs":45,"brand":"Каждый день","category":"Хлеб бездрожжевой","unit":"g","default":50},
    {"id":55117,"name":"Бездрожжевой с семечками","calories":240,"protein":8,"fat":3,"carbs":44,"brand":"Каждый день","category":"Хлеб бездрожжевой","unit":"g","default":50},
    
    // Лаваш и лепёшки
    {"id":55118,"name":"Лаваш армянский","calories":290,"protein":10.5,"fat":1.9,"carbs":56.4,"brand":"Каждый день","category":"Лаваш","unit":"g","default":50},
    {"id":55119,"name":"Лаваш тонкий","calories":270,"protein":8,"fat":1,"carbs":55,"brand":"Каждый день","category":"Лаваш","unit":"g","default":50},
    {"id":55120,"name":"Пита","calories":260,"protein":9,"fat":1,"carbs":55,"brand":"Каждый день","category":"Лаваш","unit":"g","default":50},
    {"id":55121,"name":"Тортилья","calories":270,"protein":8,"fat":1,"carbs":55,"brand":"Каждый день","category":"Лаваш","unit":"g","default":50},
    {"id":55122,"name":"Лепешка кукурузная","calories":250,"protein":6,"fat":2,"carbs":52,"brand":"Каждый день","category":"Лаваш","unit":"g","default":50},
    
    // Кулич и сдоба
    {"id":55123,"name":"Кулич пасхальный","calories":350,"protein":8,"fat":12,"carbs":52,"brand":"Каждый день","category":"Сдоба","unit":"g","default":50},
    {"id":55124,"name":"Сдобная булочка","calories":380,"protein":7,"fat":15,"carbs":55,"brand":"Каждый день","category":"Сдоба","unit":"g","default":50},
    {"id":55125,"name":"Кекс","calories":380,"protein":5,"fat":18,"carbs":50,"brand":"Каждый день","category":"Сдоба","unit":"g","default":50},
    {"id":55126,"name":"Маффин","calories":400,"protein":6,"fat":20,"carbs":50,"brand":"Каждый день","category":"Сдоба","unit":"g","default":50}
];
// ============================================
// МАСЛА, ПАСТЫ, КРУПЫ, ЗАВТРАКИ, РЫБА
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const BUTTER_PASTE_GRAINS_FISH_PRODUCTS = [
    // ==================== СЛИВОЧНЫЕ МАСЛА ====================
    {"id":56001,"name":"Масло сливочное 82.5%","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"brand":"Вкуснотеево","category":"Масло сливочное","unit":"g","default":10},
    {"id":56002,"name":"Масло сливочное 72.5%","calories":661,"protein":0.5,"fat":72.5,"carbs":0.5,"brand":"Вкуснотеево","category":"Масло сливочное","unit":"g","default":10},
    {"id":56003,"name":"Масло сливочное 82.5%","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"brand":"Простоквашино","category":"Масло сливочное","unit":"g","default":10},
    {"id":56004,"name":"Масло сливочное 82.5%","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"brand":"Домик в деревне","category":"Масло сливочное","unit":"g","default":10},
    {"id":56005,"name":"Масло сливочное традиционное","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"brand":"Крестьянское","category":"Масло сливочное","unit":"g","default":10},
    {"id":56006,"name":"Масло сливочное солёное","calories":748,"protein":0.5,"fat":82.5,"carbs":0.5,"brand":"Вкуснотеево","category":"Масло сливочное","unit":"g","default":10},
    {"id":56007,"name":"Масло топлёное","calories":885,"protein":0.3,"fat":98,"carbs":0.6,"brand":"Вкуснотеево","category":"Масло топлёное","unit":"g","default":10},
    {"id":56008,"name":"Гхи (топлёное масло)","calories":900,"protein":0.1,"fat":99.5,"carbs":0,"brand":"Индийское","category":"Масло топлёное","unit":"g","default":10},
    
    // ==================== РАСТИТЕЛЬНЫЕ МАСЛА ====================
    {"id":56009,"name":"Масло оливковое Extra Virgin","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Borges","category":"Масло растительное","unit":"ml","default":10},
    {"id":56010,"name":"Масло оливковое рафинированное","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Каждый день","category":"Масло растительное","unit":"ml","default":10},
    {"id":56011,"name":"Масло подсолнечное","calories":900,"protein":0,"fat":100,"carbs":0,"brand":"Слобода","category":"Масло растительное","unit":"ml","default":10},
    {"id":56012,"name":"Масло кокосовое","calories":862,"protein":0,"fat":95,"carbs":0,"brand":"Delicato","category":"Масло растительное","unit":"g","default":10},
    {"id":56013,"name":"Масло льняное","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Здоровое меню","category":"Масло растительное","unit":"ml","default":10},
    {"id":56014,"name":"Масло кунжутное","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Кунжутное","category":"Масло растительное","unit":"ml","default":10},
    {"id":56015,"name":"Масло тыквенных семечек","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Тыквенное","category":"Масло растительное","unit":"ml","default":10},
    {"id":56016,"name":"Масло грецкого ореха","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Ореховое","category":"Масло растительное","unit":"ml","default":10},
    {"id":56017,"name":"Масло авокадо","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Avocado","category":"Масло растительное","unit":"ml","default":10},
    {"id":56018,"name":"Масло рисовых отрубей","calories":884,"protein":0,"fat":100,"carbs":0,"brand":"Рисовое","category":"Масло растительное","unit":"ml","default":10},
    
    // ==================== ОРЕХОВЫЕ ПАСТЫ ====================
    {"id":56019,"name":"Арахисовая паста","calories":588,"protein":25,"fat":50,"carbs":14,"brand":"Bombbar","category":"Ореховая паста","unit":"g","default":20},
    {"id":56020,"name":"Арахисовая паста crunchy","calories":590,"protein":25,"fat":50,"carbs":15,"brand":"Арахисовая","category":"Ореховая паста","unit":"g","default":20},
    {"id":56021,"name":"Арахисовая паста smooth","calories":595,"protein":25,"fat":51,"carbs":14,"brand":"Арахисовая","category":"Ореховая паста","unit":"g","default":20},
    {"id":56022,"name":"Миндальная паста","calories":600,"protein":21,"fat":52,"carbs":18,"brand":"Миндальная","category":"Ореховая паста","unit":"g","default":20},
    {"id":56023,"name":"Кешью паста","calories":580,"protein":18,"fat":48,"carbs":25,"brand":"Кешью","category":"Ореховая паста","unit":"g","default":20},
    {"id":56024,"name":"Фундучная паста","calories":620,"protein":15,"fat":55,"carbs":20,"brand":"Фундучная","category":"Ореховая паста","unit":"g","default":20},
    {"id":56025,"name":"Фисташковая паста","calories":550,"protein":20,"fat":45,"carbs":25,"brand":"Фисташковая","category":"Ореховая паста","unit":"g","default":20},
    {"id":56026,"name":"Урбеч (семена льна)","calories":620,"protein":15,"fat":52,"carbs":18,"brand":"Урбеч","category":"Ореховая паста","unit":"g","default":20},
    {"id":56027,"name":"Урбеч кунжутный","calories":630,"protein":18,"fat":55,"carbs":15,"brand":"Урбеч","category":"Ореховая паста","unit":"g","default":20},
    {"id":56028,"name":"Урбеч конопляный","calories":600,"protein":20,"fat":50,"carbs":16,"brand":"Урбеч","category":"Ореховая паста","unit":"g","default":20},
    {"id":56029,"name":"Соевая паста","calories":300,"protein":15,"fat":18,"carbs":20,"brand":"Соевая","category":"Ореховая паста","unit":"g","default":20},
    {"id":56030,"name":"Тахини (кунжутная паста)","calories":600,"protein":17,"fat":53,"carbs":18,"brand":"Тахини","category":"Ореховая паста","unit":"g","default":20},
    
    // ==================== ШОКОЛАДНЫЕ ПАСТЫ ====================
    {"id":56031,"name":"Nutella","calories":544,"protein":6,"fat":31,"carbs":57,"brand":"Nutella","category":"Шоколадная паста","unit":"g","default":20},
    {"id":56032,"name":"Bombbar шоколадная паста","calories":450,"protein":15,"fat":25,"carbs":40,"brand":"Bombbar","category":"Шоколадная паста","unit":"g","default":20},
    {"id":56033,"name":"Шоколадная паста","calories":540,"protein":5,"fat":32,"carbs":56,"brand":"Каждый день","category":"Шоколадная паста","unit":"g","default":20},
    {"id":56034,"name":"Шоколадно-ореховая паста","calories":550,"protein":7,"fat":35,"carbs":50,"brand":"Ореховая","category":"Шоколадная паста","unit":"g","default":20},
    {"id":56035,"name":"Кокосовая паста","calories":600,"protein":5,"fat":55,"carbs":25,"brand":"Кокосовая","category":"Шоколадная паста","unit":"g","default":20},
    
    // ==================== КРУПЫ ====================
    {"id":56036,"name":"Гречка ядрица","calories":343,"protein":12.6,"fat":3.3,"carbs":62,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56037,"name":"Гречка зелёная","calories":330,"protein":13,"fat":3,"carbs":62,"brand":"Живая","category":"Крупы","unit":"g","default":100},
    {"id":56038,"name":"Рис белый круглозёрный","calories":340,"protein":7,"fat":1,"carbs":79,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56039,"name":"Рис белый длиннозёрный","calories":365,"protein":7.5,"fat":0.8,"carbs":80,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56040,"name":"Рис бурый (нешлифованный)","calories":362,"protein":7.5,"fat":2.5,"carbs":73,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56041,"name":"Рис дикий","calories":357,"protein":15,"fat":1,"carbs":75,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56042,"name":"Рис басмати","calories":350,"protein":7,"fat":0.5,"carbs":80,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56043,"name":"Рис для суши","calories":348,"protein":6.8,"fat":0.9,"carbs":77.5,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56044,"name":"Овсяные хлопья №1","calories":350,"protein":12,"fat":6,"carbs":62,"brand":"Увелка","category":"Крупы","unit":"g","default":50},
    {"id":56045,"name":"Овсяные хлопья №2","calories":350,"protein":12,"fat":6,"carbs":62,"brand":"Увелка","category":"Крупы","unit":"g","default":50},
    {"id":56046,"name":"Овсяные хлопья №3","calories":350,"protein":12,"fat":6,"carbs":62,"brand":"Увелка","category":"Крупы","unit":"g","default":50},
    {"id":56047,"name":"Перловка","calories":324,"protein":9.3,"fat":1.1,"carbs":67,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56048,"name":"Пшено","calories":348,"protein":11.5,"fat":3.3,"carbs":69,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56049,"name":"Кукурузная крупа","calories":328,"protein":8.3,"fat":1.2,"carbs":71,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56050,"name":"Манная крупа","calories":328,"protein":10,"fat":1,"carbs":70,"brand":"Увелка","category":"Крупы","unit":"g","default":50},
    {"id":56051,"name":"Полба","calories":337,"protein":14.5,"fat":2.4,"carbs":70,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56052,"name":"Булгур","calories":342,"protein":12,"fat":1.5,"carbs":69,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56053,"name":"Кускус","calories":376,"protein":13,"fat":1.5,"carbs":77,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56054,"name":"Киноа","calories":368,"protein":14,"fat":6,"carbs":64,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56055,"name":"Чечевица зелёная","calories":310,"protein":24,"fat":1,"carbs":51,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56056,"name":"Чечевица красная","calories":310,"protein":23,"fat":1,"carbs":54,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56057,"name":"Чечевица коричневая","calories":310,"protein":24,"fat":1,"carbs":52,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56058,"name":"Нут","calories":310,"protein":19,"fat":6,"carbs":46,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56059,"name":"Маш (бобы мунг)","calories":300,"protein":23,"fat":1.5,"carbs":46,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56060,"name":"Амарант","calories":371,"protein":14,"fat":7,"carbs":65,"brand":"Живая","category":"Крупы","unit":"g","default":100},
    {"id":56061,"name":"Сорго","calories":339,"protein":11,"fat":3,"carbs":68,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56062,"name":"Спельта","calories":338,"protein":14.5,"fat":2.4,"carbs":70,"brand":"Мистраль","category":"Крупы","unit":"g","default":100},
    {"id":56063,"name":"Ячневая крупа","calories":310,"protein":10,"fat":1.3,"carbs":65,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    {"id":56064,"name":"Пшеничная крупа","calories":320,"protein":11,"fat":1.2,"carbs":68,"brand":"Увелка","category":"Крупы","unit":"g","default":100},
    
    // ==================== БЫСТРЫЕ ЗАВТРАКИ ====================
    {"id":56065,"name":"Мюсли классические","calories":450,"protein":10,"fat":18,"carbs":60,"brand":"Muesli","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56066,"name":"Мюсли с орехами","calories":480,"protein":11,"fat":20,"carbs":58,"brand":"Muesli","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56067,"name":"Мюсли с шоколадом","calories":470,"protein":10,"fat":19,"carbs":61,"brand":"Muesli","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56068,"name":"Мюсли с сухофруктами","calories":440,"protein":9,"fat":16,"carbs":64,"brand":"Muesli","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56069,"name":"Мюсли без сахара","calories":420,"protein":11,"fat":15,"carbs":62,"brand":"Фитнес","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56070,"name":"Гранола","calories":480,"protein":11,"fat":22,"carbs":60,"brand":"Гранола","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56071,"name":"Гранола шоколадная","calories":500,"protein":10,"fat":24,"carbs":58,"brand":"Гранола","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56072,"name":"Гранола с ягодами","calories":470,"protein":10,"fat":20,"carbs":61,"brand":"Гранола","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56073,"name":"Хрустящие шарики","calories":400,"protein":6,"fat":5,"carbs":83,"brand":"Kellogg's","category":"Быстрые завтраки","unit":"g","default":30},
    {"id":56074,"name":"Кукурузные хлопья","calories":380,"protein":7,"fat":3,"carbs":84,"brand":"Kellogg's","category":"Быстрые завтраки","unit":"g","default":30},
    {"id":56075,"name":"Кукурузные хлопья с мёдом","calories":390,"protein":6,"fat":3,"carbs":86,"brand":"Kellogg's","category":"Быстрые завтраки","unit":"g","default":30},
    {"id":56076,"name":"Шоколадные шарики","calories":410,"protein":7,"fat":6,"carbs":82,"brand":"Nesquik","category":"Быстрые завтраки","unit":"g","default":30},
    {"id":56077,"name":"Подушечки с молочной начинкой","calories":430,"protein":8,"fat":10,"carbs":76,"brand":"Kellogg's","category":"Быстрые завтраки","unit":"g","default":30},
    {"id":56078,"name":"FitStart каша овсяная","calories":360,"protein":12,"fat":6,"carbs":65,"brand":"FitStart","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56079,"name":"FitStart каша 5 злаков","calories":350,"protein":11,"fat":5,"carbs":66,"brand":"FitStart","category":"Быстрые завтраки","unit":"g","default":50},
    {"id":56080,"name":"FitStart каша гречневая","calories":340,"protein":12,"fat":4,"carbs":65,"brand":"FitStart","category":"Быстрые завтраки","unit":"g","default":50},
    
    // ==================== КРАСНАЯ РЫБА ====================
    {"id":56081,"name":"Сёмга (лосось) слабосолёная","calories":208,"protein":20,"fat":13,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56082,"name":"Сёмга запечённая","calories":220,"protein":22,"fat":14,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56083,"name":"Сёмга копчёная","calories":230,"protein":21,"fat":16,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56084,"name":"Форель слабосолёная","calories":190,"protein":20,"fat":12,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56085,"name":"Форель запечённая","calories":200,"protein":21,"fat":13,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56086,"name":"Форель копчёная","calories":210,"protein":20,"fat":14,"carbs":0,"brand":"Северное море","category":"Рыба красная","unit":"g","default":100},
    {"id":56087,"name":"Горбуша слабосолёная","calories":150,"protein":20.5,"fat":7,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56088,"name":"Горбуша запечённая","calories":160,"protein":21,"fat":8,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56089,"name":"Горбуша отварная","calories":168,"protein":26,"fat":7,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56090,"name":"Кета слабосолёная","calories":160,"protein":21,"fat":8,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56091,"name":"Кета запечённая","calories":170,"protein":22,"fat":9,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56092,"name":"Нерка слабосолёная","calories":180,"protein":21,"fat":10,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56093,"name":"Кижуч слабосолёный","calories":170,"protein":21,"fat":9,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    {"id":56094,"name":"Чавыча","calories":190,"protein":20,"fat":12,"carbs":0,"brand":"Дальневосточная","category":"Рыба красная","unit":"g","default":100},
    
    // ==================== БЕЛАЯ РЫБА ====================
    {"id":56095,"name":"Треска филе","calories":78,"protein":18,"fat":0.5,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    {"id":56096,"name":"Треска запечённая","calories":85,"protein":19,"fat":1,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    {"id":56097,"name":"Минтай филе","calories":79,"protein":17,"fat":1,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56098,"name":"Минтай запечённый","calories":85,"protein":18,"fat":1.2,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56099,"name":"Пикша филе","calories":82,"protein":18,"fat":0.8,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    {"id":56100,"name":"Судак филе","calories":84,"protein":18.4,"fat":1.1,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56101,"name":"Щука филе","calories":84,"protein":18.4,"fat":1.1,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    {"id":56102,"name":"Окунь морской","calories":110,"protein":18,"fat":4,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56103,"name":"Палтус","calories":102,"protein":14,"fat":5,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56104,"name":"Камбала","calories":83,"protein":16.5,"fat":1.5,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    {"id":56105,"name":"Хек серебристый","calories":86,"protein":16.5,"fat":2,"carbs":0,"brand":"Свежий","category":"Рыба белая","unit":"g","default":100},
    {"id":56106,"name":"Путассу","calories":82,"protein":17,"fat":1,"carbs":0,"brand":"Свежая","category":"Рыба белая","unit":"g","default":100},
    
    // ==================== ЖИРНАЯ РЫБА ====================
    {"id":56107,"name":"Скумбрия свежая","calories":205,"protein":18,"fat":14,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56108,"name":"Скумбрия копчёная","calories":221,"protein":19,"fat":16,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56109,"name":"Скумбрия запечённая","calories":215,"protein":19,"fat":15,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56110,"name":"Сельдь свежая","calories":158,"protein":17,"fat":10,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56111,"name":"Сельдь солёная","calories":190,"protein":17,"fat":13,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56112,"name":"Сельдь пряного посола","calories":180,"protein":16,"fat":12,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56113,"name":"Ставрида","calories":120,"protein":18,"fat":5,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    {"id":56114,"name":"Сардина","calories":208,"protein":24,"fat":12,"carbs":0,"brand":"Свежая","category":"Рыба жирная","unit":"g","default":100},
    
    // ==================== КОПЧЁНАЯ И ВЯЛЕНАЯ РЫБА ====================
    {"id":56115,"name":"Скумбрия копчёная","calories":221,"protein":19,"fat":16,"carbs":0,"brand":"Копчёная","category":"Рыба копчёная","unit":"g","default":100},
    {"id":56116,"name":"Сельдь копчёная","calories":190,"protein":18,"fat":13,"carbs":0,"brand":"Копчёная","category":"Рыба копчёная","unit":"g","default":100},
    {"id":56117,"name":"Лесось копчёный","calories":230,"protein":21,"fat":16,"carbs":0,"brand":"Копчёный","category":"Рыба копчёная","unit":"g","default":100},
    {"id":56118,"name":"Треска копчёная","calories":100,"protein":20,"fat":2,"carbs":0,"brand":"Копчёная","category":"Рыба копчёная","unit":"g","default":100},
    {"id":56119,"name":"Вобла вяленая","calories":235,"protein":25,"fat":14,"carbs":0,"brand":"Вяленая","category":"Рыба вяленая","unit":"g","default":100},
    {"id":56120,"name":"Тарань вяленая","calories":230,"protein":24,"fat":14,"carbs":0,"brand":"Вяленая","category":"Рыба вяленая","unit":"g","default":100},
    {"id":56121,"name":"Лещ вяленый","calories":240,"protein":25,"fat":15,"carbs":0,"brand":"Вяленый","category":"Рыба вяленая","unit":"g","default":100},
    
    // ==================== КОНСЕРВИРОВАННАЯ РЫБА ====================
    {"id":56122,"name":"Тунец в собственном соку","calories":110,"protein":24,"fat":1,"carbs":0,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100},
    {"id":56123,"name":"Тунец в масле","calories":200,"protein":23,"fat":12,"carbs":0,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100},
    {"id":56124,"name":"Сайра в масле","calories":250,"protein":18,"fat":20,"carbs":0,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100},
    {"id":56125,"name":"Сардины в масле","calories":220,"protein":24,"fat":13,"carbs":0,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100},
    {"id":56126,"name":"Шпроты в масле","calories":360,"protein":14,"fat":32,"carbs":0,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100},
    {"id":56127,"name":"Печень трески","calories":613,"protein":4,"fat":65,"carbs":1,"brand":"Консервы","category":"Рыба консервы","unit":"g","default":100}
];

// ============================================
// СНЕКИ, ГАЗИРОВКИ, БУЛОЧКИ, ЙОГУРТЫ, СЫРКИ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const SNACKS_DRINKS_YOGURTS_PRODUCTS = [
    // ==================== ЧИПСЫ ====================
    {"id":57001,"name":"Lays Классические","calories":530,"protein":6,"fat":32,"carbs":53,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57002,"name":"Lays Сметана и лук","calories":535,"protein":6,"fat":32,"carbs":54,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57003,"name":"Lays Красная икра","calories":540,"protein":6,"fat":33,"carbs":53,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57004,"name":"Lays Бекон","calories":538,"protein":6,"fat":32.5,"carbs":53.5,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57005,"name":"Lays Сыр","calories":537,"protein":6,"fat":32.3,"carbs":53.7,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57006,"name":"Lays Грибы со сметаной","calories":535,"protein":6,"fat":32,"carbs":54,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57007,"name":"Lays Лобстер","calories":540,"protein":6,"fat":33,"carbs":53,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57008,"name":"Lays Мак и цыпленок","calories":538,"protein":6,"fat":32.5,"carbs":53.5,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57009,"name":"Lays Краб","calories":535,"protein":6,"fat":32,"carbs":54,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57010,"name":"Lays Green (зелёные)","calories":530,"protein":6,"fat":31,"carbs":54,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57011,"name":"Lays Шашлык","calories":540,"protein":6,"fat":33,"carbs":53,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57012,"name":"Lays Хрустящие картофельные","calories":530,"protein":6,"fat":32,"carbs":53,"brand":"Lays","category":"Чипсы","unit":"g","default":30},
    {"id":57013,"name":"Pringles Оригинальные","calories":540,"protein":4.5,"fat":33,"carbs":52,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57014,"name":"Pringles Сметана и лук","calories":545,"protein":4.5,"fat":33.5,"carbs":52.5,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57015,"name":"Pringles Паприка","calories":543,"protein":4.5,"fat":33.3,"carbs":52.3,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57016,"name":"Pringles Пицца","calories":548,"protein":4.6,"fat":33.8,"carbs":52.8,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57017,"name":"Pringles Сыр","calories":542,"protein":4.5,"fat":33.2,"carbs":52.2,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57018,"name":"Pringles Чеддер","calories":544,"protein":4.6,"fat":33.4,"carbs":52.4,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57019,"name":"Pringles Халапеньо","calories":546,"protein":4.5,"fat":33.6,"carbs":52.6,"brand":"Pringles","category":"Чипсы","unit":"g","default":30},
    {"id":57020,"name":"Чипсы Московский картофель","calories":520,"protein":5.5,"fat":30,"carbs":54,"brand":"Московский","category":"Чипсы","unit":"g","default":30},
    {"id":57021,"name":"Чипсы Русская картошка","calories":515,"protein":5,"fat":29.5,"carbs":54.5,"brand":"Русская","category":"Чипсы","unit":"g","default":30},
    
    // ==================== СУХАРИКИ ====================
    {"id":57022,"name":"Кириешки Бородинские","calories":400,"protein":12,"fat":7.5,"carbs":71,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57023,"name":"Кириешки Сметана и зелень","calories":405,"protein":12,"fat":7.8,"carbs":70.5,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57024,"name":"Кириешки Салями","calories":408,"protein":12,"fat":8,"carbs":70,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57025,"name":"Кириешки Бекон","calories":406,"protein":12,"fat":7.9,"carbs":70.3,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57026,"name":"Кириешки Хрен","calories":410,"protein":12,"fat":8.2,"carbs":69.8,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57027,"name":"Кириешки С грибами","calories":404,"protein":12,"fat":7.7,"carbs":70.7,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57028,"name":"Кириешки Сыр","calories":407,"protein":12,"fat":7.9,"carbs":70.2,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57029,"name":"Кириешки Чесночные","calories":409,"protein":12,"fat":8.1,"carbs":70,"brand":"Кириешки","category":"Сухарики","unit":"g","default":30},
    {"id":57030,"name":"Хрусteam Багет","calories":440,"protein":10,"fat":15,"carbs":67,"brand":"Хрусteam","category":"Сухарики","unit":"g","default":30},
    {"id":57031,"name":"Хрусteam С грибами","calories":438,"protein":10,"fat":14.8,"carbs":67.2,"brand":"Хрусteam","category":"Сухарики","unit":"g","default":30},
    {"id":57032,"name":"Хрусteam Со вкусом стейка","calories":442,"protein":10,"fat":15.2,"carbs":66.8,"brand":"Хрусteam","category":"Сухарики","unit":"g","default":30},
    {"id":57033,"name":"Хрусteam С солью","calories":435,"protein":10,"fat":14.5,"carbs":67.5,"brand":"Хрусteam","category":"Сухарики","unit":"g","default":30},
    {"id":57034,"name":"Хрусteam С беконом","calories":441,"protein":10,"fat":15.1,"carbs":66.9,"brand":"Хрусteam","category":"Сухарики","unit":"g","default":30},
    {"id":57035,"name":"3 корочки с чесноком","calories":420,"protein":11,"fat":14,"carbs":68,"brand":"3 корочки","category":"Сухарики","unit":"g","default":30},
    {"id":57036,"name":"3 корочки с зеленью","calories":418,"protein":11,"fat":13.8,"carbs":68.2,"brand":"3 корочки","category":"Сухарики","unit":"g","default":30},
    {"id":57037,"name":"Флинт с чесноком","calories":425,"protein":11,"fat":14.5,"carbs":67.5,"brand":"Флинт","category":"Сухарики","unit":"g","default":30},
    {"id":57038,"name":"Сухарики ржаные Эко","calories":380,"protein":12,"fat":6,"carbs":70,"brand":"Эко","category":"Сухарики","unit":"g","default":30},
    
    // ==================== ГАЗИРОВАННЫЕ НАПИТКИ ====================
    {"id":57039,"name":"Coca-Cola","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":57040,"name":"Coca-Cola Zero","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":57041,"name":"Coca-Cola Ванильная","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":57042,"name":"Coca-Cola Вишнёвая","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":57043,"name":"Pepsi","calories":41,"protein":0,"fat":0,"carbs":10.3,"brand":"Pepsi","category":"Газировка","unit":"ml","default":330},
    {"id":57044,"name":"Pepsi Max","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Pepsi","category":"Газировка","unit":"ml","default":330},
    {"id":57045,"name":"Добрый Cola","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    {"id":57046,"name":"Добрый Cola без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    {"id":57047,"name":"Черноголовка Кола","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":330},
    {"id":57048,"name":"Черноголовка Кола без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":330},
    {"id":57049,"name":"Sprite","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Sprite","category":"Газировка","unit":"ml","default":330},
    {"id":57050,"name":"Sprite Zero","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Sprite","category":"Газировка","unit":"ml","default":330},
    {"id":57051,"name":"7UP","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"7UP","category":"Газировка","unit":"ml","default":330},
    {"id":57052,"name":"7UP Free","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"7UP","category":"Газировка","unit":"ml","default":330},
    {"id":57053,"name":"Fanta Апельсин","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":57054,"name":"Fanta Лимон","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":57055,"name":"Fanta Клубника","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":57056,"name":"Fanta Манго","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":57057,"name":"Mirinda Апельсин","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Mirinda","category":"Газировка","unit":"ml","default":330},
    {"id":57058,"name":"Evervess Кола","calories":44,"protein":0,"fat":0,"carbs":11.1,"brand":"Evervess","category":"Газировка","unit":"ml","default":330},
    {"id":57059,"name":"Schweppes Indian Tonic","calories":35,"protein":0,"fat":0,"carbs":8.8,"brand":"Schweppes","category":"Газировка","unit":"ml","default":330},
    {"id":57060,"name":"Schweppes Мохито","calories":35,"protein":0,"fat":0,"carbs":8.8,"brand":"Schweppes","category":"Газировка","unit":"ml","default":330},
    {"id":57061,"name":"Черноголовка Лимонад","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":57062,"name":"Черноголовка Дюшес","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":57063,"name":"Черноголовка Тархун","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":57064,"name":"Черноголовка Байкал","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":57065,"name":"Черноголовка Саяны","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    
    // ==================== БУЛОЧКИ И СДОБА ====================
    {"id":57066,"name":"Булочка с маком","calories":300,"protein":7,"fat":8,"carbs":50,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57067,"name":"Булочка с корицей","calories":310,"protein":7,"fat":9,"carbs":49,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57068,"name":"Булочка с изюмом","calories":305,"protein":7,"fat":8.5,"carbs":49.5,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57069,"name":"Сдобная булочка","calories":380,"protein":7,"fat":15,"carbs":55,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57070,"name":"Булочка ванильная","calories":370,"protein":7,"fat":14,"carbs":55,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57071,"name":"Булочка к чаю","calories":360,"protein":7,"fat":13,"carbs":56,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57072,"name":"Булочка с сахаром","calories":350,"protein":7,"fat":12,"carbs":57,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57073,"name":"Булочка с кунжутом","calories":310,"protein":8,"fat":10,"carbs":48,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57074,"name":"Рогалик","calories":380,"protein":7,"fat":15,"carbs":55,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57075,"name":"Рогалик с маком","calories":385,"protein":7,"fat":15.5,"carbs":54.5,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57076,"name":"Круассан","calories":400,"protein":6,"fat":20,"carbs":48,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57077,"name":"Круассан с шоколадом","calories":440,"protein":7,"fat":22,"carbs":52,"brand":"Каждый день","category":"Булочки","unit":"g","default":50},
    {"id":57078,"name":"Синнабон","calories":380,"protein":6,"fat":18,"carbs":48,"brand":"Cinnabon","category":"Булочки","unit":"g","default":100},
    {"id":57079,"name":"Пончик","calories":380,"protein":5,"fat":18,"carbs":48,"brand":"Пончик","category":"Булочки","unit":"g","default":80},
    {"id":57080,"name":"Пончик с посыпкой","calories":400,"protein":5,"fat":20,"carbs":50,"brand":"Пончик","category":"Булочки","unit":"g","default":85},
    {"id":57081,"name":"Пончик с начинкой","calories":430,"protein":5,"fat":22,"carbs":52,"brand":"Пончик","category":"Булочки","unit":"g","default":90},
    
    // ==================== ТВОРОЖНЫЕ СЫРКИ ====================
    {"id":57082,"name":"Творожный сырок глазированный","calories":360,"protein":8,"fat":23,"carbs":30,"brand":"Ростагро","category":"Сырки творожные","unit":"g","default":45},
    {"id":57083,"name":"Сырок глазированный ванильный","calories":365,"protein":8,"fat":23.5,"carbs":29.5,"brand":"Ростагро","category":"Сырки творожные","unit":"g","default":45},
    {"id":57084,"name":"Сырок глазированный шоколадный","calories":370,"protein":8,"fat":24,"carbs":29,"brand":"Ростагро","category":"Сырки творожные","unit":"g","default":45},
    {"id":57085,"name":"Сырок глазированный клубничный","calories":360,"protein":7.5,"fat":22.5,"carbs":31,"brand":"Ростагро","category":"Сырки творожные","unit":"g","default":45},
    {"id":57086,"name":"Сырок глазированный с печеньем","calories":380,"protein":8,"fat":25,"carbs":28,"brand":"Ростагро","category":"Сырки творожные","unit":"g","default":45},
    {"id":57087,"name":"Творожный сырок Коровка","calories":350,"protein":7.5,"fat":22,"carbs":31,"brand":"Коровка","category":"Сырки творожные","unit":"g","default":45},
    {"id":57088,"name":"Сырок Чудо","calories":340,"protein":7,"fat":21,"carbs":32,"brand":"Чудо","category":"Сырки творожные","unit":"g","default":45},
    {"id":57089,"name":"Сырок Лёвушка","calories":355,"protein":8,"fat":23,"carbs":30,"brand":"Лёвушка","category":"Сырки творожные","unit":"g","default":45},
    {"id":57090,"name":"Сырок Простоквашино","calories":345,"protein":7.5,"fat":22,"carbs":31.5,"brand":"Простоквашино","category":"Сырки творожные","unit":"g","default":45},
    {"id":57091,"name":"Творожный сырок Нежный","calories":330,"protein":9,"fat":20,"carbs":30,"brand":"Нежный","category":"Сырки творожные","unit":"g","default":45},
    {"id":57092,"name":"Сырок Фили","calories":350,"protein":8,"fat":23,"carbs":30,"brand":"Фили","category":"Сырки творожные","unit":"g","default":45},
    
    // ==================== ЙОГУРТЫ ПИТЬЕВЫЕ ====================
    {"id":57093,"name":"Actimel Оригинальный","calories":62,"protein":2.8,"fat":1.5,"carbs":8.5,"brand":"Actimel","category":"Йогурт питьевой","unit":"ml","default":100},
    {"id":57094,"name":"Actimel Яблоко","calories":62,"protein":2.8,"fat":1.5,"carbs":8.5,"brand":"Actimel","category":"Йогурт питьевой","unit":"ml","default":100},
    {"id":57095,"name":"Actimel Клубника","calories":62,"protein":2.8,"fat":1.5,"carbs":8.5,"brand":"Actimel","category":"Йогурт питьевой","unit":"ml","default":100},
    {"id":57096,"name":"Activia Питьевой клубника","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"brand":"Activia","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57097,"name":"Activia Питьевой черника","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"brand":"Activia","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57098,"name":"Activia Питьевой персик","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"brand":"Activia","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57099,"name":"Чудо Питьевой клубника","calories":86,"protein":2.8,"fat":1.9,"carbs":14.3,"brand":"Чудо","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57100,"name":"Чудо Питьевой персик","calories":86,"protein":2.8,"fat":1.9,"carbs":14.3,"brand":"Чудо","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57101,"name":"Чудо Питьевой клубника-банан","calories":86,"protein":2.8,"fat":1.9,"carbs":14.3,"brand":"Чудо","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57102,"name":"Imunele Классический","calories":65,"protein":2.8,"fat":2.5,"carbs":7.5,"brand":"Imunele","category":"Йогурт питьевой","unit":"ml","default":200},
    {"id":57103,"name":"Imunele Клубника","calories":65,"protein":2.8,"fat":2.5,"carbs":7.5,"brand":"Imunele","category":"Йогурт питьевой","unit":"ml","default":200},
    {"id":57104,"name":"Биобаланс Классический","calories":60,"protein":3,"fat":2,"carbs":7,"brand":"Биобаланс","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57105,"name":"Биобаланс Клубника","calories":65,"protein":3,"fat":2,"carbs":8,"brand":"Биобаланс","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57106,"name":"Campina Клубника","calories":70,"protein":3,"fat":2.5,"carbs":9,"brand":"Campina","category":"Йогурт питьевой","unit":"ml","default":270},
    {"id":57107,"name":"Campina Персик","calories":70,"protein":3,"fat":2.5,"carbs":9,"brand":"Campina","category":"Йогурт питьевой","unit":"ml","default":270},
    
    // ==================== ЙОГУРТЫ ЛОЖКОВЫЕ ====================
    {"id":57108,"name":"Activia Термостатный","calories":55,"protein":4,"fat":1.5,"carbs":6,"brand":"Activia","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57109,"name":"Activia Греческий","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"brand":"Activia","category":"Йогурт ложковый","unit":"g","default":130},
    {"id":57110,"name":"Activia Клубника","calories":80,"protein":3.5,"fat":2,"carbs":11,"brand":"Activia","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57111,"name":"Чудо Классический","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"brand":"Чудо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57112,"name":"Чудо Персик","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"brand":"Чудо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57113,"name":"Чудо Клубника","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"brand":"Чудо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57114,"name":"Чудо Черника","calories":100,"protein":3.1,"fat":2,"carbs":17.3,"brand":"Чудо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57115,"name":"Даниссимо Классический","calories":93,"protein":4,"fat":3.2,"carbs":11,"brand":"Даниссимо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57116,"name":"Даниссимо Клубника","calories":95,"protein":4,"fat":3.2,"carbs":11.5,"brand":"Даниссимо","category":"Йогурт ложковый","unit":"g","default":120},
    {"id":57117,"name":"Epica Греческий 2%","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"brand":"Epica","category":"Йогурт ложковый","unit":"g","default":130},
    {"id":57118,"name":"Epica Греческий 5%","calories":100,"protein":7,"fat":5,"carbs":4,"brand":"Epica","category":"Йогурт ложковый","unit":"g","default":130},
    {"id":57119,"name":"Epica Греческий с клубникой","calories":110,"protein":6.5,"fat":4,"carbs":11,"brand":"Epica","category":"Йогурт ложковый","unit":"g","default":130},
    {"id":57120,"name":"Простоквашино Греческий","calories":70,"protein":7,"fat":2.5,"carbs":4,"brand":"Простоквашино","category":"Йогурт ложковый","unit":"g","default":130},
    
    // ==================== КИСЛОМОЛОЧНЫЕ НАПИТКИ (Активиа, Exponenta) ====================
    {"id":57121,"name":"Exponenta High-Pro (12г белка)","calories":60,"protein":12,"fat":0,"carbs":2.5,"brand":"Exponenta","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57122,"name":"Exponenta Дыня кантал","calories":35,"protein":6,"fat":0,"carbs":3,"brand":"Exponenta","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57123,"name":"Exponenta Манго-маракуйя","calories":38,"protein":6,"fat":0,"carbs":3.2,"brand":"Exponenta","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57124,"name":"Exponenta Клубника","calories":36,"protein":6,"fat":0,"carbs":3.1,"brand":"Exponenta","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57125,"name":"Activia Питьевой 1.5%","calories":60,"protein":3.2,"fat":1.5,"carbs":8.5,"brand":"Activia","category":"Кисломолочный","unit":"ml","default":270},
    {"id":57126,"name":"Imunele Питьевой","calories":65,"protein":2.8,"fat":2.5,"carbs":7.5,"brand":"Imunele","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57127,"name":"Бифилайф Классический","calories":55,"protein":3,"fat":1.5,"carbs":7,"brand":"Бифилайф","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57128,"name":"Бифилайф Клубника","calories":60,"protein":3,"fat":1.5,"carbs":8,"brand":"Бифилайф","category":"Кисломолочный","unit":"ml","default":200},
    {"id":57129,"name":"Напиток кисломолочный Тёма","calories":75,"protein":2.8,"fat":3,"carbs":9.2,"brand":"Тёма","category":"Кисломолочный","unit":"ml","default":206},
    {"id":57130,"name":"Напиток кисломолочный Агуша","calories":70,"protein":3.2,"fat":2.5,"carbs":8.5,"brand":"Агуша","category":"Кисломолочный","unit":"ml","default":200},
    
    // ==================== ДОПОЛНИТЕЛЬНО ====================
    {"id":57131,"name":"Греческий йогурт 0%","calories":55,"protein":10,"fat":0,"carbs":3.5,"brand":"Epica","category":"Йогурт греческий","unit":"g","default":130},
    {"id":57132,"name":"Греческий йогурт 2%","calories":70,"protein":7.6,"fat":2.5,"carbs":4.4,"brand":"Epica","category":"Йогурт греческий","unit":"g","default":130},
    {"id":57133,"name":"Греческий йогурт 5%","calories":100,"protein":7,"fat":5,"carbs":4,"brand":"Epica","category":"Йогурт греческий","unit":"g","default":130},
    {"id":57134,"name":"Греческий йогурт 10%","calories":150,"protein":6,"fat":10,"carbs":4,"brand":"Epica","category":"Йогурт греческий","unit":"g","default":130},
    {"id":57135,"name":"Творожок Чудо","calories":129,"protein":4,"fat":4.2,"carbs":18.9,"brand":"Чудо","category":"Творожок","unit":"g","default":100},
    {"id":57136,"name":"Творожок Растишка","calories":104,"protein":6.5,"fat":3.5,"carbs":11.7,"brand":"Растишка","category":"Творожок","unit":"g","default":100},
    {"id":57137,"name":"Творожок Тёма","calories":106,"protein":7.5,"fat":4,"carbs":10.1,"brand":"Тёма","category":"Творожок","unit":"g","default":95}
];

// ============================================
// РАСШИРЕННАЯ МОЛОЧНАЯ ПРОДУКЦИЯ
// Творог, кефир, ряженка, сметана, сливки, напитки
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const DAIRY_EXTENDED_PRODUCTS = [
    // ==================== ТВОРОГ (ВСЕ ЖИРНОСТИ) ====================
    {"id":58001,"name":"Творог 0% (обезжиренный)","calories":71,"protein":16,"fat":0.1,"carbs":2,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58002,"name":"Творог 0%","calories":70,"protein":16,"fat":0.5,"carbs":3,"brand":"Простоквашино","category":"Творог","unit":"g","default":100},
    {"id":58003,"name":"Творог 0%","calories":71,"protein":16,"fat":0,"carbs":2,"brand":"Вкуснотеево","category":"Творог","unit":"g","default":100},
    {"id":58004,"name":"Творог 1%","calories":90,"protein":16,"fat":1,"carbs":3,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58005,"name":"Творог 2%","calories":103,"protein":16,"fat":2,"carbs":3,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58006,"name":"Творог 5%","calories":121,"protein":15,"fat":5,"carbs":3,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58007,"name":"Творог 5%","calories":121,"protein":15,"fat":5,"carbs":3,"brand":"Простоквашино","category":"Творог","unit":"g","default":100},
    {"id":58008,"name":"Творог 5%","calories":121,"protein":15,"fat":5,"carbs":3,"brand":"Вкуснотеево","category":"Творог","unit":"g","default":100},
    {"id":58009,"name":"Творог 5%","calories":121,"protein":15,"fat":5,"carbs":3,"brand":"Домик в деревне","category":"Творог","unit":"g","default":100},
    {"id":58010,"name":"Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58011,"name":"Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"brand":"Простоквашино","category":"Творог","unit":"g","default":100},
    {"id":58012,"name":"Творог 9%","calories":159,"protein":16,"fat":9,"carbs":3,"brand":"Коровка из Кореновки","category":"Творог","unit":"g","default":100},
    {"id":58013,"name":"Творог 18% (домашний)","calories":230,"protein":14,"fat":18,"carbs":2,"brand":"Домашний","category":"Творог","unit":"g","default":100},
    {"id":58014,"name":"Творог зернёный","calories":105,"protein":12,"fat":5,"carbs":3,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58015,"name":"Творог зернёный со сливками","calories":130,"protein":11,"fat":7,"carbs":4,"brand":"Каждый день","category":"Творог","unit":"g","default":100},
    {"id":58016,"name":"Творог мягкий 0%","calories":65,"protein":12,"fat":0,"carbs":4,"brand":"Вкуснотеево","category":"Творог","unit":"g","default":100},
    {"id":58017,"name":"Творог мягкий 5%","calories":105,"protein":10,"fat":5,"carbs":5,"brand":"Вкуснотеево","category":"Творог","unit":"g","default":100},
    {"id":58018,"name":"Творог мягкий 9%","calories":135,"protein":9,"fat":9,"carbs":5,"brand":"Вкуснотеево","category":"Творог","unit":"g","default":100},
    
    // ==================== ТВОРОЖНЫЕ МАССЫ ====================
    {"id":58019,"name":"Творожная масса с изюмом","calories":340,"protein":9,"fat":15,"carbs":40,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    {"id":58020,"name":"Творожная масса с курагой","calories":335,"protein":9,"fat":14,"carbs":41,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    {"id":58021,"name":"Творожная масса с черносливом","calories":338,"protein":9,"fat":14.5,"carbs":40.5,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    {"id":58022,"name":"Творожная масса с цукатами","calories":345,"protein":8.5,"fat":15.5,"carbs":41,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    {"id":58023,"name":"Творожная масса ванильная","calories":330,"protein":9,"fat":14,"carbs":39,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    {"id":58024,"name":"Творожная масса шоколадная","calories":360,"protein":8,"fat":16,"carbs":44,"brand":"Каждый день","category":"Творожная масса","unit":"g","default":100},
    
    // ==================== КЕФИР ====================
    {"id":58025,"name":"Кефир 0%","calories":30,"protein":3,"fat":0,"carbs":4,"brand":"Каждый день","category":"Кефир","unit":"ml","default":200},
    {"id":58026,"name":"Кефир 0%","calories":30,"protein":3,"fat":0,"carbs":4,"brand":"Простоквашино","category":"Кефир","unit":"ml","default":200},
    {"id":58027,"name":"Кефир 1%","calories":40,"protein":3,"fat":1,"carbs":4,"brand":"Каждый день","category":"Кефир","unit":"ml","default":200},
    {"id":58028,"name":"Кефир 2.5%","calories":53,"protein":3,"fat":2.5,"carbs":4,"brand":"Каждый день","category":"Кефир","unit":"ml","default":200},
    {"id":58029,"name":"Кефир 3.2%","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"brand":"Каждый день","category":"Кефир","unit":"ml","default":200},
    {"id":58030,"name":"Кефир 3.2%","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"brand":"Простоквашино","category":"Кефир","unit":"ml","default":200},
    {"id":58031,"name":"Кефир 3.2%","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"brand":"Домик в деревне","category":"Кефир","unit":"ml","default":200},
    {"id":58032,"name":"Кефир бифидобактериями","calories":55,"protein":3,"fat":2.5,"carbs":4.5,"brand":"Бифилайф","category":"Кефир","unit":"ml","default":200},
    {"id":58033,"name":"Кефир фруктовый","calories":75,"protein":2.8,"fat":2.5,"carbs":10,"brand":"Каждый день","category":"Кефир","unit":"ml","default":200},
    
    // ==================== РЯЖЕНКА ====================
    {"id":58034,"name":"Ряженка 2.5%","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"brand":"Каждый день","category":"Ряженка","unit":"ml","default":200},
    {"id":58035,"name":"Ряженка 2.5%","calories":54,"protein":2.8,"fat":2.5,"carbs":4.2,"brand":"Простоквашино","category":"Ряженка","unit":"ml","default":200},
    {"id":58036,"name":"Ряженка 4%","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"brand":"Каждый день","category":"Ряженка","unit":"ml","default":200},
    {"id":58037,"name":"Ряженка 4%","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"brand":"Домик в деревне","category":"Ряженка","unit":"ml","default":200},
    {"id":58038,"name":"Ряженка 4%","calories":67,"protein":2.8,"fat":4,"carbs":4.2,"brand":"Простоквашино","category":"Ряженка","unit":"ml","default":200},
    {"id":58039,"name":"Ряженка 5%","calories":80,"protein":2.8,"fat":5,"carbs":4.5,"brand":"Каждый день","category":"Ряженка","unit":"ml","default":200},
    
    // ==================== СМЕТАНА ====================
    {"id":58040,"name":"Сметана 10%","calories":115,"protein":2.5,"fat":10,"carbs":3,"brand":"Каждый день","category":"Сметана","unit":"g","default":20},
    {"id":58041,"name":"Сметана 15%","calories":158,"protein":2.5,"fat":15,"carbs":3.4,"brand":"Каждый день","category":"Сметана","unit":"g","default":20},
    {"id":58042,"name":"Сметана 15%","calories":158,"protein":2.5,"fat":15,"carbs":3.4,"brand":"Простоквашино","category":"Сметана","unit":"g","default":20},
    {"id":58043,"name":"Сметана 20%","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"brand":"Каждый день","category":"Сметана","unit":"g","default":20},
    {"id":58044,"name":"Сметана 20%","calories":207,"protein":2.5,"fat":20,"carbs":3.4,"brand":"Простоквашино","category":"Сметана","unit":"g","default":20},
    {"id":58045,"name":"Сметана 25%","calories":247,"protein":2.4,"fat":25,"carbs":3.2,"brand":"Каждый день","category":"Сметана","unit":"g","default":20},
    {"id":58046,"name":"Сметана 30%","calories":295,"protein":2.4,"fat":30,"carbs":3.1,"brand":"Каждый день","category":"Сметана","unit":"g","default":20},
    {"id":58047,"name":"Сметана домашняя","calories":300,"protein":2.5,"fat":31,"carbs":3,"brand":"Домашняя","category":"Сметана","unit":"g","default":20},
    
    // ==================== СЛИВКИ ====================
    {"id":58048,"name":"Сливки 10%","calories":119,"protein":3,"fat":10,"carbs":4.3,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    {"id":58049,"name":"Сливки 15%","calories":150,"protein":2.8,"fat":15,"carbs":4,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    {"id":58050,"name":"Сливки 20%","calories":205,"protein":2.8,"fat":20,"carbs":3.7,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    {"id":58051,"name":"Сливки 33%","calories":325,"protein":2.2,"fat":33,"carbs":2.9,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    {"id":58052,"name":"Сливки 35%","calories":340,"protein":2.1,"fat":35,"carbs":2.8,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    {"id":58053,"name":"Сливки растительные","calories":180,"protein":1,"fat":15,"carbs":10,"brand":"Растительные","category":"Сливки","unit":"ml","default":50},
    {"id":58054,"name":"Сливки для взбивания","calories":325,"protein":2.2,"fat":33,"carbs":2.9,"brand":"Каждый день","category":"Сливки","unit":"ml","default":50},
    
    // ==================== ПРОСТОКВАША И ВАРЕНЕЦ ====================
    {"id":58055,"name":"Простокваша 3.2%","calories":59,"protein":3,"fat":3.2,"carbs":4.1,"brand":"Каждый день","category":"Простокваша","unit":"ml","default":200},
    {"id":58056,"name":"Простокваша мечниковская","calories":60,"protein":3.2,"fat":3.5,"carbs":4,"brand":"Мечниковская","category":"Простокваша","unit":"ml","default":200},
    {"id":58057,"name":"Варенец","calories":60,"protein":3,"fat":3,"carbs":4.5,"brand":"Каждый день","category":"Варенец","unit":"ml","default":200},
    {"id":58058,"name":"Варенец 4%","calories":70,"protein":3,"fat":4,"carbs":4.5,"brand":"Каждый день","category":"Варенец","unit":"ml","default":200},
    
    // ==================== АЙРАН, ТАН, КУМЫС ====================
    {"id":58059,"name":"Айран 0%","calories":25,"protein":1.5,"fat":0,"carbs":4,"brand":"Каждый день","category":"Айран","unit":"ml","default":200},
    {"id":58060,"name":"Айран 1%","calories":40,"protein":2,"fat":1,"carbs":5,"brand":"Каждый день","category":"Айран","unit":"ml","default":200},
    {"id":58061,"name":"Тан (Тан)","calories":25,"protein":1.5,"fat":0.5,"carbs":3.5,"brand":"Каждый день","category":"Тан","unit":"ml","default":200},
    {"id":58062,"name":"Тан с газом","calories":25,"protein":1.5,"fat":0.5,"carbs":3.5,"brand":"Каждый день","category":"Тан","unit":"ml","default":200},
    {"id":58063,"name":"Тан с укропом","calories":30,"protein":1.5,"fat":0.5,"carbs":4,"brand":"Каждый день","category":"Тан","unit":"ml","default":200},
    {"id":58064,"name":"Кумыс","calories":50,"protein":2,"fat":1,"carbs":5,"brand":"Кумыс","category":"Кумыс","unit":"ml","default":200},
    {"id":58065,"name":"Кумыс лечебный","calories":55,"protein":2.2,"fat":1.2,"carbs":5.5,"brand":"Кумыс","category":"Кумыс","unit":"ml","default":200},
    
    // ==================== БИФИДОК, БИФИЛАЙФ, БИОЛАКТ ====================
    {"id":58066,"name":"Бифидок 1%","calories":45,"protein":3,"fat":1,"carbs":5,"brand":"Каждый день","category":"Бифидок","unit":"ml","default":200},
    {"id":58067,"name":"Бифидок 2.5%","calories":55,"protein":3,"fat":2.5,"carbs":5,"brand":"Каждый день","category":"Бифидок","unit":"ml","default":200},
    {"id":58068,"name":"Бифилайф 0%","calories":35,"protein":3,"fat":0,"carbs":4.5,"brand":"Бифилайф","category":"Бифилайф","unit":"ml","default":200},
    {"id":58069,"name":"Бифилайф 1%","calories":45,"protein":3,"fat":1,"carbs":5,"brand":"Бифилайф","category":"Бифилайф","unit":"ml","default":200},
    {"id":58070,"name":"Бифилайф 2.5%","calories":55,"protein":3,"fat":2.5,"carbs":5,"brand":"Бифилайф","category":"Бифилайф","unit":"ml","default":200},
    {"id":58071,"name":"Биолакт 2.5%","calories":55,"protein":3,"fat":2.5,"carbs":5,"brand":"Биолакт","category":"Биолакт","unit":"ml","default":200},
    {"id":58072,"name":"Биолакт 3.2%","calories":65,"protein":3,"fat":3.2,"carbs":5,"brand":"Биолакт","category":"Биолакт","unit":"ml","default":200},
    
    // ==================== СНЕЖОК, КАКАО МОЛОЧНЫЕ ====================
    {"id":58073,"name":"Снежок","calories":70,"protein":2.5,"fat":2.5,"carbs":9,"brand":"Каждый день","category":"Снежок","unit":"ml","default":200},
    {"id":58074,"name":"Снежок клубничный","calories":75,"protein":2.5,"fat":2.5,"carbs":10,"brand":"Каждый день","category":"Снежок","unit":"ml","default":200},
    {"id":58075,"name":"Какао молочный напиток","calories":80,"protein":3,"fat":3,"carbs":10,"brand":"Каждый день","category":"Какао","unit":"ml","default":200},
    {"id":58076,"name":"Какао с маршмеллоу","calories":100,"protein":3,"fat":3.5,"carbs":14,"brand":"Каждый день","category":"Какао","unit":"ml","default":200},
    {"id":58077,"name":"Молочный коктейль","calories":85,"protein":3,"fat":3,"carbs":11,"brand":"Каждый день","category":"Молочный коктейль","unit":"ml","default":200},
    {"id":58078,"name":"Молочный коктейль клубничный","calories":90,"protein":3,"fat":3,"carbs":12,"brand":"Каждый день","category":"Молочный коктейль","unit":"ml","default":200},
    
    // ==================== ДОМАШНЯЯ МОЛОЧКА ====================
    {"id":58079,"name":"Молоко парное","calories":65,"protein":3.5,"fat":3.5,"carbs":4.8,"brand":"Домашнее","category":"Молоко","unit":"ml","default":200},
    {"id":58080,"name":"Молоко топлёное домашнее","calories":70,"protein":3,"fat":4,"carbs":4.7,"brand":"Домашнее","category":"Молоко","unit":"ml","default":200},
    {"id":58081,"name":"Сливки домашние","calories":350,"protein":2.5,"fat":35,"carbs":3,"brand":"Домашние","category":"Сливки","unit":"ml","default":50},
    {"id":58082,"name":"Сметана домашняя","calories":300,"protein":2.5,"fat":30,"carbs":3,"brand":"Домашняя","category":"Сметана","unit":"g","default":20},
    {"id":58083,"name":"Творог домашний","calories":200,"protein":15,"fat":14,"carbs":2,"brand":"Домашний","category":"Творог","unit":"g","default":100},
    
    // ==================== КОЗЬЕ МОЛОКО ====================
    {"id":58084,"name":"Молоко козье","calories":68,"protein":3.5,"fat":4.2,"carbs":4.5,"brand":"Козье","category":"Молоко","unit":"ml","default":200},
    {"id":58085,"name":"Кефир козий","calories":60,"protein":3,"fat":3.5,"carbs":4,"brand":"Козий","category":"Кефир","unit":"ml","default":200},
    {"id":58086,"name":"Творог козий","calories":150,"protein":14,"fat":10,"carbs":2,"brand":"Козий","category":"Творог","unit":"g","default":100},
    {"id":58087,"name":"Сыр козий","calories":250,"protein":15,"fat":20,"carbs":2,"brand":"Козий","category":"Сыр","unit":"g","default":30},
];

// ============================================
// ТОРТЫ И ДЕСЕРТЫ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const CAKES_PRODUCTS = [
    // ==================== КЛАССИЧЕСКИЕ ТОРТЫ ====================
    {"id":59001,"name":"Наполеон","calories":400,"protein":6,"fat":24,"carbs":42,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59002,"name":"Наполеон с заварным кремом","calories":420,"protein":6.5,"fat":25,"carbs":43,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59003,"name":"Медовик","calories":380,"protein":5,"fat":18,"carbs":50,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59004,"name":"Медовик со сметанным кремом","calories":390,"protein":5.5,"fat":19,"carbs":49,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59005,"name":"Птичье молоко","calories":350,"protein":6,"fat":18,"carbs":42,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59006,"name":"Птичье молоко шоколадное","calories":360,"protein":6,"fat":19,"carbs":41,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59007,"name":"Киевский торт","calories":460,"protein":6,"fat":32,"carbs":38,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59008,"name":"Киевский с орехами","calories":470,"protein":7,"fat":33,"carbs":37,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59009,"name":"Прага","calories":420,"protein":6,"fat":28,"carbs":38,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59010,"name":"Прага шоколадная","calories":430,"protein":6.5,"fat":29,"carbs":37,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59011,"name":"Сметанник","calories":350,"protein":6,"fat":22,"carbs":32,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59012,"name":"Сметанник с ягодами","calories":360,"protein":6,"fat":23,"carbs":33,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59013,"name":"Панчо (Пончо)","calories":380,"protein":5,"fat":24,"carbs":38,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59014,"name":"Панчо с ананасом","calories":385,"protein":5,"fat":24.5,"carbs":38.5,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59015,"name":"Муравейник","calories":420,"protein":6,"fat":22,"carbs":52,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59016,"name":"Муравейник со сгущёнкой","calories":430,"protein":6,"fat":23,"carbs":53,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59017,"name":"Картошка (торт)","calories":440,"protein":5,"fat":28,"carbs":44,"brand":"Классический","category":"Торты","unit":"g","default":100},
    {"id":59018,"name":"Картошка с орехами","calories":450,"protein":5.5,"fat":29,"carbs":43,"brand":"Классический","category":"Торты","unit":"g","default":100},
    
    // ==================== БИСКВИТНЫЕ ТОРТЫ ====================
    {"id":59019,"name":"Бисквитный торт с клубникой","calories":310,"protein":5,"fat":16,"carbs":37,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    {"id":59020,"name":"Бисквитный торт с малиной","calories":305,"protein":5,"fat":15.5,"carbs":37.5,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    {"id":59021,"name":"Бисквитный торт с черникой","calories":310,"protein":5,"fat":16,"carbs":37,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    {"id":59022,"name":"Бисквитный торт с персиками","calories":315,"protein":5,"fat":16.5,"carbs":37.5,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    {"id":59023,"name":"Шоколадный бисквитный торт","calories":350,"protein":6,"fat":18,"carbs":42,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    {"id":59024,"name":"Ванильный бисквитный торт","calories":330,"protein":5.5,"fat":16,"carbs":40,"brand":"Бисквитный","category":"Торты","unit":"g","default":100},
    
    // ==================== ЧИЗКЕЙКИ ====================
    {"id":59025,"name":"Чизкейк Нью-Йорк","calories":341,"protein":7,"fat":22,"carbs":29,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59026,"name":"Чизкейк Классический","calories":330,"protein":6.5,"fat":21,"carbs":30,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59027,"name":"Чизкейк с клубникой","calories":320,"protein":6,"fat":20,"carbs":31,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59028,"name":"Чизкейк с малиной","calories":318,"protein":6,"fat":19.8,"carbs":31.2,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59029,"name":"Чизкейк с черникой","calories":322,"protein":6.2,"fat":20.2,"carbs":30.8,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59030,"name":"Чизкейк шоколадный","calories":360,"protein":7,"fat":24,"carbs":32,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59031,"name":"Чизкейк малиновый мусс","calories":280,"protein":4,"fat":15,"carbs":33,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    {"id":59032,"name":"Чизкейк Тирамису","calories":370,"protein":8,"fat":25,"carbs":30,"brand":"Чизкейк","category":"Торты","unit":"g","default":100},
    
    // ==================== ШОКОЛАДНЫЕ ТОРТЫ ====================
    {"id":59033,"name":"Шоколадный торт","calories":450,"protein":7,"fat":30,"carbs":40,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59034,"name":"Тёмный шоколадный торт","calories":470,"protein":8,"fat":32,"carbs":38,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59035,"name":"Брауни торт","calories":480,"protein":6,"fat":32,"carbs":44,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59036,"name":"Брауни с вишней","calories":490,"protein":6.5,"fat":33,"carbs":43,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59037,"name":"Брауни с орехами","calories":495,"protein":7,"fat":33.5,"carbs":42.5,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59038,"name":"Фондю шоколадный","calories":520,"protein":6,"fat":35,"carbs":48,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59039,"name":"Торт Сникерс","calories":460,"protein":8,"fat":28,"carbs":46,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59040,"name":"Торт Твикс","calories":455,"protein":7.5,"fat":27.5,"carbs":46.5,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    {"id":59041,"name":"Торт Марс","calories":470,"protein":8,"fat":29,"carbs":47,"brand":"Шоколадный","category":"Торты","unit":"g","default":100},
    
    // ==================== ФРУКТОВЫЕ И ЯГОДНЫЕ ТОРТЫ ====================
    {"id":59042,"name":"Фруктовый торт","calories":280,"protein":4,"fat":14,"carbs":36,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    {"id":59043,"name":"Ягодный торт","calories":270,"protein":4,"fat":13,"carbs":35,"brand":"Ягодный","category":"Торты","unit":"g","default":100},
    {"id":59044,"name":"Клубничный торт","calories":290,"protein":4.5,"fat":15,"carbs":35,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    {"id":59045,"name":"Малиновый торт","calories":285,"protein":4.5,"fat":14.5,"carbs":35.5,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    {"id":59046,"name":"Торт Манго-Маракуйя","calories":300,"protein":4,"fat":16,"carbs":36,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    {"id":59047,"name":"Торт Лимонный","calories":310,"protein":5,"fat":17,"carbs":35,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    {"id":59048,"name":"Торт Апельсиновый","calories":305,"protein":4.5,"fat":16.5,"carbs":35.5,"brand":"Фруктовый","category":"Торты","unit":"g","default":100},
    
    // ==================== МУССОВЫЕ ТОРТЫ ====================
    {"id":59049,"name":"Муссовый торт","calories":280,"protein":5,"fat":16,"carbs":30,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    {"id":59050,"name":"Муссовый клубничный","calories":270,"protein":4.5,"fat":15,"carbs":31,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    {"id":59051,"name":"Муссовый малиновый","calories":268,"protein":4.5,"fat":14.8,"carbs":31.2,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    {"id":59052,"name":"Муссовый шоколадный","calories":320,"protein":6,"fat":20,"carbs":30,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    {"id":59053,"name":"Муссовый лимонный","calories":285,"protein":5,"fat":16.5,"carbs":30.5,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    {"id":59054,"name":"Муссовый маракуйя","calories":275,"protein":4,"fat":15,"carbs":31,"brand":"Муссовый","category":"Торты","unit":"g","default":100},
    
    // ==================== ОРЕХОВЫЕ ТОРТЫ ====================
    {"id":59055,"name":"Ореховый торт","calories":430,"protein":8,"fat":30,"carbs":36,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    {"id":59056,"name":"Грецкий ореховый торт","calories":440,"protein":8.5,"fat":31,"carbs":35,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    {"id":59057,"name":"Фундучный торт","calories":450,"protein":8,"fat":32,"carbs":34,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    {"id":59058,"name":"Миндальный торт","calories":435,"protein":8,"fat":30.5,"carbs":35.5,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    {"id":59059,"name":"Кокосовый торт","calories":420,"protein":6,"fat":28,"carbs":38,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    {"id":59060,"name":"Пекановый торт","calories":460,"protein":7,"fat":33,"carbs":35,"brand":"Ореховый","category":"Торты","unit":"g","default":100},
    
    // ==================== ТОРТЫ ПРЕМИУМ ====================
    {"id":59061,"name":"Торт Ред Вельвет","calories":380,"protein":6,"fat":24,"carbs":38,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59062,"name":"Торт Ред Вельвет с сырным кремом","calories":390,"protein":6.5,"fat":25,"carbs":37,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59063,"name":"Торт Тирамису","calories":370,"protein":7,"fat":24,"carbs":34,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59064,"name":"Торт Тирамису кофейный","calories":375,"protein":7,"fat":24.5,"carbs":33.5,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59065,"name":"Торт Захер","calories":450,"protein":7,"fat":30,"carbs":40,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59066,"name":"Торт Опера","calories":420,"protein":7,"fat":28,"carbs":38,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59067,"name":"Торт Сан Себастьян","calories":380,"protein":8,"fat":25,"carbs":32,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59068,"name":"Торт Сан Себастьян баскский","calories":390,"protein":8.5,"fat":26,"carbs":31,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    {"id":59069,"name":"Торт Дакуаз","calories":400,"protein":7,"fat":26,"carbs":36,"brand":"Премиум","category":"Торты","unit":"g","default":100},
    
    // ==================== МОРОЖЕНОЕ ТОРТЫ ====================
    {"id":59070,"name":"Торт мороженое","calories":280,"protein":5,"fat":16,"carbs":30,"brand":"Мороженое","category":"Торты","unit":"g","default":100},
    {"id":59071,"name":"Пломбир торт","calories":290,"protein":5.5,"fat":17,"carbs":29,"brand":"Мороженое","category":"Торты","unit":"g","default":100},
    {"id":59072,"name":"Шоколадное мороженое торт","calories":300,"protein":6,"fat":18,"carbs":28,"brand":"Мороженое","category":"Торты","unit":"g","default":100},
    {"id":59073,"name":"Клубничное мороженое торт","calories":275,"protein":4.5,"fat":15.5,"carbs":30.5,"brand":"Мороженое","category":"Торты","unit":"g","default":100},
    
    // ==================== БЕЗГЛЮТЕНОВЫЕ И ПП ТОРТЫ ====================
    {"id":59074,"name":"Чизкейк ПП 0% сахара","calories":180,"protein":12,"fat":8,"carbs":15,"brand":"ПП","category":"Торты","unit":"g","default":100},
    {"id":59075,"name":"Творожный торт ПП","calories":150,"protein":15,"fat":5,"carbs":12,"brand":"ПП","category":"Торты","unit":"g","default":100},
    {"id":59076,"name":"Безглютеновый шоколадный торт","calories":320,"protein":6,"fat":20,"carbs":30,"brand":"Безглютеновый","category":"Торты","unit":"g","default":100},
    {"id":59077,"name":"Кето чизкейк","calories":250,"protein":10,"fat":20,"carbs":5,"brand":"Кето","category":"Торты","unit":"g","default":100},
    {"id":59078,"name":"Кето шоколадный торт","calories":280,"protein":9,"fat":24,"carbs":6,"brand":"Кето","category":"Торты","unit":"g","default":100},
    
    // ==================== ПИРОЖНЫЕ ====================
    {"id":59079,"name":"Заварное пирожное","calories":310,"protein":5,"fat":18,"carbs":32,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59080,"name":"Эклер","calories":320,"protein":5,"fat":18,"carbs":35,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59081,"name":"Эклер шоколадный","calories":330,"protein":5.5,"fat":18.5,"carbs":34.5,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59082,"name":"Пирожное Корзинка","calories":360,"protein":4,"fat":20,"carbs":40,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59083,"name":"Пирожное Трубочка","calories":380,"protein":5,"fat":22,"carbs":40,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59084,"name":"Пирожное Картошка","calories":400,"protein":5,"fat":24,"carbs":42,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59085,"name":"Пирожное Миндальное","calories":420,"protein":6,"fat":28,"carbs":38,"brand":"Пирожное","category":"Пирожные","unit":"g","default":80},
    {"id":59086,"name":"Макарон","calories":420,"protein":5,"fat":18,"carbs":60,"brand":"Пирожное","category":"Пирожные","unit":"g","default":30},
    {"id":59087,"name":"Макарон шоколадный","calories":425,"protein":5,"fat":18.5,"carbs":59.5,"brand":"Пирожное","category":"Пирожные","unit":"g","default":30},
    {"id":59088,"name":"Макарон фисташковый","calories":430,"protein":5.5,"fat":19,"carbs":59,"brand":"Пирожное","category":"Пирожные","unit":"g","default":30},
    {"id":59089,"name":"Профитроль","calories":350,"protein":6,"fat":20,"carbs":38,"brand":"Пирожное","category":"Пирожные","unit":"g","default":50},
    {"id":59090,"name":"Профитроль с мороженым","calories":380,"protein":5.5,"fat":22,"carbs":40,"brand":"Пирожное","category":"Пирожные","unit":"g","default":60}
];

// ============================================
// КОЛБАСЫ, СОСИСКИ, ВЕТЧИНА, СУШЁНОЕ МЯСО
// ВСЕ РОССИЙСКИЕ БРЕНДЫ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const SAUSAGES_BRANDS_PRODUCTS = [
    // ==================== МИРАТОРГ ====================
    {"id":61001,"name":"Колбаса Мираторг Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Мираторг","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61002,"name":"Колбаса Мираторг Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Мираторг","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61003,"name":"Колбаса Мираторг Балыковая","calories":243,"protein":14,"fat":20,"carbs":1.8,"brand":"Мираторг","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61004,"name":"Колбаса Мираторг Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Мираторг","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61005,"name":"Колбаса Мираторг Салями","calories":450,"protein":20,"fat":40,"carbs":2,"brand":"Мираторг","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61006,"name":"Сосиски Мираторг Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Мираторг","category":"Сосиски","unit":"g","default":50},
    {"id":61007,"name":"Сосиски Мираторг Сливочные","calories":270,"protein":10,"fat":25,"carbs":1,"brand":"Мираторг","category":"Сосиски","unit":"g","default":50},
    {"id":61008,"name":"Ветчина Мираторг куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Мираторг","category":"Ветчина","unit":"g","default":50},
    {"id":61009,"name":"Ветчина Мираторг из индейки","calories":100,"protein":16,"fat":3,"carbs":1,"brand":"Мираторг","category":"Ветчина","unit":"g","default":50},
    {"id":61010,"name":"Ветчина Мираторг карбонад","calories":210,"protein":18,"fat":15,"carbs":0,"brand":"Мираторг","category":"Ветчина","unit":"g","default":50},
    {"id":61011,"name":"Шпикачки Мираторг Деревенские","calories":320,"protein":10,"fat":30,"carbs":1,"brand":"Мираторг","category":"Шпикачки","unit":"g","default":50},
    {"id":61012,"name":"Сардельки Мираторг свиные","calories":280,"protein":12,"fat":25,"carbs":1,"brand":"Мираторг","category":"Сардельки","unit":"g","default":50},
    
    // ==================== ЧЕРКИЗОВО ====================
    {"id":61013,"name":"Колбаса Черкизово Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Черкизово","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61014,"name":"Колбаса Черкизово Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Черкизово","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61015,"name":"Колбаса Черкизово Любительская","calories":270,"protein":12,"fat":24,"carbs":1,"brand":"Черкизово","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61016,"name":"Колбаса Черкизово Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Черкизово","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61017,"name":"Колбаса Черкизово Сливочная","calories":290,"protein":11,"fat":27,"carbs":1,"brand":"Черкизово","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61018,"name":"Сосиски Черкизово Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Черкизово","category":"Сосиски","unit":"g","default":50},
    {"id":61019,"name":"Сосиски Черкизово Сливочные","calories":270,"protein":10,"fat":25,"carbs":1,"brand":"Черкизово","category":"Сосиски","unit":"g","default":50},
    {"id":61020,"name":"Ветчина Черкизово куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Черкизово","category":"Ветчина","unit":"g","default":50},
    {"id":61021,"name":"Ветчина Черкизово запечённая","calories":150,"protein":15,"fat":9,"carbs":1,"brand":"Черкизово","category":"Ветчина","unit":"g","default":50},
    {"id":61022,"name":"Шпикачки Черкизово","calories":300,"protein":10,"fat":28,"carbs":1,"brand":"Черкизово","category":"Шпикачки","unit":"g","default":50},
    
    // ==================== ВЕЛИКОЛУКСКИЙ МК (Мясокомбинат) ====================
    {"id":61023,"name":"Колбаса Великолукская Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Великолукский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61024,"name":"Колбаса Великолукская Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Великолукский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61025,"name":"Колбаса Великолукская Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Великолукский МК","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61026,"name":"Сосиски Великолукские Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Великолукский МК","category":"Сосиски","unit":"g","default":50},
    {"id":61027,"name":"Сосиски Великолукские Русские","calories":250,"protein":11,"fat":22,"carbs":1,"brand":"Великолукский МК","category":"Сосиски","unit":"g","default":50},
    {"id":61028,"name":"Ветчина Великолукская куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Великолукский МК","category":"Ветчина","unit":"g","default":50},
    {"id":61029,"name":"Ветчина Великолукская консервированная","calories":290,"protein":15,"fat":25,"carbs":0,"brand":"Великолукский МК","category":"Ветчина","unit":"g","default":50},
    
    // ==================== МЯСНОВЪ ====================
    {"id":61030,"name":"Колбаса Мясновъ Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Мясновъ","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61031,"name":"Колбаса Мясновъ Сливочная","calories":290,"protein":11,"fat":27,"carbs":1,"brand":"Мясновъ","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61032,"name":"Колбаса Мясновъ Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Мясновъ","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61033,"name":"Сосиски Мясновъ Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Мясновъ","category":"Сосиски","unit":"g","default":50},
    {"id":61034,"name":"Ветчина Мясновъ куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Мясновъ","category":"Ветчина","unit":"g","default":50},
    {"id":61035,"name":"Ветчина Мясновъ из индейки","calories":100,"protein":16,"fat":3,"carbs":1,"brand":"Мясновъ","category":"Ветчина","unit":"g","default":50},
    
    // ==================== ДЫМОВ ====================
    {"id":61036,"name":"Колбаса Дымов Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Дымов","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61037,"name":"Колбаса Дымов Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Дымов","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61038,"name":"Колбаса Дымов Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Дымов","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61039,"name":"Колбаса Дымов Салями","calories":450,"protein":20,"fat":40,"carbs":2,"brand":"Дымов","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61040,"name":"Сосиски Дымов Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Дымов","category":"Сосиски","unit":"g","default":50},
    {"id":61041,"name":"Сосиски Дымов Сливочные","calories":270,"protein":10,"fat":25,"carbs":1,"brand":"Дымов","category":"Сосиски","unit":"g","default":50},
    {"id":61042,"name":"Шпикачки Дымов Деревенские","calories":320,"protein":10,"fat":30,"carbs":1,"brand":"Дымов","category":"Шпикачки","unit":"g","default":50},
    {"id":61043,"name":"Ветчина Дымов куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Дымов","category":"Ветчина","unit":"g","default":50},
    {"id":61044,"name":"Ветчина Дымов карбонад","calories":210,"protein":18,"fat":15,"carbs":0,"brand":"Дымов","category":"Ветчина","unit":"g","default":50},
    
    // ==================== ЦАРИЦЫНО ====================
    {"id":61045,"name":"Колбаса Царицыно Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Царицыно","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61046,"name":"Колбаса Царицыно Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Царицыно","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61047,"name":"Сосиски Царицыно Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Царицыно","category":"Сосиски","unit":"g","default":50},
    {"id":61048,"name":"Ветчина Царицыно куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Царицыно","category":"Ветчина","unit":"g","default":50},
    
    // ==================== КАЖДЫЙ ДЕНЬ ====================
    {"id":61049,"name":"Колбаса Каждый день Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Каждый день","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61050,"name":"Колбаса Каждый день Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Каждый день","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61051,"name":"Колбаса Каждый день Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Каждый день","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61052,"name":"Колбаса Каждый день Салями","calories":450,"protein":20,"fat":40,"carbs":2,"brand":"Каждый день","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61053,"name":"Сосиски Каждый день Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Каждый день","category":"Сосиски","unit":"g","default":50},
    {"id":61054,"name":"Сардельки Каждый день свиные","calories":280,"protein":12,"fat":25,"carbs":1,"brand":"Каждый день","category":"Сардельки","unit":"g","default":50},
    {"id":61055,"name":"Ветчина Каждый день куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Каждый день","category":"Ветчина","unit":"g","default":50},
    {"id":61056,"name":"Ветчина Каждый день рубленая","calories":169,"protein":10,"fat":13,"carbs":3,"brand":"Каждый день","category":"Ветчина","unit":"g","default":50},
    
    // ==================== ПАПА МОЖЕТ ====================
    {"id":61057,"name":"Колбаса Папа может Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Папа может","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61058,"name":"Колбаса Папа может Сервелат Пражский","calories":257,"protein":13,"fat":21,"carbs":4,"brand":"Папа может","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61059,"name":"Колбаса Папа может Сервелат Финский","calories":495,"protein":12,"fat":48,"carbs":0,"brand":"Папа может","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61060,"name":"Колбаса Папа может сырокопчёная","calories":525,"protein":19,"fat":49,"carbs":2,"brand":"Папа может","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61061,"name":"Сосиски Папа может Супер Сытные","calories":142,"protein":8,"fat":10,"carbs":5,"brand":"Папа может","category":"Сосиски","unit":"g","default":50},
    {"id":61062,"name":"Сосиски Папа может Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Папа может","category":"Сосиски","unit":"g","default":50},
    {"id":61063,"name":"Ветчина Папа может рубленая","calories":169,"protein":10,"fat":13,"carbs":3,"brand":"Папа может","category":"Ветчина","unit":"g","default":50},
    
    // ==================== КЛИНСКИЙ МК ====================
    {"id":61064,"name":"Колбаса Клинская Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Клинский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61065,"name":"Колбаса Клинская Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Клинский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61066,"name":"Сосиски Клинские Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Клинский МК","category":"Сосиски","unit":"g","default":50},
    {"id":61067,"name":"Ветчина Клинская куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Клинский МК","category":"Ветчина","unit":"g","default":50},
    
    // ==================== ОСТАНКИНСКИЙ МК ====================
    {"id":61068,"name":"Колбаса Останкинская Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Останкинский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61069,"name":"Колбаса Останкинская Молочная","calories":252,"protein":11,"fat":23,"carbs":1,"brand":"Останкинский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61070,"name":"Колбаса Останкинская Любительская","calories":270,"protein":12,"fat":24,"carbs":1,"brand":"Останкинский МК","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61071,"name":"Колбаса Останкинская Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Останкинский МК","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61072,"name":"Сосиски Останкинские Молочные","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Останкинский МК","category":"Сосиски","unit":"g","default":50},
    {"id":61073,"name":"Ветчина Останкинская куриная","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Останкинский МК","category":"Ветчина","unit":"g","default":50},
    
    // ==================== БАЛТИЙСКИЙ ДЕЛИКАТЕС ====================
    {"id":61074,"name":"Балтийский Деликатес Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Балтийский Деликатес","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61075,"name":"Балтийский Деликатес Салями","calories":450,"protein":20,"fat":40,"carbs":2,"brand":"Балтийский Деликатес","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61076,"name":"Ветчина Балтийский Деликатес","calories":150,"protein":15,"fat":9,"carbs":1,"brand":"Балтийский Деликатес","category":"Ветчина","unit":"g","default":50},
    
    // ==================== ИМПОРТНЫЕ БРЕНДЫ ====================
    {"id":61077,"name":"Салями Итальянская","calories":460,"protein":21,"fat":41,"carbs":1,"brand":"Salumificio","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61078,"name":"Чоризо испанская","calories":460,"protein":20,"fat":41,"carbs":2,"brand":"Palacios","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61079,"name":"Пепперони","calories":470,"protein":20,"fat":43,"carbs":1,"brand":"Rovagnati","category":"Колбаса сырокопчёная","unit":"g","default":30},
    {"id":61080,"name":"Прошутто пармская ветчина","calories":210,"protein":23,"fat":13,"carbs":0,"brand":"Parma","category":"Ветчина","unit":"g","default":30},
    {"id":61081,"name":"Бастурма","calories":180,"protein":25,"fat":8,"carbs":1,"brand":"Турецкая","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61082,"name":"Суджук","calories":350,"protein":18,"fat":30,"carbs":1,"brand":"Турецкий","category":"Сушёное мясо","unit":"g","default":30},
    
    // ==================== СУШЁНОЕ И ВЯЛЕНОЕ МЯСО ====================
    {"id":61083,"name":"Пастрами из говядины","calories":150,"protein":24,"fat":5,"carbs":1,"brand":"Пастрами","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61084,"name":"Пастрами из свинины","calories":200,"protein":22,"fat":12,"carbs":1,"brand":"Пастрами","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61085,"name":"Карпаччо из говядины","calories":160,"protein":20,"fat":8,"carbs":0,"brand":"Карпаччо","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61086,"name":"Брезаола","calories":160,"protein":22,"fat":7,"carbs":0,"brand":"Bresaola","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61087,"name":"Коппа","calories":380,"protein":20,"fat":33,"carbs":0,"brand":"Coppa","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61088,"name":"Спик","calories":400,"protein":18,"fat":36,"carbs":0,"brand":"Speck","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61089,"name":"Ломо","calories":200,"protein":20,"fat":13,"carbs":0,"brand":"Lomo","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61090,"name":"Сэндвичная говядина","calories":140,"protein":22,"fat":5,"carbs":1,"brand":"Сэндвичная","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61091,"name":"Вяленое мясо индейки","calories":130,"protein":25,"fat":3,"carbs":1,"brand":"Вяленое","category":"Сушёное мясо","unit":"g","default":30},
    {"id":61092,"name":"Вяленая говядина","calories":140,"protein":24,"fat":4,"carbs":1,"brand":"Вяленая","category":"Сушёное мясо","unit":"g","default":30},
    
    // ==================== ОСТАЛЬНЫЕ БРЕНДЫ ====================
    {"id":61093,"name":"Колбаса Велком Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Велком","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61094,"name":"Колбаса Залегощь Сервелат","calories":380,"protein":14,"fat":36,"carbs":0,"brand":"Залегощь","category":"Колбаса варёно-копчёная","unit":"g","default":50},
    {"id":61095,"name":"Колбаса Егорьевская Докторская","calories":257,"protein":13,"fat":22,"carbs":1.5,"brand":"Егорьевская","category":"Колбаса варёная","unit":"g","default":50},
    {"id":61096,"name":"Сосиски Йола","calories":260,"protein":11,"fat":23,"carbs":1,"brand":"Йола","category":"Сосиски","unit":"g","default":50},
    {"id":61097,"name":"Ветчина Васкино","calories":120,"protein":15,"fat":6,"carbs":1,"brand":"Васкино","category":"Ветчина","unit":"g","default":50},
    {"id":61098,"name":"Колбаса Мортаделла","calories":320,"protein":12,"fat":30,"carbs":1,"brand":"Mortadella","category":"Колбаса варёная","unit":"g","default":50},
];

// ============================================
// ВСЕ ВИДЫ РОЛЛОВ
// Японские, корейские, вьетнамские, тайские
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const ROLLS_PRODUCTS = [
    // ==================== ФИЛАДЕЛЬФИЯ (КЛАССИЧЕСКИЕ) ====================
    {"id":62001,"name":"Филадельфия классический","calories":260,"protein":10,"fat":10,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62002,"name":"Филадельфия с лососем","calories":270,"protein":11,"fat":11,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62003,"name":"Филадельфия с угрём","calories":280,"protein":12,"fat":12,"carbs":26,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62004,"name":"Филадельфия с креветкой","calories":265,"protein":10.5,"fat":10.5,"carbs":27.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62005,"name":"Филадельфия с тунцом","calories":260,"protein":11,"fat":10,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62006,"name":"Филадельфия с авокадо","calories":255,"protein":9.5,"fat":9.5,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62007,"name":"Филадельфия с огурцом","calories":250,"protein":9,"fat":9,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62008,"name":"Филадельфия с манго","calories":265,"protein":9.5,"fat":9.5,"carbs":29.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62009,"name":"Филадельфия запечённая","calories":300,"protein":12,"fat":14,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62010,"name":"Филадельфия темпура","calories":310,"protein":11,"fat":15,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== КАЛИФОРНИЯ ====================
    {"id":62011,"name":"Калифорния классический","calories":280,"protein":9,"fat":10,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62012,"name":"Калифорния с лососем","calories":285,"protein":9.5,"fat":10.5,"carbs":29.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62013,"name":"Калифорния с крабом","calories":275,"protein":8.5,"fat":9.5,"carbs":30.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62014,"name":"Калифорния с креветкой","calories":280,"protein":9,"fat":10,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62015,"name":"Калифорния с авокадо","calories":270,"protein":8,"fat":9,"carbs":31,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62016,"name":"Калифорния с икрой масаго","calories":285,"protein":9,"fat":11,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62017,"name":"Калифорния запечённая","calories":310,"protein":10,"fat":14,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62018,"name":"Калифорния темпура","calories":320,"protein":9.5,"fat":15,"carbs":31,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== УРАМАКИ (РИС НАРУЖУ) ====================
    {"id":62019,"name":"Урамаки с лососем","calories":245,"protein":9.5,"fat":11,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62020,"name":"Урамаки с угрём","calories":275,"protein":11,"fat":12.5,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62021,"name":"Урамаки с креветкой","calories":230,"protein":9.5,"fat":9,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62022,"name":"Урамаки с тунцом","calories":240,"protein":10,"fat":10,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62023,"name":"Урамаки с авокадо","calories":220,"protein":7,"fat":8,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62024,"name":"Урамаки с крабом","calories":225,"protein":7.5,"fat":8.5,"carbs":28.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== МАКИ (ТОЛСТЫЕ) ====================
    {"id":62025,"name":"Маки с лососем","calories":190,"protein":8.5,"fat":6.5,"carbs":24,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62026,"name":"Маки с тунцом","calories":185,"protein":9,"fat":5.8,"carbs":24,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62027,"name":"Маки с угрём","calories":240,"protein":10.5,"fat":10,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62028,"name":"Маки с креветкой","calories":210,"protein":9,"fat":8.5,"carbs":25,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62029,"name":"Маки с авокадо","calories":170,"protein":3.5,"fat":6.5,"carbs":26,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62030,"name":"Маки с огурцом","calories":160,"protein":3,"fat":4,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62031,"name":"Маки с крабом","calories":175,"protein":6.5,"fat":5.5,"carbs":26,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    
    // ==================== ХОСОМАКИ (ТОНКИЕ) ====================
    {"id":62032,"name":"Хосомаки с лососем","calories":185,"protein":8.2,"fat":6,"carbs":25,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62033,"name":"Хосомаки с тунцом","calories":180,"protein":8.5,"fat":5.5,"carbs":24.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62034,"name":"Хосомаки с огурцом","calories":135,"protein":2.8,"fat":1.2,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62035,"name":"Хосомаки с авокадо","calories":160,"protein":3,"fat":5.8,"carbs":25.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62036,"name":"Хосомаки с яйцом (тамаго)","calories":155,"protein":5.5,"fat":4,"carbs":24,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62037,"name":"Хосомаки с крабом","calories":165,"protein":6,"fat":4.5,"carbs":25,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    {"id":62038,"name":"Хосомаки с лососем и сыром","calories":200,"protein":9,"fat":8,"carbs":24,"brand":"Японская кухня","category":"Роллы","unit":"g","default":140,"pieces":6},
    
    // ==================== ТЕМПУРА РОЛЛЫ (ЗАПЕЧЁННЫЕ/ЖАРЕНЫЕ) ====================
    {"id":62039,"name":"Темпура с креветкой","calories":310,"protein":9.5,"fat":16,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62040,"name":"Темпура Филадельфия","calories":340,"protein":12,"fat":19,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62041,"name":"Темпура Калифорния","calories":305,"protein":10,"fat":15,"carbs":33,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62042,"name":"Темпура с лососем","calories":320,"protein":11,"fat":17,"carbs":31,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62043,"name":"Темпура с угрём","calories":330,"protein":12,"fat":18,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62044,"name":"Темпура с тунцом","calories":315,"protein":10.5,"fat":16.5,"carbs":31.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62045,"name":"Темпура с крабом","calories":300,"protein":9,"fat":15,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62046,"name":"Темпура с овощами","calories":280,"protein":7,"fat":13,"carbs":33,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== СПАЙСИ РОЛЛЫ ====================
    {"id":62047,"name":"Спайси с лососем","calories":250,"protein":11,"fat":9,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":8},
    {"id":62048,"name":"Спайси с тунцом","calories":245,"protein":11,"fat":8,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":8},
    {"id":62049,"name":"Спайси с креветкой","calories":240,"protein":10,"fat":8,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":8},
    {"id":62050,"name":"Спайси с крабом","calories":235,"protein":9,"fat":8,"carbs":31,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":8},
    {"id":62051,"name":"Спайси с угрём","calories":260,"protein":11,"fat":10,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":8},
    
    // ==================== ЗАПЕЧЁННЫЕ РОЛЛЫ ====================
    {"id":62052,"name":"Запечённый с лососем","calories":270,"protein":12,"fat":10,"carbs":31,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62053,"name":"Запечённый с угрём","calories":280,"protein":11,"fat":11,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62054,"name":"Запечённый с креветкой","calories":265,"protein":10,"fat":10,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62055,"name":"Запечённый Чиз","calories":310,"protein":13,"fat":14,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62056,"name":"Запечённый с крабом","calories":260,"protein":9,"fat":9,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== КОРЕЙСКИЕ РОЛЛЫ (КИМБАП) ====================
    {"id":62057,"name":"Кимбап классический","calories":210,"protein":7.5,"fat":5.5,"carbs":33,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62058,"name":"Кимбап с тунцом","calories":220,"protein":8.5,"fat":6,"carbs":33,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62059,"name":"Кимбап с говядиной","calories":235,"protein":9.5,"fat":7.5,"carbs":32,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62060,"name":"Кимбап с курицей","calories":215,"protein":8.5,"fat":6,"carbs":32.5,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62061,"name":"Кимбап с лососем","calories":225,"protein":9,"fat":6.5,"carbs":32,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62062,"name":"Кимбап с сыром","calories":245,"protein":9,"fat":9,"carbs":31,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62063,"name":"Кимбап с кимчи","calories":195,"protein":6,"fat":4.5,"carbs":33,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    {"id":62064,"name":"Кимбап с овощами","calories":190,"protein":5.5,"fat":4,"carbs":33.5,"brand":"Корейская кухня","category":"Роллы","unit":"g","default":200,"pieces":10},
    
    // ==================== ВЬЕТНАМСКИЕ РОЛЛЫ ====================
    {"id":62065,"name":"Нэм (жареные спринг-роллы)","calories":237,"protein":9.5,"fat":17.6,"carbs":10.7,"brand":"Вьетнамская кухня","category":"Роллы","unit":"g","default":100,"pieces":5},
    {"id":62066,"name":"Гой Куон (свежие с креветкой)","calories":120,"protein":5,"fat":2,"carbs":20,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62067,"name":"Гой Куон с курицей","calories":115,"protein":6,"fat":2.5,"carbs":18,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":50,"default":2},
    {"id":62068,"name":"Гой Куон со свининой","calories":130,"protein":5.5,"fat":3.5,"carbs":19,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62069,"name":"Гой Куон с тофу","calories":110,"protein":4.5,"fat":2,"carbs":19,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62070,"name":"Гой Куон с манго","calories":115,"protein":4,"fat":1.8,"carbs":20,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62071,"name":"Чынг Куон (жареные рисовые)","calories":210,"protein":7,"fat":12,"carbs":19,"brand":"Вьетнамская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":45,"default":2},
    
    // ==================== ТАЙСКИЕ РОЛЛЫ ====================
    {"id":62072,"name":"По Пиа (тайские жареные)","calories":245,"protein":6.5,"fat":14,"carbs":24,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":60,"default":2},
    {"id":62073,"name":"По Пиа Сот (свежие)","calories":95,"protein":4,"fat":1.5,"carbs":17,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62074,"name":"По Пиа с креветками","calories":110,"protein":5.5,"fat":1.8,"carbs":18,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62075,"name":"По Пиа с курицей","calories":105,"protein":5,"fat":1.8,"carbs":17.5,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62076,"name":"По Пиа с овощами","calories":90,"protein":3.5,"fat":1.2,"carbs":17.5,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    {"id":62077,"name":"По Пиа с манго","calories":100,"protein":3.5,"fat":1.5,"carbs":18,"brand":"Тайская кухня","category":"Роллы","unit":"pcs","unit_name":"шт","piece_weight":55,"default":2},
    
    // ==================== МИКС И СЕТЫ ====================
    {"id":62078,"name":"Сет Филадельфия Калифорния","calories":270,"protein":9.5,"fat":10,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":16},
    {"id":62079,"name":"Сет классический (8 роллов)","calories":250,"protein":9,"fat":9,"carbs":30,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":8},
    {"id":62080,"name":"Сет премиум (12 роллов)","calories":260,"protein":10,"fat":10,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":12},
    {"id":62081,"name":"Сет вегетарианский","calories":200,"protein":5,"fat":6,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":8},
    {"id":62082,"name":"Сет запечённый","calories":290,"protein":11,"fat":13,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":8},
    {"id":62083,"name":"Сет острый (спайси)","calories":260,"protein":10,"fat":10,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"set","default":1,"pieces":8},
    
    // ==================== ЭКЗОТИЧЕСКИЕ РОЛЛЫ ====================
    {"id":62084,"name":"Дракон ролл","calories":320,"protein":12,"fat":15,"carbs":34,"brand":"Японская кухня","category":"Роллы","unit":"g","default":250,"pieces":8},
    {"id":62085,"name":"Радужный ролл","calories":290,"protein":11,"fat":12,"carbs":32,"brand":"Японская кухня","category":"Роллы","unit":"g","default":250,"pieces":8},
    {"id":62086,"name":"Ёби-ролл","calories":280,"protein":10,"fat":11,"carbs":33,"brand":"Японская кухня","category":"Роллы","unit":"g","default":220,"pieces":8},
    {"id":62087,"name":"Лосось-ролл","calories":230,"protein":10,"fat":9,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62088,"name":"Угорь-ролл","calories":260,"protein":11,"fat":11,"carbs":27,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62089,"name":"Тунец-ролл","calories":220,"protein":10,"fat":8,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    {"id":62090,"name":"Креветка-ролл","calories":225,"protein":9,"fat":8.5,"carbs":29.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":200,"pieces":8},
    
    // ==================== ЗЕЛЁНЫЕ И ВЕГАН РОЛЛЫ ====================
    {"id":62091,"name":"Веган ролл с авокадо","calories":190,"protein":4,"fat":7,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62092,"name":"Веган ролл с огурцом","calories":160,"protein":3,"fat":4,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62093,"name":"Веган ролл с манго","calories":175,"protein":3.5,"fat":5,"carbs":29,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62094,"name":"Веган ролл с паприкой","calories":165,"protein":3,"fat":4.5,"carbs":28.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62095,"name":"Грин ролл (со шпинатом)","calories":185,"protein":5,"fat":6,"carbs":28,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    
    // ==================== ДЕСЕРТНЫЕ РОЛЛЫ ====================
    {"id":62096,"name":"Десертный ролл с клубникой","calories":290,"protein":5,"fat":12,"carbs":40,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62097,"name":"Десертный ролл с бананом","calories":300,"protein":5,"fat":13,"carbs":41,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62098,"name":"Десертный ролл с шоколадом","calories":320,"protein":6,"fat":15,"carbs":42,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62099,"name":"Десертный ролл с манго","calories":285,"protein":4.5,"fat":11.5,"carbs":40.5,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6},
    {"id":62100,"name":"Десертный ролл Нутелла","calories":340,"protein":6,"fat":17,"carbs":43,"brand":"Японская кухня","category":"Роллы","unit":"g","default":180,"pieces":6}
];

// ============================================
// МОРОЖЕНОЕ (ВСЕ БРЕНДЫ) + ОВОЩИ + ФРУКТЫ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const ICE_CREAM_VEGGIES_FRUITS_PRODUCTS = [
    // ==================== МОРОЖЕНОЕ (БРЕНДЫ) ====================
    
    // --- МОРОЖЕНОЕ КОРОВКА ИЗ КОРЕНОВКИ ---
    {"id":63001,"name":"Коровка из Кореновки Пломбир ванильный","calories":240,"protein":3.5,"fat":15,"carbs":22,"brand":"Коровка из Кореновки","category":"Мороженое","unit":"g","default":100},
    {"id":63002,"name":"Коровка из Кореновки Пломбир с шоколадной глазурью","calories":243,"protein":4,"fat":17,"carbs":20,"brand":"Коровка из Кореновки","category":"Мороженое","unit":"g","default":100},
    {"id":63003,"name":"Коровка из Кореновки Пломбир Крем-брюле","calories":216,"protein":3,"fat":14,"carbs":19,"brand":"Коровка из Кореновки","category":"Мороженое","unit":"g","default":100},
    {"id":63004,"name":"Коровка из Кореновки Пломбир с печеньем","calories":250,"protein":4,"fat":16,"carbs":24,"brand":"Коровка из Кореновки","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ ЗОЛОТОЙ СТАНДАРТ ---
    {"id":63005,"name":"Золотой Стандарт Пломбир ванильный","calories":230,"protein":3.6,"fat":12.2,"carbs":25.9,"brand":"Золотой Стандарт","category":"Мороженое","unit":"g","default":100},
    {"id":63006,"name":"Золотой Стандарт Пломбир с черникой","calories":232,"protein":3.1,"fat":10.8,"carbs":29.8,"brand":"Золотой Стандарт","category":"Мороженое","unit":"g","default":100},
    {"id":63007,"name":"Золотой Стандарт Пломбир клубничный","calories":235,"protein":3.2,"fat":11,"carbs":30,"brand":"Золотой Стандарт","category":"Мороженое","unit":"g","default":100},
    {"id":63008,"name":"Золотой Стандарт Пломбир шоколадный","calories":245,"protein":3.5,"fat":12.5,"carbs":28,"brand":"Золотой Стандарт","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ ЧИСТАЯ ЛИНИЯ ---
    {"id":63009,"name":"Чистая линия Пломбир классический","calories":235,"protein":3.8,"fat":13,"carbs":25,"brand":"Чистая линия","category":"Мороженое","unit":"g","default":100},
    {"id":63010,"name":"Чистая линия Пломбир Фисташка","calories":250,"protein":4,"fat":15,"carbs":23,"brand":"Чистая линия","category":"Мороженое","unit":"g","default":100},
    {"id":63011,"name":"Чистая линия Пломбир с кусочками печенья","calories":260,"protein":4.2,"fat":15.5,"carbs":25.5,"brand":"Чистая линия","category":"Мороженое","unit":"g","default":100},
    {"id":63012,"name":"Чистая линия Сорбет лимонный","calories":130,"protein":0.5,"fat":0,"carbs":32,"brand":"Чистая линия","category":"Мороженое","unit":"g","default":100},
    {"id":63013,"name":"Чистая линия Сорбет малиновый","calories":128,"protein":0.5,"fat":0,"carbs":31.5,"brand":"Чистая линия","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ ICEBERRY ---
    {"id":63014,"name":"Iceberry Пломбир ванильный","calories":225,"protein":3.5,"fat":12,"carbs":26,"brand":"Iceberry","category":"Мороженое","unit":"g","default":100},
    {"id":63015,"name":"Iceberry Пломбир шоколадный","calories":235,"protein":3.8,"fat":13,"carbs":25,"brand":"Iceberry","category":"Мороженое","unit":"g","default":100},
    {"id":63016,"name":"Iceberry Пломбир с кусочками печенья","calories":255,"protein":4,"fat":14,"carbs":28,"brand":"Iceberry","category":"Мороженое","unit":"g","default":100},
    {"id":63017,"name":"Iceberry Мороженое с клубничным вареньем","calories":240,"protein":3.5,"fat":12.5,"carbs":28,"brand":"Iceberry","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ БАСКИН РОББИНС ---
    {"id":63018,"name":"Баскин Роббинс Пломбир ванильный","calories":250,"protein":4,"fat":14,"carbs":27,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    {"id":63019,"name":"Баскин Роббинс Шоколадный","calories":260,"protein":4.5,"fat":15,"carbs":26,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    {"id":63020,"name":"Баскин Роббинс Клубничный","calories":245,"protein":4,"fat":13.5,"carbs":27.5,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    {"id":63021,"name":"Баскин Роббинс Мятный с шоколадом","calories":260,"protein":4.2,"fat":15.2,"carbs":26.2,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    {"id":63022,"name":"Баскин Роббинс Карамельный","calories":270,"protein":4,"fat":16,"carbs":28,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    {"id":63023,"name":"Баскин Роббинс Пралине","calories":280,"protein":4.5,"fat":17,"carbs":27,"brand":"Баскин Роббинс","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ INMARKO ---
    {"id":63024,"name":"Inmarko Пломбир ванильный","calories":235,"protein":3.6,"fat":12.5,"carbs":26.5,"brand":"Inmarko","category":"Мороженое","unit":"g","default":100},
    {"id":63025,"name":"Inmarko Пломбир Фисташка","calories":245,"protein":4,"fat":14,"carbs":24,"brand":"Inmarko","category":"Мороженое","unit":"g","default":100},
    {"id":63026,"name":"Inmarko Пломбир с печеньем","calories":260,"protein":4.2,"fat":15,"carbs":27,"brand":"Inmarko","category":"Мороженое","unit":"g","default":100},
    {"id":63027,"name":"Inmarko Эскимо","calories":280,"protein":3,"fat":18,"carbs":26,"brand":"Inmarko","category":"Мороженое","unit":"g","default":100},
    {"id":63028,"name":"Inmarko Фруктовый лёд","calories":70,"protein":0,"fat":0,"carbs":18,"brand":"Inmarko","category":"Мороженое","unit":"g","default":100},
    
    // --- МОРОЖЕНОЕ ЭКЗОТИКА ---
    {"id":63029,"name":"Мороженое Магнат Фисташка с катаифи","calories":339,"protein":4.5,"fat":20,"carbs":34.1,"brand":"Магнат","category":"Мороженое","unit":"g","default":100},
    {"id":63030,"name":"Мороженое Магнат шоколадное","calories":340,"protein":4.5,"fat":20.5,"carbs":33.5,"brand":"Магнат","category":"Мороженое","unit":"g","default":100},
    {"id":63031,"name":"Мороженое Магнат клубничное","calories":335,"protein":4.2,"fat":20,"carbs":34,"brand":"Магнат","category":"Мороженое","unit":"g","default":100},
    {"id":63032,"name":"Мороженое Свитлогорье пломбир","calories":230,"protein":3.5,"fat":12,"carbs":26,"brand":"Свитлогорье","category":"Мороженое","unit":"g","default":100},
    {"id":63033,"name":"Мороженое Филевский Пломбир","calories":235,"protein":3.6,"fat":12.5,"carbs":26.5,"brand":"Филевский","category":"Мороженое","unit":"g","default":100},
    {"id":63034,"name":"Мороженое Пломбирь пломбир","calories":240,"protein":3.8,"fat":13,"carbs":27,"brand":"Пломбирь","category":"Мороженое","unit":"g","default":100},
    
    // --- ЭСКИМО И РОЖКИ ---
    {"id":63035,"name":"Эскимо на палочке пломбир","calories":280,"protein":3.5,"fat":18,"carbs":25,"brand":"Эскимо","category":"Мороженое","unit":"g","default":80},
    {"id":63036,"name":"Эскимо шоколадное глазированное","calories":290,"protein":3.8,"fat":19,"carbs":24,"brand":"Эскимо","category":"Мороженое","unit":"g","default":80},
    {"id":63037,"name":"Рожок пломбир","calories":250,"protein":4,"fat":13,"carbs":28,"brand":"Рожок","category":"Мороженое","unit":"g","default":100},
    {"id":63038,"name":"Рожок клубничный","calories":240,"protein":3.5,"fat":12,"carbs":29,"brand":"Рожок","category":"Мороженое","unit":"g","default":100},
    {"id":63039,"name":"Рожок шоколадный","calories":260,"protein":4,"fat":14,"carbs":28,"brand":"Рожок","category":"Мороженое","unit":"g","default":100},
    
    // --- ЗАМОРОЖЕННЫЕ ДЕСЕРТЫ ---
    {"id":63040,"name":"Мороженое Милка шоколадное","calories":260,"protein":4.5,"fat":15,"carbs":27,"brand":"Milka","category":"Мороженое","unit":"g","default":100},
    {"id":63041,"name":"Мороженое Милка клубничное","calories":255,"protein":4.2,"fat":14.8,"carbs":27.2,"brand":"Milka","category":"Мороженое","unit":"g","default":100},
    {"id":63042,"name":"Мороженое Милка с печеньем","calories":270,"protein":4.5,"fat":16,"carbs":28,"brand":"Milka","category":"Мороженое","unit":"g","default":100},
    {"id":63043,"name":"Мороженое Киндер Буэно","calories":320,"protein":4,"fat":18,"carbs":35,"brand":"Kinder","category":"Мороженое","unit":"g","default":100},
    {"id":63044,"name":"Мороженое Twix","calories":280,"protein":4.2,"fat":16,"carbs":30,"brand":"Twix","category":"Мороженое","unit":"g","default":100},
    {"id":63045,"name":"Мороженое Snickers","calories":290,"protein":4.5,"fat":17,"carbs":29,"brand":"Snickers","category":"Мороженое","unit":"g","default":100},
    {"id":63046,"name":"Мороженое Mars","calories":285,"protein":4.3,"fat":16.5,"carbs":29.5,"brand":"Mars","category":"Мороженое","unit":"g","default":100},
    {"id":63047,"name":"Мороженое Bounty","calories":270,"protein":4,"fat":15,"carbs":30,"brand":"Bounty","category":"Мороженое","unit":"g","default":100},
    
    // --- ФРУКТОВЫЙ ЛЁД ---
    {"id":63048,"name":"Фруктовый лёд клубничный","calories":70,"protein":0,"fat":0,"carbs":18,"brand":"Фруктовый лёд","category":"Мороженое","unit":"g","default":70},
    {"id":63049,"name":"Фруктовый лёд лимонный","calories":68,"protein":0,"fat":0,"carbs":17.5,"brand":"Фруктовый лёд","category":"Мороженое","unit":"g","default":70},
    {"id":63050,"name":"Фруктовый лёд малиновый","calories":70,"protein":0,"fat":0,"carbs":18,"brand":"Фруктовый лёд","category":"Мороженое","unit":"g","default":70},
    {"id":63051,"name":"Фруктовый лёд ананасовый","calories":68,"protein":0,"fat":0,"carbs":17,"brand":"Фруктовый лёд","category":"Мороженое","unit":"g","default":70},
    {"id":63052,"name":"Фруктовый лёд манго","calories":72,"protein":0,"fat":0,"carbs":18.5,"brand":"Фруктовый лёд","category":"Мороженое","unit":"g","default":70},
    
    // ==================== ОВОЩИ ====================
    
    // --- КОРНЕПЛОДЫ ---
    {"id":63053,"name":"Картофель молодой","calories":77,"protein":2,"fat":0.4,"carbs":17,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63054,"name":"Картофель старый","calories":80,"protein":2.1,"fat":0.5,"carbs":18,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63055,"name":"Морковь свежая","calories":41,"protein":0.9,"fat":0.2,"carbs":9.6,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63056,"name":"Свёкла","calories":43,"protein":1.6,"fat":0.2,"carbs":9.6,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63057,"name":"Редис","calories":20,"protein":1.2,"fat":0.1,"carbs":4.1,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63058,"name":"Редька","calories":20,"protein":1.3,"fat":0.1,"carbs":4.2,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63059,"name":"Дайкон","calories":18,"protein":1.2,"fat":0.1,"carbs":3.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63060,"name":"Сельдерей корневой","calories":42,"protein":1.5,"fat":0.3,"carbs":9,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63061,"name":"Пастернак","calories":75,"protein":1.2,"fat":0.3,"carbs":17.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63062,"name":"Петрушка корневая","calories":47,"protein":2.2,"fat":0.3,"carbs":10,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    
    // --- КАПУСТНЫЕ ---
    {"id":63063,"name":"Капуста белокочанная","calories":27,"protein":1.8,"fat":0.1,"carbs":4.7,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63064,"name":"Капуста краснокочанная","calories":31,"protein":1.5,"fat":0.2,"carbs":6.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63065,"name":"Капуста цветная","calories":25,"protein":1.9,"fat":0.3,"carbs":4.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63066,"name":"Брокколи","calories":34,"protein":2.8,"fat":0.4,"carbs":6.6,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63067,"name":"Капуста брюссельская","calories":43,"protein":3.4,"fat":0.3,"carbs":8.3,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63068,"name":"Капуста пекинская","calories":16,"protein":1.2,"fat":0.2,"carbs":2.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63069,"name":"Капуста савойская","calories":27,"protein":2.5,"fat":0.3,"carbs":4.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63070,"name":"Кольраби","calories":27,"protein":1.7,"fat":0.1,"carbs":5.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63071,"name":"Кале (кучерявая капуста)","calories":49,"protein":4.3,"fat":0.9,"carbs":8.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    
    // --- ЛУКОВЫЕ ---
    {"id":63072,"name":"Лук репчатый","calories":40,"protein":1.1,"fat":0.1,"carbs":8.7,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63073,"name":"Лук красный","calories":40,"protein":1.2,"fat":0.1,"carbs":9,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63074,"name":"Лук порей","calories":61,"protein":2.1,"fat":0.3,"carbs":14.2,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63075,"name":"Лук шалот","calories":72,"protein":2.5,"fat":0.1,"carbs":16.8,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63076,"name":"Чеснок","calories":149,"protein":6.4,"fat":0.5,"carbs":33.1,"brand":"Овощи","category":"Овощи","unit":"g","default":10},
    {"id":63077,"name":"Зелёный лук","calories":32,"protein":1.3,"fat":0.1,"carbs":6.5,"brand":"Овощи","category":"Овощи","unit":"g","default":20},
    
    // --- ТЫКВЕННЫЕ ---
    {"id":63078,"name":"Тыква","calories":26,"protein":1.3,"fat":0.3,"carbs":6.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63079,"name":"Кабачок","calories":17,"protein":1.2,"fat":0.3,"carbs":3.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63080,"name":"Цуккини","calories":17,"protein":1.2,"fat":0.3,"carbs":3.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63081,"name":"Патиссон","calories":19,"protein":1.3,"fat":0.2,"carbs":4,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63082,"name":"Огурец грунтовый","calories":15,"protein":0.7,"fat":0.1,"carbs":3,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63083,"name":"Огурец тепличный","calories":14,"protein":0.6,"fat":0.1,"carbs":2.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63084,"name":"Огурец корнишон","calories":16,"protein":0.8,"fat":0.1,"carbs":3.2,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    
    // --- ТОМАТНЫЕ ---
    {"id":63085,"name":"Помидор розовый","calories":18,"protein":0.9,"fat":0.2,"carbs":3.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63086,"name":"Помидор красный","calories":18,"protein":0.9,"fat":0.2,"carbs":3.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63087,"name":"Помидор жёлтый","calories":15,"protein":1,"fat":0.2,"carbs":3,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63088,"name":"Помидор черри","calories":18,"protein":0.9,"fat":0.2,"carbs":3.8,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63089,"name":"Помидор сливка","calories":19,"protein":1,"fat":0.2,"carbs":4,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63090,"name":"Перец болгарский красный","calories":31,"protein":1,"fat":0.3,"carbs":6,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63091,"name":"Перец болгарский жёлтый","calories":27,"protein":1,"fat":0.2,"carbs":5.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63092,"name":"Перец болгарский зелёный","calories":26,"protein":1,"fat":0.2,"carbs":5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63093,"name":"Перец чили","calories":40,"protein":1.5,"fat":0.2,"carbs":8,"brand":"Овощи","category":"Овощи","unit":"g","default":10},
    {"id":63094,"name":"Баклажан","calories":25,"protein":1,"fat":0.1,"carbs":5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    
    // --- БОБОВЫЕ (СВЕЖИЕ) ---
    {"id":63095,"name":"Фасоль стручковая","calories":31,"protein":1.8,"fat":0.1,"carbs":7.1,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63096,"name":"Горошек зелёный свежий","calories":81,"protein":5.4,"fat":0.4,"carbs":14.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63097,"name":"Горох стручковый","calories":55,"protein":3,"fat":0.2,"carbs":10,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63098,"name":"Нут свежий","calories":139,"protein":8,"fat":2.5,"carbs":21,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    
    // --- ЛИСТОВЫЕ ---
    {"id":63099,"name":"Салат айсберг","calories":15,"protein":0.9,"fat":0.2,"carbs":2.9,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63100,"name":"Салат романо","calories":17,"protein":1,"fat":0.2,"carbs":3.5,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63101,"name":"Салат латук","calories":15,"protein":1.5,"fat":0.2,"carbs":2,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63102,"name":"Салат фризе","calories":15,"protein":1,"fat":0.2,"carbs":3,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63103,"name":"Салат лолло россо","calories":15,"protein":1,"fat":0.2,"carbs":3,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63104,"name":"Руккола","calories":25,"protein":2.6,"fat":0.7,"carbs":3.7,"brand":"Овощи","category":"Овощи","unit":"g","default":30},
    {"id":63105,"name":"Шпинат свежий","calories":23,"protein":2.9,"fat":0.4,"carbs":3.6,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63106,"name":"Укроп","calories":38,"protein":2.5,"fat":0.6,"carbs":6.3,"brand":"Зелень","category":"Овощи","unit":"g","default":10},
    {"id":63107,"name":"Петрушка","calories":36,"protein":3,"fat":0.8,"carbs":6.3,"brand":"Зелень","category":"Овощи","unit":"g","default":10},
    {"id":63108,"name":"Кинза","calories":23,"protein":2.1,"fat":0.5,"carbs":3.7,"brand":"Зелень","category":"Овощи","unit":"g","default":10},
    {"id":63109,"name":"Базилик","calories":44,"protein":3.2,"fat":0.6,"carbs":8,"brand":"Зелень","category":"Овощи","unit":"g","default":10},
    {"id":63110,"name":"Мята","calories":44,"protein":3.3,"fat":0.6,"carbs":8.5,"brand":"Зелень","category":"Овощи","unit":"g","default":10},
    {"id":63111,"name":"Сельдерей стебель","calories":16,"protein":0.7,"fat":0.2,"carbs":3,"brand":"Овощи","category":"Овощи","unit":"g","default":50},
    {"id":63112,"name":"Спаржа","calories":20,"protein":2.2,"fat":0.1,"carbs":3.9,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    
    // --- ПРОЧИЕ ОВОЩИ ---
    {"id":63113,"name":"Артишок","calories":47,"protein":3.3,"fat":0.2,"carbs":10.5,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63114,"name":"Топинамбур","calories":73,"protein":2.1,"fat":0.1,"carbs":17,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63115,"name":"Ревень","calories":16,"protein":0.7,"fat":0.2,"carbs":3.8,"brand":"Овощи","category":"Овощи","unit":"g","default":100},
    {"id":63116,"name":"Шампиньоны свежие","calories":22,"protein":4.3,"fat":0.1,"carbs":0.5,"brand":"Грибы","category":"Овощи","unit":"g","default":100},
    {"id":63117,"name":"Вешенки свежие","calories":33,"protein":3.3,"fat":0.4,"carbs":6.1,"brand":"Грибы","category":"Овощи","unit":"g","default":100},
    
    // ==================== ФРУКТЫ ====================
    
    // --- СЕМЕЧКОВЫЕ ---
    {"id":63118,"name":"Яблоко зелёное","calories":47,"protein":0.4,"fat":0.4,"carbs":11.8,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    {"id":63119,"name":"Яблоко красное","calories":52,"protein":0.3,"fat":0.2,"carbs":14,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    {"id":63120,"name":"Яблоко жёлтое","calories":48,"protein":0.3,"fat":0.3,"carbs":12.5,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    {"id":63121,"name":"Груша","calories":57,"protein":0.4,"fat":0.3,"carbs":15,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":120,"default":1},
    {"id":63122,"name":"Айва","calories":57,"protein":0.4,"fat":0.1,"carbs":15.3,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    
    // --- ЦИТРУСОВЫЕ ---
    {"id":63123,"name":"Апельсин","calories":47,"protein":0.9,"fat":0.1,"carbs":12,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    {"id":63124,"name":"Мандарин","calories":53,"protein":0.8,"fat":0.3,"carbs":13,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":60,"default":1},
    {"id":63125,"name":"Лимон","calories":29,"protein":1.1,"fat":0.3,"carbs":9.3,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":80,"default":1},
    {"id":63126,"name":"Лайм","calories":30,"protein":0.7,"fat":0.2,"carbs":11,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":60,"default":1},
    {"id":63127,"name":"Грейпфрут","calories":42,"protein":0.8,"fat":0.1,"carbs":10,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":200,"default":1},
    {"id":63128,"name":"Помело","calories":38,"protein":0.8,"fat":0,"carbs":9,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":300,"default":1},
    {"id":63129,"name":"Свити (оробланко)","calories":35,"protein":0.7,"fat":0,"carbs":8.5,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":200,"default":1},
    
    // --- КОСТОЧКОВЫЕ ---
    {"id":63130,"name":"Слива","calories":46,"protein":0.7,"fat":0.3,"carbs":12,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":50,"default":3},
    {"id":63131,"name":"Алыча","calories":34,"protein":0.4,"fat":0.1,"carbs":8.5,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":30,"default":5},
    {"id":63132,"name":"Персик","calories":39,"protein":0.9,"fat":0.3,"carbs":10,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":120,"default":1},
    {"id":63133,"name":"Нектарин","calories":44,"protein":1.1,"fat":0.3,"carbs":11,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":120,"default":1},
    {"id":63134,"name":"Абрикос","calories":48,"protein":1.4,"fat":0.4,"carbs":11,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":40,"default":3},
    {"id":63135,"name":"Вишня","calories":52,"protein":1,"fat":0.2,"carbs":12,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63136,"name":"Черешня","calories":63,"protein":1.1,"fat":0.2,"carbs":16,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    
    // --- ТРОПИЧЕСКИЕ ---
    {"id":63137,"name":"Банан","calories":89,"protein":1.1,"fat":0.3,"carbs":23,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":120,"default":1},
    {"id":63138,"name":"Киви","calories":61,"protein":1.1,"fat":0.5,"carbs":15,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":70,"default":1},
    {"id":63139,"name":"Манго","calories":60,"protein":0.8,"fat":0.4,"carbs":15,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":200,"default":1},
    {"id":63140,"name":"Ананас","calories":50,"protein":0.5,"fat":0.1,"carbs":13,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63141,"name":"Папайя","calories":43,"protein":0.5,"fat":0.3,"carbs":11,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63142,"name":"Маракуйя","calories":97,"protein":2.2,"fat":0.7,"carbs":23,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":30,"default":2},
    {"id":63143,"name":"Личи","calories":66,"protein":0.8,"fat":0.4,"carbs":16,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":15,"default":10},
    {"id":63144,"name":"Рамбутан","calories":84,"protein":0.6,"fat":0.2,"carbs":21,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":25,"default":5},
    {"id":63145,"name":"Дуриан","calories":147,"protein":1.5,"fat":5.3,"carbs":23,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63146,"name":"Карамбола","calories":31,"protein":0.5,"fat":0.3,"carbs":7,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":80,"default":1},
    {"id":63147,"name":"Фейхоа","calories":49,"protein":0.9,"fat":0.4,"carbs":11,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63148,"name":"Хурма","calories":70,"protein":0.5,"fat":0.4,"carbs":16,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    {"id":63149,"name":"Инжир","calories":74,"protein":0.8,"fat":0.3,"carbs":19,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":50,"default":2},
    {"id":63150,"name":"Гранат","calories":83,"protein":1.7,"fat":1.2,"carbs":18,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":200,"default":1},
    {"id":63151,"name":"Авокадо","calories":160,"protein":2,"fat":15,"carbs":6,"brand":"Фрукты","category":"Фрукты","unit":"pcs","unit_name":"шт","piece_weight":150,"default":1},
    
    // --- ЯГОДЫ ---
    {"id":63152,"name":"Клубника","calories":32,"protein":0.7,"fat":0.3,"carbs":8,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63153,"name":"Малина","calories":52,"protein":1.2,"fat":0.7,"carbs":12,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63154,"name":"Ежевика","calories":43,"protein":1.4,"fat":0.5,"carbs":9.6,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63155,"name":"Голубика","calories":57,"protein":0.7,"fat":0.3,"carbs":14,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63156,"name":"Черника","calories":57,"protein":0.7,"fat":0.3,"carbs":14,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63157,"name":"Брусника","calories":43,"protein":0.6,"fat":0.5,"carbs":9.5,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63158,"name":"Клюква","calories":46,"protein":0.4,"fat":0.1,"carbs":12,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63159,"name":"Смородина чёрная","calories":63,"protein":1,"fat":0.4,"carbs":15,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63160,"name":"Смородина красная","calories":56,"protein":0.8,"fat":0.2,"carbs":14,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63161,"name":"Крыжовник","calories":44,"protein":0.9,"fat":0.2,"carbs":10,"brand":"Ягоды","category":"Фрукты","unit":"g","default":100},
    {"id":63162,"name":"Виноград зелёный","calories":69,"protein":0.6,"fat":0.2,"carbs":18,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63163,"name":"Виноград красный","calories":69,"protein":0.6,"fat":0.2,"carbs":18,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63164,"name":"Виноград чёрный","calories":70,"protein":0.6,"fat":0.2,"carbs":18.5,"brand":"Фрукты","category":"Фрукты","unit":"g","default":100},
    {"id":63165,"name":"Арбуз","calories":30,"protein":0.6,"fat":0.1,"carbs":8,"brand":"Фрукты","category":"Фрукты","unit":"g","default":200},
    {"id":63166,"name":"Дыня","calories":34,"protein":0.8,"fat":0.2,"carbs":8,"brand":"Фрукты","category":"Фрукты","unit":"g","default":150}
];

// ============================================
// ЗАМОРОЖЕННЫЕ ОВОЩИ И ЯГОДЫ, ВОСТОЧНЫЕ СЛАДОСТИ,
// ЧАЙ, КОФЕ, СУХИЕ ЗАВТРАКИ, КУКУРУЗНЫЕ ПАЛОЧКИ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const FROZEN_EASTERN_TEA_COFFEE_PRODUCTS = [
    // ==================== ЗАМОРОЖЕННЫЕ ОВОЩИ (БРЕНДЫ) ====================
    
    // --- 4 СЕЗОНА ---
    {"id":64001,"name":"4 Сезона Овощная смесь мексиканская","calories":50,"protein":2,"fat":0.5,"carbs":11,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64002,"name":"4 Сезона Овощная смесь гавайская","calories":45,"protein":1.5,"fat":0.3,"carbs":10,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64003,"name":"4 Сезона Брокколи","calories":34,"protein":3,"fat":0.4,"carbs":6,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64004,"name":"4 Сезона Цветная капуста","calories":25,"protein":1.9,"fat":0.3,"carbs":4.5,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64005,"name":"4 Сезона Смесь 8 овощей","calories":45,"protein":2.5,"fat":0.2,"carbs":8,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64006,"name":"4 Сезона Овощи гриль","calories":50,"protein":2,"fat":3,"carbs":6,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64007,"name":"4 Сезона Фасоль стручковая","calories":31,"protein":1.8,"fat":0.1,"carbs":7,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64008,"name":"4 Сезона Шпинат","calories":23,"protein":2.9,"fat":0.4,"carbs":3.6,"brand":"4 Сезона","category":"Замороженные овощи","unit":"g","default":100},
    
    // --- GREEN RIBBON ---
    {"id":64009,"name":"Green Ribbon Брокколи","calories":34,"protein":3,"fat":0.4,"carbs":6,"brand":"Green Ribbon","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64010,"name":"Green Ribbon Цветная капуста","calories":25,"protein":1.9,"fat":0.3,"carbs":4.5,"brand":"Green Ribbon","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64011,"name":"Green Ribbon Овощная смесь","calories":45,"protein":2,"fat":0.5,"carbs":8,"brand":"Green Ribbon","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64012,"name":"Green Ribbon Перец сладкий","calories":26,"protein":1,"fat":0.2,"carbs":5,"brand":"Green Ribbon","category":"Замороженные овощи","unit":"g","default":100},
    
    // --- МИРАТОРГ ---
    {"id":64013,"name":"Мираторг Мексиканская смесь","calories":50,"protein":2.5,"fat":0.5,"carbs":11,"brand":"Мираторг","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64014,"name":"Мираторг Гавайская смесь","calories":100,"protein":4,"fat":1,"carbs":18,"brand":"Мираторг","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64015,"name":"Мираторг Овощи гриль","calories":50,"protein":2,"fat":3,"carbs":6,"brand":"Мираторг","category":"Замороженные овощи","unit":"g","default":100},
    
    // --- BONDUELLE ---
    {"id":64016,"name":"Bonduelle Смесь овощная мексиканская","calories":50,"protein":2.5,"fat":0.5,"carbs":10,"brand":"Bonduelle","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64017,"name":"Bonduelle Брокколи","calories":34,"protein":3,"fat":0.4,"carbs":6,"brand":"Bonduelle","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64018,"name":"Bonduelle Стручковая фасоль","calories":31,"protein":1.8,"fat":0.1,"carbs":7,"brand":"Bonduelle","category":"Замороженные овощи","unit":"g","default":100},
    
    // --- БЕЗ БРЕНДА (ОБЩИЕ ПОЗИЦИИ) ---
    {"id":64019,"name":"Смесь овощная мексиканская","calories":50,"protein":2,"fat":0.5,"carbs":11,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64020,"name":"Смесь овощная гавайская","calories":45,"protein":1.5,"fat":0.3,"carbs":10,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64021,"name":"Смесь овощная лечо","calories":40,"protein":1,"fat":0.5,"carbs":9,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64022,"name":"Смесь овощная рататуй","calories":45,"protein":1.5,"fat":0.5,"carbs":10,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64023,"name":"Смесь овощная для супа","calories":40,"protein":1.5,"fat":0.3,"carbs":8,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64024,"name":"Смесь овощная по-деревенски","calories":50,"protein":2,"fat":0.5,"carbs":11,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64025,"name":"Брокколи замороженная","calories":34,"protein":3,"fat":0.4,"carbs":6,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64026,"name":"Цветная капуста замороженная","calories":25,"protein":1.9,"fat":0.3,"carbs":4.5,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64027,"name":"Стручковая фасоль замороженная","calories":31,"protein":1.8,"fat":0.1,"carbs":7,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64028,"name":"Зелёный горошек замороженный","calories":81,"protein":5.4,"fat":0.4,"carbs":14.5,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64029,"name":"Кукуруза замороженная","calories":93,"protein":3,"fat":1.5,"carbs":17,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64030,"name":"Перец сладкий замороженный","calories":26,"protein":1,"fat":0.2,"carbs":5,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    {"id":64031,"name":"Морковь замороженная","calories":41,"protein":0.9,"fat":0.2,"carbs":9.6,"brand":"Замороженные","category":"Замороженные овощи","unit":"g","default":100},
    
    // ==================== ЗАМОРОЖЕННЫЕ ЯГОДЫ (БРЕНДЫ) ====================
    
    // --- 4 СЕЗОНА ЯГОДЫ ---
    {"id":64032,"name":"4 Сезона Клубника замороженная","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64033,"name":"4 Сезона Малина замороженная","calories":52,"protein":1.2,"fat":0.7,"carbs":12,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64034,"name":"4 Сезона Смесь ягод","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64035,"name":"4 Сезона Вишня замороженная","calories":50,"protein":1,"fat":0.4,"carbs":11,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64036,"name":"4 Сезона Клюква замороженная","calories":46,"protein":0.5,"fat":0.2,"carbs":12,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64037,"name":"4 Сезона Смородина чёрная","calories":63,"protein":1,"fat":0.4,"carbs":15,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64038,"name":"4 Сезона Смородина красная","calories":56,"protein":0.8,"fat":0.2,"carbs":14,"brand":"4 Сезона","category":"Замороженные ягоды","unit":"g","default":100},
    
    // --- GREEN RIBBON ЯГОДЫ ---
    {"id":64039,"name":"Green Ribbon Клубника","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"brand":"Green Ribbon","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64040,"name":"Green Ribbon Вишня","calories":50,"protein":1,"fat":0.4,"carbs":11,"brand":"Green Ribbon","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64041,"name":"Green Ribbon Смесь ягод","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"brand":"Green Ribbon","category":"Замороженные ягоды","unit":"g","default":100},
    
    // --- БЕЗ БРЕНДА (ОБЩИЕ ПОЗИЦИИ) ---
    {"id":64042,"name":"Клубника замороженная","calories":40,"protein":1,"fat":0.4,"carbs":7.5,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64043,"name":"Малина замороженная","calories":52,"protein":1.2,"fat":0.7,"carbs":12,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64044,"name":"Вишня замороженная","calories":50,"protein":1,"fat":0.4,"carbs":11,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64045,"name":"Черешня замороженная","calories":63,"protein":1.1,"fat":0.2,"carbs":16,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64046,"name":"Смесь лесных ягод","calories":45,"protein":0.8,"fat":0.3,"carbs":10,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64047,"name":"Черника замороженная","calories":57,"protein":0.7,"fat":0.3,"carbs":14,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64048,"name":"Голубика замороженная","calories":57,"protein":0.7,"fat":0.3,"carbs":14,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64049,"name":"Клюква замороженная","calories":46,"protein":0.5,"fat":0.2,"carbs":12,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64050,"name":"Брусника замороженная","calories":43,"protein":0.6,"fat":0.5,"carbs":9.5,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64051,"name":"Смородина чёрная замороженная","calories":63,"protein":1,"fat":0.4,"carbs":15,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64052,"name":"Смородина красная замороженная","calories":56,"protein":0.8,"fat":0.2,"carbs":14,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64053,"name":"Крыжовник замороженный","calories":44,"protein":0.9,"fat":0.2,"carbs":10,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    {"id":64054,"name":"Ежевика замороженная","calories":43,"protein":1.4,"fat":0.5,"carbs":9.6,"brand":"Замороженные","category":"Замороженные ягоды","unit":"g","default":100},
    
    // ==================== ВОСТОЧНЫЕ СЛАДОСТИ ====================
    
    // --- ПАХЛАВА ---
    {"id":64055,"name":"Пахлава классическая","calories":550,"protein":8,"fat":35,"carbs":50,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64056,"name":"Пахлава ореховая","calories":560,"protein":9,"fat":36,"carbs":49,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64057,"name":"Пахлава фисташковая","calories":570,"protein":9.5,"fat":37,"carbs":48,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64058,"name":"Пахлава турецкая","calories":555,"protein":8.5,"fat":35.5,"carbs":49.5,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64059,"name":"Пахлава греческая","calories":540,"protein":7.5,"fat":34,"carbs":51,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64060,"name":"Пахлава бакинская","calories":560,"protein":8,"fat":36,"carbs":50,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    
    // --- ЧУРЧХЕЛА ---
    {"id":64061,"name":"Чурчхела грецкий орех","calories":380,"protein":10,"fat":15,"carbs":55,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":80},
    {"id":64062,"name":"Чурчхела фундук","calories":390,"protein":10.5,"fat":16,"carbs":54,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":80},
    {"id":64063,"name":"Чурчхела миндаль","calories":395,"protein":11,"fat":16.5,"carbs":53.5,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":80},
    {"id":64064,"name":"Чурчхела арахис","calories":385,"protein":9.5,"fat":15.5,"carbs":55.5,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":80},
    {"id":64065,"name":"Чурчхела микс орехов","calories":390,"protein":10.5,"fat":16,"carbs":54,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":80},
    
    // --- РАХАТ-ЛУКУМ ---
    {"id":64066,"name":"Рахат-лукум классический","calories":350,"protein":0.5,"fat":0.5,"carbs":87,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":30},
    {"id":64067,"name":"Рахат-лукум фруктовый","calories":345,"protein":0.5,"fat":0.3,"carbs":86.5,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":30},
    {"id":64068,"name":"Рахат-лукум ореховый","calories":360,"protein":2,"fat":2,"carbs":85,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":30},
    {"id":64069,"name":"Рахат-лукум с кокосом","calories":355,"protein":1,"fat":1.5,"carbs":86,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":30},
    
    // --- КОЗИНАКИ ---
    {"id":64070,"name":"Козинаки подсолнечные","calories":520,"protein":12,"fat":30,"carbs":50,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":40},
    {"id":64071,"name":"Козинаки кунжутные","calories":560,"protein":14,"fat":35,"carbs":45,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":40},
    {"id":64072,"name":"Козинаки арахисовые","calories":540,"protein":13,"fat":32,"carbs":48,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":40},
    {"id":64073,"name":"Козинаки грецкий орех","calories":550,"protein":12,"fat":33,"carbs":47,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":40},
    
    // --- ЧАК-ЧАК ---
    {"id":64074,"name":"Чак-чак традиционный","calories":460,"protein":5,"fat":31,"carbs":40,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64075,"name":"Чак-чак с мёдом","calories":470,"protein":5.5,"fat":31.5,"carbs":41,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    {"id":64076,"name":"Чак-чак с орехами","calories":480,"protein":6,"fat":33,"carbs":40,"brand":"Восточные сладости","category":"Восточные сладости","unit":"g","default":50},
    
    // --- ПАСТИЛА И ЗЕФИР ---
    {"id":64077,"name":"Пастила белевская","calories":280,"protein":2,"fat":0.5,"carbs":68,"brand":"Белевская","category":"Пастила","unit":"g","default":50},
    {"id":64078,"name":"Пастила яблочная","calories":270,"protein":1.5,"fat":0.3,"carbs":67,"brand":"Пастила","category":"Пастила","unit":"g","default":50},
    {"id":64079,"name":"Пастила клубничная","calories":275,"protein":1.8,"fat":0.4,"carbs":67.5,"brand":"Пастила","category":"Пастила","unit":"g","default":50},
    {"id":64080,"name":"Зефир классический","calories":320,"protein":0.8,"fat":0,"carbs":79,"brand":"Зефир","category":"Зефир","unit":"g","default":40},
    {"id":64081,"name":"Зефир шоколадный","calories":340,"protein":1.5,"fat":4,"carbs":75,"brand":"Зефир","category":"Зефир","unit":"g","default":40},
    {"id":64082,"name":"Зефир в шоколаде","calories":350,"protein":2,"fat":5,"carbs":73,"brand":"Зефир","category":"Зефир","unit":"g","default":40},
    
    // ==================== ЧАЙ ====================
    
    // --- ЧАЙ GREENFIELD ---
    {"id":64083,"name":"Greenfield Golden Ceylon чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    {"id":64084,"name":"Greenfield Kenyan Sunrise чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    {"id":64085,"name":"Greenfield Magic Yunnan чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    {"id":64086,"name":"Greenfield Green Earl Grey зелёный","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    {"id":64087,"name":"Greenfield Jasmine Garden зелёный","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    {"id":64088,"name":"Greenfield Forest Berries фруктовый","calories":5,"protein":0,"fat":0,"carbs":1,"brand":"Greenfield","category":"Чай","unit":"g","default":2},
    
    // --- ЧАЙ TESS ---
    {"id":64089,"name":"Tess Плесень Панда чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Tess","category":"Чай","unit":"g","default":2},
    {"id":64090,"name":"Tess Молочный улун","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Tess","category":"Чай","unit":"g","default":2},
    {"id":64091,"name":"Tess Клубника зелёный","calories":4,"protein":0,"fat":0,"carbs":0.8,"brand":"Tess","category":"Чай","unit":"g","default":2},
    
    // --- ЧАЙ LIPTON ---
    {"id":64092,"name":"Lipton Yellow Label чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Lipton","category":"Чай","unit":"g","default":2},
    {"id":64093,"name":"Lipton Classic чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Lipton","category":"Чай","unit":"g","default":2},
    {"id":64094,"name":"Lipton Green Tea зелёный","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Lipton","category":"Чай","unit":"g","default":2},
    
    // --- ЧАЙ АХМАД ---
    {"id":64095,"name":"Ahmad Tea English Breakfast чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Ahmad Tea","category":"Чай","unit":"g","default":2},
    {"id":64096,"name":"Ahmad Tea Earl Grey чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Ahmad Tea","category":"Чай","unit":"g","default":2},
    {"id":64097,"name":"Ahmad Tea Green Tea зелёный","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Ahmad Tea","category":"Чай","unit":"g","default":2},
    
    // --- ЧАЙ МАЙСКИЙ ---
    {"id":64098,"name":"Майский чёрный","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Майский","category":"Чай","unit":"g","default":2},
    {"id":64099,"name":"Майский зелёный","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Майский","category":"Чай","unit":"g","default":2},
    {"id":64100,"name":"Майский каркаде","calories":15,"protein":0,"fat":0,"carbs":3.5,"brand":"Майский","category":"Чай","unit":"g","default":2},
    
    // --- ЧАЙ В КРУПНОМ ЛИСТЕ ---
    {"id":64101,"name":"Чай чёрный цейлонский","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64102,"name":"Чай чёрный индийский","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64103,"name":"Чай зелёный китайский","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64104,"name":"Чай улун","calories":2,"protein":0.1,"fat":0,"carbs":0.3,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64105,"name":"Чай пуэр","calories":3,"protein":0.1,"fat":0,"carbs":0.5,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64106,"name":"Чай каркаде (гибискус)","calories":15,"protein":0,"fat":0,"carbs":3.5,"brand":"Крупнолистовой","category":"Чай","unit":"g","default":2},
    {"id":64107,"name":"Чай ромашковый","calories":5,"protein":0,"fat":0,"carbs":1,"brand":"Травяной","category":"Чай","unit":"g","default":2},
    {"id":64108,"name":"Чай имбирный","calories":10,"protein":0,"fat":0,"carbs":2,"brand":"Травяной","category":"Чай","unit":"g","default":2},
    {"id":64109,"name":"Чай мате","calories":5,"protein":0,"fat":0,"carbs":1,"brand":"Травяной","category":"Чай","unit":"g","default":2},
    
    // ==================== КОФЕ ====================
    
    // --- КОФЕ JACOBS ---
    {"id":64110,"name":"Jacobs Monarch растворимый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Jacobs","category":"Кофе","unit":"g","default":2},
    {"id":64111,"name":"Jacobs Millicano растворимый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Jacobs","category":"Кофе","unit":"g","default":2},
    {"id":64112,"name":"Jacobs Grain в зёрнах","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Jacobs","category":"Кофе","unit":"g","default":2},
    
    // --- КОФЕ NESCAFE ---
    {"id":64113,"name":"Nescafe Gold растворимый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Nescafe","category":"Кофе","unit":"g","default":2},
    {"id":64114,"name":"Nescafe Classic растворимый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Nescafe","category":"Кофе","unit":"g","default":2},
    {"id":64115,"name":"Nescafe Cappuccino 3в1","calories":420,"protein":3,"fat":8,"carbs":86,"brand":"Nescafe","category":"Кофе","unit":"g","default":20},
    {"id":64116,"name":"Nescafe Latte 3в1","calories":420,"protein":3,"fat":8,"carbs":86,"brand":"Nescafe","category":"Кофе","unit":"g","default":20},
    
    // --- КОФЕ JARDIN ---
    {"id":64117,"name":"Jardin Espresso растворимый","calories":218,"protein":14,"fat":14.5,"carbs":2.8,"brand":"Jardin","category":"Кофе","unit":"g","default":2},
    {"id":64118,"name":"Jardin Colombia в зёрнах","calories":218,"protein":14,"fat":14.5,"carbs":2.8,"brand":"Jardin","category":"Кофе","unit":"g","default":2},
    {"id":64119,"name":"Jardin Brazil в зёрнах","calories":218,"protein":14,"fat":14.5,"carbs":2.8,"brand":"Jardin","category":"Кофе","unit":"g","default":2},
    
    // --- КОФЕ LAVAZZA ---
    {"id":64120,"name":"Lavazza Qualita Oro в зёрнах","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Lavazza","category":"Кофе","unit":"g","default":2},
    {"id":64121,"name":"Lavazza Crema e Gusto молотый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Lavazza","category":"Кофе","unit":"g","default":2},
    
    // --- КОФЕ РАСТВОРИМЫЙ РОССИЙСКИХ БРЕНДОВ ---
    {"id":64122,"name":"Черная Карта растворимый","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Черная Карта","category":"Кофе","unit":"g","default":2},
    {"id":64123,"name":"Московская Кофейня растворимый","calories":14,"protein":0.3,"fat":0,"carbs":0.5,"brand":"Московская Кофейня","category":"Кофе","unit":"g","default":2},
    {"id":64124,"name":"Fresco Arabica растворимый","calories":340,"protein":18.6,"fat":0.1,"carbs":65.4,"brand":"Fresco","category":"Кофе","unit":"g","default":2},
    {"id":64125,"name":"Ambassador Platinum растворимый","calories":218,"protein":13.9,"fat":14.4,"carbs":2.8,"brand":"Ambassador","category":"Кофе","unit":"g","default":2},
    
    // --- КОФЕ В КАПСУЛАХ ---
    {"id":64126,"name":"Кофе в капсулах Nescafe Dolce Gusto","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Nescafe","category":"Кофе","unit":"caps","unit_name":"капсула","default":1},
    {"id":64127,"name":"Кофе в капсулах Tassimo","calories":220,"protein":14,"fat":1,"carbs":35,"brand":"Tassimo","category":"Кофе","unit":"caps","unit_name":"капсула","default":1},
    
    // ==================== СУХИЕ ЗАВТРАКИ ====================
    
    // --- KELLOGG'S ---
    {"id":64128,"name":"Kellogg's Corn Flakes кукурузные хлопья","calories":380,"protein":7,"fat":3,"carbs":84,"brand":"Kellogg's","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64129,"name":"Kellogg's Frosted Flakes глазированные","calories":390,"protein":6,"fat":3,"carbs":86,"brand":"Kellogg's","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64130,"name":"Kellogg's Coco Pops шоколадные","calories":410,"protein":7,"fat":6,"carbs":82,"brand":"Kellogg's","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64131,"name":"Kellogg's Special K","calories":380,"protein":10,"fat":2,"carbs":80,"brand":"Kellogg's","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64132,"name":"Kellogg's Fitness","calories":370,"protein":9,"fat":3,"carbs":78,"brand":"Kellogg's","category":"Сухие завтраки","unit":"g","default":30},
    
    // --- NESQUIK ---
    {"id":64133,"name":"Nesquik Шоколадные шарики","calories":410,"protein":7,"fat":6,"carbs":82,"brand":"Nesquik","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64134,"name":"Nesquik Подушечки с молочной начинкой","calories":430,"protein":8,"fat":10,"carbs":76,"brand":"Nesquik","category":"Сухие завтраки","unit":"g","default":30},
    
    // --- RUSSIAN BRANDS ---
    {"id":64135,"name":"Хрутка Мёд","calories":400,"protein":6,"fat":5,"carbs":83,"brand":"Хрутка","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64136,"name":"Хрутка Шоколадные подушечки","calories":420,"protein":7,"fat":8,"carbs":80,"brand":"Хрутка","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64137,"name":"Любятово Овсяные с мёдом","calories":380,"protein":9,"fat":6,"carbs":75,"brand":"Любятово","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64138,"name":"Любятово Кукурузные","calories":370,"protein":7,"fat":4,"carbs":78,"brand":"Любятово","category":"Сухие завтраки","unit":"g","default":30},
    {"id":64139,"name":"Сила Злаков Мюсли классические","calories":450,"protein":10,"fat":18,"carbs":60,"brand":"Сила Злаков","category":"Сухие завтраки","unit":"g","default":50},
    {"id":64140,"name":"FitStart Каша овсяная","calories":360,"protein":12,"fat":6,"carbs":65,"brand":"FitStart","category":"Сухие завтраки","unit":"g","default":50},
    {"id":64141,"name":"FitStart Каша 5 злаков","calories":350,"protein":11,"fat":5,"carbs":66,"brand":"FitStart","category":"Сухие завтраки","unit":"g","default":50},
    
    // ==================== КУКУРУЗНЫЕ ПАЛОЧКИ ====================
    
    // --- CHEETOS ---
    {"id":64142,"name":"Cheetos кукурузные палочки сыр","calories":470,"protein":7,"fat":22,"carbs":62,"brand":"Cheetos","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64143,"name":"Cheetos кетчуп","calories":490,"protein":7.5,"fat":23,"carbs":63,"brand":"Cheetos","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64144,"name":"Cheetos пицца","calories":490,"protein":8,"fat":24,"carbs":60,"brand":"Cheetos","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64145,"name":"Cheetos бекон","calories":485,"protein":7.5,"fat":23.5,"carbs":61.5,"brand":"Cheetos","category":"Кукурузные палочки","unit":"g","default":30},
    
    // --- RUSSIAN BRANDS ---
    {"id":64146,"name":"Кукурузные палочки сладкие","calories":510,"protein":4,"fat":23,"carbs":72,"brand":"Кузя Лакомкин","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64147,"name":"Кукурузные палочки в шоколаде","calories":540,"protein":5,"fat":28,"carbs":68,"brand":"Кузя Лакомкин","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64148,"name":"Кукурузные палочки с мёдом","calories":520,"protein":4.5,"fat":24,"carbs":70,"brand":"Сладонеж","category":"Кукурузные палочки","unit":"g","default":30},
    {"id":64149,"name":"Кукурузные палочки со вкусом сметаны","calories":480,"protein":7,"fat":20,"carbs":65,"brand":"Хрусteam","category":"Кукурузные палочки","unit":"g","default":30},
];

// ============================================
// КРАБОВЫЕ ПАЛОЧКИ, КАЛЬМАРЫ, ОРЕХИ, СУХОФРУКТЫ,
// ГАЗИРОВКИ, БАТОНЧИКИ, САХАР, СТЕВИЯ, СОУСЫ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const CRAB_SNACKS_NUTS_DRINKS_BARS_SAUCES_PRODUCTS = [
    // ==================== КРАБОВЫЕ ПАЛОЧКИ (БРЕНДЫ) ====================
    
    // --- РУССКОЕ МОРЕ ---
    {"id":65001,"name":"Русское море Крабовые палочки охлаждённые","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"brand":"Русское море","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65002,"name":"Русское море Крабовые палочки замороженные","calories":97,"protein":6,"fat":1,"carbs":10,"brand":"Русское море","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65003,"name":"Русское море Крабовые палочки премиум","calories":100,"protein":7,"fat":2.5,"carbs":12,"brand":"Русское море","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65004,"name":"Русское море Мясо крабовое","calories":97,"protein":6.5,"fat":2.1,"carbs":13,"brand":"Русское море","category":"Крабовые палочки","unit":"g","default":100},
    
    // --- VICI ---
    {"id":65005,"name":"Vici Крабовые палочки замороженные","calories":70,"protein":6.3,"fat":0.1,"carbs":19.7,"brand":"Vici","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65006,"name":"Vici Крабовые палочки охлаждённые","calories":83,"protein":8.5,"fat":0.5,"carbs":11.1,"brand":"Vici","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65007,"name":"Vici Крабовые палочки Любо есть","calories":100,"protein":5.2,"fat":5,"carbs":18.6,"brand":"Vici","category":"Крабовые палочки","unit":"g","default":100},
    {"id":65008,"name":"Vici Мясо крабовое","calories":83,"protein":8.5,"fat":0.5,"carbs":11.1,"brand":"Vici","category":"Крабовые палочки","unit":"g","default":100},
    
    // --- MERRY TASTE ---
    {"id":65009,"name":"Merry Taste Крабовые палочки","calories":95,"protein":6,"fat":2,"carbs":14,"brand":"Merry Taste","category":"Крабовые палочки","unit":"g","default":100},
    
    // --- САНТА БРЕМОР ---
    {"id":65010,"name":"Санта Бремор Мясо краба","calories":100,"protein":7,"fat":2,"carbs":15,"brand":"Санта Бремор","category":"Крабовые палочки","unit":"g","default":100},
    
    // --- ДЛЯ САЛАТА (ОБЩИЕ) ---
    {"id":65011,"name":"Крабовые палочки для салата","calories":95,"protein":6,"fat":2,"carbs":14,"brand":"Крабовые","category":"Крабовые палочки","unit":"g","default":100},
    
    // ==================== КАЛЬМАРЫ СУШЁНЫЕ ====================
    {"id":65012,"name":"Кальмар сушёный соломка","calories":280,"protein":45,"fat":3,"carbs":15,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    {"id":65013,"name":"Кальмар сушёный кольца","calories":275,"protein":44,"fat":3.5,"carbs":14,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    {"id":65014,"name":"Кальмар сушёный с перцем","calories":285,"protein":45,"fat":3.5,"carbs":15,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    {"id":65015,"name":"Кальмар сушёный острый","calories":290,"protein":44,"fat":4,"carbs":16,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    {"id":65016,"name":"Кальмар сушёный пивной","calories":280,"protein":45,"fat":3,"carbs":15,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    {"id":65017,"name":"Кальмар сушёный полоски","calories":278,"protein":45,"fat":3,"carbs":14.5,"brand":"Сушёный","category":"Кальмары сушёные","unit":"g","default":30},
    
    // ==================== ОРЕХИ (БРЕНДЫ) ====================
    
    // --- ВОСТОЧНЫЙ ГОСТЬ ---
    {"id":65018,"name":"Восточный гость Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":9,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    {"id":65019,"name":"Восточный гость Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":7,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    {"id":65020,"name":"Восточный гость Фундук","calories":628,"protein":15,"fat":61,"carbs":10,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    {"id":65021,"name":"Восточный гость Кешью","calories":553,"protein":18,"fat":44,"carbs":27,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    {"id":65022,"name":"Восточный гость Арахис жареный","calories":567,"protein":26,"fat":49,"carbs":8,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    {"id":65023,"name":"Восточный гость Фисташки","calories":560,"protein":20,"fat":45,"carbs":27,"brand":"Восточный гость","category":"Орехи","unit":"g","default":30},
    
    // --- ФИТНЕС-ОРЕХИ ---
    {"id":65024,"name":"FitStart Миндаль","calories":579,"protein":21,"fat":49,"carbs":9,"brand":"FitStart","category":"Орехи","unit":"g","default":30},
    {"id":65025,"name":"FitStart Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":7,"brand":"FitStart","category":"Орехи","unit":"g","default":30},
    {"id":65026,"name":"FitStart Кешью","calories":553,"protein":18,"fat":44,"carbs":27,"brand":"FitStart","category":"Орехи","unit":"g","default":30},
    
    // --- ДЖИНН ---
    {"id":65027,"name":"Джинн Семечки подсолнечника","calories":660,"protein":27,"fat":58,"carbs":9,"brand":"Джинн","category":"Семечки","unit":"g","default":30},
    {"id":65028,"name":"Джинн Семечки тыквенные","calories":559,"protein":30,"fat":49,"carbs":11,"brand":"Джинн","category":"Семечки","unit":"g","default":30},
    
    // --- ОБЩИЕ ПОЗИЦИИ ОРЕХОВ ---
    {"id":65029,"name":"Миндаль сырой","calories":579,"protein":21,"fat":49,"carbs":9,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65030,"name":"Миндаль жареный","calories":600,"protein":22,"fat":52,"carbs":10,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65031,"name":"Грецкий орех","calories":654,"protein":15,"fat":65,"carbs":7,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65032,"name":"Фундук","calories":628,"protein":15,"fat":61,"carbs":10,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65033,"name":"Кешью","calories":553,"protein":18,"fat":44,"carbs":27,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65034,"name":"Арахис сырой","calories":567,"protein":26,"fat":49,"carbs":8,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65035,"name":"Арахис жареный солёный","calories":610,"protein":25,"fat":50,"carbs":14,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65036,"name":"Фисташки","calories":560,"protein":20,"fat":45,"carbs":27,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65037,"name":"Пекан","calories":691,"protein":9,"fat":72,"carbs":14,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65038,"name":"Бразильский орех","calories":659,"protein":14,"fat":66,"carbs":12,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65039,"name":"Кедровые орехи","calories":673,"protein":14,"fat":68,"carbs":5,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65040,"name":"Макадамия","calories":718,"protein":8,"fat":76,"carbs":8,"brand":"Орехи","category":"Орехи","unit":"g","default":30},
    {"id":65041,"name":"Семечки подсолнечника жареные","calories":584,"protein":21,"fat":51,"carbs":11,"brand":"Семечки","category":"Семечки","unit":"g","default":30},
    {"id":65042,"name":"Семечки тыквенные","calories":559,"protein":30,"fat":49,"carbs":11,"brand":"Семечки","category":"Семечки","unit":"g","default":30},
    {"id":65043,"name":"Семена чиа","calories":486,"protein":16.5,"fat":31,"carbs":42,"brand":"Семена","category":"Семена","unit":"g","default":15},
    {"id":65044,"name":"Семена льна","calories":534,"protein":18,"fat":42,"carbs":29,"brand":"Семена","category":"Семена","unit":"g","default":15},
    {"id":65045,"name":"Семена кунжута","calories":573,"protein":18,"fat":50,"carbs":23,"brand":"Семена","category":"Семена","unit":"g","default":10},
    
    // ==================== СУХОФРУКТЫ ====================
    {"id":65046,"name":"Изюм светлый","calories":299,"protein":3,"fat":0.5,"carbs":79,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65047,"name":"Изюм тёмный","calories":285,"protein":3,"fat":0.5,"carbs":75,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65048,"name":"Курага","calories":241,"protein":3.4,"fat":0.5,"carbs":63,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65049,"name":"Чернослив","calories":240,"protein":2.2,"fat":0.4,"carbs":63,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65050,"name":"Финики","calories":282,"protein":2,"fat":0.4,"carbs":75,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65051,"name":"Инжир сушёный","calories":249,"protein":3,"fat":1,"carbs":64,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65052,"name":"Яблоки сушёные","calories":230,"protein":2,"fat":0.5,"carbs":60,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65053,"name":"Груши сушёные","calories":240,"protein":2.5,"fat":0.6,"carbs":62,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65054,"name":"Абрикос сушёный","calories":230,"protein":5,"fat":0.5,"carbs":51,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65055,"name":"Банан сушёный","calories":350,"protein":4,"fat":2,"carbs":88,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65056,"name":"Манго сушёное","calories":320,"protein":2,"fat":1,"carbs":80,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65057,"name":"Ананас сушёный","calories":290,"protein":1.5,"fat":0.5,"carbs":75,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65058,"name":"Вишня сушёная","calories":270,"protein":2,"fat":0.5,"carbs":68,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    {"id":65059,"name":"Клюква сушёная","calories":310,"protein":1,"fat":1,"carbs":80,"brand":"Сухофрукты","category":"Сухофрукты","unit":"g","default":30},
    
    // ==================== ГАЗИРОВАННЫЕ НАПИТКИ (БРЕНДЫ) ====================
    
    // --- COCA-COLA ---
    {"id":65060,"name":"Coca-Cola Classic","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":65061,"name":"Coca-Cola Zero","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":65062,"name":"Coca-Cola Ванильная","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    {"id":65063,"name":"Coca-Cola Вишнёвая","calories":42,"protein":0,"fat":0,"carbs":10.6,"brand":"Coca-Cola","category":"Газировка","unit":"ml","default":330},
    
    // --- PEPSI ---
    {"id":65064,"name":"Pepsi","calories":41,"protein":0,"fat":0,"carbs":10.3,"brand":"Pepsi","category":"Газировка","unit":"ml","default":330},
    {"id":65065,"name":"Pepsi Max","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Pepsi","category":"Газировка","unit":"ml","default":330},
    {"id":65066,"name":"Pepsi Twist Лимон","calories":41,"protein":0,"fat":0,"carbs":10.3,"brand":"Pepsi","category":"Газировка","unit":"ml","default":330},
    
    // --- SPRITE ---
    {"id":65067,"name":"Sprite","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Sprite","category":"Газировка","unit":"ml","default":330},
    {"id":65068,"name":"Sprite Zero","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Sprite","category":"Газировка","unit":"ml","default":330},
    
    // --- FANTA ---
    {"id":65069,"name":"Fanta Апельсин","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":65070,"name":"Fanta Лимон","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":65071,"name":"Fanta Клубника","calories":45,"protein":0,"fat":0,"carbs":11.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    {"id":65072,"name":"Fanta Zero","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"Fanta","category":"Газировка","unit":"ml","default":330},
    
    // --- ДОБРЫЙ ---
    {"id":65073,"name":"Добрый Cola","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    {"id":65074,"name":"Добрый Cola без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    {"id":65075,"name":"Добрый Апельсин","calories":45,"protein":0,"fat":0,"carbs":11,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    {"id":65076,"name":"Добрый Лимонад","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Добрый","category":"Газировка","unit":"ml","default":330},
    
    // --- ЧЕРНОГОЛОВКА ---
    {"id":65077,"name":"Черноголовка Кола","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":330},
    {"id":65078,"name":"Черноголовка Кола без сахара","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":330},
    {"id":65079,"name":"Черноголовка Лимонад","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":65080,"name":"Черноголовка Дюшес","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":65081,"name":"Черноголовка Тархун","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    {"id":65082,"name":"Черноголовка Байкал","calories":20,"protein":0,"fat":0,"carbs":4.5,"brand":"Черноголовка","category":"Газировка","unit":"ml","default":500},
    
    // --- 7UP ---
    {"id":65083,"name":"7UP","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"7UP","category":"Газировка","unit":"ml","default":330},
    {"id":65084,"name":"7UP Free","calories":1,"protein":0,"fat":0,"carbs":0.2,"brand":"7UP","category":"Газировка","unit":"ml","default":330},
    
    // --- MIRINDA ---
    {"id":65085,"name":"Mirinda Апельсин","calories":42,"protein":0,"fat":0,"carbs":10.5,"brand":"Mirinda","category":"Газировка","unit":"ml","default":330},
    
    // --- SCHWEPPES ---
    {"id":65086,"name":"Schweppes Indian Tonic","calories":35,"protein":0,"fat":0,"carbs":8.8,"brand":"Schweppes","category":"Газировка","unit":"ml","default":330},
    {"id":65087,"name":"Schweppes Мохито","calories":35,"protein":0,"fat":0,"carbs":8.8,"brand":"Schweppes","category":"Газировка","unit":"ml","default":330},
    {"id":65088,"name":"Schweppes Имбирный эль","calories":35,"protein":0,"fat":0,"carbs":8.8,"brand":"Schweppes","category":"Газировка","unit":"ml","default":330},
    
    // ==================== БАТОНЧИКИ ====================
    
    // --- ПРОТЕИНОВЫЕ БАТОНЧИКИ ---
    {"id":65089,"name":"Bombbar Протеиновый батончик","calories":286,"protein":25,"fat":9.7,"carbs":16.2,"brand":"Bombbar","category":"Батончики","unit":"g","default":50},
    {"id":65090,"name":"Bombbar Protein Stick","calories":356,"protein":25,"fat":15.9,"carbs":8.4,"brand":"Bombbar","category":"Батончики","unit":"g","default":40},
    {"id":65091,"name":"Power Pro Protein Bar","calories":242,"protein":36,"fat":14.5,"carbs":30.2,"brand":"Power Pro","category":"Батончики","unit":"g","default":60},
    {"id":65092,"name":"RLine Protein Bar","calories":280,"protein":30,"fat":10,"carbs":20,"brand":"RLine","category":"Батончики","unit":"g","default":50},
    {"id":65093,"name":"Kultlab Protein Bar","calories":293,"protein":23.5,"fat":8.4,"carbs":22.8,"brand":"Kultlab","category":"Батончики","unit":"g","default":50},
    {"id":65094,"name":"Refit Protein Bar","calories":279,"protein":25,"fat":11,"carbs":14,"brand":"Refit","category":"Батончики","unit":"g","default":35},
    
    // --- ЭНЕРГЕТИЧЕСКИЕ БАТОНЧИКИ ---
    {"id":65095,"name":"Snickers","calories":490,"protein":7,"fat":24,"carbs":62,"brand":"Snickers","category":"Батончики","unit":"g","default":50},
    {"id":65096,"name":"Mars","calories":460,"protein":6,"fat":20,"carbs":64,"brand":"Mars","category":"Батончики","unit":"g","default":51},
    {"id":65097,"name":"Twix","calories":502,"protein":5,"fat":24,"carbs":64,"brand":"Twix","unit":"g","default":50,"category":"Батончики"},
    {"id":65098,"name":"Bounty","calories":450,"protein":4,"fat":22,"carbs":60,"brand":"Bounty","category":"Батончики","unit":"g","default":57},
    {"id":65099,"name":"Milky Way","calories":440,"protein":4,"fat":18,"carbs":64,"brand":"Milky Way","category":"Батончики","unit":"g","default":50},
    {"id":65100,"name":"Nuts","calories":510,"protein":8,"fat":26,"carbs":58,"brand":"Nuts","category":"Батончики","unit":"g","default":50},
    {"id":65101,"name":"KitKat","calories":518,"protein":6.5,"fat":27,"carbs":62,"brand":"KitKat","category":"Батончики","unit":"g","default":50},
    {"id":65102,"name":"Lion","calories":500,"protein":6,"fat":28,"carbs":60,"brand":"Lion","category":"Батончики","unit":"g","default":50},
    
    // --- ЗЛАКОВЫЕ И МЮСЛИ БАТОНЧИКИ ---
    {"id":65103,"name":"Гранола батончик","calories":450,"protein":10,"fat":18,"carbs":60,"brand":"Гранола","category":"Батончики","unit":"g","default":50},
    {"id":65104,"name":"Мюсли батончик","calories":420,"protein":8,"fat":15,"carbs":65,"brand":"Мюсли","category":"Батончики","unit":"g","default":50},
    {"id":65105,"name":"Фитнес батончик","calories":350,"protein":15,"fat":12,"carbs":45,"brand":"Фитнес","category":"Батончики","unit":"g","default":50},
    {"id":65106,"name":"Corny Мюсли батончик","calories":420,"protein":8,"fat":16,"carbs":65,"brand":"Corny","category":"Батончики","unit":"g","default":50},
    
    // ==================== САХАР И СТЕВИЯ ====================
    
    // --- САХАР ---
    {"id":65107,"name":"Сахар белый песок","calories":399,"protein":0,"fat":0,"carbs":99.8,"brand":"Сахар","category":"Сахар","unit":"g","default":10},
    {"id":65108,"name":"Сахар рафинад","calories":399,"protein":0,"fat":0,"carbs":99.8,"brand":"Сахар","category":"Сахар","unit":"pcs","unit_name":"кусок","piece_weight":5,"default":2},
    {"id":65109,"name":"Сахар коричневый (тростниковый)","calories":380,"protein":0.5,"fat":0,"carbs":97,"brand":"Сахар","category":"Сахар","unit":"g","default":10},
    {"id":65110,"name":"Сахарная пудра","calories":399,"protein":0,"fat":0,"carbs":99.8,"brand":"Сахар","category":"Сахар","unit":"g","default":10},
    
    // --- СТЕВИЯ И ЗАМЕНИТЕЛИ ---
    {"id":65111,"name":"Стевия таблетки","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Стевия","category":"Стевия","unit":"pcs","unit_name":"таблетка","default":1},
    {"id":65112,"name":"Стевия порошок","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Стевия","category":"Стевия","unit":"g","default":1},
    {"id":65113,"name":"FitStart Стевия","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"FitStart","category":"Стевия","unit":"g","default":1},
    {"id":65114,"name":"Эритритол (заменитель сахара)","calories":0,"protein":0,"fat":0,"carbs":100,"brand":"Эритритол","category":"Стевия","unit":"g","default":5},
    {"id":65115,"name":"Сукралоза","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Сукралоза","category":"Стевия","unit":"g","default":1},
    
    // ==================== СОУСЫ ====================
    
    // --- СЛАДКИЕ СОУСЫ ---
    {"id":65116,"name":"Сгущённое молоко","calories":330,"protein":7,"fat":8.5,"carbs":56,"brand":"Алексеевское","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65117,"name":"Сгущёнка варёная","calories":328,"protein":7,"fat":8.5,"carbs":55,"brand":"Алексеевское","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65118,"name":"Шоколадный соус","calories":280,"protein":2.5,"fat":3,"carbs":60,"brand":"Heinz","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65119,"name":"Клубничный соус","calories":250,"protein":0.5,"fat":0.2,"carbs":62,"brand":"Махеевъ","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65120,"name":"Карамельный соус","calories":290,"protein":0.5,"fat":0.5,"carbs":72,"brand":"Каждый день","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65121,"name":"Мёд натуральный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Сладкие соусы","unit":"g","default":20},
    {"id":65122,"name":"Кленовый сироп","calories":260,"protein":0,"fat":0,"carbs":67,"brand":"Кленовый","category":"Сладкие соусы","unit":"ml","default":20},
    {"id":65123,"name":"Сироп агавы","calories":310,"protein":0,"fat":0,"carbs":76,"brand":"Агава","category":"Сладкие соусы","unit":"ml","default":20},
    {"id":65124,"name":"Топинамбур сироп","calories":260,"protein":0,"fat":0,"carbs":65,"brand":"Топинамбур","category":"Сладкие соусы","unit":"ml","default":20},
    {"id":65125,"name":"Финиковый сироп","calories":290,"protein":0.5,"fat":0,"carbs":72,"brand":"Финиковый","category":"Сладкие соусы","unit":"ml","default":20},
    
    // --- НЕСЛАДКИЕ СОУСЫ ---
    {"id":65126,"name":"Кетчуп классический","calories":100,"protein":1,"fat":0.2,"carbs":23,"brand":"Heinz","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65127,"name":"Кетчуп томатный","calories":100,"protein":1.5,"fat":0.5,"carbs":23,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65128,"name":"Майонез классический","calories":620,"protein":0.5,"fat":67,"carbs":3,"brand":"Слобода","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65129,"name":"Майонез Провансаль","calories":620,"protein":0.5,"fat":67,"carbs":3,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65130,"name":"Майонез Оливковый","calories":620,"protein":0.5,"fat":67,"carbs":3,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65131,"name":"Соевый соус","calories":60,"protein":8,"fat":0,"carbs":6,"brand":"Kikkoman","category":"Несладкие соусы","unit":"ml","default":15},
    {"id":65132,"name":"Соевый соус классический","calories":60,"protein":8,"fat":0,"carbs":6,"brand":"Махеевъ","category":"Несладкие соусы","unit":"ml","default":15},
    {"id":65133,"name":"Терияки соус","calories":100,"protein":1.5,"fat":0,"carbs":25,"brand":"Махеевъ","category":"Несладкие соусы","unit":"ml","default":20},
    {"id":65134,"name":"Соус Барбекю","calories":120,"protein":1,"fat":0.5,"carbs":28,"brand":"Heinz","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65135,"name":"Соус Сырный","calories":350,"protein":5,"fat":30,"carbs":15,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65136,"name":"Соус Чесночный","calories":84,"protein":0,"fat":8,"carbs":3,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65137,"name":"Соус Сладкий чили","calories":200,"protein":1,"fat":0,"carbs":50,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65138,"name":"Соус Песто","calories":450,"protein":5,"fat":45,"carbs":5,"brand":"Barilla","category":"Несладкие соусы","unit":"g","default":30},
    {"id":65139,"name":"Соус Песто красный","calories":450,"protein":5,"fat":45,"carbs":8,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":30},
    {"id":65140,"name":"Горчица русская","calories":65,"protein":4,"fat":4,"carbs":5,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":10},
    {"id":65141,"name":"Горчица зернистая","calories":70,"protein":4.5,"fat":4.5,"carbs":5,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":10},
    {"id":65142,"name":"Хрен","calories":50,"protein":1,"fat":0.5,"carbs":10,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":10},
    {"id":65143,"name":"Ткемали соус","calories":80,"protein":1,"fat":0,"carbs":18,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65144,"name":"Сацебели соус","calories":100,"protein":2,"fat":5,"carbs":12,"brand":"Махеевъ","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65145,"name":"Тартар соус","calories":450,"protein":1,"fat":45,"carbs":8,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65146,"name":"Ранч соус","calories":450,"protein":1,"fat":45,"carbs":8,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65147,"name":"Цезарь соус","calories":450,"protein":2,"fat":45,"carbs":10,"brand":"Каждый день","category":"Несладкие соусы","unit":"g","default":20},
    {"id":65148,"name":"Табаско соус","calories":0,"protein":0,"fat":0,"carbs":0,"brand":"Tabasco","category":"Несладкие соусы","unit":"ml","default":5},
    {"id":65149,"name":"Уксус бальзамический","calories":88,"protein":0,"fat":0,"carbs":20,"brand":"Бальзамический","category":"Несладкие соусы","unit":"ml","default":10},
];

// ============================================
// МЁД, ВАРЕНЬЕ, КОНСЕРВЫ
// ВСЕ БРЕНДЫ
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const HONEY_JAM_CANS_PRODUCTS = [
    // ==================== МЁД (ВСЕ БРЕНДЫ) ====================
    
    // --- МЁД "МЕДОВЫЙ ДОМ" ---
    {"id":66001,"name":"Медовый дом Мёд цветочный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    {"id":66002,"name":"Медовый дом Мёд липовый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    {"id":66003,"name":"Медовый дом Мёд гречишный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    {"id":66004,"name":"Медовый дом Мёд горный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    {"id":66005,"name":"Медовый дом Мёд акациевый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    {"id":66006,"name":"Медовый дом Мёд с прополисом","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовый дом","category":"Мёд","unit":"g","default":20},
    
    // --- МЁД "МЕДОВАЯ ДОЛИНА" ---
    {"id":66007,"name":"Медовая долина Мёд цветочный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовая долина","category":"Мёд","unit":"g","default":20},
    {"id":66008,"name":"Медовая долина Мёд липовый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовая долина","category":"Мёд","unit":"g","default":20},
    {"id":66009,"name":"Медовая долина Мёд гречишный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Медовая долина","category":"Мёд","unit":"g","default":20},
    
    // --- МЁД "БАШКИРСКИЙ" ---
    {"id":66010,"name":"Башкирский мёд липовый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Башкирский","category":"Мёд","unit":"g","default":20},
    {"id":66011,"name":"Башкирский мёд гречишный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Башкирский","category":"Мёд","unit":"g","default":20},
    {"id":66012,"name":"Башкирский мёд разнотравье","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Башкирский","category":"Мёд","unit":"g","default":20},
    {"id":66013,"name":"Башкирский мёд майский","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Башкирский","category":"Мёд","unit":"g","default":20},
    
    // --- МЁД "АЛТАЙСКИЙ" ---
    {"id":66014,"name":"Алтайский мёд горный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Алтайский","category":"Мёд","unit":"g","default":20},
    {"id":66015,"name":"Алтайский мёд лесной","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Алтайский","category":"Мёд","unit":"g","default":20},
    {"id":66016,"name":"Алтайский мёд луговой","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Алтайский","category":"Мёд","unit":"g","default":20},
    
    // --- МЁД "ПРИМОРСКИЙ" ---
    {"id":66017,"name":"Приморский мёд липовый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Приморский","category":"Мёд","unit":"g","default":20},
    
    // --- МЁД ОБЩИЕ ПОЗИЦИИ (ПО ВИДАМ) ---
    {"id":66018,"name":"Мёд липовый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66019,"name":"Мёд гречишный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66020,"name":"Мёд цветочный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66021,"name":"Мёд горный","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66022,"name":"Мёд лесной","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66023,"name":"Мёд луговой","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66024,"name":"Мёд майский","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66025,"name":"Мёд акациевый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66026,"name":"Мёд донниковый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66027,"name":"Мёд подсолнечниковый","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66028,"name":"Мёд с маточным молочком","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    {"id":66029,"name":"Мёд с прополисом","calories":304,"protein":0.3,"fat":0,"carbs":82,"brand":"Мёд","category":"Мёд","unit":"g","default":20},
    
    // ==================== ВАРЕНЬЕ И ДЖЕМЫ (БРЕНДЫ) ====================
    
    // --- МАХЕЕВЪ ---
    {"id":66030,"name":"Махеевъ Варенье клубничное","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Варенье","unit":"g","default":20},
    {"id":66031,"name":"Махеевъ Варенье малиновое","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Варенье","unit":"g","default":20},
    {"id":66032,"name":"Махеевъ Варенье вишнёвое","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Варенье","unit":"g","default":20},
    {"id":66033,"name":"Махеевъ Варенье абрикосовое","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Варенье","unit":"g","default":20},
    {"id":66034,"name":"Махеевъ Варенье из чёрной смородины","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Варенье","unit":"g","default":20},
    {"id":66035,"name":"Махеевъ Джем клубничный","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Джем","unit":"g","default":20},
    {"id":66036,"name":"Махеевъ Джем апельсиновый","calories":272,"protein":0,"fat":0,"carbs":68,"brand":"Махеевъ","category":"Джем","unit":"g","default":20},
    
    // --- ZUEGG ---
    {"id":66037,"name":"Zuegg Конфитюр Апельсин","calories":230,"protein":0.2,"fat":0,"carbs":56,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66038,"name":"Zuegg Конфитюр Абрикос","calories":193,"protein":0.3,"fat":0,"carbs":47,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66039,"name":"Zuegg Конфитюр Вишня","calories":200,"protein":0.5,"fat":0,"carbs":49,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66040,"name":"Zuegg Конфитюр Лесные ягоды","calories":57,"protein":0.5,"fat":0,"carbs":12,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66041,"name":"Zuegg Конфитюр Малина","calories":200,"protein":0.5,"fat":0,"carbs":49,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66042,"name":"Zuegg Конфитюр Персик","calories":193,"protein":0.3,"fat":0,"carbs":47,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    {"id":66043,"name":"Zuegg Конфитюр Клубника","calories":200,"protein":0.5,"fat":0,"carbs":49,"brand":"Zuegg","category":"Конфитюр","unit":"g","default":20},
    
    // --- ВКУСНОТЕЕВО ---
    {"id":66044,"name":"Вкуснотеево Варенье клубничное","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Вкуснотеево","category":"Варенье","unit":"g","default":20},
    {"id":66045,"name":"Вкуснотеево Варенье малиновое","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Вкуснотеево","category":"Варенье","unit":"g","default":20},
    {"id":66046,"name":"Вкуснотеево Варенье вишнёвое","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Вкуснотеево","category":"Варенье","unit":"g","default":20},
    {"id":66047,"name":"Вкуснотеево Джем клубничный","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Вкуснотеево","category":"Джем","unit":"g","default":20},
    
    // --- САВА ---
    {"id":66048,"name":"Сава Повидло яблочное","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Сава","category":"Повидло","unit":"g","default":20},
    {"id":66049,"name":"Сава Повидло сливовое","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Сава","category":"Повидло","unit":"g","default":20},
    {"id":66050,"name":"Сава Повидло абрикосовое","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Сава","category":"Повидло","unit":"g","default":20},
    {"id":66051,"name":"Сава Повидло грушевое","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Сава","category":"Повидло","unit":"g","default":20},
    
    // --- РАТИБОР ---
    {"id":66052,"name":"Ратибор Конфитюр из вишни","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Ратибор","category":"Конфитюр","unit":"g","default":20},
    {"id":66053,"name":"Ратибор Конфитюр клубничный","calories":200,"protein":0,"fat":0,"carbs":50,"brand":"Ратибор","category":"Конфитюр","unit":"g","default":20},
    
    // --- ВАРЕНЬЕ ОБЩИЕ ПОЗИЦИИ ---
    {"id":66054,"name":"Варенье клубничное","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66055,"name":"Варенье малиновое","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66056,"name":"Варенье вишнёвое","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66057,"name":"Варенье абрикосовое","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66058,"name":"Варенье из чёрной смородины","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66059,"name":"Варенье из красной смородины","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66060,"name":"Варенье из крыжовника","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66061,"name":"Варенье из черники","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66062,"name":"Варенье из голубики","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66063,"name":"Варенье из брусники","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66064,"name":"Варенье из клюквы","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    {"id":66065,"name":"Варенье из облепихи","calories":270,"protein":0,"fat":0,"carbs":67.5,"brand":"Варенье","category":"Варенье","unit":"g","default":20},
    
    // ==================== КОНСЕРВЫ МЯСНЫЕ ====================
    
    // --- ГОВЯДИНА ТУШЁНАЯ ---
    {"id":66066,"name":"Говядина тушёная ГОСТ","calories":320,"protein":15,"fat":28,"carbs":0,"brand":"Каждый день","category":"Консервы мясные","unit":"g","default":100},
    {"id":66067,"name":"Говядина тушёная высший сорт","calories":310,"protein":16,"fat":27,"carbs":0,"brand":"Бужарово","category":"Консервы мясные","unit":"g","default":100},
    {"id":66068,"name":"Говядина тушёная","calories":320,"protein":15,"fat":28,"carbs":0,"brand":"Главпродукт","category":"Консервы мясные","unit":"g","default":100},
    
    // --- СВИНИНА ТУШЁНАЯ ---
    {"id":66069,"name":"Свинина тушёная","calories":360,"protein":13,"fat":34,"carbs":0,"brand":"Каждый день","category":"Консервы мясные","unit":"g","default":100},
    {"id":66070,"name":"Свинина тушёная","calories":355,"protein":14,"fat":33,"carbs":0,"brand":"Бужарово","category":"Консервы мясные","unit":"g","default":100},
    
    // --- ПАШТЕТЫ ---
    {"id":66071,"name":"Паштет куриный","calories":309,"protein":10,"fat":29,"carbs":2,"brand":"Каждый день","category":"Паштет","unit":"g","default":50},
    {"id":66072,"name":"Паштет печёночный","calories":300,"protein":11,"fat":27,"carbs":3,"brand":"Главпродукт","category":"Паштет","unit":"g","default":50},
    {"id":66073,"name":"Паштет с индейкой","calories":230,"protein":7,"fat":22,"carbs":5,"brand":"Каждый день","category":"Паштет","unit":"g","default":50},
    {"id":66074,"name":"Паштет с гусиной печенью","calories":240,"protein":6,"fat":22,"carbs":4,"brand":"Каждый день","category":"Паштет","unit":"g","default":50},
    
    // ==================== КОНСЕРВЫ РЫБНЫЕ ====================
    
    // --- ТУНЕЦ ---
    {"id":66075,"name":"Тунец в собственном соку","calories":110,"protein":24,"fat":1,"carbs":0,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66076,"name":"Тунец в собственном соку","calories":110,"protein":24,"fat":1,"carbs":0,"brand":"Вкусные консервы","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66077,"name":"Тунец в масле","calories":200,"protein":23,"fat":12,"carbs":0,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":100},
    
    // --- САЙРА ---
    {"id":66078,"name":"Сайра в масле","calories":250,"protein":18,"fat":20,"carbs":0,"brand":"Вкусные консервы","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66079,"name":"Сайра в масле","calories":250,"protein":18,"fat":20,"carbs":0,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66080,"name":"Сайра натуральная","calories":202,"protein":19.2,"fat":13.9,"carbs":0,"brand":"Северная Гавань","category":"Консервы рыбные","unit":"g","default":100},
    
    // --- ГОРБУША ---
    {"id":66081,"name":"Горбуша натуральная","calories":140,"protein":22,"fat":5,"carbs":0,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66082,"name":"Горбуша в масле","calories":180,"protein":21,"fat":10,"carbs":0,"brand":"Вкусные консервы","category":"Консервы рыбные","unit":"g","default":100},
    
    // --- ШПРОТЫ И КИЛЬКА ---
    {"id":66083,"name":"Шпроты в масле","calories":356,"protein":17,"fat":32,"carbs":0,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66084,"name":"Шпроты в масле","calories":420,"protein":14,"fat":40,"carbs":0,"brand":"Капитан Вкусов","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66085,"name":"Килька в томатном соусе","calories":182,"protein":14,"fat":12,"carbs":4.5,"brand":"Вкусные консервы","category":"Консервы рыбные","unit":"g","default":100},
    {"id":66086,"name":"Килька балтийская","calories":180,"protein":13,"fat":12,"carbs":4,"brand":"За Родину","category":"Консервы рыбные","unit":"g","default":100},
    
    // --- ПЕЧЕНЬ ТРЕСКИ ---
    {"id":66087,"name":"Печень трески","calories":613,"protein":4,"fat":65,"carbs":1,"brand":"Каждый день","category":"Консервы рыбные","unit":"g","default":50},
    
    // ==================== КОНСЕРВЫ ОВОЩНЫЕ ====================
    
    // --- ГОРОШЕК, КУКУРУЗА, ФАСОЛЬ ---
    {"id":66088,"name":"Горошек зелёный","calories":55,"protein":3,"fat":0.2,"carbs":8.5,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66089,"name":"Горошек зелёный","calories":55,"protein":3,"fat":0.2,"carbs":8.5,"brand":"Bonduelle","category":"Консервы овощные","unit":"g","default":100},
    {"id":66090,"name":"Кукуруза сладкая","calories":93,"protein":3,"fat":1.5,"carbs":17,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66091,"name":"Кукуруза сладкая","calories":93,"protein":3,"fat":1.5,"carbs":17,"brand":"Bonduelle","category":"Консервы овощные","unit":"g","default":100},
    {"id":66092,"name":"Фасоль белая","calories":92,"protein":6.5,"fat":0.5,"carbs":15,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66093,"name":"Фасоль красная","calories":95,"protein":6,"fat":0.5,"carbs":16,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66094,"name":"Нут консервированный","calories":140,"protein":7,"fat":3,"carbs":20,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    
    // --- ОЛИВКИ И МАСЛИНЫ ---
    {"id":66095,"name":"Оливки зелёные без косточки","calories":145,"protein":1,"fat":15,"carbs":2,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":50},
    {"id":66096,"name":"Маслины чёрные","calories":145,"protein":1,"fat":15,"carbs":2,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":50},
    {"id":66097,"name":"Оливки фаршированные лимоном","calories":150,"protein":1,"fat":16,"carbs":2,"brand":"Iberica","category":"Консервы овощные","unit":"g","default":50},
    
    // --- ЛЕЧО И ИКРА ---
    {"id":66098,"name":"Лечо","calories":35,"protein":0.8,"fat":0.2,"carbs":7,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66099,"name":"Икра кабачковая","calories":85,"protein":1.5,"fat":6,"carbs":8,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    {"id":66100,"name":"Икра баклажанная","calories":90,"protein":1.5,"fat":7,"carbs":8,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":100},
    
    // --- ТОМАТНАЯ ПАСТА ---
    {"id":66101,"name":"Томатная паста","calories":80,"protein":4,"fat":0.5,"carbs":16,"brand":"Каждый день","category":"Консервы овощные","unit":"g","default":20},
    {"id":66102,"name":"Томатная паста","calories":80,"protein":4,"fat":0.5,"carbs":16,"brand":"Помидорка","category":"Консервы овощные","unit":"g","default":20},
    
    // --- АНАНАСЫ И ПЕРСИКИ ---
    {"id":66103,"name":"Ананас кусочки в сиропе","calories":65,"protein":0.3,"fat":0.3,"carbs":15,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
    {"id":66104,"name":"Ананас кольца в сиропе","calories":65,"protein":0.4,"fat":0.1,"carbs":15,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
    {"id":66105,"name":"Персики в сиропе","calories":82,"protein":0.4,"fat":0.1,"carbs":19.9,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
    {"id":66106,"name":"Абрикосы в сиропе","calories":80,"protein":0.4,"fat":0.1,"carbs":19.5,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
    {"id":66107,"name":"Груши в сиропе","calories":78,"protein":0.3,"fat":0.1,"carbs":19,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
    {"id":66108,"name":"Вишня в сиропе","calories":85,"protein":0.5,"fat":0.1,"carbs":21,"brand":"Каждый день","category":"Консервы фруктовые","unit":"g","default":100},
];

// ============================================
// ПЕЛЬМЕНИ, ВАРЕНИКИ, КРЕВЕТКИ, КОТЛЕТЫ
// ВСЕ БРЕНДЫ + ПРОДУКТЫ "ВКУС & ПОЛЬЗА"
// ПОЛНЫЙ КАТАЛОГ ДЛЯ XP ПИТАНИЕ
// ============================================

const DUMPLINGS_PELMENI_PRODUCTS = [
    // ==================== ПЕЛЬМЕНИ (БРЕНДЫ) ====================
    
    // --- ПЕЛЬМЕНИ "СИБИРСКАЯ КОЛЛЕКЦИЯ" ---
    {"id":67001,"name":"Сибирская Коллекция Пельмени классические","calories":217,"protein":9,"fat":11,"carbs":20.7,"brand":"Сибирская Коллекция","category":"Пельмени","unit":"g","default":150},
    {"id":67002,"name":"Сибирская Коллекция Пельмени с говядиной","calories":220,"protein":10,"fat":12,"carbs":21,"brand":"Сибирская Коллекция","category":"Пельмени","unit":"g","default":150},
    {"id":67003,"name":"Сибирская Коллекция Пельмени с свининой","calories":240,"protein":9,"fat":15,"carbs":20,"brand":"Сибирская Коллекция","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "ЦЕЗАРЬ" ---
    {"id":67004,"name":"Caesar Elite Пельмени отборная говядина","calories":220,"protein":8,"fat":9,"carbs":28,"brand":"Caesar Elite","category":"Пельмени","unit":"g","default":150},
    {"id":67005,"name":"Caesar Elite Пельмени с телятиной","calories":225,"protein":8.5,"fat":9.5,"carbs":27.5,"brand":"Caesar Elite","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "ГОРЯЧАЯ ШТУЧКА" ---
    {"id":67006,"name":"Горячая штучка Пельмени Бигбули","calories":240,"protein":8,"fat":10,"carbs":29,"brand":"Горячая штучка","category":"Пельмени","unit":"g","default":150},
    {"id":67007,"name":"Горячая штучка Пельмени Бульмени","calories":240,"protein":8,"fat":10,"carbs":29,"brand":"Горячая штучка","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "ТАВР" ---
    {"id":67008,"name":"Тавр Пельмени фирменные свино-говяжьи","calories":322,"protein":10,"fat":18,"carbs":30,"brand":"Тавр","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "МОЯ ЦЕНА" ---
    {"id":67009,"name":"Моя цена Пельмени","calories":260,"protein":10,"fat":12,"carbs":30,"brand":"Моя цена","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "МИРАТОРГ" ---
    {"id":67010,"name":"Мираторг Пельмени домашние","calories":240,"protein":10,"fat":12,"carbs":28,"brand":"Мираторг","category":"Пельмени","unit":"g","default":150},
    {"id":67011,"name":"Мираторг Пельмени сибирские","calories":235,"protein":10.5,"fat":11.5,"carbs":28.5,"brand":"Мираторг","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "ЧЕРКИЗОВО" ---
    {"id":67012,"name":"Черкизово Пельмени","calories":230,"protein":10,"fat":11,"carbs":29,"brand":"Черкизово","category":"Пельмени","unit":"g","default":150},
    
    // --- ПЕЛЬМЕНИ "ВКУСВИЛЛ" ---
    {"id":67013,"name":"ВкусВилл Пельмени из говядины","calories":200,"protein":14,"fat":8,"carbs":25,"brand":"ВкусВилл","category":"Пельмени","unit":"g","default":150},
    {"id":67014,"name":"ВкусВилл Пельмени из индейки","calories":180,"protein":15,"fat":6,"carbs":24,"brand":"ВкусВилл","category":"Пельмени","unit":"g","default":150},
    
    // ==================== ВАРЕНИКИ (БРЕНДЫ) ====================
    
    // --- ВАРЕНИКИ "ВКУСВИЛЛ" ---
    {"id":67015,"name":"ВкусВилл Вареники с творогом","calories":200,"protein":9,"fat":5,"carbs":30,"brand":"ВкусВилл","category":"Вареники","unit":"g","default":150},
    {"id":67016,"name":"ВкусВилл Вареники с картофелем","calories":160,"protein":4,"fat":3,"carbs":32,"brand":"ВкусВилл","category":"Вареники","unit":"g","default":150},
    {"id":67017,"name":"ВкусВилл Вареники с вишней","calories":190,"protein":4,"fat":2,"carbs":40,"brand":"ВкусВилл","category":"Вареники","unit":"g","default":150},
    
    // --- ВАРЕНИКИ "С ПЫЛУ С ЖАРУ" ---
    {"id":67018,"name":"С пылу с жару Вареники с творогом","calories":210,"protein":8,"fat":5,"carbs":35,"brand":"С пылу с жару","category":"Вареники","unit":"g","default":150},
    {"id":67019,"name":"С пылу с жару Вареники с картофелем","calories":170,"protein":3.5,"fat":3,"carbs":34,"brand":"С пылу с жару","category":"Вареники","unit":"g","default":150},
    
    // --- ВАРЕНИКИ "УВЕЛКА" ---
    {"id":67020,"name":"Увелка Вареники с картофелем","calories":155,"protein":4,"fat":2.5,"carbs":31,"brand":"Увелка","category":"Вареники","unit":"g","default":150},
    {"id":67021,"name":"Увелка Вареники с творогом","calories":195,"protein":8.5,"fat":4.5,"carbs":33,"brand":"Увелка","category":"Вареники","unit":"g","default":150},
    
    // --- ВАРЕНИКИ "ГОРЯЧАЯ ШТУЧКА" ---
    {"id":67022,"name":"Горячая штучка Вареники с творогом","calories":220,"protein":8,"fat":7,"carbs":33,"brand":"Горячая штучка","category":"Вареники","unit":"g","default":150},
    
    // --- ВАРЕНИКИ "СТАРОДВОРЬЕ" ---
    {"id":67023,"name":"Стародворье Вареники с картофелем","calories":165,"protein":3.5,"fat":3,"carbs":32,"brand":"Стародворье","category":"Вареники","unit":"g","default":150},
    
    // ==================== КОТЛЕТЫ (БРЕНДЫ) ====================
    
    // --- КОТЛЕТЫ "МИРАТОРГ" ---
    {"id":67024,"name":"Мираторг Котлеты говяжьи","calories":220,"protein":16,"fat":15,"carbs":6,"brand":"Мираторг","category":"Котлеты","unit":"g","default":100},
    {"id":67025,"name":"Мираторг Котлеты куриные","calories":180,"protein":15,"fat":12,"carbs":5,"brand":"Мираторг","category":"Котлеты","unit":"g","default":100},
    {"id":67026,"name":"Мираторг Котлеты свиные","calories":260,"protein":13,"fat":22,"carbs":6,"brand":"Мираторг","category":"Котлеты","unit":"g","default":100},
    
    // --- КОТЛЕТЫ "ЧЕРКИЗОВО" ---
    {"id":67027,"name":"Черкизово Котлеты куриные","calories":190,"protein":14,"fat":13,"carbs":6,"brand":"Черкизово","category":"Котлеты","unit":"g","default":100},
    {"id":67028,"name":"Черкизово Котлеты говяжьи","calories":230,"protein":15,"fat":17,"carbs":6,"brand":"Черкизово","category":"Котлеты","unit":"g","default":100},
    
    // --- КОТЛЕТЫ "ДЫМОВ" ---
    {"id":67029,"name":"Дымов Котлеты домашние","calories":250,"protein":14,"fat":19,"carbs":7,"brand":"Дымов","category":"Котлеты","unit":"g","default":100},
    
    // --- КОТЛЕТЫ "ВКУСВИЛЛ" ---
    {"id":67030,"name":"ВкусВилл Котлеты куриные","calories":160,"protein":18,"fat":8,"carbs":5,"brand":"ВкусВилл","category":"Котлеты","unit":"g","default":100},
    {"id":67031,"name":"ВкусВилл Котлеты из индейки","calories":150,"protein":19,"fat":7,"carbs":5,"brand":"ВкусВилл","category":"Котлеты","unit":"g","default":100},
    {"id":67032,"name":"ВкусВилл Котлеты рыбные","calories":120,"protein":14,"fat":5,"carbs":5,"brand":"ВкусВилл","category":"Котлеты","unit":"g","default":100},
    
    // --- КОТЛЕТЫ "АГРОКОМПЛЕКС" ---
    {"id":67033,"name":"Агрокомплекс Котлеты домашние","calories":240,"protein":8,"fat":20,"carbs":6.5,"brand":"Агрокомплекс","category":"Котлеты","unit":"g","default":100},
    
    // ==================== КРЕВЕТКИ (БРЕНДЫ И ВИДЫ) ====================
    
    // --- КРЕВЕТКИ "РУССКОЕ МОРЕ" ---
    {"id":67034,"name":"Русское море Креветки королевские варёно-мороженые","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Русское море","category":"Креветки","unit":"g","default":100},
    {"id":67035,"name":"Русское море Креветки тигровые","calories":100,"protein":19,"fat":2.5,"carbs":0,"brand":"Русское море","category":"Креветки","unit":"g","default":100},
    {"id":67036,"name":"Русское море Креветки северные","calories":85,"protein":17,"fat":1.5,"carbs":0,"brand":"Русское море","category":"Креветки","unit":"g","default":100},
    
    // --- КРЕВЕТКИ "VICI" ---
    {"id":67037,"name":"Vici Креветки королевские","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Vici","category":"Креветки","unit":"g","default":100},
    {"id":67038,"name":"Vici Креветки тигровые","calories":100,"protein":19,"fat":2.5,"carbs":0,"brand":"Vici","category":"Креветки","unit":"g","default":100},
    {"id":67039,"name":"Vici Креветки коктейльные","calories":90,"protein":17,"fat":1.8,"carbs":0,"brand":"Vici","category":"Креветки","unit":"g","default":100},
    
    // --- КРЕВЕТКИ "БУХТА ИЗОБИЛИЯ" ---
    {"id":67040,"name":"Бухта изобилия Креветки королевские","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Бухта изобилия","category":"Креветки","unit":"g","default":100},
    
    // --- КРЕВЕТКИ "АГАМА" ---
    {"id":67041,"name":"Агама Креветки королевские","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Агама","category":"Креветки","unit":"g","default":100},
    
    // --- КРЕВЕТКИ ПО ТИПАМ (ОБЩИЕ) ---
    {"id":67042,"name":"Креветки королевские варёно-мороженые","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Креветки","category":"Креветки","unit":"g","default":100},
    {"id":67043,"name":"Креветки тигровые сыромороженые","calories":100,"protein":19,"fat":2.5,"carbs":0,"brand":"Креветки","category":"Креветки","unit":"g","default":100},
    {"id":67044,"name":"Креветки северные","calories":85,"protein":17,"fat":1.5,"carbs":0,"brand":"Креветки","category":"Креветки","unit":"g","default":100},
    {"id":67045,"name":"Креветки ботан (гребешковые)","calories":95,"protein":18,"fat":2,"carbs":0,"brand":"Креветки","category":"Креветки","unit":"g","default":100},
    
    // ==================== ПРОДУКТЫ "ВКУС & ПОЛЬЗА" (ПЯТЁРОЧКА) ====================
    // Источник: [citation:1][citation:4][citation:6]
    
    // --- ГОТОВЫЕ БЛЮДА "ВКУС & ПОЛЬЗА" ---
    {"id":67046,"name":"Вкус & Польза Куриное филе с ореховым соусом","calories":180,"protein":25,"fat":8,"carbs":6,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":250},
    {"id":67047,"name":"Вкус & Польза Куриная грудка с овощами-гриль","calories":150,"protein":27,"fat":5,"carbs":4,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":250},
    {"id":67048,"name":"Вкус & Польза Салат Цезарь с креветками","calories":130,"protein":15,"fat":7,"carbs":5,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":200},
    {"id":67049,"name":"Вкус & Польза Тыквенный суп-пюре","calories":60,"protein":2,"fat":3,"carbs":8,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":300},
    {"id":67050,"name":"Вкус & Польза Рисовая каша на кокосовом молоке","calories":120,"protein":3,"fat":5,"carbs":18,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":200},
    
    // --- МОЛОЧНЫЕ ПРОДУКТЫ "ВКУС & ПОЛЬЗА" [citation:6]---
    {"id":67051,"name":"Вкус & Польза Сыр Моцарелла","calories":280,"protein":28,"fat":17,"carbs":3,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":100},
    {"id":67052,"name":"Вкус & Польза Йогурт натуральный","calories":65,"protein":4,"fat":2.5,"carbs":6,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":120},
    {"id":67053,"name":"Вкус & Польза Творог 5%","calories":121,"protein":15,"fat":5,"carbs":3,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":100},
    
    // --- СЫРНИКИ И ЗАПЕКАНКИ "ВКУС & ПОЛЬЗА" [citation:6]---
    {"id":67054,"name":"Вкус & Польза Сырники без обжарки","calories":180,"protein":12,"fat":8,"carbs":15,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":120},
    {"id":67055,"name":"Вкус & Польза Творожная запеканка","calories":160,"protein":10,"fat":5,"carbs":18,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":120},
    
    // --- СНЕКИ И СЛАДОСТИ "ВКУС & ПОЛЬЗА" [citation:6]---
    {"id":67056,"name":"Вкус & Польза Хлебцы ржаные","calories":320,"protein":10,"fat":2,"carbs":65,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":30},
    {"id":67057,"name":"Вкус & Польза Хлебцы гречневые","calories":330,"protein":11,"fat":2.5,"carbs":64,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":30},
    {"id":67058,"name":"Вкус & Польза Овсяные отруби","calories":150,"protein":10,"fat":3,"carbs":25,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":30},
    {"id":67059,"name":"Вкус & Польза Кедровые орешки","calories":673,"protein":14,"fat":68,"carbs":5,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"g","default":30},
    
    // --- НАПИТКИ "ВКУС & ПОЛЬЗА" [citation:6][citation:10]---
    {"id":67060,"name":"Вкус & Польза Квас традиционный","calories":27,"protein":0.5,"fat":0,"carbs":6.5,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"ml","default":500},
    {"id":67061,"name":"Вкус & Польза Чайный напиток","calories":15,"protein":0,"fat":0,"carbs":3.5,"brand":"Вкус & Польза","category":"Вкус и польза","unit":"ml","default":200},
    
    // ==================== "ВКУСВИЛЛ В БАЛАНСЕ" [citation:9]====================
    {"id":67062,"name":"ВкусВилл в балансе Филе индейки гриль с кускусом и брокколи","calories":250,"protein":22,"fat":8,"carbs":22,"brand":"ВкусВилл","category":"ВкусВилл в балансе","unit":"g","default":300},
    {"id":67063,"name":"ВкусВилл в балансе Паста-салат с песто, индейкой и вялеными томатами","calories":280,"protein":18,"fat":12,"carbs":28,"brand":"ВкусВилл","category":"ВкусВилл в балансе","unit":"g","default":280},
    {"id":67064,"name":"ВкусВилл в балансе Салат Цезарь легкий","calories":180,"protein":14,"fat":10,"carbs":10,"brand":"ВкусВилл","category":"ВкусВилл в балансе","unit":"g","default":250},
    {"id":67065,"name":"ВкусВилл в балансе Говядина в томатном соусе с кабачками гриль и гречкой","calories":290,"protein":20,"fat":12,"carbs":25,"brand":"ВкусВилл","category":"ВкусВилл в балансе","unit":"g","default":320},
    {"id":67066,"name":"ВкусВилл в балансе Паста цельнозерновая с тунцом и запеченными томатами","calories":260,"protein":18,"fat":8,"carbs":30,"brand":"ВкусВилл","category":"ВкусВилл в балансе","unit":"g","default":280},
];


// ============================================
// ФИНАЛЬНАЯ КОНЦОВКА ФАЙЛА
// ЕДИНАЯ БАЗА ДАННЫХ И ФУНКЦИИ ДЛЯ MINI APP
// ============================================

// ========== 1. ОБЪЕДИНЕНИЕ ВСЕХ ПРОДУКТОВ ==========
window.allProducts = [];

function initAllProducts() {
    // Собираем все продукты из всех категорий
    const allSources = [
        // Основные магазины и сети
        { name: 'MAGNIT', data: MAGNIT_PRODUCTS },
        { name: 'VKUSNO', data: VKUSNO_PRODUCTS },
        { name: 'DODO', data: DODO_PRODUCTS },
        { name: 'BURGERKING', data: BURGERKING_PRODUCTS },
        { name: 'PEREKRESTOK', data: PEREKRESTOK_PRODUCTS },
        { name: 'HOMEMADE', data: HOMEMADE_PRODUCTS },
        { name: 'MYBOX', data: MYBOX_PRODUCTS },
        { name: 'KFC', data: KFC_PRODUCTS },
        
        // Кофейни
        { name: 'ONEPRICE', data: ONEPRICE_PRODUCTS },
        { name: 'SURF', data: SURF_PRODUCTS },
        { name: 'SHOKOLADNITSA', data: SHOKOLADNITSA_PRODUCTS },
        { name: 'COFFEEMANIA', data: COFFEEMANIA_PRODUCTS },
        
        // Напитки и снеки
        { name: 'PIMS', data: PIMS_PRODUCTS },
        { name: 'BUBBLE', data: BUBBLE_PRODUCTS },
        { name: 'ALCOHOL', data: ALCOHOL_PRODUCTS },
        { name: 'ENERGY', data: ENERGY_PRODUCTS },
        { name: 'SODA', data: SODA_PRODUCTS },
        { name: 'JUICE', data: JUICE_PRODUCTS },
        
        // Спортпит и ЗОЖ
        { name: 'SPORT', data: SPORT_PRODUCTS },
        { name: 'PLANT', data: PLANT_PRODUCTS },
        
        // Мировые кухни
        { name: 'WORLD', data: WORLD_PRODUCTS },
        
        // Дополнительные категории
        { name: 'MAGNIT_EXTRA', data: MAGNIT_EXTRA },
        { name: 'STARIK', data: STARIK_PRODUCTS },
        { name: 'STREET_FOOD', data: STREET_FOOD_PRODUCTS },
        { name: 'MIYAGI', data: MIYAGI_PRODUCTS },
        { name: 'SEAFOOD', data: SEAFOOD_PRODUCTS },
        { name: 'CINNABON', data: CINNABON_PRODUCTS },
        { name: 'DESSERTS', data: DESSERTS_PRODUCTS },
        { name: 'VIETNAMESE', data: VIETNAMESE_PRODUCTS },
        
        // Роллы и база
        { name: 'ROLL_ALL', data: Roll_all },
        { name: 'BASE_PRODUCT', data: Base_product },
        
        // Сети магазинов
        { name: 'SPAR', data: SPAR_PRODUCTS },
        { name: 'AUCHAN', data: AUCHAN_PRODUCTS },
        { name: 'METRO', data: METRO_PRODUCTS },
        
        // Справочники
        { name: 'MEAT', data: MEAT_REFERENCE },
        { name: 'DAIRY', data: RUSSIAN_DAIRY_PRODUCTS },
        { name: 'DAIRY_EXTENDED', data: DAIRY_EXTENDED_PRODUCTS },
        
        // Сладости и десерты
        { name: 'KINDER', data: KINDER_PRODUCTS },
        { name: 'MARMELADE', data: MARMELADE_PRODUCTS },
        { name: 'CANDY', data: CANDY_PRODUCTS },
        { name: 'CAKES', data: CAKES_PRODUCTS },
        
        // Сыры и хлеб
        { name: 'CHEESE_BREAD', data: CHEESE_BREAD_PRODUCTS },
        
        // Масла, пасты, крупы, рыба
        { name: 'BUTTER_PASTE_GRAINS_FISH', data: BUTTER_PASTE_GRAINS_FISH_PRODUCTS },
        
        // Снеки, йогурты, булочки
        { name: 'SNACKS_DRINKS_YOGURTS', data: SNACKS_DRINKS_YOGURTS_PRODUCTS },
        
        // Колбасы и мясные деликатесы
        { name: 'SAUSAGES_BRANDS', data: SAUSAGES_BRANDS_PRODUCTS },
        
        // Роллы
        { name: 'ROLLS', data: ROLLS_PRODUCTS },
        
        // Мороженое, овощи, фрукты
        { name: 'ICE_CREAM_VEGGIES_FRUITS', data: ICE_CREAM_VEGGIES_FRUITS_PRODUCTS },
        
        // Замороженные продукты, восточные сладости, чай, кофе
        { name: 'FROZEN_EASTERN_TEA_COFFEE', data: FROZEN_EASTERN_TEA_COFFEE_PRODUCTS },
        
        // Крабовые палочки, орехи, сухофрукты, соусы
        { name: 'CRAB_SNACKS_NUTS_SAUCES', data: CRAB_SNACKS_NUTS_DRINKS_BARS_SAUCES_PRODUCTS },
        
        // Мёд, варенье, консервы
        { name: 'HONEY_JAM_CANS', data: HONEY_JAM_CANS_PRODUCTS },
        
        // Пельмени, вареники, креветки, котлеты
        { name: 'DUMPLINGS_PELMENI', data: DUMPLINGS_PELMENI_PRODUCTS }
    ];
    
    window.allProducts = [];
    
    for (let source of allSources) {
        if (source.data && source.data.length) {
            for (let product of source.data) {
                // Добавляем информацию о магазине
                product.shop = source.name;
                
                // Проверяем на дубликаты по id
                const exists = window.allProducts.some(p => p.id === product.id);
                if (!exists) {
                    window.allProducts.push(product);
                }
            }
        }
    }
    
    console.log(`✅ БАЗА ПРОДУКТОВ ГОТОВА!`);
    console.log(`📦 Всего товаров: ${window.allProducts.length}`);
    console.log(`🏪 Магазинов: ${[...new Set(window.allProducts.map(p => p.shop).filter(Boolean))].length}`);
    console.log(`📁 Категорий: ${[...new Set(window.allProducts.map(p => p.category).filter(Boolean))].length}`);
    console.log(`🏷️ Брендов: ${[...new Set(window.allProducts.map(p => p.brand).filter(Boolean))].length}`);
}

// ========== 2. ФУНКЦИИ ПОИСКА ==========
function searchProducts(query, products = window.allProducts) {
    if (!query || query.trim() === '') return products;
    
    const q = query.toLowerCase().trim();
    
    return products.filter(product => {
        const matchName = product.name && product.name.toLowerCase().includes(q);
        const matchBrand = product.brand && product.brand.toLowerCase().includes(q);
        const matchCategory = product.category && product.category.toLowerCase().includes(q);
        const matchShop = product.shop && product.shop.toLowerCase().includes(q);
        
        return matchName || matchBrand || matchCategory || matchShop;
    });
}

// ========== 3. ФУНКЦИИ ФИЛЬТРАЦИИ ==========
function filterByCategory(category, products = window.allProducts) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

function filterByBrand(brand, products = window.allProducts) {
    if (!brand || brand === 'all') return products;
    return products.filter(p => p.brand === brand);
}

function filterByShop(shop, products = window.allProducts) {
    if (!shop || shop === 'all') return products;
    return products.filter(p => p.shop === shop);
}

function filterByCalories(min, max, products = window.allProducts) {
    return products.filter(p => p.calories >= min && p.calories <= max);
}

function filterByProtein(min, products = window.allProducts) {
    return products.filter(p => p.protein >= min).sort((a,b) => b.protein - a.protein);
}

function filterByFat(max, products = window.allProducts) {
    return products.filter(p => p.fat <= max);
}

function filterByCarbs(max, products = window.allProducts) {
    return products.filter(p => p.carbs <= max);
}

// ========== 4. ДИЕТИЧЕСКИЕ ФИЛЬТРЫ ==========
function findLowCalorie(limit = 150, products = window.allProducts) {
    return products.filter(p => p.calories <= limit).sort((a,b) => a.calories - b.calories);
}

function findHighProtein(min = 20, products = window.allProducts) {
    return products.filter(p => p.protein >= min).sort((a,b) => b.protein - a.protein);
}

function findLowFat(max = 10, products = window.allProducts) {
    return products.filter(p => p.fat <= max).sort((a,b) => a.fat - b.fat);
}

function findLowCarb(max = 20, products = window.allProducts) {
    return products.filter(p => p.carbs <= max).sort((a,b) => a.carbs - b.carbs);
}

function findKetoFriendly(products = window.allProducts) {
    return products.filter(p => p.carbs <= 5 && p.protein >= 15);
}

function findHighFiber(products = window.allProducts) {
    return products.filter(p => p.carbs >= 10 && p.calories <= 200);
}

// ========== 5. ПОЛУЧЕНИЕ СПИСКОВ ДЛЯ ФИЛЬТРОВ ==========
function getUniqueBrands(products = window.allProducts) {
    return [...new Set(products.map(p => p.brand).filter(Boolean))].sort();
}

function getUniqueCategories(products = window.allProducts) {
    return [...new Set(products.map(p => p.category).filter(Boolean))].sort();
}

function getUniqueShops(products = window.allProducts) {
    return [...new Set(products.map(p => p.shop).filter(Boolean))].sort();
}

function getUniqueTypes(products = window.allProducts) {
    return [...new Set(products.map(p => p.type).filter(Boolean))].sort();
}

// ========== 6. СЛУЧАЙНЫЙ ПРОДУКТ ==========
function getRandomProduct(products = window.allProducts) {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

function getRandomProducts(count = 5, products = window.allProducts) {
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// ========== 7. ВЫВОД РЕЗУЛЬТАТОВ В HTML ==========
function displayResults(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!products.length) {
        container.innerHTML = '<div class="empty-state">😋 Ничего не найдено</div>';
        return;
    }
    
    let html = `<div class="stats">🍽️ Найдено: ${products.length} продуктов</div>`;
    
    // Группируем по магазинам
    const grouped = {};
    for (let p of products) {
        let shop = p.shop || 'Другие';
        if (!grouped[shop]) grouped[shop] = [];
        grouped[shop].push(p);
    }
    
    for (let shop in grouped) {
        html += `<div class="shop-card">
                    <div class="shop-title">🏪 ${shop} (${grouped[shop].length})</div>
                    <div class="items">`;
        
        for (let p of grouped[shop]) {
            html += `<div class="item">
                        <div class="item-name">${p.name}</div>
                        <div class="item-details">
                            <span class="kcal">🔥 ${p.calories} ккал</span>
                            ${p.protein ? `<span class="protein">💪 ${p.protein}г</span>` : ''}
                            ${p.fat ? `<span class="fat">🧈 ${p.fat}г</span>` : ''}
                            ${p.carbs ? `<span class="carbs">🍚 ${p.carbs}г</span>` : ''}
                            ${p.brand ? `<span class="brand">🏷️ ${p.brand}</span>` : ''}
                            ${p.category ? `<span class="category">📁 ${p.category}</span>` : ''}
                        </div>
                     </div>`;
        }
        html += `</div></div>`;
    }
    
    container.innerHTML = html;
}

function displaySmartResults(query, products = window.allProducts, containerId) {
    const filtered = searchProducts(query, products);
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    if (!filtered.length) {
        container.innerHTML = '<div class="empty-state">🔍 Ничего не найдено. Попробуйте другой запрос.</div>';
        return;
    }
    
    // Статистика поиска
    const byNameCount = filtered.filter(p => p.name && p.name.toLowerCase().includes(query.toLowerCase())).length;
    const byBrandCount = filtered.filter(p => p.brand && p.brand.toLowerCase().includes(query.toLowerCase())).length;
    const byCategoryCount = filtered.filter(p => p.category && p.category.toLowerCase().includes(query.toLowerCase())).length;
    const byShopCount = filtered.filter(p => p.shop && p.shop.toLowerCase().includes(query.toLowerCase())).length;
    
    let stats = `🔍 Найдено: ${filtered.length} продуктов`;
    if (byBrandCount > 0) stats += ` | 🏷️ брендов: ${byBrandCount}`;
    if (byCategoryCount > 0) stats += ` | 📁 категорий: ${byCategoryCount}`;
    if (byShopCount > 0) stats += ` | 🏪 магазинов: ${byShopCount}`;
    
    let html = `<div class="search-stats">${stats}</div>`;
    
    // Группировка по магазинам
    const byShop = {};
    for (let p of filtered) {
        const shop = p.shop || 'Другие';
        if (!byShop[shop]) byShop[shop] = [];
        byShop[shop].push(p);
    }
    
    for (const [shop, items] of Object.entries(byShop)) {
        html += `<div class="shop-group">
                    <div class="shop-header">🏪 ${shop} (${items.length})</div>
                    <div class="shop-items">`;
        
        for (let p of items.slice(0, 10)) {
            html += `<div class="search-item" data-id="${p.id}" onclick="selectProduct(${p.id})">
                        <div class="search-item-info">
                            <div class="search-item-name">${p.name}</div>
                            <div class="search-item-macros">
                                🔥 ${p.calories} ккал
                                ${p.protein ? ` 💪 ${p.protein}г` : ''}
                                ${p.fat ? ` 🧈 ${p.fat}г` : ''}
                                ${p.carbs ? ` 🍚 ${p.carbs}г` : ''}
                            </div>
                            ${p.brand ? `<div class="search-item-brand">🏷️ ${p.brand}</div>` : ''}
                            ${p.category ? `<div class="search-item-category">📁 ${p.category}</div>` : ''}
                        </div>
                        <div class="search-item-add">+</div>
                     </div>`;
        }
        
        if (items.length > 10) {
            html += `<div class="more-items">+ ещё ${items.length - 10}</div>`;
        }
        
        html += `</div></div>`;
    }
    
    container.innerHTML = html;
}

// ========== 8. БЫСТРЫЕ КНОПКИ ДЛЯ ФИЛЬТРОВ ==========
function getTopBrands(limit = 10, products = window.allProducts) {
    const brandCount = {};
    for (let p of products) {
        if (p.brand) {
            brandCount[p.brand] = (brandCount[p.brand] || 0) + 1;
        }
    }
    return Object.entries(brandCount)
        .sort((a,b) => b[1] - a[1])
        .slice(0, limit)
        .map(([brand]) => brand);
}

function getTopCategories(limit = 10, products = window.allProducts) {
    const categoryCount = {};
    for (let p of products) {
        if (p.category) {
            categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
        }
    }
    return Object.entries(categoryCount)
        .sort((a,b) => b[1] - a[1])
        .slice(0, limit)
        .map(([category]) => category);
}

// ========== 9. ЭКСПОРТ ДАННЫХ ==========
function exportProductsToJSON() {
    const dataStr = JSON.stringify(window.allProducts, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xp_products_export_${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportFilteredProducts(query, products = window.allProducts) {
    const filtered = searchProducts(query, products);
    const dataStr = JSON.stringify(filtered, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xp_search_results_${query}_${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ========== 10. АВТОМАТИЧЕСКИЙ ЗАПУСК ==========
// Запускаем инициализацию после загрузки страницы
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initAllProducts();
        
        // Выводим расширенную статистику в консоль
        console.log('=' .repeat(60));
        console.log('🍽️ БАЗА ПРОДУКТОВ XP FITNESS ГОТОВА');
        console.log('=' .repeat(60));
        console.log(`📦 Всего товаров: ${window.allProducts.length}`);
        console.log(`🏪 Магазинов: ${getUniqueShops().length}`);
        console.log(`📁 Категорий: ${getUniqueCategories().length}`);
        console.log(`🏷️ Брендов: ${getUniqueBrands().length}`);
        console.log('=' .repeat(60));
        
        // Топ-10 брендов
        console.log('🏆 ТОП-10 БРЕНДОВ ПО КОЛИЧЕСТВУ ТОВАРОВ:');
        getTopBrands(10).forEach((brand, i) => {
            const count = window.allProducts.filter(p => p.brand === brand).length;
            console.log(`   ${i+1}. ${brand} — ${count} товаров`);
        });
        console.log('=' .repeat(60));
        
        // Топ-10 категорий
        console.log('📁 ТОП-10 КАТЕГОРИЙ ПО КОЛИЧЕСТВУ ТОВАРОВ:');
        getTopCategories(10).forEach((category, i) => {
            const count = window.allProducts.filter(p => p.category === category).length;
            console.log(`   ${i+1}. ${category} — ${count} товаров`);
        });
        console.log('=' .repeat(60));
        console.log('✅ ВСЕ ФУНКЦИИ ЗАГРУЖЕНЫ!');
        console.log('📖 Доступные функции: searchProducts(), filterByCategory(), filterByBrand(), findLowCalorie(), displayResults() и др.');
    });
}

// ========== 11. ЭКСПОРТ ДЛЯ NODE.JS (если нужно) ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        allProducts: () => window.allProducts,
        searchProducts,
        filterByCategory,
        filterByBrand,
        filterByShop,
        filterByCalories,
        filterByProtein,
        findLowCalorie,
        findHighProtein,
        getUniqueBrands,
        getUniqueCategories,
        getUniqueShops,
        getRandomProduct,
        getTopBrands,
        getTopCategories,
        displayResults,
        displaySmartResults
    };
}

// ========== 12. ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ОТЛАДКИ ==========
window.debugProducts = function() {
    console.group('🐛 ОТЛАДКА БАЗЫ ПРОДУКТОВ');
    console.log(`Всего товаров: ${window.allProducts.length}`);
    console.log(`Магазины: ${getUniqueShops().join(', ')}`);
    console.log(`Пример товара:`, window.allProducts[0]);
    console.groupEnd();
};

// ========== 13. ГОТОВО! ==========
console.log('🎉 Файл products.js успешно загружен!');