'use client'

import GithubIcon from '@/components/github-icon'
import { Resume } from '@/models/resume'
import { InboxIcon, MapPinIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import LinkedinIcon from './linkedin-icon'
import WhatsAppIcon from './whatsapp-icon'

interface TagLineProps {
  resumeData: Resume
}

export default function TagLine({ resumeData }: TagLineProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-2/6 text-center mx-3">
        <Image
          className="inline-block w-full md:w-2/3 rounded-full ring-2 ring-white"
          src="/profile.jpg"
          alt="Rounded profile picture of the candidate"
          width={'300'}
          height={'300'}
          priority={true}
        />
      </div>
      <div className="flex flex-col text-wrap w-4/6 mx-3 mt-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 uppercase">
          {resumeData.basics.name}
        </h1>
        <h2 className="text-[#2451ff] font-medium">
          {resumeData.basics.label}
        </h2>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="mt-1 sm:divide-x-2 sm:*:px-4 sm:first:*:pl-0 sm:last:*:pr-0 sm:flex sm:flex-row">
            <div className="sm:w-1/2 mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                aria-hidden="true"
              />
              {resumeData.basics.location.address},{' '}
              {resumeData.basics.location.countryCode}
            </div>
            <Link
              className="sm:w-1/2 mt-2 flex items-center text-sm text-gray-500"
              href={`mailto:${resumeData.basics.email}`}
              target="_blank"
            >
              <InboxIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                aria-hidden="true"
              />
              {resumeData.basics.email}
            </Link>
          </div>
          <div className="mt-1 sm:divide-x-2 sm:*:px-4 sm:first:*:pl-0 sm:last:*:pr-0 sm:flex sm:flex-row">
            <Link
              className="sm:w-1/2 mt-2 flex items-center text-sm text-gray-500"
              href={`https://wa.me/${resumeData.basics.phone}`}
              target="_blank"
            >
              <WhatsAppIcon
                className="mr-1.5 h-5 w-5 fill-[#128c7e]"
                aria-hidden="true"
              />
              {resumeData.basics.phone}
            </Link>
            <Link
              className="sm:w-1/2 mt-2 flex items-center text-sm text-gray-500"
              href={resumeData.basics.url}
              target="_blank"
            >
              <GithubIcon className="mr-1.5 h-5 w-5 fill-[#333]" />
              {resumeData.basics.url}
            </Link>
          </div>
          <div className="mt-1 sm:divide-x-2 sm:*:px-4 sm:first:*:pl-0 sm:last:*:pr-0 sm:flex sm:flex-row">
            <Link
              className="mt-2 flex items-center text-sm text-gray-500"
              href={resumeData.basics.profiles[0].url}
              target="_blank"
            >
              <LinkedinIcon className="mr-1.5 h-5 w-5 fill-[#0077b5]"></LinkedinIcon>
              {resumeData.basics.profiles[0].url}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
