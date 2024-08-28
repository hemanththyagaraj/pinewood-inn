import { PropsWithChildren } from 'react';

const ModelOpen = (props: PropsWithChildren) => {
  const { children } = props;

  return <>{children}</>;
};

export default ModelOpen;
