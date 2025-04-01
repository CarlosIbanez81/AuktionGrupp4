
const searchAuctions = async (req,res) => {

  try {
    const {input} = req.query;

    const results = await Auction.find({
      object: {$regex: input, $options: "i"}
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({message: "Serverfel", error});
  }
};

export default searchAuctions;