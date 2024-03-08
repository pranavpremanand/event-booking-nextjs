import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-3 p-5 text-center sm:flex-grow">
        <Link href="/" className="flex items-center">
          <Image src="/assets/images/logo.svg" alt="Event Ease Logo" width={100} height={30} />
        </Link>
        <small>2024 EventEase. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
