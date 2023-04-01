import laptopService from "../service/laptopService";

let getHomePage = async(req, res)=>{
  try{
    let response = await laptopService.handleGetLaptop();
    return res.render("laptop/laptops.ejs", {data: response.data});
  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Error from server!"
    })
  }
}

module.exports = {
  getHomePage
}