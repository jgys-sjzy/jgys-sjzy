export interface Point{
    // lng":112.58,"lat":26.89,"url":"http://www.baidu.com","id":1,"name":"p1"
    lng:any
    lat:any
    url:any
    bridgeId:any
    bridgeName:any
    bridgeLevel:any
    bridgeScore:any
}

export let AllPoint:Point[] = 
[
    {
        lng:116.407, 
        lat:39.915,
        url:'',
        bridgeId:"$456456",
        bridgeName:"天安门",
        bridgeLevel:"1",
        bridgeScore:"90",
    },
    {
        lng:116.410442,
        lat: 39.920971,
        url:'',
        bridgeId:"$123456",
        bridgeName:"重庆大桥",
        bridgeLevel:"2",
        bridgeScore:"89",
    },
    {
        lng: 116.406073,
        lat:39.91039,
        url:'',
        bridgeId:"$123123",
        bridgeName:"上海大桥",
        bridgeLevel:"3",
        bridgeScore:"70",
    },
]