
export enum FileStatus {
  SCHEDULED = 'scheduled',
  AVAILABLE = 'available'
}

export type File = {
  name: string;
  device: string;
  path: string;
  status: 'scheduled' | 'available';
}