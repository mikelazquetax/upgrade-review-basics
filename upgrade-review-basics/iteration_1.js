const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categories = [
   {comedias: []} ,
   {acci: []} ,
   {animac: []} ,
   {aventuras: []} ,
   {thriller: []} ,
]
const comedias = [];
const aventuras = [];
const acci = [];
const thriller = [];
const animac = [];

for (value of movies) {
  if (value.categories.includes("comedia") == true) {
    comedias.push(value.title);
  }
   if (value.categories.includes("aventura") == true) {
    aventuras.push(value.title);
  } 
  if (value.categories.includes("acción") == true) {
    acci.push(value.title);
  } 
   if (value.categories.includes("thriller") == true) {
    thriller.push(value.title);
  } 
   if (value.categories.includes("animación") == true) {
    animac.push(value.title);
  }
}

categories[0] = comedias;
categories[1] = aventuras;
categories[2] = acci;
categories[3] = thriller ;
categories[4] = animac;

console.log(categories)
