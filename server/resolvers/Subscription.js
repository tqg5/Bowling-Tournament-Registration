const { pubSub } = require('../utils');

function newLinkSubscribe(parent, args, context, info) {
    console.log('pubSub',pubSub)
    return pubSub.asyncIterator("NEW_LINK")
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    },
};

module.exports = {
    newLink
};