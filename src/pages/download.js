import { useEffect } from 'react';

const Download = () => {
    useEffect(() => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app'; // Replace with your desired URL
    }, []);

    return null;
};

export default Download;