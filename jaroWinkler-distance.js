function jaroWinkler(x, y, caseSensitive = false) {
    var s1 = [], s2 = [], s3 = [], s4 = [];
    if(!caseSensitive)
        s1 = x.toLowerCase().split(""), s2 = y.toLowerCase().split("");
    else
        s1 = x.split(""), s2 = y.split("");
    for(var z1 = x.length;z1 >= 0;z1--)
        for(var z2 = y.length;z2 >= 0;z2--)
            if(z2 == s2.lastIndexOf(x[z1]) && s3[z1] != x[z1])
                s2.splice(s2.lastIndexOf(s3[z1] = x[z1]), 1);
    for(var z2 = y.length;z2 >= 0;z2--)
        for(var z1 = x.length;z1 >= 0;z1--)
            if(z1 == s1.lastIndexOf(y[z2]) && s4[z2] != y[z2])
                s1.splice(s1.lastIndexOf(s4[z2] = y[z2]), 1);
    s3 = s3.filter(function(a) { return a != null; });
    s4 = s4.filter(function(a) { return a != null; });
    var m = s3.length;
    var n = 0;
    for(var z = 0;z < m;z++)
        if(s3[z] != s4[z])
            n++;
    if(m > 0)
        return 1/3*(m/x.length+m/y.length+(m-n/2)/m);
    return 0;
}
