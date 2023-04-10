var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var SerialPortPlugin = /** @class */ (function (_super) {
    __extends(SerialPortPlugin, _super);
    function SerialPortPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SerialPortPlugin.prototype.open = function (name, baudrate) { return cordova(this, "open", { "observable": true }, arguments); };
    SerialPortPlugin.prototype.close = function (name) { return cordova(this, "close", {}, arguments); };
    SerialPortPlugin.prototype.send = function (name, data) { return cordova(this, "send", {}, arguments); };
    SerialPortPlugin.pluginName = "SerialPortPlugin";
    SerialPortPlugin.plugin = "";
    SerialPortPlugin.pluginRef = "native.serialPort";
    SerialPortPlugin.repo = "";
    SerialPortPlugin.install = "";
    SerialPortPlugin.installVariables = [];
    SerialPortPlugin.platforms = ["Android"];
    return SerialPortPlugin;
}(AwesomeCordovaNativePlugin));
export { SerialPortPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvU2VyaWFsUG9ydFBsdWdpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXlCSSxvQ0FBMEI7Ozs7SUFZOUQsK0JBQUksYUFBQyxJQUFZLEVBQUUsUUFBZ0I7SUFVbkMsZ0NBQUssYUFBQyxJQUFZO0lBV2xCLCtCQUFJLGFBQUMsSUFBWSxFQUFFLElBQWlCOzs7Ozs7OzsyQkF2RXRDO0VBc0NzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBTZXJpYWwgUG9ydCBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gb3BlbiBhbmQgY2xvc2Ugc2VyaWFsLCBzZW5kIGRhdGFcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlcmlhbFBvcnRQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2VyaWFsLXBvcnQtcGx1Z2luJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZXJpYWxQb3J0UGx1Z2luOiBTZXJpYWxQb3J0UGx1Z2luKSB7IH1cbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2VyaWFsUG9ydFBsdWdpbicsXG4gIHBsdWdpbjogJycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICduYXRpdmUuc2VyaWFsUG9ydCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VyaWFsUG9ydFBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb246IOaJk+W8gOS4suWPo1xuICAgKiBAcGFyYW0ge251bWJlcn0gbmFtZSDoioLngrnlkI3np7BcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhdWRyYXRlIOazoueJueeOh1xuICAgKiBAcmV0dXJuIHsqfSDlj6/op4Llr5/lr7nosaEsIOinguWvn+S4suWPo+aUtuWIsOeahOaVsOaNrlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb3BlbihuYW1lOiBzdHJpbmcsIGJhdWRyYXRlOiBudW1iZXIpOiBPYnNlcnZhYmxlPFNlcmlhbFBvcnRSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgKiBAZGVzY3JpcHRpb246IOWFs+mXreafkOS4quS4suWPo1xuICAqIEBwYXJhbSB7bnVtYmVyfSBuYW1lIOiKgueCueWQjeensFxuICAqIEByZXR1cm4geyp9XG4gICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xvc2UobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDpgJrov4fkuLLlj6Plj5HpgIHmlbDmja5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg6IqC54K55ZCN56ewXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGEg5Liy5Y+j5pWw5o2uIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZChuYW1lOiBzdHJpbmcsIGRhdGE6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsUG9ydFJlc3VsdCB7XG4gIC8qKiDluo/lj7cgKi9cbiAgY291bnQ6IG51bWJlcixcbiAgLyoqIOS4suWPo+aUtuWIsOeahOaVsOaNriAqL1xuICBkYXRhOiBBcnJheUJ1ZmZlclxufSJdfQ==