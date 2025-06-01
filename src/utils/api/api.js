
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
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    const key = Object.keys(arr[i])[0]
    console.log("check key : ", key);

    // null이 아닌 값은 쿼리로 입력
    if (arr[i][key]) {
      str += `${key}=${arr[i][key]}`
    }


  }

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

