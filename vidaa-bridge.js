/* XuperTV VIDAA platform bridge
 * Compatibility helpers only. No portal credentials, stream interception or DRM bypass.
 */
(function (w, d) {
  'use strict';
  var ua = (w.navigator && w.navigator.userAgent) || '';
  var video = d.createElement('video');
  var platform = {
    name: /Hisense|VIDAA/i.test(ua) ? 'VIDAA' : 'HTML5',
    userAgent: ua,
    resolution: { width: w.innerWidth || 0, height: w.innerHeight || 0 },
    media: {
      mp4: !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, '')),
      hls: !!(video.canPlayType && (video.canPlayType('application/vnd.apple.mpegurl') || video.canPlayType('application/x-mpegURL')).replace(/no/, '')),
      dash: !!(video.canPlayType && video.canPlayType('application/dash+xml').replace(/no/, ''))
    },
    storage: false,
    backKeyCodes: [8, 27, 461, 10009],
    getInfo: function () {
      return {
        platform: this.name,
        viewport: this.resolution.width + ' × ' + this.resolution.height,
        mp4: this.media.mp4 ? 'sí' : 'no detectado',
        hls: this.media.hls ? 'sí' : 'no detectado',
        dash: this.media.dash ? 'sí' : 'no detectado',
        localStorage: this.storage ? 'disponible' : 'no disponible'
      };
    }
  };
  try {
    var key = '__xuper_vidaa_test__';
    w.localStorage.setItem(key, '1');
    w.localStorage.removeItem(key);
    platform.storage = true;
  } catch (e) { platform.storage = false; }
  w.XUPERTV_VIDAA = platform;
  w.addEventListener('resize', function () {
    platform.resolution.width = w.innerWidth || 0;
    platform.resolution.height = w.innerHeight || 0;
  });
  // VIDAA lifecycle callbacks are optional and are defined only if the host has not supplied them.
  if (typeof w.Hisense_onAppShow !== 'function') {
    w.Hisense_onAppShow = function () { d.dispatchEvent(new Event('xuper:appshow')); };
  }
  if (typeof w.Hisense_onAppHide !== 'function') {
    w.Hisense_onAppHide = function () { d.dispatchEvent(new Event('xuper:apphide')); };
  }
})(window, document);
