const nikoKatas = {
    name: "二虎流",
    firstForm: "操流型",
    secondForm: "金剛型",
    thirdForm: "火天型",
    fourthForm: "水天型"
}

const {firstForm: myForm, name: myName} = nikoKatas;
console.log(myForm);

function fight({firstForm}) {
    return `${firstForm} fight`;
}
console.log(fight(nikoKatas));