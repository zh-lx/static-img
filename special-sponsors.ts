import { resolveAvatars, type Sponsorship, type Sponsor } from 'sponsorkit';

const specialSponsors: (Sponsor & { dollar: number })[] = [
  {
    type: 'User',
    login: 'akira-cn',
    name: 'Yvo(月影)',
    avatarUrl: 'https://avatars.githubusercontent.com/u/316498?v=4',
    linkUrl: 'https://github.com/akira-cn',
    websiteUrl: 'https://github.com/akira-cn',
    dollar: 66,
  },
  {
    type: 'User',
    login: 'w2xi',
    name: 'w2xi',
    avatarUrl: 'https://avatars.githubusercontent.com/u/57785259?v=4',
    linkUrl: 'https://github.com/w2xi',
    websiteUrl: 'https://github.com/w2xi',
    dollar: 40,
  },
  {
    type: 'User',
    login: 'rxx-qingyi',
    name: 'rxx-qingyi',
    avatarUrl: 'https://avatars.githubusercontent.com/u/83260644?v=4',
    linkUrl: 'https://github.com/rxx-qingyi',
    websiteUrl: 'https://github.com/rxx-qingyi',
    dollar: 6.6,
  },
  {
    type: 'User',
    login: 'yaonyan',
    name: 'yaonyan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/63141491?v=4',
    linkUrl: 'https://github.com/yaonyan',
    websiteUrl: 'https://github.com/yaonyan',
    dollar: 18,
  },
  {
    type: 'User',
    login: 'luckySunset',
    name: 'luckySunset',
    avatarUrl: 'https://avatars.githubusercontent.com/u/70300471?v=4',
    linkUrl: 'https://github.com/luckySunset',
    websiteUrl: 'https://github.com/luckySunset',
    dollar: 40,
  },
];

export async function genSpecialSponsorShips() {
  const sponsorShips: Sponsorship[] = specialSponsors.map((sponsor) => ({
    tierName: 'github',
    monthlyDollars: sponsor.dollar,
    sponsor,
  }));

  await resolveAvatars(sponsorShips, '');

  return sponsorShips;
}
