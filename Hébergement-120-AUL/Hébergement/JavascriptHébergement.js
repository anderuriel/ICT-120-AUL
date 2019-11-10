chambres = [];
function AjouterChambre()
{
    var numeroChambre = document.getElementById("NumChambre");
    var nombreParti = document.getElementById("NumParti");
    var nombrePartiMax = document.getElementById("NumPartiMax");
    if(!numeroChambre.value)
    {
        alert("Entrez un numero de chambre.");
    }
    else if(!nombreParti.value)
    {
        alert("Entrez un nombre de participants.");
    }
    else if(!nombrePartiMax.value)
    {
        alert("Entrez un nombre de participants max.");
    }
    else
    {
        var table = document.getElementById("TableList")
        var row = table.insertRow(1);
        CreateCellsText(row,numeroChambre.value,nombreParti.value,nombrePartiMax.value);
    }
}
function SupprimerChambre(row)
{
    row.parentElement.parentElement.remove();
}
function CreateCellsText(row, numeroChambre,nombreParti,nombrePartiMax)
{
    row.innerHTML = "";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = numeroChambre;
    cell2.innerHTML = nombreParti;
    cell3.innerHTML = nombrePartiMax;
    cell4.innerHTML = '<input type = "button" value = "Supprimer" onclick="SupprimerChambre(this)" class="btn-danger mr-2"><input type = "button" value = "Modifier" onclick="StartModif(this)" class="btn-warning mr-2">';

}
function CreateCellsInput(row,numeroChambre,nombreParti,nombrePartiMax)
{
    row.innerHTML = "";

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = `<input type="text" value="${numeroChambre}">`;
    cell2.innerHTML = `<input type="text" value="${nombreParti}">`;
    cell3.innerHTML = `<input type="text" value="${nombrePartiMax}">`;
    cell4.innerHTML = '<input type = "button" value = "Valider" onclick="ValiderModif(this)" class="btn-success">'
}
function ValiderModif(button)
{
    var row = button.parentElement.parentElement;
    console.log(row.cells[0].innerHTML);
    var numeroChambre = row.cells[0].getElementsByTagName("input")[0].value;
    console.log(numeroChambre);
    var nombreParti = row.cells[1].getElementsByTagName("input")[0].value;
    var nombrePartiMax = row.cells[2].getElementsByTagName("input")[0].value;
    CreateCellsText(row,numeroChambre,nombreParti,nombrePartiMax);
}
function StartModif(button)
{
    var row = button.parentElement.parentElement;
    var numeroChambre = row.cells[0].innerHTML;
    var nombreParti = row.cells[1].innerHTML;
    var nombrePartiMax = row.cells[2].innerHTML;
    CreateCellsInput(row,numeroChambre,nombreParti,nombrePartiMax);
}
class Chambre
{
    constructor(numeroChambre,nombrePartiMax)
    {
        this.numero = numeroChambre;
        this.participants = [];
        this.PartiMax = nombrePartiMax;
    }
}
class Participants
{
    constructor(prenom, nom)
    {
        this.prenom = prenom;
        this.nom =nom;
    }
}