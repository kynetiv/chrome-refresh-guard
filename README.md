## Chrome Refresh Guard ![refresh-guard logo](refresh-guard16.png) - Chrome Browser Extension

This chrome extension can guard against navigating away from the currently inspected window as well as block any attempt to refresh the current page.
Activate the guard by inspecting the browser window ("inspect element") and visit the newly created Refresh Guard tab from the devtools window.

Notes:
- This guard will only apply to the current page / browser window being inspected.
- If you attempt to navigate or refresh, the browser will display a generic dialog popup.
  - Select "Leave" to disable the Refresh Guard and again allow all navigation and refresh to occur.
  - Select "Cancel" to block the navigation or refresh, which will keep you on the current page.

This extension is very basic and works well for simple use cases, such as:
- UI Development and making local, ephemeral modifications to the current window in chrome devtools
- Don't like websites/ other extensions auto navigating you away in general

Roadmap to Somewhere:
- Enable from status bar button instead of only devtools tab (help wanted)
