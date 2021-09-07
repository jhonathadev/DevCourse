function area(width, height) {
  const area = width * height;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

//const test = area(5,5);
console.log(area());
