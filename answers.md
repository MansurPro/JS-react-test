1) Promise – это специальный объект, который содержит своё состояние. 
Вначале pending («ожидание»), затем – одно из: 
fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).
2) После вызова функция async возвращает Promise. 
Когда результат был получен, Promise завершается, возвращая полученное значение. 
Когда функция async выбрасывает исключение, Promise ответит отказом с выброшенным (throws) значением.

Функция async может содержать выражение await, 
которое приостанавливает выполнение функции async и 
ожидает ответа от переданного Promise, 
затем возобновляя выполнение функции async и возвращая полученное значение.
3) this (js синтаксис) - Свойство контекста выполнения кода (global, function или eval), 
которое в нестрогом режиме всегда является ссылкой на объект, 
а в строгом режиме может иметь любое значение.
4) Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. 
Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. 
В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.
5) - Стрелочные функции строятся по единой схеме, 
при этом структура функций может быть, в особых случаях, упрощена.
Базовая структура стрелочной функции выглядит так:
	(argument1, argument2, ... argumentN) => {
  		// тело функции
	}
 - Возврат объектов и сокращённая запись стрелочных функций
 - В отличие от других функций, стрелочные функции не имеют собственного контекста выполнения.
 - Ещё один распространённый пример использования стрелочных 
	функций заключается в инкапсуляции трансформаций объектов.

