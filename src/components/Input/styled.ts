import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .inputEmail {
    margin-bottom: 20px;
  }

  i {
  position: absolute;}
`
/* не все дописал*/


export const Label = styled.label`
  display: flex;
  color: #6e6b7d
`

interface I_InputItselfProps {
  type: 'text' | 'password' | 'date'
  isGhost: boolean
  icon?: React.ReactNode
  disabled?: boolean
}

export const InputItself = styled.input<I_InputItselfProps>`
  width: 100%;
  padding: ${({ icon }) => (icon ? '8px 32px 8px 8px' : '8px')};
  border: ${({ isGhost }) => (isGhost ? 'none' : '1px solid #ccc')};
`

interface I_TogglePasswordVisibilityProps {
  passwordVisibility: boolean
}

export const TogglePasswordVisibility = styled.div<I_TogglePasswordVisibilityProps>`
  position: absolute;
`
