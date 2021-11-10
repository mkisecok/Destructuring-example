// Array Destructuring

const alle=['banana','cucumber','bread','cakes','pizza'];
const[fruit,vegetable,...food]=alle;

console.log(fruit);
console.log(vegetable);
console.log(food);
console.log('='.repeat(50));
//Object Destructuring

const myObject=
{
    creepy:'Candy',
    bloody:'Nurse',
    funny:'Celebrity',
    angry:'Zombie',
    fran:'witch'
}
const{creepy,bloody,funny,angry,fran}=myObject;

console.log(creepy);
console.log(bloody);
console.log(funny);
console.log(angry);
console.log(fran);
console.log('='.repeat(50));
//Parameters:Object Destructuring

const song =
{
    band:'So schön anders',
    musician:'Adel Tawil',
    nationality:'Deutsch',
    greatestHit:'Ist da Jemand'
};

function createData({band, musician, nationality,genre, greatestHit})
{
    return `${ musician } is a ${ nationality }er singer. ${ band } is a band and top hit is ${ greatestHit}`
};
console.log(createData(song));

