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
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    coverUrl: 'https://m.media-amazon.com/images/I/71O2IIF3jIL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example1',
    type: 'book',
    year: '1866',
    tags: ['Classic', 'Psychology', 'Philosophy']
  },
  {
    id: '2',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    coverUrl: 'https://m.media-amazon.com/images/I/81K0CgE6bOL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example2',
    type: 'book',
    year: '180 AD',
    tags: ['Philosophy', 'Stoicism']
  },
  {
    id: '3',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    coverUrl: 'https://m.media-amazon.com/images/I/71s6u4iJmLL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example3',
    type: 'book',
    year: '1880',
    tags: ['Classic', 'Philosophy', 'Theology']
  },
  {
    id: '4',
    title: 'The Great Divorce',
    author: 'C.S. Lewis',
    coverUrl: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example4',
    type: 'book',
    year: '1945',
    tags: ['Theology', 'Fiction', 'Allegory']
  },
  {
    id: '5',
    title: 'The Subjection of Women',
    author: 'John Stuart Mill',
    coverUrl: 'https://m.media-amazon.com/images/I/71yK1s+g+EL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example5',
    type: 'book',
    year: '1869',
    tags: ['Philosophy', 'Feminism', 'Politics']
  },
  {
    id: '6',
    title: 'Common Sense',
    author: 'Thomas Paine',
    coverUrl: 'https://m.media-amazon.com/images/I/71e7di+0bUL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example6',
    type: 'book',
    year: '1776',
    tags: ['Politics', 'History', 'Philosophy']
  },
  {
    id: '7',
    title: 'Why Machines Learn',
    author: 'Anil Ananthaswamy',
    coverUrl: 'https://m.media-amazon.com/images/I/71s+3K+1+RL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example7',
    type: 'book',
    year: '2024',
    tags: ['Technology', 'AI', 'Science']
  },
  {
    id: '8',
    title: 'We Need New Names',
    author: 'NoViolet Bulawayo',
    coverUrl: 'https://m.media-amazon.com/images/I/91+1+1+1+1L._AC_UF1000,1000_QL80_.jpg',
    link: 'https://books.google.com/books?id=example8',
    type: 'book',
    year: '2013',
    tags: ['Fiction', 'Coming of Age', 'Migration']
  }
];
