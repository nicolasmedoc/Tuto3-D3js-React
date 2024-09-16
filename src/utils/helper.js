function generateValue(typeGen,i){
    let effectiveValue=null;
    if (typeGen==="random"){
        effectiveValue=Math.random();
    }else if(typeGen==="increment"){
        effectiveValue=i;
    }
    return effectiveValue;
}
export function genGridData(nbRows, nbColumns, typeGen="random", typeGen2="random"){
    const valuesArr = []
    for(let i=0;i<nbRows*nbColumns;i++){
        let effectiveValue=generateValue(typeGen,i);
        let effectiveValue2 = generateValue(typeGen2,i);

        const cellObj = {index:i, rowPos:Math.floor(i/nbColumns), colPos:i%nbColumns, value:effectiveValue, value2:effectiveValue2}
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

export function getDefaultFontSize (){
    const element = document.createElement('div');
    element.style.width = '1rem';
    element.style.display = 'none';
    document.body.append(element);

    const widthMatch = window
        .getComputedStyle(element)
        .getPropertyValue('width')
        .match(/\d+/);

    element.remove();

    if (!widthMatch || widthMatch.length < 1) {
        return null;
    }

    const result = Number(widthMatch[0]);
    return !isNaN(result) ? result : null;
};