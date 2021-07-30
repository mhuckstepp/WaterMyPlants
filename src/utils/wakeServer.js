import axios from 'axios'

export const wakeServer = () => {
    axios.get('https://mywaterplants.herokuapp.com/api')
}

