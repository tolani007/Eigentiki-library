export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  link: string;
  type: 'book' | 'paper';
  year?: string;
  tags?: string[];
}

export const libraryItems: LibraryItem[] = [
  {
    id: '1',
    title: 'Soldiers and Kings: Survival and Hope in the World of Human Smuggling',
    author: 'Jason De Leon',
    coverUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example1',
    type: 'book',
    year: '2024',
    tags: ['Anthropology', 'Migration']
  },
  {
    id: '2',
    title: 'The Good Mother Myth',
    author: 'Nancy Reddy',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example2',
    type: 'book',
    year: '2023',
    tags: ['Sociology', 'Parenting']
  },
  {
    id: '3',
    title: 'Empire of Pain: The Secret History of the Sackler Dynasty',
    author: 'Patrick Radden Keefe',
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example3',
    type: 'book',
    year: '2021',
    tags: ['History', 'Investigative']
  },
  {
    id: '4',
    title: 'Seeing Voices: A Journey Into the World of the Deaf',
    author: 'Oliver Sacks',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example4',
    type: 'book',
    year: '1989',
    tags: ['Neuroscience', 'Linguistics']
  },
  {
    id: '5',
    title: 'Attention Is All You Need',
    author: 'Vaswani et al.',
    coverUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    link: 'https://arxiv.org/abs/1706.03762',
    type: 'paper',
    year: '2017',
    tags: ['AI', 'Deep Learning']
  },
  {
    id: '6',
    title: 'Annals of a Former World',
    author: 'John McPhee',
    coverUrl: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example6',
    type: 'book',
    year: '1998',
    tags: ['Geology', 'History']
  },
  {
    id: '7',
    title: 'Being You: A New Science of Consciousness',
    author: 'Anil Seth',
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example7',
    type: 'book',
    year: '2021',
    tags: ['Neuroscience', 'Philosophy']
  },
  {
    id: '8',
    title: 'Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness',
    author: 'Peter Godfrey-Smith',
    coverUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example8',
    type: 'book',
    year: '2016',
    tags: ['Biology', 'Philosophy']
  },
  {
    id: '9',
    title: 'The Weirdest People in the World',
    author: 'Joseph Henrich',
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example9',
    type: 'book',
    year: '2020',
    tags: ['Anthropology', 'Psychology']
  },
  {
    id: '10',
    title: 'Deep Residual Learning for Image Recognition',
    author: 'He et al.',
    coverUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    link: 'https://arxiv.org/abs/1512.03385',
    type: 'paper',
    year: '2015',
    tags: ['AI', 'Computer Vision']
  },
  {
    id: '11',
    title: 'Intuition Pumps and Other Tools for Thinking',
    author: 'Daniel Dennett',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example11',
    type: 'book',
    year: '2013',
    tags: ['Philosophy', 'Thinking']
  },
  {
    id: '12',
    title: 'Subprime Attention Crisis',
    author: 'Tim Hwang',
    coverUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    link: 'https://books.google.com/books?id=example12',
    type: 'book',
    year: '2020',
    tags: ['Technology', 'Economics']
  }
];
