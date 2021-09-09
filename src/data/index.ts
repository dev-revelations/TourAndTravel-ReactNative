export const getVideos = (): Videos => [
    require('../../assets/images/vid-1.mp4'),
    require('../../assets/images/vid-2.mp4'),
    require('../../assets/images/vid-3.mp4'),
    require('../../assets/images/vid-4.mp4'),
    require('../../assets/images/vid-5.mp4'),
];

export const getPackages = (): Package[] => [
    {
        image: require('../../assets/images/p-1.jpg'),
        title: 'mumbai',
        stars: 4
    },
    {
        image: require('../../assets/images/p-2.jpg'),
        title: 'sydney',
        stars: 2
    },
    {
        image: require('../../assets/images/p-3.jpg'),
        title: 'hawaii',
        stars: 1
    },
    {
        image: require('../../assets/images/p-4.jpg'),
        title: 'paris',
        stars: 3
    },
    {
        image: require('../../assets/images/p-5.jpg'),
        title: 'tokyo',
        stars: 5
    },
    {
        image: require('../../assets/images/p-6.jpg'),
        title: 'egypt',
        stars: 4
    },
];
