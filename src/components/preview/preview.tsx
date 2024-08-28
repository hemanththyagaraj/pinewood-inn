import { HiArrowUpTray } from 'react-icons/hi2';
import styled from 'styled-components';

type PreviewProps = {
  src: string;
  remove?: boolean;
  onRemove?: () => void;
};

const StyledImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
`;

const Preview = (props: PreviewProps) => {
  const { remove, src } = props;

  return (
    <>
      <StyledImage src={src} alt="Image Preview" />
      {remove && <HiArrowUpTray />}
    </>
  );
};

export default Preview;
