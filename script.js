document.getElementById('searchBtn').addEventListener('click', () => {
    const tag = document.getElementById('tagInput').value.replace('#', '');
    alert("Le site est prêt ! Il ne reste plus qu'à connecter la clé API.");
    console.log("Recherche pour le tag : " + tag);
});