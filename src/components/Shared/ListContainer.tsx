import styled from '@emotion/styled'

interface Ulinterface {
  align: 'start' | 'center' | 'end'
  justify: 'start' | 'center' | 'end'
}

export const ListContainer = styled.ul<Ulinterface>`
  list-style-type: none;
  padding: ${(props) => props.theme.spacing.sm};
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  gap: ${(props) => props.theme.spacing.sm};
`
