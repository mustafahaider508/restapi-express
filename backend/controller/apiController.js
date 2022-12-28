const getApi = async(req,res) => {
    res.status(200).json({ message: "get api" });

}

const postApi = async (req,res) => {
  if(!req.body.text){
      res.status(400)
      throw new Error("Please add a field");
  }
    res.status(200).json({message:"post api"})
}

const putApi = async (req,res) => {
    res.status(200).json({ message: `put req on id ${req.params.id}` });
}
const delApi = async (req,res) => {
      res.status(200).json({ message: `delete req on id ${req.params.id}` });
}
 module.exports = { getApi, postApi, putApi, delApi };