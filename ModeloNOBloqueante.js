var fs = require("fs")
console.log("\nAbriendo el archivo...")
var content = fs.readFileSync("el_quijote.txt","UTF8", function(error,content){
    console.log(content)
})
console.log("\nHaciendo otra cosa")
console.log(process.uptime())