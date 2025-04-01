
import app from "../config/firebase.js"

import { getStorage, uploadBytes } from "firebase/storage";


const storage = getStorage(app,"gs://my-custom-bucket");


export default function uploadMedia(file){

    if(file==null){
        return
    }

    const fileRef = ref(storage, file.name);

    uploadBytes(fileRef,file).then((snapshot)=>{
        console.log("uploaded a blob  file !")
    })

}


