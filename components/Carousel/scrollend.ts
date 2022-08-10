const supported = 'onscrollend' in window;

if (!supported) {
  const scrollendEvent = new Event('scrollend');
  const pointers = new Set();

  // Track if any pointer is active
  document.addEventListener(
    'touchstart',
    (e) => {
      for (let touch of e.changedTouches) pointers.add(touch.identifier);
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    (e) => {
      for (let touch of e.changedTouches) pointers.delete(touch.identifier);
    },
    { passive: true }
  );

  // Map of scroll-observed elements.
  let observed = new WeakMap();

  // Forward and observe calls to a native method.
  type ObserveProps = {
    proto: {};
    method: () => void;
    handler: () => void;
  };
  const observe = (proto: { [key: string]: () => void }, method: string, handler: () => void) => {
    let native = proto[method];
    proto[method] = function () {
      let args: any = Array.prototype.slice.apply(arguments, [0]);
      native.apply(this, args);
      args.unshift(native);
      handler.apply(this, args);
    };
  };

  const onAddListener = (originalFn: () => void, type: string, handler: () => void, options: {}) => {
    // Polyfill scrollend event on any element for which the developer listens
    // to 'scrollend' explicitly or 'scroll' (so that adding a scrollend listener
    // from within a scroll listener works).
    if (type != 'scroll' && type != 'scrollend') return;

    let scrollport = this;
    let data = observed.get(scrollport);
    if (data === undefined) {
      let timeout = 0;
      data = {
        scrollListener: (evt) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            if (pointers.size) {
              // if pointer(s) are down, wait longer
              setTimeout(data.scrollListener, 100);
            } else {
              // dispatch
              scrollport.dispatchEvent(scrollendEvent);
              timeout = 0;
            }
          }, 100);
        },
        listeners: 0, // Count of number of listeners.
      };
      originalFn.apply(scrollport, ['scroll', data.scrollListener]);
      observed.set(scrollport, data);
    }
    data.listeners++;
  }

  function onRemoveListener(originalFn, type, handler) {
    if (type != 'scroll' && type != 'scrollend') return;
    let scrollport = this;
    let data = observed.get(scrollport);

    // Mismatched addEventListener / removeEventListener
    // TODO: Should we explicitly track added listeners to prevent this?
    if (data === undefined) return;

    data[type]--;
    // If there are still listeners, nothing more to do.
    if (--data.listeners > 0) return;

    // Otherwise, remove the added listeners.
    originalFn.apply(scrollport, ['scroll', data.scrollListener]);
    observed.delete(scrollport);
  }

  observe(Element.prototype, 'addEventListener', onAddListener);
  observe(window, 'addEventListener', onAddListener);
  observe(document, 'addEventListener', onAddListener);
  observe(Element.prototype, 'removeEventListener', onRemoveListener);
  observe(window, 'removeEventListener', onRemoveListener);
  observe(document, 'removeEventListener', onRemoveListener);
  // TODO: Polyfill onscroll, onscrollend as well?
}
