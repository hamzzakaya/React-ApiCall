function SearchHeader({search}) {

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        search('hamza')
    }



    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit} >
                <label>Ne Arıyorsunuz ?</label>
                <input />
            </form>
        </div>);
}

export default SearchHeader;