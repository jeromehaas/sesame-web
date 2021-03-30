import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ListItem } from 'components/text/ListItem';
import { P } from 'components/text/Paragraph';

const StyledListItemTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${P} {
    font-family: ${p => p.theme.fonts.regular};
    margin-left: 10px
  }
`;

interface Props {
  data: any[];
}

const ListItemTable: React.FunctionComponent<Props> = ({ data }) => {

  return (
    <StyledListItemTable>
      <table>
        {data.map((item, index) => (
          <Fragment key={index}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/icons/ic-checkmark.svg" alt="Checkmark" /></td>
                <td><P>{item.text}</P></td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
    </StyledListItemTable>
  );

}

export {
  ListItemTable
}