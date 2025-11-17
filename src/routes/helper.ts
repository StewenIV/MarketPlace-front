export const pathPublic: { [k: string]: string } = {
  home: '/',
  login: '/login',
  productDetails: '/product/:idOrSlug',
  cart: '/cart'
}

export const pathPrivate: { [k: string]: string } = {
  accountSettings: '/account-settings',
  favorites: '/favorites'
}

export const paths: { [k: string]: string } = Object.assign(
  {},
  pathPublic,
  pathPrivate
)

export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
) => {
  let isMatch = false
  const allPaths = Object.keys(paths).map((key) => paths[key])
  const pathFirstSection = pathname.split('/')[1]

  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true
  })
  return isMatch
}
