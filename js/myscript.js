
var creaBtn = document.getElementById("CreaBiglietto");
var annullaBtn = document.getElementById("annullabiglietto")

creaBtn.addEventListener("click", function () {
  var prezzoTotale;
  var costo = 0.21;
  var nome = document.getElementById("nome").value;
  var chilometri = document.getElementById("km").value;
  var categoria = document.getElementById("categoria").value;

  if (categoria == "minorenne") {
    prezzoTotale = chilometri * costo - 20/100 * (chilometri * costo);
  } else if (categoria == "over65") {
    prezzoTotale = chilometri * costo - 40/100 * (chilometri * costo);
  } else {
    prezzoTotale = chilometri * costo;
  }
  var prezzoTotale = prezzoTotale .toFixed(2);

  var numeroTreno = Math.floor(Math.random()*(100000-90000 + 1)) +90000;
  var numeroCarrozza = Math.floor(Math.random()*(10-1 + 1)) + 1;

  document.getElementById("passeggero").innerHTML = nome;
  document.getElementById("numerotreno").innerHTML = numeroTreno;
  document.getElementById("numerocarrozza").innerHTML = numeroCarrozza;
  document.getElementById("prezzobiglietto").innerHTML = prezzoTotale;
  document.getElementById("categoriapasseggero").innerHTML = categoria;

  document.getElementById("mostrabiglietto").className = "show";
});

annullaBtn.addEventListener("click", function(){
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("categoria").value = "maggiorenne";

})
