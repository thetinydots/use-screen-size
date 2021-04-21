

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useScreenSize() {
    var _a = react.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    }), windowSize = _a[0], setWindowSize = _a[1];
    react.useEffect(function () {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return function () {
            return window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
}
function useScreenWidth() {
    var width = useScreenSize().width;
    return width;
}
function useScreenHeight() {
    var height = useScreenSize().height;
    return height;
}

exports.default = useScreenSize;
exports.useScreenHeight = useScreenHeight;
exports.useScreenWidth = useScreenWidth;
//# sourceMappingURL=useScreenSize.js.map
