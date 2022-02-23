// Opérateurs d’égalité
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

// Boucle
Handlebars.registerHelper('repeat', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

// Ajoute un 0 si le chiffre est inférieur à 10
Handlebars.registerHelper('addZero', function(n, block) {
    let longueur = n.toString().length;
    let valeur = '';
    if (longueur == 1){
        valeur = '0'+n;
    } else {
        valeur = n;
    }
    return valeur;
});