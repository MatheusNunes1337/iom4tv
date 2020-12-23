import axios from 'axios'

const api = axios.create({
	baseURL: 'http://api_mysql.tv4e.pt/library2/api/sendKey/4abb55a5dfbe7634'
})

export default api