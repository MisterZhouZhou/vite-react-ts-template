/*
 * @Author: misterzhou
 * @Date: 2022-03-23 12:56:44
 * @LastEditTime: 2022-03-23 13:05:49
 * @LastEditors: misterzhou
 * @FilePath: /vite-react-ts-template/src/api/url.ts
 * @Description:
 */
import { URL } from '../config'

export default {
	// get 随机音乐
	randomMusic: `${URL.musicUrl}/rand.music?sort=热歌榜&format=json`
}
