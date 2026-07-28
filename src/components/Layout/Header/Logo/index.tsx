import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/utils/assets';

const Logo: React.FC = () => {

  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={assetPath("/images/app-icon.png")}
        alt="Shield Our Elders logo"
        width={46}
        height={46}
        quality={100}
        className='rounded-md'
      />
      <span className="text-xl font-bold text-midnight_text dark:text-white leading-tight">
        Shield Our Elders
      </span>
    </Link>
  );
};

export default Logo;
