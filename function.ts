function addTwo(num: number) {
     return num + 2;
}

function getUpper(val: string) {
     return val.toUpperCase()
}

let loggedIn = (email: string, number: number, isPaid: boolean, name: string) => {
     return "yes";
}

addTwo(5);
getUpper("hello");
loggedIn("harsh@gmail.com", 655, true, "hari")

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
     return `hero is ${hero}`;
})

function consoleError(errMsg: string): void {
     console.log(errMsg);
}

export { }