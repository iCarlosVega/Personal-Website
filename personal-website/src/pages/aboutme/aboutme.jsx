import './aboutme.css';

function AboutMe(){
    return(
        <div className="about-me-outer fade-in">
            <div className="about-me-container">
                <div className="about-me-row">
                    <img
                        src="../../logo_got.png"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="about-me-content">
                        <p className="about-me-description">
                            I'm Carlos Vega, a recent graduate with a double major in Mathematics and Computer Science. You could say I'm a jack-of-all-trades in the tech world, I've dabbled into everything from data analytics and data science to machine learning and software development. I've poured my energy into a solid range of projects, and now I'm ready to find that breakthrough opportunity because bills need to be paid.
                        </p>
                    </div>
                </div>
                <div className="about-me-facts-section">
                    <p className="about-me-facts-title">Some quick facts</p>
                    <ul className="about-me-facts-list">
                        <li>Graduated from Queens College.</li>
                        <li>My main programing language is python.</li>
                        <li>Born in Mexico city and moved to NYC when I was younger and been here ever since.</li>
                        <li>I started taking squash and tennis a little more seriously.</li>
                        <li>I like playing competitive games from time to time, peaked in rivals Celestial 3 (check my <a href="https://tracker.gg/marvel-rivals/profile/ign/LookinFoSWEjob/overview?season=6&mode=competitive" target="_blank" rel="noopener noreferrer">tracker.gg</a>) but recently started playing runescape.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe; 