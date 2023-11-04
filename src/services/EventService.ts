import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/amarroto/vue3-test-app',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get<MyEvent[]>('/events')
  },
  getEvent(id: any) {
    return apiClient.get<MyEvent>(`/event/${id}`)
  }
}
