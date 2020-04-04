import React, { FunctionComponent } from 'react';
import ActivityAnalytics from './ActivityAnalytics/ActivityAnalytics';
import ActivityEditor from './ActivityEditor/ActivityEditor';
import 'Styles/basepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideNav, SideNavLink } from './common/SideNav';
import { Switch, Route } from 'react-router-dom';
import * as pathConstants from 'Constants/pathConstants';

export const BasePage: FunctionComponent = () => {
  const sideNavLinks: SideNavLink[] = [
    { url: pathConstants.ANALYTICS_PATH, iconUri: '', name: 'Activity Graph' },
    { url: pathConstants.EDITOR_PATH, iconUri: '', name: 'File Edit' }
  ];

  return (
    <>
      <SideNav links={sideNavLinks}></SideNav>
      <div className="main-content">
        <Switch>
          <Route path={pathConstants.ANALYTICS_PATH}>
            <ActivityAnalytics></ActivityAnalytics>
          </Route>
          <Route path={pathConstants.EDITOR_PATH}>
            <ActivityEditor></ActivityEditor>
          </Route>
        </Switch>
      </div>
    </>
  );
};
