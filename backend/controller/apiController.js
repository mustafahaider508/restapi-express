const apiController = (req,res) => {
    res.status(200).json({ message: "get api" });

}

module.exports = { apiController };