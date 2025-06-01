
const mainUrl = 'https://fandom-k-api.vercel.app'

/**
 * 아이돌 목록을 가져옵니다.
 * @param {*} teamName 팀 이름 - 필수값(string)
 * @param {*} cursor 커서(옵션) - null가능(number)
 * @param {*} pageSize  페이지 갯수, 0이상 값 입력 - 필수값(number)
 * @param {*} keyword 검색 키워드(옵션) - null가능(string)
 * @returns
 */
export const FindIdols19 = async (teamName = '뉴진스', cursor = null, pageSize, keyword = null) => {

  const arr = [{ cursor }, { pageSize }, { keyword }]
  let str = createQuery(arr)

  // for (let i = 0; i < arr.length; i++) {
  //   const key = Object.keys(arr[i])[0]
  //   console.log("check key : ", key);

  //   // null이 아닌 값은 쿼리로 입력
  //   if (arr[i][key]) {
  //     str += `${key}=${arr[i][key]}`
  //   }


  // }

  // 요청 URL 작성
  const requestUrl = `${mainUrl}/${encodeURIComponent(teamName)}/idols?${str}`


  // 서버에 요청
  const res = await fetch(requestUrl)
    .then((res) => {
      console.log("then : ", res)
      return res.json()
    })
    .then((data) => {
      console.log("data : ", data)
      return data
    })
    .catch(err => console.error(err))
    .finally(() => console.log("FindIdols 완료"))

  console.log(res)

  return res

}

/**
 * 특정 팀의 아이돌 차트 데이터를 조회하는 함수
 *
 * @param {string} teamName - 팀 이름 (기본값: "뉴진스") → URL 경로로 들어가므로 encodeURIComponent 처리됨
 * @param {number|null} cursor - 페이징 처리를 위한 커서 값 (null이면 첫 페이지)
 * @param {number} pageSize - 페이지당 아이템 수 (기본값: 10)
 * @param {string} gender - 성별 필터링 값 (기본값: "female")
 *
 * @returns {Promise<Object>} - 응답받은 JSON 데이터 객체
 */
export const FindIdolsCharts20 = async (teamName = '뉴진스', cursor = null, pageSize = 10, gender = 'female') => {
  const arr = [{ cursor }, { pageSize }, { gender }]
  let str = createQuery(arr);

  console.log("FindIdolsCharts20 str : ", str);

  // 요청 URL 작성
  const requestUrl = `${mainUrl}/${encodeURIComponent(teamName)}/charts/{gender}?${str}`

  // 서버에 요청
  const res = await fetch(requestUrl)
    .then((res) => {
      console.log("then : ", res)
      return res.json()
    })
    .then((data) => {
      console.log("data : ", data)
      return data
    })
    .catch(err => console.error(err))
    .finally(() => console.log("FindIdolsCharts20 완료"))

  console.log(res)

  return res
}

function createQuery(arr = []) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    const key = Object.keys(arr[i])[0]
    console.log("check key : ", key);

    // null이 아닌 값은 쿼리로 입력
    if (arr[i][key]) {
      if (Array.isArray(arr[i][key])) {
        const subArray = arr[i][key];
        for (let i = 0; i < subArray.length; i++) {
          str += `${key}=${arr[i][key]}`
          if (j + 1 < subArray.length) {
            str += '&'
          }
        }

      } else {
        str += `${key}=${arr[i][key]}`

      }
    }

    if (i + 1 < arr.length) {
      str += '&'
    }

  }

  return str
}

