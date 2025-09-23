import { FC } from "react";

const AboutLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return <div>{children}</div>;
};

export default AboutLayout;
