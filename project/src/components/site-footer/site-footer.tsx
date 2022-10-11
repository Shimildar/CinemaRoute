function SiteFooter (): JSX.Element {
  const currentDate = new Date;

  return (
    <footer className="page-footer container">
      <div className="page-footer__wrapper footer-top">
        <a></a>
        <ul></ul>
        <p></p>
      </div>
      <div className="page-footer__wrapper footer-bottom">
        <p className="page-footer__copyright copyright">
          {`© Все права защищены, ${currentDate.getFullYear()}`}
        </p>
        <ul className="page-footer__social social">
          <li className="social__list-element">
            <a className="social__link social__link--facebook" href="/" title="Присоединяйтесь к нам в Facebook!" target="_blanc">Facebook</a>
          </li>
          <li className="social__list-element">
            <a className="social__link social__link--instagram" href="/" title="Ждём вас в нашем Instagram!" target="_blanc">Instagram</a>
          </li>
          <li className="social__list-element">
            <a className="social__link social__link--vk" href="/" title="Давайте дружить в VK!" target="_blanc">VK</a>
          </li>
        </ul>
        <a className="page-footer__rules rules" href="/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default SiteFooter;
