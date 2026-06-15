document.getElementById('searchBtn').addEventListener('click', async () => {
    const tag = document.getElementById('tagInput').value.replace('#', '').toUpperCase();
    const resultDiv = document.getElementById('result');
    
    // Ton jeton API
    const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImEyNTNiMTBjLTllNTEtNDA0MS05ODNhLTlhYWE2MzFmMjY5NSIsImlhdCI6MTc4MTIwOTIxMSwic3ViIjoiZGV2ZWxvcGVyLzA3ODE5YzVkLTRjZWItNTJkZC1iODA1LTY5YjNjYzVkZWI2ZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTIuMTQwLjIzMC4xNDUiXSwidHlwZSI6ImNsaWVudCJ9XX0.BGHgrAraOeR9daSpGRuZvTJX9Lra2KNOpnx3f6j-CblF34iSNTM3dKwq5ACJcYgxPKDiTIXXdFOG8zR4SulBWw';

    try {
        // Appel à l'API via le proxy
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.brawlstars.com/v1/players/%23${tag}`)}`, {
            headers: { 'Authorization': `Bearer ${API_TOKEN}` }
        });

        const data = await response.json();
        
        // Vérifier si la réponse est bien arrivée
        if (data.contents) {
            const player = JSON.parse(data.contents);
            
            // Mise à jour de l'affichage (c'est ça qui affiche le profil !)
            document.getElementById('name').innerText = "Joueur : " + player.name;
            document.getElementById('trophies').innerText = "Trophées : " + player.trophies;
            document.getElementById('club').innerText = player.club ? "Club : " + player.club.name : "Pas de club";
            
            // On enlève la classe 'hidden' pour montrer les résultats
            resultDiv.classList.remove('hidden');
        } else {
            alert("Impossible de récupérer les données du joueur.");
        }
    } catch (error) {
        alert("Erreur de connexion API. Vérifie ton IP sur le portail Brawl Stars.");
        console.error(error);
    }
});