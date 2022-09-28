import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'A first meetup',
        image:'https://commons.wikimedia.org/wiki/Main_Page#/media/File:Balmoral_Castle_panorama_20211026.jpg',
        address:'Some address',
        description: 'This is a first meetup'
    },
    {
        id:'m2',
        title:'A second meetup',
        image:'https://commons.wikimedia.org/wiki/Main_Page#/media/File:Balmoral_Castle_panorama_20211026.jpg',
        address:'Some address',
        description: 'This is a second meetup'
    }
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;