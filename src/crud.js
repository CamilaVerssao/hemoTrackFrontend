const axios = require('axios')
const { baseApiUrl } = require('./global')

const get = async (route, params = {}) => {
  let url = `${baseApiUrl}/${route}`

  axios.defaults.withCredentials = true

  const result = await axios
    .get(url, params)
    .then((res) => {
      return { ...res.data, status: res.status }
    })
    .catch((err) => {
      console.error(err)
      return { ...err.response, status: err.response.status }
    })

  return result
}

const insert = async (route, object) => {
  axios.defaults.withCredentials = true

  const url = `${baseApiUrl}/${route}`
  const result = await axios
    .post(url, object)
    .then((res) => {
      return { ...res.data, status: res.status }
    })
    .catch((err) => {
      console.log(err)
      return { ...err.response, status: err.response.status }
    })

  return result
}

const update = async (route, id, object) => {
  axios.defaults.withCredentials = true

  const url = `${baseApiUrl}/${route}/${id}`
  const result = await axios
    .patch(url, object)
    .then((res) => {
      return { ...res.data, status: res.status }
    })
    .catch((err) => {
      console.log(err)
      return { ...err.response, status: err.response.status }
    })

  return result
}

const remove = async (route, id) => {
  axios.defaults.withCredentials = true

  let url = `${baseApiUrl}/${route}/${id}`
  const result = await axios
    .delete(url)
    .then((res) => {
      return { ...res.data, status: res.status }
    })
    .catch((err) => {
      console.log(err)
      return { ...err.response, status: err.response.status }
    })

  return result
}

const getFile = async (route, params, fileName) => {
  let url = ''

  url = `${baseApiUrl}/${route}`

  axios.defaults.withCredentials = true
  const result = await axios({
    url: url,
    method: 'POST',
    responseType: 'blob',
    data: params,
  })
    .then((res) => {
      const href = URL.createObjectURL(res.data)

      const link = document.createElement('a')

      link.href = href
      link.setAttribute('download', `${fileName}.xlsx`)
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)

      URL.revokeObjectURL(href)

      return { ...res.data, status: res.status }
    })
    .catch((err) => {
      console.log(err)
      return { error: err, status: err.response.status }
    })

  return result
}

module.exports = {
  get,
  update,
  remove,
  insert,
  getFile
}
