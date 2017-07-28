var codeDate = new Date();

function calcNewFajr(tRise,tMagh) {
        var newFajr = '';

        // Convert Sunrise to minutes
        var rise = new Array();
        rise = tRise.split(':');
        sunriseTime = (((rise[0]*1)*60) + (rise[1]*1));

        // Convert Maghrib to minutes
        var magh = new Array();
        magh = tMagh.split(':');
        maghribTime = (((magh[0]*1)*60) + (magh[1]*1));

        // Do a few tests and adjustments
        fajrTime = (sunriseTime - 90);

        // Then convert the result to hh:mm format
        var Hours = Math.floor(fajrTime/60);
        var Minutes = fajrTime%60;
        var Time = Hours + ":" + Minutes;
        var hours = zeroPad(Hours,2);
        var mins  = zeroPad(Minutes,2);
        var newFajr  = hours + ":" + mins;

        // Return the result
        return newFajr
    }

    function zeroPad(num,count) {
        var numZeropad = num + '';
        while(numZeropad.length < count) {
            numZeropad = "0" + numZeropad;
        }
        return numZeropad;
    }

// these two Date prototype function added from http://javascript.about.com/library/bldst.htm
    Date.prototype.stdTimezoneOffset = function() {
        var jan = new Date(this.getFullYear(), 0, 1);
        var jul = new Date(this.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }

    Date.prototype.dst = function() {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }