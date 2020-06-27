export const generateRandomNum = (articleLength, range)=>{

    let runner = 0;
    let arr = [];
    while (arr.length !== range && runner <= 10){
        arr.push(Math.floor(Math.random() * Math.floor(articleLength)))

        if (arr.length === 4){
            arr = [...new Set(arr)] 
        }
        runner += 1
    }
    return arr
 
}