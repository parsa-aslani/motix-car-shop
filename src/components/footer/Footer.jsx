import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave footer-wave-one"></div>
      <div className="footer-wave footer-wave-two"></div>
      <div className="footer-wave footer-wave-three"></div>
      <div className="container footer-contents">
        <div className="footer-links">
          <div>
            <h3 className="footer-about-us-title glow-text">who are we ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              animi, sequi recusandae reiciendis eum exercitationem velit
              officia quae magnam labore.xercitationem velit officia quae magnam
              labore.
            </p>
          </div>
          <div className="footer-lists">
            <FooterList
              listTitle={"Collections"}
              listItems={
                <>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Shoes</li>
                </>
              }
            />
            <FooterList
              listTitle={"About us"}
              listItems={
                <>
                  <li>Corporate</li>
                  <li>Sustainability</li>
                  <li>Media Centre</li>
                  <li>News</li>
                  <li>Magazine</li>
                  <li>Join us</li>
                </>
              }
            />
            <FooterList
              listTitle={"Experiences"}
              listItems={
                <>
                  <li>Corse Clienti</li>
                  <li>Ristorante Cavallino</li>
                  <li>Land Barcelona</li>
                  <li>World Abu Dhabi</li>
                </>
              }
            />
          </div>
        </div>
        <div className="footer-texts">
          <p>
            All rights to this site belong to the{" "}
            <span className="footer-site-name">MOTIX</span>.
          </p>
          <p>built pixel by pixel by BUGMUG</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
