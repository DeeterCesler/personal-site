// Next static image imports resolve to an object ({ src, height, width }),
// not a URL string like Vite did. These icons are only ever used as <img src>,
// so export the .src URL to keep consumers passing a plain string.
import emailImg from './email.svg'
import instaImg from './instagram.svg'
import linkedinImg from './linkedin.svg'
import mediumImg from './medium.svg'
import xLogoImg from './x_logo.svg'
import githubImg from './github.svg'
import substackImg from './substack.svg'

const url = (img) => img?.src ?? img

export const email = url(emailImg)
export const insta = url(instaImg)
export const linkedin = url(linkedinImg)
export const medium = url(mediumImg)
export const x_logo = url(xLogoImg)
export const github = url(githubImg)
export const substack = url(substackImg)
