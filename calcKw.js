export function currentKw(current){
    let pay=0
    if (current>0 && current<=50) pay=current*500
    else if(current>50&&current<=100) pay=50*500+(current-50)*650
    else if(current>100&&current<=200) pay=50*500+50*650+(current-100)*850
    else if(current>200&&current<=350) pay=50*500+50*650+100*850+(current-200)*1100
    else if(current>350) pay=50*500+50*650+100*850+150*1100+(current-350)*1300
    return pay;
}