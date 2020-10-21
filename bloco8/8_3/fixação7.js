const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality = 'espero eu que agora apreça essa menssagem' } = person

console.log(nationality);