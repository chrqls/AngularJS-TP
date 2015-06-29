## Etape 7

1. Ajouter au service commentModel la méthode findByMovie :
    * prend en paramètre un movieId
    * lance une requête HTTP GET sur http://localhost:3000/comments?movie={{movieId}}
    * retourne une promise
2. Afficher la liste des commentaires en bas du state movies.detail