function App() {
    const params = new URLSearchParams(window.location.search);
    const Id = params.get('id');
    return (
        <>
            <Header /> 
            <SubHeader />
            <BlogList /> 
            <Footer/>
            {Id && <BlogDetails id={Id} />}
        </>
    );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />) 

// ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)