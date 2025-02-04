import { currentKw } from "./calcKw.js";
import { handleCompare, handleDoiTuong, handleKhuVuc } from "./calcResult.js";
import { handleCalcTaxes, handleThueXuat } from "./calcTaxes.js";

document.getElementById("calcResult").onclick = function () {
  const soToan = Number(document.getElementById("diemToan").value);
  const soLy = Number(document.getElementById("diemLy").value);
  const soHoa = Number(document.getElementById("diemHoa").value);
  const soKhuVuc=document.getElementById("khuVuc").value;
  const soDoiTuong=Number(document.getElementById("doiTuong").value);
  const soChuan=Number(document.getElementById("diemChuan").value);
  let bonusDT=handleDoiTuong(soDoiTuong);
  let bonusKV=handleKhuVuc(soKhuVuc);
  let tongMon=soToan+soLy+soHoa
  let tongDiem=tongMon+bonusDT+bonusKV
  let result=handleCompare(tongDiem,soChuan);
  document.getElementById(
    "inResult"
  ).innerHTML = `Thí sinh ${result}, tổng điểm là: ${tongDiem}`;
};

document.getElementById("calcPay").onclick=function(){
  const dienTieuThu=Number(document.getElementById("soDien").value);
  let tienDien=0;
  tienDien=currentKw(dienTieuThu)
  document.getElementById("inPay").innerHTML=`Tiền điện: ${tienDien}`

}

document.getElementById("calcThue").onclick=function(){
  const thueNam=Number(document.getElementById("yearIncome").value)
  const numPhuThuoc=Number(document.getElementById("dependentNum").value)
  let numThueChiu=handleCalcTaxes(thueNam,numPhuThuoc);
  let numXuat=handleThueXuat(numThueChiu);
  let payTaxes=numThueChiu*numXuat
  document.getElementById("inThue").innerHTML=`Tiền thuế phải trả: ${payTaxes} triệu`
}
