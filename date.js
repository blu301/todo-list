exports.getDate = () => {
    
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };

    return new Date().toLocaleDateString('en-US', options);
}

exports.getDay = () => {

    return new Date().toLocaleDateString('en-US', {weekday: 'long'});
    
}