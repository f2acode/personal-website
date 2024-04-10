import enResume from '@/app/data/resume-en.json'
import H2Resume from '@/components/h2-resume'
import H3Resume from '@/components/h3-resume'
import TagLine from '@/components/tagline'
import { Resume } from '@/models/resume'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function ResumePage() {
  function convertDates(startDateString: string, endDateString: string) {
    const startDate = new Date(startDateString)
    const endDate = new Date(endDateString)
    return {
      startDate,
      endDate,
    }
  }

  const transformedResume: Resume = {
    ...enResume,
    work: enResume.work
      .map((workItem) => {
        return {
          ...workItem,
          ...convertDates(workItem.startDate, workItem.endDate),
        }
      })
      .slice(0, enResume.work.length - 2),
    education: enResume.education
      .map((educationItem) => {
        return {
          ...educationItem,
          ...convertDates(educationItem.startDate, educationItem.endDate),
        }
      })
      .slice(0, enResume.education.length - 1),
    projects: enResume.projects.map((workItem) => {
      return {
        ...workItem,
        ...convertDates(workItem.startDate, workItem.endDate),
      }
    }),
    volunteer: enResume.volunteer.map((volunteerItem) => {
      return {
        ...volunteerItem,
        ...convertDates(volunteerItem.startDate, volunteerItem.endDate),
      }
    }),
  }

  return (
    <div className="flex place-content-center">
      <div className="flex items-center justify-center mx-2 flex-col whitespace-break-spaces w-[1000px] border border-dotted">
        <TagLine resumeData={transformedResume}></TagLine>
        <div className="flex text-left">
          <div className="w-2/6 m-3">
            <H2Resume>Education</H2Resume>
            <div className="divide-y *:py-3 first:*:pt-0 last:*:pb-0 mb-8">
              {transformedResume.education.map((educationItem, index) => (
                <ProfileItem
                  key={index}
                  title={educationItem.studyType}
                  institution={educationItem.institution}
                  startDate={educationItem.startDate}
                  endDate={educationItem.endDate}
                />
              ))}
            </div>
            <H2Resume>Skills</H2Resume>
            <div className="flex place-content-between flex-wrap mb-8">
              {transformedResume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <H2Resume>Languages</H2Resume>
            <div className="space-y *:py-3 first:*:pt-0 last:*:pb-0">
              {transformedResume.languages
                .map((language, index) => (
                  <div key={index} className="flex flex-row">
                    <div className="flex divide-x *:px-3 first:*:pl-0 last:*:pr-0">
                      <p className="text-[#2451ff]">{language.language} </p>
                      <p className="">{language.fluency}</p>
                    </div>
                  </div>
                ))
                .slice(1, transformedResume.languages.length)
                .reverse()}
            </div>
          </div>
          <div className="w-4/6 m-3">
            <H2Resume>Summary</H2Resume>
            <p className="mb-8">{transformedResume.basics.summary}</p>
            <H2Resume>Experience</H2Resume>
            <div className="divide-y *:py-3 first:*:pt-0 last:*:pb-0 mb-8">
              {transformedResume.work.map((workItem, index) => (
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
            <H2Resume>Projects</H2Resume>
            <div className="divide-y *:py-3 first:*:pt-0 last:*:pb-0 mb-8">
              {transformedResume.projects.map((project, index) => (
                <ProfileItem
                  key={index}
                  title={project.name}
                  institution={
                    <Link target="_blank" href={project.url}>
                      Link to project
                    </Link>
                  }
                  startDate={project.startDate}
                  endDate={project.endDate}
                  description={project.summary}
                />
              ))}
            </div>
            <H2Resume>Awards</H2Resume>
            <div className="divide-y *:py-3 first:*:pt-0 last:*:pb-0">
              {transformedResume.awards.map((award, index) => (
                <ProfileItem
                  key={index}
                  title={award.title}
                  institution={award.awarder}
                  startDate={new Date(award.date)}
                  endDate={new Date(award.date)}
                  description={award.summary}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProfileItemProps {
  title: string
  institution: string | React.ReactNode
  startDate: Date
  endDate: Date
  description?: string | null
}

function ProfileItem({
  title,
  institution,
  startDate,
  endDate,
  description,
}: ProfileItemProps) {
  return (
    <div>
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
            new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
            }).format(endDate)}
        </p>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
