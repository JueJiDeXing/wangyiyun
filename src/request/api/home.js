import service from "@/request";

/**
 * 获取首页轮播图
 */
export function getBanner() {
    return service({
        method: "GET",
        url: "banner?type=2",
    });
}

/**
 * 发现好歌单
 */
export function getFoundMusicList() {
    return service({
        method: "GET",
        url: "/personalized?limit=10",
    });
}
