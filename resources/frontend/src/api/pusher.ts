import Pusher from 'pusher-js';

const pusher = new Pusher('ff7a8203cc1de341f2fc', {
    cluster: 'eu',
    forceTLS: true
});

export default pusher;
