import { Image } from "react-native";

export const Small = [
  {
    user_id: 1,
    user_name: 'Royryan Merc...',
    user_image: Image.resolveAssetSource(require('@assets/images/1.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
      {
        story_id: 2,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
  {
    user_id: 2,
    user_name: 'Neil Gaiman.....',
    user_image: Image.resolveAssetSource(require('@assets/images/2.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
  {
    user_id: 3,
    user_name: 'Mark mcallister',
    user_image: Image.resolveAssetSource(require('@assets/images/3.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
  {
    user_id: 4,
    user_name: 'Michael Doug...',
    user_image: Image.resolveAssetSource(require('@assets/images/4.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
  {
    user_id: 5,
    user_name: 'Royryan Merc....',
    user_image: Image.resolveAssetSource(require('@assets/images/5.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
  {
    id: 6,
    user_name: 'Royryan Merc...',
    user_image: Image.resolveAssetSource(require('@assets/images/6.png')).uri, // Convert local image to URI,
    stories: [
      {
        story_id: 1,
        story_image:
          Image.resolveAssetSource(require('@assets/images/Story.png')).uri,
        swipeText: 'Custom swipe text for this story',
      },
    ],
  },
];

export const Judy = [
  {
    id: 1,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book1',
  },
  {
    id: 2,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book2',
  },
  {
    id: 3,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book3',
  },
  {
    id: 4,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book4',
  },
  {
    id: 5,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book5',
  },
  {
    id: 6,
    title: 'Book Title',
    price: '$40.00',
    author: 'By Judy Robinson',
    image: 'Book6',
  },
];
export const PopularBooks = [
  {
    id: 1,
    image: 'Book9',
  },
  {
    id: 2,
    image: 'Book10',
  },
  {
    id: 3,
    image: 'Book11',
  },
  {
    id: 4,
    image: 'Book12',
  },
];
export const MovieBooks = [
  {
    id: 1,
    image: 'Book13',
  },
  {
    id: 2,
    image: 'Book14',
  },
  {
    id: 3,
    image: 'Book15',
  },
  {
    id: 4,
    image: 'Book16',
  },
];
export const banner =[0,1,2]
export const buttons =[
  {
    id:1,
    title:'Books',
    icon:'Fire',
    bgColor:'primary',
    color:'surface'
  },
  {
    id:2,
    title:'Audio Book',
    icon:'Audio',
    bgColor:'surface',
    color:'PlatformTitle'
  },
  {
    id:1,
    title:'Summaries',
    bgColor:'surface',
    icon:'Book',
     color:'PlatformTitle'
  }
]
