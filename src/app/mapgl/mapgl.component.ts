import { Component, OnInit } from "@angular/core";

declare var BMapGL: any;
declare var $: any;

@Component ({
    selector: 'app-mapgl',
    templateUrl: './mapgl.component.html',
    styleUrls: ['./mapgl.component.scss']

})

export class MapglComponent implements OnInit {
    constructor() {

    }

    ngOnInit(): void {
        let map = new BMapGL.Map("container");
        // 创建地图实例  
        let point = new BMapGL.Point(116.404, 39.915);
        // 创建点坐标  
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
    }
}