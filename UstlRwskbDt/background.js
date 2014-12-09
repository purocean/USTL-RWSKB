function GetTabIbfo(tabId, changeInfo, tab){
    // qr_tab = tab;
    if(tab.url.match(/pigai.org/i)=="pigai.org"){
        chrome.pageAction.show(tabId);
    }
    // alert(tab.url);
}

chrome.tabs.onUpdated.addListener(GetTabIbfo);