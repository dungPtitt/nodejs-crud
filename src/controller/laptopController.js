import laptopService from "../service/LaptopService";

let createLaptop = async(req, res)=>{
  try{
    let data = req.body;
    if(!data.sold){
      data.sold=0;
    }
    let response = await laptopService.handleCreateLaptop(data);
    if(response.errCode==0){
      return res.redirect("/");
    }
    return res.render("laptop/editAndAdd.ejs", {data: data, idLaptop: idLaptop, errMessage: response.errMessage});

  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Err from server!"
    })
  }
}

let getLaptop = async(req, res)=>{
  try{
    let idLaptop = req.query.id;
    let response = await laptopService.handleGetLaptop(idLaptop);
    console.log(response);
    return res.render("laptop/laptops.ejs", {data: response.data});
  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Error from server!"
    })
  }
  
}
let getViewEditLaptop = async(req, res)=>{
  try{
    let idLaptop = req.query.id;
    let data = "";
    if(idLaptop!=-1){
      let response = await laptopService.handleGetLaptop(idLaptop);
      data = response.data;
    }else {
      data = {
        name: "",
        price: "",
        brand: "",
        sold: "1",
        dateManufacture: ""
      }
    }
    return res.render("laptop/editAndAdd.ejs", {data: data, idLaptop: idLaptop});
  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Error from server!"
    })
  }
}

let updateLaptop = async(req, res)=>{
  try{
    let data = req.body;
    if(!data.sold){
      data.sold = "0";
    }
    let response = await laptopService.handleUpdateLaptop(data);
    return res.redirect("/");
  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Error from server!"
    })
  }
}
let deleteLaptop = async(req, res)=>{
  try{
    let idLaptop = req.query.id;
    let response = await laptopService.handleDeleteLaptop(idLaptop);
    if(response.errCode==0){
      res.redirect("/");
    }
  }catch(e){
    console.log(e);
    res.status(500).json({
      errCode: -1,
      errMessage: "Err from server!"
    })
  }
}

module.exports = {
  createLaptop,
  getLaptop,
  getViewEditLaptop,
  updateLaptop,
  deleteLaptop
}