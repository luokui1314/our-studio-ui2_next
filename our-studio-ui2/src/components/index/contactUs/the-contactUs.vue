<template>
    <div class="box">
        <Navigation></Navigation>
        <div class="map" id="dituContent"></div>
        <div class="information">
            <div style="position: relative; width: 100%; height: 100%;">
                <div class="QRcode">
                    <img src="../../../assets/web_img/QRcode.jpg" alt="QRcode" width="110" height="110">
                </div>
                <div class="text">
                    <p>电话：150 8593 8983</p>
                    <p>QQ：254435949</p>
                    <p>邮箱：254435949@qq.com</p>
                    <p>地址：贵州省贵阳市花溪区党武镇贵州民族大学（新校区）A6-421</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '../the-navigation'
    export default {
        name: "the-contactUs",
        components: {Navigation},
        data(){
            return{
                //标注点数组
                markerArr : [{title:"宇宙互联工作室",content:"贵州民族大学大学城校区A3（数据科学与信息工程学院）",point:"106.629788|26.376602",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
                ],
            }
        },mounted() {
            this.initMap();
           document.getElementsByClassName("box")[0].style.height = window.innerHeight - 1+ "px";
           document.getElementsByClassName("map")[0].style.height = window.innerHeight - 68+ "px";
           document.getElementsByClassName("information")[0].style.height = window.innerHeight - 68+ "px";
           document.getElementsByClassName("information")[0].style.right = "0px";
           document.getElementsByClassName("information")[0].style.filter = "alpha(Opacity=95)";
           document.getElementsByClassName("information")[0].style.opacity = 0.95;
            //console.log(window.innerHeight);
        },
        methods:{
            //创建和初始化地图函数：
            initMap(){
                this.createMap();//创建地图
                this.setMapEvent();//设置地图事件
                this.addMapControl();//向地图添加控件
                this.addMarker();//向地图中添加marker
            },//创建地图函数：
            createMap(){
                var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
                var point = new BMap.Point(106.634175,26.382261);//定义一个中心点坐标
                map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
                window.map = map;//将map变量存储在全局
            },
            //地图事件设置函数：
            setMapEvent(){
                map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
                map.enableScrollWheelZoom();//启用地图滚轮放大缩小
                map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
                map.enableKeyboard();//启用键盘上下左右键移动地图
            },
            //地图控件添加函数：
            addMapControl(){
                //向地图中添加比例尺控件
                var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT});
                map.addControl(ctrl_sca);
            },//创建marker
            addMarker(){
                for(var i=0;i<this.markerArr.length;i++){
                    var json = this.markerArr[i];
                    var p0 = json.point.split("|")[0];
                    var p1 = json.point.split("|")[1];
                    var point = new BMap.Point(p0,p1);
                    var iconImg = this.createIcon(json.icon);
                    var marker = new BMap.Marker(point,{icon:iconImg});
                    var createInfoWindow = this.createInfoWindow;
                    var iw = createInfoWindow(i);
                    var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
                    marker.setLabel(label);
                    map.addOverlay(marker);
                    label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
                    });

                    (function(){
                        var index = i;
                        var _iw = createInfoWindow(i);
                        var _marker = marker;
                        _marker.addEventListener("click",function(){
                            this.openInfoWindow(_iw);
                        });
                        _iw.addEventListener("open",function(){
                            _marker.getLabel().hide();
                        })
                        _iw.addEventListener("close",function(){
                            _marker.getLabel().show();
                        })
                        label.addEventListener("click",function(){
                            _marker.openInfoWindow(_iw);
                        })
                        if(!!json.isOpen){
                            label.hide();
                            _marker.openInfoWindow(_iw);
                        }
                    })()
                }
            },createInfoWindow(i){
                var json = this.markerArr[i];
                var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
                return iw;
            },
            createIcon(json){
                var icon = new BMap.Icon("http://49.234.9.206/timg.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
                return icon;
            }
        },
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
.box{
    position: relative;
    overflow: hidden;
    width: 100%;
}
    .map{
        width: 100%;
    }
    .information{
        position: absolute;
        transition-duration: 0.5s;
        top: 66px;
        right: -600px;
        width: 600px;
        background: url("../../../assets/web_img/contactUs01.png") no-repeat 0 -100px;
        filter:alpha(Opacity=0);
        -moz-opacity:0.95;
        opacity: 0;
    }
    .QRcode{
        width: 110px;
        height: 110px;
        position: absolute;
        top: 280px;
        right: 180px;
    }
    .text{
        position: absolute;
        width: 450px;
        height: 120px;
        top: 450px;
        right: 0px;
        font-size: 14px;
        text-align: left;
        color: #999999;
        line-height: 25px;
    }
</style>
