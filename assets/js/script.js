$(function(){
  $(document).ready(function(){
    // je déclare les différentes variables possibles
    var $gameValue = Math.floor(Math.random() * (100 - 0 + 1)) + 0;         // Nombre à trouver aléatoire entre 0 et 100
    console.log('Here\'s the answer Mofo! : ' + $gameValue);                // Affichage de la réponse dans la console si on appuie sur F12
    var $gameTry = 0;                                                       // Nombre d'essai défini à 0 par défaut
    var $gameResult = $('#gameResult');                                     // Déclaration de la variable contenant l'afficheur des résultats du jeu
    var nmbVerif = /^[0-9]+$/;                                              // Regex pour ne laisser passer que des chiffres
    var $gameSearch = $('#gameSearch').val('');                             // Remise à zéro du champ de saisie
    // Appel de fonction au clic du bouton "Valider"
    $('#gameValid').on('click', function(){
      $gameSearch = $('#gameSearch').val();
      if($gameSearch.match(nmbVerif)){
        $gameTry++;
        testNmb();
      }else{
        $gameResult.text('Nope! Un nombre entier please !');
      }
    });
    // Appel de fonction au clic de la touche "Entrer" dans le champ de saisie
    $('#gameSearch').keydown(function(event){
      if(event.keyCode == 13){
        $gameSearch = $('#gameSearch').val();
        if($gameSearch.match(nmbVerif)){
          $gameTry++;
          testNmb();
        }else{
          $gameResult.text('Nope! Un nombre entier please !');
        }
      }
    });
    // Cette fonction permet de vérifer si la valeur entrée est égale au résultat attendu
    function testNmb(){
      if($gameSearch == $gameValue){
        $gameResult.text('Well done dude! '+ $gameTry +' Appuie sur le bouton "Recommencer" pour rejouer!')
        $('#gameReset').show(); // Afficher le btn reset
      }else{
        if($gameSearch > $gameValue){
          $gameResult.text('Pouet, c\'est moins !');// Message si le nombre entré est supérieur au nombre attendu
        }else{
          $gameResult.text('Pouet, c\'est plus !');// Message si le nombre entré est inférieur au nombre attendu
        }
      }
    }
    //Quand on clique sur le btn reset
    $('#gameReset').on('click', function(){
      $('#gameSearch').val('');
      $gameTry = 0;
      $gameValue = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log('Here\'s the answer Mofo!: ' + $gameValue);
      $gameResult.text('Trouvez le résultat compris entre 0 et 100 !')
      $('#gameReset').hide();
    });
  });
});
