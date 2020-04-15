import * as React from "react";

interface IBannerProps {
  h1Props?: React.HTMLAttributes<HTMLElement>;
  headerProps?: React.HTMLAttributes<HTMLElement>;
}
export const Banner: React.FunctionComponent<IBannerProps> = ({
  children,
  h1Props,
  headerProps
}) => (
  <header className="banner__header" {...headerProps}>
    <h1 className="banner__h1" {...h1Props}>
      {h1Props?.title || children}
    </h1>
  </header>
);
