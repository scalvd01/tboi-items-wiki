import jsonData from '../data/tboi_items.json'
import { ref } from 'vue'

const data = jsonData
const filteredList = ref(data)

export function useData() {
  const getData = function () {
    filteredList.value = data
    return filteredList
  }

  const getItemByID = (id) => {
    const item = jsonData.find((objeto) => objeto.Item_ID === id)
    return item
  }

  const sortData = (sortTerm) => {
    // console.log(sortTerm.value)
    if (sortTerm.value === undefined || sortTerm.value === '') {
      // console.log('nada o cadena vacía en search box')
      getData()
    } else {
      filteredList.value = data.filter((item) => {
        return item.Item_Name.toLowerCase().includes(sortTerm.value.toLowerCase())
      })
      // console.log(filteredList.value)
    }
  }

  return { data, filteredList, getData, getItemByID, sortData }
}

// export const functions = () => {
//   const getData = function () {
//     return jsonData
//   }

//   const getFilteredData = function () {}

//   const getItemByID = (id) => {
//     // const item = jsonData.find((objeto) => objeto.Item_ID === id)
//     // console.log(jsonData)
//     // return item
//   }

//   return { getData, getFilteredData, getItemByID }
// }
