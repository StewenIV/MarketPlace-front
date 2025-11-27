import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { paths } from 'routes/helper'
import Button from 'components/Button/Button'
import Input from 'components/Input'
import { selectIsLogged } from 'features/App/selectors'
import { selectFavorites } from 'features/Favorites/selector'
import UserDropDownMenu from './UserDropDownMenu'
import logoPng from './img/logo.png'

import {
  Wrapper,
  LeftSide,
  Logo,
  Burger,
  SearchWrapper,
  BtnSearch,
  RightSide,
  BtnOrders,
  Btnfavorites,
  BtnNotifications,
  BtnCart
} from './styled'

const Header: React.FC = () => {
  const isLogged = useSelector(selectIsLogged)
  const favorites = useSelector(selectFavorites)

  const [searchInput, setSearchInput] = useState<string>('')

  const changeSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value)
    },
    []
  )

  return (
    <Wrapper>
      <LeftSide>
        <Link to={paths.home}>
          <Logo src={logoPng} alt="logo" />
        </Link>

        <Button>
          <Burger>
            <div />
            <div />
            <div />
          </Burger>

          <span>Каталог</span>
        </Button>
      </LeftSide>

      <SearchWrapper>
        {
          <Input
            value={searchInput}
            onChange={changeSearchInput}
            isGhost
            placeholder="Поиск товаров..."
          />
        }
        <BtnSearch />
      </SearchWrapper>

      <RightSide>
        {isLogged ? (
          <>
            <BtnOrders count={8} />
            <Link to={paths.favorites}>
              <Btnfavorites count={favorites.length} />
            </Link>
            <BtnNotifications count={5} />
            <BtnCart count={2} />
            {<UserDropDownMenu />}
          </>
        ) : (
          <Link to={paths.login}>Войти</Link>
        )}
      </RightSide>
    </Wrapper>
  )
}

export default Header
