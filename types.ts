
export enum View {
  HOME = 'HOME',
  CHARLIE = 'CHARLIE',
  ABOUT = 'ABOUT'
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
