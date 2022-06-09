export default function Home() {
    return (
        <div className="home-main">
            <div className="hero">
                <img src="%PUBLIC_URL%/images/hero1.webp" />
            </div>
            <div className="home-icon-section">
                <div className="feature-icon">
                    <img src="%PUBLIC_URL%/images/icon1.png"></img> <span>Every season, <strong>new</strong> products</span>
                </div>
                <div className="feature-icon">
                    <img src="%PUBLIC_URL%/images/icon2.png"></img> <span>Reliable, fast, <strong>free</strong> delivery</span>
                </div>
                <div className="feature-icon">
                    <img src="%PUBLIC_URL%/images/icon3.png"></img> <span>Eco-friendly, <strong>sustainable</strong> design</span>
                </div>
            </div>
            <hr></hr>
            <div className="home-section">
                <h2>Inspiration.</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div className="home-pictures">
                    <figure>
                        <img src="%PUBLIC_URL%/images/home-pic1.jpg" />
                        <figcaption>Dine.</figcaption>
                    </figure>
                    <figure>
                        <img src="%PUBLIC_URL%/images/home-pic2.jpg" />
                        <figcaption>Live.</figcaption>
                    </figure>
                    <figure>
                        <img src="%PUBLIC_URL%/images/home-pic3.jpg" />
                        <figcaption>Work.</figcaption>
                    </figure>
                </div>
            </div>
            <hr></hr>
            <div className="home-quote">
                    <h2>Crafted with excellence.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <figure>
                        <img src="%PUBLIC_URL%/images/workshop.webp" />
                        <figcaption>"Sed risus pretium quam vulputate dignissim suspendisse in est. Faucibus nisl tincidunt eget nullam non." </figcaption>
                    </figure>
            </div>
        </div>
    );
}