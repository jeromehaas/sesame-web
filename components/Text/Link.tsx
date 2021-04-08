import Link from 'next/link';
import styled from 'styled-components';
import { P } from 'components/text/Paragraph';

interface Props {
  children: React.ReactNode;
  target: string;
}

const StyledAnchor = styled.a`
  color: red;
`;

const Anchor: React.FunctionComponent<Props> = ({ children, target }) => {


  return (
    <Link href={target}>
      <StyledAnchor>
        <P>
          {children}
        </P>
      </StyledAnchor>
    </Link>
  );

}

export {
  Anchor
};