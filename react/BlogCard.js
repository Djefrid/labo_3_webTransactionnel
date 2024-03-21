function BlogCard(props) {
    return (
        <div className="col-10 col-lg-3 bloc">
            <a className="text-decoration-none" href={`index.html?id=${props.id}`}>
                <div className="row">
                    <div className="card rounded-4 border border-3 border-secondary hover-zoom mx-auto">
                        <img className="card-img-top image" src={props.image} alt="Card image cap"/>
                        <div className="fs-4 p-3 mb-2 text-white card-title carteblog">{props.Titre}</div>
                        <div className="card-body">
                            <p className="card-text contenue">{props.Contenu}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}