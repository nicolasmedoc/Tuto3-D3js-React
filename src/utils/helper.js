function generateValue(value,i){
    let effectiveValue=null;
    if (value==="random"){
        effectiveValue=Math.random();
    }else if(value==="increment"){
        effectiveValue=i;
    }
    return effectiveValue;
}
export function getGridData(nbRows, nbColumns, typeGen=null, typeGen2=null){
    const valuesArr = []
    for(let i=0;i<nbRows*nbColumns;i++){
        let effectiveValue=generateValue(typeGen,i);
        let effectiveValue2 = generateValue(typeGen2,i);

        const cellObj = {index:i, x:i%nbColumns, y:Math.floor(i/nbColumns), value:effectiveValue, value2:effectiveValue2}
        valuesArr.push(cellObj)
    }
    return valuesArr;
}


export function getBlueHue(){
    return ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
}
export function getYlGnBu(){
    return ['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58']
}