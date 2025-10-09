import { Helmet } from 'react-helmet'

const AccountSettingsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Настройки аккаунта</title>
        <meta name="description" content="Настройки аккаунта для продавцов" />
      </Helmet>
      <h1>Настройки аккаунта</h1>
    </>
  )
}

export default AccountSettingsPage
