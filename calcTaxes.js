export function handleCalcTaxes(income, dependent) {
  let chiuThue;
  chiuThue = income - 4 - dependent * 1.6;
  return chiuThue;
}

export function handleThueXuat(num) {
  let thueXuat = 0;
  if (num > 0 && num <= 60) thueXuat = 0.05;
  else if (num > 60 && num <= 120) thueXuat = 0.1;
  else if (num > 120 && num <= 210) thueXuat = 0.15;
  else if (num > 210 && num <= 384) thueXuat = 0.2;
  else if (num > 384 && num <= 624) thueXuat = 0.25;
  else if (num > 624 && num <= 960) thueXuat = 0.3;
  else if (num > 960) thueXuat = 0.35;
  return thueXuat;
}
