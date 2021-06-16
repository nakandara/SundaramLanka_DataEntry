import React,{useContext} from "react";
import ReactExport from "react-export-excel";
import { RestaurantsContext } from "../context/RestaurantsContext";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;





function Download ()  {
    const { restaurants } = useContext(RestaurantsContext);
    console.log(restaurants);
        return (
            <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={restaurants} name="mom">
                    <ExcelColumn label="point_discussed" value="point_discussed"/>
                    <ExcelColumn label="countermeasure" value="countermeasure"/>
                    <ExcelColumn label="responsible" value="responsible"/>
                    <ExcelColumn label="target_date"
                                 value={"target_date"}/>
                </ExcelSheet>
                
            </ExcelFile>
        );
    }

export default Download;