import styled from 'styled-components';
import { P } from 'components/text/Paragraph';

const ListItem = styled(P)`
  max-width: 200px;
  font-family: ${p => p.bold ? p.theme.fonts.regular : p.theme.fonts.thin};

  &:before {
  content: " ";
  background-image: url(icons/checkmark.svg);
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15px;
  height: 12.5px;
  width: 12.5px;
  display: inline-block;
}
`;

export {
  ListItem
}