## Etape 2

1. Créer un nouveau state "movies" en vous inspirant du state "users"
2. Dans le dossier src/model, créer un service movieModel en vous inspirant de userModel
3. Intégrer ce service dans le state "movies" à l'aide de la propriété resolve et utiliser ng-repeat pour afficher la liste des "movies" dans la partie droite de votre template
4. Dans UsersController ajouter une méthode login() qui redirige vers l'état "movies"
5. Dans le template utiliser la directive mdSidenav et le service associé et mettre la liste dans la sidenav