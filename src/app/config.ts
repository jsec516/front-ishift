export const Config = {
    tokenCookieName: 'tkQclinic',
    reqDomain: process.env.ENV==='production'?'http://ishiftmedia.com':'http://ishift.dev',
    reqApiPoint: '/ishift/api/v0.1',
    reqSubdomain: process.env.ENV === 'production' ? 'http://backoffice.ishiftmedia.com' : 'http://backoffice.ishift.dev',
    defaultAvatar: '/assets/uploads/user/avatar.png'
}
