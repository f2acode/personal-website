import GithubIcon from '@/components/github-icon'
import LinkedinIcon from '@/components/linkedin-icon'
import { Button } from '@/components/ui/button'
import WhatsAppIcon from '@/components/whatsapp-icon'
import { ChevronDown, MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#2451ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="flex py-32">
          <div className="mx-auto lg:w-3/5 sm:w-full">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {t('Presentation')}
              </h1>
              <p className="mt-4 text-2xl leading-8 text-black border-b-2 border-[#2451ff]">
                {t('PresentationDescription')}
              </p>
              <br></br>
              <ul className="list-inside space-y-4">
                <li className="flex items-center">
                  <Image
                    className="mr-2.5"
                    src="/checkmark.svg"
                    alt="Checkmark icon"
                    width={'15'}
                    height={'15'}
                    priority={true}
                  />
                  <strong className="mr-1">
                    {t('Technical Proficiency')} -{' '}
                  </strong>
                  <span className="text-gray-600">
                    {t('Technical Proficiency Description')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Image
                    className="mr-2.5"
                    src="/checkmark.svg"
                    alt="Checkmark icon"
                    width={'15'}
                    height={'15'}
                    priority={true}
                  />
                  <strong className="mr-1">
                    {t('Problem-Solving Skills')} -{' '}
                  </strong>
                  <span className="text-gray-600">
                    {t('Problem-Solving Skills Description')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Image
                    className="mr-2.5"
                    src="/checkmark.svg"
                    alt="Checkmark icon"
                    width={'15'}
                    height={'15'}
                    priority={true}
                  />
                  <strong className="mr-1">
                    {t('Communication and Collaboration')} -
                  </strong>
                  <span className="text-gray-600">
                    {t('Communication and Collaboration Description')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Image
                    className="mr-2.5"
                    src="/checkmark.svg"
                    alt="Checkmark icon"
                    width={'15'}
                    height={'15'}
                    priority={true}
                  />
                  <strong className="mr-1">
                    {t('Continuous Learning and Adaptability')} -
                  </strong>
                  <span className="text-gray-600">
                    {t('Continuous Learning and Adaptability Description')}
                  </span>
                </li>
              </ul>
              <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap space-y-2">
                <Button asChild>
                  <Link href="/resume">
                    <ChevronDown className="mr-2"></ChevronDown>
                    {t('Download Resume')}
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/f2acode"
                    target="_blank"
                    className="!mt-0"
                  >
                    <GithubIcon className="h-6 w-6 fill-[#24292e]" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/felipe-augustox/"
                    target="_blank"
                    className="!mt-0"
                  >
                    <LinkedinIcon className="h-6 w-6 fill-[#0077b5]" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://wa.me/+5511948414445"
                    target="_blank"
                    className="!mt-0"
                  >
                    <WhatsAppIcon className="h-6 w-6 fill-[#25D366]" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="mailto:augustto.felipe@hotmail.com"
                    target="_blank"
                    className="!mt-0"
                  >
                    <MailIcon className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5 text-center">
            <Image
              className="inline-block w-full md:w-2/3 rounded-full ring-2 ring-white border-2 border-gray-300"
              src="/profile.jpg"
              alt="Rounded profile picture of the candidate"
              width={'300'}
              height={'300'}
              priority={true}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#2451ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
