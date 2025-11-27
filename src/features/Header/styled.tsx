import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { paths } from 'routes/helper'
import { Z_INDEX_LEVEL_2, HEADER_HEIGHT } from 'consts'
import colors from 'consts/colors'
import search from './img/search.svg'
import orders from './img/orders.svg'
import favorites from './img/favorites.svg'
import notifications from './img/notifications.svg'
import cart from './img/cart.svg'

export interface I_CountProps {
  count?: number
}

export const Wrapper = styled.div`
  border-radius: 6px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: margin 0.2s ease-out;
  background-color: #ffffffff;
  min-height: 52px;
  z-index: ${Z_INDEX_LEVEL_2};
`
export const LeftSide = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 10px;

  > button {
    height: 44px;
  }
`
export const Logo = styled.img`
  width: 50px;
  height: 44px;
  margin-right: 10px;
`
export const Burger = styled.div`
  width: 20px;
  height: 20px;
  padding: 4px 0;
  margin-right: 20px;

  div {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    margin: 0 10px;
    background-color: #fff;
  }

  div:not(:first-child) {
    margin-top: 3px;
  }
`
export const SearchWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 2px solid ${colors.primary};
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  margin: 0 10px 0 5px;
`
export const BtnSearch = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${search});
`
export const RightSide = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`
/* a:not([href*='login']){
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;}*/

export const BtnOrders = styled((props: any) => (
  <div {...props}>
    <Link to={paths.favorites} />
  </div>
))`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${orders});
  position: relative;
  margin-right: 20px;

  &:after {
    content: ${({ count }) => (count ? `' ${count} '` : '')};
    background-color: ${colors.danger};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -6px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`
export const Btnfavorites = styled((props: any) => (
  <div {...props}>
    <Link to={paths.favorites} />
  </div>
))`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${favorites});
  margin-right: 20px;
  position: relative;

  &:after {
    content: ${({ count }) => (count ? `' ${count} '` : '')};
    background-color: ${colors.danger};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -6px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`

export const BtnNotifications = styled.div<I_CountProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${notifications});
  position: relative;
  margin-right: 20px;

  &:after {
    content: ${({ count }) => (count ? `' ${count} '` : '')};
    background-color: ${colors.danger};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -6px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`

export const BtnCart = styled.div<I_CountProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${cart});
  position: relative;
  margin-right: 20px;

  &:after {
    content: ${({ count }) => (count ? `' ${count} '` : '')};
    background-color: ${colors.danger};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -6px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`

export const UserAvatarWrapper = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 46px;
  height: 46px;
  `
  
  
export const UserProfileDropDown = styled.div`
  div {
    cursor: pointer;
    line-height: 1.8;
  }
`
