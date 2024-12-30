import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

export const generateCatAvatar = (seed: string): string => {
  const avatar = createAvatar(lorelei, {
    seed,
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
    size: 128,
    radius: 50
  });

  return avatar.toDataUriSync();
};