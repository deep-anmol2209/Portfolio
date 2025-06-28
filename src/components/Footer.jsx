/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Certification",
    href: "#footer",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/deep-anmol2209",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmol-deep-singh-2621982b8/",
  },
  
  
];

function Footer() {
  return (
    <footer className='section bg-[url(/images/Moon.webp)] bg-cover bg-center' id="footer">
      <div className='container  bg-black/20 backdrop-brightness-70 pt-5'>
        <div className=''>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='mb-10'>
              <h2 className='headline-1 mb-8 lg:max-w-[12ch]'>Let's work together today!</h2>

              <ButtonPrimary
                href='mailto:coder.anmol22@gmail.com'
                label='Start project'
                icon='chevron_right'
                classes='w-max'
                imgSrc='/images/navigate_next.svg'
              />
            </div>

            <div className='grid grid-cols-2 gap-4 lg:pl-20'>
              <div>
                <p className='mb-2'>Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className='mb-2'>Socials</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target='_blank'
                        className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center pt-10 pb-2'>
            <a
              href=''
              className='text-sm'
            >
              Designed By &nbsp;
            </a>

            <p className='text-zinc-300 text-sm'>
              &copy; 2025 <span className='text-zinc-200'>Anmol Deep Singh</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
