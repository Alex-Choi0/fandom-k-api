
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
 * 특정 팀의 후원 아이돌 목록을 조회하는 함수
 *
 * @param {string} teamName - 팀 이름 (기본값: "뉴진스")
 *                            → URL 경로에 들어가며, 한글 등은 encodeURIComponent로 인코딩됨
 * @param {number|null} cursor - 페이징 처리를 위한 커서 값 (기본값: null)
 *                               → 다음 페이지 요청 시 전달되는 값
 * @param {number} pageSize - 페이지당 요청할 아이돌 수 (기본값: 10)
 * @param {number[]} priorityIdolIds - 우선순위 아이돌 ID 리스트 (기본값: 빈 배열)
 *                                     → 최대 5개까지 전달 가능, 선택적 query 파라미터
 *
 * @returns {Promise<Object>} - 응답받은 JSON 데이터 (성공 시 아이돌 후원 리스트 등 포함)
 */
export const FindIdolsDonation21 = async (teamName = '뉴진스', cursor = null, pageSize = 10, priorityIdolIds = [] /* priorityIdolIds에는 최대 5개의 아이돌 ID가 들어간다. */) => {
  const arr = [{ cursor }, { pageSize }, { priorityIdolIds }]
  let str = createQuery(arr);

  console.log("FindIdolsDonation21 str : ", str);

  // 요청 URL 작성
  const requestUrl = `${mainUrl}/${encodeURIComponent(teamName)}/donations?${str}`

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
    .finally(() => console.log("FindIdolsDonation21 완료"))

  console.log(res)

  return res
}


/**
 * 특정 아이돌 후원 항목에 금액을 기여(PUT)하는 함수
 *
 * @param {string} teamName - 팀 이름 (기본값: '뉴진스')
 *                            → URL에 포함되며, encodeURIComponent로 처리됨
 * @param {number} contributeId - 후원 항목 ID (필수)
 *                                → 이 ID를 기준으로 어떤 후원 항목에 기여할지 지정함
 * @param {number} amount - 후원 금액 (필수, 1 이상)
 *
 * @returns {Promise<Object>} - 서버 응답 객체 (후원 항목 상세 정보 포함)
 *
 * 응답 예시:
 * {
 *   id: 862,                         // 후원 항목 ID
 *   title: '테스트 도네이션 Title',     // 후원 제목
 *   subtitle: '테스트 도네이션 subTitle', // 후원 부제목
 *   idolId: 3621,                   // 해당 아이돌 ID
 *   targetDonation: 10000000,      // 목표 후원 금액
 *   receivedDonations: 1554,       // 현재까지 받은 금액
 *   createdAt: '2025-06-01T06:37:12.956Z', // 생성일
 *   deadline: '2025-06-13T23:59:59.000Z',  // 마감일
 *   status: true,                  // 진행 중 여부 (true: 진행 중)
 *   teamId: 28                     // 팀 ID
 * }
 *
 * @throws {Error} - contributeId 또는 amount가 유효하지 않을 경우 예외 발생
 */
export const ContributeIdolsDonations23 = async (teamName = '뉴진스', contributeId, amount) => {

  console.log("teamName : ", teamName)
  console.log("contributeId : ", contributeId)
  console.log("amount : ", amount)

  if (!contributeId) {
    throw new Error('후원ID(숫자)는 비어있을수 없습니다.')
  } else if (!amount) {
    throw new Error('후원금액(amount)는 비어있거나 음수일수 없습니다.')
  }

  // 요청 URL 작성
  const requestUrl = `${mainUrl}/${encodeURIComponent(teamName)}/donations/${contributeId}/contribute`

  // 서버에 요청
  const res = await fetch(requestUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount
    })
  })
    .then((res) => {
      console.log("then : ", res)
      return res.json()
    })
    .then((data) => {
      console.log("data : ", data)
      return data
    })
    .catch(err => console.error(err))
    .finally(() => console.log("ContributeIdolsDonations23 완료"))

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


ContributeIdolsDonations23('뉴진스', 862, 777);
