import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { user } from '@/lib/auth';
import { AvatarProps } from '@radix-ui/react-avatar';

interface UserAvatarProps extends AvatarProps {
  user?: user;
}
export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user?.image && <AvatarImage src={user.image} alt={user.name} />}
      <AvatarFallback>
        {user
          ?.name!.split(' ')
          .map((chunk) => chunk[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
