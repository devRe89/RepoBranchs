const users = [
    {
        idu: 1,
        nombre: 'rene',
        edad: 32
    },
    {
        idu: 2,
        nombre: 'juan',
        edad: 20
    },{
        idu: 3,
        nombre: 'pedro',
        edad: 25
    },{
        idu: 4,
        nombre: 'jose',
        edad: 27
    },
];

const acciones = [
    {
        ida: 1,
        idu: 1,
        accion: "correr"
    },
    {
        ida: 2,
        idu: 1,
        accion: "dormir"
    },
    {
        ida: 3,
        idu: 2,
        accion: "trabajar"
    },
    {
        ida: 4,
        idu: 2,
        accion: "bailar"
    },
    {
        ida: 5,
        idu: 3,
        accion: "nadar"
    },
    {
        ida: 6,
        idu: 3,
        accion: "saltar"
    },
    {
        ida: 7,
        idu: 4,
        accion: "correr"
    },
    {
        ida: 8,
        idu: 4,
        accion: "correr"
    },
];

//Indexa y agrupa por ID User.
const indexByKey = (arr, key) => arr.reduce((acc, el) => {
    if (!acc[el[key]]){
        acc[el[key]] = [];    
        acc[el[key]].push(el);
    }else{
        acc[el[key]].push(el);
    }
    return acc;
}, {});

const accionesIndex = indexByKey(acciones, 'idu');

res = [];
for (const i of users) {
    res.push({
        user: i,
        acciones: accionesIndex[i.idu]
    });
}

console.log(JSON.stringify(res, null, '\t'));
