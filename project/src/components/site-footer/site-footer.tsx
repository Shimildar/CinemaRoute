import './site-footer.css';

function SiteFooter (): JSX.Element {
  const currentDate = new Date;

  return (
    <footer className="page-footer container">
      <div className="page-footer__wrapper footer-top">
        <img className="page-footer__logo" src="img/footer-logo.svg" alt="CinemaTour logo" width="287" height="177"/>
        <div className="page-footer__column page-footer__column--map">
          <span className="page-footer__title">Site map</span>
          <ul className="page-footer__site-map list-reset">
            <li className="page-footer__map-item">
              <a href="/">Collections</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Genres</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Movies</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Series</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Cartoons</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Anime</a>
            </li>
            <li className="page-footer__map-item">
              <a href="/">Actors</a>
            </li>
          </ul>
        </div>
        <div className="page-footer__column page-footer__column--about">
          <span className="page-footer__title">About us</span>
          <p className="page-footer__about">
            We know everything about cinema and want to share it with eveerybody!
            Share movies, trailers, persons and news of social networks, rate movies and discuss them with your friends and followers!
            {'\n'}
            {'\n'}
            Interesting films, nearby cinemas and favorite actors can be added to Favorites.
            Our system will show you all related news and trailers, tell you when you can buy a movie ticket for the premiere you are interested in.
            Join now!
          </p>
        </div>
      </div>
      <div className="page-footer__wrapper footer-bottom">
        <p className="page-footer__copyright copyright">
          {`© All rights reserved, ${currentDate.getFullYear()}`}
        </p>
        <ul className="page-footer__social social list-reset">
          <li className="social__list-item">
            <a className="social__link social__link--facebook" href="/" title="Join us at Facebook!" target="_blanc">
              <img className="social__link-icon" src="img/facebook-icon.svg" alt="Facebook icon" width="31" height="31"/>
            </a>
          </li>
          <li className="social__list-item">
            <a className="social__link social__link--instagram" href="/" title="Waiting for you in Instagram!" target="_blanc">
              <img className="social__link-icon" src="img/instagram-icon.svg" alt="Instagram icon" width="31" height="31"/>
            </a>
          </li>
          <li className="social__list-item">
            <a className="social__link social__link--vk" href="/" title="Let's have a look in VK!" target="_blanc">
              <img className="social__link-icon" src="img/vk-icon.svg" alt="VK icon" width="31" height="31"/>
            </a>
          </li>
        </ul>
        <a className="page-footer__rules rules" href="/">Privacy policy</a>
      </div>
    </footer>
  );
}

export default SiteFooter;
