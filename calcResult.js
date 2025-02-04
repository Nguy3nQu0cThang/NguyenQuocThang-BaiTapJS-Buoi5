export function handleKhuVuc(num) {
  let bonusKhuVuc = 0;
  switch (num) {
    case "A":
      bonusKhuVuc = 2;
      break;
    case "B":
      bonusKhuVuc = 1;
      break;
    case "C":
      bonusKhuVuc = 0.5;
      break;
    case "X":
      bonusKhuVuc = 0;
      break;
    default:
      null;
      break;
  }
  return bonusKhuVuc;
}

export function handleDoiTuong(num) {
  let bonusDoiTuong = 0;
  switch (num) {
    case 1:
      bonusDoiTuong = 2.5;
      break;
    case 2:
      bonusDoiTuong = 1.5;
      break;
    case 3:
      bonusDoiTuong = 1;
      break;
    case 0:
      bonusDoiTuong = 0;
      break;
    default:
      null;
      break;
  }
  return bonusDoiTuong;
}

export function handleCompare(diem, diemChuan) {
  let result = "";
  if (diem < diemChuan) result = "Rớt";
  else result = "Đậu";
  return result;
}
