import { defineConfig, presets } from 'sponsorkit';
import { genSpecialSponsorShips } from './special-sponsors';

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: presets.base,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 20,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ],

  async onSponsorsReady(allSponsorShips) {
    return [
      ...allSponsorShips.map((ship) => ({
        ...ship,
        monthlyDollars: Number(ship.raw.all_sum_amount),
      })),
      ...(await genSpecialSponsorShips()),
    ];
  },
});
