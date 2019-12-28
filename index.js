const bleno = require("bleno");

const UUID = "f5771669-b060-414d-9bbf-199d13a874bb";
const MAJOR = 2;
const MINOR = 1;
const TX_POWER = -59; //transmit power in dBm

console.log("starting ibeacon bleno");

bleno.on('stateChange', function(state) {
	console.log('on -> stateChange: ' + state);
  
	if (state === 'poweredOn') {
		bleno.startAdvertisingIBeacon(UUID, MAJOR, MINOR, TX_POWER);
		//bleno.startAdvertisingIBeacon('e2c56db5dffb48d2b060d0f5a71096e0', 0, 0, -59);
	} else {
	  bleno.stopAdvertising();
	}
  });
  
  bleno.on('advertisingStart', function() {
	console.log('on -> advertisingStart');
	console.log("Broadcasting as iBeacon:UUID:"+UUID + ",major:"+MAJOR +",minor:"+MINOR);
  });
  
  bleno.on('advertisingStop', function() {
	console.log('on -> advertisingStop');
  });
