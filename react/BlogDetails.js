function BlogDetails({id} ) {
    const [publication, setPublication] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:3000/Publication/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des détails de la publication');
            }
            return response.json();
        })
        .then(json => setPublication(json))
        .catch(err => console.log('Erreur lors du chargement des détails de la publication :', err));

        return () => {
            setPublication({}); 
        };
    }, [id]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <img src="../images/paysage.jpg" className="img-fluid banner" alt="Responsive image" id="image" />
            </div>
            <div className="container-fluid">
                <p id="titre" className="text-center h1">{publication.Titre}</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4 col-lg-12 contenu" id="contenu1">{publication.Contenu}</div>
                    <div className="col-12 col-sm-4 col-lg-12 contenu" id="contenu2">{publication.Contenu}</div>
                    <div className="col-12 col-sm-4 col-lg-12 contenu" id="contenu3">{publication.Contenu}</div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="text-center">
                    <img src="../images/paysage.jpg" className="rounded-1" alt="image" id="image" />
                    <div id="auteur" className="text-center text-decoration-underline h4">{publication.Auteur}</div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4 col-lg-12 contenu" id="contenu4">{publication.Contenu}</div>
                    <div className="col-12 col-sm-4 col-lg-12 contenu" id="contenu5">{publication.Contenu}</div>
                </div>
            </div>
        </div>
    );
}
