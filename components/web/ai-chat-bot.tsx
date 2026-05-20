'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import UserAvatar from '@/components/web/user-avatar';
import { cn } from '@/lib/utils';
import { Bot, Send, Trash } from 'lucide-react';
import { useRef, useState } from 'react';

const AIChatBot = () => {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const messages = [
    {
      role: 'assistant' as const,
      content: 'Hello! How can I help you today?',
    },
  ];

  const lastMessageIsUser = false;

  return (
    <div className={cn('bottom-0 right-0 z-10 w-125 p-1 xl:right-36')}>
      <div className='flex h-112 flex-col rounded shadow-xl'>
        <div className='mt-3 h-full overflow-y-auto px-3' ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.role} />
          ))}
          {lastMessageIsUser && (
            <ChatMessage
              message={{
                role: 'assistant' as const,
                content: 'Thinking...',
              }}
            />
          )}
          {false && (
            <ChatMessage
              message={{
                role: 'assistant' as const,
                content: 'Samething went wrong please try again',
              }}
            />
          )}
          {false && (
            <div className='flex h-full items-center justify-center gap-3'>
              <Bot />
              Start conversation with smart research assistant
            </div>
          )}
        </div>
        <form className='m-3 flex gap-1'>
          <Button
            title='Clear chat'
            variant={'destructive'}
            size={'icon'}
            className='shrink-0'
            type='button'
            onClick={() => setOpen(true)}
          >
            <Trash />
          </Button>
          <Input
            value=' '
            onChange={() => {}}
            placeholder='Say same thing...'
            ref={inputRef}
          />
          <Button type='submit'>
            <Send className='h-4 w-4' />
          </Button>
        </form>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action can not undone. This will permenently delete this chat
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                // deleteMutation.mutate(user?.id!);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AIChatBot;

function ChatMessage({
  message: { role, content },
}: {
  message: Pick<
    { role: 'user' | 'assistant'; content: string },
    'role' | 'content'
  >;
}) {
  const isAIMessage = role === 'assistant';
  return (
    <div
      className={cn(
        'mb-1 flex items-start',
        isAIMessage ? 'me-5 justify-start' : 'ms-5 justify-end',
      )}
    >
      {isAIMessage && <Bot className='mr-1 h-8 w-8 shrink-0' />}
      <p
        className={cn(
          'whitespace-pre-line rounded border px-3 py-2',
          isAIMessage ? 'bg-background' : 'bg-primary text-primary-foreground',
        )}
      >
        {content}
      </p>
      {!isAIMessage && (
        <div className='ml-1'>
          <UserAvatar className='h-8 w-8' />
        </div>
      )}
    </div>
  );
}
