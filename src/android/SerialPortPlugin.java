package com.plugins.serial;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

/**
 * This class echoes a string called from JavaScript.
 */
public class SerialPortPlugin extends CordovaPlugin {
    private final HashMap<String, SerialPortInstance> instances = new HashMap<String, SerialPortInstance>();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("open")) {
            String name = args.getString(0);
            int baudRate = args.getInt(1);
            instances.put(name, new SerialPortInstance(name, baudRate, callbackContext));
            return true;
        } else if (action.equals("close")) {
            String name = args.getString(0);
            close(name, callbackContext);
            return true;
        } else if (action.equals("send")) {
            String name = args.getString(0);
            JSONObject object = args.getJSONObject(1);
            int[] data = new int[object.length()];
            for (int i = 0; i < data.length; i++) {
                data[i] = object.getInt(String.valueOf(i));
            }
            send(name, data, callbackContext);
            return true;
        }
        return false;
    }

    private void close(String name, CallbackContext callback) {
        if (instances.containsKey(name)) {
            SerialPortInstance instance = instances.get(name);
            instance.close();
            instances.remove(name);
            callback.success();
        } else {
            callback.error(name + " isn't open");
        }
    }

    private void send(String name, int[] data, CallbackContext callbackContext) {
        if (instances.containsKey(name)) {
            SerialPortInstance instance = instances.get(name);
            instance.send(data, callbackContext);
        } else {
            callbackContext.error(name + " is closed");
        }
    }

}
