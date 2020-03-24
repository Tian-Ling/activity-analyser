import * as React from 'react';
import '../../styles/index.css';

export type SideNavLink = {
  name: string;
  url: string;
  iconUri: string;
};

type SideNavProps = {
  links: SideNavLink[];
};

export const SideNav: React.FunctionComponent<SideNavProps> = ({
  links
}: SideNavProps) => {
  return (
    <div className="side-nav">
      {links.map(link => (
        <p key={link.url}>{link.name}</p>
      ))}
    </div>
  );
};
