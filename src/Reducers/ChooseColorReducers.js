const chosenColorReducer = (color = 'None Selected...', action) => {
    switch(action.type) {
        case 'RED':
            return color = 'Red';
        case 'BLUE':
            return color = 'Blue';
        case 'GREEN':
            return color = 'Green';
        case 'PURPLE':
            return color = 'Purple';
        default:
            return color = 'None Selected...';
    }
}

export default chosenColorReducer;
