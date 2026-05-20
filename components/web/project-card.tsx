'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/lib/constants';
import { dateToUTCDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8'>
      {projects?.map(
        (project, index) =>
          project.status === 'accepted' && (
            <Card
              key={`${project.id}-${index}`}
              className='w-full overflow-hidden pt-0 pb-2 rounded-t-2xl'
            >
              <Link
                className='flex h-full flex-col'
                href={`/dashboard/projects/${project.id}`}
              >
                <Image
                  width={1200}
                  height={1200}
                  src={project.thumbnail}
                  alt={project.title}
                  className='h-42 w-full object-cover'
                />
                <CardHeader className='py-2'>
                  <CardTitle className='line-clamp-1 truncate'>
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.author.College!.name} |{' '}
                    {project.author.Department!.name} |{' '}
                    {project.author.Field!.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-1 py-2'>
                  <div
                    className='line-clamp-3 text-justify '
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></div>
                </CardContent>
                <Separator />
                <CardFooter className='mt-2'>
                  <CardDescription className='flex w-full items-center justify-between'>
                    <span>By {project.author.name}</span>
                    <span>
                      {dateToUTCDate(project.createdAt).toLocaleString(
                        'default',
                        {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        },
                      )}
                    </span>
                  </CardDescription>
                </CardFooter>
              </Link>
            </Card>
          ),
      )}
    </div>
  );
};

export default ProjectCard;
