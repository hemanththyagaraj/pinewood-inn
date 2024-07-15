import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton';

const Skeleton = (props: SkeletonProps) => {
  const {
    width = '100%',
    baseColor = 'var(--primary-green)',
    highlightColor = '#9cbd91',
    ...rest
  } = props;
  return (
    <ReactSkeleton
      containerTestId="react-skeleton"
      width={width}
      baseColor={baseColor}
      highlightColor={highlightColor}
      {...rest}
    />
  );
};

export default Skeleton;
