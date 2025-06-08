// app/components/LanguageSwitcher.js
'use client'; // Needed for router usage

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current locale and the target locale
  const isFrench = pathname.startsWith('/fr');
  const targetLocale = isFrench ? 'en' : 'fr';

  // Build new URL
  const newPathname = pathname.replace(/^\/(fr|en)/, `/${targetLocale}`);

  const handleSwitch = () => {
    router.push(newPathname);
  };

  return (
    <button onClick={handleSwitch}>
      {isFrench ? 'English' : 'Français'}
    </button>
  );
}
