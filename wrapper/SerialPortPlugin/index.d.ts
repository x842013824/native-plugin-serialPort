import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name Serial Port Plugin
 * @description
 * This plugin open and close serial, send data
 *
 * @usage
 * ```typescript
 * import { SerialPortPlugin } from '@awesome-cordova-plugins/serial-port-plugin';
 *
 *
 * constructor(private serialPortPlugin: SerialPortPlugin) { }
 *
 */
export declare class SerialPortPlugin extends AwesomeCordovaNativePlugin {
    /**
     * @description: 打开串口
     * @param {number} name 节点名称
     * @param {number} baudrate 波特率
     * @return {*} 可观察对象, 观察串口收到的数据
     */
    init(name: string, baudrate: number): Observable<SerialPortResult>;
    /**
    * @description: 关闭某个串口
    * @param {number} name 节点名称
    * @return {*}
    */
    close(name: string): Promise<void>;
    /**
     * @description 通过串口发送数据
     * @param {string} name 节点名称
     * @param {ArrayBuffer} data 串口数据
     * @returns
     */
    send(name: string, data: ArrayBuffer): Promise<void>;
}
export interface SerialPortResult {
    /** 序号 */
    count: number;
    /** 串口收到的数据 */
    data: ArrayBuffer;
}
