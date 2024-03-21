function CommentList({id }) {
    const [commentaires, setCommentaires] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/Commentaire?Publicationid=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des commentaires');
            }
            return response.json();
        })
        .then(commentaires => {
            setCommentaires(commentaires);
        })
        .catch(err => console.log(err));
        
        return () => {
            setCommentaires([]);
        };
    }, [id]);

    return (
        <div id="commentaireAjouteAutomatiquement">
            {commentaires.map(commentaire => (
                <Comment key={commentaire.id} contenu={commentaire.Contenu} />
            ))}
        </div>
    );
}
