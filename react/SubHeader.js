function SubHeader(){
    return (
        <div className="container-fluid">
            <div className="row align-middle  zoneDeRecherche">
                <div className="col-12 col-lg-7">
                    <nav className="navbar navbar-light ">
                        <div className="container-fluid">
                            <form class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" id="search" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="col-6 col-lg-1 h6 text-end">
                    trier par :
                </div>
                <div className="col-6 col-lg-4 dropdown">
                    <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        select
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}