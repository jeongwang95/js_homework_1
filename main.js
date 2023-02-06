// Exercise 1
function findWords(str, names) {
    let matched = false
    let lowerStr = str.toLowerCase()
    for (let i in names) {
        if (lowerStr.search(names[i].toLowerCase()) != -1) {
            console.log(`Matched ${names[i]}`)
            matched = true
        }
    }

    if (!matched) {
        console.log("No Matches")
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_names2 = ['jack', 'john', 'jane']

findWords(dog_string, dog_names)
findWords(dog_string, dog_names2)

// Exercise 2
function replaceEvens(arr) {
    for (let i in arr) {
        if (i%2 == 0) {
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
replaceEvens(arr)
console.log(arr)


// vowel count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    const vowels = new Set('aeiou')
    let lowerStr = str.toLowerCase()
    let counter = 0
    
    for (let i in lowerStr) {
        if (vowels.has(lowerStr[i])) {
            counter++
        }
    }
    
    return counter
}


// complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna){
    let newDNA = ''
    
    for (let i in dna) {
        if (dna[i] == 'A') {
            newDNA += 'T'
        } else if (dna[i] == 'T') {
            newDNA += 'A'
        } else if (dna[i] == 'G') {
            newDNA += 'C'
        } else
            newDNA += 'G'
        }
        
        return newDNA
}