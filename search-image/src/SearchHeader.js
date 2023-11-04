function SearchHeader({search}) {

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        search('can')
    }



    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit} >
                <label>Ne Ariyorsunuz ?</label>
                <input />
            </form>
        </div>);
}

export default SearchHeader;