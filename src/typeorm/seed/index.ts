import { initDbForSeeding } from './mysql';

export const seed = async () => {
  const instance = await initDbForSeeding();
};

(async () => {
  await seed();
  console.log('Good');
  process.exit(0);
})();
