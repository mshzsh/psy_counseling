import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
})

const request = ({ method, url, data = null, params = null, headers = null }) =>
  axiosInstance({
    method,
    url,
    data,
    params,
    headers,
  })
    .then(res => res)
    .catch(err => {
      // console.error(err, err.response)
      if (err?.response?.status === 401) {
        if (localStorage.getItem('info')) {
          localStorage.removeItem('info')
        }
        if (localStorage.getItem('authToken')) {
          localStorage.removeItem('authToken')
          window.location.reload()
        }
      }

      if (
        err?.response?.status === 404 &&
        window.location.pathname !== '/404'
      ) {
        window.location.href = '/404'
      }
      throw err
    })

const api = {}

// Fields
api.getFields = () =>
  request({
    method: 'get',
    url: `/projects/`,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })

api.postCreateField = ({ data }) =>
  request({
    method: 'post',
    url: `/projects/`,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
    data,
  })

api.getFieldDetails = ({ urlParams }) => {
  let excludeFieldsText = ''
  if (urlParams.excludeFields?.length > 0) {
    urlParams.excludeFields.forEach((field, index) => {
      if (index === 0) {
        excludeFieldsText = `?exclude_fields=${field}`
      } else {
        excludeFieldsText = `${excludeFieldsText}&exclude_fields=${field}`
      }
    })
  }

  return request({
    method: 'get',
    url: `/projects/${urlParams.id}/${excludeFieldsText}`,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

// login
api.preLogin = ({ data }) =>
  request({
    method: 'post',
    url: '/users/pre-login/',
    data,
  })

api.login = ({ data }) =>
  request({
    method: 'post',
    url: '/users/login/',
    data,
  })

// api.userDetail = () =>
//   request({
//     method: 'pacth',
//     url: '/users/profile/',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//     },
//   })

// experts
api.getExperts = ({ params }) =>
  request({
    method: 'get',
    url: `/users/experts/`,
    params,
  })

// revalidate
api.revalidate = ({ data }) =>
  request({
    method: 'post',
    // url: `https://www.haalekhoob.net/api/r/`,
    url: `http://localhost:3000/api/r/`,
    // headers: {
    //   // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    // },
    data,
  })

export default api
