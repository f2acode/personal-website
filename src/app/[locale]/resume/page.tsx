'use client'

import H2Resume from '@/components/h2-resume'
import H3Resume from '@/components/h3-resume'
import TagLine from '@/components/tagline'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Category } from '@/models/categorized-skills'
import { Resume } from '@/models/resume'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ResumePage() {
  function convertDates(startDateString: string, endDateString: string) {
    const startDate = new Date(startDateString)
    const endDate = endDateString ? new Date(endDateString) : null

    return {
      startDate,
      endDate,
    }
  }

  const locale = useLocale()

  const [resumeData, setResumeData] = useState<Resume | null>(null)
  const [skillsData, setSkillsData] = useState<[Category] | null>(null)

  useEffect(() => {
    import(`@/messages/${locale}/categorized-skills.json`).then((res) =>
      setSkillsData(res.default.categories),
    )

    import(`@/messages/${locale}/resume.json`).then((res) =>
      setResumeData({
        ...res.default,
        work: res.default.work
          // @ts-expect-error: implicitly has an 'any' type
          .map((workItem) => {
            return {
              ...workItem,
              ...convertDates(workItem.startDate, workItem.endDate),
            }
          })
          .slice(0, res.default.work.length - 2),
        education: res.default.education
          // @ts-expect-error: implicitly has an 'any' type
          .map((educationItem) => {
            return {
              ...educationItem,
              ...convertDates(educationItem.startDate, educationItem.endDate),
            }
          })
          .slice(0, res.default.education.length - 1),
        // @ts-expect-error: implicitly has an 'any' type
        projects: res.default.projects.map((workItem) => {
          return {
            ...workItem,
            ...convertDates(workItem.startDate, workItem.endDate),
          }
        }),
        // @ts-expect-error: implicitly has an 'any' type
        volunteer: res.default.volunteer.map((volunteerItem) => {
          return {
            ...volunteerItem,
            ...convertDates(volunteerItem.startDate, volunteerItem.endDate),
          }
        }),
      }),
    )
  }, [locale])

  const router = useRouter()
  const path = usePathname()

  function handleLanguageChange(language: string) {
    router.push(`/${language}/${path.split('/')[2]}`)
  }

  const t = useTranslations('ResumePage')

  return (
    resumeData &&
    skillsData && (
      <div className="flex place-content-center pt-20 resume-page">
        <div className="flex items-center justify-center px-2 flex-col whitespace-break-spaces w-[1000px] border-2 print:w-full print:border-0 print:px-0">
          <div className="flex space-x-3 items-center mb-2 mt-2 language-selector">
            <Select defaultValue={locale} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select the language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">{t('English')}</SelectItem>
                  <SelectItem value="pt-BR">{t('Portuguese')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button onClick={() => window.print()}>{t('Save')}</Button>
          </div>
          <TagLine resumeData={resumeData}></TagLine>
          <div className="flex text-left" style={{ wordBreak: 'break-word' }}>
            <div className="w-2/6 m-3 print:w-1/4">
              <H2Resume>{t('Education')}</H2Resume>
              <div className="divide-y *:py-3 print:*:py-1.5 first:*:pt-0 last:*:pb-0 mb-8 print:mb-4">
                {resumeData.education.map((educationItem, index) => (
                  <ProfileItem
                    key={index}
                    title={educationItem.studyType}
                    institution={educationItem.institution}
                    startDate={educationItem.startDate}
                    endDate={educationItem.endDate}
                  />
                ))}
              </div>
              <H2Resume>{t('Skills')}</H2Resume>
              <div className="flex place-content-between flex-wrap divide-y *:py-3 print:*:py-1.5 first:*:pt-0 last:*:pb-0 mb-8 print:mb-4">
                {skillsData.map((category, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <H3Resume>{category.category}</H3Resume>
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-gray-50 px-2 mr-2 mb-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="print:break-inside-avoid">
                <H2Resume>{t('Languages')}</H2Resume>
                <div className="space-y *:py-3 print:*:py-1.5 first:*:pt-0 last:*:pb-0">
                  {resumeData.languages
                    .map((language, index) => (
                      <div key={index} className="flex flex-row">
                        <div className="divide-x *:px-3 first:*:pl-0 last:*:pr-0">
                          <p className="text-[#2451ff]">
                            {t(`Language Section.${language.language}`)}
                          </p>
                          <p>{t(`Language Section.${language.fluency}`)}</p>
                        </div>
                      </div>
                    ))
                    .slice(1, resumeData.languages.length)
                    .reverse()}
                </div>
              </div>
            </div>
            <div className="w-4/6 m-3 print:w-3/4">
              <H2Resume>{t('Summary')}</H2Resume>
              <p className="mb-8 print:mb-4">{resumeData.basics.summary}</p>
              <H2Resume>{t('Experience')}</H2Resume>
              <div className="divide-y *:py-3 print:*:py-1.5 first:*:pt-0 last:*:pb-0 mb-8 print:mb-4">
                {resumeData.work.map((workItem, index) => (
                  <ProfileItem
                    key={index}
                    title={workItem.position}
                    institution={workItem.name}
                    startDate={workItem.startDate}
                    endDate={workItem.endDate}
                    description={workItem.summary}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

interface ProfileItemProps {
  title: string
  institution: string | React.ReactNode
  startDate: Date
  endDate: Date | null
  description?: string | null
}

function ProfileItem({
  title,
  institution,
  startDate,
  endDate,
  description,
}: ProfileItemProps) {
  const t = useTranslations('ResumePage')

  return (
    <div className="print:break-inside-avoid">
      <H3Resume>{title}</H3Resume>
      <div className="text-[#2451ff] font-medium">{institution}</div>
      <div className="flex items-center">
        <CalendarIcon
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        ></CalendarIcon>
        <p className="text-sm text-gray-500">
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
          }).format(startDate) +
            ' - ' +
            (endDate
              ? new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                }).format(endDate)
              : t('Present'))}
        </p>
      </div>
      {description && <p>{description.replace(/- /g, '• ')}</p>}
    </div>
  )
}
