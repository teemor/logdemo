const _baseUrl = 'https://api.imjad.cn/cloudmusic/';
const _toplayUrl = 'http://musicapi.duapp.com/api.php';
export default {
  getFashion(cat, offset, limit) {
    return _toplayUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
  getSongList(id) {
    return _baseUrl + '?type=playlist&id=' + id
  },
  getSong(id) {
    return _baseUrl + '?type=url&id=' + id
  }
 
}