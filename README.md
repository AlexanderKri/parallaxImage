# parallaxImage
###Документация

Параллакс анимация изображения.

Вызов
```javascript
$(function () {
 $('img').parallaxImage({
    widthImg : '110%',
    offset: '-5%',
    query : 767,
    speed : 30
 });
});
```

Функция принимает три аргумента:

widthImg - увеличение изображения. Минимальная величина 110%, по умолчанию 110%

query - медиа запрос, меньше которого параллакс выключается, по умолчанию 767

speed - скорость анимации. Чем цифра меньше тем анимация быстрее(по умолчанию 30).