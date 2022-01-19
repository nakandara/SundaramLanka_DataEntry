import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Production from "./routes/Production";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Sucess from "./routes/Sucess";
import Login from "./routes/Login";
import Quality from "./routes/Quality";
import UpdateQualityPage from "./routes/UpdateQualityPage";
import Bead from "./routes/Bead";
import Mixing from "./routes/Mixing";
import HR from "./routes/HR";
import ENG from "./routes/Eng";
import Hold from "./routes/Hold";
import UpdateBeadPage from "./routes/UpdateBeadPage";
import UpdateMixingPage from "./routes/UpdateMixingPage";
import UpdateHRPage from "./routes/UpdateHRPage";
import UpdateENGPage from "./routes/UpdateENGPage";
import UpdateHoldPage from "./routes/UpdateHoldPage";
import './app.css'
import HomeProduction from "./routes/productionRoute/HomeProduction";
import HomeMixing from "./routes/mixingRoute/HomeMixing";
import HomeQuality from "./routes/qualityRoute/HomeQuality";
import HomeHR from "./routes/hrRoute/HomeHR";
import HomeENG from "./routes/engRoute/HomeENG";
import HomeHold from "./routes/holdRoute/HomeHold";
import HomeBead from "./routes/beadRoute/HomeBead";
import UpdatePRccm from './routes/UpdateRccmPage/UpdatePRccm'
import UpdateQualityRccm from "./routes/UpdateRccmPage/UpdateQualityRccm";
import UpdateBeadRccm from "./routes/UpdateRccmPage/UpdateBeadRccm";
import UpdateENGRccm from "./routes/UpdateRccmPage/UpdateENGRccm";
import UpdateHoldRccm from "./routes/UpdateRccmPage/UpdateHoldRccm";
import UpdateMixingRccm from "./routes/UpdateRccmPage/UpdateMixingRccm";
import UpdateHRRccm from "./routes/UpdateRccmPage/UpdateHRRccm";
import HomeICPC from "./routes/icPcRoute/HomeICPC";
import HomeDetail from "./routes/DetailRoute/HomeDetail";
import UpdateDetailPage from "./routes/UpdateDetailPage";
import UpdatePageICPC from "./routes/icPcRoute/UpdatePageICPC";
import SucessICPC from "./routes/icPcRoute/SucessICPC";
import Press from "./routes/Press";
import UpdatePressPage from "./routes/UpdatePressPage";
import PressNew from './routes/PressNew'
import UpdatePressNewPage from './routes/UpdatePressNewPage'
import SearchSnPress from '../src/componentsPressNew/SearchSnPress'
import HomeMom from "./routes/momRoute/HomeMom";
import UpdatePageMom from "./routes/momRoute/UpdatePageMom";
import SucessMom from "./routes/momRoute/SucessMom";
import MachineCost from "./routes/MachineCost";
import UpdateMachineCost from "./componentsMachineCost/UpdateMachineCost";
import UpdateMachineCostPage from "./routes/UpdateMachineCostPage";
import PressLine from "./routes/PressLine";
import UpdateLinePage from "./routes/UpdateLinePage";
import PressOther from "./routes/PressOther";
import UpdatePressOtherPage from "./routes/UpdatePressOtherPage";

// pramod create all route path

import FgsAccuracy from "./routes/FgsAccuracy"
import Shotblasting from "./routes/Shotblasting"
import Band from "./routes/Band"
import Homefgs from "./routes/fgsAccuracyRoute/HomeFgs";
import UpdateFgsPage from "./routes/UpdateFgsPage";


const App = () => {
  return (
    <RestaurantsContextProvider>
      
        <Router>
          <Switch>
            
            <Route exact path='/' component={Login}/>

           
            
            
            <Route exact path="/production" component={Production} />
            <Route exact path="/production/rccm" component={HomeProduction} />
            <Route exact path="/production/rccm/update/:id" component={UpdatePRccm} /> 

           
            <Route exact path="/quality" component={Quality} />
            <Route exact path="/quality/rccm" component={HomeQuality} />
            <Route exact path="/quality/rccm/update/:id" component={UpdateQualityRccm} /> 

            
            <Route exact path="/bead" component={Bead} /> 
            <Route exact path="/bead/rccm" component={HomeBead} />
            <Route exact path="/bead/rccm/update/:id" component={UpdateBeadRccm} /> 

            
            <Route exact path="/mixing" component={Mixing} />
            <Route exact path="/mixing/rccm" component={HomeMixing} />
            <Route exact path="/mixing/rccm/update/:id" component={UpdateMixingRccm} /> 

            
            <Route exact path="/hr" component={HR} />
            <Route exact path="/hr/rccm" component={HomeHR} />
            <Route exact path="/hr/rccm/update/:id" component={UpdateHRRccm} /> 

           
            <Route exact path="/eng" component={ENG} />
            <Route exact path="/eng/rccm" component={HomeENG} />
            <Route exact path="/eng/rccm/update/:id" component={UpdateENGRccm} /> 

            
            <Route exact path="/hold" component={Hold} />
            <Route exact path="/hold/rccm" component={HomeHold} />
            <Route exact path="/hold/rccm/update/:id" component={UpdateHoldRccm} /> 



            <Route exact path="/machinecost" component={MachineCost} />



            
            <Route exact path="/production/:id/update/production" component={UpdatePage}/>
            <Route exact path="/quality/:id/update/quality" component={UpdateQualityPage} />
        {/* pramod route*/}
            <Route exact path="/fgsaccuracy/:id/update/fgsaccuracy" component={UpdateFgsPage} />
            {/* pramod route*/}
            <Route exact path="/bead/:id/update/bead" component={UpdateBeadPage} />
            <Route exact path="/mixing/:id/update/mixing" component={UpdateMixingPage} />
            <Route exact path="/hr/:id/update/hr" component={UpdateHRPage} />
            <Route exact path="/eng/:id/update/eng" component={UpdateENGPage} />
            <Route exact path="/hold/:id/update/hold" component={UpdateHoldPage} /> 
            <Route exact path="/machinecost/:id/update/machinecost" component={UpdateMachineCostPage} /> 

           
            <Route exact path="/icpc" component={HomeICPC} />
            <Route exact path="/icpc/:id/update/icpc" component={UpdatePageICPC} />
            <Route exact path="/icpc/sucess" component={SucessICPC} />
            

            <Route exact path="/icpc/completed" component={Hold} />



            <Route exact path="/mom" component={HomeMom} />
            <Route exact path="/momdpr/:id/update/mom" component={UpdatePageMom} />
            <Route exact path="/mom/sucess" component={SucessMom} />
            

            <Route exact path="/mom/completed" component={Hold} />
            
            
            <Route exact path="/detail" component={HomeDetail} />
            <Route exact path="/detail/:id/update/detail" component={UpdateDetailPage} />

            <Route exact path="/press" component={Press} />
            <Route exact path="/press/:id/update/press" component={UpdatePressPage} /> 


            <Route exact path="/pressnew" component={SearchSnPress} />
            <Route exact path="/pressnew/:sn" component={PressNew} />
            <Route exact path="/press/:id/update/pressnew" component={UpdatePressNewPage} /> 

           <Route exact path="/pressline" component={PressLine} />
            <Route exact path="/pressline/:id/update/pressline" component={UpdateLinePage} /> 

            <Route exact path="/pressother" component={PressOther} />
            <Route exact path="/pressother/:id/update/pressother" component={UpdatePressOtherPage} />
            
            {/* pramod create all route */}
            
            <Route exact path="/fgsaccuracy" component={FgsAccuracy} />
            <Route exact path="/fgsaccuracy/rccm" component={Homefgs} /> 
            <Route exact path="/shotBlasting" component={Shotblasting} /> 
            <Route exact path="/Band" component={Band} /> 
            
            {/* <Route
              exact
              path="/production/quality/sucess"
              component={Sucess}
            /> */}
            
            
            </Switch>
            </Router>
        
      
    </RestaurantsContextProvider>
  );
};

export default App;
