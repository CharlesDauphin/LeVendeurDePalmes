document.addEventListener("DOMContentLoaded", function() {
    
    var seasonslist = document.getElementById("select-season");
    
    var episodes = document.getElementById("episodes");

    seasonslist.value = "season1";
    
    var event = new Event("change", { bubbles: true });
    
    seasonslist.dispatchEvent(event);
    
    seasonslist.addEventListener("change", function() {
        var seasonsselect = seasonslist.value;
        var episodeslist = {
            season1: "<h3>Saison 1 : Un pays sans eau</h3>Épisode 1 La Terre Asséchée (56 min)<br>Épisode 2 Les Soupçons (12 min)<br>Épisode 3 Le Mystère de Gabriel (130 min)<br>Épisode 4 L'Autopsie (12 h)",
            season2: "<h3>Saison 2 :  À la recherche du vendeur de palme Volume 1</h3>Épisode 1 La Traque et l'Erreur de Poursuite (78 min)<br>Épisode 2 La Résurrection Inattendue (16h)<br>Épisode 3 La Capture du Vendeur (103 min)",
            season3: "Saison noire 1",
            season4: "Saison noire 2",
            season5: "<h3>Saison 5 : Alice au pays des huîtres</h3>Épisode 1 Le Portail des Huîtres (10 min)<br>Épisode 2 Le Labyrinthe de Nacre (4 h)<br>Épisode 3 Le Retour et l'Adieu (84 min)",
            season6: "<h3>Saison 6 : Saison documentaire, la vie d’une grenouille au cours de l’automne</h3>Épisode 1 Le bal des feuilles<br>Épisode 2 Les couleurs de l'étang<br>Épisode 3 Le chant de la pluie<br>Épisode 4 : L'hivernation se prépare",
            season7: "Saison blanche",
            season8: "<h3>Saison 8 : Retour aux  pays des huîtres</h3>Épisode 1 Les Racines de la Vérité (48min)<br>Épisode 2 La Traque Commence (97 min)<br>Épisode 3 La Révélation (120 min)<br>Épisode 4 Le retour au Pays des Huîtres (12:66 sec)",
            season9: "<h3>Saison 9 : À la recherche du vendeur de Palme Volume 2</h3>Épisode 1 : La Quête Divine<br>Épisode 2 : La Gourmandise Fatale<br>Épisode 3 : Les Pouvoirs Divins<br>Épisode 4: Les Doutes Croissants",
            season10: "Saison blanche 2",
            season11: "<h3>Saison 11 : Terre, terre, terre</h3>Épisode 1: L'Ombre des Huîtres<br>Épisode 2: Promesses et Sacrifices<br>Épisode 3: L'Intrigue du Maïs<br>Épisode 4: L'Épreuve de Jésus",
            season12: "<h3>Saison 12 : Üßü</h3>Épisode 1 : La Ferme Ébranlée<br>Épisode 2 : Renaissance au Pays des Huîtres<br>Épisode 3 : L'Alliance Fragile<br>Épisode 4 : Üßü",
        };

        episodes.innerHTML = episodeslist[seasonsselect];
    });   
    
    seasonslist.dispatchEvent(event);
});

