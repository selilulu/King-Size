

const getPrivateData = (req, res, next) =>{
    res.status(200).json({
        sucess: true,
        data:"hello"
    })
}
export default getPrivateData;