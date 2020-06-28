# Variavlbes scss

```$base``` - Базованя переменная за счет которой можно регулировать margin и padding, если это необходимо

```$font-size-xs``` - минимальный размер шрифта, используется в статьях на вкладке ```/news```
```$font-size-sm``` - мальенький шрифт, используется для главного навигационного меню и во многих других местах
```$font-size-md``` - средний шрифт, используется в профиле пользователя /profile для вывода информации
```$font-size-lg``` - большой шрифт, используется для заголовка авторизации ```/login``` и имени пользователя в профиле ```/profile```
```$font-size-xl``` - заголовок на главной странице

```$color-black``` - основной цвет шрифтов и теней
```$color-green``` - основной цвет для оформления кнопок и ссылок
```$color-red``` - цвет для кнопки выходя из аккаунта

```$link-border-radius-sm``` - ```border-radius``` для конпкок с меньшим закруглением и для аватарки пользователя внутри ссылки на ```/profile```
```$link-border-radius-lg``` - ```border-radius``` для кнопок с бОльшим закруглениями

```$link-width-sm``` - ширина ссылок с фиксированной шириной (навигационное меню)ж
```$link-height``` - высота ссылок

```$button-width-sm: $link-width-sm;``` - соответствующий параметр для кнопок
```$button-height: $link-height;``` - соответствующий параметр для кнопок

```$transition-duration: 0.2s;``` - время перехода для :hover кнопок и ссылок