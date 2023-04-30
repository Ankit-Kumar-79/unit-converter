const convert = () => {
  const value = document.getElementById("value").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  let result;

  // Conversion formula
  if (from === "meter" && to === "kilometer") {
    result = value / 1000;
  } else if (from === "kilometer" && to === "meter") {
    result = value * 1000;
  } else if (from === "centimeter" && to === "meter") {
    result = value / 100;
  } else if (from === "meter" && to === "centimeter") {
    result = value * 100;
  } else if (from === "inch" && to === "centimeter") {
    result = value * 2.54;
  } else if (from === "centimeter" && to === "inch") {
    result = value / 2.54;
  } else {
    result = value;
  }

  document.getElementById("result").value = result.toFixed(2);
};
