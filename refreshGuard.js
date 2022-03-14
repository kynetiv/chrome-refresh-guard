chrome.devtools.panels.create(
    "Refresh Guard",
    "refresh-guard16.png",
    "refreshGuard.html",
    function(panel) {
        panel.onShown.addListener(function(window){
            let code = `
            (function () {
                window.onbeforeunload = function(){
                  return "Leave site?";
                }
            })()`
            chrome.devtools.inspectedWindow.eval(code)
        });
    }
);
