const { Client } = require('pg')

const client = new Client({
  host: 'ec2-46-137-79-235.eu-west-1.compute.amazonaws.com:5432',
  user: 'egfielrqxshumx',
  password: 'b6577328bf898895ed126fe997f75eb30b53a10481ee49ec86476c84c682aff5',
  database: 'd6953su2648rna',
})


const getCars1 = () => {
  return exampleCars1;
  // return client
  // .query('SELECT * FROM cars')
  // .then(res => {
  //   console.log("res.rows", res.rows)
  //   return res.rows
  // })
  // .catch(err =>
  //   setImmediate(() => {
  //     throw err
  //   })
  // )
}

const getCars2 = () => {
  return exampleCars2;
}

module.exports = {
  getCars1,
  getCars2
};

const exampleCars1 = [
  {
    "id":1,
    "name":"laFerrari",
    "description":"LaFerrari, project name F150[4] is a limited production hybrid sports car built by Italian automotive manufacturer Ferrari.[5] LaFerrari means \"The Ferrari\"  in Italian and some other Romance languages, in the sense that it is the \"definitive\" Ferrari. The sports car is the last Ferrari model with a mid-mounted 12-cylinder engine.",
    "image_url":"https://static.businessinsider.com/image/5136501b69beddf456000025/image.jpg"
  }
]

const exampleCars2 = [
  {
     "id":2,
     "name":"Koenigsegg Jesko ",
     "description":"The Koenigsegg Jesko is a limited production mid-engine sports car produced by Swedish automobile manufacturer Koenigsegg. Introduced at the 2019 Geneva Motor Show, the car succeeds the Agera. The name Jesko is a tribute to the company founder's father, Jesko von Koenigsegg. The automobile is named after Jesko von Koenigsegg, the father of Christian von Koenigsegg. The Jesko is primarily built as a high-performance track car, with focus on high aerodynamic downforce and more precise handling. Koenigsegg's other current production model, the Regera, is designed as a grand touring-oriented offering.",
     "image_url":"https://www.carscoops.com/wp-content/uploads/2019/03/0ef9c6d4-koenigsegg-jesko-00.jpg"
  },
  {
     "id":3,
     "name":"Rimac Concept 2",
     "description":"The Rimac C Two, stylized as C_Two, is a semi-autonomous all-electric sports car designed and manufactured by the Croatian automotive manufacturer Rimac Automobili.[4] Unveiled at the 2018 Geneva Motor Show, it is the automaker's second car after the Rimac Concept One and is described as a significant technological leap, dubbed \"a car alive with technology\". The exterior was designed by the Croatian-born Austrian Adriano Mudri. Rimac plans to produce 150 vehicles[5][6] and is currently in the process of homologation for the global market.[7] The first deliveries are expected to take place in 2020.[8] The C_Two was sold out almost three weeks after its launch.[9] The C Two is manufactured in the same factory and at the same rate (of roughly 1 per week) as the Pininfarina Battista, which is based on the same platform",
     "image_url":"https://www.rimac-automobili.com/ctwo/gallery/c_two-studio-rear-doors-up.jpg"
  }
];

