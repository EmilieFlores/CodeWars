const cutIt = (arr)=> arr.map(element => element.slice(0,Math.min(...arr.map(element => element.length))))
