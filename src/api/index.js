import request from './http.js'

//获取所有帐套信息
export function allSeriesStory() {
    return request({
        url: '/cw/accountSet/queryAllAccount',
        method: 'post'
    })
}