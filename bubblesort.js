//1)ingresa un array
//2)la funcion debe recorrer el array
//3)deberia comparar el 1er y 2do num(2-3) y ordenarlo
//4)recorre nuevamente para verificar si esta bien ordenado
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {

      if (array[j] > array[j + 1]) {
        swap(array, j);
      }
    }
  }
  return array;
}

function swap(array, j) {
  let index1 = array[j];
  array[j] = array[j + 1];
  array[j + 1] = index1;
}