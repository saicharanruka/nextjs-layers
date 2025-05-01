import logoImage from '@/public/logo.svg';
import Image from 'next/image';

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <section className='py-16'>
      <div className='fcontainer'>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-6'>
          <div>
            <Image src={logoImage} alt='layers logo' />
          </div>
          <div>
            <footer className='flex gap-6'>
              {footerLinks.map((link) => (
                <a
                  className='text-white/50 text-sm'
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
