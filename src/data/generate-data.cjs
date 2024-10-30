const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);

    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        const randomName = names[Math.floor(Math.random() * names.length)];
        const person = {
            id: i + 1,
            name: randomName,
            birth: randomDate(new Date(1950, 0, 1), new Date(2010, 0, 1)), // Losowa data urodzenia
            eyes: randomEyeColor()  // Losowy kolor oczu
        };
        content += JSON.stringify(person) + ",\n";
    }
    content += "];"

    //zapis łańcucha do pliku 
    fs.writeFile('module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });

// Funkcja losująca datę w przedziale <min, max>

function randomDate(min, max){
    const date = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
    return date.toISOString().split('T')[0]; // Zwracamy datę w formacie 'YYYY-MM-DD'
}
// Funkcja losująca kolor oczu

function randomEyeColor(){
    const colors = ['niebieskie', 'zielone', 'brązowe', 'szare'];
    return colors[Math.floor(Math.random() * colors.length)];
}

});