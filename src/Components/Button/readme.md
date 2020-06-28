# Button

## Props

prop | propType |Описание
---- | -------- |--------
typeStyle | PropTypes.oneOf(['green', 'exit']) | Зеленая кнопка с цветом $clor-green, при наведении появляется внешняя тень, при нажатии внутренняя или кнопка с красным фоном при наведения для выхода из профиля на странице /profile
width | PropTypes.oneOf(['fullContainer', 'fixed']) | Кнопка имеет либо фиксированную ширину ```button-width-sm```, либо ширину всего контейнера
radius | PropTypes.oneOf(['sm', 'lg']) | кнопка имеет border-radius либо $border-radius-sm при значении sm, либо $border-radius-lg при значении lg соответственно
className | PropTypes.string | Добавляет в конец списка классов данный класс
children | PropTypes.node | вложенный jsx компонент
