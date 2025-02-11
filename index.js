// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

function numbersSum() {
  const firstNumb = Number(prompt("первое число"));
  const secondNumb = Number(prompt("второе число"));
  let sum = 0;

  for (let i = 0; firstNumb + i <= secondNumb; i++) {
    sum = sum + firstNumb + i;
  }
  alert(sum);
}

document.getElementById("task_1").addEventListener("click", function () {
  numbersSum();
});

// --------------------------------------------------------------------------------------------------------------------------

// 2. Запросить 2 числа и найти только наибольший общий делитель.

function shortenText() {
  const firstNumb = Number(prompt("первое число"));
  const secondNumb = Number(prompt("второе число"));
  let commonDivisor = 0;

  for (
    let i = 0;
    i <=
    ((firstNumb > secondNumb && secondNumb) ||
      (firstNumb < secondNumb && firstNumb));
    i++
  ) {
    if (firstNumb % i === 0 && secondNumb % i === 0) {
      commonDivisor = i;
    }
  }

  alert(`Наибольший общий делитель чисел равен: ${commonDivisor}`);
}

document.getElementById("task_2").addEventListener("click", function () {
  shortenText();
});

// --------------------------------------------------------------------------------------------------------------------------

// 3. Запросить у пользователя число и вывести все делители этого числа.

function formatName() {
  const numb = prompt("Введите число");
  let allDivisors = "";

  for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
      allDivisors = allDivisors + i + ", ";
    }
  }

  alert(allDivisors);
}

document.getElementById("task_3").addEventListener("click", function () {
  formatName();
});

// --------------------------------------------------------------------------------------------------------------------------

// 4. Определить количество цифр в введенном числе.

function numbLength() {
  const numb = prompt("Введите число");
  let numbLength = 0;

  for (let i = 0; i <= numb.length; i++) {
    numbLength = i;
  }

  alert(numbLength);
}

document.getElementById("task_4").addEventListener("click", function () {
  numbLength();
});

// --------------------------------------------------------------------------------------------------------------------------

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной пере-
// менной (не 10) для ввода чисел пользователем.

function analyzeNumbers() {
  const numbLength = prompt("?!?!?!?!?   СКОЛЬКО ЧИСЕЛ ВЫ ХОТИТЕ   ?!?!?!?!?");
  let allNumbers = "";
  let tempNumb;
  let a = 0;
  let positiveNumber = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  let even = 0;
  let odd = 0;

  for (let i = 1; i <= numbLength; i++) {
    let numb = prompt("Введите " + i + "-ое число");

    if (numb === null) {
      break;
    }

    if (!!Number(numb) || numb === "0") {
      allNumbers = allNumbers + numb + " ";
      tempNumb = Number(allNumbers.trim().split(" ")[a]);
      a++;

      if (tempNumb === 0) {
        zeros = zeros + 1;
      } else if (tempNumb > 0) {
        positiveNumber = positiveNumber + 1;
      } else {
        negativeNumbers = negativeNumbers + 1;
      }

      if (tempNumb % 2 === 0 && tempNumb !== 0) {
        even = even + 1;
      } else {
        odd = odd + 1;
      }
    }
    console.log(allNumbers.trim().split(" "));
    console.log(numb);
  }
  alert(
    `Положительные: ${positiveNumber}, Отрицательные: ${negativeNumbers}, Нули: ${zeros}, Чётные: ${even}, Нечётные: ${odd}, Введено чисел: ${
      allNumbers.trim().split(" ").length
    }`
  );
}

document.getElementById("task_5").addEventListener("click", function () {
  analyzeNumbers();
});

// --------------------------------------------------------------------------------------------------------------------------

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
