import React, { FunctionComponent } from 'react';
import 'Styles/BasePage.css';
import { SideNav, SideNavLink } from './common/SideNav';
import { Switch, Route } from 'react-router-dom';
import { ActivityGraph } from './activityGraph/ActivityGraph';

export const BasePage: FunctionComponent = () => {
  const sideNavLinks: SideNavLink[] = [
    { url: '/activityGraph', iconUri: '', name: 'Activity Graph' },
    { url: '/analytics', iconUri: '', name: 'File Edit' }
  ];

  return (
    <>
      <SideNav links={sideNavLinks}></SideNav>
      <div className="main-content">
        <Switch>
          <Route path="/activityGraph">
            <ActivityGraph></ActivityGraph>
          </Route>
          <Route path="/analytics">
            <h1>File Edit</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
};
