
import { Album, Story } from './types.ts';

export const BRAND = {
  name: 'AK Brothers Photography',
  logo: 'https://acqlo-fff.s3.ap-south-1.amazonaws.com/user_uploads/94792149-d0b8-4e3e-b801-c62ef1297368-IMG_5256.PNG',
  heroBg: 'https://acqlo-fff.s3.ap-south-1.amazonaws.com/user_uploads/f9cfc13f-a90b-45f1-b554-289482e6140a-88.jpg',
  phone: '07566075512',
  email: 'akbrothersphotography@gmail.com',
  instagram: 'https://www.instagram.com/ak_brothers_photography?igsh=dHk1a2hudW81NWN3',
  youtube: 'https://www.youtube.com/@akbrothersphotography',
  address: 'House no 78 Bhavani Dham, Phase-2, Ayodhya Bypass Road, Narela Shankri, Bhopal',
};

export const WHATSAPP_NUMBER = '917566075512';

export const NAV_SECTIONS = [
  { name: 'Stories', path: '/stories' },
  { name: 'Portraits', path: '/images' },
  { name: 'Films', path: '/films' },
  { name: 'Photobooks', path: '/photobooks' },
  { name: 'Pre-Weddings', path: '/pre-weddings' },
];

export const GALLERY_DATABASE = {
  portraits: [
    'https://images.unsplash.com/photo-1512100356132-db7f5c4e319a?q=80&w=1200',
    'https://acqlo-fff.s3.ap-south-1.amazonaws.com/user_uploads/eae86dfb-7c55-4691-9b9a-60b1677fb07e-005.jpg',
    'https://acqlo-fff.s3.ap-south-1.amazonaws.com/user_uploads/97978b63-dbed-4fff-a61e-b60f5fd6eb57-69.jpg',
    'https://images.unsplash.com/photo-1583939411023-1478317ad1f9?q=80&w=1200',
    'https://images.unsplash.com/photo-1604017011836-739921773ee3?q=80&w=1200',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200',
  ],
  stories: [
    {
      id: 'story-1',
      clientName: 'Arjun & Meera',
      description: 'A royal heritage wedding at the Noor-Us-Sabah Palace, Bhopal.',
      image: 'https://acqlo-fff.s3.ap-south-1.amazonaws.com/user_uploads/f9cfc13f-a90b-45f1-b554-289482e6140a-88.jpg'
    },
    {
      id: 'story-2',
      clientName: 'Kabir & Siya',
      description: 'Elegant evening reception with cinematic lighting and traditional vows.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200'
    },
    {
      id: 'story-3',
      clientName: 'Rohan & Ananya',
      description: 'Vibrant outdoor ceremony capturing the essence of spring love.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200'
    }
  ] as Story[],
  preWeddings: [
    {
      id: 'pre-1',
      clientName: 'Sameer & Ishani',
      coverImage: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1200',
      description: 'Lakeside romance during the golden hour.',
      images: [
        'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1200',
        'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200',
        'https://images.unsplash.com/photo-1529634597503-139d672a783e?q=80&w=1200',
      ]
    },
    {
      id: 'pre-2',
      clientName: 'Vikram & Pooja',
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
      description: 'Urban love story in the heart of Bhopal.',
      images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200',
      ]
    }
  ] as Album[],
  photobooks: [
    {
      id: 'book-1',
      clientName: 'The Malhotra Legacy',
      coverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800',
      description: 'Handcrafted luxury leather-bound wedding album.',
      images: []
    },
    {
      id: 'book-2',
      clientName: 'Sufi & Sahil',
      coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800',
      description: 'Minimalist matte-finish photobook.',
      images: []
    }
  ] as Album[],
  films: [
    { id: 'f1', title: 'The Royal Wedding of Bhopal', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'f2', title: 'Eternal Vows at Lake View', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'f3', title: 'Golden Hour Memories', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ]
};
