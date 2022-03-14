chrome.devtools.panels.create(
    "Refresh Guard",
    "refresh-guard16.png",
    "refreshGuard.html",
    function(panel) {
        panel.onShown.addListener(function(window){
            let code = `
            (function () {
                window.onbeforeunload = function(event){
                  var e = event || window.event;
                  // Cancel the event
                  e.preventDefault();
                  var confirmText = 'Leave site?';
                  if (e) {
                    e.returnValue = confirmText;
                  }
                  return confirmText;
                }
            })()`
            chrome.devtools.inspectedWindow.eval(code)
        });
    }
);
