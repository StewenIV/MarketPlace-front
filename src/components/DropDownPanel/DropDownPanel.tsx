
import { useCallback, useRef, useState } from 'react'
import { DropDownWrapper, Wrapper } from './styled'
import { useOnClickOutside} from 'helpers/hooks/useOnClickOutside'


interface I_DropDownPanel{
  toggler: (props: any ) => React.ReactElement
  children: React.ReactElement
  toLeft?: boolean
}

const DropDownPanel: React.FC<I_DropDownPanel> = ({
  toggler,
  children,
  toLeft = false,
}: I_DropDownPanel) => {
const dropDownWrapperRef = useRef(null);
const [isVisible, setIsVisible] = useState<boolean>(false);

const toggleVisibility = useCallback(() => {
  setIsVisible((isVisible) => !isVisible)
}, []);

useOnClickOutside(dropDownWrapperRef, toggleVisibility);

const Toggler = toggler;

  return (
    <Wrapper>
      <Toggler onClick={toggleVisibility} />
      {isVisible && (
        <DropDownWrapper ref = {dropDownWrapperRef}
        toLeft = {toLeft}>
          {children}
        </DropDownWrapper>
      )}
    </Wrapper>
  )
}

export default DropDownPanel