import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center max-w-[1200px] mx-auto py-8">
      <Link href="/">
        <img
          className="max-h-[50px]"
          src="/images/chiqane-logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Header;
