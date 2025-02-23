import {getBotStats, getPomeloStats} from '@/common/database';
import Landing from '@/components/landing';

export const revalidate = 60;

export default async function Home() {
  const botStats = await getBotStats();
  const pomeloStats = await getPomeloStats();
  return <Landing botStats={botStats} pomeloStats={pomeloStats} />;
}
