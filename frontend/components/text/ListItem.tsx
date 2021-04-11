import styled from 'styled-components';
import { P } from 'components/text/Paragraph';

const ListItem = styled(P)`
  font-family: ${p => p.theme.fonts.regular};
  width: 50%;

  &:before {
  content: " ";
  background-image: url(icons/ic-checkmark.svg);
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 15px;
  height: 15px;
  width: 15px;
  display: inline-block;
}
`;

export {
  ListItem
}