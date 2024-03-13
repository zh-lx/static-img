import { resolveAvatars, type Sponsorship, type Sponsor } from 'sponsorkit'

const specialSponsors: (Sponsor & { dollar: number })[] = [
  {
    type: 'User',
    login: 'akira-cn',
    name: 'Yvo(月影)',
    avatarUrl: 'https://avatars.githubusercontent.com/u/316498?v=4',
    linkUrl: 'https://github.com/akira-cn',
    websiteUrl: 'https://github.com/akira-cn',
    dollar: 66
  },
  {
    type: 'User',
    login: 'w2xi',
    name: 'w2xi',
    avatarUrl: 'https://avatars.githubusercontent.com/u/57785259?v=4',
    linkUrl: 'https://github.com/w2xi',
    websiteUrl: 'https://github.com/w2xi',
    dollar: 5
  },
  {
    type: 'User',
    login: 'rxx-qingyi',
    name: 'rxx-qingyi',
    avatarUrl: 'https://avatars.githubusercontent.com/u/83260644?v=4',
    linkUrl: 'https://github.com/rxx-qingyi',
    websiteUrl: 'https://github.com/rxx-qingyi',
    dollar: 5
  },
]

export async function genSpecialSponsorShips() {
  const sponsorShips: Sponsorship[] = specialSponsors.map((sponsor) => ({
    tierName: 'github',
    monthlyDollars: sponsor.dollar,
    sponsor,
  }))

  await resolveAvatars(sponsorShips, '')

  return sponsorShips
}