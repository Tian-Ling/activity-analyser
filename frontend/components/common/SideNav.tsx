import React, { FunctionComponent, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import 'Styles/SideNav.css';

export type SideNavLink = {
  name: string;
  url: string;
  iconUri: string;
};

type SideNavProps = {
  links: SideNavLink[];
  className?: string;
};

export const SideNav: FunctionComponent<SideNavProps> = ({
  links,
  className
}: SideNavProps) => {
  const routerHistory = useHistory();
  const currentLocation = useLocation().pathname;
  const [selectedLink, setSelectedLink] = useState<SideNavLink>();

  const onLinkClick = (link: SideNavLink): void => {
    routerHistory.push(link.url);
    setSelectedLink(link);
  };

  useEffect(() => {
    const selectedLink = links.find(link => link.url === currentLocation);
    if (selectedLink) {
      setSelectedLink(selectedLink);
    }
  }, []);

  return (
    <div className={[className, 'side-nav'].join(' ')}>
      {links.map(link => (
        <div
          key={link.name}
          onClick={(): void => onLinkClick(link)}
          className={link === selectedLink ? 'side-nav-selected' : ''}
        >
          <a>{link.name}</a>
        </div>
      ))}
    </div>
  );
};
