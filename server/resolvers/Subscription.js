const { pubSub } = require('../utils');

function newUserSubscribe(parent, args, context, info) {
    console.log('pubSub',pubSub)
    return pubSub.asyncIterator("NEW_USER")
}

const newUser = {
    subscribe: newUserSubscribe,
    resolve: payload => {
        return payload
    },
};

module.exports = {
    newUser
};