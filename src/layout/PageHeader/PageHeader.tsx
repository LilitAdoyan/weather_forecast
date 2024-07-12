export const PageHeader = () => {
    return (
        <header className="header-wrapper">
            <div className="search-wrapper">
                <input type="text" placeholder="Enter city" />
                <button>Search</button>
            </div>
            <div className="radio-btn-wrapper">
                <input type="radio" id="C" name="fav_language" value="C" />
                <input type="radio" id="F" name="fav_language" value="F" />
            </div>
        </header>
    )
}