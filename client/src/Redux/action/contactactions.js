import axios from 'axios'
import {GET_CONTACTS} from '../constants/contacttype'


export const getContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/contacts')
        dispatch({type:GET_CONTACTS,payload:res.data.contacts})
    }
     catch (error) {
        console.log(error)
    }
}