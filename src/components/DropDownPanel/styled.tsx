import styled from 'styled-components'

import { Z_INDEX_LEVEL_1 } from 'consts'

export const Wrapper = styled.div`
  position: relative;
`
interface I_DropDownWrapperProps {
  toLeft: boolean
}

export const DropDownWrapper = styled.div<I_DropDownWrapperProps>`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;
  z-index: ${Z_INDEX_LEVEL_1};
  top: calc(100% + 10px);
  ${(props) => (props.toLeft ? 'right: 0;' : 'left: 0;')}
  
`
