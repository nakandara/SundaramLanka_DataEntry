import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [production, setProduction] = useState([]);
  const [quality, setQuality] = useState([]);
  const [bead, setBead] = useState([]);
  const [mixing, setMixing] = useState([])
  const [eng, setENG] = useState([]);
  const [hr, setHR] = useState([]);
  const [hold, setHold] = useState([]);
  const [press, setPress] = useState([]);
 
///////////////////////rccm--------------------------


const [productionRccm,setProductionRccm] = useState([])
const [qualityRccm,setQualityRccm] = useState([])
const [mixingRccm,setMixingRccm] = useState([])
const [holdRccm,setHoldRccm] = useState([])
const [beadRccm,setBeadRccm] = useState([])
const [engRccm,setENGRccm] = useState([])
const [hrRccm,setHRRccm] = useState([])





const [icpc,setICPC] = useState([])

const [mom,setMom] = useState([])

////////////////////////

const [detail,setDetail] = useState([])



const [dateOne,setDateOne] = useState()
const [dateTwo,setDateTwo] = useState(new Date())
const [category,setCategory] = useState('shift')



/////////////////////////////////////////////////

const [icpcsucess, setSucessicpc] =useState([])

const [momsucess, setSucessmom] =useState([])

const [machineCost,setMachineCost]=useState([])











  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [sucess, setSucess] = useState([]);
  const[login,setLogin] =useState('')
  var myDate = new Date();
    const [datem, setDatem] = useState(myDate.setDate(myDate.getDate() - 30));
    const [ddate, setDdate] = useState(new Date());

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };


  const addProduction = (data) => {
    setProduction([...production, data]);
  };
/////////////////////////////////////////////RCCM
  const addProductionRccm = (data) => {
    setProductionRccm([...productionRccm, data]);
  };

  const addQualityRccm = (data) => {
    setQualityRccm([...qualityRccm, data]);
  };
  
  const addMixingRccm = (data) => {
    setMixingRccm([...mixingRccm, data]);
  };
  
  const addHoldRccm = (data) => {
    setHoldRccm([...holdRccm, data]);
  };
  
  const addHRRccm = (data) => {
    setHRRccm([...hrRccm, data]);
  };
  
  const addENGRccm = (data) => {
    setENGRccm([...engRccm, data]);
  };


  const addBeadRccm = (data) => {
    setBeadRccm([...beadRccm, data]);
  };




  const addQuality = (data) => {
    setQuality([...quality, data]);
  };
  const addBead = (data) => {
    setBead([...bead, data]);
  };
  const addENG = (data) => {
    setENG([...eng, data]);
  };

  const addMixing = (data) => {
    setMixing([...mixing, data]);
  };
  const addHR = (data) => {
    setHR([...hr, data]);
  };
  const addHold = (data) => {
    setHold([...hold, data]);
  };


  const addSucess = (suces) => {
    setSucess([...sucess, suces]);

  
  };

  const addICPC = (data)=>{

    setICPC([...icpc,data])
  }


  const addMom = (data)=>{

    setMom([...mom,data])
  }

  const addDetail = (data)=>{

    setDetail([...detail,data])
  }

  const addMachineCost = (data)=>{

    setMachineCost([...machineCost,data])
  }


  const addPress =(data)=>{
    setPressData([...pressData,data])
  }

  const addPressLine =(data)=>{
    setPressLine([...pressLine,data])
  }

  const addPressOther =(data)=>{
    setPressOther([...pressOther,data])
  }

const [builderPressData,setBuilderPressData]=useState([])
const[builderPressDataOne,setBuilderPressDataOne] =useState()

const[diffData,setDiffData] =useState([])
const[pressData,setPressData]=useState([])

const[sn,setSn] =useState()


var myTime = new Date()

const [time,setTime] =useState(new Date( ))

const [pressLine,setPressLine]= useState([])
const [pressOther,setPressOther]= useState([])



  return (
    <RestaurantsContext.Provider
      value={{icpcsucess,setSucessicpc,datem, setDatem,ddate, setDdate,dateOne,setDateOne,dateTwo,setDateTwo,category,setCategory, addDetail,detail,setDetail,addSucess,icpc,setICPC,addICPC,production,setProduction,productionRccm,setProductionRccm,quality,setQuality,qualityRccm,setQualityRccm,addProduction,addQuality,hold,setHold,addHold,
        quality,setQuality,addQuality,mixing,addMixing,setMixing,eng,addENG,setENG,hr,setHR,addHR,bead,addBead,setBead,addProductionRccm,
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        addSucess,sucess,
        setSucess,datem, setDatem,ddate, setDdate,
        login,setLogin,mixingRccm,setMixingRccm,holdRccm,setHoldRccm,beadRccm,setBeadRccm,engRccm,setENGRccm,
        addQualityRccm,addMixingRccm,addHoldRccm,addHRRccm,addENGRccm,addBeadRccm,hrRccm,setHRRccm,addPress,setPress,press,time,setTime,
        builderPressData,setBuilderPressData,pressData,setPressData,diffData,setDiffData,builderPressDataOne,setBuilderPressDataOne,sn,setSn,mom,setMom,momsucess, setSucessmom,addMom,addMachineCost,
        machineCost,setMachineCost,pressLine,setPressLine,addPressOther,pressOther,setPressOther,addPressLine
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
