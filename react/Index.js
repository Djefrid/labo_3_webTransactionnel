function App() {
    const idFromUrl = new URLSearchParams(window.location.search).get('id');

    return (
        <>
            <Header /> 
            <CustomContext.Provider value={idFromUrl}>
                <Blog/>
            </CustomContext.Provider>  
            <Footer/>
        </>
    );
}

/* const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)  */

ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)