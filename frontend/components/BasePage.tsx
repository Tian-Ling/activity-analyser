import * as React from 'react';
import { SideNav, SideNavLink } from './common/SideNav';

export const BasePage: React.FunctionComponent = () => {
  const sideNavLinks: SideNavLink[] = [
    { url: '', iconUri: '', name: 'Home' },
    { url: '', iconUri: '', name: 'Analytics' }
  ];

  return (
    <div>
      <SideNav links={sideNavLinks}></SideNav>
    </div>
  );
};
