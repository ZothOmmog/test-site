# LinkCustom

## Props

prop      | propType                                                       |Описание
--------- | -------------------------------------------------------------- | --------
to        | ```PropTypes.string.isRequired```                                | Cодержит ссылку на одну из 4 страниц
type      | ```PropTypes.oneOf(['green', 'transparent', 'withoutActive'])``` | green - создается зеленая ссылка, transparent - прозрачная, withoutActive - ссылка не может стать выделенной как активная, у ссылки отсутствует ```:hover```
radius    | ```PropTypes.oneOf(['sm', 'lg'])```                              | sm - ```border-radius``` ссылки стает равен переменной scss ```$link-border-radius-sm```, если lg, то ```$link-border-radius-lg```
width     | ```PropTypes.oneOf(['fullContainer', 'fixed'])```                | fullContainer - ```width: 100%```, fixed - ```width: $link-width-sm```
className | ```PropTypes.string```                                           | класс, который добавляется в конец списка классов
active    | ```activeValidator(['borderGreen', 'borderBlack'])```*           | При переходе по ссылке устанавливается borderBlack - ```border: 2px solid $color-black;``` borderGreen - ```border: 4px solid $color-green;```, не может быть установлено, если type имеет значение withoutActive, валидатор вернёт ошибку

### Примечание

*```activeValidator``` - кастомный валидатор

#### Его код

```ES6
const activeValidator = (acceptableValues) => (props, propName, componentName) => {
  let error = null;
  const propValue = props[propName];

  if(propValue) {
    if(props.type === 'withoutActive') {
      error = new Error(
        `Нельзя передавать проп ${propName} в компонент ${componentName}, когда передается проп type со значением withoutActive`
      );
    }
    else if(!acceptableValues.includes(propValue)) {
      error = new Error(
        `Значение пропа ${propName} из компонента ${componentName} должно быть одним из: ${acceptableValues.toString()}`
      );
    }
  }

  return error;
};
```
