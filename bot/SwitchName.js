const switchName = (first_name) => {
    switch(first_name) {
        case 'Skid':
            return 'Вы Создатель'
        case 'L1zer':
            return 'Вы микрочел Егор'
        default: 
            return first_name;
    }
}

module.exports.names = switchName;
