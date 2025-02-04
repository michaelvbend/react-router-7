import './Home.css';

function Home() {
    return (
        <div className="container">
            <h1 className="header">Welcome to my React app!</h1>
            <h3 className="subHeader">Sections</h3>
            <ul className="sectionList">
                <li className="sectionItem"><a className="sectionLink">Product</a></li>
                <li className="sectionItem"><a className="sectionLink">About</a></li>
                <li className="sectionItem"><a className="sectionLink">Contact</a></li>
            </ul>
        </div>
    );
}

export default Home;