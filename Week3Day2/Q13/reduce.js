const iteams= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
const category =iteams.reduce(sortIteams, {})
console.log(category)

function sortIteams(accu,element){
    if (accu[element]){
        accu[element] += 1;
    } else{
       accu[element] = 1;
    }
     return accu;
}