const mainController = {
    home: function (req, res) {
        
        // res.render('home'); // Si on travail avec EJS et des vues rendues côté serveur.

        const users = [
            {
                name: 'machin',
                age: 25
            },
            {
                name: 'i;uik;ui',
                age: 36
            },
            {
                name: 'fzefze',
                age: 44
            }
        ]

        res.json(users);
        
    }
}

export default mainController;