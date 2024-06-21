async function getAll(model){

    let get = await model.findAll();

    return get
};

const findAll = (model) =>  async (req, res) => {
    try {
        let get = await getAll(model);
        return res.status(200).json({get});
    } catch (error) {
        console.log({error});
    }
}

const health = (model) => async (req, res) => {
    let all = await model.findAll();
    let {message, success} = Array.isArray(all) ? 
    {message: 'ok', success: true} : 
    {message: '!', success: false}
    try {
        return res.status(200).json({message, success});
    } catch (error) {
        console.log({error});
    }
}

module.exports = {
    getAll, 
    health,
    findAll,
};

