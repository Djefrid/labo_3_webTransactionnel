function Blog() {
    const id = React.useContext(CustomContext);
    return (
        <div className="container-fluid">
            <BlogDetails id = {id} />
            <div className="container-fluid">
                <h1 id="titre"> commentaire</h1>
            </div>
            <AddComment articleId={id} />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 col-lg-1">
                        <img src="../images/MicrosoftTeams-image.png" alt="image" width="99" height="50" />
                    </div>
                    <div className="col">
                        <div className="row" id="commentaireAjouteAutomatiquement">
                        <CommentList id = {id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



