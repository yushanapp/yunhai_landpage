function gethost(){
    var result;
    const host = {
        pro: 'http://api.youshihui.com.cn',
        local: 'http://192.168.0.176:8012'
    };
    if (location.hostname.match(/.*localhost/i)) {
        result = host.local;
    } else if(location.hostname.match(/.*w.youshihui/i)){
        result = host.pro;
    }else if(location.hostname.match(/.*m.youshihui/i)){
        result = host.pro;
    }
    else {
        result = host.pro;
    }
    return result;
}