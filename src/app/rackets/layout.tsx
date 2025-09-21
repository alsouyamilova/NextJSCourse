import { FC } from "react";

const AboutLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    // <div>
    //   <div>Rackets Layout</div>
    <div>{children}</div>
    // </div>
  );
};

export default AboutLayout;
