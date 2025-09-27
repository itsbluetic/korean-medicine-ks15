import { redirect } from 'next/navigation';

export default function HomePage() {
  // KS-15 전용 프로젝트이므로 바로 medical-test로 리다이렉트
  redirect('/medical-test');
}