import SiteHeader from 'components/site-header/site-header';
import SiteFooter from 'components/site-footer/site-footer';
import React from 'react';

function Main (): JSX.Element {
  return (
    <React.Fragment>
      <SiteHeader />
      <SiteFooter />
    </React.Fragment>
  );
}

export default Main;
