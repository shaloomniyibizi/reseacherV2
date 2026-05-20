import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import AIChatBot from '@/components/web/ai-chat-bot';
import ChatHeader from '@/components/web/chat-header';
import ProjectCard from '@/components/web/project-card';
import { getServerSession } from '@/lib/server';
import { redirect } from 'next/navigation';
async function page() {
  const session = await getServerSession();
  if (!session) redirect('/sign-in'); 
  return (
    <div className='flex min-h-[calc(100vh-3.6rem)] flex-col'>
      <main className='min-h-screen flex-1'>
        {/* <Filters /> */}
        <ProjectCard />
        <Accordion
          type='single'
          collapsible
          className='relative z-40 bg-card shadow'
        >
          <AccordionItem value='item-1'>
            <div className='fixed bottom-8 right-8 overflow-hidden rounded-md border border-border bg-card'>
              <div className='flex h-full w-full min-w-80 flex-col'>
                <AccordionTrigger className='border-b border-border bg-card px-6'>
                  <ChatHeader />
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex h-fit flex-col'>
                    <AIChatBot />
                  </div>
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default page;
