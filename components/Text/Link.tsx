import Link from 'next/link';
import styled from 'styled-components';
import { P } from 'components/text/Paragraph';

interface Props {
  children: React.ReactNode;
  target: string;
}

const StyledAnchor = styled.a`
  line-height: 2;
  font-size: 16px;
  color: ${p => p.theme.colors.blue};
  cursor: pointer;
`;

const Anchor: React.FunctionComponent<Props> = ({ children, target }) => {

  return (
    <Link href={target}>
      <StyledAnchor>
        {children}
      </StyledAnchor>
    </Link>
  );

}

export {
  Anchor
};