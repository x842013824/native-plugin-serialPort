package com.plugins.serial;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import android_serialport_api.SerialPort;

public class SerialPortInstance {
    private static final int BUF_LEN = 512;
    // 实际的串口实例
    private SerialPort serialPort;
    // 用于上报消息的回调对象
    private CallbackContext callback = null;

    SerialPortInstance(String name, int baudRate, CallbackContext callback) {
        try {
            this.serialPort = new SerialPort(new File(name), baudRate, 0);
            this.callback = callback;
            this.startListen();
        } catch (IOException e) {
            callback.error(e.getMessage());
        }
    }

    /**
     * 开始监听串口数据
     */
    private void startListen() {
        new Thread(() -> {
            try {
                byte[] readData = new byte[BUF_LEN];
                InputStream inputStream = serialPort.getInputStream();
                int count = -1;
                while (!callback.isFinished()) {
                    int size = inputStream.read(readData);
                    if (size > 0) {
                        byte[] readBuffer = new byte[size];
                        System.arraycopy(readData, 0, readBuffer, 0, size);
                        JSONObject result = new JSONObject();
                        result.put("count", ++count % BUF_LEN);
                        result.put("data", new JSONArray(readBuffer));
                        sendKeepAliveResult(result);
                    }
                }
            } catch (IOException | JSONException e) {
                e.printStackTrace();
                callback.error(e.getMessage());
            }
        }).start();
    }

    /**
     * 上报串口信息, 并维持连接
     *
     * @param data 返回信息
     */
    private void sendKeepAliveResult(JSONObject data) {
        PluginResult result = new PluginResult(PluginResult.Status.OK, data);
        result.setKeepCallback(true);
        if (!callback.isFinished()) {
            callback.sendPluginResult(result);
        }
    }

    /**
     * 关闭串口实例, 发送结束消息
     */
    public void close() {
        serialPort.close();
        callback.error("close by call method");
    }

    /**
     * @param {Array<int> } cmd 命令数组
     * @return byte类型的数组
     * @description 将int类型的数组转换成byte类型的数组
     */
    private byte[] ints2Bytes(int[] commands) {
        byte[] bytes = new byte[commands.length];
        for (int i = 0; i < commands.length; i++) {
            bytes[i] = (byte) commands[i];
        }
        return bytes;
    }

    /**
     * 通过串口实例发送数据
     *
     * @param commands        数据
     * @param callbackContext 结果回调
     */
    public void send(int[] commands, CallbackContext callbackContext) {
        try {
            OutputStream output = serialPort.getOutputStream();
            output.write(ints2Bytes(commands));
            output.flush();
            callbackContext.success();
        } catch (IOException e) {
            e.printStackTrace();
            callbackContext.error(e.getMessage());
        }
    }

}
