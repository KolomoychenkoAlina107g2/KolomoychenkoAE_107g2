Задание 1 (Написать компонент, выводящий квадрат переданного числа:)
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad1.1.png)
Итог:
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad1.2.png)

Задание 2 (Написать компонент, выводящий только чётные элементы переданного массива:)
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad2.1.png)
Итог:
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad2.2.png)

Задание 3 (Написать компонент, отображающий переданную ему температуру воздуха. Если температура ниже нуля, отображаются синие цифры, если выше, то красные:)
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad3.1.png)
Итог:
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad3.2.png)


Задание 3 (Сделать кнопку, которая при нажатии меняет цвет фона с красного на зелёный и обратно:)
```javascript
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Color Toggle</title>
  
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const ColorToggleButton = () => {
      const [bgColor, setBgColor] = React.useState('red');

      const toggleColor = () => {
        setBgColor(bgColor === 'red' ? 'green' : 'red');
      };

      const buttonStyle = {
        backgroundColor: bgColor,
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        outline: 'none'
      };

      return (
        <button style={buttonStyle} onClick={toggleColor}>
          {bgColor === 'red' ? 'Нажми меня!' : 'Нажми меня!'}
        </button>
      );
    };

    const App = () => {
      return (
        <div>
          <h1>Нажми на кнопочку</h1>
          <ColorToggleButton />
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

Итог:
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad4.1.png)
после нажатия на кнопку
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/Foto/zad4.2.png)