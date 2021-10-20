//service
import Request from '@/service/index'
import axios from 'axios'


export function PostPageListData(url: string, queryInfo: any) {
  return Request.post({
    url: url,
    data: queryInfo,
  })
// return axios({
//     method:'POST',
//     url:url,
//     data:queryInfo
// })
}
