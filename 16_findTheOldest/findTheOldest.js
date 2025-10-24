function getAge(birth, death) {
    if (!death)
        death = new Date().getFullYear();

    return death - birth;
}

const findTheOldest = function (arr) {
    return arr.reduce((oldest, current) => {
        oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if (currentAge > oldestAge) return current;
        else return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
