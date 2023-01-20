// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
         const AllCats = [...cats, name];
        return(AllCats);
    }
function prependCat(name) {
    const NewCat = [name, ...cats];
    return(NewCat);
}
function removeLastCat() {
    const CopyCat = [...cats];
    CopyCat.pop();
    return(CopyCat); 
}
function removeFirstCat() {
    const CopyCat2 = [...cats];
    CopyCat2.shift();
    return(CopyCat2);
}