var utf8Encodings = [
  'utf8',
  'utf-8',
  'unicode-1-1-utf-8'
];
if (typeof TextEncoder === "undefined") {
    function TextEncoder(encoding) {
        if (utf8Encodings.indexOf(encoding) < 0 && typeof encoding !== 'undefined' && encoding != null) {
            throw new RangeError('Invalid encoding type. Only utf-8 is supported');
        }
        this.encoding = 'utf-8';
    }
    TextEncoder.prototype.encode = function encode(str) {
        if (typeof str !== 'string') {
            throw new TypeError('passed argument must be of tye string');
        }
        var binstr = unescape(encodeURIComponent(str));
        var arr = new Uint8Array(binstr.length);
        const split = binstr.split('');
        for (let i = 0; i < split.length; i++) {
            arr[i] = split[i].charCodeAt(0);
        }
        return arr;
    };
}
if (typeof TextDecoder === "undefined") {
    function TextDecoder(encoding, options) {
        if (utf8Encodings.indexOf(encoding) < 0 && typeof encoding !== 'undefined' && encoding != null) {
            throw new RangeError('Invalid encoding type. Only utf-8 is supported');
        }
        this.fatal = options != null && options.fatal === true;
        this.ignoreBOM = options != null && options.ignoreBOM === true;
        this.encoding = 'utf-8';
    }
    TextDecoder.prototype.decode = function (view, options) {
        if (typeof view === 'undefined') {
            return '';
        }
        var stream = (typeof options !== 'undefined' && stream in options) ? options.stream : false;
        if (typeof stream !== 'boolean') {
          throw new TypeError('stream option must be boolean');
        }
        if (!ArrayBuffer.isView(view)) {
            throw new TypeError('passed argument must be an array buffer view');
        }
        else {
            var arr = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
            var charArr = new Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                charArr[i] = String.fromCharCode(arr[i]);
            }
            return decodeURIComponent(escape(charArr.join('')));
        }
    };
}

module.exports = {
    TextEncoder: TextEncoder,
    TextDecoder: TextDecoder
};