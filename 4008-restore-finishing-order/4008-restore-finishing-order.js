/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const friendSet = new Set(friends)

    const result = order.filter (num => friendSet.has(num))

    return result
};