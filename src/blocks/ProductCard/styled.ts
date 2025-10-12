import colors from 'consts/colors'
import styled from 'styled-components'

export const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 165px;
  border-radius: 4px;
  object-fit: scale-down;
`

export const PriceWrapper = styled.div`
  display: flex;
  alighn-items: flex-end;
  margin-bottom: 10px;
`

export const PriceRegular = styled.div`
font-size: 18px;
font-weight: 700;
margin-right: 10px;  
color: ${colors.primary};
`

export const PriceRegularWhenDisconted = styled.div`
  text-decoration: line-through;
  color: #999999ff;
  font-size: 15px;
`

export const PriceDisconted = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primary};
`

export const LikeWrapper = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    pointer-events: none;
  }
`

export const Title = styled.h3`
  margin-bottom: 5px;
`

export const Desc = styled.div`
  margin-bottom: 10px;
`
export const Wrapper = styled.div`
  position: relative;
`
