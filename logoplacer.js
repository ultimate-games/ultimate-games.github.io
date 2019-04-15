function ShowAdsPlaceholder() {
    var adContainer = document.getElementById("gameContainer");

    var AdsPlaceholderDiv = document.createElement("div");
    AdsPlaceholderDiv.className = 'AdsPlaceholderDiv';
    adContainer.appendChild(AdsPlaceholderDiv);

    var skipAdButton = document.createElement("div");
    skipAdButton.className = 'skipAdButton';
    adContainer.appendChild(skipAdButton);

    var skipAdTimer = document.createElement("div");
    skipAdTimer.className = 'skipAdTimer';
    adContainer.appendChild(skipAdTimer);

    if (!window.jQuery) {
        var jqueryUrl = '//web.archive.org/web/20181213135810/https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        loadScript(jqueryUrl, jqueryLoaded);
    } else {
        jqueryLoaded();
    }
}

function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        //Others
        script.onload = function() {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function jqueryLoaded() {
    showAdsPlaceholder();
}

function openY8InNewTab() {
    url = 'https://web.archive.org/web/20181213135810/https://www.y8.com/';
    var win = window.open(url, '_blank');
    win.focus();
}

function showAdsPlaceholder() {
    // must happen first to insert the framework for other inserts
    window.setTimeout(insertAdsPlaceholderDiv(), 100);

    // add skip timer text
    window.setTimeout(function() {
        insertSkipTimer(3000);
    }, 200);
    window.setTimeout(function() {
        insertSkipTimer(2000);
    }, 1000);
    window.setTimeout(function() {
        insertSkipTimer(1000);
    }, 2000);


    // add skip button and remove skip timer text
    window.setTimeout(insertSkipButton, 3000);
}

skipAdsPlaceholder = function() {
    removeAdsPlaceholderDiv();
}

function insertSkipTimer(_value) {
    var st = '<br><br>' +
        '<p style="color:white;background:transparent;border: none;top:5%;right:4.2%;position:fixed;>' +
        '<font face="Arial" size="4">' +
        'Skip Advertisement in ' + Math.floor(_value / 1000) +
        '<\/font>' +
        '<\/p>';
    $(".skipAdTimer").empty();
    $(".skipAdTimer").append(st);
}

function insertSkipButton() {
    var ss =
        '<button onclick="skipAdsPlaceholder()" style="background:transparent;border: none;top:5%;right:4.2%;position:fixed;">' +
        '<img src="js/skip.png" style="background:transparent;border: none;width:38px; height:38px;"><\/button>';
    $(".skipAdButton").append(ss);
    $(".skipAdTimer").empty();
}

function insertAdsPlaceholderDiv() {
    var gs = getAdsPlaceholderDiv();
    $(".AdsPlaceholderDiv").append(gs);
}

function removeAdsPlaceholderDiv() {
    if ($('.AdsPlaceholderDiv').length) {
        $(".AdsPlaceholderDiv").empty();
    }
    if ($('.skipAdButton').length) {
        $(".skipAdButton").empty();
    }
    if ($('.skipAdTimer').length) {
        $(".skipAdTimer").empty();
    }
}

function getAdsPlaceholderDiv() {
    return (
        '<div style="position:absolute; top: 0; left: 0; background-color:black; z-index:2147483644; overflow:auto; width:100%; height:100%; pointer-events:auto;">' +
        '<div class="skipAdButton">' +
        '<\/div>' +
        '<div class="skipAdTimer">' +
        '<\/div>' +
        '<div style="text-align:center;position: relative;' +
        'top:30%;' +
        'z-index:2147483645;">' +
        '<div>' +
        '<button onclick="openY8InNewTab()">' +
        '<img src="/y8-studio/unity/config/shared/gamebreak/placeholder.png" style="background:transparent; border:none; width:300px; height:250px;"><\/button>' +
        '<\/div>' +
        '<\/div>' +
        '<\/div>'
    );
}

/*
     FILE ARCHIVED ON 13:58:10 Dec 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:48:34 Apr 15, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 86.899 (3)
  esindex: 0.01
  captures_list: 111.4
  CDXLines.iter: 12.188 (3)
  PetaboxLoader3.datanode: 59.108 (5)
  exclusion.robots: 0.164
  exclusion.robots.policy: 0.154
  RedisCDXSource: 6.623
  PetaboxLoader3.resolve: 72.172 (4)
  load_resource: 73.18
*/
