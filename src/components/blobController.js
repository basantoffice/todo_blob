import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'http://127.0.0.1:10000/devstoreaccount1/todoblob/documect.json?sv=2018-03-28&st=2022-07-21T04%3A56%3A26Z&se=2022-07-22T04%3A56%3A26Z&sr=b&sp=rw&sig=doxyDyAC2veiijovuvSaDETRLbvuKk1YWIx0IXxlF5g%3D'

function   saveDataToDatabase(data){
    axios({
        method: 'put',
        url: baseURL,
        data: data,
        headers:{
            'x-ms-blob-type':'BlockBlob'
        }
      }).then(()=>{
        console.log("successfully saved")
        // console.log('DATA:',data)
      }).catch((e)=>{
        console.log("ERROR:",e)
      })
}


export { saveDataToDatabase };