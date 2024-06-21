async function getAttributes(model){

    let get = await model.rawAttributes;

    return get
};

module.exports = {
    getAttributes
}